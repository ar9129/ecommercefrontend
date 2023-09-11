import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { maincarouseldata } from './maincarouseldata';
// const responsive = {
//     0: { items: 1 },
//     568: { items: 2 },
//     1024: { items: 3 },
// };



const MainCarousel = () => {
    const items = maincarouseldata.map((item) => <img className='cursor-Pointer w-full z-5' src={item.image} role='presentation' alt='' />)
    return (
        <AliceCarousel
            // mouseTracking
            items={items}
            disableButtonsControls
            autoPlay
            autoPlayInterval={1000}
            infinite
        // responsive={responsive}
        // controlsStrategy="alternate"
        />
    );
}

export default MainCarousel;