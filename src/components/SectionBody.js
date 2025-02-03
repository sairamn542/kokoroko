import React from 'react';
import './sectionbody.css';

function SectionBody() {
  return (
    <div className='section-body-container'>
      <div className='col-md-7 about-cont'>
        <img src={require('./images/bg.webp')} className='bg-images' />
        <div className='about'>
          <h2 className='about-title'>About</h2>
          <p>
            Welcome to <b>Kokoroko</b>, your trusted source for farm-fresh free range chicken and eggs.
            We’re passionate about bringing you wholesome, chemical-free, and ethically raised
            poultry that’s good for you and the planet. From farm to fork, every step is guided by
            our commitment to quality, sustainability, and mouthwatering flavors.
          </p>
        </div>
      </div>
      <div className='col-md-5'>
        <img src={require('./images/ABC5.webp')} alt='image' width={428} height={442} className='bg-images2' />
      </div>
    </div>
  );
}

export default SectionBody;
