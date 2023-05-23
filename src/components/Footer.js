import React from 'react'
import { FaEnvelope, FaTiktok, FaFacebook } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { withTranslation } from 'react-i18next'

const Footer = ({ t }) => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <h4>{t('footer.title')}</h4>
        <p>
          {t('footer.address')}
          <br />
          {t('footer.phone')}
          <br />
          {t('footer.email')}{' '}
          <Link to='mailto:info@awagueyecouture.com'>
            info@awagueyecouture.com
          </Link>
        </p>
        <div className='footer-links'>
          <a
            href='https://www.gmail.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaEnvelope className='icon' />
          </a>
          <a
            href='https://www.tiktok.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaTiktok className='icon' />
          </a>
          <a
            href='https://www.facebook.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaFacebook className='icon' />
          </a>
        </div>
        <div className='newsletter'>
          <h4>{t('footer.newsletter')}</h4>
          <form>
            <input
              type='email'
              placeholder={t('footer.emailPlaceholder')}
              required
            />
            <button type='submit'>{t('footer.subscribe')}</button>
          </form>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>
          &copy; {new Date().getFullYear()} Awa Gueye Couture.{' '}
          {t('footer.allRightsReserved')}
        </p>
      </div>
    </footer>
  )
}

export default withTranslation()(Footer)
