import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { App } from './App';
import { CreateGlobalStyle } from './ui/style/style-global';

ReactDOM.render(
  <>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
    <CreateGlobalStyle />
  </>,
  document.getElementById('root')
); 