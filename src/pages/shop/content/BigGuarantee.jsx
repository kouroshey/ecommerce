import React from 'react'

const BigGuarantee = () => {
    const items = [
        { id: 1, icon: '../public/images/tahvil.svg', text: 'تحویل سریع و آسان' },
        { id: 2, icon: '../public/images/zemanat14.svg', text: '۱۴ روز ضمانت بازگشت کالا' },
        { id: 3, icon: '../public/images/zemanat.svg', text: 'ضمانت اصل بودن کالا' },
    ]
    return (
        <>
            {
                items.map(item => (
                    <div key={item.id} className='flex flex-col items-center gap-5'>
                        <img src={item.icon} className='w-'/>
                        <span className='text-caption'>{item.text}</span>
                    </div>
                ))
            }
        </>
    )
}

export default BigGuarantee