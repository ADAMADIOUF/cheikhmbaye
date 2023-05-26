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
  const [visibleProducts, setVisibleProducts] = useState(9) // Number of products to display initially
  const productsPerPage = 9 // Number of products to load per page

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

  const loadMoreProducts = () => {
    setVisibleProducts((prevCount) => prevCount + productsPerPage)
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
    <div className='products'>
      <PageHero title={t('boutique')} />
      <div className='product-details section-center'>
        <h2>{t('commentAiderAujourdHui')}</h2>
        <div className='container-products'>
          {products.slice(0, visibleProducts).map((product) => (
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
             
            </div>
          ))}
        </div>
        {visibleProducts < products.length && (
          <button onClick={loadMoreProducts} className='load-more'>
            Charger plus
          </button>
        )}
      </div>
    </div>
  )
}

export default withTranslation()(Product)
