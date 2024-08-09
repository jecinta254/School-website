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
        <h2>Nurturing Tomorrow's leaders Today</h2>
        <p>Embark on a transformative educational journey with our school's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>
        <p>With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and commities.</p>
        <p>Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offer the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education</p>
        </div>
    </div>
  )
}

export default About