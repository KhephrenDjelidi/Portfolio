import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaJava, FaNodeJs, FaDatabase, FaGitAlt, FaFigma, FaCode } from 'react-icons/fa'
import './SkillsBubbles.css'

const SkillsBubbles = ({ skills }) => {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true
  })

  // Map des icônes
  const iconMap = {
    'fab fa-html5': FaHtml5,
    'fab fa-css3-alt': FaCss3Alt,
    'fab fa-js': FaJs,
    'fab fa-react': FaReact,
    'fab fa-python': FaPython,
    'fab fa-java': FaJava,
    'fab fa-node-js': FaNodeJs,
    'fas fa-database': FaDatabase,
    'fab fa-git-alt': FaGitAlt,
    'fab fa-figma': FaFigma,
    'fas fa-code': FaCode
  }

  const getIcon = (iconClass) => {
    return iconMap[iconClass] || FaCode
  }

  // Combiner toutes les compétences
  const allSkills = Object.entries(skills).reduce((acc, [category, categorySkills]) => {
    return [
      ...acc,
      ...categorySkills.map(skill => ({
        ...skill,
        category
      }))
    ]
  }, [])

  return (
    <section className="skills-bubbles section" id="competences" ref={ref}>
      <motion.div 
        className="container"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Mes Compétences</h2>
        
        {/* Grille de compétences */}
        <div className="skills-grid">
          {allSkills.map((skill, index) => (
            <motion.div
              key={`${skill.name}-${index}`}
              className="skill-card"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -8 }}
            >
              <div className="skill-icon-wrapper">
                {(() => {
                  const IconComponent = getIcon(skill.icon)
                  return <IconComponent />
                })()}
              </div>
              <h4 className="skill-name">{skill.name}</h4>
              <div className="skill-level-bar">
                <motion.div 
                  className="skill-level-fill"
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.05 + 0.2 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default SkillsBubbles
