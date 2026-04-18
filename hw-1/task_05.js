// Task 05

// Створіть іменований модуль randomSymbol, який отримує рядок і повертає випадковий символ з цього рядка.
// Якщо передано порожній рядок — повертає порожній рядок.

export function randomSymbol(string) {
  const randomIndex = Math.floor(Math.random() * string.length)
  return string.charAt(randomIndex)
}

