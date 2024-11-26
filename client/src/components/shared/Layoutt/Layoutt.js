import React from 'react';
import Header from './Header';

const Layoutt = ({children}) => {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="row g-0">
        <div className="col-md-3">
          <sidebar/>
        </div>
        <div className="col-md-9">{children}</div>
      </div>
    </>
  );
};

export default Layoutt;
