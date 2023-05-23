import React from 'react'
import { FaLocationArrow, FaShieldAlt, FaClock, FaTruck } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const TopSlider = () => {
  const { t } = useTranslation()

  return (
    <div className='top-slider'>
      <div className='item'>
        <FaLocationArrow className='icon' />
        <h3>{t('topSlider.location')}</h3>
        <p>{t('topSlider.locationDetails')}</p>
      </div>
      <div className='item'>
        <FaShieldAlt className='icon' />
        <h3>{t('topSlider.paymentSecurity')}</h3>
        <p>{t('topSlider.paymentSecurityDetails')}</p>
      </div>
      <div className='item'>
        <FaClock className='icon' />
        <h3>{t('topSlider.assistance')}</h3>
        <p>{t('topSlider.assistanceDetails')}</p>
      </div>
      <div className='item'>
        <FaTruck className='icon' />
        <h3>{t('topSlider.shipping')}</h3>
        <p>{t('topSlider.shippingDetails')}</p>
      </div>
    </div>
  )
}

export default TopSlider
