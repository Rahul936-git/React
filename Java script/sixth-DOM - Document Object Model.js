console.log("jbbuygbug");
window.console.log("huihuiou"); // same

// alert("Reduce the deadline");

// we can be access Html in js in window object another object name->document(which is model or representation of html code) is call DOM ,document object model
console.log(window);
// Html all element convert in object in js called document.
console.log(window.document);
console.dir(window.document); // to see the property of document object 

// console.dir --> is used to print special object like Document_ property and method

console.log(window); //or
console.dir(window);

console.log(window.document); 
console.dir(window.document); // dir
console.log(document);  // same as above because window is global;

console.log(document.body);
console.dir(document.body);

console.dir(document.head);
console.log(document.head); 

//  html code java script ke ander access karne ka tarika hai DOM

console.log(document.body.childNodes[1]);
console.log(document.body.childNodes[2]);
console.log(document.body.childNodes[3]);
console.log(document.body.childNodes[4]);
console.log(document.body.childNodes[5]);


document.body.style.background ="green";
document.body.childNodes[3].innerText = "DOM";

// we us DOM for dynamic changes and manipulation;


/*
                          DOM Manipulation
 */
                    //  (1). Selecting with id

let id_heading=document.getElementById("First_heading");
console.log(id_heading);
console.dir(id_heading); // dir because this is an object

                    //  (2). Selecting with class
let class_heading=document.getElementsByClassName("Third_heading");
console.log(class_heading);
console.dir(class_heading)

                   //  (3). Selecting with tag

let para=document.getElementsByTagName("p");
console.log(para);
console.dir(para);

                //   (4) Query Selector --> it return nodelist

let first_element=document.querySelector("p");
console.dir(first_element);

let All=document.querySelectorAll("p");
console.dir(All);

 first_element=document.querySelector("#First_heading");
console.dir(first_element);

 first_element=document.querySelector(".Third_heading");
console.dir(first_element);


                //    * Properties
                //   (1). tagName
console.log(first_element);
console.log(first_element.tagName);

console.log(document.body.firstChild);
console.log(document.body.lastChild);
console.log(document.body.children);
console.log(document.body.childNodes);

console.log(document.querySelector("div"));
console.log(document.querySelector("div").children);
console.log(document.querySelector("body").children);

/*
DOM has three type of nodes:
                             (1). text node
                             (2). comment node
                             (3). element node
 */


                         /*    propeties (2).
                                           innerText     */

let second_div =document.querySelector("#idf");
console.log(second_div);
console.dir(second_div);

console.dir(second_div.innerText);

                          /* properties(3).
                                           innerHtml         */
                                    
console.dir(second_div.innerHTML);
console.dir(second_div.innertext ="PQRS");
console.dir(second_div.innerHTML="<div>inner_div</div>");

let heading2 = document.querySelector("h2");
console.log(heading2);
console.log(heading2.innerText);
console.log(heading2.innerText="New Heading");
console.log(heading2.innerHTML="<i>New Heading</i>"); 

                         /* properties(4).
                                          text.content */

console.log(heading2.innerText);
console.log(heading2.textContent);

/*                        Practice Question                          */

/* Q1.) Create a H2 heading element with text - “Hello JavaScript”.
           Append “from Student name --> Rahul Kumar” to this text using JS.
*/

let h2=document.querySelector(".Append");
console.log(h2.innerText);
console.log(h2.innerText = h2.innerText + "Student name --> Rahul Kumar"); // conc

/*
Q.2) Create 3 divs with common class name - “box”.
    Access them & add some unique text to each of them.
*/

let Divs= document.querySelectorAll(".box");

let idx=1;
for(let div of Divs){
    div.innerText= `unique name  ${idx}`;
    idx++
}

// or

// console.log(Divs[0].innerText="unique1");
// console.log(Divs[1].innerText="unique2");
// console.log(Divs[2].innerText="unique3");






/*                  lecture - 7       part-2           */