import React, { useState, useEffect } from 'react'
import sliderData from '../dataSlider'

const Slider = ({ intervalTime }) => {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % sliderData.length)
    }, intervalTime)

    return () => clearInterval(interval)
  }, [intervalTime])

  return (
    <div className='slider'>
      <div className='slides-container'>
        {sliderData.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === activeSlide ? 'active' : ''}`}
          >
            <img src={slide.img} alt='' className='slide-image' />
            {/* <div className='slider-details'>
              <p>{slide.desc}</p>
            </div> */}
          </div>
        ))}
      </div>
      <div className='dots-container'>
        {sliderData.map((slide, index) => (
          <div
            key={index}
            className={`dot ${index === activeSlide ? 'active' : ''}`}
            onClick={() => setActiveSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default Slider
