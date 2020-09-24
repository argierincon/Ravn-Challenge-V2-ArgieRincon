import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../views/home/Home.jsx';

import '../assets/styles/Global.sass';

const App = () => (
  <BrowserRouter>
    <Route exact path="/" component={Home} />
    <Route exact path="/:id" component={Home} />
  </BrowserRouter>
);

export default App;
