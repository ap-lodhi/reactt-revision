import React from "react";
import { useState } from "react";
const Event = () => {
    const purple = "pink "
    const [bg, setBg] = useState(purple)
    const [name ,setName] =useState("click me")
    const bgChange = () => {
        setBg("red")
        setName("ohh đ˛")

    }
    return (
        <>
            <br />
            <hr />
            <div className="App" style={{ backgroundColor: bg }}>
                <h1>
                    Event handler đŠī¸
                </h1>
                <button className="btn" onClick={bgChange}>{name}  </button>
            </div>

        </>
    )
}
export default Event;