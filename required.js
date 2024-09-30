/* Paragraph errors */
const firstNameRequired = document.querySelector("#firstNameRequired"),
  lasNameRequired = document.querySelector("#lastNameRequired"),
  emailRequired = document.querySelector("#emailRequired"),
  queryRequired = document.querySelector("#queryRequired"),
  messageRequired = document.querySelector("#messageRequired"),
  consentRequired = document.querySelector("#consentRequired");

/* Inputs */
let inputs = document.querySelectorAll(".form-input");

let inputName = document.querySelector("#first-name"),
  inputLastName = document.querySelector("#last-name"),
  inputEmail = document.querySelector("#email-address");

let validation = () => {
  // const nameRegex = /^[A-Za-záéíóúüñÑ\s]+$/; // Expresión regular para letras y espacios
  if (inputName.value === "") {
    inputName.style.border = "1px solid #d73c3c";
    inputName.style.boxShadow = "3px 3px 10px #252525";
    firstNameRequired.style.display = "block";
  } else {
    inputName.style.border = "1px solid #87a3a6";
    inputName.style.boxShadow = "none";
    firstNameRequired.style.display = "none";
  }

  if (inputLastName.value === "") {
    inputLastName.style.border = "1px solid #d73c3c";
    inputLastName.style.boxShadow = "3px 3px 10px #252525";
    lasNameRequired.style.display = "block";
  } else {
    inputLastName.style.border = "1px solid #87a3a6";
    lasNameRequired.style.display = "none";
  }

  if (inputEmail.value === "") {
    inputEmail.style.border = "1px solid #d73c3c";
    inputEmail.style.boxShadow = "3px 3px 10px #252525";
    emailRequired.style.display = "block";
  } else {
    inputEmail.style.border = "1px solid #87a3a6";
    emailRequired.style.display = "none";
    inputEmail.style.boxShadow = "none";
  }
};

let buttonSubmit = document.querySelector("#submit-button");
buttonSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  validation();
});

/*  Avance en el required.js ya modificamos unas cosas, tenemos dos funciones que cambian los bordes de los inputs si estan vacios, y un msj required que aparece en pantalla cuando hacemos click en el submit ... Ahora tenemos que unirlo en una unica funcion, y que funcione con cada input en particular. */
