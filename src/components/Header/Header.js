import React from 'react'
import { useState } from 'react'
import './header.css'

function Header() {

    const [active, setActive] = useState(false)

    const menuDrawer = () => {
        setActive(!active)
    }


    return (
        <>
            <header>
                <div className="upperNav">
                    <div className="leftUpperNav">

                    </div>

                    <div className="rightUpperNav">
                        <ul className="upperNavMenu">
                            <li><a href="/">Login</a></li>
                            <li><a href="/">Logout</a></li>
                            <li><a href="/">Profile</a></li>
                        </ul>
                    </div>
                </div>

                <div className="lowerNav">
                    <div className="lowerNavLogo">
                        <h3 className="logo"><a href="/">Logo</a></h3>
                    </div>

                    <div className="lowerNavHarmburger">
                        <span className='lowerNavHarmburgerSpan'></span>
                        <span className='lowerNavHarmburgerSpan'></span>
                        <span className='lowerNavHarmburgerSpan'></span>
                    </div>

                    <ul className="lowerNavMenu">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/session">Sessions</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/lectures">Lectures</a></li>
                        <li><a href="/news">News</a></li>
                        <li className='headerDonate'><a className='headerDonateLink' href="/">Donate</a></li>
                    </ul>
                </div>


                <div className="mobileMenu">

                    <div className="mobileLogo">
                        <h3 className="logo"><a href="/">Logo</a></h3>
                    </div>

                    {/* <div className='mobileHarmburger'> */}
                    <div className={active ? 'mobileHarmburger active' : 'mobileHarmburger inactive'} onClick={() => menuDrawer()}>
                        <span className='harmburgerMenuSpan'></span>
                        <span className='harmburgerMenuSpan'></span>
                        <span className='harmburgerMenuSpan'></span>
                    </div>

                    {/* <div className="mobileNavContainer"> */}
                        <div className={active ? "mobileNav active" : "nonMobileNav"}>
                            <ul className="mobileNavMenu">
                                <li><a href="/">Home</a></li>
                                <li><a href="/about">About Us</a></li>
                                <li><a href="/session">Sessions</a></li>
                                <li><a href="/contact">Contact</a></li>
                                <li><a href="/lectures">Lectures</a></li>
                                <li><a href="/news">News</a></li>
                                <hr className='mobileMenuDivider' />
                                <li><a href="/login">Login</a></li>
                                <li><a href="/logout">Logout</a></li>
                                <li><a href="/profile">Profile</a></li>
                                <li className='headerDonate'><a className='headerDonateLink' href="/">Donate</a></li>
                            </ul>
                        </div>
                    {/* </div> */}
                </div>


            </header>
        </>
    )
}

export default Header
