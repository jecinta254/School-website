import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img className='about-img' src={about_img} alt="" />
            <img className='play-icon' src={play_icon}  alt="" onClick={()=>{setPlayState(true)}} />
        </div>
        <div className="about-right">
        <h3>ABOUT THE SCHOOL</h3>
        <h4>A Tradition of Excellence</h4>
        <p>At Freddy Music Academy, we offer a legacy of musical excellence through passionate, experienced instructors. </p>
        <h4>Comprehensive and Inclusive Programs</h4>
        <p>Our diverse curriculum at Freddy Music Academy covers everything from piano and organ mastery to music theory, vocal performance, and composition,ensuring students at every level can find their path to musical mastery.</p>
        <h4>A Community of Music Lovers</h4>
        <p>Freddy Music Academy is a vibrant community where music lovers of all ages come together to learn, grow, and share their passion. We foster a warm, supportive environment where creativity thrives and lasting friendships are formed. Through recitals, workshops, and collaborative projects.</p>
        </div>
    </div>
  )
}

export default About