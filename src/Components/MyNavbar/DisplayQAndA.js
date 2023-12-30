import React, { useState , useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getSubtleBgClass } from '../../Utils/helpers';

function DisplayQAndA({ fileName = 1 }) {

    const [selectedColor, setSelectedColor] = useState('');
    const [jsonData, setJsonData] = useState(null);
    const subtleBgClass = getSubtleBgClass(selectedColor);
  
    useEffect(() => {
      fetch(`../DataQAndA/QAndA_${fileName}.json`)
        .then((response) => response.json())
        .then((data) => {
          setJsonData(data);
          setSelectedColor(data.BgColor);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, [fileName]);


    const handleColorChange = (event) => {
        setSelectedColor(event.target.value); 
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center" dir="rtl">
                
                <div className="col-md-2">
                    <div className='card mt-5'>
                        <p>"{subtleBgClass}"</p>
                        <select className="form-select" value={selectedColor} onChange={handleColorChange}>
                            <option value="danger">Danger</option>
                            <option value="warning">Warning</option>
                            <option value="primary">Primary</option>
                            <option value="success">Success</option>
                            <option value="info">Info</option>
                            <option value="secondary">Secondary</option>
                            <option value="light">Light</option>
                            <option value="dark">Dark</option>
                        </select>
                    </div>
                </div>


                {jsonData && (
                <div className="col-md-8 p-0 rounded shadow-lg">
                    <div className={`card shadow-lg ${subtleBgClass}`}>
                        <div className="card-header bg-primary text-white"></div>

                        <div className="card-body">
                            <div className="mb-3">
                            <h3 className="card-title">שאלה</h3>
                            <p className="card-text fw-normal h4 p-3 lh-base">  {jsonData.Question} </p>
                            </div>
                            <div className="mb-3">
                            <h3 className="card-title">תשובה</h3>
                            <p className="card-text fw-normal h4 p-3 lh-base"> {jsonData.Answer} </p>
                            </div>
                        </div>
                    </div>                    

                </div>
                )}
            </div>
        </div>
    );
}

export default DisplayQAndA;
