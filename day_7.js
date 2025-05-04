import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

import Colorful from "./colorful";
import Count from "./count";

function Main(){
    return (
    <>
    <Count></Count>
    <Colorful></Colorful>
    {/* <Colorful name={Count}></Colorful> */}  {/* It prevents re-rendering unless its props change. */}
  
    </>
    )
}

const Root=ReactDOM.createRoot(document.getElementById('root'));
// Root.render(<Main/>);
Root.render(<Main></Main>);