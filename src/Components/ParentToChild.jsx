import React from "react";
import { useState } from "react";

const  ParentToChild=()=>{


    const [count, setCount]=useState(0)
    return(
        <>

        <h1>parent to chiled </h1>

        <h1>count is {count}</h1>

        <button onClick={()=>{setCount(count+1)}}>+</button>
        <button  onClick={()=>{setCount(count-1)}}>-</button>
        </>
    )
}
export default ParentToChild