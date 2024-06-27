//Строка короче или равна 20 символам


function checkLength (string, length) {
  return string.length <= length;

}

checkLength ('Hallo world', 20);


// или

const checkingLength = (string, length) => string.length <= length;


checkingLength ('Hallo world', 20);

//Является ли строка палиндромом

function isPalindrome (string) {
  let string2 = '';
  for (let i = string.length - 1; i >= 0; i--) {
    string2 = string2 + string [i];
  }
  return string === string2;

}
// eslint-disable-next-line no-console
isPalindrome ('топот');
