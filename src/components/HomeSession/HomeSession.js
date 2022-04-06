import React from 'react'
import './homeSession.css'
import imageEight from '../../images/image8.jpg'


function HomeSession() {
    return (
        <div className='homeSession'>
            <div className="homeSessionWrapper">
                <h2>
                    Interesting Session
                </h2>

                <div className="homeSessionsList">
                    <div className="homeSessionsListWrapper">
                        <div className="homeSessionItem">
                            <div className="homeSessionItemImage">
                                <img src={imageEight} alt="" />
                            </div>

                            <div className="homeSessionItemInfo">
                                <h3 className="homeSessionItemTitle">Session Title</h3>

                                <ul className="homeSessionItemDetails">
                                    <li className="homeSessionItemDay">Day: </li>
                                    <li className="homeSessionItemVenue">Venue: </li>
                                    <li className="homeSessionItemTopic">Topic: </li>
                                    <li className="homeSessionItemLecturer">Lecturer: </li>
                                </ul>
                            </div>
                        </div>
                        <div className="homeSessionItem">
                            <div className="homeSessionItemImage">
                                <img src={imageEight} alt="" />
                            </div>

                            <div className="homeSessionItemInfo">
                                <h3 className="homeSessionItemTitle">Session Title</h3>

                                <ul className="homeSessionItemDetails">
                                    <li className="homeSessionItemDay">Day: </li>
                                    <li className="homeSessionItemVenue">Venue: </li>
                                    <li className="homeSessionItemTopic">Topic: </li>
                                    <li className="homeSessionItemLecturer">Lecturer: </li>
                                </ul>
                            </div>
                        </div>
                        <div className="homeSessionItem">
                            <div className="homeSessionItemImage">
                                <img src={imageEight} alt="" />
                            </div>

                            <div className="homeSessionItemInfo">
                                <h3 className="homeSessionItemTitle">Session Title</h3>

                                <ul className="homeSessionItemDetails">
                                    <li className="homeSessionItemDay">Day: </li>
                                    <li className="homeSessionItemVenue">Venue: </li>
                                    <li className="homeSessionItemTopic">Topic: </li>
                                    <li className="homeSessionItemLecturer">Lecturer: </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="homeSessionsListWrapper">
                        <div className="homeSessionItem">
                            <div className="homeSessionItemImage">
                                <img src={imageEight} alt="" />
                            </div>

                            <div className="homeSessionItemInfo">
                                <h3 className="homeSessionItemTitle">Session Title</h3>

                                <ul className="homeSessionItemDetails">
                                    <li className="homeSessionItemDay">Day: </li>
                                    <li className="homeSessionItemVenue">Venue: </li>
                                    <li className="homeSessionItemTopic">Topic: </li>
                                    <li className="homeSessionItemLecturer">Lecturer: </li>
                                </ul>
                            </div>
                        </div>
                        <div className="homeSessionItem">
                            <div className="homeSessionItemImage">
                                <img src={imageEight} alt="" />
                            </div>

                            <div className="homeSessionItemInfo">
                                <h3 className="homeSessionItemTitle">Session Title</h3>

                                <ul className="homeSessionItemDetails">
                                    <li className="homeSessionItemDay">Day: </li>
                                    <li className="homeSessionItemVenue">Venue: </li>
                                    <li className="homeSessionItemTopic">Topic: </li>
                                    <li className="homeSessionItemLecturer">Lecturer: </li>
                                </ul>
                            </div>
                        </div>
                        <div className="homeSessionItem">
                            <div className="homeSessionItemImage">
                                <img src={imageEight} alt="" />
                            </div>

                            <div className="homeSessionItemInfo">
                                <h3 className="homeSessionItemTitle">Session Title</h3>

                                <ul className="homeSessionItemDetails">
                                    <li className="homeSessionItemDay">Day: </li>
                                    <li className="homeSessionItemVenue">Venue: </li>
                                    <li className="homeSessionItemTopic">Topic: </li>
                                    <li className="homeSessionItemLecturer">Lecturer: </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSession