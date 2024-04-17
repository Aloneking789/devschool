import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src={about_img} className='about-img'></img>
        <img src={play_icon} className='play-icon' onClick={()=>{
          setPlayState(true)
        }}></img>
      </div>
      <div className='about-right'>
        <h3>ABOUT US</h3>
        <h2>Fostering a love for learning</h2>
        <p>Our school is dedicated to fostering a love for learning, cultivating critical thinking skills, and building confidence and resilience in our students. We promote diversity and inclusion, encourage leadership and teamwork, and nurture creativity and innovation. With a strong emphasis on integrity and ethics, we empower students to make a positive impact in their communities and the world. Through engaging lessons, supportive environments, and opportunities for growth, we aim to inspire lifelong learners who are equipped with the skills, values, and passion to thrive in an ever-changing global society.</p>
      </div>
    </div>
  )
}

export default About
