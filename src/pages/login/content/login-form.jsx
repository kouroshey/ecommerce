import Logo from '../../../components/ui/Logo'
import { Link } from "react-router-dom"

import { useDispatch, useSelector } from 'react-redux'
import { loginHandle, getEmail, getPassword } from './store'

import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'

const schema = yup.object({
  email: yup.string().email('لطفا ایمیل خود را به درستی وارد کنید').required('وارد کردن ایمیل الزامی است'),
  password: yup.string().min(6, 'پسورد باید حداقل ۶ کارکتر باشد')
})

const LoginForm = () => {
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {
    dispatch(loginHandle(data))
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col p-8 gap-10 bg-white items-center justify-center lg:w-1/3 w-full h-full lg:h-max min-w-32 md:max-w-md  rounded-xl border border-gray-3'>
      <Logo />
      <span className="flex w-full justify-start text-h4">صفحه‌ی ورود</span>
      {/* email */}
      <div className='flex flex-col gap-2 w-full'>
        <label htmlFor="email">لطفا ایمیل خود را وارد کنید</label>
        <input
          className='border border-gray-3 rounded-md px-2 py-1 text-gray-7 focus:border-pink w-full outline-none'
          type="text"
          id="email"
          placeholder="example@gmail.com"
          {...register("email")}
        />
        {errors.email &&
          <span
            className="flex w-full justify-start text-body text-favorite"
          >
            {errors.email.message}
          </span>}
      </div>
      <div className='flex flex-col gap-2 w-full'>
        {/* password */}
        <label htmlFor="password">لطفا پسورد خود را وارد کنید</label>
        <input
          className='border border-gray-3 rounded-md px-2 py-1 text-gray-7 focus:border-pink w-full outline-none'
          type="password"
          id="password"
          placeholder="password"
          {...register("password")}
        />
        {errors.password &&
          <span
            className="flex w-full justify-start text-body text-favorite"
          >
            {errors.password.message}
          </span>}
      </div>
      {/* submit */}
      <button
        className="w-full text-pink hover:text-white bg-white hover:bg-pink rounded-md py-2 text-sub border outline-none border-pink"
      >
        ورود
      </button>
      <div className="flex flex-col gap-1 items-center">
        <span>حساب کاربری ندارید؟</span>
        <Link to='/register' className="text-pink hover:text-gray-7">ثبت نام</Link>
      </div>
    </form>
  )
}

export default LoginForm