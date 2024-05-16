import React, { useContext, useEffect } from "react";
import Card, { WrapCard} from "./Card" ; // if both ARE IN same directory no need to add whole path 
// import restaurantList from "../utils/mock";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStaus";
import UserContext from "../utils/UserContext";

// RestaurantList is JSON Data for displaying cards

const Body = ()=>{
    const[listofResturant,setlistofRestaurant] = useState([]);
    const[FilterlistofResturant,setFilterlistofRestaurant] = useState([]);
    // logic for filter condition we have taken two arrays the first one is use for
    // searching(filter) and we update second one with the help of it and if we are again searching we will use first(original array) 
    const[searchText,setsearchText] = useState([]);
  // whenever state variables update,react triggers a reconciliation cycle(re-renders the component)
    const {setuserInfo,loggedInUser} = useContext(UserContext); 
  useEffect(()=>{
       fetchData();
    },[]);
  
    const fetchData = async()=>{
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5/?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      // optional Chaining 
      setlistofRestaurant(json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilterlistofRestaurant(json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const s= useOnlineStatus();
    if(s===false){ return (<h1>You are offline </h1>)}

    // console.log(listofResturant);
    // Conditional Rendering 
//     if(listofResturant.length == 0){
//         return <Shimmer/>
//    }
    
    return listofResturant.length == 0 ? (<Shimmer/> ): (
        <div className="body items-center">
         <div className="search m-4 p-4">
            <input type="text" 
            className="border border-solid border-black" 
            value={searchText}
            onChange={(e)=>{
              setsearchText(e.target.value) ;
            }}
            />
            <button className="px-4 py-2 bg-gray-300 hover:bg-gray-500  rounded-lg"
              onClick={()=>{
               //  console.log(searchText); 
                 const filteredR = listofResturant.filter((a)=>a?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
                 setFilterlistofRestaurant(filteredR); // for search condition 
             //  setlistofRestaurant(filteredRestaurant);
              }}
            >Search
          </button>
            <button className="px-4 py-2 bg-gray-300 hover:bg-gray-500 rounded-lg ml-20"  
          onClick={()=>{ 
               // console.log(listofResturant);
                const filteredlist = listofResturant.filter((a)=>a.info?.avgRating > 4); // optional chaning is very crucial 
                    if (filteredlist.length > 0) {
                        setFilterlistofRestaurant(filteredlist);
                    } else {
                        console.log("No Restaurants Available with rating greater than 4"); 
                    }
                }}
            >Top Rated Restaurant</button> 
            <button className="ml-12 px-2 py-2 my-2 bg-gray-300 hover:bg-gray-500 rounded-lg">UserName</button>
            <input className="border border-black"
            value={loggedInUser}
            onChange={(e)=>setuserInfo(e.target.value)}
            />
    </div>
        <div className="flex flex-wrap"> 
        {
            FilterlistofResturant.map((ele)=>{  // for searching twice and thrice in search tab we have changed array 
               // console.log(ele?.info);
                return (
                  <Link key={ele.info.id} to={"/restaurant/" + ele.info.id}> {ele.info.isOpen ? <WrapCard {...ele.info}/> : <Card {...ele.info}/>}</Link>
                  // used link here to click on every card and redirect to Restaurant card 
                // spread operator in JavaScript // key for unique props 
            )
            }) 
        }

       </div>
       </div>
    )
}
export default Body ;

// link is given by react-router-dom and behind the scenes it is using <a> anchor tag  // link keeps track on anchor tag 
// spread operator in JavaScript allows an iterable such as an array or an object expression to be expanded in places where zero or more arguments or elements are expected.
// {...ele.info} spreads out all the properties of the info object into individual props for the Card component.
// For example, if ele.info has properties like name, address, and rating, using {...ele.info} will pass these properties as individual props to the Card component.

// useEffect:
// This hook is used to perform side effects in functional components. 
// It takes a function as its first argument, which will be executed after the component renders. It can also take an optional second argument, an array of dependencies. 
// If provided, the effect will only be re-executed if one of the dependencies has changed.

// take input from user and use it 
//<input className="border border-black"
//onChange={(e)=> setUserName(e.target.value)}
 

// npm simplifies package management, enabling easy installation, updating, and removal of dependencies. 
// It centralizes the distribution of JavaScript packages, fostering collaboration and code reuse in the development community.
//  Through npm scripts, it facilitates automation and streamlines common tasks in React and other web projects.







