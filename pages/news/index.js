import { newsOptions, fetchDataWithOptions } from "../../utils/fetchData";
import NewsCard from "../../components/news/NewsCard";

export const getServerSideProps = async (context) => {
    const key = process.env.NEWS_API_KEY
    const newsUrl = 'https://newsapi.org/v2/everything?q=cryptocurrency&pageSize=20&page=1&apiKey=' + key

    const newsData = await fetchDataWithOptions(newsUrl, newsOptions)
    return{
        props : {
            news : newsData.articles
        }
    }
}

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
                        key={article.url}
                        url={article.url}
                        image={article.imageTourl}
                        title={article.title}
                        />
                    )
                })
            }
        </section>
     );
}
 

export default latestNews;