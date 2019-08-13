import React, { useEffect } from 'react';
//routes
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//redirect
import PrivateRoute from './components/routing/privateroute';
//components
import Navbar from './components/nav/navbar';
import Home from './components/home/Home';
import About from './components/about/about';
import Services from './components/services/services';
import Gallery from './components/gallery/gallery';
import Blog from './components/blog/Blogposts';
import Contact from './components/contact/contact';

import Signin from './components/auth/signin';
import Dashboard from './components/admin/dashboard';
import NewAdmin from './components/admin/addadmin';

//redux
// import {Provider} from 'react-redux';

import './App.css';

function App() {
  return (
    // <Provider >
    <Router>
      <div className="App" style={{ fontFamily: 'Cinzel,Serif' }}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/signin" component={Signin} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/addadmin" component={NewAdmin} />
        </Switch>
      </div>
    </Router>
    // </Provider>
  );
}

export default App;
