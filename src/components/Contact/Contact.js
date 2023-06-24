import React, { useState, useEffect } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import { FaCheckCircle } from 'react-icons/fa';

import {
  ContactContainer,
  BackgroundCard,
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
      <BackgroundCard />
      <BackgroundText header={"CONTACT"} />
      <ContactWrapper>
        <ContactForm />
        <ContactItems>
          <ContactItem>
            <ContactPreText>I am always looking to bring your ideas into reality! Don't hesitate to get in contact with me.</ContactPreText>
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
              <ItemText>+642902097546</ItemText>
              {phone ?
                <CopiedText phone={phone}><FaCheckCircle /></CopiedText>
                :
                <PhoneLogo onClick={() => { navigator.clipboard.writeText('+44 7956417592'); setPhone(!phone) }} />
              }
            </ContactItem>
            <ContactItem>
              <ItemText>Wellington, New Zealand</ItemText>
              {location ?
                <CopiedText location={location}><FaCheckCircle /></CopiedText>
                :
                <LocationLogo onClick={() => { navigator.clipboard.writeText('Wellington, New Zealand'); setLocation(!location) }} />
              }
            </ContactItem>
          </ItemWrapper>
        </ContactItems>
      </ContactWrapper>
    </ContactContainer>
  )
};

export default Contact;
