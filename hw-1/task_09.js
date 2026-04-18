// Task 09

// Створіть модуль clearArray, який приймає масив (array) як аргумент і повертає новий масив, у якому залишаються лише елементи типів number та boolean.

export const clearArray = (array) =>
  array.filter(item => Number.isFinite(item) || typeof item === "boolean");

