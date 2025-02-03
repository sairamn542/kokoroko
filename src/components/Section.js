import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./section.css";

function Section() {
    useEffect(() => {
        AOS.init({
            duration: 2000, // Animation duration in milliseconds
            once: true, // Whether animation should happen only once
        });
    }, []);

    return (
        <div className='section' data-aos="fade-up">
            <div className='section-data'>
                <p data-aos="fade-right">Cluckin’ Good: Where Health Meets Delicious!</p>
                <div className='bold' data-aos="zoom-in">
                    <div>
                        Savor the goodness of Free Range chicken and eggs,
                        <img src={require("./images/mask.webp")} width={60} height={60} alt="Organic Mask" />
                    </div>
                    <div>delivered fresh to your table.</div>
                </div>
                <div className='highlight' data-aos="fade-left">
                    Taste the difference, live the difference—naturally!
                </div>
                <button className='section-button' data-aos="flip-up">Order Now</button>
            </div>
        </div>
    );
}

export default Section;
