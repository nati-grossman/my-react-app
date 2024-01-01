import React from 'react';
import { getBgClassByLanguage } from '../../Utils/helpers';

const Card = ({ title, date, language , isNew = false}) => {
  const languageClass = getBgClassByLanguage(language);
  
  return (
    <div className={`card shadow-lg btn ${isNew ? 'border-danger' : ''}`}>
      <div className="card-body">
        <h5 className="card-title mb-4 overflow-hidden text-nowrap text-start text-truncate" title={title}>{title}</h5>
        <div className='d-flex justify-content-between'>
            <p className="card-text m-0 text-muted">{date}</p>
            <p className={`d-inline m-0 badge rounded-5 ${languageClass}`}>{language}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
