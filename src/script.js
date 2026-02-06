const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const msg = document.getElementById("loveMsg");
const heartsContainer = document.querySelector(".hearts");

yesBtn.addEventListener("click", () => {
  msg.style.display = "block";
  for (let i = 0; i < 30; i++) createHeart();
});

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * window.innerWidth * 0.7;
  const y = Math.random() * window.innerHeight * 0.7;

  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

function createHeart() {
  const heart = document.createElement("span");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 7000);
}

setInterval(createHeart, 800);
