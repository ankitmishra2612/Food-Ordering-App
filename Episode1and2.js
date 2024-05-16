import React from "react"
import ReactDOM from "react-dom/client"
// nested html using react 

// const parent1= React.createElement(
//     "div", // ist argument 
//     {id : "parent1"}, // 2nd argument 
//     React.createElement( // 3rd argument 
//     "div",
//     {id : "child"},
//     React.createElement(
//         "h1",
//         {},"I am an h1 Tag")
// ))
// React element is basically an object 
  // this is core React using JavaScript we will use JSX that will make code easy 
const parent= React.createElement(
    "div", // ist argument 
    {id : "parent"}, // 2nd argument 
    React.createElement( // 3rd argument 
    "div",
    {id : "child"},[  // here we are passing sibling 
    React.createElement(
        "h1",
        {},"I am an h1 Tag"),
    React.createElement(
            "h2",
            {},"I am an h2 Tag")
    ]
))


const heading = React.createElement("h1",{},"Hello World from React");
// console.log(heading) will return an object
const root = ReactDOM.createRoot(document.getElementById("root")); // createRoot m r capital ho ga 
root.render(parent) // it will replace whatever will be on root 