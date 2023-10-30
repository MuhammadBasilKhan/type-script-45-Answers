function devoloped(){
let string1: string = 'hello';
let string2: string = 'world';
let number1: number = 5;
let number2: number = 10;
let array: string[] = ['apple', 'banana', 'cherry'];

console.log("Is string1 == 'hello'? I predict True.");
console.log(string1 == 'hello');

console.log("Is string1 != string2? I predict True.");
console.log(string1 != string2);
console.log("Is string1.toLowerCase() == 'hello'? I predict True.");
console.log(string1.toLowerCase() == 'hello');
console.log("Is string1.toLowerCase() == string2.toLowerCase()? I predict False.");
console.log(string1.toLowerCase() == string2.toLowerCase());
console.log("Is number1 < number2? I predict True.");
console.log(number1 < number2);
console.log("Is number1 >= number2? I predict False.");
console.log(number1 >= number2);
console.log("Is (number1 === 5 && string1 === 'hello')? I predict True.");
console.log(number1 === 5 && string1 === 'hello');
console.log("Is (number1 === 5 || string1 === 'world')? I predict True.");
console.log(number1 === 5 || string1 === 'world');
console.log("Is 'banana' in the array? I predict True.");
console.log(array.includes('banana'));
console.log("Is 'grape' not in the array? I predict True.");
console.log(!array.includes('grape'));
}
devoloped();
