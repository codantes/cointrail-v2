import { fetchData, newsOptions, fetchDataWithOptions } from "../../utils/fetchData";
import NewsCard from "../../components/news/NewsCard";

export const getServerSideProps = async (context) => {
    const id = context.params.coinId;
    const key = process.env.NEWS_API_KEY

    const coinUrl = 'https://api.coingecko.com/api/v3/coins/' +  id  +'?localization=english&tickers=true&market_data=true&developer_data=false'
    
    const coinData = await fetchData(coinUrl);
    return {
        props : {
            name : coinData.name,
            description : coinData.description.en,
            image : coinData.image.large,
            symbol : coinData.symbol,
            price_1hr : coinData.market_data.current_price.usd,
            price_change_1hr : coinData.market_data.price_change_percentage_1h_in_currency.usd,
            price_change_1d : coinData.market_data.price_change_percentage_24h,
            price_change_1w : coinData.market_data.price_change_percentage_7d,
            price_change_1m : coinData.market_data.price_change_percentage_30d,
            price_change_1y : coinData.market_data.price_change_percentage_1y,
            market_cap : coinData.market_data.market_cap.usd,
            market_data : coinData.market_data,
        }
    }
}

const CoinDetatails = (
    {name, 
    description, 
    image,symbol, 
    price_1hr, 
    market_cap, 
    price_change_1d,
    price_change_1w,
    price_change_1m, 
    price_change_1y,
    news,
    url}) => {

    return ( 
        <section className="w-full">
            <article className="font-mono">
                <section className='my-4 mx-auto p-2 w-4/5 flex items-start justify-center'>
                <div>
                    <img className='rounded-full m-3 h-16 md:h-20' src={image} />
                </div>
                
                <div>
                        <h1 className='text-4xl md:text-7xl text-yellow mx-3 my-1 underline'>
                            {name}
                        </h1>
                        <h2 className='text-3xl md:text-5xl text-yellow mx-3 my-1'>
                            {symbol}
                        </h2>
                </div>
                </section>

                <section className='bg-blue/[.35] border-4 border-blue rounded-lg my-4 mx-auto p-2 w-4/5 flex-col items-start md:w-3/5'>
                    <h1 className=' text-yellow mx-3 my-1 '>
                        current price : $ {price_1hr}
                    </h1>
                    <h2 className=' text-yellow mx-3 my-1'>
                        market cap : {market_cap}
                    </h2>
                    <h2 className=' text-yellow mx-3 my-3  '>
                        price change(1 day) : 
                        <span className={`mx-2  px-2 py-1 rounded-2xl ${price_change_1d >= 0 ? 'bg-green/[.55]': 'bg-red'}`}>
                            {price_change_1d}%
                        </span>
                    </h2>
                    <h2 className=' text-yellow mx-3 my-3 '>
                        price change(1 week) : 
                        <span className={`mx-2  px-2 py-1 rounded-2xl ${price_change_1w >= 0 ? 'bg-green/[.55]': 'bg-red'}`}>
                            {price_change_1w}%
                        </span>
                    </h2>
                    <h2 className=' text-yellow mx-3 my-3 '>
                        price change(1 month) : 
                        <span className={`mx-2  px-2 py-1 rounded-2xl ${price_change_1m >= 0 ? 'bg-green/[.55]': 'bg-red'}`}>
                            {price_change_1m}%
                        </span>
                    </h2>
                    <h2 className=' text-yellow mx-3 my-3 '>
                        price change(1 year) : 
                        <span className={`mx-2  px-2 py-1 rounded-2xl ${price_change_1y >= 0 ? 'bg-green/[.55]': 'bg-red'}`}>
                            {price_change_1y}%
                        </span>
                    </h2>
                </section>

                <section className="w-4/5 md:w-3/5 mx-auto my-4 ">
                    <p className='text-xl md:text-2xl text-white leading-9 md:leading-10'>
                        {description}
                    </p>
                </section>
                
            </article>
        </section>
     );
}
 
export default CoinDetatails;