import CartList from "./content/CartList"
import Payment from "./content/Payment"

const Cart = () => {
    const cartItems = [
        { id: 1, title: 'Gucci', price: '' },
        { id: 2, title: 'Gucci', price: '' },
        { id: 3, title: 'Gucci', price: '' },
        { id: 4, title: 'Gucci', price: '' },
    ]
    return (
        <main className="flex flex-col gap-8 py-8">
            {/* right section */}
            <h2 className="text-h3 after:w-full after:absolute relative after:bg-pink after:right-0 after:-bottom-1 after:h-[2px] after:rounded-md w-max">سبد خرید</h2>
            <section className="flex flex-col md:flex-row gap-4">
                <section className="bg-white w-full rounded-md basis-3/5">
                    <CartList items={cartItems} />
                </section>
                {/* left seciton */}
                <section className="w-full bg-white rounded-md h-max basis-2/5">
                    <Payment />
                </section>
            </section>
        </main>
    )
}

export default Cart