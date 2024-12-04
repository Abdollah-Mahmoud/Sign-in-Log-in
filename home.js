const welcomeElement = document.getElementById("welcome");

welcomeElement.textContent =
  "Welcome " + localStorage.getItem("sessionUsername");

function logout() {
  localStorage.removeItem("sessionUsername");
  window.location.href = "./index.html";
}
