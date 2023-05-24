import React from 'react'
import { withTranslation, useTranslation } from 'react-i18next'

import { FaFlag } from 'react-icons/fa'

function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value
    i18n.changeLanguage(selectedLanguage)
  }

  return (
    <select
      className='my-select'
      style={{ background: 'aqua', color: 'black' }}
      onChange={handleLanguageChange}
    >
      <option value='en'>
        <FaFlag className='flag-icon' /> English🇺🇸
      </option>
      <option value='fr'>
        <FaFlag className='flag-icon' /> Français🇫🇷
      </option>
    </select>
  )
}

export default withTranslation()(LanguageSwitcher)
