import React from 'react'
import "./gallery.css"
import g1 from "./images/g1.webp"
import g2 from "./images/g2.webp"
import g3 from "./images/g3.webp"
import g4 from "./images/ABC4.webp"
import g5 from "./images/g5.webp"
import g6 from "./images/g6.webp"
import g7 from "./images/ABC3.webp"
import g8 from "./images/g8.webp"
import g9 from "./images/ABC2.webp"

function OurGallery() {
    const images = [g1, g2, g3, g4, g5, g6, g7, g8, g9]
    return (
       <div>
         <div className='gallary'>
            <h3>Our Gallery</h3>
            <div className="collage"> {images.slice(0, 5).map((src, index) => (<div key={index} className="collage-item"> <img src={src} alt={`Collage ${index}`} /> </div>))} <div className="collage-row"> {images.slice(5).map((src, index) => (<div key={index} className="collage-item full-width"> <img src={src} alt={`Collage ${index + 5}`} /> </div>))} </div> </div>
        </div>
       </div>
    )
}

export default OurGallery