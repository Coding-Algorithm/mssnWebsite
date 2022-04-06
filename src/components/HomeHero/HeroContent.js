import heroDatas from './heroDatas'

// console.log(heroDatas)
function HeroContent({ active, direction, prevActive }) {

  return (
    <div className='heroItemWrapper'>
      { 
        heroDatas.map((heroData, index) => {

          const checkClass = (active, index, prevActive) => {
            if (active === index) {
              if (direction) {
                return ("heroItem active right")
              } else { return ("heroItem active left") }
            }
            else {
              if (prevActive === index) {
                return (direction ? "heroItem inactive right" : "heroItem inactive left")
              }
            }
          }

          return (
            <div key={index} className={checkClass(active, index, prevActive)}>
              <img className="heroItemImage" src={heroData.image} alt="image1" />
              <div className="heroItemInfo">
                <h3 className='heroItemHeading'>{heroData.title}</h3>
                <p className="heroItemText">{heroData.description}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default HeroContent