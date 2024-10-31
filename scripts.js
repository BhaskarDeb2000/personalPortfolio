// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector(".mobile-menu");
const navMenu = document.querySelector("nav ul");

// Toggle the mobile menu visibility
mobileMenuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Back to Top Button
const backToTopButton = document.querySelector(".back-to-top");

// Show or hide the Back to Top button based on scroll position
window.addEventListener("scroll", () => {
  backToTopButton.style.display = window.scrollY > 300 ? "block" : "none";
});

// Smooth scroll to top when Back to Top button is clicked
backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Contact Form Submission
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var form = this;
    var formData = new FormData(form);

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
      .catch((error) => {
        alert("Oops! There was a problem sending your message.");
      });
  });
