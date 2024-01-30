import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is an online plateform that facilitates
            the buying and selling of products or services over the internet.
            it serves as a virtual marketplace where business and individuals
            can showcase their products, interact with customers, and
            conduct transitions without the need for a physical presence.
            E-commerce website have gained immense popularity due to their convenience, accessibility, and the global reach they offer.
            </p>
            <p>
             E-commerce website typically display products or services
             along with detailed description image
             , prices and any available variations(eg.sizes,colors).
             Each product usually has its own dedicated page with relevant information.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox