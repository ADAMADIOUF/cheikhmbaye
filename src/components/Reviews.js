import React, { useState, useEffect } from 'react'
import { FaStar } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const Reviews = () => {
  const { t } = useTranslation()

  const reviewsData = [
    {
      id: 1,
      name: t('reviews.customer1Name'),
      rating: 4.5,
      review: t('reviews.customer1Review'),
    },
    {
      id: 2,
      name: t('reviews.customer2Name'),
      rating: 5,
      review: t('reviews.customer2Review'),
    },
  ]

  const [currentReview, setCurrentReview] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prevReview) => (prevReview + 1) % reviewsData.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const { name, rating, review } = reviewsData[currentReview]

  return (
    <div className='reviews'>
      <h2>{t('reviews.customerReviews')}</h2>
      <div className='review-card'>
        <h3>{name}</h3>
        <div className='rating'>
          {[...Array(5)].map((_, index) => (
            <span key={index}>
              {index < rating ? (
                <FaStar className='star-filled' />
              ) : (
                <FaStar className='star-empty' />
              )}
            </span>
          ))}
        </div>
        <p>{review}</p>
      </div>
    </div>
  )
}

export default Reviews
