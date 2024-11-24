import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Navigation module styles
import "swiper/css/pagination"; // Pagination module styles
import { Navigation, Pagination } from "swiper/modules"; // Import Swiper modules
import './Carousel.css'
export const Carousel = ({ images }) => {
    if (!images || images.length === 0) return null;

    return (
        <>
        <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{
                clickable: true }}
            loop={true}
            className="mySwiper"
            spaceBetween={30}
            slidesPerView={1}
        >
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <img
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="w-auto h-[400px] object-cover rounded-lg"
                    />
                </SwiperSlide>
            ))}
        </Swiper>

    </>
    );
};
