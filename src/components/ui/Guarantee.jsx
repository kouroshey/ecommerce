import { TbTruckDelivery } from "react-icons/tb";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

const Guarantee = () => {
  return (
    <div className="flex flex-col gap-2 text-body select-none">
      <div className="flex gap-4">
        <span className=""><TbTruckDelivery className="text-gray-6" /></span>
        <span className=''>آماده ارسال</span>
      </div>
      <div className="flex gap-4">
        <span className=""><IoShieldCheckmarkOutline className="text-gray-6" /></span>
        <span className=''>ضمانت اصالت کالا</span>
      </div>
    </div>
  )
}

export default Guarantee