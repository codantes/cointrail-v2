import Coin from '../../components/search-coins/Coin'

export const getStaticProps = async () => {
    const response = await fetch('https://api.coingecko.com/api/v3/search/trending')
    const data = await response.json()

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