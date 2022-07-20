import {ImSearch} from 'react-icons/im'
import { useState, useEffect } from 'react'
import { fetchData } from '../../utils/fetchData'
import Coin from './Coin'


const SearchCoin = ({data}) => {

    const [query, setQuery] = useState('')
    const [coinData, setCoinData] = useState([])

    useEffect(()=>{
        const getCoinData = async () => {
            const coins = await fetchData('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
            setCoinData(coins);
          };

        getCoinData();

        return () => {
            // this now gets called when the component unmounts
          };
    },[])

    const handleSearch = async (e) => {
        e.preventDefault()
        console.log(query)
        if(query){
            const coins = await fetchData('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10000&page=1&sparkline=false');


            const searchedCoin = coins.filter( (coin) => 
            coin.name.toLowerCase().includes(query)
            ||coin.symbol.toLowerCase().includes(query))
            setQuery('')
            setCoinData(searchedCoin)
        }
    }

    return ( 
        <section>
            <h1  className="text-5xl md:text-7xl my-4 text-center text-yellow font-mono font-bold ">
                Search coins
            </h1>

            <form className='mx-auto flex justify-center items-center' onSubmit={handleSearch}>
                <input
                 className='w-4/5 md:w-3/5 h-9 md:h-12 rounded-l-lg'
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                />
                <button className='h-9 md:h-12 w-9 md:w-12 flex justify-center items-center bg-silver rounded-r-lg'
                onClick={(e) => {handleSearch(e)}}
                
                >
                    <ImSearch />
                </button>
            </form>
            {
                coinData.map((coin) => {
                    return (
                        <Coin 
                        key={coin.id}
                        image={coin.image}
                        name={coin.name}
                        symbol={coin.symbol}
                        id={coin.id}
                        />
                    )
                })
            }
        </section>
     );
}
 
export default SearchCoin;