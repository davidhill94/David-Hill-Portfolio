import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";

const ContactDetails = () => {
  const [email, setEmail] = useState(false);
  const [phone, setPhone] = useState(false);
  const [location, setLocation] = useState(false);

  useEffect(() => {
    const clearEmail = () => {setEmail(false)};
    const clearPhone = () => {setPhone(false)};
    const clearLocation = () => {setLocation(false)};
    if (email) {
      const emailTimeout = setTimeout(clearEmail, 5000);
    }
    if (phone) {
      const phoneTimeout = setTimeout(clearPhone, 5000);
    }
    if (location) {
      const locationTimeout = setTimeout(clearLocation, 5000);
    }
  }, [email, phone, location]);

  const iconStyling =
    "h-14 w-14 p-2 rounded-full bg-tertiary text-secondary flex items-center justify-center text-3xl cursor-pointer hover:opacity-80";

  return (
    <div className="flex flex-col gap-6 items-start justify-start w-full text-secondary border-tertiary p-4">
      <h3>
        For any inquiries, whether they're about freelance opportunities,
        potential job roles, or if you just want to learn more about my journey,
        feel free to get in touch. I'm excited to connect with you and explore
        how we can collaborate. Drop me a message or give me a call – I'd love
        to hear from you!
      </h3>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-start gap-2">
          {email ? (
            <p className={iconStyling}>
              <FaCheckCircle />
            </p>
          ) : (
            <p
              className={iconStyling}
              id="email"
              onClick={() => {
                navigator.clipboard.writeText("david94hill@gmail.com");
                setEmail(true);
              }}
            >
              <FaEnvelope />
            </p>
          )}
          <p>david94hill@gmail.com</p>
        </div>
        <div className="flex items-center justify-start gap-2">
          {phone ? (
            <p className={iconStyling}>
              <FaCheckCircle />
            </p>
          ) : (
            <p
              className={iconStyling}
              onClick={() => {
                navigator.clipboard.writeText("+447818285945");
                setPhone(true);
              }}
            >
              <FaPhone />
            </p>
          )}
          <p>+447818285945</p>
        </div>
        <div className="flex items-center justify-start gap-2">
          {location ? (
            <p className={iconStyling}>
              <FaCheckCircle />
            </p>
          ) : (
            <p
              className={iconStyling}
              onClick={() => {
                navigator.clipboard.writeText("Lincoln, United Kingdom");
                setLocation(true);
              }}
            >
              <FaLocationDot />
            </p>
          )}
          <p>Lincoln, United Kingdom</p>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
