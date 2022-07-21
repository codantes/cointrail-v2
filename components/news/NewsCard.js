const NewsCard = ({name, image, title}) => {
    return ( 
        <section className='bg-blue/[.35] border-4 border-blue rounded-lg my-6 mx-auto w-4/5 md:w-3/5 flex-col items-start font-mono'>
            <img src={image} alt=""  />
            <h1 className='text-2xl text-yellow m-5'>
                {title}
            </h1>
        </section>
     );
}
 
export default NewsCard;