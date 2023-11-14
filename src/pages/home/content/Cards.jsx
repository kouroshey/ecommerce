import Card from "../../../components/ui/Card"
import useWidth from "../../../hooks/useWidth"

const Cards = () => {
    const cardContentDetails = [
        { id: 1, text: 'مزون زنانه', cardText: 'مزون زنانه', desc: 'بیزنس بیزنس' },
        { id: 2, text: 'مزون دخترانه', cardText: 'مزون دخترانه', desc: 'بیزنس بیزنس' },
        { id: 3, text: 'مزون مردانه', cardText: 'مزون مردانه', desc: 'بیزنس بیزنس' },
        { id: 4, text: 'مزون پسرانه', cardText: 'مزون پسرانه', desc: 'بیزنس بیزنس' },
    ]
    const { width, breakPoints } = useWidth()
    return (
        <section className=" gap-4 grid md:grid-cols-2 xl:flex-row-reverse xl:flex">
            <div className="xl:flex-1 flex flex-col gap-4">
                <Card
                    cardText={cardContentDetails[0].cardText}
                    desc={cardContentDetails[0].desc}
                    text={cardContentDetails[0].text}
                />
                {width < breakPoints.xl &&
                        <Card
                        cardText={cardContentDetails[0].cardText}
                        desc={cardContentDetails[0].desc}
                        text={cardContentDetails[0].text}
                        maxHeight={width > breakPoints.xl && 'h-[12.4rem]'}
                        textPosition={width > breakPoints.xl && 'left'}
                    />}
            </div>
            <div className="flex-col flex xl:flex-1 h-full gap-4">
                <div className="flex gap-4 flex-col xl:flex-row">
                    <Card
                        cardText={cardContentDetails[1].cardText}
                        desc={cardContentDetails[1].desc}
                        text={cardContentDetails[1].text}
                    />
                    <Card
                        cardText={cardContentDetails[2].cardText}
                        desc={cardContentDetails[2].desc}
                        text={cardContentDetails[2].text}
                    />
                </div>
                <div className="">
                    {width > breakPoints.xl &&
                        <Card
                        cardText={cardContentDetails[0].cardText}
                        desc={cardContentDetails[0].desc}
                        text={cardContentDetails[0].text}
                        maxHeight={width > breakPoints.xl && 'h-[12.4rem]'}
                        textPosition={width > breakPoints.xl && 'left'}
                    />}

                </div>
            </div>
        </section>
    )
}

export default Cards