var emailElement = document.getElementById("email");
var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var passwordElement = document.getElementById("password");
var passwordRegex = /^.{3,}$/;
var errorElement = document.getElementById("error");
var error2Element = document.getElementById("error2");
var error4Element = document.getElementById("error4");
var users = [];

function validationEmail() {
  if (emailRegex.test(emailElement.value) === false) {
    emailElement.classList.add("error-input");
    emailElement.classList.remove("success-input");
    error2Element.classList.remove("hide-msg");
  } else if (emailRegex.test(emailElement.value) === true) {
    emailElement.classList.remove("error-input");
    emailElement.classList.add("success-input");
    error2Element.classList.add("hide-msg");
  }
}

function validationPassword() {
  if (passwordRegex.test(passwordElement.value) === false) {
    passwordElement.classList.add("error-input");
    passwordElement.classList.remove("success-input");
    error2Element.classList.remove("hide-msg");
  } else if (passwordRegex.test(passwordElement.value) === true) {
    passwordElement.classList.remove("error-input");
    passwordElement.classList.add("success-input");
    error2Element.classList.add("hide-msg");
  }
}

function login() {
  if (emailElement.value.length === 0 || passwordElement.value.length === 0) {
    errorElement.classList.remove("hide-msg");
  } else {
    errorElement.classList.add("hide-msg");
  }
  if (localStorage.getItem("Users"))
    users = JSON.parse(localStorage.getItem("Users"));
  var user = users.find(
    (usr) =>
      emailElement.value === usr.email && passwordElement.value === usr.password
  );
  if (user) {
    window.location.href = "./home.html";
    error4Element.classList.add("hide-msg");
    localStorage.setItem("sessionUsername", user.name);
  } else {
    error4Element.classList.remove("hide-msg");
  }
}
