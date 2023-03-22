import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App';


/**
 * It's creating a root element for the ReactDOM to render the app into.
 * 
 * @function ReactDOM.createRoot
 * @param { HTMLElement } - Takes an HTMLElement in parameter
 * @returns { Object } root object
 */
const root = ReactDOM.createRoot(document.getElementById('root'));


/**
 * It's rendering the app into the root element.
 * 
 * @function root.render
 * @param { JSX.Element } - Takes a JSX Element in parameter
 */
root.render(
  <BrowserRouter basename="/CharlesHenriSaintMars_12_022023/build">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

