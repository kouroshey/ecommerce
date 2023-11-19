import { getModalShow, getModalProduct, productModalShowHandler } from "./store";
import { useSelector, useDispatch } from "react-redux"
import Modal from "../../../components/ui/Modal"
import Button from "../../../components/ui/Button";
import FavoriteIcon from "../../../components/ui/FavoriteIcon";
import Guarantee from "../../../components/ui/Guarantee";
import BigGuarantee from "./BigGuarantee";
import CloseBtn from "../../../components/ui/CloseBtn";
import { IoChatbubbleOutline, IoCloseSharp, IoBagAdd } from 'react-icons/io5'
import SelectSize from "./SelectSize";

const ProductModal = () => {
    const dispatch = useDispatch()
    const mainProduct = useSelector(getModalProduct)
    const isModalShow = useSelector(getModalShow)
    const modalShowHandle = () => dispatch(productModalShowHandler())
    if (!isModalShow) {
        return null
    }

    let { img, title, desc, price, popular } = mainProduct || {}
    price = Number(price).toLocaleString()

    return (
        <Modal modalCloseHandle={modalShowHandle}>
            {/* main parent */}
            <div className="flex">
                <span className="absolute w-max bg-white p-1 rounded-md -top-10 right-0">
                    <CloseBtn closeFunction={modalShowHandle}/>
                </span>
                {/* text section */}
                <section className="flex-1 p-4 flex flex-col justify-between gap-4">
                    {/* top section */}
                    <div className="flex flex-col gap-6">
                        <div className="flex justify-between items-center select-none">
                            <span className="flex gap-4 items-center">
                                <FavoriteIcon />
                                <IoChatbubbleOutline className="text-h3 hover:text-pink" />
                            </span>
                            {popular &&
                                <Button
                                    isPink={true}
                                    text="محصول محبوب"
                                />
                            }
                        </div>
                        <div className="flex flex-col gap-4">
                        <h2 className="text-h3 select-none">{title}</h2>
                        <p className="text-gray-6">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                        </div>
                    </div>
                    {/* bottom section */}
                    <div className="flex flex-col gap-8">
                        <Guarantee />
                        <SelectSize />
                        <div>
                            <div className="flex justify-between w-full">
                                <span>قیمت:</span>
                                <span>{`${price} تومان`}</span>
                            </div>
                        </div>
                        <div className="flex w-full gap-2 justify-between">
                            <Button
                                text="سفارش"
                                isPink={true}
                                width='full'
                                textSize='sub-1'
                                />
                            <Button
                                text="افزودن به سبد خرید"
                                isBlack={true}
                                width='full'
                                textSize='sub-1'
                                icon={<IoBagAdd className="text-pink text-h4"/>}
                            />
                        </div>
                        <div className="flex w-full justify-evenly select-none">
                            <BigGuarantee />
                        </div>
                    </div>
                </section>
                {/* image section */}
                <section className="flex-2">
                    <img
                        src={img}
                        alt=""
                        className="rounded-l-lg"
                    />
                </section>
            </div>
        </Modal>
    )
}

export default ProductModal