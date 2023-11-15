import Button from "../../../components/ui/Button"

const ProductCard = ({
    title,
    desc,
    price,
    img
}) => {
    return (
        <div className="bg-white rounded-lg flex flex-col shadow-md">
            <div className='mb-4 h-80 overflow-hidden'>
                <img src={img} className="object-cover w-full h-full rounded-t-lg" />
            </div>
            <div className="px-4 pb-4 flex flex-col gap-4">
                <h2 className="text-h3">{title}</h2>
                <p className='text-body text-gray-6'>{desc}</p>
                <div className="w-full flex justify-between items-center">
                    <Button
                        isPink={true}
                        text="خرید محصول"
                        isLink={true}
                    />
                    <span className="text-body">قیمت: {price}</span>
                </div>
            </div>
        </div>
    )
}

export default ProductCard