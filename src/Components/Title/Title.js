import React from 'react';

function Title({ theTitle, subTitle = '' }) {


  return (
    <>
        <div className="container mt-5">
            <div className="text-center">
                <h1 className="display-4">{theTitle}</h1>
                <p className="lead">{subTitle}</p>
            </div>
        </div>
    </>
  );
};

export default Title;
