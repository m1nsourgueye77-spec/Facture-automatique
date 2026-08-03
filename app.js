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

  doc.setFontSize(30);
doc.text("FACTURE", 75, 25);

doc.setFontSize(16);
doc.text("Client : " + client, 20, 55);
doc.text("Produit : " + produit, 20, 75);
doc.text("Montant : " + prix + " FCFA", 20, 95);

doc.line(20, 110, 190, 110);

doc.setFontSize(14);
doc.text("Merci pour votre confiance.", 20, 135);

    doc.save("Facture_" + client + ".pdf");
}
