import React from 'react';
import { getBgClassByLanguage } from '../../Utils/helpers';

const Card = ({ title, date, language }) => {
  const languageClass = getBgClassByLanguage(language);
  
  return (
    <div className="card shadow-lg btn">
      <div className="card-body">
        <h5 className="card-title overflow-hidden text-nowrap text-start text-truncate" title={title}>{title}</h5>
        <div className='d-flex justify-content-between'>
            <p className="card-text text-muted">{date}</p>
            <p className={`d-inline badge rounded-5 ${languageClass}`}>{language}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
