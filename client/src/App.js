import React, { useState } from 'react';
import SignIn from './Components/Modals/SignIn'
import SignUp from './Components/Modals/SignUp'
import './App.less';

const App = () => {
  const [signInVisible, setSignInVisible] = useState(false)
  const [signUpVisible, setSignUpVisible] = useState(false)

  return (
    <>
      <button onClick={() => {
        setSignInVisible(true)
      }}>sign in</button>
      <button onClick={() => {
        setSignUpVisible(true)
      }}>sign out</button>
      <SignIn visible={signInVisible} setVisible={setSignInVisible} setSignUpVisible={setSignUpVisible}/>
      <SignUp visible={signUpVisible} setVisible={setSignUpVisible} setSignInVisible={setSignInVisible}/>

      
    </>


  )
}

export default App;
