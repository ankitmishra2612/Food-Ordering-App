import React, { useContext, useState } from "react"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStaus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () =>{
   const[Login,setLogin] = useState("login") ; 
   const online = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);
   // console.log(data);

   // subscribing to the store using a Selector 
    const cartItems = useSelector((store)=>store?.cart?.items) ;
   // console.log(cartItems)
    return(
        <div className="h-38 flex justify-between border-separate border border-solid border-black">
            <img className="w-20 h-25"
              alt="logo"
              src="https://img.freepik.com/free-vector/delivery-service-illustrated_23-2148505081.jpg?w=740&t=st=1714460265~exp=1714460865~hmac=e5f1e31895fefe44d58dcf7296e3c371d08c3605d90e21789179a5f340a86a48"
               />
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                   <li className="px-4" >Online Status : {online ? "💚" : "❤️"}</li>
                   <li className="px-4"><Link to="/">Home</Link></li> 
                   <li className="px-4"><Link to="/about">About</Link></li> 
                   {/* <li className="px-4"><Link to="/grocery">Grocery</Link></li>  */}
                   <li className="px-4"><Link to="/contact">Contact</Link></li> 
                   <li className="px-4 font-bold text-xl"><Link to="/cart">Cart({cartItems.length})</Link></li>
                   <li className="px-4">{loggedInUser}</li>
                   <button className="px-2 py-2 bg-gray-300 hover:bg-gray-500" onClick={()=>{(Login==="login") ? setLogin("logout") :setLogin("login")} }>{Login}</button> 
                </ul>
            </div>
        </div>
    )
}

export default Header ;

// <Link to="/contact">Contact</Link> link is a superpower given by react-router-dom reloading doesnot happen here 
//  <a href=""> </a>  anchor tag m reloading hota 