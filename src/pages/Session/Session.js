import AboutHero from '../../components/AboutHero/AboutHero'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import SessionSession from '../../components/SessionSession/SessionSession'
import './session.css'

function Session() {
    return (
        <div className='sessionPage'>
            <Header />
            <AboutHero title='Sessions' />
            <SessionSession />
            <Footer />
        </div>
    )
}

export default Session