import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'

import './App.css';

import Home from './components/Home'
import About from './components/About'
import Packages from './components/Packages'

function App() {

  // const packages = [...]

  return (
    <div className="App">
      <Router>
        <header>
          <div className="navBar">
            <ul>
              <li>
                <link to="/">Home</link>
              </li>
              <li>
                <link to="/about">About</link>
              </li>
              <li>
                <link to="/packages">Our Packages</link>
              </li>
            </ul>
          </div>
        </header>
      </Router>
    </div>
  );
}

export default App;