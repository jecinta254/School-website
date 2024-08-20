import React, { useEffect, useRef } from 'react'
import './Testimanials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'


const Testimonals = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{
    if(tx > -50){
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = ()=>{
    if(tx < 0){
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
        <div className="slider">
            <ul ref={slider}>
              <li>
                <div className="slide">
                  <div className="user-info">
                    <img src={user_1} alt="" />
                    <div>
                      <h3>Piano Classes</h3>
                      <span>Contemporary and Classical</span>
                    </div>
                  </div>
                  <p>
                  These classes cover both modern and classical piano techniques, allowing students to explore a wide range of musical styles. Whether learning pop songs or classical compositions, students gain skills in reading sheet music, finger techniques, and expressive playing.
                  </p>
                </div>
              </li>
              <li>
                <div className="slide">
                  <div className="user-info">
                    <img src={user_2} alt="" />
                    <div>
                      <h3>Organ Classes</h3>
                      <span>Traditional and Electric organs</span>
                    </div>
                  </div>
                  <p>
                  Organ classes focus on developing proficiency in playing both traditional and electric organs. Students learn about the instrument's mechanics, repertoire, and techniques, preparing them for performances in church, concert settings, or solo recitals.
                  </p>
                </div>
              </li>
              <li>
                <div className="slide">
                  <div className="user-info">
                    <img src={user_3} alt="" />
                    <div>
                      <h3>Music Theory</h3>
                      <span>ABRSM Grades 1-8</span>
                    </div>
                  </div>
                  <p>
                  These classes provide a solid foundation in music theory, covering everything from basic notation to advanced harmony and composition. Students are prepared for ABRSM exams, ensuring they have the theoretical knowledge to complement their practical skills.
                  </p>
                </div>
              </li>
              <li>
                <div className="slide">
                  <div className="user-info">
                    <img src={user_4} alt="" />
                    <div>
                      <h3>Vocal Lessons</h3>
                      <span> Enhance vocal abilities</span>
                    </div>
                  </div>
                  <p>
                  Vocal lessons are designed to help students improve their singing technique, vocal range, and performance confidence. Whether focusing on classical, pop, or choral music, students receive personalized instruction to enhance their vocal abilities.
                  </p>
                </div>
              </li>
              <li>
                <div className="slide">
                  <div className="user-info">
                    <img src={user_4} alt="" />
                    <div>
                      <h3>Music Composition</h3>
                    </div>
                  </div>
                  <p>
                  In these classes, students learn the fundamentals of writing original music. From melody creation to arranging and orchestrating, students develop their own unique compositional style and gain insight into the creative process.
                  </p>
                </div>
              </li>
              <li>
                <div className="slide">
                  <div className="user-info">
                    <img src={user_4} alt="" />
                    <div>
                      <h3>Audio Recording</h3>
                    </div>
                  </div>
                  <p>
                  Audio recording courses teach students the technical skills needed to capture, mix, and produce high-quality sound recordings. This program covers everything from microphone techniques to digital audio workstations, equipping students for work in studios or home recording setups.
                  </p>
                </div>
              </li>
              <li>
                <div className="slide">
                  <div className="user-info">
                    <img src={user_4} alt="" />
                    <div>
                      <h3>Choral Training</h3>
                    </div>
                  </div>
                  <p>
                  Choral training focuses on ensemble singing, teaching students to blend their voices, harmonize, and follow a conductor. Students participate in choir rehearsals and performances, developing teamwork, vocal techniques, and musicality.
                  </p>
                </div>
              </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonals