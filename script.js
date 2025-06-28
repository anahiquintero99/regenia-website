document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "-50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

document.querySelectorAll(".section").forEach((section) => {
  observer.observe(section);
});

// Mobile menu toggle
function toggleMobileMenu() {
  const navMenu = document.querySelector(".nav-menu");
  navMenu.classList.toggle("active");
}

// Theme toggle
function toggleTheme() {
  const body = document.body;
  const themeToggle = document.querySelector(".theme-toggle i");

  body.classList.toggle("dark-theme");

  if (body.classList.contains("dark-theme")) {
    themeToggle.className = "fas fa-sun";
    // Note: localStorage is not used as per requirements
  } else {
    themeToggle.className = "fas fa-moon";
  }
}

// Form submission
function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  // Basic validation
  if (!name || !email || !message) {
    alert("Por favor, completa todos los campos requeridos.");
    return;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Por favor, ingresa un correo electrónico válido.");
    return;
  }

  // Simulate form submission
  const submitBtn = event.target.querySelector(".submit-btn");
  const originalText = submitBtn.textContent;

  submitBtn.textContent = "Enviando...";
  submitBtn.disabled = true;

  setTimeout(() => {
    alert("¡Gracias por tu mensaje! Te contactaremos pronto.");
    event.target.reset();
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }, 2000);
}

// Initial setup
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    section.classList.add("visible");
  });
});

// Carousel functionality
const carousel = document.getElementById("pillars-carousel");
const nextBtn = document.getElementById("pillars-next");
const prevBtn = document.getElementById("pillars-prev");

nextBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: 340, behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: -340, behavior: "smooth" });
});
