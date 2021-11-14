import React, { useState, useEffect } from "react";
import axios from "axios"

const ShowJobs = () => {
const[jobs,setJobs]=useState([])
console.log(jobs);
const get=async()=>{
    try{
    var res=await axios.get("http://localhost:8000/job")
    setJobs(res.data.job)
    }
    catch(err){
        console.log(err);
    }
}
useEffect(() => {
  get()
}, [])
    return (
        <>
        <div>
          {jobs.map((value)=>{
              return(
                  <p>{value.description}</p>
              )
          })}
        </div>
        </>
    )
}

export default ShowJobs
