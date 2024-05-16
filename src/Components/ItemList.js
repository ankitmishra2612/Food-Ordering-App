import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";


const ItemList = ({items})=>{

    const dispatch = useDispatch(); // React hook 
    const handleAddItem =(item)=>{
        // Dispatch an Action 
        dispatch(addItem(item));
    }
    return(
        <div>
             { items.map((item)=>(
                <div key={item.card.info.id} className="p-2 m-2 border-black border-b-2 text-left flex justify-between">
                 <div className="w-8/12">
                  <div className="p-2">
                    <span>{item.card.info.name} - </span>
                    <span>₹{item.card.info.price/100}</span>
                </div>
                 <p className="text-xs m-4">{item.card.info.description}</p>
                 </div>
                <div className="w-4/12 "> 
                 <div className="absolute">
                <button className="p-1  bg-black text-white shadow-lg hover:bg-white  hover:text-black transition-all duration-[.3s]"
                  onClick={()=>handleAddItem(item)} // used as a callback function
                 >Add+</button>
                 </div>
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/"+ item.card.info.imageId} className="mx-auto"/>  
                 </div>
                </div>
             ))}
        </div>
    )
}

export default ItemList ;

// mx-auto center m img 