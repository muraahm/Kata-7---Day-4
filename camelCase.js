const camelCase = function (input) {
  var final = ""; for (i = 0; i < input.length; i++) {
    if (input.charAt(i) === " ") { final += (input.charAt(i + 1).toUpperCase()); i++; } else {
      final += input.charAt(i);
    }
  } return final;
}

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));