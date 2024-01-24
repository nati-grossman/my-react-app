import React, { useState } from 'react';
import HomeTitle from '../../images/HomeTitle.jpg';
import HomeTitle1 from '../../images/HomeTitle1.jpg';

function WebExplanation({ titleExplanation, textExplanation, img, imgInLeft }) {
  const [isHovered, setIsHovered] = useState(false);


  let imgSrc = '';
  if(img === 'HomeTitle') {
    imgSrc = HomeTitle;
  }
  if(img === 'HomeTitle1') {
    imgSrc = HomeTitle1;
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
        <div className="card image-container">
          <img src={imgSrc} alt="HomeTitle" className={isHovered ? 'card-img rotated' : 'card-img'} />
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
