import React  from "react";
import { useState } from "react";

const Form =()=>{
    const [fullName, setFullName]=useState({
        fname:"",
        lname:"",
        email:"",
        phone:""
    });

    const inputEvent = (event)=>{
        const {value ,name } =event.target;
        setFullName((preValue)=>{
 
           return{
            ...preValue,
            [name]:value
           }
        //     if(name === 'fName'){
        //     return{
        //         fname:value,
        //         lanme:preValue.lname,
        //         email:preValue.email,
        //         phone:preValue.phone
        //     }
        // }else if(name ==='lName'){
        //     return{
        //         fname:preValue.fname,
        //         lname: value,
        //         email:preValue.email,
        //         phone:preValue.phone
        //     }
        // }else if(name ==='email'){
        //     return{
        //         fname:preValue.fname,
        //         lanme:preValue.lname,
        //         email:value,
        //         phone:preValue.phone
        //     }
        // }else if(name ==='phone'){
        //     return{
        //         fname:preValue.fname,
        //         lanme:preValue.lname,
        //         email:preValue.email,
        //         phone:value
        //     }
        // }
                
        })
    };

    const onSubmits =(event)=>{
        event.preventDefault();
        alert("form is  submited ")
    }

    return(
        <>
        <br />
        <hr />
        <form onSubmit={onSubmits}>

        <div className="App">
            <h1>Hello  my is {fullName.fname} {fullName.lname}</h1>
            <p> {fullName.email}</p>
            <p> {fullName.phone}</p>
            <input type="text" 
            placeholder="enter first name "
            onChange={inputEvent} 
            name="fname"
            value={fullName.fname}/>

            
            <br/>

            <input type="text" 
            placeholder="enter last name "
            onChange={inputEvent} 
            name="lname"
            value={fullName.lname}/>
            <br />

            <input type="email" 
            placeholder="enter email "
            onChange={inputEvent} 
            name="email"
            value={fullName.email}/>
            <br />
 
            <input type="number" 
            placeholder="enter number"
            onChange={inputEvent} 
            name="phone"
            value={fullName.phone}/>

            <button type="submit">Submit Me 👍</button>
        </div>
            </form>
            <br />
            <hr />
        </>
    )
}
export default Form;