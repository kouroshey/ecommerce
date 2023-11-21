import { useState } from "react"
import Button from "../../../components/ui/Button"
import { IoTrashBinSharp } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, clearFromCart } from "./store";

const CartItem = ({
    id,
    img,
    title,
    price,
    amount,
    border,
    itemTotalPrice,
}) => {
    const dispatch = useDispatch()
    
    const [count, setCount] = useState(amount)

    const plusHandle = () => {
        if (count < 10) {
            setCount(prev => prev + 1)
            addItemToCartHandle()
        }
    }
    const minusHandle = () => {
        if (count > 0) {
            setCount(prev => prev - 1)
            removeItemFromCartHandle()
        }
    }

    const addItemToCartHandle = () => {
        dispatch(addToCart({
            id,
            img,
            price,
            title,
            amount : 1
        }))
    }

    const removeItemFromCartHandle = () => {
        dispatch(removeFromCart({
            id
        }))
    }

    const clearFromCartHandle = () => {
        dispatch(clearFromCart({id}))
    }

    return (
        <section className={`flex gap-4 relative ${border}`}>
            <div className="w-32">
                <img src={img} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-4 w-full">
                <div className="flex w-full justify-between items-center">
                    <h2>{title}</h2>
                    <Button
                        text="حذف"
                        isRed={true}
                        icon={<IoTrashBinSharp />}
                        onClick={clearFromCartHandle}
                    />
                </div>
                <div className="flex justify-between">
                    <span className="text-body text-gray-6">قیمت</span>
                    <span className="text-body text-gray-6">{Number(price).toLocaleString()} تومان</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-body text-gray-6">تعداد</span>
                    <span className="text-body text-gray-6">{amount} عدد</span>
                </div>
                <div className="flex justify-between items-center">
                    <div className="border border-gray-4 rounded-xl flex items-center w-max">
                        <span
                            onClick={plusHandle}
                            className="select-none text-h4 text-gray-6 w-full rounded-r-xl hover:bg-pink px-4 py-1 hover:text-white hover:cursor-pointer"
                        >
                            +
                        </span>
                        <input type="number" max='10' min='0' className="no-spinner w-4 flex justify-center outline-none" value={count}/>
                        <span
                            onClick={minusHandle}
                            className="select-none text-h4 text-gray-6 w-full rounded-l-xl hover:bg-pink px-4 py-1 hover:text-white hover:cursor-pointer"
                        >
                            -
                        </span>
                    </div>
                    <span>{Number(itemTotalPrice).toLocaleString()} هزار تومان</span>
                </div>
            </div>
        </section>
    )
}

export default CartItem