import LoginForm from "./content/login-form"

const Login = () => {
  return (
    <main className="h-screen">
      <div className="bg-lightBg w-full h-full flex justify-center items-center">
        {/* form */}
        <LoginForm />
      </div>
    </main>
  )
}

export default Login