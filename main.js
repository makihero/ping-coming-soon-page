let inputEmail = document.getElementById("email");
let inputSubmit = document.getElementById("submit");

inputSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    validateEmail(inputEmail.value);
})

function validateEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        inputEmail.style.borderColor = "green";
        error.style.visibility = "hidden";
        inputEmail.value = "";

    } else {
        inputEmail.style.borderColor = "red";
        error.style.visibility = "visible";
    }
}

