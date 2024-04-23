// LogIn
let logInModalWindow = document.getElementById("logInWindow");
let logInModalClose = document.getElementsByClassName("logIn_close")[0];

let allBtnlogIn = document.querySelectorAll('.buttonLogIn');
allBtnlogIn.forEach(function(element) {
  element.onclick = showModal;
})

function showModal() {
  logInModalWindow.style.display = "flex";
  logInModalWindow.style.alignItems = "center";
}

logInModalClose.onclick = function () {
  logInModalWindow.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == logInModalWindow) {
     logInModalWindow.style.display = "none";
   }
}


// registration
let signUpModalWindow = document.getElementById("registrationWindow");
let signUpModalClose = document.getElementsByClassName("registration_close")[0];

let allBtnSignUp = document.querySelectorAll('.buttonSignUp');
allBtnSignUp.forEach(function(element) {
  element.onclick = showModalReg;
})

function showModalReg() {
  signUpModalWindow.style.display = "flex";
  signUpModalWindow.style.alignItems = "center";
}

signUpModalClose.onclick = function () {
   signUpModalWindow.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == signUpModalWindow) {
    signUpModalWindow.style.display = "none";
  }
}

/*  dropdown */
function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
  }

// закрываем dropdown
  window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {
	  var dropdowns = document.getElementsByClassName("dropdown-content");
	  var i;
	  for (i = 0; i < dropdowns.length; i++) {
		var openDropdown = dropdowns[i];
		if (openDropdown.classList.contains('show')) {
		  openDropdown.classList.remove('show');
		}
	  }
	}}