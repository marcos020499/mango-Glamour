import { useScrollTop } from 'hooks';
import React from 'react';

const NoInternet = () => {
  useScrollTop();

  return (
    <div className="page-not-found">
      <h1>:( No hay conexion a internet.</h1>
      <p>Por favor, verifica tu conexion a internet e intenta nuevamente.</p>
      <br />
      <button
        className="button"
        onClick={() => window.location.reload(true)}
        type="button"
      >
        Try Again
      </button>
    </div>

  );
};

export default NoInternet;
