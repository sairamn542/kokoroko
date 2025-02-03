import React from 'react'
import './footerupper.css'

function FooterUpper() {
    return (
        <div className='footer-upper'>
            <div className='image image-1'></div>
            <div className='image image-2'></div>
            <div className='image image-3'></div>
            <div className='image image-4'></div>
            <div className='image image-5'></div>
            <div className='image image-6'></div>
            <div>
                <h3>What Our Customer Says</h3>
                <div className='crd-3-container '>
                    <div className='crd-3'>
                        <p>Kokoroko’s chicken is a game-changer! Tender, juicy, and guilt-free. My kids can’t get enough!</p>
                        <div className='img-container'>
                        <img src={require('./images/p1.webp')} alt='img' height={50} width={50} /><span>Arjun Singh</span>
                        </div>
                    </div>
                    <div className='crd-3'>
                        <p>Their eggs are the gold standard—flavorful and nutrient-packed. I’ll never go back to store-bought!</p>
                        <div className='img-container'>
                        <img src={require('./images/p5.webp')} alt='img' height={50} width={50} /><span>Neha Singh</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterUpper