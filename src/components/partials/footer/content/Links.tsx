import ListComp from "./ListComp"

const Links = () => {
  const list = [
    { id: 1, text: 'خانه', path: '/' },
    { id: 2, text: 'فروشگاه', path: '/shop' },
    { id: 3, text: 'بلاگ', path: '/blog' },
    { id: 4, text: 'درباره ما', path: '/about' },
  ]
  return (
    <ListComp items={list} title='لینک‌ها' />
  )
}

export default Links  