import { useState } from "react"
import { createContainer } from "unstated-next"

function useExchange() {
  let [page, setPage] = useState('home')

  return { page, setPage }
}

let ExchangeState = createContainer(useExchange)

export default ExchangeState