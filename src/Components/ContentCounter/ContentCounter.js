import React, { useState, useEffect } from 'react';
import Error from '../Error/Error';
import './ContentCounter.css';


function ContentCounter({ url, name }) {
  const [error, setError] = useState(null);
  const [length, setLength] = useState(0);
  
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((jsonData) => {
        setLength(jsonData.length);
      })
      .catch((error) => setError(error.message));
  }, [url]);

  
  if (error) {
    return <Error message={error} />;
  }

  return (
    <>
      <div className='col-md-4 my-5'>
        <h3 className='text-center text-white mb-5'>{name}</h3>
        <div className="card mx-auto mt-4 circle-counter">
          <div>{length}</div>
        </div>
      </div>
    </>    
  );
}

export default ContentCounter;
