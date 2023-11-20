import { useState } from "react"
import Button from "../../../components/ui/Button"
import { IoTrashBinSharp } from "react-icons/io5";

const CartItem = ({
    img,
    title,
    price,
    amount,
    border
}) => {
    const [count, setCount] = useState(1)

    const plusHandle = () => {
        if (count < 10) {
            setCount(prev => prev + 1)
        }
    }
    const minusHandle = () => {
        if (count > 0) {
            setCount(prev => prev - 1)
        }
    }
    
    return (
        <section className={`flex gap-4 relative ${border}`}>
            <div className="w-32">
                <img src="../public/images/dress.png" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-4 w-full">
                <div className="flex w-full justify-between items-center">
                    <h2>گوچیه گووچیی</h2>
                    <Button
                        text="حذف"
                        isRed={true}
                        icon={<IoTrashBinSharp />}
                    />
                </div>
                <div className="flex justify-between">
                    <span className="text-body text-gray-6">قیمت</span>
                    <span className="text-body text-gray-6">12.29$</span>
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
                    <span>2112 هزار تومان</span>
                </div>
            </div>
        </section>
    )
}

export default CartItem