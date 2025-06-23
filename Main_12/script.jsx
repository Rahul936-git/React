import React from "react";
import ReactDOM from "react-dom/client";

import {BrowserRouter, Routes, Route , Link } from "react-router";

import Home from "../src/Home";
import Contact from "../src/Contact";
import About from "../src/About";
import Others from "../src/Other";

import Nested_0 from "../src/nested_0";
import Nested_1 from "../src/nested_1";
import Nested_2 from "../src/nested_2";

function App(){

    // return(
    //     <h1>This is return of App function</h1>
    // )

    return(
        <BrowserRouter>
        <nav>
            <Link to="/">Home | </Link>
            <Link to="/Contact"> Contact |</Link>
            <Link to="/About"> About |</Link>
            <Link to="/Other"> Other </Link>
        </nav>


        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/Contact" element={<Contact></Contact>}></Route>
            <Route path="/About" element={<About></About>}></Route>
            <Route path="/other" element={<Others></Others>}>
                <Route index element={<Nested_0></Nested_0>}></Route>
                <Route path="nested_1" element={<Nested_1></Nested_1>}></Route>
                <Route path="nested_2" element={<Nested_2></Nested_2>}></Route>
            </Route>

        </Routes>
        </BrowserRouter>
    )

}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);