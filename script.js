const menu = document.getElementById("menu");
const closeButton = document.getElementById("close-mobile");
const nav = document.getElementById("nav-mobile");
const navLink = document.querySelectorAll(".nav-link");

menu.addEventListener("click", () => {
  nav.classList.add("show");
});

closeButton.addEventListener("click", () => {
  nav.classList.remove("show");
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
  });
});

// Scroll to Projects & Contact Sections
document.querySelector(".hero .content button").addEventListener("click", () => {
  document.querySelector("#project").scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".extra-nav button").addEventListener("click", () => {
  document.querySelector("footer").scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
});

// Popup Functionality
const popup = document.getElementById("popup");
const popupText = document.getElementById("popup-text");
const closePopup = document.getElementById("close-popup");

function showPopup(info) {
  popupText.textContent = info;
  popup.classList.remove("hidden");
}

closePopup.addEventListener("click", () => {
  popup.classList.add("hidden");
});

// Contact Icons Popup
document.querySelectorAll(".icon-box").forEach(icon => {
  icon.addEventListener("click", () => {
    showPopup(icon.dataset.info);
  });
});

// Project Buttons Popup
document.querySelectorAll(".project .card .action button").forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.textContent === "IP") {
      showPopup("Server IP: mc.skyvale.online");
    } else if (btn.textContent === "Discord") {
      showPopup("Discord: discord.gg/skyvale");
    } else if (btn.textContent === "Contact Me") {
      document.querySelector("#contact").scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
  });
});

// === MATRIX BACKGROUND ===
const canvas = document.getElementById("matrixBackground");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Characters
const letters = "ᔑʖᓵ↸ᒷ⎓⊣⍑╎⋮ꖌꖎᒲリ!¡ᑑ∷ᓭℸ̣⚍⍊∴̇/|⨅";
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "rgba(175, 175, 175, 0.25)";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = letters.charAt(Math.floor(Math.random() * letters.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(drawMatrix, 33);

// Adjust canvas when window resizes
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// === Scroll behavior for nav links ===
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const targetID = link.getAttribute("href");
    const targetSection = document.querySelector(targetID);

    if (targetSection) {
      e.preventDefault();
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
  });
});
