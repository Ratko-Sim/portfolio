import './App.scss';
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import About from "./components/About/About.jsx"
import Projects from "./components/Projects/Projects.jsx"
import Contact from "./components/Contact/Contact.jsx"
import Nav from "./components/Nav/Nav.jsx"
import Resume from "./components/Resume/Resume.jsx"
import Home from "./components/Home/Home.jsx"
function App() {
  return (
    <div className="App">
      <Router>
        <main className="Main">
          <AnimatePresence>
            <div className="Main__sidebar">
              <Nav />
            </div>
            <div className="Main__content">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/projects" exact component={Projects} />
                <Route path="/resume" exact component={Resume} />
                <Route path="/contact" exact component={Contact} />
              </Switch>
            </div>
          </AnimatePresence>
        </main>
      </Router>
    </div>
  );
}

export default App;
