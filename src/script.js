import './style.css';

// Step elements
const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const offerBtn = document.getElementById('offer');
const offerMsg = document.getElementById('offerMsg');
const heartsContainer = document.querySelector(".hearts");

// Default: show step1, hide step2
step1.style.display = 'block';
step2.style.display = 'none';

// Step 1 buttons
document.getElementById('yes').addEventListener('click', () => {
  // Hearts animation
  if (heartsContainer) {
    for (let i = 0; i < 30; i++) createHeart();
    setInterval(createHeart, 800);
  }

  // Move to step 2
  step1.style.display = 'none';
  step2.style.display = 'block';
});

document.getElementById('no').addEventListener('mouseover', () => {
  const x = Math.random() * window.innerWidth * 0.7;
  const y = Math.random() * window.innerHeight * 0.7;
  const noBtn = document.getElementById('no');
  noBtn.style.position = 'absolute';
  noBtn.style.left = x + 'px';
  noBtn.style.top = y + 'px';
});

// Step 2: Offer button
offerBtn.addEventListener('click', () => {
  offerMsg.innerHTML = "₹500 Cash Back! Go and eat BIRIYANI! 🍛";
  offerBtn.disabled = true;
});

// Hearts function
function createHeart() {
  if (!heartsContainer) return;
  const heart = document.createElement("span");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 30 + 20 + "px"; // bigger hearts
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 7000);
}
