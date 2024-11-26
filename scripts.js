// Toggle mobile menu visibility
const mobileMenuToggle = document.querySelector(".mobile-menu");
const navMenu = document.querySelector("nav ul");

mobileMenuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Back-to-top button functionality
const backToTopButton = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  backToTopButton.style.display = window.scrollY > 300 ? "block" : "none";
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Change header background on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Contact form submission
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const form = this;
    const formData = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("Message sent successfully!");
          form.reset();
        } else {
          alert("Oops! There was a problem sending your message.");
        }
      })
      .catch(() => {
        alert("Oops! There was a problem sending your message.");
      });
  });
