import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'

import Layout from './components/Layout';
import Batter from './components/Batter';
import Pitcher from './components/Pitcher';


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout} >
      <IndexRoute component={Batter}></IndexRoute>
      <Route path="Pitcher" component={Pitcher}></Route>
    </Route>
  </Router>,
  document.getElementById('app'));
