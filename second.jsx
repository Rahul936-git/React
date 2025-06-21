// import Third from "./third";

// // function Second(props) {                           // props to recieve as an argument
// // function Second({props}) {
// function Second({count,setcount}) {

//     return(
//         <>
//         <h2>Second</h2>
//         <Third count={count} setcount={setcount}/>
//         </>
//     )
// }

// export default Second;



// *************************** use of (GlobalContex) in same above code**********************************************//


// import Third from "./third";
// import GlobalContex from "./Global";
// import { useContext } from "react";

// // function Second(props) {
// // function Second({props}) {
// function Second({count,setcount}) {

//     const data= useContext(GlobalContex);

//     return(
//         <>
//         <h2>Second {data}</h2>
//         <Third count={count} setcount={setcount}/>
//         </>
//     )
// }

// export default Second;





//************ how to put count and setcount inside Globalcontex ? ***********





// import Third from "./third";
// import GlobalContex from "./Global";
// import { useContext } from "react";

// // function Second(props) {
// // function Second({props}) {

// // function Second({count,setcount}) {                     // now remove props
// function Second(){

//     // const data= useContext(GlobalContex);  
//     const {count,setcount} = useContext(GlobalContex);

//     return(
//         <>
//         {/* <h2>Second {data}</h2> */}
//         <h2>Second {count}</h2>
//         {/* <Third count={count} setcount={setcount}/> */}                   {/* now remove props */}
//         <Third/>                                                            
//         </>
//     )
// }

// export default Second;






//************ You can skip useContex ***********






import Third from "./third";
import GlobalContex from "./Global";
import { useContext } from "react";

// function Second(props) {
// function Second({props}) {

// function Second({count,setcount}) {                     // now remove props
function Second(){

    // const data= useContext(GlobalContex);  
    // const {count,setcount} = useContext(GlobalContex);

    return(
        <>
        {/* <h2>Second {data}</h2> */}
        {/* <h2>Second {count}</h2> */}
        <h2>Second</h2>
        {/* <Third count={count} setcount={setcount}/> */}                   {/* now remove props */}
        <Third/>                                                            
        </>
    )
}

export default Second;
