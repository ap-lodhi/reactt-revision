import React from "react"
import { useState } from "react"

const Digital = () => {
    let time = new Date().toLocaleTimeString()
    const [ctime, setCtime] = useState(time)

    const updateTime = () => {
        time = new Date().toLocaleTimeString()
        setCtime(time)
    }
    setInterval(updateTime, 1000);
    return (

        <>
            <div className="App">
                <h1 style={{ color: "green" }}>DIGITAL CLOCK</h1>

                <h1 >
                    {ctime}
                </h1>
            </div>

        </>
    )
}
export default Digital;
