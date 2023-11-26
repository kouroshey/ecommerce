import { useSelector } from "react-redux"
import { getAllCartItems } from "../../../../pages/cart/content/store"

const Basket = () => {
    const items = useSelector(getAllCartItems)
    return (
        <div className="w-full p-4 bg-white rounded-md shadow-lg border border-gray-2 flex flex-col gap-4 text-gray-7">
            {items.length > 0 ?
                items.map(item => (
                    <div className="flex justify-between w-full bg-white border-gray-3">
                        <section className="flex gap-2 items-center">
                            <img src={item.img} className="w-14 rounded-md" />
                            <span className="text-body ">{item.title}</span>
                        </section>
                        <section className="flex flex-col gap-2 text-caption text-gray-6">
                            <span>{item.amount} عدد</span>
                            <span>قیمت: {item.price}</span>
                        </section>
                    </div>
                )) :
                <span className="text-body">سبد خرید شما خالی است!</span>}
        </div>
    )
}

export default Basket