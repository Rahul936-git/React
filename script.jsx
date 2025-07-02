import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import Header from "./src/header";
import Card from "./src/card";
import stores from "./src/stores";

function App(){

    return(
        <Provider store={stores}>
            <Header></Header>
            <Card></Card>
        </Provider>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);