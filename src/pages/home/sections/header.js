import React from 'react';
import cedarsMark from "../../../assets/images/cedars-mark.png"
import { ReactComponent as RadialImage } from '../../../assets/images/radial-image.svg';
import BottomToTopTransition from '../../../components/transitionContainer';
import success from '../../../assets/images/success.png';
import team from '../../../assets/images/team.png';
import approach from '../../../assets/images/approach.png';
import '../css/header.css'

const Header = () => {
  const strategyItems = [
    { id: 1, image: approach, text: 'Strategic Approach' },
    { id: 2, image: team, text: 'Professional Team' },
    { id: 3, image: success, text: 'Guaranteed Success' },
  ];
  return (
    <div>
        <div class="image-container">
            <img src={cedarsMark} class="fixed-image" alt="Fixed Position Image" />
        </div>
        <div className='svg-radial-container'>
         <RadialImage />
        </div>
        <BottomToTopTransition >
         <header className="header">
            <div className='header-heading'>Providing User-Centric</div>
            <div className='gradient-text'>Solutions for Amazing Ideas</div>
            <h3 className='subheading'>We provide excellence, leave your product<br/>success in our hands</h3>
            <button className='button-style' style={{"borderRadius": "80px", "backgroundColor": "#71FA71"}}>Get a Quote</button>
            <div className="info">
            </div>  
        </header>
        <div className="strategy-component-container">
      {strategyItems.map((item) => (
        <div className="strategy-item" key={item.id}>
          <img src={item.image} alt={item.text} />
          <div className="strategy-item-text">{item.text}</div>
        </div>
      ))}
    </div>
        
    </BottomToTopTransition>
    </div>
  );
};

export default Header;
