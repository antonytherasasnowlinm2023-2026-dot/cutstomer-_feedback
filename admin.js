function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Static admin credentials
    if (username === "admin" && password === "admin123") {
        localStorage.setItem("adminLoggedIn", "true");
        window.location.href = "view.html";
    } else {
        document.getElementById("msg").innerText = "Invalid Admin Credentials!";
    }
}
