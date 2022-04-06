import React from 'react'
import './homeAbout.css'

function HomeAbout() {
    return (
        <div className='homeAbout'>
            <div className="homeAboutWrapper">
                <h2 className='homeAboutTitle'>About Us</h2>

                <p className="homeAboutInfo">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis hic assumenda doloremque reiciendis, iusto quaerat ut consequuntur corrupti, cumque nobis, qui dignissimos ducimus eligendi itaque?
                </p>

                <span className="readMore">
                    <a href="/">read more</a>
                </span>
            </div>
        </div>
    )
}

export default HomeAbout