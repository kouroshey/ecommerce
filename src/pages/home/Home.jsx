import Card from "../../components/ui/Card"

const Home = () => {
  return (
    <main className="pt-6 flex flex-col">
      <section className="flex gap-4 flex-row-reverse">
        <div className="flex-1">
          <Card
            cardText='مزون زنانه'
            desc='بیزنس بیزنس'
            isDisabled={true}
            text='مزون زنانه'
            type='button'
          />
        </div>
        <div className="flex-col flex flex-1 h-full gap-4">
          <div className="flex gap-4">
            <Card
            
              cardText='مزون دخترانه'
              desc='بیزنس بیزنس'
              isDisabled={true}
              text='مزون دخترانه'
              type='button'
            />
            <Card
            
              cardText='مزون بچگانه'
              desc='بیزنس بیزنس'
              isDisabled={true}
              text='مزون بچگانه'
              type='button'
            />
          </div>
          <div className="">
            <Card
              cardText='مزون مردانه'
              desc='بیزنس بیزنس'
              isDisabled={true}
              text='مزون مردانه'
              type='button'
              maxHeight='h-[12.4rem]'
              textPosition='left'
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home