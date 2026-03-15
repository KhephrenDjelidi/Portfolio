import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGraduationCap, FaRocket, FaBriefcase, FaLaptopCode } from 'react-icons/fa'
import './Timeline.css'

const Timeline = ({ timeline }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const getIcon = (type) => {
    switch (type) {
      case 'education':
        return <FaGraduationCap />
      case 'work':
        return <FaBriefcase />
      case 'alternance':
        return <FaLaptopCode />
      case 'goal':
        return <FaRocket />
      default:
        return <FaGraduationCap />
    }
  }

  const defaultTimeline = [
    { id: 1, year: "2021-2022", title: "Lycee Diderot", subtitle: "Bac STI2D - SIN", description: "Obtention du baccalaureat STI2D specialite SIN avec mention Assez Bien.", type: "education" },
    { id: 2, year: "2023-2026", title: "IUT Marne-la-Vallee", subtitle: "BUT Informatique", description: "Formation en developpement, bases de donnees, reseaux et gestion de projets.", type: "education" },
    { id: 3, year: "04/2025 - 06/2025", title: "Tele Paris Video", subtitle: "Developpeur", description: "Durant ce stage, j'ai developpé un site web pour l'entreprise et j'ai du gerer ce projet en autonomie complète. Gérer tout seul à était assez rude mais c'était une bonne expérience qui m'a beaucoup appris", type: "work" },
    { id: 4, year: "09/2025 - 09/2026", title: "Stat & Geo", subtitle: "Apprenti Informatique (Alternance BUT 3)", description: "En tant qu'apprenti, je developpe des outils web et techniques pour l'entreprise. Je gère et manipule des données liées aux études de statistiques.", type: "alternance" },
    { id: 5, year: "2026+", title: "Objectif Futur", subtitle: "Ecole d'ingenieur / Master", description: "Rejoindre une école d'ingénieur avec une filière spécifique comme data science ou bien cybersécurité.", type: "goal" }
  ]

  const timelineData = timeline || defaultTimeline

  return (
    <section id="timeline" className="timeline section">
      <div className="container">
        <motion.h2 
          className="section-title"
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Mon Parcours
        </motion.h2>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {timelineData.map((item, index) => (
            <motion.div
              key={item.id}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              variants={{
                hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className="timeline-content">
                <div className="timeline-year">{item.year}</div>
                <h3 className="timeline-title">{item.title}</h3>
                <span className="timeline-subtitle">{item.subtitle}</span>
                <p className="timeline-description">{item.description}</p>
              </div>
              <div className={`timeline-icon ${item.type}`}>
                {getIcon(item.type)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline
