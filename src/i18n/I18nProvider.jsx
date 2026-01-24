import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { translations } from './translations'

const I18nContext = createContext(null)

function getByPath(obj, path) {
  return path.split('.').reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), obj)
}

function interpolate(str, vars = {}) {
  return str.replace(/\{\{(\w+)\}\}/g, (_, key) => {
    const val = vars[key]
    return val === undefined || val === null ? '' : String(val)
  })
}

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = window.localStorage.getItem('lang')
    return saved === 'en' || saved === 'sv' ? saved : 'sv'
  })

  useEffect(() => {
    window.localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo(() => {
    const dict = translations[lang] || translations.sv
    const t = (key, vars) => {
      const v = getByPath(dict, key)
      if (v === undefined) return key
      if (typeof v === 'string') return interpolate(v, vars)
      return v
    }
    return { lang, setLang, t }
  }, [lang])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}

