let email = document.querySelector("#email");
let mailImg = document.querySelector("#mail");
let mailImgOn = document.querySelector("#mail__on");
let password = document.querySelector("#password");
let passwordImg = document.querySelector("#password__img");
let passwordImgOn = document.querySelector("#password__img--on");

function yellowEmail () {
    email.style.borderColor = "#ffc632";
    mailImg.style.display = "none";
    mailImgOn.style.display = "block";
}

function normalEmail () {
    email.style.borderColor = "#afb6c2";
    mailImg.style.display = "block";
    mailImgOn.style.display = "none";
}


function yellowPassword () {
    password.style.borderColor = "#ffc632";
    passwordImg.style.display = "none";
    passwordImgOn.style.display = "block";
}

function normalPassword () {
    password.style.borderColor = "#afb6c2";
    passwordImg.style.display = "block";
    passwordImgOn.style.display = "none";
}


// Validando email
let form = document.querySelector("form");
let button = document.querySelector("button");

form.addEventListener("submit", emailCondition);
button.addEventListener("click", emailCondition);

function emailCondition (x) {
    x.preventDefault()

    let emailValue = email.value.trim()
    
    if (!isEmail(emailValue) || emailValue == "") {
        alert("Por favor, preencha o campo de email corretamente.")
    }
}

function isEmail (email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}