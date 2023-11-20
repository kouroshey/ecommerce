import { useState } from "react"
import LoginImage from "./content/LoginImage"
import Auth from "./content/login-auth"
import Register from "./content/login-reg"

const Login = () => {
  const [isRegistered, setIsRegistered] = useState(true)
  return (
    <main className="h-screen">
      <div className="bg-lightBg w-full h-full flex justify-center items-center">
        {/* form */}
          {isRegistered ? <Auth /> : <Register />}
      </div>
    </main>
  )
}

export default Login