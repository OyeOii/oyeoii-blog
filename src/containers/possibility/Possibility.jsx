import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/travelcats.png';


const Possibility = () => {
  return (
    <div className = "oyeoii__possibility section__padding">
      
      <div class = "oyeoii__possibility-image">
        <img src = { possibilityImage } alt = "possibility" />
      </div>

      <div className = "oyeoii__possibility-content">
        <h4>Visit My Cats ?</h4>
        <h1 className = "gradien-text">Travel With My Cats</h1>
        <p>My first cat named 'Bahamas' and after 4 Months I've got another female one. Her name is 'Nala'. We are traveling a lot together. I was trying my best to make them comfy outside of home. Luckily, They love and comfortable with us. Finally, Nala give birth a loveliest scottish fold. I called her 'Linda' as my spanish nickname.</p>
        <h4>Access this link for their journey >>> 
          <a href='https://nalaxbahamas.com'> 'NalaXBahamas'</a>
        </h4>
      </div>
    </div>
  )
}

export default Possibility;