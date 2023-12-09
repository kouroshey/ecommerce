import CardDetail from './CardDetail'
import Button from './Button'

interface CartProps {
    cardText: string | undefined
    desc: string | undefined
    text: string | undefined
    img: string | undefined
}

const Card = ({
    cardText,
    desc,
    text,
    img
}: CartProps) => {
    return (
        <div className='rounded-xl relative h-full hover:-translate-y-2 hover:cursor-pointer hover:shadow-md transition-all duration-300'>
            <div className='overflow-hidden h-full'>
                <img
                    src={img}
                    className='rounded-xl h-full object-cover w-full'
                />
            </div>
            <div className='text-white flex w-full h-full top-0 absolute z-20'>
                <div className='flex flex-1 justify-center items-start h-full'>
                    <div className='flex flex-col justify-start p-4 gap-2 '>
                        <CardDetail text={cardText} desc={desc} />
                        <Button
                            text={text}
                            type='button'
                            isGray={true}
                            isDisabled={true}
                            link={false}
                        />
                    </div>
                </div>
                <div className='flex flex-1'></div>
            </div>
            <div className="absolute top-0 opacity-20 z-10 bg-gradient-to-t via-black from-white to-black h-full w-full rounded-xl" />
        </div>
    )
}

export default Card