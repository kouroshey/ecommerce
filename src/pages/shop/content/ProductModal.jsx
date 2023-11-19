
import { getModalShow, getModalProduct, productModalShowHandler } from "./store";
import { useSelector, useDispatch } from "react-redux"
import Modal from "../../../components/ui/Modal"
import Button from "../../../components/ui/Button";
import FavoriteIcon from "../../../components/ui/FavoriteIcon";
import Guarantee from "../../../components/ui/Guarantee";

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
                {/* text section */}
                <section className="flex-1 p-4 flex flex-col justify-between">
                    {/* top section */}
                    <div className="flex flex-col gap-6">
                        <div className="flex justify-between items-center select-none">
                            <FavoriteIcon />
                            {popular &&
                                <Button
                                    isPink={true}
                                    text="محصول محبوب"
                                />
                            }
                        </div>
                        <h2 className="text-h3 select-none">{title}</h2>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                    </div>
                    {/* bottom section */}
                    <Guarantee />
                    <div>
                        <div className="flex justify-between w-full">
                            <span>قیمت:</span>
                            <span>{`${price} تومان`}</span>
                        </div>
                    </div>  
                </section>
                {/* image section */}
                <section className="flex-1">
                    <img
                        src={img}
                        alt=""
                        className="rounded-lg"
                    />
                </section>
            </div>
        </Modal>
    )
}

export default ProductModal