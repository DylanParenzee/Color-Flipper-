const colorBtn = document.querySelector(".btn");
const color = document.querySelector(".color");

function randColor(Red, Blue, Green) {
  Red = Math.floor(Math.random() * 256);
  Blue = Math.floor(Math.random() * 256);
  Green = Math.floor(Math.random() * 256);
  document.body.style.background = `rgba(${Red},${Blue},${Green})`;
  color.textContent = `rgb(${Red},${Blue},${Green})`;
}

colorBtn.addEventListener("click", randColor);
