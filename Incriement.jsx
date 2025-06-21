
// function Incriement({number,setnumber}){     //destructure  here

//     return(
//         <>
//         <h2>Child count is :{number*5}</h2>
//         <button onClick={()=>setnumber(number+1)}>Incriement</button>
//         </>
//     )
// }

// export default Incriement;


// **************************** State Lifting ******************************//

// import React, { useState } from "react";

// function Incriement({number,numbers}){     //destructure  here

// function Incriement(){     // do not destructure  here like in previous line

function Incriement({number,setnumber}){     //destructure  now for state lifting


    return(
        <>
        <h2>Child count is :{number}</h2>
        <button onClick={()=>setnumber(number+1)}>Incriement</button>
        </>
    )
}

export default Incriement;