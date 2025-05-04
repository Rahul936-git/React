// import React  from "react";
// import ReactDOM from "react-dom/client";  
// // Uncaught SyntaxError: Cannot use import statement outside a moduleUnderstand this error

// const element=React.createElement('h1',{ key: 'heading1',id:'first',className:'class',style:{backgroundColor:"purple",textAlign:"center",color:"white"}},'Rahul kumar shaw');
// const element2=React.createElement('h2',{ key: 'heading2',id:'second',className:'class',style:{backgroundColor:"tomato",textAlign:"center",color:"black"}},'Web Development');

             //                    //   React                       // Render
             // // React.createElement() => react element(JS object) => Html Element

// const div1=React.createElement('div',{},[element,element2]);
// const Reactroot=ReactDOM.createRoot(document.getElementById('root'));

// // Reactroot.render(element);
// // Reactroot.render(element2);

// Reactroot.render(div1);





// //

// // // JSX : javascript XML : write html code direct inside Js

// import React  from "react";
// import ReactDOM from "react-dom/client";  

// // const element=React.createElement('h1',{ key: 'heading1',id:'first',className:'class',style:{backgroundColor:"purple",textAlign:"center",color:"white"}},'Rahul kumar shaw');
// // const element2=React.createElement('h2',{ key: 'heading2',id:'second',className:'class',style:{backgroundColor:"tomato",textAlign:"center",color:"black"}},'Web Development');

// const newElement= <h1>RAHUL KUMAR</h1> // babel convert JSX code into React.create element() , later react convert it into react element JS object, later Render convert it into Html Element

// // //        babel:                 React                      Render
// // // JSX => React.createElement() => react element(JS object) => Html Element

// // const div1=React.createElement('div',{},[element,element2]);
// const Reactroot=ReactDOM.createRoot(document.getElementById('root'));


// // Reactroot.render(div1);
// Reactroot.render(newElement);





// //

import React  from "react";
import ReactDOM from "react-dom/client";

// const newElement = <h1>TfuFYFYFIFFGUIGUIGU</h1>;

                        // or 

// const newElement=(<h1>TfuFYFYFIFFGUIGUIGU</h1>);

                        // or                        

// const newElement=(
//     <div>
//         <h1>TGUYUTUITGTTT</h1>
//         <h2>UGRFFYFF7T78TUIGI</h2>
//     </div>
// )
                         // or

// const newElement = (
//     <>
//           <h1>GGUYUTUITGTTT</h1>
//           <h2>RGRFFYFF7T78TUIGI</h2>
//     </>
// )
                              // or

// const newElement = (
// <>
//        <h1 id="first" className="name">GGUYUTUITGTTT</h1>
//        <h2>RGRFFYFF7T78TUIGI</h2>
// </>
// )
                              // or

// JSX : js ka expression

const yourName="RAHUL KUMAR SHAW";
const obj ={
    age:21,
    salary:0,
}

// const newElement = (
//     <>
//            <h1 id="first" className="name">GGUYUTUITGTTT {yourName}</h1>
//            <h2>RGRFFYFF7T78TUIGI {obj.salary}</h2>
//     </>
// )

                            //    or

// const newElement = (
// <>
//     <h1 id="first" className="name">GGUYUTUITGTTT {yourName}</h1>
//     <h2 money={30}>RGRFFYFF7T78TUIGI {obj.salary}</h2>
// </>
// )

                             // or

const style1={
    backgroundColor:"black",
    color:"white",
}

// React Element
// const newElement = (
//     <>
//         <h1 id="first" className="name">GGUYUTUITGTTT {yourName}</h1>
//         <h2 style={style1}>RGRFFYFF7T78TUIGI {obj.salary}</h2>
//     </>
// )

// const Reactroot=ReactDOM.createRoot(document.getElementById('root'));

// Reactroot.render(newElement);


 // //                          


// React component  -:  function Based component , class based component (outdated)

// function Based component

// function greet(){
//     return <h1>Aur Bhai kaise ho</h1>;
// }

// const newElement2 = greet();

// const Reactroot=ReactDOM.createRoot(document.getElementById('root'));

// Reactroot.render(newElement2);


                                // or


function greet(){
    return <h1>Aur Bhai kaise ho</h1>;
}

const meet=()=>{
    return <h2>Ha, Sab theek hai</h2>
}

const newElement2 = greet();
const newElement3 = meet();

// const newElement4= <>{newElement2} {newElement3}</>;
const newElement4= <>{greet()} {meet()}</>;


const Reactroot=ReactDOM.createRoot(document.getElementById('root'));

Reactroot.render(newElement2);

// Reactroot.render(newElement3);
Reactroot.render(meet());

// Reactroot.render(newElement4);
Reactroot.render(<>{greet()} {meet()}</>);



