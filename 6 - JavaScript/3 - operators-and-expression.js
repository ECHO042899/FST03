let numb1 = 10;
let numb2 = 5;

console.log("Addition (+)", numb1 + numb2);
console.log("Substraction (-)", numb1 - numb2);
console.log("Multiplication (*)", numb1 * numb2);
console.log("Divition (/)", numb1 / numb2);
console.log("Exponent (**)", numb1 ** numb2);
console.log("Remainder (%)", numb1 % numb2);

// PEMDAS /BODMAS 

let answer = 3 + 4 * ( 5 -2 ) ** 2 / 2;
console.log("Answer:", answer);

console.log(20 + " " + "i am the number 20" + "!");

// comparison operators
//  == /true or false
console.log("Equal to", 10 == 5); // false (type coercion)
console.log("Equal to", 10 == "5");

// === /true or false (strict equality)
console.log("Stictly Equal to (==)", 10 == 10);

//!== /true or false
console.log("Stictly Equal to (!=)", 5 != 5);
console.log("Stictly Equal to (!=)", 5 != 4);

// Greater than (>)
console.log("Greater Than", 5>3);
console.log("Greater Than", 5>8);
// Less than (<)
console.log("Less Than", 5<3);
console.log("Less Than", 5<8);

// Logical Operators

// AND = &&
// OR = ||
// NOT = !

let sunny = true;
let warm = false;

console.log("Sunny AND Warm:", sunny && warm);
console.log("Sunny OR Warm:", sunny || warm);
console.log("NOT sunny:", !sunny);

// Assignment Expressions

let num3 = 10;
let num4 = 5;

// num3 = num3 + num4;
// console.log(num3)

// Additiong Assignment '+='
// num3 += num4;
console.log(num3);

// Subtraction Assignment '-='
// num3 -= num4;
console.log(num3);

// Multiplication Assignment '*='
// num3 *= num4;
console.log(num3);

// Division Assignment '/='
// num3 /= num4;
console.log(num3);

// Exponential Assignment '**='
// num3 **= num4;
console.log(num3);

// Remainder Assignment '%='
num3 %= num4;
console.log(num3);
