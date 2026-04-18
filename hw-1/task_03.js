// Task 03

// Створіть анонімний модуль, який реалізує функцію, що отримує масив чисел та повертає кількість елементів, які є більшими або дорівнюють нулю.

export default (arr) => {
  let count = 0;
  for (const item of arr) if(item >= 0 ) count++;
  return count;
}