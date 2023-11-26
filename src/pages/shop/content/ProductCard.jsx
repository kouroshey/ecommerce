import Button from "../../../components/ui/Button"
import { useDispatch } from "react-redux"
import { productModalShowHandler } from "./store"

const ProductCard = ({
    title,
    desc,
    price,
    img,
    id,
}) => {
    const dispatch = useDispatch()
    const showModalHandle = () => {
        dispatch(productModalShowHandler(id))
    }
    const priceString = Number(price).toLocaleString()

    return (
        <div className="bg-white rounded-lg flex flex-col shadow-md">
            <div className='mb-4 max:h-80 md: overflow-hidden'>
                <img src={img} className="object-cover w-full h-full rounded-t-lg" />
            </div>
            <div className="px-4 pb-4 flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                    <h2 className="md:text-h3 text-h4 select-none">{title}</h2>
                    <p className="text-gray-6 text-body md:text-base-1 text-ellipsis whitespace-nowrap overflow-hidden">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                </div>
                <div className="w-full flex justify-between items-center">
                    <Button
                        isPink={true}
                        text="خرید محصول"
                        onClick={showModalHandle}
                    />
                    <span className="text-body">قیمت: {priceString}</span>
                </div>
            </div>
        </div>
    )
}

export default ProductCard