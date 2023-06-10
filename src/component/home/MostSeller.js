import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper";
const MostSeller = () => {
    return (
        <div className='main-Most-Seller'> 
            <div class="section-Title">
                <h2>پرفروش ترین ها </h2>
                <i class="bi bi-caret-left-fill"></i>
            </div>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5.5,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide ><img src="img/hudi.jpg" alt="" /></SwiperSlide>
                <SwiperSlide ><img src="img/shoe.jpg" alt="" /></SwiperSlide>
                <SwiperSlide ><img src="img/handWatch.jpg" alt="" /></SwiperSlide>
                <SwiperSlide ><img src="img/hudi.jpg" alt="" /></SwiperSlide>
                <SwiperSlide ><img src="img/hudi.jpg" alt="" /></SwiperSlide>
                <SwiperSlide ><img src="img/hudi.jpg" alt="" /></SwiperSlide>
                <SwiperSlide ><img src="img/shoe.jpg" alt="" /></SwiperSlide>
                <SwiperSlide ><img src="img/shoe.jpg" alt="" /></SwiperSlide>

                
            </Swiper>
        </div>
    );
};

export default MostSeller;
