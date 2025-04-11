//for loop

// loops  -> iterable (string, object, array);

let n=5;
for(let i=0;i<n;i++){
    console.log("Rahul Kumar");
}

let sum=0;

for(let i=0;i<=n;i++){
    sum += i;
}
console.log("sum:",sum);

// while loop

let i=6;
while(i<=18){
    console.log("i:", i);
    i++;
}

// Do while loop

i=30;
do{
    console.log("ABCDE");
    i++;
}while(i<=7);

// for of loop

let str="Rahul Kumar Shaw";

for(let i of str){
    console.log("i:",i);
}



str="javascript";

let size=0;
for(let i of str){
    console.log("i:",i);
    size++;
}
console.log("size of string :",size);


// for in loop

let student ={
    name:"Rahul kumar",
    cgpa:"9.5",
    age:"20",
    istopper: true,
}

// for(let key in student){
//     console.log("key:", key);
// }

for(let key in student){
    console.log("key:",key , "value:", student[key]);
}

/*
Qs1. Print all even numbers from 0 to 100.
 */

for(let i=0; i<=100; i++){
    if(i%2 == 0){
        console.log("i:", i);
    }
}


/*

Q.2) Create a game where you start with any random game number. 
Ask the user to keep guessing the game number
 until the user enters correct value.

*/

let game_number= 29;

let username= prompt("Guess the number :");

while(game_number != username ){
    username= prompt(" wrong number! Guess the corrext number :");
}

console.log("correct Guess congralutation");

//string

str="Rahul kumar";
let str1='Rahul kumar';

console.log(str.length);
console.log(str1.length);

console.log(str[3]);
console.log(str.charAt(3));



let obj ={
    item: "pen",
    price: 8,
    company: "link",
    color: "Blue",
}

console.log("The cost of", obj.item ," of", obj.company ,"company is", obj.price, "Rupee and", obj.color ,"color");

let output=`The cost of ${obj.item}  of ${obj.company} company is ${obj.price} Rupee and ${obj.color} color`;
console.log(output);



// Template literals

let special_string =`This is template litrals`;
console.log(special_string);
console.log(typeof special_string);

special_string =`This is template litrals ${1+2+3}`; // string interpolation
console.log(special_string);

console.log("Rahul\nKumar"); // escape character;
console.log("Rahul\tKumar"); // tab space;

str="Rahul\tkumar";
console.log(str.length);

// string method in js;

str="rahul kumar";
console.log(str.toUpperCase());
console.log(str);

str="             Rahul  Kumar   shaw         ";
console.log(str.trim());

str="1234545667890";
console.log(str.slice(4, 8));

str1="Rahul";
let str2="Kumar";
let str3="shaw";

let merge=str1.concat(str3);
console.log(merge);

merge=str1.concat(str2).concat(str3);
console.log(merge);

merge=str1+str2+str3;
console.log(merge);

 let result= "Rahul" + 123;
 console.log(result);

let result1="Kumar"
let result2= 789;

result=result1.concat(result2);

console.log(result);

str="hello";
console.log(str.replace("h", "y"));
console.log(str.replace("lo","p"));

str="hellololololololo";
console.log(str.replace("lo","p"));
console.log(str.replaceAll("lo","p"));

str="gyugvtyvhk";
console.log(str.charAt(4));

/*

Qs1. Prompt the user to enter their full name.
 Generate a username for them based on the input.
 Start username with @, 
 followed by their full name and ending with the fullname length.
 
 eg: user name = “shradhakhapra” ,
 username should be “@shradhakhapra13”

*/

let full_name =prompt("Enter your full name without spaces");

 username="@" + full_name + full_name.length;

console.log(username);
