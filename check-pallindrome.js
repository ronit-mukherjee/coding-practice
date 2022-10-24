function checkIsPallindrome(str) {
  return str === reverseString(str);
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(checkIsPallindrome("ABCBA"));
