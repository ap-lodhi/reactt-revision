import React from "react";
import { useState } from "react";

const Time =()=>{
    const newTime = new Date().toLocaleTimeString();
const [ctime ,setCtime] =useState(newTime)

const handletime =()=>{
  let   newTime1 = new Date().toLocaleTimeString();
    setCtime(newTime1)
}
    return(
        <>
        <div className="App">
        <h1 style={{color:"red"}}>LOCAL TIME</h1>
        <p>By cliking  on button we get updated time  </p>
        <h1>{ctime}</h1>

        <button className="btn" onClick={handletime}> Get Time</button>
        </div>
        <br/>
        <hr/>

        </>
    )
}
export default Time;