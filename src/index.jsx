import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename="/CharlesHenriSaintMars_12_022023/build">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

