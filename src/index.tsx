//1.6 import Home
import {Home} from './components'
//1.9 import css
import './styles.css'

import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <Home title='Soccer Roster' /> {/* //1.7 use Home within the ReactDOM below and pass in prop title */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
