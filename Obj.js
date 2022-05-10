import React from "react";
import { useState } from "react";


const Person=()=>{
    const[Name,setName]=useState(
        {
            FirstName:"vikas",
            lastName:"kalyan",
            dept:"cse",
        }
    )
    return(
        <div className = "vikaaj">
            <h3>FirstName is:{Name.FirstName}</h3>
            <p>lastName is : {Name.lastName}</p>

        </div>
    )
}
export default Person; 