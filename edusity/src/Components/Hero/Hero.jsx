import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>At Freddy Music Academy,</h1>
            <h3>we cultivate musical excellence to create a brighter future for our students </h3>
            <p>Our innovative curriculum is designed to empower aspiring musicians with the skills, knowledge, and experiences needed to excel in the dynamic world of music. From mastering instruments and understanding music theory to developing vocal techniques and exploring composition, our programs are tailored to meet the unique needs of each student. </p>
            <h2>Join us at Freddy Music Academy, where we shape the musicians of tomorrow.</h2>
            <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
        </div>

    </div>
  )
}

export default Hero