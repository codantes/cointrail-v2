import {ImSearch} from 'react-icons/im'
import { useState } from 'react'
import { fetchData } from '../../utils/fetchData'

export const getServerSideProps = async (context) => {
    const data = await fetchData('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')

    return {
        props : {
            data
        }
    }
}

const SearchCoin = ({data}) => {
    const handleSearch =  async () => {
        
    }

    console.log(data)

    const [query, setQuery] = useState('')

    return ( 
        <section>
            <h1  className="text-5xl md:text-7xl my-4 text-center text-yellow font-mono font-bold ">
                Search coins
            </h1>

            <form className='mx-auto flex justify-center items-center'>
                <input
                 className='w-4/5 md:w-3/5 h-9 md:h-12 rounded-l-lg'
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                />
                <button className='h-9 md:h-12 w-9 md:w-12 flex justify-center items-center bg-silver rounded-r-lg'
                
                >
                    <ImSearch />
                </button>
            </form>
        </section>
     );
}
 
export default SearchCoin;