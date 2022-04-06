import React from 'react'
import './homeNews.css'
import imageNine from '../../images/image9.jpg'

function HomeNews() {
    return (
        <div className='homeNews'>
            <div className="homeNewsWrapper">
                <h2>
                    Latest News
                </h2>

                <div className="homeNewsList">
                    <div className="homeNewsListWrapper">
                        <div className="homeNewsItem">
                            <div className="homeNewsItemImage">
                                <img src={imageNine} alt="" />
                            </div>

                            <div className="homeNewsItemInfo">
                                <div className="homeNewsTopInfo">
                                    <div className="homeNewsDate">2020/02/12</div>
                                    <div className="homeNewsAuthor">Admin</div>
                                </div>

                                <h3 className="homeNewsItemTitle">This is the news</h3>

                                <ul className="homeNewsItemDetails">
                                    <li className="homeNewsItemSnippet">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam porro non odio eaque ipsum provident dolor at sit cumque accusantium, error dicta alias. Illum, odio?
                                    </li>
                                </ul>

                                <button className="readMoreButton">read more</button>
                            </div>
                        </div>
                        <div className="homeNewsItem">
                            <div className="homeNewsItemImage">
                                <img src={imageNine} alt="" />
                            </div>

                            <div className="homeNewsItemInfo">
                                <div className="homeNewsTopInfo">
                                    <div className="homeNewsDate">2020/02/12</div>
                                    <div className="homeNewsAuthor">Admin</div>
                                </div>

                                <h3 className="homeNewsItemTitle">This is the news</h3>

                                <ul className="homeNewsItemDetails">
                                    <li className="homeNewsItemSnippet">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam porro non odio eaque ipsum provident dolor at sit cumque accusantium, error dicta alias. Illum, odio?
                                    </li>
                                </ul>

                                <button className="readMoreButton">read more</button>
                            </div>
                        </div>
                    </div>
                    <div className="homeNewsListWrapper">
                        <div className="homeNewsItem">
                            <div className="homeNewsItemImage">
                                <img src={imageNine} alt="" />
                            </div>

                            <div className="homeNewsItemInfo">
                                <div className="homeNewsTopInfo">
                                    <div className="homeNewsDate">2020/02/12</div>
                                    <div className="homeNewsAuthor">Admin</div>
                                </div>

                                <h3 className="homeNewsItemTitle">This is the news</h3>

                                <ul className="homeNewsItemDetails">
                                    <li className="homeNewsItemSnippet">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam porro non odio eaque ipsum provident dolor at sit cumque accusantium, error dicta alias. Illum, odio?
                                    </li>
                                </ul>

                                <button className="readMoreButton">read more</button>
                            </div>
                        </div>
                        <div className="homeNewsItem">
                            <div className="homeNewsItemImage">
                                <img src={imageNine} alt="" />
                            </div>

                            <div className="homeNewsItemInfo">
                                <div className="homeNewsTopInfo">
                                    <div className="homeNewsDate">2020/02/12</div>
                                    <div className="homeNewsAuthor">Admin</div>
                                </div>

                                <h3 className="homeNewsItemTitle">This is the news</h3>

                                <ul className="homeNewsItemDetails">
                                    <li className="homeNewsItemSnippet">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam porro non odio eaque ipsum provident dolor at sit cumque accusantium, error dicta alias. Illum, odio?
                                    </li>
                                </ul>

                                <button className="readMoreButton">read more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeNews