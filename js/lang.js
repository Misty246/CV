// ==========================
// lang.js - Gestion des traductions FR/EN
// ==========================

const translations = {
  fr: {
    header_feature: "Curieux et Polyvalent",
    menu_feature: "Curieux et Polyvalent",
    citation:
      "Améliorer l'existant,<br>Remettre en question,<br>Optimiser les performances.",
    mindset:
      "Je suis toujours à la recherche de nouvelles façons de rendre les choses plus simples et plus efficaces.",
    about_title: "À propos de moi",
    certificate_title: "Certificats & Permis",
    about_text:
      "Étudiant motivé, j’aime analyser, comprendre et améliorer l’existant. Curieux par nature, je m’adapte rapidement à de nouveaux environnements et j’apprends vite de nouvelles compétences. Mon objectif est de toujours progresser, de relever des défis et de trouver des solutions innovantes.",
    contact_title: "Me contacter",
    contact_intro:
      "N’hésitez pas à me contacter pour toute question, opportunité ou collaboration.",
    contact_location: "Amiens, France",
    diploma_bac: "Baccalauréat (mention bien).",
    btn_download_bac: "Afficher le Diplôme",
    btn_download_toeic: "Afficher le Certificat",
    certificate_toeic: "Certification TOEIC validé (B2+).",
    certificate_license: "Permis voiture Français et véhiculé.",
    certificate_first_aid: "Formation aux premiers secours (PSC1).",
    skills_title: "Compétences & Aptitudes", 
    skills_office: "Maîtrise des Outils Office",
    skills_office_desc: "Excel, VBA, Word, PowerPoint, PowerBI",
    skills_google: "Maîtrise des Outils Google",
    skills_google_desc: "Sheet, Docs, Slides, Looker Studio, Forms",
    skills_3d: "Modélisation 3D",
    skills_3d_desc: "Onshape, Fusion 360, SolidWorks",
    skills_programming: "Compétences en programmation",
    skills_programming_desc: "Python, C, HTML, CSS, JavaScript, VBA, AppScript",
    skills_project_management: "Optimisation et conduite de projets",
    skills_sap: "Utilisation, Paramétrage & Extractions de SAP",
    experience_title: "Expériences",
    experience_gendarmerie_date: "Depuis 2024",
    experience_gendarmerie_title: "Réserviste de la gendarmerie",
    experience_gendarmerie_description: "Sous Officer (GND)",
    experience_gendarmerie_more: "En tant que réserviste de la gendarmerie, je m'engage à soutenir les forces de l'ordre dans leurs missions de sécurité et de protection des citoyens.<br><br>Mon rôle consiste à contribuer à la sécurité publique en participant à des opérations de maintien de l'ordre, de prévention de la criminalité, de renforcement de la sécurité nationale, de protection des citoyens et de maintien de l'ordre public.",
    experience_acaplast_date: "Juillet 2023",
    experience_acaplast_title: "Stage Ouvrier",
    experience_acaplast_description: "Stage de découverte en entreprise industrielle",
    experience_acaplast_more: "Travail en production, assemblage, contrôle qualité, gestion des stocks, métrologie, finance.<br><br>Ce stage m'a permis d'avoir une vision globale du fonctionnement d'une entreprise industrielle et de découvrir les différents métiers qui la composent, renforçant ainsi ma polyvalence et ma compréhension des enjeux opérationnels.",
    experience_ffhm_date: "2022 - 2023",
    experience_ffhm_title: "Service Civique",
    experience_ffhm_description: "Responsable communications et démarchage",
    experience_ffhm_more: "Responsable de la communication et des démarches stratégiques.<br><br> En charge de la visibilité et du développement de la structure, incluant : <br>• La création d’un site web <br>• La recherche de sponsors <br>• La mise en œuvre d’actions visant à renforcer la cohésion de la ligue entre les clubs.",
    more_button_text: "En savoir plus",
    reduce_button_text: "Réduire",
    experience_airbus_date: "2024 – 2027",
    experience_airbus_title: "Apprenti Supply-Chain",
    experience_airbus_description: "Optimisation des process & Chef de projet",
    experience_airbus_more: "• Analyse de Données & Pilotage SAP<br>• Automatisation & Digitalisation<br>• Ingénierie d'Outils Décisionnels<br>• Recherche & Développement Opérationnel<br>• Optimisation des Processus (Lean Management)<br>• Expertise Métier \"Back-up Supply\"",
    experience_airbus_internship_date: "Juillet-Août 2024",
    experience_airbus_internship_title: "Intérimaire Supply-Chain",
    experience_airbus_internship_description: "Chef de projet approvisionnement",
    experience_airbus_internship_more: "• Construire des outils de gestion des approvisionnements<br>• Lead des projets d'amélioration continue<br>• Assurer le support opérationnel",
    
    project_title: "Projets",
    project_robot_date: "2024",
    project_robot_title: "Coupe de France de Robotique",
    project_robot_description: "Conception et réalisation d'un robot autonome",
    project_portfolio_date: "2026",
    project_portfolio_title: "Création d'un Portfolio en ligne",
    project_portfolio_description: "Développement d'un site web professionnel",
    project_portfolio_more: "L’objectif de ce projet était de créer un portfolio en ligne afin de présenter mes compétences, mes expériences et mes réalisations de manière professionnelle et claire.<br /><br /> Pour le développer, j’ai utilisé HTML, CSS et JavaScript, en mettant l’accent sur la simplicité, la lisibilité et l’esthétique. Le site a été conçu pour être responsive, afin d’offrir une expérience utilisateur optimale sur les appareils mobiles.<br /><br /> À travers ce projet, je souhaite avant tout montrer ma capacité à m’adapter et à sortir de ma zone de confort. Toujours dans une démarche d’amélioration et d’optimisation, ce site reflète ma volonté d’apprendre, d’évoluer et de perfectionner mes compétences.",
    project_airbus_date: "2026",
    project_airbus_title: "Projet Airbus",
    project_airbus_description: "Développement d'Outils métier standards, optimisation de processus & outils de visualisation",
    project_airbus_more: "À mon arrivée chez Airbus en Supply Chain, j’ai rapidement constaté un manque de standardisation : chaque Supply Officer utilisait ses propres fichiers et méthodes de travail. Cela entraînait un suivi peu fiable, beaucoup d’actions manuelles et une communication difficile entre les métiers.<br> <br> Pour améliorer cette situation, j’ai développé et mis en place plusieurs solutions : <br><br> - création d’un fichier standard commun utilisé par 20 Supply Officers <br> - automatisation des extractions de données depuis SAP <br> - revue et amélioration des processus métier <br> - mise en place d’indicateurs de performance (fiabilité fournisseur, dérives, etc.) <br> - mise en place de MoM (Minutes of Meeting) pour structurer les réunions <br> <br> Grâce à cet outil et à ces améliorations, les Supply Officers ont pu réduire d’environ 2 heures par jour les tâches manuelles, notamment liées aux extractions et à la consolidation de données. Cela a permis d’obtenir une meilleure visibilité sur l’approvisionnement, une anticipation des risques améliorée et une fiabilité accrue dans la gestion des fournisseurs.",

    // ✅ NAVIGATION
    nav_home: "Accueil",
    nav_experiences: "Expériences",
    nav_projects: "Projets",
    nav_skills: "Aptitudes",
    nav_certificate: "Certificat & Permis",
    nav_contact: "Contact",

    // ✅ BOUTONS
    btn_download_cv: "Télécharger mon CV",
    btn_contact: "Me contacter",

    footer_copyright: "© 2026 Kilyan George. Tous droits réservés.",
  },
  en: {
    header_feature: "Curious and Versatile",
    menu_feature: "Curious and Versatile",
    citation:
      "Improve the existing,<br>Question things,<br>Optimize performance.",
    mindset:
      "I am always looking for new ways to make things simpler and more efficient.",
    about_title: "About me",
    certificate_title: "Certificates & Licenses",
    about_text:
      "Motivated student, I like to analyze, understand, and improve existing processes. Curious by nature, I adapt quickly to new environments and quickly learn new skills. My goal is to always progress, take on challenges, and find innovative solutions.",
    contact_title: "Contact me",
    contact_intro:
      "Feel free to contact me for any questions, opportunities, or collaborations.",
    contact_location: "Amiens, France",
    diploma_bac: "Baccalauréat, with honors (Good).",
    btn_download_bac: "View Diploma",
    btn_download_toeic: "View Certificate",
    certificate_toeic: "TOEIC Certification achieved (B2+).",
    certificate_license: "French driving license with own vehicle.",
    certificate_first_aid: "First Aid Training (PSC1).",
    skills_title: "Skills & Abilities",
    skills_office: "Proficient in Office Tools",
    skills_office_desc: "Excel, VBA, Word, PowerPoint, PowerBI",
    skills_google: "Proficient in Google Tools",
    skills_google_desc: "Sheet, Docs, Slides, Looker Studio, Forms",
    skills_3d: "3D Modeling",
    skills_3d_desc: "Onshape, Fusion 360, SolidWorks",
    skills_programming: "Programming Skills",
    skills_programming_desc: "Python, C, HTML, CSS, JavaScript, VBA, AppScript",
    skills_project_management: "Optimize & Drive project",
    skills_sap: "Use, Parameter settings & Extractions from SAP", 
    experience_title: "Experiences",
    experiene_gendarmerie_date: "Since 2024",
    experience_gendarmerie_title: "Gendarmerie Reservist",
    experience_gendarmerie_description: "Non-commissioned officer (GND)",
    experience_gendarmerie_more: "As a gendarmerie reservist, I am committed to supporting law enforcement in their missions of security and citizen protection.<br><br>My role is to contribute to public safety by participating in operations to maintain order, prevent crime, strengthen national security, protect citizens, and maintain public order.",
    experience_acaplast_date: "July 2023",
    experience_acaplast_title: "Worker Internship",
    experience_acaplast_description: "Discovery internship in an industrial company",
    experience_acaplast_more: "Work in production, assembly, quality control, inventory management, metrology, finance.<br><br>This internship allowed me to have a global vision of the functioning of an industrial company and to discover the different professions that compose it, thus strengthening my versatility and understanding of operational issues.",
    experience_ffhm_date: "2022 - 2023",
    experience_ffhm_title: "Civic Service",
    experience_ffhm_description: "Communications and canvassing manager",
    experience_ffhm_more: "Responsible for communication and strategic approaches.<br><br> In charge of the visibility and development of the structure, including: <br>• Creating a website <br>• Searching for sponsors <br>• Implementing actions to strengthen the cohesion of the league between clubs.",
    more_button_text: "Learn more",
    reduce_button_text: "Reduce",
    experience_airbus_date: "2024 – 2027",
    experience_airbus_title: "Supply-Chain Apprentice",
    experience_airbus_description: "Process optimization & Project management",
    experience_airbus_more: "• Data Analysis & SAP Management<br>• Automation & Digitalization<br>• Decision-Making Tools Engineering<br>• Operational Research & Development<br>• Process Optimization (Lean Management)<br>• \"Back-up Supply\" Business Expertise",
    experience_airbus_internship_date: "July-August 2024",
    experience_airbus_internship_title: "Supply-Chain Temporary Worker",
    experience_airbus_internship_description: "Supply Chain Project Manager",
    experience_airbus_internship_more: "• Build supply management tools<br>• Lead continuous improvement projects<br>• Ensure operational support",
    project_title: "Projects",
    project_robot_date: "2024",
    project_robot_title: "French Robotics Cup",
    project_robot_description: "Design and realization of an autonomous robot",
    project_portfolio_date: "2026",
    project_portfolio_title: "Creation of an online Portfolio",
    project_portfolio_description: "Development of a professional website",
    project_portfolio_more: "The goal of this project was to create an online portfolio to present my skills, experiences, and achievements in a professional and clear manner.<br /><br /> To develop it, I used HTML, CSS, and JavaScript, focusing on simplicity, readability, and aesthetics. The site was designed to be responsive to provide an optimal user experience on mobile devices.<br /><br /> Through this project, I primarily want to show my ability to adapt and step out of my comfort zone. Always in a process of improvement and optimization, this site reflects my willingness to learn, evolve, and perfect my skills.",
    project_airbus_date: "2026",
    project_airbus_title: "Airbus Project",
    project_airbus_description: "Development of standard business tools, process optimization & visualization tools",
    project_airbus_more: "Upon my arrival at Airbus in Supply Chain, I quickly noticed a lack of standardization: each Supply Officer used their own files and working methods. This led to unreliable tracking, a lot of manual actions, and difficult communication between professions.<br> <br> To improve this situation, I developed and implemented several solutions: <br><br> - creation of a common standard file used by 20 Supply Officers <br> - automation of data extractions from SAP <br> - review and improvement of business processes <br> - implementation of performance indicators (supplier reliability, deviations, etc.) <br> - implementation of MoM (Minutes of Meeting) to structure meetings <br> <br> Thanks to this tool and these improvements, Supply Officers were able to reduce manual tasks by about 2 hours per day, particularly related to data extractions and consolidation. This allowed for better visibility on supply, improved risk anticipation, and increased reliability in supplier management.",
    // ✅ NAVIGATION
    nav_home: "Home",
    nav_experiences: "Experiences",
    nav_projects: "Projects",
    nav_skills: "Skills",
    nav_certificate: "Certificate & License",
    nav_contact: "Contact",

    // ✅ BOUTONS
    btn_download_cv: "Dowload my resume",
    btn_contact: "Contact me",

    footer_copyright: "© 2026 Kilyan George. All rights reserved.",
  },
};

const defaultLang = "fr";

/**
 * Applique la langue sur tous les éléments avec data-i18n
 * @param {string} lang - Code langue ('fr' ou 'en')
 */
function setLanguage(lang) {
  localStorage.setItem("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");

    if (el.classList.contains("i18n-text") && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  updateMoreButtons(lang);

  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

/**
 * Met à jour le texte des boutons "more/reduce" selon la langue et leur état
 * @param {string} lang - Code langue ('fr' ou 'en')
 */
function updateMoreButtons(lang) {
  document.querySelectorAll(".more-btn").forEach(button => {
    const card = button.closest(".timeline-content");
    const span = button.querySelector("span");

    if (card.classList.contains("active")) {
      span.textContent = translations[lang].reduce_button_text;
    } else {
      span.textContent = translations[lang].more_button_text;
    }
  });
}

/**
 * Initialisation au chargement de la page
 */
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || defaultLang;
  setLanguage(savedLang);

  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.addEventListener("click", () => {
      setLanguage(btn.dataset.lang);
    });
  });
});
