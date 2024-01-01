import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import Error from '../Error/Error';
import { chunkArray } from '../../Utils/helpers';

function QAndAHome() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('./DataHome/aDataHomeQAndA.json')
      .then((response) => response.json())
      .then((jsonData) => {    
        setData(chunkArray(jsonData, 3))
      })
      .catch((error) => setError(error.message));
  }, []);

  return (
    <div className="container min-vh-100">
      <h1>Questions and Answers</h1>
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
      {error && <Error message={error} />}
    </div>
  );
}

export default QAndAHome;
