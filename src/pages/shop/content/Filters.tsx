import { useState } from "react"
import DropDown from "../../../components/ui/DropDown"
import { IoChevronDown } from "react-icons/io5"

export interface ShopDropDownItem {
  id: string
  title: string
  isDefault: boolean
}

interface FilterOptions {
  showOptions: ShopDropDownItem[]
  sizeOptions: ShopDropDownItem[]
}

const Filter = () => {
  const [collapsed, setCollapsed] = useState(false)

  const collapseHandle = () => {
    setCollapsed(prev => prev = !prev)
  }
  const options: FilterOptions = {
    showOptions: [
      { id: '1', title: 'جدید ترین', isDefault: true },
      { id: '2', title: 'محبوب ترین', isDefault: false },
      { id: '3', title: 'ارزان ترین', isDefault: false },
      { id: '4', title: 'گران ترین', isDefault: false },
    ],
    sizeOptions: [
      { id: '1', title: 'XS (کوچکترین)', isDefault: false },
      { id: '2', title: 'SM (کوچک)', isDefault: false },
      { id: '3', title: 'M (متوسط)', isDefault: true },
      { id: '4', title: 'L (بزرگ)', isDefault: false },
    ]
  }
  return (
    <div className="flex gap-12">
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          {collapsed ? <p>نمایش دادن فیلتر ها</p> : <p>پنهان کردن فیلتر ها</p>}
          <button
            className="bg-pink rounded-md p-1 text-white"
            onClick={collapseHandle}
          >
            <IoChevronDown className={`transition-all ${collapsed ? 'rotate-0' : 'rotate-180'}`} />
          </button>
        </div>
        {!collapsed ?
          <div className="flex items-center gap-4">
            <DropDown items={options.showOptions} label='نمایش بر اساس' />
            <DropDown items={options.sizeOptions} label='انتخاب سایز' />
          </div> : ''
        }
      </div>

    </div>
  )
}

export default Filter