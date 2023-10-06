import React from 'react'

const Swiper = () => {
    return (
   
        <div className="swiper">
           
            <div className="swiper-wrapper">
                
                <div className="swiper-slide">Slide 1</div>
                <div className="swiper-slide">Slide 2</div>
                <div className="swiper-slide">Slide 3</div>
                ...
            </div>
            
            <div className="swiper-pagination"></div>

           
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>

            
            <div className="swiper-scrollbar"></div>
        </div>
  )
}

export default Swiper