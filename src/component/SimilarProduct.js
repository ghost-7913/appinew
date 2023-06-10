import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from "swiper";
const SimilarProduct = () => {
    return (
        // <!--similar product  -->
        <div class="similar-Product ">
            <div class="section-Title">
                <span>کالاهای مشابه</span>
                <div></div>
            </div>

            <Swiper
                slidesPerView={2}
                pagination={{
                    type: "fraction",
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
                        slidesPerView: 7,
                        spaceBetween: 50,
                    },
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide ><img src="/img/Rectangle 252.jpg" alt="" /></SwiperSlide>
                <SwiperSlide ><img src="/img/Rectangle 252.jpg" alt="" /></SwiperSlide>
                <SwiperSlide ><img src="/img/Rectangle 252.jpg" alt="" /></SwiperSlide>
                <SwiperSlide ><img src="/img/Rectangle 252.jpg" alt="" /></SwiperSlide>
                <SwiperSlide ><img src="/img/Rectangle 252.jpg" alt="" /></SwiperSlide>
                <SwiperSlide ><img src="/img/Rectangle 252.jpg" alt="" /></SwiperSlide>
                <SwiperSlide ><img src="/img/Rectangle 252.jpg" alt="" /></SwiperSlide>
                <SwiperSlide ><img src="/img/Rectangle 252.jpg" alt="" /></SwiperSlide>

            </Swiper>
        </div>
    );
};

export default SimilarProduct;