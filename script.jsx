import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import Stores from "./src/store";

import Counting from "./src/counting";

 function App(){

    return(
        <>
        <Provider store={Stores}>
            <Counting></Counting>
        </Provider>
        </>
    )
 }

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);