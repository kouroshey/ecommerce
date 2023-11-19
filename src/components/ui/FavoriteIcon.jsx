import { useState } from "react";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";

const FavoriteIcon = () => {
    const [checked, setChecked] = useState(false)

    const checkHandle = () => setChecked(prev => prev = !prev)
  return (
      <span
          className="text-h3"
            onClick={checkHandle}
      >
          {!checked ?
              <span>
                  <IoHeartOutline />
              </span> : 
              <span>
                  <IoHeartSharp className="text-favorite" />
              </span>
          }
      </span>
  )
}

export default FavoriteIcon