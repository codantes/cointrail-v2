export const getServerSideProps = async (context) => {
    const id = context.params.coinId;
    const url = 'https://api.coingecko.com/api/v3/coins/' +  id  +'?localization=english&tickers=true&market_data=true&developer_data=false'
    const response = await fetch(url)
    const data = await response.json()
    return {
        props : {data}
    }
}

const CoinDetatails = ({data}) => {
    console.log(data);
    return ( 
        <section>
            <article >
                <section className='my-4 mx-auto p-2 w-4/5 flex items-start justify-center'>
                <div>
                    <img className='rounded-full m-3 h-20' src={data.image.large} />
                </div>
                
                <div>
                        <h1 className='text-5xl md:text-7xl text-yellow mx-3 my-1 underline'>
                            {data.name}
                        </h1>
                        <h2 className='text-3xl md:text-5xl text-yellow mx-3 my-1'>
                            {data.symbol}
                        </h2>
                </div>
                </section>

                <section>
                    <h1 className=' text-yellow mx-3 my-1 '>
                        $ {data.market_data.current_price.usd}
                    </h1>
                    <h2 className='l text-yellow mx-3 my-1'>
                        {data.market_data.market_cap.usd}
                    </h2>
                </section>

                <section>
                    <p className='text-xl md:text-2xl text-white w-4/5 md:w-3/5 mx-auto my-1'>
                        {data.description.en}
                    </p>
                </section>
            </article>
        </section>
     );
}
 
export default CoinDetatails;