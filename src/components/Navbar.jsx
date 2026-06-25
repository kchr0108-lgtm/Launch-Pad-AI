import React, { useState } from 'react'

const Navbar = ({ theme = 'light', onThemeToggle }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className={`navbar navbar--${theme}`}>
      <div className="navbar__brand">
        <span className="navbar__logo">Launch Pad AI</span>
      </div>

      <div className="navbar__actions">
        <button
          className="theme-toggle"
          onClick={onThemeToggle}
          title="Toggle theme"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? '\u{1F319}' : '\u2600\uFE0F'}
        </button>
        {/* Hamburger Toggle Button for mobile screens and to make it responsive */}
        <button 
          className={`navbar__hamburger ${isOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <ul className={`navbar__menu ${isOpen ? 'navbar__menu--open' : ''}`}>
        <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
        <li><a href="#form" onClick={() => setIsOpen(false)}>Form</a></li>
        <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
