import React, { useState } from "react"
import { createContainer } from "unstated-next"

function useUser() {
  let [user, setUser] = useState(null)

  let signIn = (newUser) => {
    setUser(newUser)
  }
  let signOut = () => {
    setUser(null)
    }

  return { user, signIn, signOut }
}

let User = createContainer(useUser)

export default User