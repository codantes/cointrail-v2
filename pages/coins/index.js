import Coin from '../../components/search-coins/Coin'
import { fetchData } from '../../utils/fetchData'

export const getStaticProps = async () => {
    const data = await fetchData('https://api.coingecko.com/api/v3/search/trending')

    return {
        props : {popCoins: data.coins }
    }
}

const Coins = ({popCoins}) => {
    return ( 
        <section>
            <h1 className='text-4xl text-center font-mono text-yellow my-4'>
                Popular Coins
            </h1>
            {
                popCoins.map((coin) => {
                    const key = coin.id
                    return(
                        <Coin 
                        key={key}
                        data={coin}                         
                        />
                    )
                })
            }
        </section>
     );
}
 
export default Coins;