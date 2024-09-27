let firstNameRequired = document.querySelector("#firstNameRequired");
let lasNameRequired = document.querySelector("#lastNameRequired");
let emailRequired = document.querySelector("#emailRequired");
let queryRequired = document.querySelector("#queryRequired");
let messageRequired = document.querySelector("#messageRequired");
let consentRequired = document.querySelector("#consentRequired");
let buttonSubmit = document.querySelector("#submit-button");

// class error

buttonSubmit.addEventListener("click", () => {
  let showErrors = document.querySelectorAll(".error-required");
  showErrors.classlist.add(".error-required-show");
});

/*  Terminado el modelado en modo celular y pc, con js tengo que mostrar los ERRORS, pintar de color rojo los inputs vacios, y validar datos */
