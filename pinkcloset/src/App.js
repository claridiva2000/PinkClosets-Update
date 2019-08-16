import React, { useEffect } from 'react';
//routes
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//redirect
import PrivateRoute from './components/routing/privateroute';
//components
import Navbar from './components/nav/navbar';
import BottomNav from './components/nav/bottomnav';
import Home from './components/home/Home';
import About from './components/about/about';
import Services from './components/services/services';
import Gallery from './components/gallery/gallery';
import Blog from './components/blog/Blogposts';
import Contact from './components/contact/contact';
import NotFound from './components/routing/NotFound';

import Signin from './components/auth/signin';
import Dashboard from './components/admin/dashboard';


//redux
import {Provider} from 'react-redux';
import store from './store';

import './App.css';

function App() {
  return (
    <Provider store={store} >
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
          <Route component={NotFound}/>
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          
        </Switch>
        <BottomNav/>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
