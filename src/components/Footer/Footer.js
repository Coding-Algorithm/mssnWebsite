import './footer.css'

function Footer() {
    return (
        <footer className='footer'>
            <div className="footerWrapper">
                <div className="footerQuickLinks">
                    <h3 className="quickLinksTitle">
                        Quick Links
                    </h3>

                    <ul className="quickLinksList">
                        <li className="quickLinksItem">
                            <a href="/">Home</a>
                        </li>
                        <li className="quickLinksItem">
                            <a href="/about">About us</a>
                        </li>
                        <li className="quickLinksItem">
                            <a href="/session">Sessions</a>
                        </li>
                        <li className="quickLinksItem">
                            <a href="/contact">Contact</a>
                        </li>
                        <li className="quickLinksItem">
                            <a href="/lectures">Lectures</a>
                        </li>
                        <li className="quickLinksItem">
                            <a href="/news">News</a>
                        </li>
                    </ul>
                </div>
                <div className="footerContact">
                    <h3 className="footerContactTitle">Contact Us</h3>
                    <ul className="contactLists">
                        <li className="contactPhoneNumber">
                            <h4 className="phoneNumberTitle">Phone Number</h4>

                            <ul className="phoneNumberList">
                                <li className="phoneNumber">+234 8123 456 - <span className="numberOwner">Amir</span> </li>
                                <li className="phoneNumber">+234 8123 456 - <span className="numberOwner">Amir</span> </li>
                                <li className="phoneNumber">+234 8123 456 - <span className="numberOwner">Amir</span> </li>
                            </ul>
                        </li>
                        <li className="contactEmail">
                            <h4 className="emailTitle">Email</h4>

                            <ul className="emailList">
                                <li className="email">mssnfuoye@gmail.com</li>
                                <li className="web">www.mssnfuoye.com</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="footerDonate">
                    <button className="donateButton">Donate</button>
                </div>
            </div>

            <div className="footerCopyright">
                2022 (c) mssnfuoye
            </div>
        </footer>
    )
}

export default Footer