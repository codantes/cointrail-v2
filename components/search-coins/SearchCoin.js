import {ImSearch} from 'react-icons/im'
import { useState, useEffect } from 'react'
import { fetchData } from '../../utils/fetchData'
import Coin from './Coin'


const SearchCoin = ({data}) => {

    const [query, setQuery] = useState('')
    const [coinData, setCoinData] = useState([])
    const [Loading, setLoading] = useState(false)

    useEffect(()=>{
        const getCoinData = async () => {
            const coins = await fetchData('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
            setCoinData(coins);
          };
        if(!coinData){
            setLoading(true)
        }
        getCoinData();

        
        setLoading(false)
    },[])

    const handleSearch = async (e) => {
        e.preventDefault()
        console.log(query)
        if(query){
            if(!coins){
                setLoading(true)
            }
            const coins = await fetchData('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30000&page=1&sparkline=false')

            setLoading(false)

            const searchedCoin = coins.filter( (coin) => 
            coin.name.toLowerCase().includes(query.toLowerCase())
            ||coin.symbol.toLowerCase().includes(query.toLowerCase()))
            setQuery('')
            setCoinData(searchedCoin)
        }
    }

    return ( 
        <section>
            <h1 className="text-4xl md:text-6xl my-4 text-center text-yellow font-mono font-bold ">
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
            {Loading &&
                <h1 className="text-4xl md:text-3xl my-4 text-center text-yellow font-mono font-bold ">Loading...</h1>
            }
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