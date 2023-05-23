import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productAction'
import { withTranslation } from 'react-i18next'
import PageHero from './PageHero'
import { Link } from 'react-router-dom'
import { formatPrice } from '../utils/helpers'

const Product = ({ title, t }) => {
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, featured_products: products } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  const [showSecondImage, setShowSecondImage] = useState(false)

  const handleHover = () => {
    setShowSecondImage(true)
  }

  if (loading) {
    return <div>{t('product.loading')}</div>
  }

  if (error) {
    return (
      <div>
        {t('product.error')}: {error}
      </div>
    )
  }

  return (
    <div className='products'>
      <div className='product-details section-center'>
        <h2>{t('product.bestSellers')}</h2>
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
              <p>
                {t('product.price')}: {formatPrice(product.price, t)}
              </p>
              <p>
                {t('product.description')}: {product.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default withTranslation()(Product)
