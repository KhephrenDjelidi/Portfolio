import { motion } from 'framer-motion'
import { FaChevronDown, FaGithub, FaLinkedin } from 'react-icons/fa'
import './Hero.css'

const Hero = ({ profile }) => {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        <div className="hero-gradient"></div>
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
        </div>
      </div>

      <div className="container hero-content">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-greeting">Bonjour, je suis</span>
          <h1 className="hero-name">
            {profile?.name?.split(' ')[1] || 'Khephren'}
            <span className="hero-lastname"> {profile?.name?.split(' ')[0] || 'Djelidi'}</span>
          </h1>
          <p className="hero-title">{profile?.title || 'Étudiant BUT Informatique'}</p>
          
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              Voir mes projets
            </a>
            <a href="#contact" className="btn btn-outline">
              Me contacter
            </a>
          </div>

          <div className="hero-social">
            <a href={profile?.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href={profile?.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="hero-avatar">
            <div className="avatar-ring"></div>
            <div className="avatar-inner">
              <span>KD</span>
            </div>
          </div>
        </motion.div>
      </div>

      <a href="#about" className="scroll-indicator">
        <span>Découvrir</span>
        <FaChevronDown className="scroll-arrow" />
      </a>
    </section>
  )
}

export default Hero
