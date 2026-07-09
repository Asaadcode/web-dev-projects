function handleLogin(event) {
    event.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    if (email === "" || password === "") {
        alert("All fields are required");
        return;
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email");
        return;
    }

    alert("Login successful!");

    window.location.href = "home.html";
}

function goToSignup() {
    window.location.href = "signup.html";
}