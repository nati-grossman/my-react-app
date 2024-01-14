import React, { useState , useEffect } from 'react';
import './DialogStyle.css';
import Error from '../Error/Error';
import { IoMdClose } from "react-icons/io";


function Dialog ({ fileId, onClose }) {

  const [error, setError] = useState(null);
  const [jsonData, setJsonData] = useState(null);
  
  useEffect(() => {
    fetch(`../DataQAndA/QAndA_${fileId}.json`)
      .then((response) => response.json())
      .then((data) => {
        setJsonData(data);
      })
      .catch((error) => setError(error.message));
  }, [fileId]);

  

  if (error) {
    return <Error message={error} />;
  }


  return (
    <>
      {jsonData && (
        <div className="dialog card width-dialog h-75">
          <div className="card-header d-flex">
              <p className="card-text m-0 text-muted">{jsonData.date}</p>
              <div className='mx-3'>
                <p className="bg-black d-inline px-3 py-1 rounded-5 text-white">{jsonData.language}</p>
              </div>      
              <div className='flex-fill'></div>
              <button className="close-btn" onClick={onClose}><IoMdClose /></button>
          </div>
          <div className='card-body overflow-auto'>            
            <div className="mb-3">
              <h3 className="card-title">שאלה</h3>
              <p className="card-text fw-normal h5 p-3 lh-base">  {jsonData.Question} </p>
            </div>
            <div className="mb-3">
              <h3 className="card-title">תשובה</h3>
              <div className='p-3'>
                  {jsonData.Answer.map((item, index) => (
                      <p className="card-text fw-normal h5 lh-base" key={index}> {item} </p>
                  ))} 
              </div>                                                           
            </div>            
          </div>
        </div>          
      )}
    </>      
  );
};

export default Dialog;
