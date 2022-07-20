import Coin from '../../components/search-coins/Coin'
import { fetchData } from '../../utils/fetchData'
import SearchCoin from '../../components/search-coins/SearchCoin'
export const getStaticProps = async () => {
    const data = await fetchData('https://api.coingecko.com/api/v3/search/trending')

    return {
        props : {popCoins: data.coins }
    }
}

const Coins = ({popCoins}) => {
    console.log
    return ( 
        <section>
            <h1 className='text-4xl text-center font-mono text-yellow my-4'>
                Popular Coins
            </h1>
            {
                popCoins.map((coin) => {
                    const key = coin.id
                    const data = coin.item
                    return(
                        <Coin 
                        key={key}
                        data={data}
                        name={data.name}
                        symbol={data.symbol}
                        id={data.id}
                        image={data.small}                         
                        />
                    )
                })
            }

        </section>
     );
}
 
export default Coins;