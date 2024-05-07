import React, { useEffect } from "react";
import { Card } from "./Card" ; // if both ARE IN same directory no need to add whole path 
// import restaurantList from "../utils/mock";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
// RestaurantList is JSON Data for displaying cards

const Body = ()=>{
    const[listofResturant,setlistofRestaurent] = useState([]);
    const[FilterlistofResturant,setFilterlistofRestaurent] = useState([]);
    // logic for filter condition we have taken two arrays the first one is use for
    // searching(filter) and we update second one with the help of it and if we are again searching we will use first(original array) 
    const[searchText,setsearchText] = useState([]);
  // whenever state variables update,react triggers a reconciliation cycle(re-renders the component)
    useEffect(()=>{
       fetchData();
    },[]);
  
    const fetchData = async()=>{
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5/?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      // optional Chaining 
      setlistofRestaurent(json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilterlistofRestaurent(json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    // console.log(listofResturant.length);
    // Conditional Rendering 
//     if(listofResturant.length == 0){
//         return <Shimmer/>
//    }
    
    return listofResturant.length == 0 ? (<Shimmer/> ): (
        <div>
         <div className="search">
            <input type="text" 
            className="search-box" 
            value={searchText}
            onChange={(e)=>{
              setsearchText(e.target.value) ;
            }}
            />
            <button
              onClick={()=>{
                 console.log(searchText); 
                 const filteredR = listofResturant.filter((a)=>a?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
                 setFilterlistofRestaurent(filteredR); // for search condition 
             //  setlistofRestaurent(filteredRestaurent);
              }}
            >
                Search
            </button>

            <button className="search-btn"  
            onClick={()=>{ 
               // console.log(listofResturant);
                const filteredlist = listofResturant.filter((a)=>a.info?.avgRating > 4); // optional chaning is very crucial 
                    if (filteredlist.length > 0) {
                        setFilterlistofRestaurent(filteredlist);
                    } else {
                        console.log("No Restaurants Available with rating greater than 4"); 
                    }
                }}
            >Top Rated Restaurant</button> 
          </div>
        <div className="card-container"> 
        {
            FilterlistofResturant.map((ele)=>{  // for searching twice and thrice in search tab we have changed array 
               // console.log(ele?.info);
                return (
                  <Link key={ele.info.id} to={"/restaurant/" + ele.info.id}><Card  {...ele.info}/></Link>
                  // used link here to click on every card and redirect to restaurent card 
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
