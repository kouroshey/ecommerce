import Logo from "../../../components/ui/Logo"
import Input from "../../../components/ui/Input"
import Button from "../../../components/ui/Button"
import { Link } from "react-router-dom"
  
const Register = () => {
  return (
    <div className='flex flex-col p-8 gap-10 bg-white items-center justify-center lg:w-1/3 w-full h-full lg:h-max min-w-32 md:max-w-md  rounded-xl border border-gray-3'>
      <Logo />
      <span className="flex w-full justify-start text-h4">صفحه‌ی ورود</span>
      {/* username */}
      <Input
        label='لطفا یوزرنیم خود را وارد کنید'
        type='text'
        inputId='username'
        placeholder='username'
      />
      {/* password */}
      <Input
        label='لطفا پسورد خود را وارد کنید'
        type='password'
        inputId='passowrd'
        placeholder='پسورد'
      />
      {/* confirm */}
      <Input
        label='لطفا مجددا پسورد خود را وارد کنید'
        type='password'
        inputId='confirm'
        placeholder='پسورد'
      />
      {/* email */}
      <Input
        label='لطفا ایمیل خود را وارد کنید'
        type='email'
        inputId='email'
        placeholder='example@email.com'
      />
      <Button
        text='ثبت نام'
        isPink={true}
        width='full'
        textSize='h1'
        defaultClass="w-full text-h4 py-2 rounded-md"
      />
      <div className="flex flex-col gap-1 items-center">
        <span>ثبت نام در ایکامرس به منزله‌ی قبول شرایط و مقررات این وبسایت است</span>
        <Link to='/register' className="text-pink hover:text-gray-7">شرایط و مقررات</Link>
      </div>
    </div>
  )
}

export default Register