import React from 'react';
import Code from '../Code/Code';

function LeetCode() {
  return (
    <>
      <div className='container-md'>
        <div className='row'>
          <div className='col-md-2'></div>
          <div className='col-md-8'>
            <h2>LeetCode !!</h2>
            <Code/>
          </div>
          <div className='col-md-2'></div>
        </div>        
      </div>
    </>
  );
}

export default LeetCode;
