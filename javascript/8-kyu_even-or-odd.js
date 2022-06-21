// 8 kyu // Even or odd

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// URL: https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript

const even_or_odd = n => n % 2 === 0 ? "Even" : "Odd";

even_or_odd(2) === "Even";
even_or_odd(7) === "Odd";
even_or_odd(-42) === "Even";
even_or_odd(-7) === "Odd";
