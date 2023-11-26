import { Link } from 'react-router-dom'
const BlogCard = () => {
    return (
        <div className='flex flex-col max-w-80 rounded-md bg-white shadow-sm hover:shadow-md hover:-translate-y-3 transition-all'>
            <div className=''>
                <img
                    src="https://ruucpllnoqbnsqkahgst.supabase.co/storage/v1/object/sign/products/palto-1.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0cy9wYWx0by0xLmpwZyIsImlhdCI6MTcwMDg5ODI3OSwiZXhwIjoxNzMyNDM0Mjc5fQ.jEdK3EyVHXPCf2zhDfVUI34Uter2__4LzCiqvs6c5bY&t=2023-11-25T07%3A44%3A39.729Z"
                    className='object-cover rounded-t-md'
                />
            </div>
            <div className='flex flex-col gap-4 px-4 py-8'>
                <h3 className='font-bold text-h4'>نحوه شستن انواع پالتو</h3>
                <p className='text-gray-6 text-justify text-ellipsis whitespace-nowrap overflow-hidden'>پالتوهای زمستانی اغلب از قیمت بالایی برخوردار هستند. بنابراین استفاده از روش‌های صحیح شستن پالتو در حفظ زیبایی لباس شما، کاهش زمان شستشو و صرفه‌جویی در هزینه‌ها اثر بسزایی دارد.</p>
                <Link className='text-pink hover:text-black'>ادامه مطلب</Link>
            </div>
        </div>
    )
}

export default BlogCard