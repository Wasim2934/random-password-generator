let passwordBox = document.querySelector("#password");
let button = document.querySelector("#btn");
let passLength = 15;

let upperCase = "ABCDEFGHOJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let number = "012346789";
let symbol = "!@#$%^&*()_-=+[]{}|:;<>?/";

let allChar = upperCase + lowerCase + number + symbol;

function randomPassword() {
  let password = "";

  password += upperCase[Math.floor(Math.random() * upperCase.length)]
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
  password += number[Math.floor(Math.random() * number.length)]
  password += symbol[Math.floor(Math.random() * symbol.length)]

  while (password.length < passLength) {
    password += allChar[Math.floor(Math.random() * allChar.length)];
  }
  passwordBox.value = password;
}

button.addEventListener("click", () => {
  randomPassword();
})

let copyPass = document.querySelector("#copy");

copyPass.addEventListener("click", () => {
    if (passwordBox.value === "") {
        alert("First, generate the Password!!");
    } else {
        navigator.clipboard.writeText(passwordBox.value)
        .then(() => {
            alert("Password has been copied.");
        })
        .catch(() => {
            alert("Failed to copy!");
        });
    }
});


