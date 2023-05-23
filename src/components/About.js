import React, { useEffect } from 'react'
import PageHero from "./PageHero"
import about from "../assets/about.jpg"
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'

const About = ({title}) => {
 const { t } = useTranslation()
const location = useLocation()
useEffect(() => {
  window.scrollTo(0, 0)
}, [location])
  return (
    <div className='about'>
      <PageHero title={`Á propos`} />
      <div className='about-details section-center'>
        <div className='about-container'>
          <article>
            <img src={about} alt='' />
          </article>
          <article>
            <h3>{t('about.title')}</h3>
            <div className='underline'></div>
            <p>{t('about.description')}</p>
          </article>
        </div>
      </div>
    </div>
  )
}

export default About
