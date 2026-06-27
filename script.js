const form = document.querySelector("form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const message = document.querySelector("#message");
const toggleButtons = document.querySelectorAll("[data-toggle-password], #togglePassword");

toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.dataset.togglePassword;
    const input = targetId ? document.querySelector(`#${targetId}`) : password;
    const isHidden = input.type === "password";

    input.type = isHidden ? "text" : "password";
    button.setAttribute("aria-label", isHidden ? "Hide password" : "Show password");
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    message.textContent = "Please fill all required fields correctly.";
    message.className = "message";
    return;
  }

  if (confirmPassword && password.value !== confirmPassword.value) {
    message.textContent = "Passwords do not match.";
    message.className = "message";
    return;
  }

  message.textContent = form.dataset.successMessage || "Form submitted successfully.";
  message.className = "message success";
  form.classList.add("submitted");

  setTimeout(() => {
    form.classList.remove("submitted");
  }, 900);
});
