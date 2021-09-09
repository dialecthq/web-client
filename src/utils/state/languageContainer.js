import { useState } from 'react'
import { createContainer } from 'unstated-next'
import strings from 'Utils/data/strings'

function useLanguage() {
  const [language, setLanguage] = useState(
    window.localStorage.getItem('language') || strings.getInterfaceLanguage()
  )

  return { language, setLanguage }
}

const LanguageContainer = createContainer(useLanguage)

export default LanguageContainer
