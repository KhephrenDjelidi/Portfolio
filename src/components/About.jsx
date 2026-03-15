import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaFileDownload } from 'react-icons/fa'
import './About.css'

const About = ({ profile }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  })

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.h2 
          className="section-title"
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          À propos
        </motion.h2>

        <div className="about-content">
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="about-image-wrapper">
              <img src="/portfolio/assets/profil.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Khephren Djelidi" className="about-image-placeholder" />
              <div className="about-image-decoration"></div>
            </div>
          </motion.div>

          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3>Qui suis-je ?</h3>
            <p>
              Je m'appelle Khephren Djelidi et je suis étudiant en BUT Informatique. Actuellement en troisième année à l'IUT de Marne-la-Vallée, je souhaite vous présenter mes compétences et mes projets à travers ce portfolio.
            </p>
            <p>
              Passionné par le développement web et les nouvelles technologies, je suis constamment à la recherche de nouveaux défis et d'opportunités d'apprentissage. Mon objectif est de devenir un développeur polyvalent capable de mener des projets de A à Z.
            </p>

            <a href="/portfolio/assets/cv.pdf" target="_blank" download="CV_Khephren_Djelidi.pdf" className="btn btn-primary">
              <FaFileDownload /> Télécharger mon CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
