import { useState, useMemo, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaTimes, FaUsers } from 'react-icons/fa'
import BUTSelector from './BUTSelector'
import './Projects.css'

const Projects = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [activeBUT, setActiveBUT] = useState(3);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  useEffect(() => {
    // Handle hash-based project opening from blocs
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#project-')) {
        const projectId = parseInt(hash.replace('#project-', ''));
        const allProjects = projects || defaultProjects;
        const project = allProjects.find(p => p.id === projectId);
        if (project) {
          setActiveBUT(project.but);
          setSelectedProject(project);
        }
      }
    };
    
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, [projects])

  const defaultProjects = [
    { id: 1, title: "TRAVIA", subtitle: "Across the Galaxy", description: "Application de recherche d'itinéraires spatiaux inspirée de Star Wars. Utilisation de l'algorithme A* pour optimiser les trajets entre planètes.", image: "assets/projet1.jpeg", technologies: ["Java", "C", "PHP", "MySQL"], github: "https://github.com/KhephrenDjelidi", team: "Équipe de 3 - SAE BUT2", but: 2 },
    { id: 2, title: "WIKISPEED", subtitle: "Course contre la montre", description: "Jeu multijoueur où les joueurs doivent naviguer le plus rapidement possible entre des articles Wikipedia.", image: "assets/projet2.png", technologies: ["React", "Node.js", "MongoDB"], github: "https://github.com/KhephrenDjelidi", team: "Équipe de 4 - SAE BUT2", but: 2 },
    { id: 3, title: "BANKAI", subtitle: "Gestion bancaire", description: "Application de gestion de trésorerie pour entreprises avec génération de graphiques et export PDF.", image: "assets/projet3.png", technologies: ["PHP", "MySQL", "Scrum"], github: "https://github.com/KhephrenDjelidi", team: "Équipe de 5 - Méthode Agile", but: 2 },
    { id: 4, title: "HessNCF", subtitle: "Réservation de billets", description: "Système de réservation de billets de train avec recherche et gestion des voyages.", image: "assets/projet4.png", technologies: ["Node.js", "MongoDB", "HTML/CSS"], github: "https://github.com/KhephrenDjelidi", team: "Équipe de 5", but: 2 },
    { id: 5, title: "QIX", subtitle: "Jeu rétro revisité", description: "Recréation du célèbre jeu arcade QIX des années 80 en Python avec interface graphique.", image: "assets/projet5.png", technologies: ["Python", "Pygame"], github: "https://github.com/KhephrenDjelidi", team: "Binôme", but: 1 },
    { id: 6, title: "UNESCO Alger", subtitle: "Patrimoine culturel", description: "Application web en partenariat avec l'UNESCO pour mettre en valeur le patrimoine culturel d'Alger.", image: "assets/projet6.png", technologies: ["PHP", "MySQL", "HTML/CSS"], github: "https://github.com/KhephrenDjelidi", team: "Équipe de 6", but: 1 },
    { id: 7, title: "CoDec", subtitle: "Compresseur d'images", description: "Développement d'un compresseur d'images en C. Familiarisation avec la manipulation de fichiers binaires, les algorithmes de compression et la gestion de la mémoire en C.", image: "assets/projet7.png", technologies: ["C", "Binaire", "Algorithmes"], github: "https://github.com/KhephrenDjelidi", skills: ["C", "Binôme", "Binaire"], but: 3 },
    { id: 8, title: "Jenkins Project", subtitle: "Pipeline CI/CD", description: "Mise en place d'une pipeline CI/CD avec Jenkins. Configuration de Jenkins pour automatiser les tests, la construction et le déploiement d'une application web, permettant de comprendre l'intégration continue et le déploiement continu.", image: "assets/projet8.png", technologies: ["Jenkins", "Docker", "CI/CD"], github: "https://github.com/KhephrenDjelidi", skills: ["Jenkins", "Docker", "CI/CD"], but: 3 },
    { id: 9, title: "U-Activity", subtitle: "Gestion des activités universitaires", description: "Application web et mobile centralisée pour la gestion des activités universitaires. Intègre inscription, suivi, recherche avancée, messagerie interne et offre une expérience utilisateur optimisée pour étudiants et organisateurs.", image: "assets/projet9.png", technologies: ["React", "Node.js", "Android Studio", "Tailwind CSS"], github: "https://github.com/KhephrenDjelidi", skills: ["React", "Node.js", "Android Studio", "PHPMyAdmin", "Tailwind CSS"], but: 3 }
  ]

  const projectsData = useMemo(() => {
    const allProjects = projects || defaultProjects;
    return allProjects.filter(p => p.but === activeBUT);
  }, [projects, activeBUT]);

  const visibleProjects = 3

  const handleBUTSelect = (but) => {
    setActiveBUT(but);
    setCurrentIndex(0);
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + 1 >= projectsData.length ? 0 : prev + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev - 1 < 0 ? projectsData.length - 1 : prev - 1
    )
  }

  const getVisibleProjects = () => {
    const visible = []
    if (projectsData.length === 0) return visible;
    for (let i = 0; i < Math.min(visibleProjects, projectsData.length); i++) {
      const index = (currentIndex + i) % projectsData.length
      visible.push({ ...projectsData[index], displayIndex: i })
    }
    return visible
  }

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.h2 
          className="section-title"
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Mes Projets
        </motion.h2>

        <BUTSelector onSelect={handleBUTSelect} initialValue={3} />

        {/* Projects Carousel for BUT 1, 2 & 3 */}
        {projectsData.length > 0 ? (
          <>
            <div className="projects-carousel">
              <button className="carousel-btn prev" onClick={prevSlide} aria-label="Projet précédent">
                <FaChevronLeft />
              </button>

              <div className="projects-track">
                <AnimatePresence mode="popLayout">
                  {getVisibleProjects().map((project) => (
                    <motion.div
                      key={`${project.id}-${currentIndex}`}
                      className={`project-card ${project.displayIndex === 1 ? 'featured' : ''}`}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.4 }}
                      onClick={() => setSelectedProject(project)}
                    >
                      <div className="project-image">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="project-img"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            const fallback = document.createElement('div');
                            fallback.className = 'project-image-fallback';
                            fallback.textContent = project.title.substring(0, 5);
                            e.target.parentElement.appendChild(fallback);
                          }}
                        />
                        <div className="project-overlay">
                          <span>Voir détails</span>
                        </div>
                      </div>
                      <div className="project-info">
                        <h3>{project.title}</h3>
                        <p className="project-subtitle">{project.subtitle}</p>
                        <div className="project-tech">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <span key={tech} className="tech-tag">{tech}</span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <button className="carousel-btn next" onClick={nextSlide} aria-label="Projet suivant">
                <FaChevronRight />
              </button>
            </div>

            {/* Dots Navigation */}
            <div className="projects-dots">
              {projectsData.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Aller au projet ${index + 1}`}
                />
              ))}
            </div>
          </>
        ) : (
          <motion.div
            className="no-projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <p>Aucun projet pour cette année. À bientôt !</p>
          </motion.div>
        )}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="project-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className="project-modal"
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="modal-close" 
                onClick={() => setSelectedProject(null)}
                aria-label="Fermer"
              >
                <FaTimes />
              </button>

              <div className="modal-content">
                <div className="modal-image">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="modal-img"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const fallback = document.createElement('div');
                      fallback.className = 'modal-image-fallback';
                      fallback.textContent = selectedProject.title.substring(0, 5);
                      e.target.parentElement.appendChild(fallback);
                    }}
                  />
                </div>

                <div className="modal-info">
                  <div className="modal-header">
                    <h3>{selectedProject.title}</h3>
                    <span className="modal-subtitle">{selectedProject.subtitle}</span>
                  </div>

                  <p className="modal-description">{selectedProject.description}</p>

                  <div className="modal-team">
                    <FaUsers />
                    <span>{selectedProject.team}</span>
                  </div>

                  <div className="modal-technologies">
                    <h4>Technologies utilisées</h4>
                    <div className="tech-list">
                      {selectedProject.technologies.map((tech) => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="modal-actions">
                    <a 
                      href={selectedProject.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      <FaGithub /> Voir sur GitHub
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}

export default Projects
