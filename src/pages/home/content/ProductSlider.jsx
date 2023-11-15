import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import useWidth from '../../../hooks/useWidth';

import ProductCard from "../../shop/content/ProductCard"

const ProductSlider = ({ products }) => {
    const { width, breakPoints } = useWidth()
    return (
        <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={25}
            slidesPerView={
                width > breakPoints.xl ? 4 :
                    width > breakPoints.lg ? 3 :
                        width > breakPoints.md ? 2 :
                            width > breakPoints.sm ? 1.5 :
                                1
            }
            autoplay={{
                delay: 1500,
                disableOnInteraction: false,
            }}
            loop={true}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            className='product-slider'
        >
            {products.map(product => (
                <SwiperSlide key={product.id}>
                    <ProductCard {...product} />
                </SwiperSlide>
            ))

            }
        </Swiper>
    )
}

export default ProductSlider