import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const BackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); 
  };

  return (
    <div className='mt-2'>
      <button type="button" className="border-0 btn btn-info p-2 rounded-4" onClick={goBack}>
        <FaArrowRight />    בחזרה
      </button>
    </div>    
  );
};

export default BackButton;
