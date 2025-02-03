import React, { useState } from 'react';
import './sectionsec.css';
import img from './images/egg.webp';
import { IoChevronBackCircleOutline, IoChevronForwardCircleOutline } from 'react-icons/io5';

function SectionSec() {
    const [hoveredItem, setHoveredItem] = useState(null);

    const images = [
        {
            id: 1,
            title: 'Ethical Farming',
            description: 'We ensure humane conditions for all our birds, promoting their health and happiness.',
            src: img,
        },
        {
            id: 2,
            title: 'Farm Fresh Guarantee',
            description: 'Farm Fresh Guarantee: From our farm to your table within hours—always fresh, never frozen.',
            src: img,
        },
        {
            id: 3,
            title: 'Nutritional Superiority',
            description: 'Nutritional Superiority: Higher in protein, rich in Omega-3s, and bursting with natural flavors.',
            src: img,
        },
        {
            id: 4,
            title: 'Eco-Friendly Pract',
            description: 'Eco-Friendly Practices: We believe in sustainable farming that respects the environment.',
            src: img,
        },
    ];

    return (
        <div className="gallary">
            <div className="d-flex justify-content-between">
                <h3 className="kokoroko-title">Why Choose Kokoroko?</h3>
                <div className="icon-container">
                    <IoChevronBackCircleOutline size={40} className="nav-icon" />
                    <IoChevronForwardCircleOutline size={40} className="nav-icon" />
                </div>
            </div>
            <div className="egg-container">
                {images.map((item) => (
                    <div
                        key={item.id}
                        className="egg"
                        onMouseEnter={() => setHoveredItem(item.id)}
                        onMouseLeave={() => setHoveredItem(null)}
                    >
                        <h5 className='abs-title'>{item.title}</h5>
                        <img src={item.src} alt={item.title} className="imgs" />
                        <div className="egg-content">
                            <h4>{item.title}</h4>
                            {hoveredItem === item.id && item.description && (
                                <p className="hover-description">{item.description}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SectionSec;
