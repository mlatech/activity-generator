import React from 'react';
import ReactDOM from 'react-dom/client';
import ActivityProvider from './ActivityContext';
import App from './App';
import style from "./style.css"




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <ActivityProvider>
  <App />
 </ActivityProvider>
		
  
);

