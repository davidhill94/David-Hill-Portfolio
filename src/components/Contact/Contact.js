import React, {useState, useEffect} from 'react';
import { BackgroundSocial } from '../BackgroundSocial/BackgroundSocial';
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
      setTimeout(() => {
          setEmail(false)
          setPhone(false)
          setLocation(false)
      }, 4000);
      
  })

  return (
      <ContactContainer id="contact">
        <BackgroundSocial />
        <BackgroundCard />
        <BackgroundText header={"CONTACT"}/>
        <ContactWrapper>
          <ContactForm />
          <ContactItems>
            <ContactItem>
            <ContactPreText>I am always looking to bring your ideas into reality! Don't hesitate to get in contact with me.</ContactPreText>
            </ContactItem>
            <ItemWrapper>
            <ContactItem>
              <CopiedText email={email}><FaCheckCircle /></CopiedText>
              <ItemText>david94hill@gmail.com</ItemText>
              <EmailLogo id="email" onClick={() =>  {navigator.clipboard.writeText('david94hill@gmail.com'); setEmail(!email)}} />
            </ContactItem>
              <ContactItem>
              <CopiedText phone={phone}><FaCheckCircle /></CopiedText>
              <ItemText>+642902097546</ItemText>
              <PhoneLogo onClick={() =>  {navigator.clipboard.writeText('+44 7956417592'); setPhone(!phone)}} />
            </ContactItem>
            <ContactItem>
              <CopiedText location={location}><FaCheckCircle /></CopiedText>
              <ItemText>Wellington, New Zealand</ItemText>
              <LocationLogo onClick={() =>  {navigator.clipboard.writeText('Lincoln, United Kingdom'); setLocation(!location)}} />
            </ContactItem>
            </ItemWrapper>
          </ContactItems>
        </ContactWrapper>
      </ContactContainer>
  )
};

export default Contact;
