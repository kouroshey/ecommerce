import ListComp from "./ListComp"

const MoreInfo = () => {
    const list = [
        {id: 1, text: 'پرسش و پاسخ', path: '/'},
        {id: 2, text: 'درباره ما', path: '#'},
        {id: 3, text: 'قوانین و مقررات', path: '#'},
        {id: 4, text: 'سیستم پرداخت', path: '#'},
      ]
  return (
    <ListComp items={list} title='اطلاعات بیشتر' />
  )
}

export default MoreInfo