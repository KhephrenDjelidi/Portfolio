import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'
import './Footer.css'

const Footer = ({ profile }) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#hero" className="footer-logo">
              K<span>.</span>Djelidi
            </a>
            <p>Étudiant en BUT Informatique passionné par le développement web et les nouvelles technologies.</p>
          </div>



          <div className="footer-social">
            <h4>Me suivre</h4>
            <div className="social-links">
              <a 
                href={profile?.github || 'https://github.com/KhephrenDjelidi'} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a 
                href={profile?.linkedin || 'https://www.linkedin.com/in/khephrendjelidi'} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a 
                href={`mailto:${profile?.email || 'khephdjelidi@email.com'}`}
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Khephren Djelidi. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
