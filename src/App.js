import React from 'react';
import './App.css';
import Navbar from './components/Navbar/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import About from './pages/About';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts/index';
import Footer from './components/Footer/index';


const App = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/projects' component={Projects} />
          <Route path='/contacts' component={Contacts} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
