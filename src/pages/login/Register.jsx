import RegisterForm from "./content/register-form"
import { useSelector } from "react-redux"
import { getIsLoading } from "./content/store"
import CSpinner from "../../components/ui/CSpinner"

const Register = () => {
  const isLoading = useSelector(getIsLoading)
  console.log(isLoading);
  return (
    <main className="h-screen">
      <div className="bg-lightBg w-full h-full flex justify-center items-center">
        {/* form */}
        {
          isLoading ?
            <CSpinner /> :
            <RegisterForm />
        }
      </div>
    </main>
  )
}

export default Register