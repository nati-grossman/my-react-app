import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './BackButton.css';


const BackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); 
  };

  return (
    <div className='mt-2'>
      <button type="button" className="btn back-button" onClick={goBack}>
        <FaArrowRight />    בחזרה
      </button>
    </div>    
  );
};

export default BackButton;
