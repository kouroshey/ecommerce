import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import 'swiper/css';

const HomeSlider = () => {
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
            slidesPerView={4}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            loop={true}
            pagination={{
                clickable: true,
            }}
            navigation={true}
        >
            {slides.map(slide => (
                <SwiperSlide key={slide.id}>
                    <div className='h-60'>
                        <div className='h-full flex flex-col items-center justify-between'>
                            <div className=''>
                                <img src={slide.img} className='w-28' />
                            </div>
                            <span>{slide.name}</span>
                        </div>
                    </div>
                </SwiperSlide>
            ))

            }
        </Swiper>
    )
}

export default HomeSlider