// PERSONALIZA LA FECHA: usa el formato AAAA-MM-DD, por ejemplo "2025-04-12".
const anniversaryDate = "2025-05-09";

const startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", () => {
  document.getElementById("dedicatoria").scrollIntoView({behavior:"smooth"});
  startBtn.textContent = "Te amo muchísimo ♡";
});

const letterBtn = document.getElementById("letterBtn");
const letter = document.getElementById("letter");
letterBtn.addEventListener("click", () => {
  const isHidden = letter.classList.toggle("hidden");
  letterBtn.textContent = isHidden ? "Abrir mi carta ♡" : "Cerrar mi carta ♡";
  letterBtn.setAttribute("aria-expanded", String(!isHidden));
});

document.getElementById("surpriseBtn").addEventListener("click", () => {
  const msg = document.getElementById("surpriseMessage");
  msg.classList.toggle("hidden");
  document.getElementById("surpriseBtn").textContent =
    msg.classList.contains("hidden") ? "Abrir sorpresa ♡" : "Una sorpresa solo para ti ♡";
});

function updateCounter(){
  const out = document.getElementById("days");
  const dateText = document.getElementById("dateText");
  if(!/^\d{4}-\d{2}-\d{2}$/.test(anniversaryDate) || anniversaryDate === "AAAA-MM-DD"){
    out.textContent = "♡";
    dateText.textContent = "edita la fecha en script.js";
    return;
  }
  const start = new Date(anniversaryDate + "T00:00:00");
  if(Number.isNaN(start.getTime())) return;
  const today = new Date();
  const days = Math.max(0, Math.floor((new Date(today.getFullYear(),today.getMonth(),today.getDate()) - start) / 86400000));
  out.textContent = days.toLocaleString("es-MX");
  dateText.textContent = start.toLocaleDateString("es-MX",{day:"numeric",month:"long",year:"numeric"});
}
updateCounter();

// Aparecen las secciones suavemente al desplazarte.
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if(entry.isIntersecting) entry.target.classList.add("visible"); });
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Corazoncitos flotantes decorativos.
function makeHeart(){
  const heart = document.createElement("span");
  heart.className = "heart-particle";
  heart.textContent = Math.random() > .5 ? "♡" : "♥";
  heart.style.left = Math.random()*100 + "vw";
  heart.style.fontSize = (12 + Math.random()*17) + "px";
  heart.style.opacity = (.35 + Math.random()*.5).toString();
  heart.style.animationDuration = (7 + Math.random()*7) + "s";
  document.body.appendChild(heart);
  setTimeout(()=>heart.remove(),14500);
}
setInterval(makeHeart,900);
