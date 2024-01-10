import React, { useState, useEffect } from 'react';
//import Card from '../Card/Card';
import Error from '../Error/Error';
import Title from '../Title/Title';
import CardBlack from '../CardBlack/CardBlack';
import { chunkArray } from '../../Utils/helpers';

function QAndAHome() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const theTitle = "שאלות ותשובות לראיונות עבודה";
    const subTitle = "השאלות שנוספו לאחרונה מוקפים במסגרת אדומה";

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
        <Title theTitle={theTitle} subTitle={subTitle}/>
      
        <div>
            {data.map((row, rowIndex) => (
                <div key={rowIndex} className="row">
                    {row.map((item, colIndex) => (
                        <div key={colIndex} className="col-md-4 my-3">
                            <CardBlack title={item.title} date={item.date} language={item.language} isNew={item.isNew} fileId={item.id}/>
                            {/* <Card title={item.title} date={item.date} language={item.language} isNew={item.isNew} fileId={item.id}/> */}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    </div>
  );
}

export default QAndAHome;
