window.addEventListener("load", (event) => { 
    writeOutUserData();
});

function writeOutUserData() {
    if (window.sessionStorage.getItem("email") == null) {
        document.getElementById("userEmail").textContent = "Nincs email!";
        return;
    }
    document.getElementById("userEmail").textContent = window.sessionStorage.getItem("email");

    if (window.sessionStorage.getItem("password") == null) {
        document.getElementById("userEmail").textContent = "Nincs jelszó!";
        return;
    }
    document.getElementById("userPassword").textContent = window.sessionStorage.getItem("password");
}