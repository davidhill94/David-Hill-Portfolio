import { FaCircleCheck } from "react-icons/fa6";

const ContactForm = () => {
    return ( 
        <div className="flex flex-col items-start justify-start w-full border border-tertiary p-4">
          <form className="flex flex-col w-full h-full items-start justify-between gap-2 text-secondary">
              <div className="flex flex-col items-start justify-start w-full gap-1">
              <label>Your name</label>
              <input type="text" name="name" className="w-full text-primary"/>
              </div>
              <div className="flex flex-col items-start justify-start w-full gap-1">
              <label>Your email</label>
              <input type="text" name="user_email" className="w-full text-primary"/>
              </div>
              <div className="flex flex-col items-start justify-start w-full gap-1">
              <label>Write your message here</label>
              <textarea name="message" rows={6} className="w-full text-primary"/>
              </div>
              <div className="flex items-center justify-start gap-2">
              <input type="submit" value="Send" className="text-primary bg-secondary px-3 py-1 rounded w-40 hover:bg-tertiary cursor-pointer"/>
              <p className="text-2xl text-tertiary"><FaCircleCheck /></p>
              </div>
          </form>
      </div>
     );
}
 
export default ContactForm;