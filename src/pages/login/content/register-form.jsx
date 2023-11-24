import Logo from "../../../components/ui/Logo"
import { Link } from "react-router-dom"

import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { useDispatch } from "react-redux"
import { signUpHandle } from "./store"
import { ToastContainer, toast } from "react-toastify"

const RegisterForm = () => {
  const inputStyle = 'border border-gray-3 rounded-md px-2 py-1 text-gray-7 focus:border-pink w-full outline-none'
  const dispatch = useDispatch()

  const schema = yup.object({
    email: yup.string().email('لطفا ایمیل خود را به درستی وارد کنید'),
    password: yup.string().min(6, 'پسورد حداقل باید ۶ کارکتر باشد').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, 'پسورد حداقل باید دارای یک عدد و یک حرف بزرگ و یک حرف کوچک باشد'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'لطفا تکرار پسورد را به درستی وارد کنید')
  })

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = (data) => {
    if (errors.email) {
      toast.error(errors.email.message, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        rtl: true,
        className: "font-iransans",
      })
    }
    dispatch(signUpHandle(data))
  }

  return (
    <>
      <ToastContainer />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col p-8 gap-5 bg-white items-center justify-center lg:w-1/3 w-full h-full lg:h-max min-w-32 md:max-w-md  rounded-xl border border-gray-3'
      >
        <Logo />
        <span className="flex w-full justify-start text-h4">ثبت نام</span>
        {/* email */}
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="email">ایمیل</label>
          <input
            className={inputStyle}
            placeholder="example@gmail.com"
            type="text"
            name="email"
            id="email"
            {...register('email')}
          />
          {errors.email &&
            <span
              className="flex w-full justify-start text-body text-favorite"
            >
              {errors.email.message}
            </span>}
        </div>
        {/* password */}
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="username">پسورد</label>
          <input
            className={inputStyle}
            placeholder="password"
            type="text"
            name="password"
            id="password"
            {...register('password')}
          />
        </div>
        {errors.password &&
          <span
            className="flex w-full justify-start text-body text-favorite"
          >
            {errors.password.message}
          </span>}
        {/* confirm password*/}
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="confirmPassword">لطفا مجددا پسورد خود را باور کنید</label>
          <input
            className={inputStyle}
            placeholder="confirmPassword"
            type="text"
            name="confirmPassword"
            id="confirmPassword"
            {...register('confirmPassword')}
          />
        </div>
        {errors.confirmPassword &&
          <span
            className="flex w-full justify-start text-body text-favorite"
          >
            {errors.confirmPassword.message}
          </span>}
        {/* submit */}
        <button
          className="outline-none mt-5 w-full text-pink hover:text-white bg-white hover:bg-pink rounded-md py-2 text-sub border border-pink"
        >
          ورود
        </button>
        <div className="flex text-caption flex-col gap-1 items-center">
          <span className="text-caption">عضو هستید؟ </span>
          <Link to='/login' className="text-pink hover:text-gray-7">ورود به حساب</Link>
        </div>
        <div className="flex text-caption flex-col gap-1 items-center">
          <span className="text-gray-6">ثبت نام در ایکامرس به منزله‌ی قبول شرایط و مقررات این وبسایت است</span>
          <Link to='/register' className="text-pink hover:text-gray-7">شرایط و مقررات</Link>
        </div>
      </form>
    </>
  )
}

export default RegisterForm