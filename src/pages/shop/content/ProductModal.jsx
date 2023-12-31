import { IoChatbubbleOutline, IoBagAdd } from 'react-icons/io5'

import { getModalShow, getModalProduct, productModalShowHandler } from "./store";
import { useSelector, useDispatch } from "react-redux"
import { toast } from 'react-toastify';

import Modal from "../../../components/ui/Modal"
import Button from "../../../components/ui/Button";
import FavoriteIcon from "../../../components/ui/FavoriteIcon";
import Guarantee from "../../../components/ui/Guarantee";
import BigGuarantee from "./BigGuarantee";
import CloseBtn from "../../../components/ui/CloseBtn";
import SelectSize from "./SelectSize";
import { addToCart } from '../../cart/content/store';
import { useState } from 'react';

const ProductModal = () => {
    const [count, setCount] = useState(0)
    const dispatch = useDispatch()
    const mainProduct = useSelector(getModalProduct)
    const isModalShow = useSelector(getModalShow)
    const modalShowHandle = () => dispatch(productModalShowHandler())
    if (!isModalShow) {
        return null
    }

    let { img, title, price, popular, id } = mainProduct || {}
    const priceString = Number(price).toLocaleString()

    const addItemToCartHandle = () => {
        setCount(prev => prev = prev + 1)
        dispatch(addToCart({
            id,
            img,
            price,
            title,
            amount: 1
        }))
        if (count > 1) {
            toast.warning('آیتم در سبد خرید وجود دارد')
        }
    }

    return (
        <Modal modalCloseHandle={modalShowHandle}>
            {/* main parent */}
            <div className="flex flex-col md:flex-row-reverse gap-4">
                {/* <span className="absolute w-max bg-white p-1 rounded-md -top-5 right-0 z-50">
                    <CloseBtn closeFunction={modalShowHandle} />
                </span> */}
                {/* image section */}
                <section className="md:flex-1 md:object-cover flex justify-center items-center md:sticky md:top-0 md:left-0">
                    <img
                        src={img}
                        className="rounded-l-lg object-cover w-full h-full md:aspect-w-16 md:aspect-h-9"
                        alt=""
                    />
                </section>
                {/* text section */}
                <section className="md:flex-1 p-4 flex flex-col gap-4">
                    {/* top section */}
                    <div className="flex flex-col gap-6">
                        <div className="flex justify-between items-center select-none">
                            <span className="flex gap-4 items-center">
                                <FavoriteIcon />
                                <IoChatbubbleOutline className="text-h3 hover:text-pink" />
                            </span>
                            {popular && (
                                <Button
                                    isPink={true}
                                    text="محصول محبوب"
                                />
                            )}
                        </div>
                        <div className="flex flex-col gap-4">
                            <h2 className="md:text-h3 text-h4 select-none">{title}</h2>
                            <p className="text-gray-6 text-body md:text-base-1">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                        </div>
                    </div>
                    {/* bottom section */}
                    <div className="flex flex-col gap-4">
                        <Guarantee />
                        <SelectSize />
                        <div>
                            <div className="flex justify-between w-full">
                                <span>قیمت:</span>
                                <span>{`${priceString} تومان`}</span>
                            </div>
                        </div>
                        <div className="flex w-full gap-2 justify-between">
                            <Button
                                text="سفارش"
                                isPink={true}
                                width="full"
                                textSize="sub-1"
                            />
                            <Button
                                text="افزودن به سبد خرید"
                                isBlack={true}
                                width="full"
                                textSize="sub-1"
                                icon={<IoBagAdd className="text-pink text-h4" />}
                                onClick={addItemToCartHandle}
                            />
                        </div>
                        <div className="flex w-full justify-evenly select-none">
                            <BigGuarantee />
                        </div>
                    </div>
                </section>
            </div>
        </Modal>
    )
}

export default ProductModal