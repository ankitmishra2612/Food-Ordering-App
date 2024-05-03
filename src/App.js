import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./Components/Header";
import Body from "./Components/Body"


const Applayout = () =>{
     return (
        <div className="App">
            <Header/>
            <Body/>
        </div>
     )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout/>);

// React requires that the first letter of components be capitalized.
// JSX will use this capitalization to tell the difference between an HTML tag and a component instance. 
// If the first letter of a name is capitalized, then JSX knows it's a component instance; if not, then it's an HTML element.