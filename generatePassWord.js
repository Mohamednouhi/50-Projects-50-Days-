function generatePassword() {
  let length = parseInt(document.querySelector('.length').value);
  let uppercaseChecked = document.getElementById('uppercaseCheckbox').checked;
  let lowercaseChecked = document.getElementById('lowercaseCheckbox').checked;
  let numbersChecked = document.getElementById('numbersCheckbox').checked;

  let uppercaseIncluded = uppercaseChecked ? true : false;
  let lowercaseIncluded = lowercaseChecked ? true : false;
  let numbersIncluded = numbersChecked ? true : false;

  let result = generatePassWord(length, uppercaseIncluded, lowercaseIncluded, numbersIncluded);
  let output = document.querySelector('.output');
  output.textContent = result;
}

function generatePassWord(length, uppercase, lowercase, numbers) {
  if (length === 0) {
    return 'Couldn\'t provide a password with 0 length';
  }
  let result = "";
  let characters = "";
  if (uppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (lowercase) characters += "abcdefghijklmnopqrstuvwxyz";
  if (numbers) characters += "1234567890";
  if (characters === "") {
    return 'Didn\'t provide any type';
  }

  for (let i = 0; i < length; i++) {
    let charactersLength = characters.length;
    let random = Math.floor(Math.random() * charactersLength);
    result += characters.charAt(random);
  } 
  return result;
}