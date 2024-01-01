import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const BackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); 
  };

  return (
    <button type="button" class="btn btn-info p-2" onClick={goBack}>
         <FaArrowRight />    בחזרה
    </button>
  );
};

export default BackButton;
