import React, { useState, useEffect } from 'react';
//import Card from '../Card/Card';
import Error from '../Error/Error';
import Title from '../Title/Title';
import CardBlack from '../CardBlack/CardBlack';
import Dialog from '../CardBlack/Dialog';
import { chunkArray } from '../../Utils/helpers';

function QAndAHome() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const theTitle = "שאלות ותשובות לראיונות עבודה";
    const subTitle = "השאלות שנוספו לאחרונה מוקפים במסגרת אדומה";

    const [dialogData, setDialogData] = useState(null);

    const handleCardClick = (fileId) => {
        setDialogData({ fileId });
    };

    const handleCloseDialog = () => {
        setDialogData(null);
    };


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
    <div  dir='rlt' className="container min-vh-100">
        <Title theTitle={theTitle} subTitle={subTitle}/>
      
        <div>
            {data.map((row, rowIndex) => (
                <div key={rowIndex} className="row">
                    {row.map((item, colIndex) => (
                        <div key={colIndex} className="col-md-4 my-3">
                            <CardBlack title={item.title} date={item.date} language={item.language} isNew={item.isNew} fileId={item.id}
                            onClick={() => handleCardClick(item.id)}/>
                            {/* <Card title={item.title} date={item.date} language={item.language} isNew={item.isNew} fileId={item.id}/> */}
                        </div>
                    ))}
                </div>
            ))}

            
            {dialogData && (
                <>
                    <div className="overlay"></div>
                    <Dialog
                    fileId={dialogData.fileId}
                    onClose={handleCloseDialog}
                    />
                </>
                )}
        </div>
    </div>
  );
}

export default QAndAHome;
