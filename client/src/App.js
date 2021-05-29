import React, { useState } from 'react';
import SignIn from './Components/Modals/SignIn'
import './App.css';
import "./antd.css"

const App = () => {
  const [signInVisible, setSignInVisible] = useState(false)

  return (
    <>
      <button onClick={() => {
        setSignInVisible(true)
      }}>sign in</button>
      <button>sign out</button>
      <SignIn visible={signInVisible} setVisible={setSignInVisible}/>
      
    </>


  )
}

export default App;
