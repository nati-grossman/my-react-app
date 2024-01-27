import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './BackButton.css';


const BackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); 
  };

  return (
    <div className='mt-2'>
      <button type="button" className="btn back-button" onClick={goBack}>
        <FontAwesomeIcon icon={faArrowRight} />    בחזרה
      </button>
    </div>    
  );
};

export default BackButton;
