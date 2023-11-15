import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import useWidth from '../../../hooks/useWidth';

const HomeSlider = ({slides}) => {
    const { width, breakPoints } = useWidth()
    
    
    return (
        <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={15}
            slidesPerView={
                width > breakPoints.xl ? 4 : 
                width > breakPoints.lg ? 3 : 
                width > breakPoints.md ? 2 : 
                width > breakPoints.sm ? 1.5 : 
                                1
            }
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            loop={true}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            className='home-slider'
        >
            {slides.map(slide => (
                <SwiperSlide key={slide.id}>
                    <div className='h-60 hover:cursor-pointer'>
                        <div className='h-full flex flex-col items-center justify-between'>
                            <div className=''>
                                <img src={slide.img} className='w-28' />
                            </div>
                            <span className='text-pink'>{slide.name}</span>
                        </div>
                    </div>
                </SwiperSlide>
            ))

            }
        </Swiper>
    )
}

export default HomeSlider