import React, { useEffect } from 'react'
import Slider from './Slider'
import TopSlider from './TopSlider'
import Categories from './Categories'
import LastCategories from './LastCategories'
import Reviews from './Reviews'
import Featured from "./Featured"
import { useLocation } from 'react-router-dom'
import HeaderVideo from './HeaderVideo'
const Home = () => {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <div>
      <Slider intervalTime={3000} />
      <TopSlider/>
      <Categories/>
      <Featured/>
      <LastCategories/>
      <HeaderVideo/>
      <Reviews/>
    </div>
  )
}

export default Home