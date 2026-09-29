const skills = ["C#", "Python", "JavaScript", "React", "Node.js", ".NET Core", "MySQL", "HTML5", "CSS"];
const roles = ["software developer", "problem solver", "technology facilitator"];

// Rotating role text
const roleEl = document.getElementById("role");
let roleIndex = 0;
setInterval(() => {
  roleIndex = (roleIndex + 1) % roles.length;
  roleEl.textContent = "> " + roles[roleIndex];
}, 2400);

// Scrolling skills strip (duplicated for a seamless loop)
const marquee = document.getElementById("marquee");
marquee.innerHTML = [...skills, ...skills]
  .map((s) => `<span>${s} <span class="slash">/</span></span>`)
  .join("");

// Technology chips
document.getElementById("chips").innerHTML = skills
  .map((s) => `<span>${s}</span>`)
  .join("");

// Scroll progress bar
const progress = document.getElementById("progress");
const updateProgress = () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + "%";
};
window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();

// Reveal sections on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
