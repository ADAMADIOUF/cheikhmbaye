import React from 'react'
import l1 from '../assets/l1.png'
import { FaStar, FaRegStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { withTranslation } from 'react-i18next'

const LastCategories = ({ t }) => {
  const rating = 4.5 // Initial rating value

  return (
    <div className='last-categories section-center'>
      <div className='last-categories-container'>
        <article>
          <img src={l1} alt='' />
        </article>
        <article>
          <h3>{t('lastCategories.title')}</h3>
          <p>{t('lastCategories.description1')}</p>
          <Link to={`/shop`}>
            <button type='button' className='btn last-categories-btn'>
              {t('lastCategories.buttonText')}
            </button>
          </Link>
          <div className='star-rating'>
            {[...Array(5)].map((_, index) => (
              <span key={index}>
                {index < rating ? (
                  <FaStar className='star-filled' />
                ) : (
                  <FaRegStar className='star-empty' />
                )}
              </span>
            ))}
          </div>
          <p>{t('lastCategories.description2')}</p>
        </article>
      </div>
      <hr />
    </div>
  )
}

export default withTranslation()(LastCategories)
