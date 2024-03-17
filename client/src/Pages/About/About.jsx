import React from 'react'
import './About.css'
import image from '../../assets/images/mhassan.jpeg'


const About = () => {
  return (
    <>
      <div className="about-section">
        <div className="about " id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
               // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
                alt="profile_pic"
                src={image}
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>


                Hello, I'm Muhammad Hassan, a passionate and dedicated individual on a journey of continuous learning and growth. I completed my earlier education under the Karachi Board, and currently, I'm pursuing my undergraduate studies at the Federal Urdu University of Arts and Technology. My educational journey has been complemented by practical skills acquired through courses in web designing and the MERN (MongoDB, Express.js, React.js, Node.js) stack.

                With a foundation in web design and a comprehensive understanding of the MERN stack, I have honed my skills to become a versatile full-stack developer. I'm enthusiastic about crafting seamless and user-friendly web experiences. My goal is to contribute my skills and knowledge to innovative projects and deliver high-quality solutions. Let's build something amazing together!
              </p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default About
