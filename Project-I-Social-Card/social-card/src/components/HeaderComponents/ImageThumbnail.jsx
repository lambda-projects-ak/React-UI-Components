import React from 'react';
import './Header.css';

import logo from './lambda-logo.jpg';

const ImageThumbnail = () => {
  return (
    <img className="logo" src={logo} alt="Lambda School Logo" />
  )
}


export default ImageThumbnail;