import axios from 'axios';

const signIn = () => {
  console.log('get');
};

const signOut = (user) => {
  axios.get('http://localhost:9000/user/signout').then(() => {
    user.setUser(null);
  }).catch((error) => {
    console.log(error);
  });
};

const getUser = () => {
  console.log('get');
};

export { signIn, signOut, getUser };
