import Link from 'next/link'

const Coin = ({ image, name, symbol, id, price_change, price_change_1w, }) => {
 
    return ( 
        <div className='bg-blue/[.35] border-4 border-blue rounded-lg my-6 mx-auto p-2 w-9/12 flex justify-between items-start font-mono'>
            <div className='m-2'>
            <div>
                <img className='rounded-full m-3 h-12' src={image} />
            </div>
            <Link href={'/coins/' + id}>
                <div className='cursor-pointer'>
                    <h1 className='text-3xl text-yellow mx-3 my-1 hover:underline'>
                        {name}
                    </h1>
                    <h2 className='text-xl text-yellow mx-3 my-1'>
                        {symbol}
                    </h2>
                </div>
            </Link>
            </div>
            {
                price_change &&
                <div className=' flex flex-col m-2'>
                    <h1 className='text-xl text-yellow mx-3 my-3 '> 
                        price change(24hrs) 
                    </h1>
                        <span className={`mx-2  px-2 py-1 rounded-2xl ${price_change >= 0 ? 'bg-green/[.55]': 'bg-red'}`}>
                            {price_change}%
                        </span>
                </div>
            }
        </div>
     );
}
 
export default Coin;