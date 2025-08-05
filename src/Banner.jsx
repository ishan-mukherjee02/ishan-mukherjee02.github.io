import React from 'react';
import './Banner.css';
import { Link } from 'react-router-dom';
import { ReactComponent as HomeIcon } from './home.svg';

function Banner() {
  return (
    <nav className="Banner">
      <div className="Banner-top">
        <Link to="/" className="Banner-icon-link">
          <span className="Banner-icon" role="img" aria-label="home">
            <HomeIcon style={{ width: '5rem', height: '5rem', verticalAlign: 'middle' }} />
          </span>
        </Link>
        {/* You can add your logo or name here if desired */}
      </div>
      <header className="App-header">
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hi, I'm Ishan Mukherjee, a Software Developer. Explore my projects and download my resume below!
        </p>
      </header>
      <ul className="Banner-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/resume">Resume</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Banner;