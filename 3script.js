gsap.from(".hero h1", { y: -50, opacity: 0, duration: 1 });
gsap.from(".hero p", { y: 50, opacity: 0, duration: 1, delay: 0.5 });
gsap.from(".btn", { scale: 0, opacity: 0, duration: 1, delay: 1 });

gsap.from("section", {
  scrollTrigger: {
    trigger: "section",
    start: "top 80%",
    toggleActions: "play none none none"
  },
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.2
});
document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target).entries());

  const response = await fetch('/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  const result = await response.json();
  alert(result.status === 'success' ? "Message sent!" : "Error sending message");
});
window.onload = () => {
  const userLang = navigator.language.slice(0, 2);
  const supported = ['en', 'ur', 'es', 'fr'];
  if (supported.includes(userLang)) setLanguage(userLang);
};

  function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("show");
  }
  gsap.from(".testimonial-card", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".testimonials-container",
      start: "top 80%",
    }
  });




