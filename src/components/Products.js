import React from 'react'
import './product.css'

function Products() {
  return (
    <div className='row product-container'>
        <div className='col-md-6 egg-chicken-container'>
            <img src={require('./images/eggchicken.webp')} className='egg-chicken' />
        </div>
        <div className='col-md-6 product-section' style={{marginTop : "50px"}}>
            <h2 className='product-heading'>Our Products</h2>
            <div>
                <div className='crd-2'>
                    <h4>Free range Chicken Cuts</h4>
                    <p>Breast, thighs, wings, and more—cut fresh, just the way you like it.</p>
                </div>
                <div className='crd-2'>
                    <h4>Farm-Fresh Free Range Eggs</h4>
                    <p>Rich, golden yolks that redefine breakfast.</p>
                </div>
                <div className='crd-2'>
                    <h4>Specialty Marinades</h4>
                    <p>Pre-marinated organic chicken, ready to cook and savor.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products