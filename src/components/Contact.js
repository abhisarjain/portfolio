import React,{ useRef } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';

export default function Contact() {
  const contact = "<Contact>";
  const contactend = "</Contact/>";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_erzordp', 'template_fs3xet2', form.current, 'Jwu6KNpgiMR7UmdOQ')
      alert("You have successfully sent your message.Thank you");
  };




  return (
  
    <>
      <div className="contact animate__fadeInDown animate__animated">
      <h1 className=' contacth1'>{contact}</h1>
    <div className="contactlist">
      <div className="form">
    <form  ref={form} onSubmit={sendEmail}>

    <label htmlFor="" className='labels'>Name</label>
    <input className='inputs' type="text" />
    <label htmlFor="" className='labels' >E-Mail</label>
    <input className='inputs' type="email" name="from_name"/>
    <label  htmlFor="" className='labels'>Message</label>
    <input className='inputs' type="textarea" name="message"/>
    <button type='submit' className='slide'>SUBMIT</button>
    
  
    </form>
    
    </div>
   
   
   </div>
   <h1 className=' contacth1'>{contactend}</h1>
      </div>
    </>
  )
}
