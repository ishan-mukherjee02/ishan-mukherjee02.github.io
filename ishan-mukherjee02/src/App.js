import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hi, I'm Ishan Mukherjee, a Software Developer. Explore my projects and download my resume below!
        </p>
      </header>
      
      <main>
        {/* Projects Section */}
        <section id="projects" className="App-section">
          <h2>Projects</h2>
          <div className="project-list">
            <div className="project">
              <h3>Project 1: Blackjack Trainer</h3>
              <p>
                A tool to help users learn optimal strategies for playing Blackjack.
              </p>
              <a href="https://github.com/ishan-mukherjee02/blackjack-trainer-rust" target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </div>
            {/* Add more projects here */}
            <div className="project">
              <h3>Project 2: Packet Sniffer</h3>
              <p>
                A simple C program to see what packets are being sent over a given network adapter.
              </p>
              <a href="https://github.com/ishan-mukherjee02/packet-sniffer" target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </div>
          </div>
        </section>
        
        {/* Resume Section */}
        <section id="resume" className="App-section">
          <h2>Resume</h2>
          <p>
            Download my resume to learn more about my background and skills.
          </p>
          <a 
            href="/Mukherjee_Resume.pdf" 
            className="App-link" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </section>
      </main>
      
      <footer className="App-footer">
        <p>&copy; {new Date().getFullYear()} Ishan Mukherjee. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
