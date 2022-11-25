import React from "react";

function Task({title,status}){
// console.log(Props.title)
    return(
        <>
        {/* <div>{Props.title}- {Props.status}</div>   these are the two way of  passing props */} 
        <div> {title}</div>
        </>
    )
}

export default Task;