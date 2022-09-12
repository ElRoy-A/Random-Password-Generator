/* store DOM elements */
const PASSWORD = document.getElementById('password');
const GENERATE = document.getElementById('generate_btn');
const COPY = document.getElementById('copy');
let password_length = document.getElementById('slider');

/* Variables initialized for storing all possible letters, numbers, and special characters */
const STRING = "ABCDEFGHIJKLMNOPQRSTUVWXYZacdefghijklnopqrstuvwxyz0123456789";
const SPECIAL = "!@#$%/\^&*-";

/* Event listener and associated function for generating password when button is clicked */
GENERATE.addEventListener('click', () => {
  let password = '';
  let temp_string = STRING;
  let SPECIAL_check = document.getElementById('checkbox').checked;

  /* Check to include special characters */
  if(SPECIAL_check === true) {
    temp_string += SPECIAL;
  }

  for (let i=0; i<password_length.value; i++) {
    let placeholder = temp_string[Math.floor(Math.random() * temp_string.length)];
    password += placeholder;
  }

  PASSWORD.innerText = password;
  temp_string = STRING;
})

/* Event listener for copying text to clipboard */
COPY.addEventListener('click', () => {
  navigator.clipboard.writeText(PASSWORD.innerText);
});