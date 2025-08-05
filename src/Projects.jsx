import React from 'react';

function Projects() {
  return (
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
  );
}

export default Projects;