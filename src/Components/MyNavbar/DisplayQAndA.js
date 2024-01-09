import React, { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSubtleBgClass } from '../../Utils/helpers';
import Error from '../Error/Error';
import BackButton from '../MyNavbar/BackButton';

function DisplayQAndA() {
    const { fileId } = useParams();
    
    const [selectedColor, setSelectedColor] = useState('');
    const [error, setError] = useState(null);
    const [jsonData, setJsonData] = useState(null);
    const subtleBgClass = getSubtleBgClass(selectedColor);
  
    useEffect(() => {
      fetch(`../DataQAndA/QAndA_${fileId}.json`)
        .then((response) => response.json())
        .then((data) => {
          setJsonData(data);
          setSelectedColor(data.BgColor);
        })
        .catch((error) => setError(error.message));
    }, [fileId]);


    if (error) {
        return <Error message={error} />;
    }

    return (
        <div className="container py-5 min-vh-100">
            
            <div className="row justify-content-center py-5" dir="rtl">
                <div className='col-md-2'>
                    <BackButton />
                </div>
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
                </div>
                )}
                <div className='col-md-2'></div>
            </div>
        </div>
    );
}

export default DisplayQAndA;
