
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from submitting

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMessage = document.getElementById("error-message");

  if (username === "" || password === "") {
    errorMessage.textContent = "Please fill in both fields.";
  } else {
    if (username === "admin" && password === "1234") {
      errorMessage.textContent = "";
      alert("Welcome, admin!123");
      // window.location.href = "dashboard.html"; // Optional redirect
    } else {
      errorMessage.textContent = "Invalid username or password.";
    }
  }
});



