import React from 'react';
import { getBgClassByLanguage } from '../../Utils/helpers';
import { Link } from 'react-router-dom';

const Card = ({ title, date, language , isNew = false, fileId}) => {
  const languageClass = getBgClassByLanguage(language);
  
  return (
    <Link to={`/DisplayQAndA/${fileId}`} className="card-link" style={{ textDecoration: 'none' }}>
      <div className={`card shadow-lg btn ${isNew ? 'border-danger' : ''}`}>
        <div className="card-body">
          <h5 className="card-title mb-4 overflow-hidden text-nowrap text-end text-truncate" title={title}>{title}</h5>
          <div className='d-flex justify-content-between'>
              <p className="card-text m-0 text-muted">{date}</p>
              <p className={`d-inline m-0 badge rounded-5 ${languageClass}`}>{language}</p>
          </div>
        </div>
      </div>
     </Link>
  );
};

export default Card;
