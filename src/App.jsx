import React, { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Form from './components/Form.jsx'
import Contact from './components/Contact.jsx'

const App = () => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className={`app app--${theme}`}>
      <Navbar theme={theme} onThemeToggle={toggleTheme} />
      <Home theme={theme} />
      <About theme={theme} />
      <Form theme={theme} />
      <Contact theme={theme} />
    </div>
  )
}
export default App




