"use client";

import emailjs from 'emailjs-com';

import { useEffect, useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";

const ContactForm = () => {

    const [submitted, setSubmitted] = useState(false)
    
    const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs.sendForm("service_62fn8ap", "template_1g4s60q", e.target, "user_sWUq5Ae8VbeTY2NDEEjKd").then(res => {
            console.log(res);
        }).catch((err: any) => console.log(err));
        e.target.reset();

        setSubmitted(true);
    }

      useEffect(() => {
        const clearSubmitted = () => {setSubmitted(false)};
        if (submitted) {
            const submittedTimeout = setTimeout(clearSubmitted, 5000);
        }
      }, [submitted])
      

    return ( 
        <div className="flex flex-col items-start justify-start w-full  border-tertiary p-4" onSubmit={(e) => sendEmail(e)}>
          <form className="flex flex-col w-full h-full items-start justify-between gap-2 text-secondary">
              <div className="flex flex-col items-start justify-start w-full gap-1">
              <label>Your name</label>
              <input type="text" name="name" className="w-full text-primary px-2" />
              </div>
              <div className="flex flex-col items-start justify-start w-full gap-1">
              <label>Your email</label>
              <input type="text" name="user_email" className="w-full text-primary px-2" />
              </div>
              <div className="flex flex-col items-start justify-start w-full gap-1">
              <label>Write your message here</label>
              <textarea name="message" rows={6} className="w-full text-primary px-2 py-1" />
              </div>
              <div className="flex items-center justify-start gap-2">
              <input type="submit" value="Send" className="text-primary bg-secondary px-3 py-1 rounded w-40 hover:bg-tertiary cursor-pointer shadow-card"  />
              <p className={`text-2xl text-tertiary ${submitted ? "opacity-100" : "opacity-0"}`}><FaCircleCheck /></p>
              </div>
          </form>
      </div>
     );
}
 
export default ContactForm;