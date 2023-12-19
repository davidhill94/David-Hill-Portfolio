import React, { useState, useEffect } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import { FaCheckCircle } from 'react-icons/fa';

import {
  ContactContainer,
  ContactPreText,
  ContactWrapper,
  ContactItems,
  ContactItem,
  EmailLogo,
  PhoneLogo,
  ItemText,
  LocationLogo,
  CopiedText,
  ItemWrapper
} from './ContactElements';
import BackgroundText from '../BackgroundText/BackgroundText';
import BackgroundCard from '../BackgroundCard/BackgroundCard';

const Contact = () => {

  const [email, setEmail] = useState(false);
  const [phone, setPhone] = useState(false);
  const [location, setLocation] = useState(false);

  useEffect(() => {
    if(email){
      setTimeout(() => {
        setEmail(false)
      }, 4000);
    }
    if(location){
      setTimeout(() => {
        setLocation(false)
      }, 4000);
    }
    if(phone){
      setTimeout(() => {
        setPhone(false)
      }, 4000);
    }
  });

  return (
    <ContactContainer id="contact">
      <BackgroundText header={"CONTACT"} />
      <BackgroundCard left={"50%"} right={"50%"} rotate={"10deg"} bottom={"-45%"} mobile={"-20%"} translate={"-50%"} />
      <ContactWrapper>
        <ContactForm />
        <ContactItems>
          <ContactItem>
            <ContactPreText>For all enquiries please contact me below - I would love to hear from you.</ContactPreText>
          </ContactItem>
          <ItemWrapper>
            <ContactItem>
              <ItemText>david94hill@gmail.com</ItemText>
              {email ?
                <CopiedText email={email}><FaCheckCircle /></CopiedText>
                :
                <EmailLogo id="email" onClick={() => { navigator.clipboard.writeText('david94hill@gmail.com'); setEmail(!email) }} />
              }
            </ContactItem>
            <ContactItem>
              <ItemText>+44818285945</ItemText>
              {phone ?
                <CopiedText phone={phone}><FaCheckCircle /></CopiedText>
                :
                <PhoneLogo onClick={() => { navigator.clipboard.writeText('+44818285945'); setPhone(!phone) }} />
              }
            </ContactItem>
            <ContactItem>
              <ItemText>Lincoln, United Kingdom</ItemText>
              {location ?
                <CopiedText location={location}><FaCheckCircle /></CopiedText>
                :
                <LocationLogo onClick={() => { navigator.clipboard.writeText('Lincoln, United Kingdom'); setLocation(!location) }} />
              }
            </ContactItem>
          </ItemWrapper>
        </ContactItems>
      </ContactWrapper>
    </ContactContainer>
  )
};

export default Contact;
