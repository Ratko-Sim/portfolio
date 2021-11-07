import './App.scss';
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Projects from "./Pages/Projects/Projects.jsx"
import Contact from "./Pages/Contact/Contact.jsx"
import Nav from "./components/Nav/Nav.jsx"
import Home from "./Pages/Home/Home.jsx"
import FormSubmittedMessage from "./Pages/Contact/FormSubmittedMessage"
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <main className="Main">
          <div className="Main__navBar">
            <Nav />
          </div>
          <div className="Main__content">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/projects" exact component={Projects} />
              <Route path="/contact" exact component={Contact} />
              <Route path="/thank-you" exact component={FormSubmittedMessage} />
            </Switch>
            <Footer />
          </div>
        </main>
      </Router>
    </div>
  );
}

export default App;
