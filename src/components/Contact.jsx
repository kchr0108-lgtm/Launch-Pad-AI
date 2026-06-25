import React from 'react'

const Contact = ({ theme = 'light' }) => {
  return (
    <footer id="contact" className={`footer footer--${theme}`}>
      <h2>Launch Pad AI</h2>
      <p>Connect with us and start your next project.</p>
      <div className="contact__icons">
        <a className="contact__icon" href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" />
          </svg>
        </a>
        <a className="contact__icon" href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M14 8h3V4h-3c-3 0-5 2-5 5v2H6v4h3v5h4v-5h3l1-4h-4V9c0-.6.4-1 1-1Z" />
          </svg>
        </a>
        <a className="contact__icon" href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 9h4v11H5V9Zm2-5a2.2 2.2 0 1 1 0 4.4A2.2 2.2 0 0 1 7 4Zm5 5h4v1.5c.7-1 1.8-1.8 3.4-1.8 2.6 0 4.6 1.7 4.6 5.4V20h-4v-5.4c0-1.5-.5-2.5-1.9-2.5-1 0-1.6.7-1.9 1.3-.1.3-.2.7-.2 1.1V20h-4V9Z" />
          </svg>
        </a>
        <a className="contact__icon" href="mailto:hello@launchpadai.com" aria-label="Email">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m4 7 8 6 8-6" />
          </svg>
        </a>
      </div>
      <p className="footer__copy">2026 Launch Pad AI. All rights reserved.</p>
    </footer>
  )
}

export default Contact
