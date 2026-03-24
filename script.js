// ==================== SMOOTH SCROLLING ====================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// ==================== CONTACT FORM (Fake) ====================

// Initialize EmailJS
(function () {
  emailjs.init("NoOGUooMiuRFn-32A"); // replace
})();

// Handle form submit
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_isgafop", // replace
        "template_omvwyfq", // replace
        this,
      )
      .then(
        function () {
          alert("Message sent successfully!");
        },
        function (error) {
          alert("Failed to send message.");
          console.log(error);
        },
      );

    this.reset();
  });
