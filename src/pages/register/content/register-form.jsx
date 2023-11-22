import Logo from "../../../components/ui/Logo"
import { Link } from "react-router-dom"
  
const RegisterForm = () => {
  const inputStyle = 'border border-gray-3 rounded-md px-2 py-1 text-gray-7 focus:border-pink w-full outline-none'
  return (
    <form className='flex flex-col p-8 gap-10 bg-white items-center justify-center lg:w-1/3 w-full h-full lg:h-max min-w-32 md:max-w-md  rounded-xl border border-gray-3'>
      <Logo />
      <span className="flex w-full justify-start text-h4">ثبت نام</span>
      {/* username */}
      <div className="flex flex-col gap-2 w-full">
      <label htmlFor="username">یوزرنیم</label>
      <input
          className={inputStyle}
        placeholder="username"
        type="text"
        name="username"
        id="username" />
        </div>
      {/* password */}
      <div className="flex flex-col gap-2 w-full">
      <label htmlFor="username">پسورد</label>
        <input
          className={inputStyle}
        placeholder="password"
        type="text"
        name="password"
        id="password" />
        </div>
      {/* confirm */}
      <div className="flex flex-col gap-2 w-full">
      <label htmlFor="confirmPassword">لطفا مجددا پسورد خود را باور کنید</label>
        <input
          className={inputStyle}
        placeholder="confirmPassword"
        type="text"
        name="confirmPassword"
          id="confirmPassword"
        />
        </div>
      {/* email */}
      <div className="flex flex-col gap-2 w-full">
      <label htmlFor="email">ایمیل</label>
      <input
        className={inputStyle}
        placeholder="example@gmail.com"
        type="text"
        name="email"
        id="email"
        />
        </div>
      {/* submit */}
      <button
        className="w-full text-pink hover:text-white bg-white hover:bg-pink rounded-md py-2 text-sub border border-pink"
      >
        ورود
      </button>
      <div className="flex flex-col gap-1 items-center">
        <span>ثبت نام در ایکامرس به منزله‌ی قبول شرایط و مقررات این وبسایت است</span>
        <Link to='/register' className="text-pink hover:text-gray-7">شرایط و مقررات</Link>
      </div>
      <div className="flex flex-col gap-1 items-center">
        <span>عضو هستید؟ </span>
        <Link to='/login' className="text-pink hover:text-gray-7">ورود به حساب</Link>
      </div>
    </form>
  )
}

export default RegisterForm