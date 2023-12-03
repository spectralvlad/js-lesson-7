function isPalindrome(inputString) {
  // Перевірка на пусту строку
  if (inputString.length === 0) {
    return false;
  }

  // Ініціалізуємо дві змінні для порівняння символів
  let start = 0;
  let end = inputString.length - 1;

  // Продовжуємо порівнювати символи з обох кінців, поки індекси не зустрінуться
  while (start < end) {
    // Якщо символи не співпадають, це не паліндром
    if (inputString[start] !== inputString[end]) {
      return false;
    }
    // Переміщуємося далі по строкі для порівняння наступних символів
    start++;
    end--;
  }

  // Якщо всі символи співпадають, це паліндром
  return true;
}

// Приклади використання функції:
console.log(isPalindrome("")); // false
console.log(isPalindrome("b")); // true
console.log(isPalindrome("mom")); // true
console.log(isPalindrome("string")); // false
console.log(isPalindrome("bag")); // false
