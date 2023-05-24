  import React, { useState, useEffect } from 'react'
  import { useLocation, useNavigate, useParams } from 'react-router-dom'
  import WhatsAppWidget from './WhatsApp'
  import 'react-whatsapp-widget/dist/index.css'
  import { useDispatch, useSelector } from 'react-redux'
  import { listProductDetails } from '../actions/productAction'
  import { formatPrice } from '../utils/helpers'
  import ProductImages from './ProductImages'
  import { withTranslation } from 'react-i18next'
import PageHero from './PageHero'
import Loading from './Loading'
import Error from './Error'

  const ProductDetails = ({ t }) => {
    const [qty, setQty] = useState(1)
    const { id } = useParams()
    const location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [showWhatsAppWidget, setShowWhatsAppWidget] = useState(false)
    const productDetails = useSelector((state) => state.productDetails)
    const { loading, error, product } = productDetails
    const [selectedSize, setSelectedSize] = useState('')
    const [selectedColor, setSelectedColor] = useState('')

    useEffect(() => {
      dispatch(listProductDetails(id, true))
    }, [dispatch, id])

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [location])

    const handleAddToCart = () => {
      if (selectedSize && selectedColor) {
        const message = `je veux acheter ${product.name} x${qty} - Size: ${selectedSize}, Color: ${selectedColor}`
        const url = `https://wa.me/+221777081351?text=${encodeURIComponent(
          message
        )}`
        window.open(url, '_blank')
      }
    }

    return (
      <div className='container-singleProduct'>
        <PageHero title={product.name} />
        {loading ? (
          <h2>
            <Loading />
          </h2>
        ) : error ? (
          <h2>
            <Error />
          </h2>
        ) : (
          <div className='row section-center'>
            <div className='col-md-6'>
              {product && product.img ? (
                <ProductImages images={product.img} />
              ) : null}
            </div>
            <div className='col-md-6'>
              <article>
                <div className='singleProduct-details'>
                  <div className='row'>
                    <div className='col'>
                      <h3>{product.name}</h3>
                      <div className='s-p'>
                        <h3>{formatPrice(product.price)}</h3>
                        <p>{product.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article className='cartDetails'>
                <div className='row'>
                  <div className='col'>{t('productDetails.price')}:</div>
                  <div className='col'>{formatPrice(product.price)}</div>
                </div>
                <div className='row'>
                  <div className='col'>{t('productDetails.color')}:</div>
                  <div className='col color-container'>
                    {product.colors &&
                      product.colors.map((color, index) => (
                        <span
                          key={index}
                          style={{
                            backgroundColor: color,
                            border:
                              selectedColor === color
                                ? '2px solid #000'
                                : 'none',
                          }}
                          className='color-badge'
                          onClick={() => setSelectedColor(color)}
                        ></span>
                      ))}
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>{t('productDetails.size')}:</div>
                  <div className='col size-container'>
                    {product.sizes &&
                      product.sizes.map((size, index) => (
                        <span
                          key={index}
                          className={`size-item ${
                            selectedSize === size ? 'active' : ''
                          }`}
                          onClick={() => setSelectedSize(size)}
                        >
                          {size}
                        </span>
                      ))}
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>{t('productDetails.status')}:</div>
                  <div className='col'>
                    {product.stock > 0
                      ? t('productDetails.inStock')
                      : t('productDetails.outOfStock')}
                  </div>
                </div>
                {product.stock > 0 && (
                  <div className='list-group-item'>
                    <div className='row'>
                      <div className='col'>{t('productDetails.qty')}:</div>
                      <div className='col'>
                        <select
                          className='form-control select'
                          value={qty}
                          onChange={(e) => {
                            const newQty = Number(e.target.value)
                            if (!isNaN(newQty)) {
                              setQty(newQty)
                            }
                          }}
                        >
                          {[...Array(product.stock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                )}
                <div className='list-group-item'>
                  <button
                    onClick={handleAddToCart}
                    className={`whatsapp-button ${
                      selectedSize && selectedColor ? '' : 'disabled'
                    }`}
                    disabled={!selectedSize || !selectedColor}
                  >
                    {t('productDetails.buyWhatsApp')}
                  </button>
                  {showWhatsAppWidget && (
                    <WhatsAppWidget
                      phoneNumber='+221777081351'
                      message={`je veux acheter ${product.name}`}
                    />
                  )}
                </div>
              </article>
            </div>
          </div>
        )}
      </div>
    )
  }

  export default withTranslation()(ProductDetails)
