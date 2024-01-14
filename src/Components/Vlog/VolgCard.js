import React from 'react';
import { Link } from 'react-router-dom';
import { getBgClassByLanguage, getColorCircle } from '../../Utils/helpers';
//import './VolgCardStyle.css';

function VolgCard({ title, date, language , isNew = false, fileId, onClick}) {
    const languageClass = getBgClassByLanguage(language);
    const circleClass = getColorCircle(fileId);

    const handleClick = () => {
        if (onClick) {
            onClick(title, date);
        }
    };

    
    return (
        <>
            <Link to={`/VlogPage/${fileId}`} className="card-link" style={{ textDecoration: 'none' }}>
                <div className={`card card-black shadow-lg p-0 ${isNew ? 'border-danger' : 'border-0'}`}  onClick={handleClick}  style={{borderRadius: '20px'}}>
                    <div className="circle-item">
                        <div className={`circle ${circleClass}`}></div>
                        <div className="card-body card-body-2 text-white position-relative">
                            <h5 className="card-title h4 fw-bold mb-4 overflow-hidden text-nowrap text-end text-truncate" title={title}>{title}</h5>
                            <div className='d-flex justify-content-between'>
                                <p className="card-text m-0 fw-light">{date}</p>
                                <p className={`d-inline m-0 badge rounded-5 ${languageClass}`}>{language}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
}

export default VolgCard;