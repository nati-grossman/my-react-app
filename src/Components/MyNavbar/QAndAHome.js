import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import Error from '../Error/Error';
import { chunkArray } from '../../Utils/helpers';

function QAndAHome() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('./DataHome/DataHomeQAndA.json')
      .then((response) => response.json())
      .then((jsonData) => {    
        setData(chunkArray(jsonData, 3))
      })
      .catch((error) => setError(error.message));
  }, []);


  if (error) {
    return <Error message={error} />;
  }


  return (
    <div className="container min-vh-100" dir='rlt'>
      <h1>שאלות ותשובות לראיונות עבודה</h1>
      <div>
        {data.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((item, colIndex) => (
            <div key={colIndex} className="col-md-4 my-3">
               <Card title={item.title} date={item.date} language={item.language} />
            </div>
          ))}
        </div>
        ))}
      </div>
    </div>
  );
}

export default QAndAHome;
