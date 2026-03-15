import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCode, FaChartLine, FaServer, FaDatabase, FaTasks, FaUsers } from 'react-icons/fa'
import './Blocs.css'

const Blocs = ({ projects = [] }) => {
  const [activeBUT, setActiveBUT] = useState(3);
  const [activeBloc, setActiveBloc] = useState(1)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const handleProjectClick = (projectFullName) => {
    // Extract project name (part before " - ")
    const projectName = projectFullName.split(' - ')[0];
    
    if (!projects || projects.length === 0) return;
    
    // Find project by title
    const project = projects.find(p => p.title.toLowerCase() === projectName.toLowerCase());
    
    if (project) {
      // Set hash to indicate which project to open
      window.location.hash = `project-${project.id}`;
      
      // Scroll to projects section
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        setTimeout(() => {
          projectsSection.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }

  const blocsDataBUT2 = [
    {
      id: 1,
      title: "Réaliser",
      icon: <FaCode />,
      color: "#d32f2f",
      situations: [
        "Élaborer une application informatique",
        "Faire évoluer une application informatique",
        "Maintenir en conditions opérationnelles une application"
      ],
      competences: [
        "CE1.01 | Respecter les besoins du client",
        "CE1.03 | Appliquer les principes algorithmiques",
        "CE1.04 | Veiller à la qualité du code et documentation",
        "CE1.06 | Choisir les ressources techniques appropriées"
      ],
      projet: "Bankai - Application de gestion bancaire"
    },
    {
      id: 2,
      title: "Optimiser",
      icon: <FaChartLine />,
      color: "#ff9800",
      situations: [
        "Proposer des applications optimisées",
        "Améliorer les performances des programmes",
        "Mettre en place des applications efficaces"
      ],
      competences: [
        "CE2.01 | Formaliser et modéliser des situations complexes",
        "CE2.02 | Recenser les algorithmes et structures usuels",
        "CE2.03 | S'appuyer sur des schémas de raisonnement"
      ],
      projet: "Travia - Algorithme A* pour trajets spatiaux"
    },
    {
      id: 3,
      title: "Administrer",
      icon: <FaServer />,
      color: "#ffc107",
      situations: [
        "Installer et configurer des infrastructures",
        "Déployer une nouvelle architecture technique",
        "Sécuriser les applications et services"
      ],
      competences: [
        "CE3.01 | Sécuriser le système d'information",
        "CE3.02 | Offrir une qualité de service optimale",
        "CE3.03 | Appliquer les normes et bonnes pratiques"
      ],
      projet: "TP Réseaux - Configuration serveurs Apache"
    },
    {
      id: 4,
      title: "Gérer",
      icon: <FaDatabase />,
      color: "#66bb6a",
      situations: [
        "Concevoir et administrer les données",
        "Lancer un nouveau projet",
        "Sécuriser des données"
      ],
      competences: [
        "CE4.01 | Respecter les réglementations RGPD",
        "CE4.02 | Respecter les enjeux du stockage de données",
        "CE4.05 | Assurer la cohérence et la qualité"
      ],
      projet: "HessNCF - Base de données MongoDB"
    },
    {
      id: 5,
      title: "Conduire",
      icon: <FaTasks />,
      color: "#1565c0",
      situations: [
        "Satisfaire les besoins des utilisateurs",
        "Piloter le maintien d'un projet",
        "Faire évoluer un système d'information"
      ],
      competences: [
        "CE5.01 | Communiquer efficacement avec les acteurs",
        "CE5.02 | Respecter les règles juridiques et normes",
        "CE5.04 | Adopter une démarche proactive et créative"
      ],
      projet: "Gestion de projet Agile Scrum"
    },
    {
      id: 6,
      title: "Collaborer",
      icon: <FaUsers />,
      color: "#1a1a1a",
      situations: [
        "Travailler efficacement en équipe informatique",
        "Organiser son travail avec l'équipe",
        "Élaborer et transmettre de l'information"
      ],
      competences: [
        "CE6.01 | S'inscrire dans une équipe pluridisciplinaire",
        "CE6.02 | Accompagner les évolutions informatiques",
        "CE6.04 | Développer une communication collaborative"
      ],
      projet: "SAE en équipe - Travail collaboratif"
    }
  ]

  const blocsDataBUT1 = [
    {
      id: 1,
      title: "Réaliser",
      icon: <FaCode />,
      color: "#d32f2f",
      situations: [
        "Élaborer une application informatique",
        "Faire évoluer une application informatique"
      ],
      competences: [
        "AC11.01 | Implémenter des conceptions simples",
        "AC11.02 | Élaborer des conceptions simples",
        "AC11.03 | Faire des essais et tester leurs résultats en regard des spécifications"
      ],
      projet: "QIX - Jeu rétro revisité"
    },
    {
      id: 2,
      title: "Optimiser",
      icon: <FaChartLine />,
      color: "#ff9800",
      situations: [
        "Appréhender et construire des algorithmes"
      ],
      competences: [
        "AC12.01 | Analyser un problème avec méthode",
        "AC12.02 | Comparer les algorithmes par des problèmes classiques",
        "AC12.03 | Formaliser et mettre en œuvre des outils de résolution"
      ],
      projet: "Algorithmes simples et structures de données"
    },
    {
      id: 3,
      title: "Administrer",
      icon: <FaServer />,
      color: "#ffc107",
      situations: [
        "Installer et configurer un poste de travail"
      ],
      competences: [
        "AC13.01 | Identifier les différentes composantes d'un ordinateur",
        "AC13.02 | Installer et configurer un système d'exploitation et des logiciels",
        "AC13.03 | Installer et configurer des systèmes d'exploitation ou des services"
      ],
      projet: "Configuration système et logiciels"
    },
    {
      id: 4,
      title: "Gérer",
      icon: <FaDatabase />,
      color: "#66bb6a",
      situations: [
        "Concevoir et mettre en place une base de données"
      ],
      competences: [
        "AC14.01 | Mettre à jour et interroger une base de données",
        "AC14.02 | Visualiser les données",
        "AC14.03 | Concevoir une base de données relationnelle à partir d'un cahier des charges"
      ],
      projet: "Introduction aux bases de données"
    },
    {
      id: 5,
      title: "Conduire",
      icon: <FaTasks />,
      color: "#1565c0",
      situations: [
        "Identifier les besoins métiers des clients et des utilisateurs"
      ],
      competences: [
        "AC15.01 | Appréhender les besoins du client et de l'utilisateur",
        "AC15.02 | Mettre en place les outils de gestion de projet",
        "AC15.03 | Identifier les acteurs et les phases du cycle de développement"
      ],
      projet: "Gestion de projet - Méthodes agiles"
    },
    {
      id: 6,
      title: "Collaborer",
      icon: <FaUsers />,
      color: "#1a1a1a",
      situations: [
        "Identifier ses aptitudes pour travailler dans une équipe"
      ],
      competences: [
        "AC16.01 | Apprécier l'écosystème numérique",
        "AC16.02 | Déduire les activités requises selon les différents secteurs informatiques",
        "AC16.03 | Identifier les statuts, les fonctions et les charges membres d'une équipe"
      ],
      projet: "Travail collaboratif en équipe"
    }
  ];

  const blocsDataBUT3 = [
    {
      id: 1,
      title: "Réaliser",
      icon: <FaCode />,
      color: "#d32f2f",
      situations: [
        "Adapter des applications sur un ensemble de supports"
      ],
      competences: [
        "AC31.01 | Choisir et implémenter les architectures simples",
        "AC31.02 | Intégrer des solutions dans un environnement de production",
        "AC31.03 | Intégrer des solutions dans un environnement de production"
      ],
      projet: "U-Activity - App web et mobile, architecture multi-plateformes"
    },
    {
      id: 2,
      title: "Optimiser",
      icon: <FaChartLine />,
      color: "#ff9800",
      situations: [
        "Analyser et optimiser des applications"
      ],
      competences: [
        "AC32.01 | Articuler les résultats de diverses métriques",
        "AC32.02 | Profiter et analyser les comportement d'un code existant",
        "AC32.03 | Choisir et utiliser des distributions et méthodes décisionnelles"
      ],
      projet: "CoDec - Compresseur d'images et optimisation"
    },
    {
      id: 3,
      title: "Collaborer",
      icon: <FaUsers />,
      color: "#1a1a1a",
      situations: [
        "Manager une équipe informatique"
      ],
      competences: [
        "AC36.01 | Argumenter l'écosystème numérique",
        "AC36.02 | Identifier les enjeux de l'économie numérique",
        "AC36.03 | Interdire la conduite du changement au sein d'une organisation"
      ],
      projet: "U-Activity"
    }
  ];

  const getBlocsData = () => {
    switch (activeBUT) {
      case 1:
        return blocsDataBUT1;
      case 2:
        return blocsDataBUT2;
      case 3:
        return blocsDataBUT3;
      default:
        return blocsDataBUT2;
    }
  }

  const blocsData = getBlocsData();

  const currentBloc = blocsData.find(b => b.id === activeBloc) || blocsData[0];

  return (
    <section id="blocs" className="blocs section">
      <div className="container">
        <motion.h2 
          className="section-title"
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Blocs de Competences
        </motion.h2>

        <div className="but-selector">
          <button onClick={() => setActiveBUT(1)} className={activeBUT === 1 ? 'active' : ''}>BUT 1</button>
          <button onClick={() => setActiveBUT(2)} className={activeBUT === 2 ? 'active' : ''}>BUT 2</button>
          <button onClick={() => setActiveBUT(3)} className={activeBUT === 3 ? 'active' : ''}>BUT 3</button>
        </div>

        <div className="blocs-container">
          {/* Selector */}
          <motion.div 
            className="blocs-selector"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {blocsData.map((bloc) => (
              <button
                key={bloc.id}
                className={`bloc-btn ${activeBloc === bloc.id ? 'active' : ''}`}
                onClick={() => setActiveBloc(bloc.id)}
                style={{ '--bloc-color': bloc.color }}
              >
                <span className="bloc-btn-icon">{bloc.icon}</span>
                <span className="bloc-btn-title">{bloc.title}</span>
                <span className="bloc-btn-number">0{bloc.id}</span>
              </button>
            ))}
          </motion.div>

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeBloc}
              className="bloc-content"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              style={{ '--bloc-color': currentBloc.color }}
            >
              <div className="bloc-header">
                <div className="bloc-icon">{currentBloc.icon}</div>
                <h3>{currentBloc.title}</h3>
              </div>

              <div className="bloc-section">
                <h4>Situations professionnelles</h4>
                <ul>
                  {currentBloc.situations.map((situation, index) => (
                    <li key={index}>{situation}</li>
                  ))}
                </ul>
              </div>

              <div className="bloc-section">
                <h4>Competences developpees</h4>
                <ul className="competences-list">
                  {currentBloc.competences.map((comp, index) => (
                    <li key={index}>{comp}</li>
                  ))}
                </ul>
              </div>

              <div className="bloc-section bloc-projet">
                <h4>Projet en lien</h4>
                <button 
                  className="bloc-project-link"
                  onClick={() => handleProjectClick(currentBloc.projet)}
                  style={{ cursor: 'pointer', color: 'var(--primary)' }}
                >
                  {currentBloc.projet.split(' - ')[0]}
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default Blocs
