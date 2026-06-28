// hamburger menu
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// typewriter effect
const words = ["Developer", "Designer", "Freelancer", "Engineer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typewriter = document.getElementById("typewriter");

function type() {
  const currentWord = words[wordIndex];

  if (isDeleting) {
    typewriter.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typewriter.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  // finished typing word
  if (!isDeleting && charIndex === currentWord.length) {
    setTimeout(() => (isDeleting = true), 1500); // pause before deleting
  }

  // finished deleting word
  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length; // next word
  }

  const speed = isDeleting ? 80 : 120;
  setTimeout(type, speed);
}

type();

// theme toggle for dark mode
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  
  const icon = themeToggle.querySelector("i");
  if (document.documentElement.classList.contains("dark")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
});