import React from "react";
import './App.css';
import profilePic from "./assets/faaiz.jpg"; // place your image in src/assets folder

export default function App() {
  return (
    <div className="container fade-in">
      <header className="header">
        <div className="profile-pic-wrapper slide-down">
          <img src={profilePic} alt="Faaiz Khan" className="profile-pic" />
        </div>
        <h1 className="fade-in">Faaiz Khan</h1>
        <p>
          Passionate and technically skilled student proficient in C++, Java, and Python.
          Strong problem-solver with excellent communication skills, ready to learn and contribute.
        </p>
        <div className="links fade-in">
          <a href="mailto:faaizkhanrampur@gmail.com">Email</a>
          <a href="https://github.com/faaizkhan10" target="_blank">GitHub</a>
          <a href="https://linkedin.com/in/faaiz-khan83b846219" target="_blank">LinkedIn</a>
        </div>
      </header>

      <section className="projects">
        <h2>Projects</h2>
        <div className="project-cards">
          <div className="card">
            <strong>MOCBOT:</strong> Chatbot for coal and mining info using AI API, HTML, CSS, JS.
            <a href="https://github.com/faaizkhan10" target="_blank" className="project-link">View on GitHub</a>
          </div>
          <div className="card">
            <strong>CryptoTrackr:</strong> Crypto tracker using React, HTML, CSS, JS.
            <a href="https://github.com/faaizkhan10" target="_blank" className="project-link">View on GitHub</a>
          </div>
          <div className="card">
            <strong>Digital White Board:</strong> Web-based drawing tool using HTML, CSS & JS.
            <a href="https://github.com/faaizkhan10" target="_blank" className="project-link">View on GitHub</a>
          </div>
        </div>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <div className="skills-container">
          <div className="skill">
            <i className="fab fa-html5"></i>
            <span>HTML</span>
          </div>
          <div className="skill">
            <i className="fab fa-css3-alt"></i>
            <span>CSS</span>
          </div>
          <div className="skill">
            <i className="fab fa-js-square"></i>
            <span>JavaScript</span>
          </div>
          <div className="skill">
            <i className="fab fa-react"></i>
            <span>React</span>
          </div>
          <div className="skill">
            <i className="fab fa-python"></i>
            <span>Python</span>
          </div>
          <div className="skill">
            <i className="fab fa-java"></i>
            <span>Java</span>
          </div>
          <div className="skill">
            <i className="fas fa-database"></i>
            <span>SQL</span>
          </div>
          <div className="skill">
            <i className="fas fa-code"></i>
            <span>C++</span>
          </div>
          <div className="skill">
            <i className="fas fa-code"></i>
            <span>C</span>
          </div>
        </div>
      </section>

      <section className="card">
        <h2>Education</h2>
        <ul>
          <li><strong>B.Tech, CSE</strong> – University School of Information and Technology, Delhi (2023–2026), CGPA: 8.54</li>
          <li><strong>B.Sc, CS & ath</strong> – Jamia Millia Islamia (2020–2023), CGPA: 8.81</li>
        </ul>
      </section>

      <section className="card">
        <h2>Achievements</h2>
        <ul>
          <li>1st Prize in DSA track at SDC Dev-a-thon, GGSIPU USS</li>
          <li>Participant in Smart India Hackathon 2023</li>
          <li>Solved 400+ DSA problems on Leetcode</li>
          <li>2-star at CodeChef</li>
          <li>1100 max rating at Codeforces</li>
        </ul>
      </section>

      <section className="card">
        <h2>Certificates</h2>
        <p>Front-End Web Development @ IBM (06/2024 - 08/2024)</p>
      </section>
    </div>
  );
}