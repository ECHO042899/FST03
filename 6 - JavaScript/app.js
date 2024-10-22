// if else
let temperature = 25;
if(temperature < 0){
    console.log("It's Freezing!");
}else if(temperature > 0){
    console.log("It's Hot!");
}else{
    console.log("It's just Right!");
}

// Switch case
let day = "Monday";
switch(day){
    case "Monday":
        console.log("It's a Monday");
        break;
    case "Tuesday":
        console.log("It's a Tuesday");
        break;
    case "Wednesday":
        console.log("It's a Wednesday");
        break;
    case "Thursday":
        console.log("It's a Thursday");
        break;
    case "Friday":
        console.log("It's a Friday");
        break;
    case "Saturday":
        console.log("It's a Saturday");
        break;
    case "Sunday":
        console.log("It's a Sunday");
        break;
    default:
        console.log("Invalid day");
        break;
}



// For loop
// 1.Variable Initialization
// 2.Conditional Expression
// 3.Increment/Decrement
for(let i = 0; i <= 10; i++){
    console.log("Week1: ", i);
}

// While loop
let j = 0;
while(j <= 10){
    console.log("Week2: ", j);
    j++;
}

// Do-While loop
let k = 0;
do{
    console.log("Week3: ", k);
    k++;
}while(k <= 10);

// Nested loops
for(let i = 0; i < 5; i++){
    for(let j = 0; j < 5; j++){
        for(let k = 0; k < 5; k++)
        console.log("Nested Loop: ", i, j, k);
    }
}