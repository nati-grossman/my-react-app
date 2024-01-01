import React from 'react';

function Title({ theTitle, subTitle = '' }) {


  return (
    <>
        <div class="container mt-5">
            <div class="text-center">
                <h1 class="display-4">{theTitle}</h1>
                <p class="lead">{subTitle}</p>
            </div>
        </div>
    </>
  );
};

export default Title;
