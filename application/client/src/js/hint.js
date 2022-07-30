export const getValidationFlag = () => {
	inputStatus();
	return validationFlag;
};

let validationFlag = false;

let validationArr = {
	usernameFlag: {
		minLength: false,
		isAlpha: false,
	},
	emailFlag: {
		isEmail: false,
	},
	passwordFlag: {
		minLength: false,
		lowerCase: false,
		upperCase: false,
		number: false,
		special: false,
	},
	password2Flag: {
		passwordsMatch: false,
	},
	roleFlag: {
		role: false,
	},
};

const iterateThroughArr = (arr) => {
	validationFlag = true;

	for (let el in arr) {
		let data = arr[el];
		for (let element in data) {
			if (data[element] === false) {
				validationFlag = false;
				break;
			}
		}
	}
};

let inputStatus = () => {
	iterateThroughArr(validationArr);
};

const setOpacityToNull = () => {
	document.getElementById('username-hint-1').style.opacity = 0;
	document.getElementById('username-hint-2').style.opacity = 0;
	document.getElementById('username-hint-3').style.opacity = 0;
	document.getElementById('username-hint-4').style.opacity = 0;
	document.getElementById('username-hint-5').style.opacity = 0;
	document.getElementById('username-hint-6').style.opacity = 0;
	document.getElementById('username-hint-7').style.opacity = 0;
	document.getElementById('username-hint-8').style.opacity = 0;
	document.getElementById('username-hint-9').style.opacity = 0;
	document.getElementById('username-hint-10').style.opacity = 0;
	document.getElementById('username-hint-11').style.opacity = 0;
};

export const validateUsername = (username) => {
	inputStatus();

	setOpacityToNull();

	document.getElementById('username-hint-1').style.opacity = 1;
	document.getElementById('username-hint-2').style.opacity = 1;

	validateUsernameMinLength(username);
	validateOnlyAlpha(username);
};

export const validateUserLastname = (username) => {
	inputStatus();

	setOpacityToNull();

	document.getElementById('username-hint-3').style.opacity = 1;
	document.getElementById('username-hint-4').style.opacity = 1;

	validateUsernameMinLength2(username);
	validateOnlyAlpha2(username);
};

const validateUsernameMinLength2 = (username) => {
	let el = document.getElementById('username-hint-4');

	if (username && username.length >= 3) {
		el.classList.remove('alert-secondary');
		el.classList.add('alert-success');
		validationArr.usernameFlag.minLength = true;
	} else {
		el.classList.remove('alert-success');
		el.classList.add('alert-secondary');
		validationArr.usernameFlag.minLength = false;
	}
};

const validateUsernameMinLength = (username) => {
	let el = document.getElementById('username-hint-2');

	if (username && username.length >= 3) {
		el.classList.remove('alert-secondary');
		el.classList.add('alert-success');
		validationArr.usernameFlag.minLength = true;
	} else {
		el.classList.remove('alert-success');
		el.classList.add('alert-secondary');
		validationArr.usernameFlag.minLength = false;
	}
};

const validateOnlyAlpha2 = (username) => {
	let el = document.getElementById('username-hint-3');
	let flag = true;
	let regExp = new RegExp('^[a-zA-Z]*$');

	for (let ch in username) {
		if (!username.charAt(ch).match(regExp)) {
			flag = false;
		}
	}
	if (username && flag) {
		el.classList.remove('alert-secondary');
		el.classList.add('alert-success');
		validationArr.usernameFlag.isAlpha = true;
	} else {
		if (el !== null) {
			el.classList.remove('alert-success');
			el.classList.add('alert-secondary');
		}
		validationArr.usernameFlag.isAlpha = false;
	}
};

const validateOnlyAlpha = (username) => {
	let el = document.getElementById('username-hint-1');
	let flag = true;
	let regExp = new RegExp('^[a-zA-Z]*$');

	for (let ch in username) {
		if (!username.charAt(ch).match(regExp)) {
			flag = false;
		}
	}

	if (username && flag) {
		el.classList.remove('alert-secondary');
		el.classList.add('alert-success');
		validationArr.usernameFlag.isAlpha = true;
	} else {
		if (el !== null) {
			el.classList.remove('alert-success');
			el.classList.add('alert-secondary');
		}
		validationArr.usernameFlag.isAlpha = false;
	}
};

export const validateEmail = (email) => {
	inputStatus();
	setOpacityToNull();

	document.getElementById('username-hint-5').style.opacity = 1;
	validateIsEmail(email);
};

