import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaJava, 
  FaNodeJs, FaDatabase, FaGitAlt, FaFigma, FaCode
} from 'react-icons/fa'
import './Skills.css'

const Skills = ({ skills }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const getSkillIcon = (iconName) => {
    const icons = {
      'fab fa-html5': <FaHtml5 />,
      'fab fa-css3-alt': <FaCss3Alt />,
      'fab fa-js': <FaJs />,
      'fab fa-react': <FaReact />,
      'fab fa-python': <FaPython />,
      'fab fa-java': <FaJava />,
      'fab fa-node-js': <FaNodeJs />,
      'fas fa-database': <FaDatabase />,
      'fab fa-git-alt': <FaGitAlt />,
      'fab fa-figma': <FaFigma />,
      'fas fa-code': <FaCode />
    }
    return icons[iconName] || <FaCode />
  }

  const allSkills = [
    { name: "HTML5", icon: "fab fa-html5" },
    { name: "CSS3", icon: "fab fa-css3-alt" },
    { name: "JavaScript", icon: "fab fa-js" },
    { name: "React", icon: "fab fa-react" },
    { name: "Python", icon: "fab fa-python" },
    { name: "Java", icon: "fab fa-java" },
    { name: "Node.js", icon: "fab fa-node-js" },
    { name: "MySQL", icon: "fas fa-database" },
    { name: "PostgreSQL", icon: "fas fa-database" },
    { name: "MongoDB", icon: "fas fa-database" },
    { name: "Git", icon: "fab fa-git-alt" },
    { name: "Figma", icon: "fab fa-figma" }
  ]

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.h2 
          className="section-title"
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Compétences
        </motion.h2>

        {/* Skills Grid */}
        <motion.div 
          className="skills-grid"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          {allSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -8, scale: 1.05 }}
            >
              <div className="skill-icon">
                {getSkillIcon(skill.icon)}
              </div>
              <h4 className="skill-name">{skill.name}</h4>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
