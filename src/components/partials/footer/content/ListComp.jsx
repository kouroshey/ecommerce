import { Link } from "react-router-dom"

const ListComp = ({items, title}) => {
  return (
    <div className="flex flex-col gap-4">
          <h3 className="text-h4">{title}</h3>
          <ul className="flex flex-col gap-2 justify-start text-gray-5 transition-all pr-6">
              {items.map(item => (
                  <li key={item.id} className="hover:text-pink hover:scale-105 transition-all"><Link to={item.path}>{item.text}</Link></li>
              ))}
      </ul>
    </div>
  )
}

export default ListComp