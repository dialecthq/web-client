import { useState } from "react"
import { createContainer } from "unstated-next"

function useUser() {
  let [user, setUser] = useState(null)

  return { user, setUser }
}

let User = createContainer(useUser)

export default User