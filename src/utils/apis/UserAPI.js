import firebase from "firebase";
import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} from "unique-names-generator";
import fire from "../fire";
import strings from "../data/strings";
import rooms from "../data/rooms";

export const validate = (_, value, field) => {
  const result = new Promise((resolve, reject) => {
    if (!value) {
      resolve(true);
    }

    fire
      .firestore()
      .collection("users")
      .where(field, "==", value)
      .get()
      .then((querySnapshot) => {
        const available = querySnapshot.docs.length === 0;

        if (!available) {
          reject(new Error("not available"));
        }

        resolve(true);
      })
      .catch((error) => {
        reject(error);
      });
  });
  return result;
};
export const edit = (parameters) => {
  const result = new Promise((resolve, reject) => {
    fire
      .firestore()
      .collection("users")
      .doc(fire.auth().currentUser.uid)
      .update(parameters)
      .then(() => {
        fire
          .firestore()
          .collection("users")
          .doc(fire.auth().currentUser.uid)
          .get()
          .then((document) => {
            resolve(document.data());
          })
          .catch((error) => {
            reject(error);
          });
      })
      .catch((error) => {
        reject(error);
      });
  });
  return result;
};
export const logout = () => {
  const result = new Promise((resolve, reject) => {
    fire
      .auth()
      .signOut()
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
  return result;
};
export const login = (email, password) => {
  const result = new Promise((resolve, reject) => {
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
  return result;
};
export const removeAvatarURL = () =>
  fire.firestore().collection("users").doc(fire.auth().currentUser.uid).update({
    avatarURL: null,
  });

export const uploadAvatarUrl = async (user, file, onSuccess, onError) => {
  const storage = fire.storage();
  const metadata = {
    contentType: file.type,
  };
  const storageRef = await storage.ref();
  const imgFile = storageRef.child(
    `${fire.auth().currentUser.uid}/profile.png`
  );
  try {
    const image = await imgFile.put(file, metadata);
    const avatarURL = await imgFile.getDownloadURL();
    await fire.firestore().collection("users").doc(user.uid).update({
      avatarURL,
    });
    onSuccess(null, image);
    return fire.firestore().collection("users").doc(user.uid).get();
  } catch (e) {
    onError(e);
    return e;
  }
};

export const deleteLanguage = async (user, key) => {
  await fire
    .firestore()
    .collection("users")
    .doc(fire.auth().currentUser.uid)
    .update({
      languages: user.languages.filter((e) => e.key !== key),
    });
};
export const checkTokens = async () => {
  const document = await fire
    .firestore()
    .collection("users")
    .doc(fire.auth().currentUser.uid)
    .get();
  const { tokens } = document.data();
  return tokens > 0;
};

export const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      const { additionalUserInfo, user } = result;
      const username = uniqueNamesGenerator({
        dictionaries: [adjectives, colors, animals],
        separator: "-",
        length: 3,
      });
      const inferredNativeLanguage = rooms.filter((e) =>
        strings.getLanguage().includes(e.code)
      )[0];
      const languages = [{ key: inferredNativeLanguage.key, level: 7 }];
      if (additionalUserInfo.isNewUser) {
        fire
          .firestore()
          .collection("users")
          .doc(user.uid)
          .set({
            uid: user.uid,
            name: additionalUserInfo.profile.name,
            username,
            email: user.email,
            tokens: 10,
            languages,
          })
          .then(() => {
            window.location = "/exchange";
          });
      } else {
        window.location = "/exchange";
      }
    })
    .catch((error) => {
      console.log(error.message);
    });
};
