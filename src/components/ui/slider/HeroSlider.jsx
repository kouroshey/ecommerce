// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from '../Button';

// Import Swiper styles
import 'swiper/css';
import CardDetail from '../CardDetail';

const HeroSlider = () => {

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
                                <div className='flex flex-col gap-4 items-start'>
                                <CardDetail text={item.text} desc={item.desc} />
                                <Button
                                    text='نمایش بیشتر'
                                        type='buttun'
                                        isGray={true}
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