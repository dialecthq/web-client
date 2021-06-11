import React, {useState} from 'react'
import SignIn from '../Components/Modals/SignIn'
import SignUp from '../Components/Modals/SignUp'
import User from '../Containers/userContainer'

const App = () => {
  const [signInVisible, setSignInVisible] = useState(false)
  const [signUpVisible, setSignUpVisible] = useState(false)
  let user = User.useContainer()

  return (
    <>
      <button onClick={() => {
        if(user.user){
          user.setUser(null)
        } else {
          setSignInVisible(true)
        }
      }}>{user.user ? 'sign out' : 'sign in'}</button>
      {!user.user &&(<button onClick={() => {
        setSignUpVisible(true)
      }}>register</button>)}


      <SignIn visible={signInVisible} setVisible={setSignInVisible} setSignUpVisible={setSignUpVisible}/>
      <SignUp visible={signUpVisible} setVisible={setSignUpVisible} setSignInVisible={setSignInVisible}/>
      {user.user ? `@${user?.user?.username}` :  'not signed in'}
    </>


  )
}

export default App