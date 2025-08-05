import './App.css';
import Banner from './Banner';
import Projects from './Projects';
import Resume from './Resume';
import Home from './Home'; // Add this import
import About from './About'; // Add this import
import Portfolio from './Portfolio';
import Contact from './Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Banner />
        <main>
          <Routes>
            <Route path="/" element={<Home />} /> {/* Home page */}
            <Route path="/about" element={<About />} /> {/* About page */}
            <Route path="/portfolio" element={<Portfolio />} /> {/* Portfolio page */}
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} /> {/* Contact page */}
            {/* Add more routes as needed */}
          </Routes>
        </main>
        <footer className="App-footer">
          <p>&copy; {new Date().getFullYear()} Ishan Mukherjee. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
