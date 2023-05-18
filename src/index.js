import React from 'react';
import ReactDOM from 'react-dom/client';
import Context  from './ActivityContext';
import App from './App';
import {BrowserRouter} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Context>
  <App />
 </Context>
		
  
);

