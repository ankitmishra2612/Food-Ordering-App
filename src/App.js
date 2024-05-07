import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./Components/Header";
import Body from "./Components/Body" ;
import { createBrowserRouter , RouterProvider, Outlet} from "react-router-dom";
// createBrowserRouter recommended Router for all React Router web project 
import Restaurant from "./Components/Restaurent";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";

const Applayout = () =>{
     return (
        <div className="App">
            <Header/>
            <Outlet/> 
        </div>
     ) // outlet will be filled with children according to the path 
}
  // list of objects // each and every 
const appRouter = createBrowserRouter([
    {
        path :"/",
        element :<Applayout/>,
        children : [
            {
                path :"/",
                element :<Body/>,
            },
            {
                path : "/about",
                element : <About/>,
            },
            {
                path : "/contact",
                element : <Contact/>,        
            },
            {
                path: "/restaurant/:resId",
                element: <Restaurant />
            },
        ],
        errorElement : <Error/>, 
    },
]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

// React requires that the first letter of components be capitalized.
// JSX will use this capitalization to tell the difference between an HTML tag and a component instance. 
// If the first letter of a name is capitalized, then JSX knows it's a component instance; if not, then it's an HTML element.