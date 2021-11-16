/* eslint-disable no-shadow */
/* eslint-disable max-len */
import { useState, useEffect } from "react";
import { createContainer } from "unstated-next";
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
import axios from "axios";

function useUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [premium, setPremium] = useState(false);

  const authStateChanged = async (authState) => {
    if (!authState) {
      setUser(null);
      setLoading(false);
      return;
    }

    if (user) return;

    setLoading(true);
    const userRef = await axios.get("/api/user/get_user", {
      query: {
        id: authState.uid,
      },
    });

    if (typeof window !== undefined) {
      window.analytics.identify(userRef.id, {
        ...userRef,
      });
    }

    setUser(userRef);
    setLoading(false);
  };

  // listen for Firebase state change
  useEffect(() => {
    const unsubscribe = fire.auth().onAuthStateChanged(authStateChanged);
    return () => unsubscribe();
  }, []);

  return {
    user,
    setUser,
    loading,
  };
}

const User = createContainer(useUser);

export default User;
