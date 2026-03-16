import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Timeline from "./components/Timeline";
import SkillsBubbles from "./components/SkillsBubbles";
import Blocs from "./components/Blocs";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import "./styles/App.css";

const ASSET_BASE = `${import.meta.env.BASE_URL}assets/`;

// Donnees du portfolio
const portfolioData = {
  profile: {
    name: "Khephren Djelidi",
    title: "Étudiant BUT Informatique",
    description:
      "Je m'appelle Khephren Djelidi et je suis etudiant en BUT Informatique. Actuellement en seconde annee a l'IUT de Marne-la-Vallee, je souhaite vous presenter mes competences et mes projets a travers ce portfolio.",
    email: "khephdjelidi@email.com",
    linkedin: "https://www.linkedin.com/in/khephrendjelidi",
    github: "https://github.com/KhephrenDjelidi",
  },

  timeline: [
    {
      id: 1,
      year: "2021-2022",
      title: "Lycee Diderot",
      subtitle: "Bac STI2D - SIN",
      description:
        "Obtention du baccalaureat STI2D specialite SIN avec mention Assez Bien.",
      type: "education",
    },
    {
      id: 2,
      year: "2023-2026",
      title: "IUT Marne-la-Vallee",
      subtitle: "BUT Informatique",
      description:
        "Formation en developpement, bases de données, reseaux et gestion de projets.",
      type: "education",
    },
    {
      id: 3,
      year: "04/2025 - 06/2025",
      title: "Tele Paris Video",
      subtitle: "Developpeur",
      description:
        "Durant ce stage, j'ai developpé un site web pour l'entreprise et j'ai du gerer ce projet en autonomie complète. Gérer tout seul à était assez rude mais c'était une bonne expérience qui m'a beaucoup appris",
      type: "work",
    },
    {
      id: 4,
      year: "09/2025 - 09/2026",
      title: "Stat & Geo",
      subtitle: "Apprenti Informatique (Alternance BUT 3)",
      description:
        "En tant qu'apprenti, je developpe des outils web et techniques pour l'entreprise. Je gère et manipule des données liées aux études de statistiques.",
      type: "alternance",
    },
    {
      id: 5,
      year: "2026+",
      title: "Objectif Futur",
      subtitle: "Ecole d'ingenieur / Master",
      description:
        "Rejoindre une école d'ingénieur avec une filière spécifique comme data science ou bien cybersécurité.",
      type: "goal",
    },
  ],

  skills: {
    web: [
      { name: "HTML5", icon: "fab fa-html5", level: 90 },
      { name: "CSS3", icon: "fab fa-css3-alt", level: 85 },
      { name: "JavaScript", icon: "fab fa-js", level: 80 },
      { name: "React", icon: "fab fa-react", level: 75 },
    ],
    development: [
      { name: "Python", icon: "fab fa-python", level: 85 },
      { name: "Java", icon: "fab fa-java", level: 80 },
      { name: "C", icon: "fas fa-code", level: 70 },
      { name: "Node.js", icon: "fab fa-node-js", level: 75 },
    ],
    database: [
      { name: "PostgreSQL", icon: "fas fa-database", level: 80 },
      { name: "MongoDB", icon: "fas fa-database", level: 75 },
    ],
    tools: [
      { name: "Git", icon: "fab fa-git-alt", level: 85 },
      { name: "Figma", icon: "fab fa-figma", level: 70 },
    ],
  },

  projects: [
    {
      id: 1,
      title: "TRAVIA",
      subtitle: "Across the Galaxy",
      description:
        "Développement d'une application de recherche d'itinéraires spatiaux inspirée de Star Wars. Implémentation de l'algorithme A* pour optimiser les trajets entre les planètes. Interface interactive et gestion complète des données de voyage.",
      image: `${ASSET_BASE}travia.png`,
      technologies: ["Java", "C", "PHP", "MySQL"],
      github: "https://github.com/KhephrenDjelidi",
      team: "Équipe de 3 - SAE BUT2",
      but: 2,
    },
    {
      id: 2,
      title: "WIKISPEED",
      subtitle: "Course contre la montre",
      description:
        "Jeu multijoueur immersif où les joueurs naviguent entre des articles Wikipedia pour accumuler des points rapidement. Système de classement en temps réel et modes de jeu variés pour une expérience compétitive.",
      image: `${ASSET_BASE}wikispeed.png`,
      technologies: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/KhephrenDjelidi",
      team: "Équipe de 4 - SAE BUT2",
      but: 2,
    },
    {
      id: 3,
      title: "BANKAI",
      subtitle: "Gestion bancaire",
      description:
        "Application complète de gestion de trésorerie destinée aux entreprises. Génération de graphiques analytiques et export de rapports en PDF. Suivi des transactions et gestion budgétaire simplifiée.",
      image: `${ASSET_BASE}bankai.png`,
      technologies: ["PHP", "MySQL", "Scrum"],
      github: "https://github.com/KhephrenDjelidi",
      team: "Équipe de 5 - Méthode Agile",
      but: 2,
    },
    {
      id: 4,
      title: "HessNCF",
      subtitle: "Réservation de billets",
      description:
        "Système intégré de réservation de billets de train avec recherche avancée. Gestion complète des trajets, des horaires et des disponibilités. Interface utilisateur conviviale pour une expérience de réservation fluide.",
      image: `${ASSET_BASE}hessncf.png`,
      technologies: ["Node.js", "MongoDB", "HTML/CSS"],
      github: "https://github.com/KhephrenDjelidi",
      team: "Équipe de 5",
      but: 2,
    },
    {
      id: 5,
      title: "QIX",
      subtitle: "Jeu rétro revisité",
      description:
        "Recréation fidèle du célèbre jeu arcade QIX des années 80, développé en Python. Moteur de jeu complet avec physique, collision et système de scoring authentique pour une expérience rétro immersive.",
      image: `${ASSET_BASE}QIX.png`,
      technologies: ["Python", "Pygame"],
      github: "https://github.com/KhephrenDjelidi",
      team: "Binôme",
      but: 1,
    },
    {
      id: 10,
      title: "Codex Naturalis",
      subtitle: "Jeu de société numérique",
      description:
        "Le but était de réaliser Codex Naturalis, un jeu de société qui plonge les joueurs dans le rôle de scientifiques explorant et découvrant la biodiversité de différentes régions du monde. En utilisant des cartes illustrées, les joueurs doivent collecter des échantillons de plantes et d'animaux pour remplir leur codex.",
      image: `${ASSET_BASE}CODEX_naturalis.png`,
      technologies: ["Java", "Gestion de projet", "Communication"],
      github: "https://github.com/KhephrenDjelidi",
      team: "Binôme",
      but: 1,
    },
    {
      id: 6,
      title: "UNESCO Alger",
      subtitle: "Patrimoine culturel",
      description:
        "Application web développée en partenariat avec l'UNESCO pour valoriser et documenter le patrimoine culturel d'Alger. Base de données complète des sites historiques avec descriptions détaillées et galeries photographiques.",
      image: `${ASSET_BASE}UNESCO_alger.png`,
      technologies: ["PHP", "MySQL", "HTML/CSS"],
      github: "https://github.com/KhephrenDjelidi",
      team: "Équipe de 6",
      but: 1,
    },
    {
      id: 7,
      title: "CoDec",
      subtitle: "Compresseur d'images",
      description:
        "Développement d'un compresseur d'images performant en C. Maîtrise de la manipulation de fichiers binaires, implémentation d'algorithmes de compression optimisés et gestion efficace de la mémoire. Compression sans perte et réduction de taille significative.",
      image: `${ASSET_BASE}CoDec.png`,
      technologies: ["C", "Binaire", "Algorithmes"],
      github: "https://github.com/KhephrenDjelidi",
      skills: ["C", "Binôme", "Binaire"],
      but: 3,
    },
    {
      id: 8,
      title: "U-Activity",
      subtitle: "Gestion des activités universitaires",
      description:
        "Plateforme web et mobile centralisée pour la gestion complète des activités universitaires. Fonctionnalités d'inscription, de suivi en temps réel, recherche avancée et messagerie interne. Expérience utilisateur optimisée pour étudiants et organisateurs d'événements.",
      image: `${ASSET_BASE}U-activity.png`,
      technologies: ["React", "Node.js", "Android Studio", "Tailwind CSS"],
      github: "https://github.com/KhephrenDjelidi",
      skills: [
        "React",
        "Node.js",
        "Android Studio",
        "PHPMyAdmin",
        "Tailwind CSS",
      ],
      team: "Équipe de 6",
      but: 3,
    },
    {
      id: 9,
      title: "Jenkins Project",
      subtitle: "Pipeline CI/CD",
      description:
        "Mise en place complète d'une pipeline CI/CD avec Jenkins. Configuration avancée pour automatiser les tests, la compilation et le déploiement d'applications web. Intégration avec Docker pour la containerisation et orchestration des environnements.",
      image: `${ASSET_BASE}Jenkins_Project.png`,
      technologies: ["Jenkins", "Docker", "CI/CD"],
      github: "https://github.com/KhephrenDjelidi",
      team: "Équipe de 5",
      skills: ["Jenkins", "Docker", "CI/CD"],
      but: 3,
    },
  ],
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simule un chargement initial
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <div className="App">
      {loading && <Loader />}
      <Navbar />
      <main>
        <Hero profile={portfolioData.profile} />
        <About profile={portfolioData.profile} />
        <Timeline timeline={portfolioData.timeline} />
        <SkillsBubbles skills={portfolioData.skills} />
        <Blocs projects={portfolioData.projects} />
        <Projects projects={portfolioData.projects} />
        <Contact profile={portfolioData.profile} />
      </main>
      <Footer profile={portfolioData.profile} />
    </div>
  );
}

export default App;
