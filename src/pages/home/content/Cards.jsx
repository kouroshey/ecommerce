import Card from "../../../components/ui/Card"

const Cards = () => {
    const cardContentDetails = [
        {id: 1, text: 'مزون زنانه', cardText: 'مزون زنانه', desc: 'بیزنس بیزنس'},
        {id: 2, text: 'مزون دخترانه', cardText: 'مزون دخترانه', desc: 'بیزنس بیزنس'},
        {id: 3, text: 'مزون مردانه', cardText: 'مزون مردانه', desc: 'بیزنس بیزنس'},
        {id: 4, text: 'مزون پسرانه', cardText: 'مزون پسرانه', desc: 'بیزنس بیزنس'},
      ]
  return (
    <section className="flex gap-4 flex-row-reverse">
        <div className="flex-1">
          <Card
            cardText= {cardContentDetails[0].cardText}
            desc= {cardContentDetails[0].desc}
            text= {cardContentDetails[0].text}
          />
        </div>
        <div className="flex-col flex flex-1 h-full gap-4">
          <div className="flex gap-4">
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
            <Card
              cardText={cardContentDetails[0].cardText}
              desc={cardContentDetails[0].desc}
              text={cardContentDetails[0].text}
              maxHeight='h-[12.4rem]'
              textPosition='left'
            />
          </div>
        </div>
      </section>
  )
}

export default Cards