import React from "react";
import { useState } from "react";
import Task from "./Task";

const Props=()=>{
   const [title, setTitle]=useState("")
   const [data, setData]= useState([])

const handleAdd=()=>{
      const payload={
        title:title,
        status:false,
      }
      let newTask =[...data, payload] 
      setData(newTask)
}
// console.log(data)
    return(
        <>
        <div style={{width:"30%", margin:"auto"}}>


        <h1>Tasks </h1>
         <div>

            <input type="text" placeholder="enter task " value={title} onChange={(e)=>{setTitle(e.target.value)}} />
            

            <button onClick={handleAdd}>Add</button>
         </div>
         {
            data.map((ele,index)=>{
                return <Task  {...ele} />
                // return <Task  title={ele.title} status={ele.status} we can pass  the two way of  passing props />
            })
         }
        </div>



        <br />
        <br />
        <br />
        <br />
        </>
    )
}

export default Props;