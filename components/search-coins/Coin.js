import Link from 'next/link'

const Coin = ({ data}) => {
    console.log(data)
    return ( 
        <div className='bg-blue/[.35] border-4 border-blue rounded-lg my-4 mx-auto w-4/5 flex items-start'>
            <div>
                <img className='rounded-full m-3' src={data.item.small} />
            </div>
            <div>
                <h1 className='text-3xl text-yellow m-3'>
                    {data.item.name}
                </h1>
                <h2 className='text-xl text-yellow m-3'>
                    {data.item.symbol}
                </h2>
            </div>
        </div>
     );
}
 
export default Coin;