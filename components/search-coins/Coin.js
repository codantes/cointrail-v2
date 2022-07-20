import Link from 'next/link'

const Coin = ({ image, name, symbol, id }) => {
 
    return ( 
        <div className='bg-blue/[.35] border-4 border-blue rounded-lg my-6 mx-auto p-2 w-4/5 md:w-2/5 flex items-start font-mono'>
            <div>
                <img className='rounded-full m-3 h-12' src={image} />
            </div>
            <Link href={'/coins/' + id}>
                <div className='cursor-pointer'>
                    <h1 className='text-3xl text-yellow mx-3 my-1'>
                        {name}
                    </h1>
                    <h2 className='text-xl text-yellow mx-3 my-1'>
                        {symbol}
                    </h2>
                </div>
            </Link>
        </div>
     );
}
 
export default Coin;