"use client";

import { useEffect, useState } from "react";
import ContactForm from "./contactForm";
import ContactDetails from "./contactDetails";
import SectionHeader from "../sectionHeader";
import BackgroundCard from "../backgroundCard";

const Contact = () => {
  const [email, setEmail] = useState(false);
  const [phone, setPhone] = useState(false);
  const [location, setLocation] = useState(false);

  useEffect(() => {
    if (email) {
      setTimeout(() => {
        setEmail(false);
      }, 4000);
    }
    if (location) {
      setTimeout(() => {
        setLocation(false);
      }, 4000);
    }
    if (phone) {
      setTimeout(() => {
        setPhone(false);
      }, 4000);
    }
  });

  return (
    <div 
    id="contact"
    className="w-full bg-primary grid grid-cols-wrapperMb grid-rows-wrapperMb lg:grid-rows-wrapperLg lg:grid-cols-wrapperLg px-sectionH sm:px-sectionHSm xl:px-sectionHXl py-sectionV sm:py-sectionVSm xl:py-sectionVXl relative overflow-hidden"
    >
      <div className="col-start-1 row-start-1 col-span-1 row-span-1 self-center lg:h-[600px] w-full flex items-center justify-center">
        <SectionHeader header="Contact" />
      </div>
      <div className="flex flex-col gap-4 lg:flex-row col-start-1 lg:col-start-2 lg:row-start-1 row-span-1 col-span-2 xl:col-span-1 w-full h-auto self-center">
        <ContactForm />
        <ContactDetails />
      </div>
      <BackgroundCard />
    </div>
  );
};

export default Contact;
