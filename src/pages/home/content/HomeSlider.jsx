import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import useWidth from '../../../hooks/useWidth';

const HomeSlider = () => {
    const { width, breakPoints } = useWidth()
    
    const slides = [
        { id: 2, img: '../public/images/dress.png', name: 'dress' },
        { id: 3, img: '../public/images/suit.png', name: 'suit' },
        { id: 1, img: '../public/images/dress2.png', name: 'dress2' },
        { id: 4, img: '../public/images/dress.png', name: 'dress' },
        { id: 6, img: '../public/images/suit.png', name: 'suit' },
        { id: 5, img: '../public/images/dress2.png', name: 'dress2' },
        { id: 7, img: '../public/images/dress.png', name: 'dress' },
        { id: 9, img: '../public/images/suit.png', name: 'suit' },
        { id: 8, img: '../public/images/dress2.png', name: 'dress2' }
    ]
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