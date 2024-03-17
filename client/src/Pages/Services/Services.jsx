import React from 'react'
import { FaCode } from "react-icons/fa";
import './services.css'
import { CgWebsite } from "react-icons/cg";

const Services = () => {
  return (
    <>
      
        <div className="container services" id='services'>
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          My Services
        </h2>
        <hr />
        <div className="row">
            <div className="col-lg-6 ">
                <div className="card ">
                    <div className="text-center">
                <FaCode  size={"50px"}  color='#138781'/>
                <h3>Web design</h3>
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, maxime modi quasi cum dolor perspiciatis inventore illum. Ipsum nihil accusantium, modi facere ratione quis cum voluptatum dolorum molestias! Vel, sapiente.
                </p>
                </div>
                </div>
                
                
                
            </div>
            <div className="col-lg-6 ">
                <div className="card">
                    <div className="text-center">
                    <CgWebsite size={"50px"} color='#138781'/>
                <h3>Web developmment</h3>
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, maxime modi quasi cum dolor perspiciatis inventore illum. Ipsum nihil accusantium, modi facere ratione quis cum voluptatum dolorum molestias! Vel, sapiente.
                </p>
                </div>
                </div>
                
                
                
            </div>
        </div>
      </div>
    </>
  )
}

export default Services
