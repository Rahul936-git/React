console.log("Rahul kumar");

let name="tyler durtan";
console.log(name);

let quote="stop being perfect , naver be complete , be consistent";
console.log(quote);

let favroit_movie="Fight club";
console.log(favroit_movie);

const  x=null;
console.log(x);

const y=undefined;
console.log(y);

isFollow=true;
console.log(isFollow);

isFollow=false;
console.log(isFollow);

const pi=3.14;
console.log(pi);

let a ;
console.log(a);

// block -> {}

{
    let a=45;
    console.log(a);
}

{
    let a=67;
    console.log(a);
}

// Here student is object
   // key: value;

   // obj.key  ->  obj["key"];   both are same

const student={
    fullName: "Rahul kumar",
    age: 20,
    cgpa: 8.17,
    isPass: true,
};

console.log(student.age);
console.log(student["age"]);

student.age = student.age + 1;
console.log(student.age);

student["age"] = student["age"] + 1;
console.log(student["age"]);

student["age"] += 1;
console.log(student["age"]);

const product = {
    title: "Ball name",
    price: 250,
    Rating: 4.5,
    offer: 5
}

console.log(product);

const profile = {
    username: "Rahul kumar",
    followers: 59,
    following: 66,
    isFollow: true
}

console.log(profile);

console.log(typeof profile);
console.log(typeof profile["username"]);
console.log(typeof profile["isFollow"]);
console.log(typeof profile["following"]);