import React from 'react';

const Card = ({ title, date, language }) => {
  let languageClass = '';
  if (language === 'JavaScript') {
    languageClass = 'bg-success';
  } else if (language === 'C#') {
    languageClass = 'bg-info';
  } else if (language === 'Python') {
    languageClass = 'bg-warning';
  } else {
    languageClass = 'bg-danger';
  }

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
