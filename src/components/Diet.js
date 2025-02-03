import React from 'react'
import "./diet.css"
import img1 from "./images/family.webp"
import img2 from "./images/henwithegg.webp"
import img3 from "./images/friedchicken.webp"

function Diet() {
    var data = [
        {
            image : img1,
            content : "For Your Family :",
            description : "Packed with nutrients, our products are perfect for kids, fitness enthusiasts, and everyone in between."
        },
        {
            image : img2,
            content : "For Your Taste Buds :",
            description : "Say goodbye to bland and hello to tender, juicy chicken and eggs that taste as good as they feel."
        },
        {
            image : img3,
            content : "For Your Peace Of Mind :",
            description : "Knowing that every bite you take supports ethical and sustainable farming."
        },
    ]
  return (
    <div className='diet'>
        <div className='diet-heading'>How We Make a Difference to Your Diet</div>
        <div className='small-heading'>At<b> Kokoroko</b>, we don’t just deliver food—we deliver health, happiness, and peace of mind.</div>
        <div className="crd-container">
            {
                data.map((content,ind)=>(
                    <div className='crd'>
                        <div className='crd-header'><img src={content.image}/></div>
                        <div className='crd-bg'>
                        <div>{content.content}</div>
                        <div>{content.description}</div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Diet