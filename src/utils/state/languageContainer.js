import { useEffect, useState } from "react"
import { createContainer } from "unstated-next"
import strings from "../data/strings"

function useLanguage() {
  const [language, setLang] = useState(strings.getInterfaceLanguage())

  useEffect(() => {
    if (typeof window != null) {
      setLang(window.localStorage.getItem("language") || strings.getInterfaceLanguage())
    }
  }, [])

  useEffect(() => {
    strings.setLanguage(language)
  }, [language])

  const setLanguage = (input) => {
    if (typeof window != null) {
      window.localStorage.setItem("language", input)
      setLang(input)
    }
  }

  return { language, setLanguage }
}

const LanguageContainer = createContainer(useLanguage)

export default LanguageContainer
