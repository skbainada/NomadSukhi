// ===============================
// Nomad Sukhi Website Script
// ===============================

// Smooth Scrolling Navigation
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    window.scrollTo({
      top: targetSection.offsetTop - 60,
      behavior: 'smooth'
    });
  });
});

// Navbar Background Change on Scroll
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.classList.add('nav-scrolled');
  } else {
    nav.classList.remove('nav-scrolled');
  }
});

// Fade In Sections on Scroll
const sections = document.querySelectorAll('section');

const revealSection = () => {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add('show');
    }
  });
};

window.addEventListener('scroll', revealSection);
revealSection();

// Dynamic Typing Effect
const text = [
  "Traveller",
  "Trekker",
  "Explorer",
  "YouTuber",
  "Adventure Creator"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

  if (count === text.length) {
    count = 0;
  }

  currentText = text[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing").textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1200);
  } else {
    setTimeout(type, 100);
  }

})();

// Scroll To Top Button
const topBtn = document.createElement("button");
topBtn.innerHTML = "↑";
topBtn.id = "topBtn";
document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

  if (window.scrollY > 400) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }

});

topBtn.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});

// Adventure Cards Hover Animation
const cards = document.querySelectorAll('.card');

cards.forEach(card => {

  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.05)';
    card.style.transition = '0.3s ease';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
  });

});

// Current Year Auto Update
const footer = document.querySelector("footer p");

footer.innerHTML = `© ${new Date().getFullYear()} Nomad Sukhi | All Rights Reserved`;

// Console Welcome Message
console.log("🌍 Welcome to Nomad Sukhi Official Website");
console.log("Traveller | Trekker | YouTuber");

// Preloader
window.addEventListener("load", () => {

  const loader = document.getElementById("preloader");

  if (loader) {
    loader.style.opacity = "0";

    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }

});
