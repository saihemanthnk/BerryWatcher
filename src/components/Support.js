import React from 'react'
import "./Support.css"
import {useState} from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom" 


function Support() {


  const [message,setMessage] = useState("") 

  const navigate = useNavigate()


  const submitHandler = async(event) =>{
    event.preventDefault() 

    try{

      const res = await axios.post("http://localhost:3001/support/me",{name:window.localStorage.getItem("name"),email:window.localStorage.getItem("email"),message})
      alert(res.data.message)
      setMessage("")
      

    }

    catch(err){

      console.error(err)

    }
    

  }



  return (
      <>

    <div className="support-page">
      <h2>Contact Support</h2>
      <p>
        If you have any questions, concerns, or need assistance, feel free to
        reach out to our support team. We are here to help you!
      </p>
      <div className="contact-form">
        
        <form onSubmit={submitHandler}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={window.localStorage.getItem("name")} />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={window.localStorage.getItem("email")}/>

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" value={message} onChange={(event)=>{setMessage(event.target.value)}}></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="contact-info">
        <p>
          For immediate assistance, you can contact us via email or phone:
        </p>
        <p>Email: berrywatcher@strawberrydetection.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>
    </div>
        
      </>
  )
}

export default Support
