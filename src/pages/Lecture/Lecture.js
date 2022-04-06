import AboutHero from '../../components/AboutHero/AboutHero'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import LectureLectures from '../../components/LectureLectures/LectureLectures'
import './lecture.css'

function Lecture() {
  return (
    <div className='lecturePage'>
        <div className="lecturePageWrapper">
            <Header />
            <AboutHero title='Lectures' />
            <LectureLectures />
            <Footer />
        </div>
    </div>
  )
}

export default Lecture