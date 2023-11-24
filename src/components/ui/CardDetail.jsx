import useWidth from "../../hooks/useWidth"

const CardDetail = ({ text,
    desc }) => {
    const { width, breakPoints } = useWidth()
    return (
        <div className={` flex-col gap-1 md:gap-2 flex`}>
            <h2 className='xl:text-h3 lg:text-h4 md:text-sub text-body font-extrabold'>{text}</h2>
            <p className='xl:body lg:caption md:text-body  text-caption'>{desc}</p>
        </div>
    )
}

export default CardDetail