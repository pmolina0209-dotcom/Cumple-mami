/* VIDEO MODAL */
function openVideoModal() {
  const modal = document.getElementById("videoModal");
  modal.classList.add("open");
  document.body.classList.add("popup-open");
}

function closeVideoModal() {
  const modal = document.getElementById("videoModal");
  modal.classList.remove("open");
  document.body.classList.remove("popup-open");

  // Reinicia el video
  const frame = document.getElementById("driveVideo");
  frame.src = frame.src;
}

/* POPUP MENSAJE SORPRESA */
function showSurprise() {
  document.getElementById("surprise").style.display = "flex";
  document.body.classList.add("popup-open");
}

function closeSurprise() {
  document.getElementById("surprise").style.display = "none";
  document.body.classList.remove("popup-open");
}

/* CONFETI */
const canvas = document.getElementById("confettiCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confetti = [];
for (let i = 0; i < 120; i++) {
  confetti.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 6 + 2,
    dx: Math.random() * 2 - 1,
    dy: Math.random() * 3 + 1,
    color: `hsl(${Math.random() * 360}, 80%, 60%)`
  });
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach(c => {
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctx.fillStyle = c.color;
    ctx.fill();

    c.x += c.dx;
    c.y += c.dy;

    if (c.y > canvas.height) c.y = -10;
    if (c.x > canvas.width) c.x = 0;
    if (c.x < 0) c.x = canvas.width;
  });
  requestAnimationFrame(drawConfetti);
}
drawConfetti();
