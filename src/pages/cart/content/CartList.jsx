import { useSelector } from "react-redux"
import CartItem from "./CartItem"
import { getAllCartItems } from "./store"

const CartList = () => {
  const items = useSelector(getAllCartItems)
  
  return (
      <section className="p-4 flex flex-col gap-6">
          {items?.map((item, index) => (
              <CartItem border={index !== items.length - 1 ? 'border-b border-gray-4 border-dashed pb-6' : ''} {...item} />
          ))}
    </section>
  )
}

export default CartList