import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productAction'
import PageHero from './PageHero'
import { Link, useLocation } from 'react-router-dom'
import Loading from './Loading'
import Error from './Error'
import { formatPrice } from '../utils/helpers'
import { withTranslation } from 'react-i18next'

const Product = ({ title, t }) => {
  const dispatch = useDispatch()
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])
  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  const [showSecondImage, setShowSecondImage] = useState(false)

  const handleHover = () => {
    setShowSecondImage(true)
  }

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    )
  }

  if (error) {
    return (
      <div>
        <Error />
      </div>
    )
  }

  return (
    <div className='products '>
      <PageHero title={t('boutique')} />
      <div className='product-details section-center'>
        <h2>{t('commentAiderAujourdHui')}</h2>
        <div className='container-products'>
          {products.map((product) => (
            <div className='item' key={product.id}>
              <Link to={`/products/${product.id}`}>
                <div className='image-container'>
                  <img src={product.img[0]} alt='' onMouseEnter={handleHover} />
                  {showSecondImage && (
                    <img src={product.img[1]} alt='' className='second-image' />
                  )}
                </div>
              </Link>
              <h3>{product.name}</h3>
              <p>{formatPrice(product.price)}</p>
              <p>{product.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default withTranslation()(Product)
