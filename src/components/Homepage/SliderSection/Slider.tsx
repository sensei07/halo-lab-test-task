import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Scrollbar, A11y, EffectCube} from 'swiper';
import 'swiper/swiper-bundle.min.css';

export const Slider = ({slides}: any) => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{clickable: true}}
            scrollbar={{draggable: true}}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {slides.map((slide: any) => (
                <SwiperSlide key={slide.image}>
                    <img style={{width: '250px', height: '200px'}} src={slide.image} alt={slide.title}/>
                </SwiperSlide>
            ))}
        </Swiper>
    );

};
