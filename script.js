const form = document.querySelector("#loginForm");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const message = document.querySelector("#message");
const togglePassword = document.querySelector("#togglePassword");

togglePassword.addEventListener("click", () => {
  const isHidden = password.type === "password";
  password.type = isHidden ? "text" : "password";
  togglePassword.setAttribute("aria-label", isHidden ? "Hide password" : "Show password");
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!email.validity.valid || !password.validity.valid) {
    message.textContent = "Please enter a valid email and password.";
    message.className = "message";
    return;
  }

  message.textContent = "Login animation complete. Welcome back!";
  message.className = "message success";
  form.classList.add("submitted");

  setTimeout(() => {
    form.classList.remove("submitted");
  }, 900);
});
