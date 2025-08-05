import React from 'react';

function Resume() {
  return (
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
  );
}

export default Resume;