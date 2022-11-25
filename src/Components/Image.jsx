// import React from "react";
// import { useState } from "react";
// import './image.css'

// const Image =()=>{
    
//  const [list , SetList]= useState([{lists: ""}])

// // console.log(list)
//  const  addImage =()=>{
//    SetList([...list, {lists: "" }]);
   
//  }
//  const removeImage = (index)=>{
//     const lis = [...list]
//     list.splice(index,1)
//     SetList(lis)
//  }
// //  function remove(){
// //     list.pop()
// //  }
// //  style={{display:'flex', flexDirection:"row"}
//     return(
//         <>

//         <div  className="card">
//             {list.map((el,index)=>(
              
//                 <div key={index}  >


//                     <img src="https://source.unsplash.com/user/erondu/400x300" alt="" />
//                    <br />
//                    {list.length-1 ===index && list.length< 15 &&
//                    (

//                   <button onClick={addImage()}>Add</button>
//                    )}
//                 </div>
             
             
             
             
             
             
//              ))}
//              <button className="btn" onClick={()=>removeImage(index)}>Remove</button>
//         </div>
//         </>
//     )
// }

// export default Image;
