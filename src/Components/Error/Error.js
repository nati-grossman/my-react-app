import React from 'react';

function Error({ message }) {
  return (
    <>
        <div className="container min-vh-100">
            <h1>Error</h1>
            <div className="alert alert-danger text-center" role="alert">
                An error occurred: {message}
            </div>
        </div>
    </>
  );
}

export default Error;
