import React, { useState } from "react"
import { Link } from "react-router-dom";

const Header = () =>{
   const[Login,setLogin] = useState("login") ; 
    return(
        <div className="header">
            <img className="image"
              alt="logo"
              src="https://img.freepik.com/free-vector/delivery-service-illustrated_23-2148505081.jpg?w=740&t=st=1714460265~exp=1714460865~hmac=e5f1e31895fefe44d58dcf7296e3c371d08c3605d90e21789179a5f340a86a48"
               />
            <div className="list">
                <ul>
                   <li><Link to="/">Home</Link></li> 
                   <li><Link to="/about">About</Link></li> 
                   <li><Link to="/contact">Contact</Link></li> 
                   <li>Cart</li>
                   <button className="header-login" onClick={()=>{(Login==="login") ? setLogin("logout") :setLogin("login")} }>{Login}</button> 
                </ul>
            </div>
        </div>
    )
}

export default Header ;

// <Link to="/contact">Contact</Link> link is a superpower given by 
// react-router-dom reloading doesnot happen here 
//  <a href=""> </a>  anchor tag m reloading hota 