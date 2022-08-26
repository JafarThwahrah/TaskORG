// emad

// manar
/// crearte user object

function User(fName, lName, email, password) {
	this.fName = fName;
	this.lName = lName;
	this.email = email;
	this.password = btoa(password);
	//generate random id
	this.id = new Date().getTime();
	/// user tasks
}

let usersArr = new Array();

// push when user hit submit sign up
const signUp = document.getElementById("signup");
const fName = document.getElementById("fName");
const lName = document.getElementById("lName");
const signEmail = document.getElementById("signEmail");
const signPassword = document.getElementById("signPassword");
const regForm = document.getElementById("regForm");
// fire sign-up action
signUp.addEventListener("click", function (e) {
	////check validty
	fName.setCustomValidity("");
	lName.setCustomValidity("");
	signEmail.setCustomValidity("");
	signPassword.setCustomValidity("");
	if (
		fName.checkValidity() &&
		lName.checkValidity() &&
		signEmail.checkValidity() &&
		signPassword.checkValidity()
	) {
		fName.style.background = "rgba(0, 128, 0, 0.347)";
		lName.style.background = "rgba(0, 128, 0, 0.347)";
		signEmail.style.background = "rgba(0, 128, 0, 0.347)";
		signPassword.style.background = "rgba(0, 128, 0, 0.347)";

		e.preventDefault();
		// get data into array

		usersArr.push(
			new User(fName.value, lName.value, signEmail.value, signPassword.value)
		);
		console.log(usersArr);
		// save array into local
		localStorage.setItem("users", JSON.stringify(usersArr));
		//set current user
		sessionStorage.setItem(
			"“currentloggedin”",
			JSON.stringify(usersArr[usersArr.length - 1])
		);

		//open task page
		window.open("./taskpage.html", _self);
	} else {
		e.preventDefault();
		return false;
	}
});

//validation messege
fName.addEventListener("invalid", () => {
	fName.style.background = "rgba(220, 20, 60, 0.21)";
	if (fName.value === "") {
		fName.setCustomValidity("Enter your First Name!");
	} else {
		fName.setCustomValidity(
			"First Name can only contain numbers and upper and lowercase letters . Try again!"
		);
	}
	fName.reportValidity();
});

lName.addEventListener("invalid", () => {
	lName.style.background = "rgba(220, 20, 60, 0.21)";
	if (lName.value === "") {
		lName.setCustomValidity("Enter your last Name!");
	} else {
		lName.setCustomValidity(
			"last Name can only contain numbers and  upper and lowercase letters. Try again!"
		);
	}
	lName.reportValidity();
});

signEmail.addEventListener("invalid", () => {
	signEmail.style.background = "rgba(220, 20, 60, 0.21)";
	if (signEmail.value === "") {
		signEmail.setCustomValidity("Enter your Email!");
	} else {
		signEmail.setCustomValidity("Invalid Email. Try again!");
	}
	signEmail.reportValidity();
});

signPassword.addEventListener("invalid", () => {
	signPassword.style.background = "rgba(220, 20, 60, 0.21)";
	if (signPassword.value === "") {
		signPassword.setCustomValidity("Enter your Password!");
	} else if (signPassword.value.length < 6) {
		signPassword.setCustomValidity("Password must be at least 6 characters");
	}
	signPassword.reportValidity();
});
//get current user from sussion
// define user tasks basd on current
// push when user hit submit log in

const logIn = document.getElementById("login");
const logEmail = document.getElementById("logEmail");
const logPassword = document.getElementById("logPassword");

logIn.addEventListener("click", function (e) {
	logEmail.setCustomValidity("");
	logPassword.setCustomValidity("");
	if (logEmail.checkValidity() && logPassword.checkValidity()) {
		logEmail.style.background = "rgba(0, 128, 0, 0.347)";
		logPassword.style.background = "rgba(0, 128, 0, 0.347)";
		e.preventDefault();
		getFromLocalReg();
		window.open("./taskpage.html", _self);
	} else {
		e.preventDefault();
		return false;
	}
});
//get local
// ask if insert value == any
// get user into tasks with its info
//else tell no

function getFromLocalReg() {
	let jsonArr = localStorage.getItem("users");
	let arr = JSON.parse(jsonArr);
	usersArr = arr;
	console.log(logEmail.value);
	console.log(usersArr);

	usersArr.forEach((e) => {
		if (e.email == logEmail.value) {
			console.log(e);
			// log in sussion and go to tasks
			sessionStorage.setItem("“currentloggedin”", JSON.stringify(e));
		}
	});
}

/////// log in validtion
logEmail.addEventListener("invalid", () => {
	logEmail.style.background = "rgba(220, 20, 60, 0.21)";
	if (logEmail.value === "") {
		logEmail.setCustomValidity("Enter your Email!");
	} else {
		logEmail.setCustomValidity("Invalid Email. Try again!");
	}
	logEmail.reportValidity();
});

logPassword.addEventListener("invalid", () => {
	logPassword.style.background = "rgba(220, 20, 60, 0.21)";
	if (logPassword.value === "") {
		logPassword.setCustomValidity("Enter your Password!");
	} else if (logPassword.value.length < 6) {
		logPassword.setCustomValidity("Password must be at least 6 characters");
	}
	logPassword.reportValidity();
});

// global get local to display old array users
function getFromLocalUsers() {
	let jsonArr = localStorage.getItem("users");
	let arr = JSON.parse(jsonArr);

	if (arr != null) {
		usersArr = arr;
	}
}
// on load get all data
getFromLocalUsers();
