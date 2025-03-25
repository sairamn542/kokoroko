import React, { useState } from 'react';
import './sectionsec.css';
import img from './images/egg.webp';
import { IoChevronBackCircleOutline, IoChevronForwardCircleOutline } from 'react-icons/io5';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function SectionSec() {
    const [hoveredItem, setHoveredItem] = useState(null);

    const images = [
        { id: 1, title: 'Ethical Farming', description: 'We ensure humane conditions for all our birds, promoting their health and happiness.', src: img },
        { id: 2, title: 'Farm Fresh Guarantee', description: 'From our farm to your table within hours—always fresh, never frozen.', src: img },
        { id: 3, title: 'Nutritional Superiority', description: 'Higher in protein, rich in Omega-3s, and bursting with natural flavors.', src: img },
        { id: 4, title: 'Eco-Friendly Practices', description: 'We believe in sustainable farming that respects the environment.', src: img },
    ];

    return (
        <div className="gallary">
            <div className="d-flex justify-content-between">
                <h3 className="kokoroko-title">Why Choose Kokoroko?</h3>
                <div className="icon-container">
                    <IoChevronBackCircleOutline size={40} className="nav-icon prev" />
                    <IoChevronForwardCircleOutline size={40} className="nav-icon next" />
                </div>
            </div>

            <div className='swiper-content'>
            <Swiper
                modules={[Navigation]}
                navigation={{ nextEl: '.next', prevEl: '.prev' }}
                loop={true}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    600: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="swiper-container"
            >

                

                {images.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div
                            className="egg"
                            onMouseEnter={() => setHoveredItem(item.id)}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <h5 className="abs-title">{item.title}</h5>
                            <img src={item.src} alt={item.title} className="imgs" />
                            <div className="egg-content">
                                <h4>{item.title}</h4>
                                {hoveredItem === item.id && <p className="hover-description">{item.description}</p>}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
        </div>
    );
}

export default SectionSec;
