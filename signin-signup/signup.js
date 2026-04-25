function handleSignup(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let dob = document.getElementById("dob").value;
    let gender = document.getElementById("gender").value;

    if (!name || !email || !password || !dob || !gender) {
        alert("All fields are required");
        return;
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return;
    }

    alert("Signup successful!");

    window.location.href = "home.html";
}