// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from '../Button';
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import 'swiper/css';
import CardDetail from '../CardDetail';

const HeroSlider = () => {

    const dummySlides = [
        {
            id: 1,
            img: '../public/images/slider.png',
            text: 'تضمین تجربه بهترین خرید با فروشگاه',
            desc: 'خرید انواع لباس و اکسسوری و ست آشپزخانه',
            url: 'https://google.com'
        },
        {
            id: 2,
            img: '../public/images/slider.png',
            text: 'تضمین تجربه بهترین خرید با فروشگاه',
            desc: 'خرید انواع لباس و اکسسوری و ست آشپزخانه',
            url: 'https://google.com'
        },
        {
            id: 3,
            img: '../public/images/slider.png',
            text: 'تضمین تجربه بهترین خرید با فروشگاه',
            desc: 'خرید انواع لباس و اکسسوری و ست آشپزخانه',
            url: 'https://google.com'
        },
    ]

    return (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
            }}
            loop={true}
            className='xl:h-screen'
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        >
            {dummySlides.map(item => (
                <SwiperSlide key={item.id}>
                    <div className='h-full w-full hover:cursor-pointer'>
                        <img src={item.img} className='w-full h-full' />
                        <div className='absolute text-white flex w-full h-full top-0'>
                            <div className='flex basis-1/2 justify-center items-center h-full'>
                                <div className='flex flex-col gap-1 md:gap-4 items-start w-3/4'>
                                    <CardDetail text={item.text} desc={item.desc} />
                                    <Button
                                        text='نمایش بیشتر'
                                        type='buttun'
                                        isGray={true}
                                        defaultClass='text-overline rounded-md px-2 py-1'
                                        link={true} url='https://google.com'
                                    />
                                </div>
                            </div>
                            <div className='flex basis-1/2'></div>
                        </div>
                    </div>
                </SwiperSlide>
            ))

            }
        </Swiper>
    )
}

export default HeroSlider