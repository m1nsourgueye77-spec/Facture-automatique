











const ADMIN_USER = "admin";
const ADMIN_PASS = "12345";

// Connexion
function login() {
    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value.trim();

    if (user === ADMIN_USER && pass === ADMIN_PASS) {
        localStorage.setItem("admin", "true");
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("error").textContent =
            "Nom d'utilisateur ou mot de passe incorrect.";
    }
}

// Protection des pages
(function () {
    const page = location.pathname.split("/").pop();

    if (
        page !== "index.html" &&
        page !== "" &&
        localStorage.getItem("admin") !== "true"
    ) {
        location.href = "index.html";
    }
})();

// Déconnexion
function logout() {
    localStorage.removeItem("admin");
    location.href = "index.html";
}




function updateDateTime() {
    const now = new Date();

    document.getElementById("datetime").innerHTML =
        now.toLocaleDateString("fr-FR") +
        " " +
        now.toLocaleTimeString("fr-FR");
}

setInterval(updateDateTime, 1000);
updateDateTime();
