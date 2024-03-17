import React from 'react'
import "./Menu.css"
import { AiFillHome  } from 'react-icons/ai'
import {FcAbout, FcContacts, FcReading, FcServices, FcWorkflow} from 'react-icons/fc'
import {MdReviews} from 'react-icons/md'
// import { Link } from 'react-scroll';
import {Link} from "react-scroll"
import image from '../../../assets/images/mhtechsolution.png'
 



const Menu = ({toggle}) => {
  return (
    <>
      {toggle ? 
      (
        <>
        
            <div className="navbar-profile-pic">
            <img
                // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
                src={image}
                alt="profile pic"
              />
            </div>
            <div className="nav-items">
                <div className="nav-item">
                        <div className="nav-link">
                        <Link
                         to="home"
                         spy={true}
                         smooth={true}
                         offset={-100}
                         duration={100}>
                            <AiFillHome/>
                            Home
                            </Link>
                        </div>
                </div>
                <div className="nav-item">
                        <div className="nav-link">
                        <Link
                         to="about"
                         spy={true}
                         smooth={true}
                         offset={-100}
                         duration={100}>
                            <FcAbout/>
                            About
                            </Link>
                        </div>
                </div>
                <div className="nav-item">
                        <div className="nav-link">
                        <Link
                         to="services"
                         spy={true}
                         smooth={true}
                         offset={-100}
                         duration={100}>
                            <FcServices/>
                            Services
                            </Link>
                        </div>
                </div>
                <div className="nav-item">
                        <div className="nav-link">
                        <Link
                         to="education"
                         spy={true}
                         smooth={true}
                         offset={-100}
                         duration={100}>
                            <FcReading />
                           Education
                            </Link>
                        </div>
                </div>
               
               
                <div className="nav-item">
                        <div className="nav-link">
                        <Link
                         to="experience"
                         spy={true}
                         smooth={true}
                         offset={-100}
                         duration={100}>
                            <FcWorkflow/>
                            experience
                            </Link>
                        </div>
                </div>
                 <div className="nav-item">
                        <div className="nav-link">
                        <Link
                         to="projects"
                         spy={true}
                         smooth={true}
                         offset={-100}
                         duration={100}>
                            <MdReviews/>
                            Projects
                            </Link>
                        </div>
                </div>
                <div className="nav-item">
                        <div className="nav-link">
                        <Link
                         to="contact"
                         spy={true}
                         smooth={true}
                         offset={-100}
                         duration={100}>
                            <FcContacts/>
                            Contact
                            </Link>
                        </div>
                </div>
            </div>
      
       
           
        </>
      ) : (<>
      <div className="nav-items">
                <div className="nav-item">
                        <div className="nav-link" title='home'>
                        <Link
                         to="home"
                         spy={true}
                         smooth={true}
                         offset={-100}
                         duration={100}>
                            <AiFillHome/>
                            </Link>
                           
                        </div>
                </div>
                <div className="nav-item" title='about'>
                        <div className="nav-link">
                        <Link
                         to="about"
                         spy={true}
                         smooth={true}
                         offset={-100}
                         duration={100}>
                            <FcAbout/>
                            </Link>
                          
                        </div>
                </div>
                <div className="nav-item" title='contacts'>
                        <div className="nav-link">
                        <Link
                         to="contact"
                         spy={true}
                         smooth={true}
                         offset={-100}
                         duration={100}>
                            <FcContacts/>
                            </Link>
                            
                        </div>
                </div>
                <div className="nav-item" title='services'>
                        <div className="nav-link">
                        <Link
                         to="services"
                         spy={true}
                         smooth={true}
                         offset={-100}
                         duration={100}>
                            <FcServices/>
                            </Link>
                            
                        </div>
                </div>
                <div className="nav-item">
                        <div className="nav-link" title='experience'>
                        <Link
                         to="home"
                         spy={true}
                         smooth={true}
                         offset={-100}
                         duration={100}>
                            <FcWorkflow/>
                            </Link>
                            
                        </div>
                </div>
                <div className="nav-item" title='testemonials'>
                        <div className="nav-link">
                        <Link
                         to="testemonial"
                         spy={true}
                         smooth={true}
                         offset={-100}
                         duration={100}>
                        <MdReviews/>
                        </Link>

                            
                        </div>
                </div>
            </div>
            
      </>) }
    </>
  )
}

export default Menu
