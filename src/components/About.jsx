import React from 'react'

const About = ({ theme = 'light' }) => {
  return (
    <div id="about" className={`About About--${theme}`}>
      <div className="about__panel">
        <h1 className="about_title">About Agency</h1>
        <div className="about__cards">
          <div className="about__card">
            <h3>Who Are We?</h3>
            <p>At Launch Pad AI, we believe technology should be accessible, intuitive, and powerful. We specialize in building responsive interfaces that connect human users with advanced AI logic.</p>
          </div>
          <div className="about__card">
            <h3>AI Strategy</h3>
            <p>Tailored roadmaps for business growth.</p>
          </div>
          <div className="about__card">
            <h3>Frontend Design</h3>
            <p>Sleek, modern, and mobile-friendly websites.</p>
          </div>
          <div className="about__card">
            <h3>Automation</h3>
            <p>Saving you time by making software work smarter.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
