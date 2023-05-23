import React from 'react'
import { Link } from 'react-router-dom'
import { withTranslation } from 'react-i18next'

const PageHero = ({ title, product, t }) => {
  return (
    <div className='page-hero'>
      <div className='section-center'>
        <h3>
          <Link to={`/`}>{t('pageHero.home')}</Link>
          {product && <Link to={`/products`}>/ {t('pageHero.shop')}</Link>}/
          {title}
        </h3>
      </div>
    </div>
  )
}

export default withTranslation()(PageHero)
