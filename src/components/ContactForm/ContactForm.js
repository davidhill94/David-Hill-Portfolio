import emailjs from 'emailjs-com';

import React, { useState, useEffect } from 'react';
import {
    ContactFormContainer,
    Form,
    FormItem,
    NameLabel,
    NameInput,
    EmailInput,
    EmailLabel,
    MessageLabel,
    MessageText,
    SumbitItem,
    SubmitBtn,
    SubmitText
} from './ContactFormElements.js';

const ContactForm = () => {

    const [active, setActive] = useState("false");

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_62fn8ap", "template_1g4s60q", e.target, "user_sWUq5Ae8VbeTY2NDEEjKd").then(res => {
            console.log(res);
        }).catch(err => console.log(err));
        e.target.reset();

        setActive("true");
    }

    useEffect(() => {
        setTimeout(() => {
            setActive("false")
        }, 6000);
        
    })

  return (
      <ContactFormContainer>
          <Form onSubmit={sendEmail}>
              <FormItem>
              <NameLabel>Your name</NameLabel>
              <NameInput type="text" name="name" />
              </FormItem>
              <FormItem>
              <EmailLabel>Your email</EmailLabel>
              <EmailInput type="text" name="user_email" />
              </FormItem>
              <MessageLabel>Write your message here</MessageLabel>
              <MessageText name="message" rows="6" />
              <FormItem></FormItem>
              <SumbitItem>
              <SubmitBtn type="submit" value="Send" />
              <SubmitText active={active} />
              </SumbitItem>
          </Form>
      </ContactFormContainer>
  )
};

export default ContactForm;
