export default function Home() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <p id="HeadSubtext">Hi! I'm</p>
        <h1>Ahmad Abrar</h1>
        <p id="HeadSubtext">High School Senior</p>
      </header>

      {/* About Section */}
      <section className="about">
        <h2>About Me</h2>
        <p>
          Hi! I'm a high school senior passionate about programming, especially Python. 
          I have intermediate coding skills and I'm learning about neural networks and AI. 
          Welcome to my portfolio!
        </p>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <h2>My Projects</h2>
        <div className="project-card">
          <h3>Neural Network Project</h3>
          <p>A Python-based neural network implementation for image classification using TensorFlow.</p>
        </div>
        <div className="project-card">
          <h3>Data Analysis Tool</h3>
          <p>Python script for analyzing and visualizing large datasets with pandas and matplotlib.</p>
        </div>
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>This responsive portfolio website built with Next.js and deployed on Vercel.</p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <h2>Skills & Technologies</h2>
        <ul>
          <li>Python (Intermediate)</li>
          <li>Neural Networks (Basic)</li>
          <li>HTML/CSS/JavaScript</li>
          <li>React & Next.js</li>
          <li>Git/GitHub</li>
          <li>Data Analysis</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Get In Touch</h2>
        <p>
          I'm currently looking for internship opportunities and excited to connect with fellow developers!
        </p>
        <div className="contact-links">
          <a href="https://github.com/Akari-08" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="mailto:your-email@example.com">
            Email Me
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Built with Next.js | Hosted on Vercel | © 2024 Ahmad Abrar</p>
      </footer>
    </div>
  );
}