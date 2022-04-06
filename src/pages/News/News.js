import AboutHero from '../../components/AboutHero/AboutHero'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import NewsNews from '../../components/NewsNews/newsNews'
import './news.css'

function News() {
    return (
        <div className='newsPage'>
            <div className="newsPageWrapper">
                <Header />
                <AboutHero title='News' />
                <NewsNews />
                <Footer />
            </div>
        </div>
    )
}

export default News