import React from 'react'
import { Link } from 'react-router-dom'
import './landing.css'


const Landing = () => {
  return (
    <div style={{textAlign: "center"}}>
      <Link to="/">
        <img className='imgSize' src="https://gyo.gg/files/gallery/misc/wolfgang_scout1590870793.png" alt="logo" />
        </Link>
        <h1>Wolfgang</h1>
        <p>Yo, welcome to our dope online clothing store! Get ready to slay in our stylish and comfy outfits that are guaranteed to make you stand out from the crowd.</p>
    </div>
  )
}

export default Landing