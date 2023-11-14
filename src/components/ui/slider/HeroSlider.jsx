// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import useWidth from '../../../hooks/useWidth';
import Button from '../Button';

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
            spaceBetween={0}
            slidesPerView={1}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
        >
            {dummySlides.map(item => (
                <SwiperSlide key={item.id}>
                    <div className='h-full w-full'>
                        <img src={item.img} className='w-full h-full' />
                        <div className='absolute text-white flex w-full h-full top-0'>
                            <div className='flex flex-1'></div>
                            <div className='flex flex-1 justify-center items-center h-full'>
                                <div className={`${width < breakPoints.lg ? 'w-60': width < breakPoints.md ? 'w-20' : 'w-80'} flex-col gap-4 flex`}>
                                    <h2 className='xl:text-h2 lg:text-h3 md:text-h4 text-body font-bold'>{item.text}</h2>
                                    <p className='xl:text-h4 lg:text-h5 md:text-body text-caption'>{item.desc}</p>
                                        <Button
                                            text='نمایش بیشتر'
                                        type='buttun'
                                        isDisabled={true}
                                        link={true} url='https://google.com'
                                    />
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