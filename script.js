const elements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
});

elements.forEach(el => observer.observe(el));

//voltar ao topo pela seta
const btn = document.getElementById("topBtn");

window.onscroll = () => {
  btn.style.display = window.scrollY > 300 ? "block" : "none";
};

btn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};