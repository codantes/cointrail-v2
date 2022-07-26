import { newsOptions, fetchDataWithOptions } from "../../utils/fetchData";
import NewsCard from "../../components/news/NewsCard";


const latestNews = ({news}) => {
    console.log(news)
    return ( 
        <section>
            <h1 className="text-3xl md:text-5xl m-4 text-center text-yellow font-mono ">
                latest news about cryptocurrencies
            </h1>
            {
                news.map((article) => {
                    return(
                        <NewsCard 
                        key={article.id}
                        image={article.image.url}
                        title={article.title}
                        />
                    )
                })
            }
        </section>
     );
}
 
export const getServerSideProps = async (context) => {
    const newsUrl = 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=crypto&pageNumber=1&pageSize=10&autoCorrect=true&safeSearch=true&fromPublishedDate=null&toPublishedDate=null'
    const data = await fetchDataWithOptions(newsUrl, newsOptions)

    return{ 
        props : {
            news : data.value
        }
    }
}
export default latestNews;