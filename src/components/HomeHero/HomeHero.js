import './homeHero.css'
import './HeroContent'
import { useState, useEffect } from 'react'
import HeroContent from './HeroContent'
import HeroItemControllWrapper from './HeroItemControllWrapper'

function HomeHero() {
    console.log('Here')

    const [activeIndex, setActiveIndex] = useState(0)
    const [direction, setDirection] = useState(false)
    const [prevActive, setPrevActive] = useState(1)
    const [initialized, setInitialized] = useState(false)
 
    return (
        <>
            <div className="homeHero">
                <div className="homeHeroWrapper">
                    <HeroContent direction={direction}
                        active={activeIndex}
                        prevActive={prevActive}
                        initialized={initialized}
                    />

                    <HeroItemControllWrapper active={activeIndex}
                        setPrevActive={setPrevActive}
                        setDirection={setDirection}
                        setActive={setActiveIndex}
                        setInitialized={setInitialized}
                    />
                </div>
            </div>
        </>
    )
}

export default HomeHero
