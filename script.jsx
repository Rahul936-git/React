import React from "react";
import ReactDOM from "react-dom/client";

import {BrowserRouter, Routes, Route , Link } from "react-router";

import GitHUB from "./src/Github";


function App(){

    return(

        <BrowserRouter>

        <Routes>
            {/* <Route path="/Github" element={<GitHUB></GitHUB>}></Route> */}
            <Route path="/Github/:name" element={<GitHUB></GitHUB>}></Route>
        </Routes>

        </BrowserRouter>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)