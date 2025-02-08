// document.addEventListener("DOMContentLoaded", () => {
//     const showSignup = document.getElementById("showSignup");
//     const showLogin = document.getElementById("showLogin");
//     const loginForm = document.getElementById("loginForm");
//     const signupForm = document.getElementById("signupForm");
//     const formTitle = document.getElementById("formTitle");

//     showSignup.addEventListener("click", (e) => {
//         e.preventDefault();
//         loginForm.style.display = "none";
//         signupForm.style.display = "block";
//         formTitle.textContent = "Sign Up";
//     });

//     showLogin.addEventListener("click", (e) => {
//         e.preventDefault();
//         loginForm.style.display = "block";
//         signupForm.style.display = "none";
//         formTitle.textContent = "Login";
//     });
// });

document.getElementById("loginBtn").addEventListener("mouseover", function() {
    this.style.backgroundColor = "#0056b3";
    this.style.transform = "scale(1.05)";
});
document.getElementById("loginBtn").addEventListener("mouseout", function() {
    this.style.backgroundColor = "";
    this.style.transform = "scale(1)";
});