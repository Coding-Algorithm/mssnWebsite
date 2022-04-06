import React from 'react'
import './homeLectures.css'
import imageTen from '../../images/image10.jpg'


function HomeLectures() {
    return (
        <div className='homeLectures'>
            <div className="homeLecturesWrapper">
                <h2>
                    Soul Inspiring Lectures
                </h2>

                <div className="homeLecturesList">
                    <div className="homeLecturesListWrapper">
                        <div className="homeLecturesItem">
                            <div className="homeLecturesItemImage">
                                <img src={imageTen} alt="" />
                            </div>

                            <div className="homeLecturesItemInfo">
                                <h3 className="homeLecturesItemTitle">Lecture Title</h3>

                                <ul className="homeLecturesItemDetails">
                                    <li className="homeSessionItemLecturer">Lecturer: </li>
                                    <li className="homeSessionItemDownloadHits">! <span className="downloadCount">10</span></li>
                                </ul>

                                <button className="downloadButton">Download</button>
                            </div>
                        </div>
                        <div className="homeLecturesItem">
                            <div className="homeLecturesItemImage">
                                <img src={imageTen} alt="" />
                            </div>

                            <div className="homeLecturesItemInfo">
                                <h3 className="homeLecturesItemTitle">Lecture Title</h3>

                                <ul className="homeLecturesItemDetails">
                                    <li className="homeSessionItemLecturer">Lecturer: </li>
                                    <li className="homeSessionItemDownloadHits">! <span className="downloadCount">10</span></li>
                                </ul>

                                <button className="downloadButton">Download</button>
                            </div>
                        </div>
                        <div className="homeLecturesItem">
                            <div className="homeLecturesItemImage">
                                <img src={imageTen} alt="" />
                            </div>

                            <div className="homeLecturesItemInfo">
                                <h3 className="homeLecturesItemTitle">Lecture Title</h3>

                                <ul className="homeLecturesItemDetails">
                                    <li className="homeSessionItemLecturer">Lecturer: </li>
                                    <li className="homeSessionItemDownloadHits">! <span className="downloadCount">10</span></li>
                                </ul>

                                <button className="downloadButton">Download</button>
                            </div>
                        </div>
                    </div>
                    <div className="homeLecturesListWrapper">
                        <div className="homeLecturesItem">
                            <div className="homeLecturesItemImage">
                                <img src={imageTen} alt="" />
                            </div>

                            <div className="homeLecturesItemInfo">
                                <h3 className="homeLecturesItemTitle">Lecture Title</h3>

                                <ul className="homeLecturesItemDetails">
                                    <li className="homeSessionItemLecturer">Lecturer: </li>
                                    <li className="homeSessionItemDownloadHits">! <span className="downloadCount">10</span></li>
                                </ul>

                                <button className="downloadButton">Download</button>
                            </div>
                        </div>
                        <div className="homeLecturesItem">
                            <div className="homeLecturesItemImage">
                                <img src={imageTen} alt="" />
                            </div>

                            <div className="homeLecturesItemInfo">
                                <h3 className="homeLecturesItemTitle">Lecture Title</h3>

                                <ul className="homeLecturesItemDetails">
                                    <li className="homeSessionItemLecturer">Lecturer: </li>
                                    <li className="homeSessionItemDownloadHits">! <span className="downloadCount">10</span></li>
                                </ul>

                                <button className="downloadButton">Download</button>
                            </div>
                        </div>
                        <div className="homeLecturesItem">
                            <div className="homeLecturesItemImage">
                                <img src={imageTen} alt="" />
                            </div>

                            <div className="homeLecturesItemInfo">
                                <h3 className="homeLecturesItemTitle">Lecture Title</h3>

                                <ul className="homeLecturesItemDetails">
                                    <li className="homeSessionItemLecturer">Lecturer: </li>
                                    <li className="homeSessionItemDownloadHits">! <span className="downloadCount">10</span></li>
                                </ul>

                                <button className="downloadButton">Download</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeLectures