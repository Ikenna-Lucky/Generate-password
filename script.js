let passwordInput = document.getElementById("password");
const button = document.getElementById("button");
const copyIcon = document.querySelector(".fa-copy");
const length = 15;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "@#$%^&*()_-+|{}[]></-=";
const allChars = upperCase + lowerCase + numbers + symbols;

//Used a function here but as a call back function meaning it takes the position of a parameter.
button.addEventListener("click", function createPassword() {
  button.style.border = "2px solid #ffffff52";
  button.style.backgroundColor = "#019f5541";
  setTimeout(function () {
    button.style.border = "none";
    button.style.backgroundColor = "#019f55";
  }, 200);
  let password = "";

  //Used a built-in function here : the Math.random() and the Math.floor().
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordInput.value = password;
});

copyIcon.addEventListener("click", function copyPassword() {
  //   passwordInput.select();
  if (passwordInput.value == "") {
    alert("No password");
  } else {
    navigator.clipboard.writeText(passwordInput.value);
    alert("Password copied to Clipboard");
  }
});



