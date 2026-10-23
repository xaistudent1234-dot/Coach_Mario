const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  mainNav.classList.toggle("is-open", !isOpen);
});

mainNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuToggle.setAttribute("aria-expanded", "false");
    mainNav.classList.remove("is-open");
  }
});

document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelector("#contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const subject = encodeURIComponent(`Trainingsanfrage von ${formData.get("firstName")} ${formData.get("lastName")}`);
  const body = encodeURIComponent([
    `Name: ${formData.get("firstName")} ${formData.get("lastName")}`,
    `E-Mail: ${formData.get("email")}`,
    `Interesse: ${formData.get("interest")}`,
    "",
    formData.get("message") || "",
  ].join("\n"));

  window.location.href = `mailto:info@coachmario.ch?subject=${subject}&body=${body}`;
});
