import React from 'react';
import Navbar from './Components/Navbar.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css'
import Home from './Components/Pages/Home.js';
import Search from './Components/Pages/Search.js';
import Question from './Components/Pages/Question.js';
import Browser from './Components/Pages/Browser.js';
import Footer from './Components/Footer.js';

function App() {
  return(
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/search' component={Search}/>
        <Route path='/Browser' component={Browser}/>
        <Route path='/question/:key' component={Question}/>
      </Switch>
      <Footer/>
    </Router>
    </>
  )
}

export default App