import { fetchDataWithOptions, newsOptions, NewsOptions } from "../../utils/fetchData";

export const getServerSideProps = async (context) => {
    const title = context.params.newsTitle;
    const newsUrl = 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=' + title + '&pageNumber=1&pageSize=10&autoCorrect=true&safeSearch=true&fromPublishedDate=null&toPublishedDate=null'

    const data = await fetchDataWithOptions(newsUrl, newsOptions)
    const article = await data.value[0]

    return {
        props : {
            title : article.title,
            body : article.body,
            article,
        }
    }
} 

const NewsDetails = ({title, article, body}) => {
    console.log(article)
    return ( 
        <section className=' font-mono '>
            <h1 className='text-3xl w-4/5 md:text-5xl   text-yellow my-10 mx-auto'>
                {title}
            </h1>
            <p className='text-xl md:text-2xl text-white leading-9 md:leading-10 w-4/5 mx-auto'>
                {body}
            </p>
        </section>
     );
}
 
export default NewsDetails;