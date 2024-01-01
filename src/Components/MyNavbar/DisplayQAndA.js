import React, { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSubtleBgClass } from '../../Utils/helpers';

function DisplayQAndA() {
    const { fileId } = useParams();
    
    const [selectedColor, setSelectedColor] = useState('');
    const [jsonData, setJsonData] = useState(null);
    const subtleBgClass = getSubtleBgClass(selectedColor);
  
    useEffect(() => {
      fetch(`../DataQAndA/QAndA_${fileId}.json`)
        .then((response) => response.json())
        .then((data) => {
          setJsonData(data);
          setSelectedColor(data.BgColor);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, [fileId]);


    return (
        <div className="container my-5 py-5 min-vh-100">
            <div className="row justify-content-center py-5" dir="rtl">
                <div className='col-md-2'></div>
                {jsonData && (
                <div className="col-md-8 p-0 rounded shadow-lg">
                    <div className={`card shadow-lg ${subtleBgClass}`}>
                        <div className="card-header bg-light-subtle text-white h3">
                            <div className='d-flex justify-content-between'>
                                <p className="card-text m-0 text-muted">{jsonData.date}</p>
                                <p className="d-inline m-0 badge rounded-5 bg-black">{jsonData.language}</p>
                            </div>
                        </div>

                        <div className="card-body">
                            <div className="mb-3">
                            <h3 className="card-title">שאלה</h3>
                            <p className="card-text fw-normal h4 p-3 lh-base">  {jsonData.Question} </p>
                            </div>
                            <div className="mb-3">
                                <h3 className="card-title">תשובה</h3>
                                <div className='p-3'>
                                    {jsonData.Answer.map((item, index) => (
                                        <p className="card-text fw-normal h4 lh-base" key={index}> {item} </p>
                                    ))} 
                                </div>                                                           
                            </div>
                        </div>
                    </div>
                </div>
                )}
                <div className='col-md-2'></div>
            </div>
        </div>
    );
}

export default DisplayQAndA;
