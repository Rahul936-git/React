import React from "react";
import ReactDOM from "react-dom/client";

// const element1= <h1>Rahul kumar shaw</h1>
// const access=ReactDOM.createRoot(document.getElementById('root'));

// access.render(element1);

                                  // or

// function greet(){
//     return <h1>Hello Brother</h1>
// }

// const access=ReactDOM.createRoot(document.getElementById('root'));
// access.render(greet());

                              // or

// function greet(name){
//     return <h1>JAI SHREE RAM {name}</h1>  // JSX only take expression not statment
// }

// const access=ReactDOM.createRoot(document.getElementById('root'));

// access.render(greet("Rahul"));

                                 // or

// function Greet(){
//     return <h1>JAI SHREE RAM Rahul</h1> 
// }

// const element = <Greet/>

// const access=ReactDOM.createRoot(document.getElementById('root'));

// access.render(<Greet/>);
// access.render(element);

                              // or

function Greet(props){
    return <h1>JAI SHREE RAM {props.name} {props.age}</h1> 
}

const element = <Greet name="Rahul kumar" age="21"/>

const access=ReactDOM.createRoot(document.getElementById('root'));

access.render(element);



