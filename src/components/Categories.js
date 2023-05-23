import React from 'react'
import { Link } from 'react-router-dom'
import { withTranslation } from 'react-i18next'
import c1 from '../assets/c1.jpg'
import c2 from '../assets/c2.jpg'
import c3 from '../assets/c3.jpg'
import c4 from '../assets/c4.jpg'

const Categories = ({ t }) => {
  return (
    <div className='categories section-center'>
      <div className='categories-container'>
        <article>
          <h2>{t('categories.collection1Title')}</h2>
          <h3>{t('categories.collection1Subtitle')}</h3>
          <p>{t('categories.collection1Description')}</p>
          <Link to={`/shop`}>
            <button type='button' className='btn btn-categories'>
              {t('categories.shopNow')}
            </button>
          </Link>
        </article>
        <article className='img-categories'>
          <img src={c1} alt='' />
        </article>
        <article className='img-categories'>
          <img src={c2} alt='' />
        </article>
        <article className='img-categories'>
          <img src={c3} alt='' />
        </article>
        <article className='img-categories'>
          <img src={c4} alt='' />
        </article>
        <article>
          <h2>{t('categories.collection2Title')}</h2>
          <h3>{t('categories.collection2Subtitle')}</h3>
          <p>{t('categories.collection2Description')}</p>
          <Link to={`/shop`}>
            <button type='button' className='btn btn-categories'>
              {t('categories.shopNow')}
            </button>
          </Link>
        </article>
      </div>
    </div>
  )
}

export default withTranslation()(Categories)
