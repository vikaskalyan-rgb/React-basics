import React from "react";
import { useState } from "react";
const Colorchange =()=>{
    const[color,setColor] = useState("");
    return(
        <div className="Vikoo">
            <h2>The color of sky is {color}!</h2>
            <button type="button" onClick={()=>setColor("black")}>black</button>
            <button type="button" onClick={()=>setColor("red")}>red</button>
            <button type="button" onClick={()=>setColor("blue")}>blue</button>
            <button type="button" onClick={()=>setColor("green")}>green</button>
        </div>
    )
}
export default Colorchange;