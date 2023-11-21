import React from 'react'
import Button from '../../../components/ui/Button'

import { useSelector } from 'react-redux'
import { getCartMainPrice, getDeliveryPrice } from './store'

const Payment = () => {
    const deliveryPrice = Number(useSelector(getDeliveryPrice))
    const mainPrice = Number(useSelector(getCartMainPrice))
    const totalPrice = (mainPrice + deliveryPrice).toLocaleString()
    return (
        <section className='flex flex-col gap-6 p-6'>
            <div className='flex items-center w-full justify-between border-b border-gray-4 border-dashed pb-6'>
                <h3>هزینه ارسال</h3>
                <span>{deliveryPrice.toLocaleString()}</span>
            </div>
            <div className='flex flex-col lg:flex-row lg:items-center w-full gap-2 justify-between border-b border-gray-4 border-dashed pb-6'>
                <h3>کد تخفیف</h3>
                <div className='relative flex justify-start'>
                    <input
                        dir='ltr'
                        type="text"
                        placeholder='کد تخفیف'
                        className='border border-gray-4 rounded-md outline-none text-gray-6 px-2 py-1 ' />
                    <Button
                        text='اعمال کد'
                        isPink={true}
                        defaultClass='absolute top-0 rounded-r-md px-2 w-max right-0 py-1'
                    />
                </div>
            </div>
            <div className='flex w-full flex-col gap-6 border-b border-gray-4 border-dashed pb-6'>
                <div className='w-full flex justify-between items-center'>
                    <span>مبلغ اصلی</span>
                    <span>{mainPrice.toLocaleString()}</span>
                </div>
                <div className='w-full text-gray-5 text-caption flex justify-between items-center'>
                    <span>تخفیف اعمال شده </span>
                    <span>0</span>
                </div>
                <div className='w-full text-gray-5 text-caption flex justify-between items-center'>
                    <span>هزینه ارسال</span>
                    <span>{deliveryPrice.toLocaleString()}</span>
                </div>
            </div>
            <div className='flex items-center flex-col w-full'>
                <div className='flex w-full justify-between items-center'>
                    <span>مبلغ قابل پرداخت:</span>
                    <span>{totalPrice}</span>
                </div>
            </div>
            <div className='flex flex-col w-full gap-2'>
                <Button
                    text='تایید و پرداخت'
                    isPink={true}
                    width='full'
                    textSize='body'
                />
                <Button
                    text='ادامه خرید'
                    isBlack={true}
                    width='full'
                    textSize='body'
                />
            </div>
        </section>
    )
}

export default Payment