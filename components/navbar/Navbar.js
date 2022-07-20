import {RiCopperCoinFill} from 'react-icons/ri'
import Link from 'next/link';
const Navbar = () => {
    return ( 
        <div className="flex px-6 py-4 bg-grey items-center justify-between">
           <Link href='/'>
           <div className='flex space-x-reverse items-center cursor-pointer '>
                <RiCopperCoinFill size='3rem' color='#E1F4CB' />
                <h1 className='font-mono text-2xl text-yellow hidden md:block'>
                    cointrail
                </h1>
            </div>
           </Link>
            <ul className='justify-self-end display-block'>
                <Link
                href='/coins'
                >
                    <li className='text-2xl font-mono text-yellow cursor-pointer'>
                        Coins
                    </li>
                </Link>
            </ul>
        </div>
     );
}
 
export default Navbar;