window.onload = function () {
    let name = localStorage.getItem("name");

    if (name) {
        document.getElementById("userName").innerText = "Welcome, " + name;
    }
};

let text = document.getElementById("postText");
let btn = document.getElementById("toggleBtn");

btn.addEventListener("click", function () {

    text.classList.toggle("active");

    if (text.classList.contains("active")) {
        btn.innerText = "See less";
    } else {
        btn.innerText = "See more";
    }
});

function logout() {
    window.location.href = "index.html";
}