// **************************** State Lifting ******************************//

// import React, { useState } from "react";

function Decriement({number,setnumber}){          

    return(
        <>
        <button onClick={()=>setnumber(number-1)}>Decriement</button>
        </>
    )
}

export default Decriement;