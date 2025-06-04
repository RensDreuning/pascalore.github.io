const menuBtn = document.getElementById("menu-btn");
const navBar = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navBar.classList.toggle("open");

  const isOpen = navBar.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

const navLinks = document.querySelectorAll('nav ul#nav-links li a');

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    if (targetId === '#') return;
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      let adjustedPosition = targetPosition - 130;

      const screenWidth = window.innerWidth;
      if (screenWidth <= 1060) {
        adjustedPosition = targetPosition - 90;
      }

      window.scrollTo({
        top: adjustedPosition,
        behavior: 'smooth'
      });

      navBar.classList.toggle("open");

      const isOpen = navBar.classList.contains("open");
      menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
    }
  });
});

const logoLink = document.querySelector('.nav__logo a');

if (logoLink) {
  logoLink.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = logoLink.getAttribute('href');
    if (targetId === '#') return;
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      let adjustedPosition = targetPosition - 90;

      window.scrollTo({
        top: adjustedPosition,
        behavior: 'smooth'
      });
    }
  });
}
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".about__container .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".about__container .section__description", {
  ...scrollRevealOption,
  delay: 200,
  interval: 200,
});
ScrollReveal().reveal(".about__container img", {
  ...scrollRevealOption,
  delay: 400,
});

ScrollReveal().reveal(".relatiecoach__container .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".relatiecoach__container .section__description", {
  ...scrollRevealOption,
  delay: 200,
});
ScrollReveal().reveal(".relatiecoach__images", {
  ...scrollRevealOption,
  delay: 200,
});

ScrollReveal().reveal(".eenopeen__container .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".eenopeen__container .section__description", {
  ...scrollRevealOption,
  delay: 200,
});
ScrollReveal().reveal(".organic-gallery", {
  ...scrollRevealOption,
  delay: 200,
});

ScrollReveal().reveal(".wiebenik__container .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".wiebenik__container .headshot", {
  ...scrollRevealOption,
  delay: 200,
});

ScrollReveal().reveal(".wiebenik__container .section__description", {
  ...scrollRevealOption,
  delay: 400,
});

ScrollReveal().reveal(".service__container .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".service__container .section__description", {
  ...scrollRevealOption,
  delay: 200,
});

window.addEventListener("resize", updateNavbarPadding);
document.addEventListener("DOMContentLoaded", updateNavbarPadding);

function updateNavbarPadding() {
  const firstSection = document.getElementById("nav__padding"); // Pak het eerste element na de navbar

    let navbarHeight = 0;

    const screenWidth = window.innerWidth;
    if (screenWidth > 1410) {
        navbarHeight = 134;
    } else if (screenWidth > 1060) {
        navbarHeight = 136
    } else {
        navbarHeight = 79;
    }

  function updatePadding() {
    firstSection.style.paddingTop = navbarHeight + "px"; // Pas de padding aan
  }

  updatePadding(); // Voer direct uit bij laden

};

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // Pas dit aan om te bepalen hoe snel het beweegt
  const speedFactor = 0.1;

  document.querySelectorAll('.shape_row_noscroll').forEach((row, index) => {
    // Wissel richting per rij, eerste naar rechts, tweede naar links, etc.
    const direction = index % 2 === 0 ? 1 : -1;

    // Horizontale positie is volledig gebaseerd op verticale scrollpositie
    const translateX = scrollY * speedFactor * direction;

    row.style.transform = `translateX(${translateX}px)`;
  });
});

window.addEventListener("scroll", function () {
  const desktopNav = document.querySelector("nav"); // Pak alleen de juiste nav
  if (window.scrollY > 50) {
    desktopNav.classList.add("scrolled");
  } else {
    desktopNav.classList.remove("scrolled");
  }
});