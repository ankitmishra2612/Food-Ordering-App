// our custom Hook

import { useState,useEffect } from "react";
import { MENU_API } from "./constants";

const useRestaurant=(resId)=>{
    const[resInfo,setresInfo] = useState(null) ;
    useEffect(()=>{
        fetchData();
    },[]);
   // console.log(resId);
    const fetchData = async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5/?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
        const json = await data.json();
      //  console.log(json);
        // console.log(json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle);
         setresInfo(json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle)
    };

    return resInfo ;
}

export default useRestaurant ;