import React from 'react'

class TopNav extends React.Component {
  render() {
    return (
      <div className='top-nav'>
        <marquee
          behavior='scroll'
          direction='left'
          scrollamount='5'
          loop='infinite'
        >
          <span className='promo'>Bienvenue chez Awa Gueye Couture</span>
          <span className='phone'>Phone: +221 77 708 13 51</span>
        </marquee>
      </div>
    )
  }
}

export default TopNav
