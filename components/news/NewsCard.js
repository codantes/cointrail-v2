import Link from 'next/link'

const NewsCard = ({name, image, title,url}) => {
    return ( 
        <section className='bg-blue/[.35] border-4 border-blue rounded-lg my-8 mx-auto w-4/5 md:w-3/5 flex-col items-start font-mono'>
            <img src={image} className='w-full' alt=""  />
            <Link href={url}>
            <h1 className='text-2xl text-yellow m-5 hover:underline cursor-pointer'>
                {title}
            </h1>
            </Link>
        </section>
     );
}
 
export default NewsCard;