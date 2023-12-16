import { logOut } from '../../../../pages/login/content/store'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const UserMenu = ({ isLogin }: { isLogin: boolean }) => {

    const dispatch = useDispatch()
    const logOutHandle = () => { dispatch(logOut()) }

    return (
        <div className="w-max p-4 bg-white rounded-md shadow-lg border border-gray-2 flex flex-col gap-4 text-gray-7">
            {isLogin ?
                <ul className='flex flex-col gap-2 text-body'>
                    <li>
                        <Link to='#'>نام کاربر</Link>
                    </li>
                    <li>
                        <Link to='#'>لیست علاقه مندی‌ها</Link>
                    </li>
                    <li onClick={logOutHandle}>
                        <Link to='#'>خروج از حساب</Link>
                    </li>
                </ul> :
                <Link to='register' className='text-body px-2 py-2 rounded-md hover:bg-pink hover:text-white text-pink'>برای ثبت نام / ورود کلیک کنید</Link>
            }
        </div>
    )
}

export default UserMenu