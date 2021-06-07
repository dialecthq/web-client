import React, { useState } from 'react';
import SignIn from './Components/Modals/SignIn'
import SignUp from './Components/Modals/SignUp'
import User from './Containers/userContainer'
import './App.less';

const App = () => {
  const [signInVisible, setSignInVisible] = useState(false)
  const [signUpVisible, setSignUpVisible] = useState(false)
  let user = User.useContainer()
  console.log(user.user)

  return (
    <>
      <button onClick={() => {
        setSignInVisible(true)
      }}>sign in</button>
      <button onClick={() => {
        setSignUpVisible(true)
      }}>register</button>
      <button onClick={() => {
        user.signOut()
      }}>sign out</button>
      <SignIn visible={signInVisible} setVisible={setSignInVisible} setSignUpVisible={setSignUpVisible}/>
      <SignUp visible={signUpVisible} setVisible={setSignUpVisible} setSignInVisible={setSignInVisible}/>
      {user?.user?.username || 'not signed in'}
    </>


  )
}

export default App;
