(() => {
  const form = document.getElementById("login-form");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const toggle = document.getElementById("toggle-password");
  const status = document.getElementById("form-status");
  const forgot = document.getElementById("forgot");
  const dialog = document.getElementById("reset-dialog");
  const resetEmail = document.getElementById("reset-email");
  const dialogStatus = document.getElementById("dialog-status");

  toggle.addEventListener("click", () => {
    const showing = password.type === "text";
    password.type = showing ? "password" : "text";
    toggle.setAttribute("aria-label", showing ? "Show password" : "Hide password");
  });

  form.addEventListener("submit", event => {
    event.preventDefault();
    status.textContent = "";
    if (!email.value.trim() || !email.checkValidity()) {
      status.textContent = "Please enter a valid email address.";
      email.focus();
      return;
    }
    if (password.value.length < 6) {
      status.textContent = "Password must be at least 6 characters.";
      password.focus();
      return;
    }
    status.textContent = "Demo sign-in submitted. Connect an authentication API to continue.";
  });

  forgot.addEventListener("click", () => {
    resetEmail.value = email.value;
    dialogStatus.textContent = "";
    dialog.showModal();
  });
  document.getElementById("send-reset").addEventListener("click", event => {
    if (!resetEmail.value.trim() || !resetEmail.checkValidity()) {
      event.preventDefault();
      dialogStatus.textContent = "Enter a valid email address.";
      return;
    }
    event.preventDefault();
    dialogStatus.textContent = "Demo: password reset request is ready for backend integration.";
  });
  document.getElementById("google").addEventListener("click", () => {
    status.textContent = "Google sign-in is a UI demo. Configure OAuth to enable it.";
  });
  document.getElementById("signup").addEventListener("click", event => {
    event.preventDefault();
    status.textContent = "Connect your registration route to enable sign up.";
  });
})();