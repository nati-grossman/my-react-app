import React, { useState } from 'react';
//import HomeTitle from '../../images/HomeTitle.jpg';
//import HomeTitle1 from '../../images/HomeTitle1.jpg';
import Code from '../../images/code.svg';
import Vlog from '../../images/vlog.svg';
import QA from '../../images/QA.svg';

function WebExplanation({ titleExplanation, textExplanation, img, imgInLeft }) {
  const [isHovered, setIsHovered] = useState(false);


  let imgSrc = '';
  if(img === 'code') {
    imgSrc = Code;
  }
  if(img === 'QA') {
    imgSrc = QA;
  }
  if(img === 'vlog') {
    imgSrc = Vlog;
  }
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className='row m-5 py-4' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {!imgInLeft && 
        <div className='col-md-6'>
          <div className='text-center text-container text-white m-5 p-2'>
            <h2 className='titleExplan'>{titleExplanation}</h2>
            <p className='textExplan'>{textExplanation}</p>
          </div>
        </div> 
      }


      <div className='col-md-6'>
        <div className="image-container">
          <img src={imgSrc} alt="HomeTitle" 
          className={isHovered ? imgInLeft ? 'card-img rotated-left' : 'card-img rotated-right' : 'card-img'} />
        </div>
      </div>


      {imgInLeft && 
        <div className='col-md-6'>
          <div className='text-center text-container text-white m-5 p-2'>
            <h2 className='titleExplan'>{titleExplanation}</h2>
            <p className='textExplan'>{textExplanation}</p>
          </div>
        </div> 
      }
    </div>
  );
}

export default WebExplanation;
