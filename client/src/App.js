import React, { useState } from 'react';
import SignIn from './Components/Modals/SignIn'
import SignUp from './Components/Modals/SignUp'
import './App.css';
import "./antd.css"

const App = () => {
  const [signInVisible, setSignInVisible] = useState(false)
  const [signUpVisible, setSignUpVisible] = useState(false)

  return (
    <>
      <button onClick={() => {
        setSignUpVisible(false)
        setSignInVisible(true)
      }}>sign in</button>
      <button onClick={() => {
        setSignInVisible(false)
        setSignUpVisible(true)
      }}>sign out</button>
      <SignIn visible={signInVisible} setVisible={setSignInVisible}/>
      <SignUp visible={signUpVisible} setVisible={setSignUpVisible} />

      
    </>


  )
}

export default App;
