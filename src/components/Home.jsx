import React from 'react'
import aiImg from '../assets/AI.jpg'
import ai3Img from '../assets/ai3.jpg'
import darkImg from '../assets/dark.jpg'
const Home = ({ theme = 'light' }) => {
  const backgroundImage = theme === 'dark' ? darkImg : ai3Img

  return (
    <div id="home" className="Home" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <img className="home__image" src={aiImg} alt="Launch Pad AI" />
      <h1 className="Text1">Ignite Your Business with Launch Pad AI.</h1>
      <p className="Text2">We are a premier digital agency dedicated to helping startups and enterprises automate their workflows using cutting-edge artificial intelligence.</p>
    </div>
  )
}

export default Home
