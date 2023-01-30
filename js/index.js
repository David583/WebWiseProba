window.addEventListener("load", (event) => { 
    document.getElementById("loginButton").addEventListener("click", validate);
});

function validate() {
    let validEmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let userEmail = document.getElementById("inputEmail").value;
    console.log(validEmailRegex.test(userEmail));
    if (validEmailRegex.test(userEmail) != true) {
        document.getElementById("errorMessage").textContent = "Helytelen e-mail cím!";
        return;
    }

    let passwordLetters = /[a-z]/;
    let passwordCapitalLetters = /[A-Z]/;
    let passwordNumbers = /\d/;
    let passwordSpecials = /[*/?]/;
    let userPassword = document.getElementById("inputPassword").value;

    if (userPassword.length < 5) {
        document.getElementById("errorMessage").textContent = "A jelszónak minimum 5 karakternek kell lennie!\n";
        return;
    }

    if (passwordLetters.test(userPassword) != true) {
        document.getElementById("errorMessage").textContent = "A jelszó nem tartalmaz kisbetűt!\n";
        return;
    }

    if (passwordCapitalLetters.test(userPassword) != true) {
        document.getElementById("errorMessage").textContent = "A jelszó nem tartalmaz nagybetűt!\n";
        return;
    }

    if (passwordNumbers.test(userPassword) != true) {
        document.getElementById("errorMessage").textContent = "A jelszó nem tartalmaz számot!\n";
        return;
    }

    if (passwordSpecials.test(userPassword) != true) {
        document.getElementById("errorMessage").textContent = "A jelszó nem tartalmaz speciális karaktert!\n";
        return;
    }

    window.sessionStorage.setItem("email", userEmail);
    window.sessionStorage.setItem("password", userPassword);
    window.location.href = "userinfo.html";
}

function googleLogin(responze) {
    let userData = JSON.parse(atob(responze['credential'].split('.')[1]));
    window.sessionStorage.setItem("email", userData['email']);
    window.location.href = "userinfo.html";
}