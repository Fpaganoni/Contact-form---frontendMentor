let checkSupport = () => {
  let checkboxSupport = document.querySelector(".checkboxSupport");
  let support = document.querySelector(".support");

  checkboxSupport.addEventListener("click", () => {
    if (checkboxSupport.checked) {
      support.style.setProperty("--background-support", "#f66f");
    } else {
      support.style.setProperty("--background-support", "#252525");
    }
  });
};

/////

let checkEnquiry = () => {
  let checkboxEnquiry = document.querySelector(".checkboxEnquiry");
  let enquiry = document.querySelector(".enquiry");

  checkboxEnquiry.addEventListener("click", () => {
    if (checkboxEnquiry.checked) {
      enquiry.style.setProperty("--background-enquiry", "#f66f");
    } else {
      enquiry.style.setProperty("--background-enquiry", "#252525");
    }
  });
};

checkSupport();
checkEnquiry();

/*  YA PUDIMOS CHECKEAR SI EL INPUT ESTA CHECKEADO O NO, AHORA TENEMOS QUE CAMBIAR LA PROPIEDAD --BACKGROUND CUANDO EL ELEMENTO ESTA CHECKED */

// class Checker {
//   contructor(checkboxSupport, support, checkboxEnquiry, enquiry) {
//     this.checkboxSupport = document.querySelector(checkboxSupport);
//     this.support = document.querySelector(support);
//     this.checkboxEnquiry = document.querySelector(checkboxEnquiry);
//     this.enquiry = document.querySelector(enquiry);
//     this.checkSupport();
//     this.checkEnquiry();
//   }
//   // Listener for checkbox Support

//   checkSupport() {
//     checkboxSupport.addEventListener("click", () => {
//       if (checkboxSupport.checked) {
//         support.style.setProperty("--background-support", "#f66f");
//         console.log("esta checkeado");
//       } else {
//         support.style.setProperty("--background-support", "#252525");
//         console.log("no esta checkeado");
//       }
//     });
//   }

//   // Listener for checkbox Enquiry
//   checkEnquiry() {
//     checkboxEnquiry.addEventListener("click", () => {
//       if (checkboxEnquiry.checked) {
//         enquiry.style.setProperty("--background-enquiry", "#f66f");
//         console.log("esta checkeado");
//       } else {
//         enquiry.style.setProperty("--background-enquiry", "#252525");
//         console.log("no esta checkeado");
//       }
//     });
//   }
// }

// (function () {
//   new Checker(".checkboxSupport", ".support", ".checkboxEnquiry", ".enquiry");
//   console.log("ejecutando");
// })();
