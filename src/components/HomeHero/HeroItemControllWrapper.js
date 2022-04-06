import heroDatas from './heroDatas'

// console.log(heroDatas)
function HeroContent({ active, setActive, setDirection, setPrevActive }) {
  let lastActive;

  const checkClass = (presentActive, nextActive) => {
    // let next = index === heroDatas.length ? 1 : index + 1
    if (presentActive < nextActive) {
      setPrevActive(presentActive)
      setDirection(false)
      setActive(nextActive)
    } else {
      setPrevActive(presentActive)
      setDirection(true)
      setActive(nextActive)
    }
  }


  return (
    <div className='heroItemControlWrapper'>
      {
        heroDatas.map((d, i) => {
          let prev = i === 1 ? heroDatas.length : i - 1
          let next = i === heroDatas.length ? 1 : i + 1
          return (
            <div key={i} onClick={() => checkClass(active, i)} className={active === i ? "heroItemControl active" : "heroItemControl"}></div>
          )
        })
      }
    </div>
  )
}

export default HeroContent