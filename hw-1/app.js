// У цьому файлі ви підключаєте модулі для перевірки їхньої роботи.
// Після перевірки модуль можна закоментувати, щоб його вивід не заважав.

// Перше завдання реалізовано як приклад підключення та виконання.
// Після ознайомлення можна або видалити підключення, або закоментувати його.

// Завдання розміщені у відповідних файлах.


// Task 01
import task_01 from './task_01.js';
console.log(task_01);

// Task 02
import getMaxInt from './task_02.js';
console.log(`Task 02 - ${getMaxInt(3,3,3)}`)
console.log(`Task 02 - ${getMaxInt(1,3,5)}`)

// Task 03
import getPositiveNumbers from './task_03.js';
console.log(`Task 03 - ${getPositiveNumbers([1,5,-5,-7,8,0])}`)

// Task 04
import {prepareString} from './task_04.js';
console.log(`Task 04 - ${prepareString('  lorem ipsum ')}`)

// Task 05
import {randomSymbol} from './task_05.js';
console.log(`Task 05 - ${randomSymbol('lorem ipsum')}`)

// Task 06
import {integerPart} from './task_06.js';
console.log(`Task 06 - ${integerPart(4.5)}`)

// Task 07
import checkSpace from './task_07/index.js';
console.log(`Task 07 - ${checkSpace('abcd efjklsjdududdd')}`)
console.log(`Task 07 - ${checkSpace('abcdefjklsjdududdd   ')}`)

// Task 08
import {stringCheck} from './task_08/index.js';
console.log(`Task 08 - ${stringCheck('abcd efjklsjdudud9dd')}`)
console.log(`Task 08 - ${stringCheck('abcd eGjklsj6dududdd')}`)
console.log(`Task 08 - ${stringCheck('')}`)

// Task 09
import {clearArray} from './task_09.js';
console.log(`Task 09 - ${clearArray([34, "qwe", true, {item: 2}])}`)

// Task 10
import reverseArray from './task_10.js';
console.log(`Task 09 - ${reverseArray([34, "qwe", true, {item: 2}])}`)