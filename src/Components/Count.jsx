import React from "react";
import { useState } from "react";

const Count = ()=>{

    const [count ,setCount]=useState(0)
    return(
        <>
        <br />
        <br />
        <div className="App"> 

        <h1>{count}</h1>
        <button onClick={(()=> setCount(count+1))}>+</button>
        <button onClick={(()=> setCount(count-1))} >-</button>
        </div>
        <br />
        <hr />
        </>
    )
}

export default Count