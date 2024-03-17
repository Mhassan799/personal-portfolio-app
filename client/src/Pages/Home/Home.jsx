import React from 'react'
import Typewriter from 'typewriter-effect';
import './Home.css'
import Resume from '../../assets/Docs/resume.pdf'
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { useTheme } from '../../context/ThemeContext';
import Fade from "react-reveal/Fade";

const Home = () => {
  const [theme, setTheme] = useTheme()

  const handleTheme =()=>{
    setTheme((prevState)=>(prevState === "light" ? "dark" : "light"))
  }
  return (
    <>
       <div className="container-fluid home-container" id="home">
        <div className="theme-btn"  onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={30} />
          ) :  (
            <BsFillSunFill size={30} />
          )}
        </div>
        <div className="container home-content">
        <Fade right>
          <h1>Hi👋, I am a</h1>
          <h2>
                          <Typewriter
                  options={{
                    strings: ['MERN Stack Developer', 'Wordpress Developer', "Full Stack Developer"],
                    autoStart: true,
                    loop: true,
                  }}
                />
          </h2>
          </Fade>
          <Fade bottom>
          <div className="home-buttons">
              <a
                className="btn btn-hire"
                href="https://api.whatsapp.com/send?phone=923023119329"
                rel="noreferrer"
                target="_blank"
              >
                Hire Me
              </a>
              <a className="btn btn-cv" href={Resume} download="my-resume.pdf">
                My Resume
              </a>
            </div>
       </Fade>

        </div>
       
       </div>
    </>
  )
}

export default Home
