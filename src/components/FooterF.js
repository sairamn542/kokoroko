import React from 'react'
import "./footerf.css"
import { FaGreaterThan } from 'react-icons/fa'

function FooterF() {
    return (
        <div className='footer-container'>
            <div className='footer-bg'>
                <img src={require('./images/mask.webp')} />
                <div className='row'>
                <div className='col-md-10 footer-left'>
                <h3 className='footer-bg-title'>Join the Kokoroko Movement!</h3>
                    <p>Make the switch to Free Range goodness today. Your body will thank you,
                    your taste buds will celebrate, and the planet will smile.</p>
                    <span>Let’s cluck up your meals with organic delight!</span>
                </div>
                <div className='col-md-2'>
                    <button className='ordernow-btn'>Order Now</button>
                </div>
                </div>
            </div>
            <div className='row' style={{marginTop : "100px"}}>
            <div className='col-md-5'>
                <img src={require("./images/header.png")} width={186} height={56} />
                <div>At our poultry farm, our customers can be sure that
                    they are buying high-quality poultry meat produced
                    with care and attention to every detail.</div>
                    <div>
                <div>
                <div className='img-section'>
                    <img src={require("./images/fb.webp")} height={36} width={36} />
                    <img src={require("./images/twitter.webp")} height={36} width={36} />
                    <img src={require("./images/yt.webp")} height={36} width={36} />
                </div>
                </div>
            </div>
            </div>
            <div className='col-md-4'>
                <div className='footer-heading'>Our Links</div>
                <div className='links'>
                    <div><FaGreaterThan className='greater-icon' /> <span>Home</span></div>
                    <div><FaGreaterThan className='greater-icon'/> <span>About Us</span></div>
                    <div><FaGreaterThan className='greater-icon'/> <span>Contact Us</span></div>
                    <div><FaGreaterThan className='greater-icon'/> <span>Testimonials</span></div>
                    <div><FaGreaterThan className='greater-icon'/> <span>Faqs</span></div>
                    <div><FaGreaterThan className='greater-icon'/> <span>Services</span></div>
                </div>
            </div>
            <div className='col-md-3'>
                <div className='footer-heading'>Newsletter</div>
                <div className='links'>
                    <p>Receive news straight to your inbox</p>
                    <div className='inp'>
                        <input type='text' placeholder='Your Email' />
                    </div>
                    <button className='submit'>Submit</button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default FooterF