const validateIsEmail = (email) => {
	let el = document.getElementById('username-hint-5');
	let isEmail = /^[-.\w]{1,}@[-.\w]{3,}\.[-.\w]+$/;

	if (isEmail.test(email)) {
		el.classList.remove('alert-secondary');
		el.classList.add('alert-success');
		validationArr.emailFlag.isEmail = true;
	} else {
		el.classList.remove('alert-success');
		el.classList.add('alert-secondary');
		validationArr.emailFlag.isEmail = false;
	}
};

export const validatePassword = (password) => {
	inputStatus();

	setOpacityToNull();

	document.getElementById('username-hint-6').style.opacity = 1;
	document.getElementById('username-hint-7').style.opacity = 1;
	document.getElementById('username-hint-8').style.opacity = 1;
	document.getElementById('username-hint-9').style.opacity = 1;
	document.getElementById('username-hint-11').style.opacity = 1;

	passwordMinLength(password);
	passwordContainsLowercase(password);
	passwordContainsUppercase(password);
	passwordContainsNumber(password);
	passwordContainsSpecial(password);
};

let passwordMinLength = (password) => {
	let el = document.getElementById('username-hint-6');

	if (password.length >= 8) {
		el.classList.remove('alert-secondary');
		el.classList.add('alert-success');
		validationArr.passwordFlag.minLength = true;
	} else {
		el.classList.remove('alert-success');
		el.classList.add('alert-secondary');
		validationArr.passwordFlag.minLength = false;
	}
};

let passwordContainsLowercase = (password) => {
	let el = document.getElementById('username-hint-7');

	let containsLowerCase = /(?=.*[a-z])/;

	if (containsLowerCase.test(password)) {
		el.classList.remove('alert-secondary');
		el.classList.add('alert-success');
		validationArr.passwordFlag.lowerCase = true;
	} else {
		el.classList.remove('alert-success');
		el.classList.add('alert-secondary');
		validationArr.passwordFlag.lowerCase = false;
	}
};

let passwordContainsUppercase = (password) => {
	let el = document.getElementById('username-hint-8');

	let containsUpperCase = /(?=.*[A-Z])/;

	if (containsUpperCase.test(password)) {
		el.classList.remove('alert-secondary');
		el.classList.add('alert-success');
		validationArr.passwordFlag.upperCase = true;
	} else {
		el.classList.remove('alert-success');
		el.classList.add('alert-secondary');
		validationArr.passwordFlag.upperCase = false;
	}
};

let passwordContainsNumber = (password) => {
	let el = document.getElementById('username-hint-9');

	let containsNumber = /(?=.*[0-9])/;

	if (containsNumber.test(password)) {
		el.classList.remove('alert-secondary');
		el.classList.add('alert-success');
		validationArr.passwordFlag.number = true;
	} else {
		el.classList.remove('alert-success');
		el.classList.add('alert-secondary');
		validationArr.passwordFlag.number = false;
	}
};

let passwordContainsSpecial = (password) => {
	let el = document.getElementById('username-hint-11');

	let containsSpecialCh = /(?=.*[_!@#$%^&*])/;

	if (containsSpecialCh.test(password)) {
		el.classList.remove('alert-secondary');
		el.classList.add('alert-success');
		validationArr.passwordFlag.Special = true;
	} else {
		el.classList.remove('alert-success');
		el.classList.add('alert-secondary');
		validationArr.passwordFlag.Special = false;
	}
};

export const validatePassword2 = (password2) => {
	inputStatus();
	setOpacityToNull();

	document.getElementById('username-hint-10').style.opacity = 1;
	passwordsMatch(password2);
};

let passwordsMatch = (password2) => {
	let el = document.getElementById('username-hint-10');
	let password = document.querySelector('#signup-password').value;

	if (password === password2) {
		el.classList.remove('alert-secondary');
		el.classList.add('alert-success');
		validationArr.password2Flag.passwordsMatch = true;
	} else {
		el.classList.remove('alert-success');
		el.classList.add('alert-secondary');
		validationArr.password2Flag.passwordsMatch = false;
	}
};

export const validateRole = (role) => {
	inputStatus();
	setOpacityToNull();

	roleExist(role);
};

let roleExist = (role) => {
	validationArr.roleFlag = true;
};

export const registrationValidation = (req, res, next) => {
	let firstname = document.getElementById('sign-up-fn-1').value;
	let lastname = document.getElementById('sign-up-ln-1').value;
	let email = document.getElementById('sign-up-em-1').value;
	let password = document.getElementById('signup-password').value;
	let password2 = document.getElementById('signup-password-2').value;
	let role1 = document.getElementById('student').checked;
	let role2 = document.getElementById('professor').checked;
	let role3 = document.getElementById('tutor').checked;

	if ((password !== password2) | !firstname | !lastname | !email) {
		alert('danger', "passwords don't match");
		return false;
	} else if (!(role1 | role2 | role3)) {
		alert('danger', 'choose a role');
		return false;
	} else {
		return true;
	}
};
