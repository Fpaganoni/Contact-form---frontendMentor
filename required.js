/* Paragraph errors */
const firstNameRequired = document.querySelector("#firstNameRequired"),
  lasNameRequired = document.querySelector("#lastNameRequired"),
  emailRequired = document.querySelector("#emailRequired");

let inputName = document.querySelector("#first-name"),
  inputLastName = document.querySelector("#last-name"),
  inputEmail = document.querySelector("#email-address");

let validation = () => {
  // const nameRegex = /^[A-Za-záéíóúüñÑ\s]+$/; // Expresión regular para letras y espacios
  if (inputName.value === "") {
    inputName.style.border = "1px solid #d73c3c";
    firstNameRequired.style.display = "block";
  } else {
    inputName.style.border = "1px solid #87a3a6";
    firstNameRequired.style.display = "none";
  }

  if (inputLastName.value === "") {
    inputLastName.style.border = "1px solid #d73c3c";
    lasNameRequired.style.display = "block";
  } else {
    inputLastName.style.border = "1px solid #87a3a6";
    lasNameRequired.style.display = "none";
  }

  if (inputEmail.value === "") {
    inputEmail.style.border = "1px solid #d73c3c";
    emailRequired.style.display = "block";
  } else {
    inputEmail.style.border = "1px solid #87a3a6";
    emailRequired.style.display = "none";
  }
};

let buttonSubmit = document.querySelector("#submit-button");
buttonSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  validation();
  queryValidation();
});

/*  Validation of query inputs */

const queryRequired = document.querySelector("#queryRequired"),
  enquiryInput = document.querySelector("#generalEnquiry"),
  requestInput = document.querySelector("#supportRequest");

let queryValidation = () => {
  if (!enquiryInput.checked && !requestInput.checked) {
    queryRequired.style.display = "block";
  } else {
    queryRequired.style.display = "none";
  }
};

const messageRequired = document.querySelector("#messageRequired"),
  consentRequired = document.querySelector("#consentRequired");
