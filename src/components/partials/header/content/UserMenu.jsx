import React from 'react'
import { Link } from 'react-router-dom'

const UserMenu = ({ isLogin }) => {
    return (
        <div className="w-max p-4 bg-white rounded-md shadow-lg border border-gray-2 flex flex-col gap-4">
            {isLogin ?
                <ul className='flex flex-col gap-2 text-body'>
                    <li><Link>نام کاربر</Link></li>
                    <li><Link>لیست علاقه مندی‌ها</Link></li>
                    <li><Link>خروج از حساب</Link></li>
                </ul> :
                <Link to='register' className='text-body px-2 py-2 rounded-md hover:bg-pink hover:text-white text-pink'>برای ثبت نام / ورود کلیک کنید</Link>
            }
        </div>
    )
}

export default UserMenu