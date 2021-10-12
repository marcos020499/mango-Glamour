import { useScrollTop } from 'hooks';
import PropType from 'prop-types';
import React from 'react';

const PageNotFound = ({ history }) => {
  useScrollTop();

  return (
    <div className="page-not-found">
      <h1>:( La pagina que estas buscando no existe.</h1>
      <br />
      <button
        className="button"
        onClick={history.goBack}
        type="button"
      >
        Regresar
      </button>
    </div>
  );
};

PageNotFound.propTypes = {
  history: PropType.shape({
    goBack: PropType.func
  }).isRequired
};

export default PageNotFound;
