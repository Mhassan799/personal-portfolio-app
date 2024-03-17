
import './App.css'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Education from './Pages/Education/Education'
import Project from './Pages/Project/Project'
import Techstack from './Pages/TechStack/Techstack'
import WorkExperience from './Pages/WorrkExperience/WorkExperience'
import ScrollToTop from "react-scroll-to-top";

import Layout from './components/Layout/Layout'
import { useTheme } from './context/ThemeContext'
import  { Toaster } from 'react-hot-toast';
import Services from './Pages/Services/Services'
import Tada from 'react-reveal/Tada';
import MobileNav from './components/MobileNav/MobileNav'


function App() {
  const [theme] = useTheme()

  return (
    <>
    <div id={theme}   >
    <style>
          {`
            body {
              background-color: ${theme === 'dark' ? '#1B1E23' : 'white'};
            }
          `}
        </style>

  
      <Layout/>
      < Toaster />
      <MobileNav/>
      <div className="container">
      <About/>
      <Techstack/>
      <Services/>
      <Education/>
      <WorkExperience/>
      <Project/>
      <Contact/>
      <div className="footer pb-3 ms-3">
          <Tada>
            <h4 className="text-center">Made With 😍 MHTech Solution</h4>
          </Tada>
        </div>
      </div>
      <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "50px" , alignItems: "center", padding: "10px 7px 15px 7px"}}
        />
      </div>
      
    </>
  )
}

export default App
