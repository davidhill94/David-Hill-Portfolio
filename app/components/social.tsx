import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

interface SocialProps{
  large?: boolean
}

const Social: React.FC<SocialProps> = ({ large }) => {

    const hoverIcon = `hover:text-tertiary ${large ? "hover:scale-105 text-3xl" : "hover:scale-105 text-2xl"} transition`;

    return ( 
        <div className="flex items-center justify-center gap-2 text-secondary">
            <a
              className={`${hoverIcon}`}
              href="//www.facebook.com/profile.php?id=675129624"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              className={`${hoverIcon}`}
              href="//www.instagram.com/davidhill94/"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              className={`${hoverIcon}`}
              href="//github.com/davidhill94"
              target="_blank"
              aria-label="Github"
            >
              <FaGithub />
            </a>
            <a
              className={`${hoverIcon}`}
              href="//www.linkedin.com/in/david-hill-832ba293/"
              target="_blank"
              aria-label="Linkedin"
            >
              <FaLinkedin />
            </a>
          </div>
     );
}
 
export default Social;