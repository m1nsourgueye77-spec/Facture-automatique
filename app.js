// =============================
// IDENTIFIANTS ADMIN
// =============================
const ADMIN_USER = "admin";
const ADMIN_PASS = "12345";

// =============================
// CONNEXION
// =============================
function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const error = document.getElementById("error");

    if (username === ADMIN_USER && password === ADMIN_PASS) {
        localStorage.setItem("admin", "true");
        window.location.href = "factures.html";
    } else {
        error.innerHTML = "❌ Nom d'utilisateur ou mot de passe incorrect.";
    }
}

// =============================
// VERIFICATION ADMIN
// =============================
function verifierAdmin() {

    const page = window.location.pathname.split("/").pop();

    if (page === "factures.html") {
        if (localStorage.getItem("admin") !== "true") {
            alert("Accès réservé à l'administrateur.");
            window.location.href = "index.html";
        }
    }

}

verifierAdmin();

// =============================
// DECONNEXION
// =============================
function logout() {
    localStorage.removeItem("admin");
    window.location.href = "index.html";
}

// =============================
// GENERATION FACTURE PDF
// =============================
async function genererFacture() {

    const client = document.getElementById("clientFacture").value;
    const produit = document.getElementById("produitFacture").value;
    const prix = document.getElementById("prixFacture").value;

    if (!client || !produit || !prix) {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    const { jsPDF } = window.jspdf;

    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text("FACTURE", 85, 20);

    doc.setFontSize(12);
    doc.text("Client : " + client, 20, 50);
    doc.text("Produit : " + produit, 20, 65);
    doc.text("Montant : " + prix + " FCFA", 20, 80);

    doc.line(20, 90, 190, 90);

    doc.text("Merci pour votre confiance.", 20, 110);

    doc.save("Facture_" + client + ".pdf");
}











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
