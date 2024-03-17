import React,{useState} from 'react'
import './Contact.css'
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs'
import toast from 'react-hot-toast'
import axios from 'axios'


const Contact = () => {
  

  const [name, setName] = useState("")

  const [email, setEmail] = useState("")
  const [msg, setMsg] = useState("")

  const handleSubmit = async(e) =>{
    e.preventDefault();
    try {
      if(!name || !email || !msg){
        toast.error(" all feilds are reqired")
      }

      const res = await axios.post('http://localhost:8080/api/user/contact',{
        name,
        email,
        msg,
      })

      if(res.data.success){
        toast.success(res.data.message)
        console.log(res.data.message)
        setName("")
        setEmail("")
        setMsg("")
      }
      else{
       console.log(res.data.message)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
    <div className=" contact" id="contact">
      <div className="card card0 border-0">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
            <div className="card1">
              <div className="row border-line">
                
                  <img
                    src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvbnRhY3R8ZW58MHx8MHx8fDA%3D"
                    alt="ocontact"
                    className="image"
                  />
              
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            
              <div className="card2 d-flex card border-0 px-4 py-5">
                <div className="row">
                  <div className="row">
                    <h6>
                      Contact With
                      <BsLinkedin color="blue" size={30} className="ms-2" />
                      <BsGithub color="black" size={30} className="ms-2" />
                      <BsFacebook color="blue" size={30} className="ms-2" />
                    </h6>
                  </div>

                  <div className="row px-3 mb-4">
                    <div className="line" />
                    <small className="or text-center">OR</small>
                    <div className="line" />
                  </div>
                  <div className="row px-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your Name"
                      className="mb-3"
                      value={name}
                      onChange={(e)=> setName(e.target.value)}
                     
                    />
                  </div>
                  <div className="row px-3">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Your Email Address"
                      className="mb-3"
                      value={email}
                      onChange={(e)=> setEmail(e.target.value)}
                      
                     
                    />
                  </div>
                  <div className="row px-3">
                    <textarea
                      type="text"
                      name="msg"
                      placeholder="Write your message"
                      className="mb-3"
                      value={msg}
                      onChange={(e)=> setMsg(e.target.value)}
                     
                    />
                  </div>
                  <div className="row px-3">
                    <button className="button" onClick={handleSubmit}>
                      SEND MESSAGE
                    </button>
                  </div>
                </div>
              </div>
          
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Contact
