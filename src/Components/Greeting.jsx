import React from "react";

const Greeting =()=>{

    let currDate = new Date();
    currDate = currDate.getHours();
    let greeting ='';
    const cssStyle={

    };

    if(currDate >= 1 && currDate<12){
        greeting="Good Morning"
        cssStyle.color="green"
    }else if( currDate >= 12 && currDate <19){
        greeting="Good Afternoon"
        cssStyle.color="orange"
    }else{
        greeting="Good Night"
    }
    return(
        <>
        <br/>
        <br/>
        <br/>
        <br/>
        <hr/>
        <div className="App">
            <h1>Greeting clock  </h1>

            <h1> Hello sir, <span style={cssStyle}> {greeting}  </span> </h1>
        </div>
        </>
    )

}
export default Greeting;