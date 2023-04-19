import React from 'react'
import troll from '../images/troll_face.svg'

function Header() {
  return (
    <header className="header background">
      <div className="logo">
        <img src={troll} alt="troll face" className="troll-img" />
        <h2 className="header--title">Meme Generator</h2>
      </div>
      <p className="header--project">React Course - Project 3</p>
    </header>
  )
}

export default Header
