import React, { useState } from 'react'
import Button from '../../../components/ui/Button'

const SelectSize = () => {
    const [size, setSize] = useState('M')

    const sizes = ['XS', 'S', 'MD', 'L', 'XL']
     
    const sizeSelectHandle = (text) => setSize(text)
  return (
        <div className='flex flex-col gap-2'>
            <div className='flex gap-2'>
                <span>سایز:</span>
                <span>{size}</span>
            </div>
            <div className='flex gap-4'>
                {sizes.map(size => (
                    <Button
                        text={size}
                        isPink={true}
                        onClick={() => sizeSelectHandle(size)}
                        width='full'
                    />
                ))}
            </div>
        </div>
    )
}

export default SelectSize