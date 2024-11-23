import React from 'react';
import Header from './Header';

const Layoutt = ({children}) => {
  return (
    <>
      <div className='header'> 
        <Header />
      </div>
      <div className='content'>{children}</div>
    </>
  );
};

export default Layoutt;
