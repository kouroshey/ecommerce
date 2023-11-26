import { useSelector } from "react-redux"
import LoginForm from "./content/login-form"
import { getIsLoading } from "./content/store"
import CSpinner from '../../components/ui/CSpinner'

const Login = () => {
  const isLoading = useSelector(getIsLoading)
  return (
    <main className="h-screen">
      <div className="bg-lightBg w-full h-full flex justify-center items-center">
        {/* form */}
        {
          isLoading ?
            <CSpinner /> :
            <LoginForm />
        }
      </div>
    </main>
  )
}

export default Login