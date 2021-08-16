import React from 'react';
import logoWordmark from '../../../static/logo-wordmark.png';

const Preloader = () => (
  <div className="preloader">
    <svg className="logo-symbol" viewBox="0 0 41.25 41.25">
      <circle cx="20.62" cy="20.62" r="20.62" />
      <circle className="fill-white" cx="29.97" cy="14.93" r="6.58" />
    </svg>
    <img alt="Mango Glamour" src={"https://res.cloudinary.com/marcos020499/image/upload/v1628720611/MANGO_GLAMOUR_sdfave.png"} />
  </div>
);

export default Preloader;
