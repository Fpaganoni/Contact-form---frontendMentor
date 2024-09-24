// let checkboxSupport = document.querySelector(".checkboxSupport");

// let enquiry = document.querySelector(".enquiry");
// let support = document.querySelector(".support");

// checkboxSupport.addEventListener("click", () => {
//   if (checkboxSupport.checked) {
//     support.style.setProperty("--background-support", "#f66f");
//     console.log("check");
//   } else {
//     support.style.setProperty("--background-support", "#252525");
//     console.log("nocheck");
//   }
// });

// /////

// let checkboxEnquiry = document.querySelector(".checkboxEnquiry");

// checkboxEnquiry.addEventListener("click", () => {
//   if (checkboxEnquiry.checked) {
//     enquiry.style.setProperty("--background-enquiry", "#f66f");
//     console.log("esta checkeado");
//   } else {
//     enquiry.style.setProperty("--background-enquiry", "#252525");
//     console.log("no esta checkeado");
//   }
// });

/*  YA PUDIMOS CHECKEAR SI EL INPUT ESTA CHECKEADO O NO, AHORA TENEMOS QUE CAMBIAR LA PROPIEDAD --BACKGROUND CUANDO EL ELEMENTO ESTA CHECKED */

class Checker {
  contructor(checkboxSupport, support, checkboxEnquiry, enquiry) {
    this.checkboxSupport = checkboxSupport;
    this.support = support;
    this.checkboxEnquiry = checkboxEnquiry;
    this.enquiry = enquiry;

    // Listener for checkbox Support
    checkboxSupport.addEventListener("click", () => {
      if (checkboxSupport.checked) {
        support.style.setProperty("--background-support", "#f66f");
        console.log("check");
      } else {
        support.style.setProperty("--background-support", "#252525");
        console.log("nocheck");
      }
    });

    // Listener for checkbox Enquiry
    checkboxEnquiry.addEventListener("click", () => {
      if (checkboxEnquiry.checked) {
        enquiry.style.setProperty("--background-enquiry", "#f66f");
        console.log("esta checkeado");
      } else {
        enquiry.style.setProperty("--background-enquiry", "#252525");
        console.log("no esta checkeado");
      }
    });
  }
}

new Checker(".checkboxSupport", ".support", ".checkboxEnquiry", ".enquiry");
