import React from 'react'
import axios from "axios"

const ShowJobs = () => {
const get=async()=>{
    var res=await axios.get("http://localhost:8000/job")
    console.log(res);
}
get()
    return (
        <div>
            <h1>hello</h1>
        </div>
    )
}

export default ShowJobs
