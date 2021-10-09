/* eslint-disable react/forbid-prop-types */
import { Preloader } from 'components/common';
import PropType from 'prop-types';
import React, { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AppRouter from 'routers/AppRouter';
import { createGlobalStyle } from "styled-components";

const App = ({ store, persistor }) => (
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Preloader />} persistor={persistor}>
        <AppRouter />
      </PersistGate>
    </Provider>
    <GlobalStyle />
  </StrictMode>
);
const GlobalStyle = createGlobalStyle`
  body {
    background: blue;
    margin: 0;
    padding: 0;
    background: linear-gradient(whitesmoke, snow);
    font-family: 'Inconsolata', monospace;
    ::-webkit-scrollbar{width:6px; height: 10px;
      border-left:1px;
       solid #E6ECF8;}
::-webkit-scrollbar-thumb{background-color:#d6872c;}
  }
`;
App.propTypes = {
  store: PropType.any.isRequired,
  persistor: PropType.any.isRequired
};

export default App;
