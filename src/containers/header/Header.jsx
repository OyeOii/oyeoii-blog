import React from 'react';
// import { SubHeading } from '../../components';
import './header.css';
// import Possibility from '../possibility/Possibility';
// import { maltamap } from '../../assets';
import Paris from '../../assets/mewithmycatinparis.jpeg';
// import Marbella from '../../assets/MarbellaSpainOyeOii.jpg'
// import Venice from '../../assets/VeniceItalyOyeoii.jpg'
// import Comino from '../../assets/CominoMaltaOyeoii.jpg'



const Header = () => {
  return (
    <nav className = "oyeoii__header section__padding" id="home">
      <div className = "oyeoii__header-info">
        <div className = "oyeoii__header-text">
          <h1 className = "gradient__text">☁︎TRAVELHOLIC☀</h1>
          <h2 className = "gradient__text">TRAVEL BLOG OF OYEOII WITH LOVELY CATS </h2>
          <p>I have opened my world <br></br>
          I love traveling around and tasting local food <br></br>
          From Asia till 5 years in Malta and Europe <br></br>
          My cats were born.. <br></br>
          Our Journey started together <br></br>
          </p>
        </div>
        
        
        <div className="oyeoii__header-button">
          <button type="button">About me</button>
          <button type="button">Travel With Cats</button>
        </div>
      <div />

        
    </div>  
        <div className = "oyeoii__header-image">
          <img src = { Paris } />
          {/* <img src = { Venice } />
          <img src = { Comino } /> */}
        </div>
      
  </nav>
  );
};

export default Header;