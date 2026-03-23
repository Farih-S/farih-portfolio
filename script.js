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

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you! I'll reply to you soon.");
    this.reset();
  });
function showNotAvailable(e) {
  e.preventDefault(); // stops page from jumping
  alert("Not Available");
}
