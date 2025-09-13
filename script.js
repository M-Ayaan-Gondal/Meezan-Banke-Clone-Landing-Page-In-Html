// script.js
const lenis = new Lenis({
  duration: 1.2, // Adjust duration for scroll speed (in seconds)
  easing: (t) => 1 - Math.pow(1 - t, 3), // cubic ease-out
  smoothWheel: true, // Enable smooth scrolling for mouse wheel
});

// Optional: Log scroll events to the console
lenis.on("scroll", (e) => {
  console.log(e);
});

// Integrate with requestAnimationFrame for smooth animation
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

//
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}