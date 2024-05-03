import React from "react";

const Header = () =>{
    return(
        <div className="header">
            <img className="image"
              alt="logo"
              src="https://img.freepik.com/free-vector/delivery-service-illustrated_23-2148505081.jpg?w=740&t=st=1714460265~exp=1714460865~hmac=e5f1e31895fefe44d58dcf7296e3c371d08c3605d90e21789179a5f340a86a48"
               />
            <div className="list">
                <ul>
                   <li>Home</li> 
                   <li>About us </li> 
                   <li>Contact</li> 
                   <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};
export default Header ;