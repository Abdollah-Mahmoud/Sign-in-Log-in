var emailElement = document.getElementById("email");
var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var passwordElement = document.getElementById("password");
var passwordRegex = /^.{3,}$/;
var errorElement = document.getElementById("error");
var error2Element = document.getElementById("error2");
var nameRegex = /^.{3,}$/;
var nameElement = document.getElementById("name");
var error3Element = document.getElementById("error3");
var successElement = document.getElementById("success");

var users = [];

function validationName() {
  if (nameRegex.test(nameElement.value) === false) {
    nameElement.classList.add("error-input");
    nameElement.classList.remove("success-input");
    error2Element.classList.remove("hide-msg");
  } else if (nameRegex.test(nameElement.value) === true) {
    nameElement.classList.remove("error-input");
    nameElement.classList.add("success-input");
    error2Element.classList.add("hide-msg");
  }
}

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

function signUp() {
  if (
    emailElement.value.length === 0 ||
    passwordElement.value.length === 0 ||
    nameElement.value.length === 0
  ) {
    errorElement.classList.remove("hide-msg");
  } else {
    errorElement.classList.add("hide-msg");
    var user = {
      name: nameElement.value,
      email: emailElement.value,
      password: passwordElement.value,
    };
    if (JSON.parse(localStorage.getItem("Users")))
      users = JSON.parse(localStorage.getItem("Users"));

    var isEmailExist = false;
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === user.email) {
        isEmailExist = true;
        break;
      }
    }

    if (isEmailExist) {
      error3Element.classList.remove("hide-msg");
    } else {
      users.push(user);
      localStorage.setItem("Users", JSON.stringify(users));
      successElement.classList.remove("hide-msg");
      error3Element.classList.add("hide-msg");
    }
  }
}
