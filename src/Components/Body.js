import React, { useEffect } from "react";
import { Card } from "./Card" ; // if both ARE IN same directory no need to add whole path 
// import restaurantList from "../utils/mock";
import { useState } from "react";
import Shimmer from "./Shimmer";
// RestaurantList is JSON Data for displaying cards

const Body = ()=>{
    const[listofResturent,setlistofRestaurent] = useState([]);
    const[FilterlistofResturent,setFilterlistofRestaurent] = useState([]);

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

    // console.log(listofResturent.length);
    // Conditional Rendering 
//     if(listofResturent.length == 0){
//         return <Shimmer/>
//    }
    
    return listofResturent.length == 0 ? (<Shimmer/> ): (
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
                 const filteredRestaurent = listofResturent.filter((a)=>a?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
                 setFilterlistofRestaurent(filteredRestaurent);
             //  setlistofRestaurent(filteredRestaurent);
              }}
            >
                Search
            </button>

            <button className="search-btn"  
            onClick={()=>{ 
               // console.log(listofResturent);
                const filteredlist = listofResturent.filter((a)=>a.info?.avgRating > 4); // optional chaning is very crucial 
                    if (filteredlist.length > 0) {
                        setlistofRestaurent(filteredlist);
                    } else {
                        console.log("No Restaurants Available with rating greater than 4"); 
                    }
                }}
            >Top Rated Restaurent</button> 
          </div>
        <div className="card-container"> 
        {
            FilterlistofResturent.map((ele)=>{  // for searching twice and thrice in search tab we have changed array 
               // console.log(ele?.info);
                return (
               <Card key={ele.info.id} {...ele.info}/> // spread operator in JavaScript // key for unique props 
            )
            }) 
        }

       </div>
       </div>
    )
}
export default Body ;


// spread operator in JavaScript allows an iterable such as an array or an object expression to be expanded in places where zero or more arguments or elements are expected.
// {...ele.info} spreads out all the properties of the info object into individual props for the Card component.
// For example, if ele.info has properties like name, address, and rating, using {...ele.info} will pass these properties as individual props to the Card component.

// useEffect:
// This hook is used to perform side effects in functional components. 
// It takes a function as its first argument, which will be executed after the component renders. It can also take an optional second argument, an array of dependencies. 
// If provided, the effect will only be re-executed if one of the dependencies has changed.
