import { useState } from "react";
import './Card.css'
function Card(props){
     const[readmore,setreadmore]=useState(false);
     const description=readmore?props.info:`${props.info.substring(0,200)}...`
     function readmorehandler(){
        setreadmore(!readmore);
     }
    
   return(

    <div className="card">
        <img src={props.image} className="image"></img>
        <div className="tour-info">
        <div className="tour-details">
        <h4 className="tour-price">{props.price}</h4>
        <h4 className="tour-name">{props.name}</h4>
         </div>
         <div className="description">{description}
         <span className="read-more" onClick={readmorehandler}>
            {readmore ?`Show less`:`Read more`}
         </span>
         </div>
        </div>
         <button className="btn-red" onClick={()=>props.removeTour(props.id)}>
        Not interested
    </button>
    </div>
);
}

export default Card;