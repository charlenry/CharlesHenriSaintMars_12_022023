import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App';


/**
 * It's creating a root element for the ReactDOM to render the app into.
 * 
 * @constant
 * @name root
 * @kind 
 * @type {ReactDOM.Root}
 */
const root = ReactDOM.createRoot(document.getElementById('root'));


/**
 * It's rendering the app into the root element.
 * 
 * @constant
 * @name root
 * @type {ReactDOM.Root}
 */
root.render(
  <BrowserRouter basename="/CharlesHenriSaintMars_12_022023/build">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

