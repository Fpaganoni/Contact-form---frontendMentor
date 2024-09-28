let firstNameRequired = document.querySelector("#firstNameRequired");
let lasNameRequired = document.querySelector("#lastNameRequired");
let emailRequired = document.querySelector("#emailRequired");
let queryRequired = document.querySelector("#queryRequired");
let messageRequired = document.querySelector("#messageRequired");
let consentRequired = document.querySelector("#consentRequired");
let buttonSubmit = document.querySelector("#submit-button");

// class error
let formInput = document.querySelectorAll(".form-input");
let emptyInputs = () => {
  buttonSubmit.addEventListener("click", () => {
    let showErrors = document.querySelectorAll(".error-required");
    showErrors.forEach((e) => {
      e.classList.toggle("error-required-show");
    });
  });
};

buttonSubmit.addEventListener("click", () => {
  formInput.forEach((e) => {
    if (e.value.length == 0) {
      emptyInputs();
      e.style.border = "1.2px solid #d73c3c";
    } else {
      console.error("No esta funcionando");
    }
  });
});

/*  Avance en el required.js ya modificamos unas cosas, tenemos dos funciones que cambian lor bordes de los inputs si estan vacios, y un msj required que aparece en pantalla cuando hacemos click en el submit ... Ahora tenemos que unirlo en una unica funcion, y que funcione con cada input en particular. */
