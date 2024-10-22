
console.log("Hello World");
// This is a single commit

/* 
    This is a multiple line commit
*/ 

let firstName = "Jericho";
console.log("The first name is:", firstName)

var lastName = "Fernando";
console.log(lastName);

const birthday = "April 28, 1999";
console.log(birthday);

// let = mutable/change
// var = mutable/change
// const = unmutable/unchangable

firstName = "Markjeric";
console.log("The first name is :", firstName);
// This produce error because const is unmutable or unchangeble
// birthday = "September 23, 2004";
// console.log(birthday);


if(true){
    let block = "stone"; // Block scope
    var stone = "lime"; // Global block scope
    console.log("Block variable inside if statement :", block);
    console.log("Stone variable inside if statement :", stone);

    console.log("Block variable inside if statement :", stone);
    // console.log("Stone variable inside if statement :", block);
}