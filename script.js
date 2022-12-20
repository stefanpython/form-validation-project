const email = document.getElementById("email");
const country = document.getElementById("country");
const zipcode = document.getElementById("zipcode");
const password = document.getElementById("password");
const confirmation = document.getElementById("confirmation");
const errorMsg = document.querySelector(".error");
const errorCountry = document.querySelector(".errorCountry");
const errorZipcode = document.querySelector(".errorZipcode");
const errorPassword = document.querySelector(".errorPassword");
const errorConfirmation = document.querySelector(".errorConfirmation");

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  if (!email.validity.valid) {
    emailError();
    e.preventDefault();
  } else if (!country.validity.valid) {
    countryError();
    e.preventDefault();
  } else if (!zipcode.validity.valid) {
    zipcodeError();
    e.preventDefault();
  } else if (!password.validity.valid) {
    passwordError();
    e.preventDefault();
  } else if (!confirmation.validity.valid) {
    e.preventDefault();
    errorConfirmation.textContent = "Passwords must match. Try again.";
  } else {
    e.preventDefault();
    errorConfirmation.className = "error active";
    document.getElementById("highfive").style.display = "block";
  }
});

email.addEventListener("input", () => {
  if (email.validity.valid) {
    errorMsg.textContent = "";
    errorMsg.className = "error";
  } else {
    emailError();
  }
});

country.addEventListener("input", () => {
  if (country.validity.valid) {
    errorCountry.textContent = "";
    errorCountry.className = "error";
  } else {
    countryError();
  }
});

zipcode.addEventListener("input", () => {
  if (zipcode.validity.valid) {
    errorZipcode.textContent = "";
    errorZipcode.className = "error";
  } else {
    zipcodeError();
  }
});

password.addEventListener("input", () => {
  if (password.validity.valid) {
    errorPassword.textContent = "";
    errorPassword.className = "error";
  } else {
    passwordError();
  }
});

confirmation.addEventListener("input", () => {
  if (confirmation.value !== password.value) {
    errorConfirmation.className = "error active";
    errorConfirmation.textContent = "Passwords must match. Try again.";
  } else {
    errorConfirmation.textContent = "";
    errorConfirmation.className = "error";
  }
});

function passwordError() {
  if (password.validity.valueMissing) {
    errorPassword.textContent =
      "Enter a min 8 letter password, with at least a symbol, upper and lower case letters and a number.";
  } else if (password.validity.patternMismatch) {
    errorPassword.textContent = `Password must contain at least a symbol, upper and lower case letters and a number.`;
  } else if (password.validity.tooShort) {
    errorPassword.textContent = `Password must be at least ${password.minLength} characters long. You entered ${password.value.length}`;
  }
  errorPassword.className = "error active";
}

function zipcodeError() {
  if (zipcode.validity.valueMissing) {
    errorZipcode.textContent = "Please enter a zipcode of minimum 6 numbers.";
  } else if (zipcode.validity.tooShort) {
    errorZipcode.textContent = `Entered value should be alt least ${zipcode.minLength} characters; you entered ${zipcode.value.length} `;
  } else if (zipcode.validity.patternMismatch) {
    errorZipcode.textContent = "Numbers Only. Letters are not allowed.";
  }

  errorZipcode.className = "error active";
}

function countryError() {
  if (country.validity.valueMissing) {
    errorCountry.textContent = "You need to enter a country name.";
  } else if (country.validity.tooShort) {
    errorCountry.textContent = `Entered value should be alt least ${country.minLength} characters; you entered ${country.value.length} `;
  } else if (country.validity.patternMismatch) {
    errorCountry.textContent = "You should only use letters";
  }

  errorCountry.className = "error active";
}

function emailError() {
  if (email.validity.valueMissing) {
    errorMsg.textContent = "You need to enter an e-mail address.";
  } else if (email.validity.typeMismatch) {
    errorMsg.textContent = "Entered value needs to be an e-mail address.";
  } else if (email.validity.tooShort) {
    errorMsg.textContent = `E-mail should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }

  // Set the styling appropriately
  errorMsg.className = "error active";
}
