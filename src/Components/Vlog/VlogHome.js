import React, { useState, useEffect } from 'react';
import Error from '../Error/Error';
import Title from '../Title/Title';
import { chunkArray } from '../../Utils/helpers';
import VolgCard from './VolgCard';


function VlogHome () {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const theTitle = "וולוגים";
    const subTitle = "הוולוגים שנוספו לאחרונה מוקפים במסגרת אדומה";

    useEffect(() => {
        fetch('./DataHome/DataHomeVlog.json')
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
        <>
            <div  dir='rlt' className="container min-vh-100">
                <Title theTitle={theTitle} subTitle={subTitle}/>
            
                <div>
                    {data.map((row, rowIndex) => (
                        <div key={rowIndex} className="row">
                            {row.map((item, colIndex) => (
                                <div key={colIndex} className="col-md-4 my-3">
                                    <VolgCard title={item.title} date={item.date} language={item.language} isNew={item.isNew} fileId={item.id}/>
                                    {/* <Card title={item.title} date={item.date} language={item.language} isNew={item.isNew} fileId={item.id}/> */}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}


export default VlogHome;