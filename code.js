const translations = {
    en: {
      title: "Architect Rhm",
      title1: "About me",
      title2: "Projects",
      title3: "Name of project",
      title4: "Other project",
      title5: "Project 3",
      title6: "Project 4",
      title8: "Get in touch",
      paragraph: `Exploring cloud systems and infrastructure engineering,
      with a focus on making things reliable, well-designed and fast. I'm also eager to learn more about data,
      development and cybersecurity. Taking it one project at a time.`,
      paragraph1: "Little description",
      paragraph2: "See the project",
      paragraph3: "Another description of project",
      paragraph4: "See the project",
      paragraph5: "Another one",
      paragraph6: "See the project",
      paragraph7: "Again precise description",
      paragraph8: "See the project",
      paragraph9: "Feel free to reach out for project discussions or questions !",
      paragraph10: "Send me an email",
    },
    fr: {
        title: "Architecte RHM",
        title1: "À propos de moi",
        title2: "Projets",
        title3: "Nom du projet.",
        title4: "Autre projet",
        title5: "Projet 3",
        title6: "Projet 4",
        title8: "Prendre contact",
        paragraph: `<span class="highlight">Exploration des</span> systèmes cloud <span class="highlight">et de</span> l'ingénierie des infrastructures,
        <span class="highlight">avec un focus sur la création de solutions </span>sécurisés, fiables et rapides.
        <span class="highlight">Je souhaite également en</span>  apprendre <span class="highlight">davantage sur</span> les données<span class="highlight">,</span>
        le développement<span class="highlight"> et</span> la cybersécurité.
        <span class="highlight">Avancer</span> projet par projet.`,
      paragraph1: "Petite description",
      paragraph2: "Voir le projet",
      paragraph3: "Une autre descrition de projet",
      paragraph4: "voir le projet",
      paragraph5: "Encore un autre",
      paragraph6: "Voir le projet",
      paragraph7: "Une autre descritpion precise",
      paragraph8: "Voir le projet",
      paragraph9: "Que ce soit pour un projet ou pour discuter, n'hésitez pas à m'envoyer un email !",
      paragraph10: "Envoyez moi un mail",

    }
    }
// =====================
// TRANSLATIONS + SET LANGUAGE
// =====================

function setLanguage(lang) {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });
}

// =====================
// GESTION LANGUE
// =====================
const langToggle = document.getElementById("lang-toggle");
const langIcon = document.getElementById("lang-icon");

// Récupère la langue enregistrée ou utilise "en" par défaut
let currentLang = localStorage.getItem("preferredLang") || "en";

// Applique la langue au chargement
setLanguage(currentLang);
langIcon.setAttribute("src", currentLang === "en" ? "ukflag.svg" : "frflag.svg");
langIcon.setAttribute("alt", currentLang.toUpperCase());

// Lors du clic, on bascule la langue
langToggle.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "fr" : "en";
    localStorage.setItem("preferredLang", currentLang);
    setLanguage(currentLang);
    langIcon.setAttribute("src", currentLang === "en" ? "ukflag.svg" : "frflag.svg");
    langIcon.setAttribute("alt", currentLang.toUpperCase());
});

// =====================
// GESTION NUIT/JOUR
// =====================
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

// Au chargement : appliquer le thème sauvegardé
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeIcon.setAttribute("src", "moon.svg");
} else {
    document.body.classList.remove("dark-mode");
    themeIcon.setAttribute("src", "sun_copy.svg");
}

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    // Mettre à jour l'icône
    if (document.body.classList.contains("dark-mode")) {
        themeIcon.setAttribute("src", "moon.svg");
        localStorage.setItem("theme", "dark");
    } else {
        themeIcon.setAttribute("src", "sun_copy.svg");
        localStorage.setItem("theme", "light");
    }
});


// =====================
// GESTION SCROLL NAVBAR
// =====================    
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 10) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});
// =====================
// TYPEWRITER
// =====================
document.addEventListener("DOMContentLoaded", function () {
    const texts = ["Abdelhamid Rahmani", "Cloud Architect", "DevOps Engineer", "Cloud Consultant"];
    const typewriterElement = document.getElementById("typewriter");
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let pauseBetween = 1000; // pause entre chaque mot (ms)

    function type() {
        const currentText = texts[textIndex];
        let displayedText = currentText.substring(0, charIndex);
        typewriterElement.textContent = displayedText;

        if (!isDeleting && charIndex < currentText.length) {
            charIndex++;
            setTimeout(type, 100);
        } else if (isDeleting && charIndex > 0) {
            charIndex--;
            setTimeout(type, 50);
        } else {
            isDeleting = !isDeleting;

            if (!isDeleting) {
                textIndex = (textIndex + 1) % texts.length;
            }

            setTimeout(type, pauseBetween);
        }
    }

    type();
});
// =====================
// Gestion scroll
// =====================
window.addEventListener("scroll", () => {
    const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    document.getElementById("progress-bar").style.width = scrolled + "%";
  });

  
  window.addEventListener("scroll", () => {
    document.getElementById("backToTop").style.display = 
      window.scrollY > 200 ? "block" : "none";
  });
  


//=======
//loader
//=======
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    loader.style.display = "none";
  });

  // Exemple d'activation du loader en dark mode
document.body.classList.add("dark-loader");

// Quand le site est chargé
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.display = "none";
  document.body.classList.remove("dark-loader");
});



