// Задание 1

function pickPropArray(arr, prop) {
    return arr.map(obj => obj[prop]).filter(value => value !== undefined);
  }
  
  const students = [
    { name: 'Павел', age: 20 },
    { name: 'Иван', age: 20 },
    { name: 'Эдем', age: 20 },
    { name: 'Денис', age: 20 },
    { name: 'Виктория', age: 20 },
    { age: 40 },
  ];
  
  console.log(pickPropArray(students, 'name'));

  // Задание 2

  function createCounter() {
    let count = 0;
    return function () {
      count++;
      console.log(count);
    };
  }
  
  const counter1 = createCounter();
  counter1();
  counter1();
  
  const counter2 = createCounter();
  counter2();
  counter2();

  // Задание 3

  function spinWords(string) {
    let result = "";
    let words = string.split(" ");
    words.forEach(word => {
        if (word.length >= 5) {
            result = result + word.split("").reverse().join("") + " ";
        }
        else {
            result = result + word + " ";
        }
    });
    return result.trim();
}

const result1 = spinWords( "Привет от Legacy" )
console.log(result1) // тевирП от ycageL

const result2 = spinWords( "This is a test" )
console.log(result2) // This is a test

// Задание 4

function getIndexes(nums, target) {  
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; i < nums.length; j++)
            if (nums[i] + nums[j] == target)
                return [i, j]
    }
}

let nums = [2,7,11,15]
let target = 9

console.log(getIndexes(nums, target))

// Задание 5

function getLongString(arr) {
    if (arr.length === 0) return "";
    let result = "";

    function pairfinder(substring) {
        return arr.every(word => word.includes(substring));
    }

    const firstWord = arr[0];
    for (let i = 0; i < firstWord.length; i++) {
        for (let j = i + 1; j <= firstWord.length; j++) {
            const substring = firstWord.slice(i, j);
            if (pairfinder(substring) && substring.length > result.length) {
                result = substring;
            }
        }
    }
    if (result.length >= 2){ 
        return result; 
    } else { 
        return ""; 
    }
}

// Тесты
console.log(getLongString(["цветок", "поток", "хлопок"])); // Ожидается "ок"
console.log(getLongString(["собака", "гоночная машина", "машина"])); // Ожидается ""