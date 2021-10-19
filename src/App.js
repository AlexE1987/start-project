import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import About from './components/pages/About/About';
import Home from './components/pages/Home/Home';
// import Product from './components/pages/Product';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/about" component={About} />
        {/* <Route path="/product" component={Product} /> */}
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
