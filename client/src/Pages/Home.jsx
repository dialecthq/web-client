import React, {useState, useEffect} from 'react'
import axios from 'axios'
import SignIn from '../Components/Modals/SignIn'
import SignUp from '../Components/Modals/SignUp'
import User from '../Containers/userContainer'

const App = () => {
  const [signInVisible, setSignInVisible] = useState(false)
  const [signUpVisible, setSignUpVisible] = useState(false)
  let user = User.useContainer()

  useEffect(() => {
    if(!user.user) {
      axios.get('http://localhost:9000/user').then((data) => {
          if(data.data.user) {
              user.setUser(data.data.user)
          } 
      })
    }
  }, [user])

  return (
    <>
      <button onClick={() => {
        if(user.user){
          axios.get('http://localhost:9000/user/signout').then((data) => {
            console.log(data)
            user.setUser(null)
          }).catch((error) => {
            console.log(error)
          })
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