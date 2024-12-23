document.querySelector('a[href="#header"]').addEventListener('click', function (e) {
  e.preventDefault(); // Prevent default anchor behavior
  window.scrollTo({
    top: 0, // Scroll to the top of the page
    behavior: 'smooth' // Smooth scrolling effect
  });
});


// Select all navigation links
const navLinks = document.querySelectorAll('#navbar a');

// Add a click event listener to each link
navLinks.forEach(link => {
  link.addEventListener('click', function () {
    // Remove 'active' class from all links
    navLinks.forEach(nav => nav.classList.remove('active'));
    // Add 'active' class to the clicked link
    this.classList.add('active');
  });
});

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

