import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>"Empowering Minds, Enriching Futures."</h1>
        <p>Our aim is to nurture curious minds, foster a love for learning, and inspire excellence in every student, guiding them towards a future filled with knowledge, compassion, and success.</p>
        <button className='btn'> Explore more <img className='' src={dark_arrow}></img></button>
      </div>
    </div>
  )
}

export default Hero
