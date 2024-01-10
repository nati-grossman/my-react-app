import React from 'react';
import { getBgClassByLanguage } from '../../Utils/helpers';
import { Link } from 'react-router-dom';
import './CardBlackStyle.css';

function Card_Black({ title, date, language , isNew = false, fileId}) {
    const languageClass = getBgClassByLanguage(language);
    const circleClass = getColorCircle();

    function getColorCircle() {
        switch (fileId % 5) {
            case 1:
              return 'green_circle';
            case 2:
              return 'red_circle';
            case 3:
              return 'purple_circle';
            case 4:
              return 'pink_circle';
            case 0:
              return 'blue_circle';
            default:
              return 'Invalid number';
        }
    }


    
    return (
        <>
            <Link to={`/DisplayQAndA/${fileId}`} className="card-link" style={{ textDecoration: 'none' }}>
                <div className={`card shadow-lg ${isNew ? 'border-danger' : ''}`}>
                    <div className={`circle-item ${ isNew ? 'border border-danger' : ''}`}>
                        <div className={`circle ${circleClass}`}></div>
                        <div className="card-body text-white position-relative">
                            <h5 className="card-title h5 fw-bold mb-4 overflow-hidden text-nowrap text-end text-truncate" title={title}>{title}</h5>
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

export default Card_Black;