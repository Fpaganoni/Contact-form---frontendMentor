/* Validation of name, lastname */

const inputsValidation = () => {
  const firstNameRequired = document.querySelector("#firstNameRequired"),
    lasNameRequired = document.querySelector("#lastNameRequired");

  const inputName = document.querySelector("#first-name"),
    inputLastName = document.querySelector("#last-name");

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
};

/* Validation of email input w/ regex */

let emailValidation = () => {
  const emailRequired = document.querySelector("#emailRequired"),
    inputEmail = document.querySelector("#email-address");
  const emailValido = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  if (inputEmail.value === "") {
    inputEmail.style.border = "1px solid #d73c3c";
    emailRequired.style.display = "block";
  } else {
    inputEmail.style.border = "1px solid #87a3a6";
    emailRequired.style.display = "none";
  }

  if (!emailValido(inputEmail.value)) {
    inputEmail.style.border = "1px solid #d73c3c";
    emailRequired.style.display = "block";
  }
};

/*  Validation of query type inputs */

const queryValidation = () => {
  const queryRequired = document.querySelector("#queryRequired"),
    enquiryInput = document.querySelector("#generalEnquiry"),
    requestInput = document.querySelector("#supportRequest");

  if (!enquiryInput.checked && !requestInput.checked) {
    queryRequired.style.display = "block";
  } else if (enquiryInput.checked && requestInput.checked) {
    queryRequired.style.display = "block";
  } else {
    queryRequired.style.display = "none";
  }
};

/* Validation of message input */

const messageValidation = () => {
  const messageRequired = document.querySelector("#messageRequired"),
    messageInput = document.querySelector("#message-input");

  if (messageInput.value.length === 0) {
    messageInput.style.border = "1px solid #d73c3c";
    messageRequired.style.display = "block";
  } else {
    messageInput.style.border = "1px solid gray";
    messageRequired.style.display = "none";
  }
};

/* Validation of content input */

const consentValidation = () => {
  const consentRequired = document.querySelector("#consentRequired"),
    consentInput = document.querySelector("#consent-input");
  if (!consentInput.checked) {
    consentRequired.style.display = "block";
  } else {
    consentRequired.style.display = "none";
  }
};

/* Message sent succes */

const messageSent = () => {};

/* Button submit listener */

const buttonSubmit = document.querySelector("#submit-button");
buttonSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  inputsValidation();
  queryValidation();
  messageValidation();
  consentValidation();
  emailValidation();
});
