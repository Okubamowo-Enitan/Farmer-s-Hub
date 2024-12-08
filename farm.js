const signInToggle = document.getElementById('signInToggle');
const loginForm = document.getElementById('loginForm');
const formTitle = document.getElementById('formTitle');
const passwordLabel = document.getElementById('passwordLabel');
const formButton = document.getElementById('formButton');
const toggleText = document.getElementById('toggleText');
const toggleRegister = document.getElementById('toggleRegister');

let isRegistering = false;



// Toggle login form visibility
signInToggle.addEventListener('click', function (event) {
  event.preventDefault();
  loginForm.classList.toggle('show');
});

// Toggle between sign-in and register modes
toggleRegister.addEventListener('click', function (event) {
  event.preventDefault();
  isRegistering = !isRegistering;

  if (isRegistering) {
    formTitle.textContent = "Register";
    passwordLabel.textContent = "Create Password";
    formButton.textContent = "Register";
    toggleText.innerHTML = 'Already have an account? <a href="#" id="toggleRegister">Sign In here</a>';
  } else {
    formTitle.textContent = "Sign In";
    passwordLabel.textContent = "Password";
    formButton.textContent = "Sign In";
    toggleText.innerHTML = 'New user? <a href="#" id="toggleRegister">Register here</a>';
  }
});

