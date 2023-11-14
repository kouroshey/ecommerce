import useWidth from "../../hooks/useWidth"

const CardDetail = ({ text,
    desc }) => {
    const {width, breakPoints} = useWidth()
    return (
        <div className={`${width < breakPoints.lg ? 'w-60' : width < breakPoints.md ? 'w-20' : 'w-80'} flex-col gap-2 flex`}>
            <h2 className='xl:text-h3 lg:text-h4 md:text-sub text-caption font-bold'>{text}</h2>
            <p className='xl:body lg:caption md:text-body text-caption'>{desc}</p>
        </div>
    )
}

export default CardDetail