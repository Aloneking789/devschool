import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'

function App() {
  const [playState, setPlayState] = useState(false);

  return (
    <div className='devschool'>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="container">
        <Title subtitle='Our Program' title ='What we offer'></Title>
        <Programs></Programs>
        <About setPlayState={setPlayState}></About>
        <Title subtitle='Gallery' title ='Campus Photos'></Title>
        <Campus></Campus>
        <Title subtitle='TESTIMONIALS' title ='What Student says'></Title>
        <Testimonials></Testimonials>
        <Title subtitle='Contact Us' title ='Get in touch with us'></Title>
        <Contact></Contact>
        <Footer></Footer>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}></VideoPlayer>
    </div>
  )
}

export default App;