import { useState } from 'react'
import { createContainer } from 'unstated-next'
import strings from '../data/strings'

function useLanguage() {
  const [language, setLanguage] = useState(strings.getInterfaceLanguage())

  return { language, setLanguage }
}

const LanguageContainer = createContainer(useLanguage)

export default LanguageContainer
