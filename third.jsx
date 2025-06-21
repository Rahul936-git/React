
// // function Third(props){                        // props to recieve as an argument
// // function Third({props}){
// function Third({count,setcount}) {

//     return(
//         <>
//         {/* <h2>I am printing {Props.count}</h2> */}
//         <h2> I am printing {count}</h2>
//         {/* <Fourth/> */}
//         </>
//     )
// }

// export default Third;



// *************************** use of (GlobalContex) in same above code**********************************************//



// import GlobalContex from "./Global";
// import { useContext } from "react";

// // function Third(props){
// // function Third({props}){
// function Third({count,setcount}) {

//     const data = useContext(GlobalContex);

//     console.log(data); // Rahul 
//     console.log(useContext);
//     console.log(GlobalContex);
//     console.log(GlobalContex._currentValue); // Rahul 
//     console.log(typeof GlobalContex); // object

//     return(
//         <>
//         {/* <h2> I am printing {Props.count}</h2> */}
//         <h2> I am printing {data} {count}</h2>
//         {/* <Fourth/> */}
//         </>
//     )
// }

// export default Third;



//************ how to put count and setcount inside Globalcontex ? ***********




import GlobalContex from "./Global";
import { useContext } from "react";

// function Third(props){
// function Third({props}){
// function Third({count,setcount}) {
function Third() {                                                  //  now remove props 

    // const data = useContext(GlobalContex);

    // const data = useContext(GlobalContex);                    // this data conatin count,setcount but previous one does not contain it , we can write this as given below 
    const {count,setcount} = useContext(GlobalContex);          // You can skip useContex but if you want to use it then you can use it   
                                     // step:3 consume the context in above line

    return(
        <>
        {/* <h2> I am printing {Props.count}</h2> */}
        {/* <h2> I am printing {data} {count}</h2> */}
        <h2>I am printing {count}</h2>
        {/* <Fourth/> */}
        <button onClick={()=>setcount(count-100)}>Decrement</button>
        </>
    )
}

export default Third;

