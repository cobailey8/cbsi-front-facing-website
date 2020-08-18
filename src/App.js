import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css'

// Import Sub-components
import Nav from './components/Nav';

// Import Page Components
import Home from './Home'
import About from './About';
import Services from './Services';
import Projects from './Projects';
import Contact from './Contact';

function App() {

  return (
    <>
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
    </>
  );
}

export default App;
