import React from 'react'
import './aboutHero.css'
import First from '../../images/image1.jpg'

function AboutHero({title}) {
    return (
        <div className='aboutHero'>
            <div className='aboutHeroWrapper'>
                <img src={First} alt="" />
                <h2 className="aboutHeroTitle">{title}</h2>
            </div>
        </div>
    )
}
 
export default AboutHero