// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import useWidth from '../../../hooks/useWidth';

// Import Swiper styles
import 'swiper/css';

const HeroSlider = () => {
    const { width, breakPoints } = useWidth()
    
    const dummySlides = [
        {
            id: 1,
            img: '../public/images/slider.png',
            text: 'تضمین موفقیت شما با کوروش عیدی وندی',
            desc: 'اگر میخواهید سایت خوبی داشته باشید و روزانه مشتریان زیادی به سمت شما سرازیر شوند، حتما با کوروش عیدی وندی همکاری کنید',
            url: 'https://google.com'
        },
        {
            id: 2,
            img: '../public/images/slider.png',
            text: 'تضمین موفقیت شما با کوروش عیدی وندی',
            desc: 'اگر میخواهید سایت خوبی داشته باشید و روزانه مشتریان زیادی به سمت شما سرازیر شوند، حتما با کوروش عیدی وندی همکاری کنید',
            url: 'https://google.com'
        },
        {
            id: 3,
            img: '../public/images/slider.png',
            text: 'تضمین موفقیت شما با کوروش عیدی وندی',
            desc: 'اگر میخواهید سایت خوبی داشته باشید و روزانه مشتریان زیادی به سمت شما سرازیر شوند، حتما با کوروش عیدی وندی همکاری کنید',
            url: 'https://google.com'
        },
    ]
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {dummySlides.map(item => (
                <SwiperSlide>
                    <div className='h-full w-full'>
                        <img src={item.img} className='w-full h-full' />
                        <div className='absolute text-black flex w-full h-full top-0'>
                            <div className='flex flex-1'></div>
                            <div className='flex flex-1 justify-center items-center h-full'>
                                <div className={`${width < breakPoints.lg ? 'w-60': width < breakPoints.md ? 'w-20' : 'w-80'} flex-col gap-4 flex`}>
                                    <h2 className='xl:text-h2 lg:text-h3 md:text-h4 text-body'>{item.text}</h2>
                                    <p className='xl:text-h4 lg:text-h5 md:text-body text-caption'>{item.desc}</p>
                                    <a href={item.url}>
                                        <button
                                            className='bg-none border border-gray-4 rounded-md xl:text-h4 lg:text-h5 md:text-body text-body px-8 py-2'
                                        >نمایش بیشتر
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))

            }
        </Swiper>
    )
}

export default HeroSlider