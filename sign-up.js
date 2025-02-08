document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let passwordError = document.getElementById("passwordError");
    
    if (password !== confirmPassword) {
        passwordError.style.display = "block";
    } else {
        passwordError.style.display = "none";
        alert("Sign Up Successful!");
    }
});

document.getElementById("signupBtn").addEventListener("mouseover", function() {
    this.style.backgroundColor = "#0056b3";
    this.style.transform = "scale(1.05)";
});
document.getElementById("signupBtn").addEventListener("mouseout", function() {
    this.style.backgroundColor = "";
    this.style.transform = "scale(1)";
});