import React from 'react';
import LoaderImage from '../../assests/world.gif';
import './Loader.css'; // Import the CSS file

const Loader = () => {
  return (
    <div className="loader">
      <img src={LoaderImage} alt="gif" className="loader-image" />
    </div>
  );
};

export default Loader;
