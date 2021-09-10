/* eslint-disable no-shadow */
/* eslint-disable max-len */
import { useState } from 'react'
import { createContainer } from 'unstated-next'
import firebase from 'firebase'
import {
  uniqueNamesGenerator, adjectives, colors, animals
} from 'unique-names-generator'
import fire from '../fire'
import strings from '../data/strings'
import rooms from '../data/rooms'

function useUser() {
  const [user, setUser] = useState(null)

  return {
    user,
    setUser
  }
}

const User = createContainer(useUser)

export default User
