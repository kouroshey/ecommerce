import RegisterForm from "./content/register-form"

const Register = () => {
  return (
    <main className="h-screen">
      <div className="bg-lightBg w-full h-full flex justify-center items-center">
        {/* form */}
        <RegisterForm />
      </div>
    </main>
  )
}

export default Register