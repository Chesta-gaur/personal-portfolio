// mobile desktop
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".mobile-navbar");
const navLinks = document.querySelectorAll(".mobile-navbar a");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navbar.classList.toggle("active");
  document.body.classList.toggle("menu-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navbar.classList.remove("active");
    document.body.classList.remove("menu-open");
  });
});

// skill progress bar animation trigger
document.addEventListener("DOMContentLoaded", () => {
  const skillsSection = document.querySelector("#skills");
  const progressBars = document.querySelectorAll(".progress-bar");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          progressBars.forEach((bar) => bar.classList.add("animate"));
          observer.unobserve(skillsSection); // run once
        }
      });
    },
    { threshold: 0.4 }
  ); // triggers when 40% visible

  observer.observe(skillsSection);
});

// purecounter
document.addEventListener("DOMContentLoaded", function () {
  const statsSection = document.querySelector("#stats");
  let counterStarted = false;

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && !counterStarted) {
        new PureCounter();
        counterStarted = true;
      }
    },
    { threshold: 0.3 }
  ); // 30% visibility

  observer.observe(statsSection);
});
