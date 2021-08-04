const regForm = document.querySelector('form#register');
const errors_el = document.querySelector('form#register .errors');

regForm.addEventListener('submit', validateRegisterForm);

function validateRegisterForm (e) {
 e.preventDefault();
 
 const firstname = document.querySelector('#register #firstname');
 const password1 = document.querySelector('#register #password1');
 const password2 = document.querySelector('#register #password2');
 const passmatch = password1.value != password2.value;
 let errors = [];

 const pass_reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
 
 if (firstname.value == "") {
  errors.push({text: "User Name", el: firstname});
 }
 
 if (password1.value == "") {
  errors.push({text: "Password", el: password1});
 } else if (!pass_reg.test(password1.value)) {
  errors.push({text: "Password", el: password1});
 }
 if (password2.value == "") {
    errors.push({text: "Confirm Password", el: password2});
   } else if (!pass_reg.test(password2.value)) {
    errors.push({text: "Confirm Password", el: password2});
   }

   if (passmatch) {
    errors.push({text: "Passwords does not match", el: password2 });
   } 
 
 if (errors.length > 0) {
  handle_errors(errors);
  return false;
 }
 
 alert('SUBMITTED');
 return true;
}
function myFunction() {
    var x = document.getElementById("password1");
    var y = document.getElementById("password2");
    if ( (x.type === "password") && (y.type === "password") ) {
      x.type = "text";
      y.type = "text";
    } else {
      x.type = "password";
      y.type = "password";
    }
  }

function handle_errors(errs) {
 let str = "You have errors with the following fields; ";
 
 errs.map((er) => {
  er.el.classList.add('error');
  str += er.text + ", ";
 });
 
 errs[0].el.focus();
 
 let error_el = document.createElement('div');
 error_el.classList.add('error');
 error_el.innerText = str;
 
 error_el.addEventListener('click', function () {
  errors_el.removeChild(error_el);
 });
 
 errors_el.appendChild(error_el);
}