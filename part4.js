function stringToNumber(str) {
  const parts = str.split(".");
  const integer = parts[0]
    .split("")
    .reduce(
      (acc, digit) => acc * 10 + (digit.charCodeAt(0) - "0".charCodeAt(0)),
      0
    );
  const decimal = parts[1]
    ? parts[1]
        .split("")
        .reduceRight(
          (acc, digit) => (acc + digit.charCodeAt(0) - "0".charCodeAt(0)) / 10,
          0
        )
    : 0;
  const number = integer + decimal;

  return str[0] === "-" ? -number : number;
}

// Приклади використання функції:
console.log(stringToNumber("123")); // 123
console.log(stringToNumber("-456")); // -456
console.log(stringToNumber("789.012")); // 789.012
console.log(stringToNumber("-0.123")); // -0.123
