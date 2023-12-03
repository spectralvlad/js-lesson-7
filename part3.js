function stringToNumber(str) {
  let number = 0;

  for (let char of str) {
    // Конвертуємо символ у числове значення відповідно до його коду ASCII
    let digit = char.charCodeAt(0) - "0".charCodeAt(0);

    // Додаємо цифру до числа, збільшуючи його на розрядну величину
    number = number * 10 + digit;
  }

  return number;
}

// Приклади використання функції:
console.log(stringToNumber("15")); // 15
console.log(stringToNumber("376")); // 376
console.log(stringToNumber("100500")); // 100500
