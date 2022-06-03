import './expert.css'
import expert1 from  '../../assets/expert1.jpg'
import expert2 from  '../../assets/expert2.jpg'
import expert3 from  '../../assets/expert3.jpg'
import expert4 from  '../../assets/expert4.jpg'

const Expert = () => {
  return (
    <div className='expertContainer' id='expert'>
      <div className="expertHeader">
        <h1>Nossos Profissionais de Cozinha</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      <div className="expertGridContainer">
        <div className="expertItem">
          <div className="expertImg">
            <img src={expert1} alt="" />
          </div>
          <p>Alguem Famoso</p>
        </div>
        <div className="expertItem">
          <div className="expertImg">
            <img src={expert2} alt="" />
          </div>
          <p>Alguem Famoso</p>
        </div>
        <div className="expertItem">
          <div className="expertImg">
            <img src={expert3} alt="" />
          </div>
          <p>Alguem Famoso</p>
        </div>
        <div className="expertItem">
          <div className="expertImg">
            <img src={expert4} alt="" />
          </div>
          <p>Alguem Famoso</p>
        </div>
      </div>
    </div>
  )
}

export default Expert