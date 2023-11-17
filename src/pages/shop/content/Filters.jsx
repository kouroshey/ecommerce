import DropDown from "../../../components/ui/DropDown"

const Filter = () => {
  const options = {
    showOptions : [
      {id: '1', title: 'جدید ترین', isDefault: true},
      {id: '2', title: 'محبوب ترین', isDefault: false},
      {id: '3', title: 'ارزان ترین', isDefault: false},
      {id: '4', title: 'گران ترین', isDefault: false},
    ],
    sizeOptions: [
      {id: '1', title: 'XS (کوچکترین)', isDefault: false},
      {id: '2', title: 'SM (کوچک)', isDefault: false},
      {id: '3', title: 'M (متوسط)', isDefault: true},
      {id: '4', title: 'L (بزرگ)', isDefault: false},
    ]
  }
  return (
      <div className="flex gap-12">
      <DropDown items={options.showOptions} label='نمایش بر اساس' />
      <DropDown items={options.sizeOptions} label='انتخاب سایز' />
    </div>
  )
}

export default Filter