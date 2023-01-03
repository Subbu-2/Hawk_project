import React from 'react';
import './index.scss';
import brandLogo from './logo-no-background.png'

  const BrandLogo = () => {
    
    return (
    <div className='brand-logo'>
        <img src={brandLogo} alt='brand icon' className='brand-icon' />
    </div>
    )
  }
  export default BrandLogo;