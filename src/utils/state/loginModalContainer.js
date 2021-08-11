import { useState } from 'react'
import { createContainer } from 'unstated-next'

function useLoginModal() {
  const [page, setPage] = useState('home')

  return { page, setPage }
}

const LoginModalContainer = createContainer(useLoginModal)

export default LoginModalContainer
