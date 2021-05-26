//1.6 import Home
import {Home,Dashboard,SignIn} from './components'
//1.9 import css
import './styles.css'

// Import From react-router-dom
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>

        <Route exact path='/'>
          <Home title='Soccer Roster'/>
        </Route>
        {/* look like this because they dont require prop title like Home */}
        <Route path='/dashboard' component={Dashboard}/> 
        <Route path='/signin' component={SignIn}/>

      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
