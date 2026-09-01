// Header shadow + back-to-top visibility on scroll
const header = document.getElementById("siteHeader");
const scrollTopBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY > 20;
  header.classList.toggle("scrolled", scrolled);
  scrollTopBtn.classList.toggle("visible", scrolled);
  if (scrolled) {
    scrollTopBtn.style.display = "flex";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Mobile menu
const hamburger = document.getElementById("hamburger");
const mainNav = document.getElementById("mainNav");

function closeMenu() {
  hamburger.classList.remove("active");
  mainNav.classList.remove("active");
  hamburger.setAttribute("aria-expanded", "false");
}

hamburger.addEventListener("click", () => {
  const isActive = mainNav.classList.toggle("active");
  hamburger.classList.toggle("active", isActive);
  hamburger.setAttribute("aria-expanded", String(isActive));
});

document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// Scroll reveal animations
const revealItems = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
revealItems.forEach((item) => observer.observe(item));

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
