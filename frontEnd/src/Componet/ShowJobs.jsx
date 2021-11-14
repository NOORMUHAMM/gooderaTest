import React, { useState, useEffect } from "react";
import axios from "axios"

const ShowJobs = () => {
const[jobs,setJobs]=useState([])
const[serch,SetSerch]=useState("")
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
 const serchData = () => {
   const filterData = jobs.filter((e) => {
     return e.location.toLowerCase().includes(serch.toLowerCase());
   });
setJobs(filterData);
 };
    return (
      <>
        <div>
          <div className="Search">
            <input type="text" onChange={(e) => SetSerch(e.target.value)} placeholder="Serch by location"/>
            <select name="" id="">
                <option value="delhi">delhi</option>
            </select>
            <button onClick={serchData}>Search</button>
          </div>
          {jobs.map((value) => {
            return (
              <div>
                <div class="card w-50">
                  <div class="card-body">
                    <h5 class="card-title">{value.title}</h5>
                    <p class="card-text">{value.description}</p>
                    <p class="card-text">{value.external}</p>
                    <p class="card-text">{value.level}</p>
                    <p class="card-text">{value.publication_date}</p>
                    <p class="card-text">{value.location}</p>
                    <a href="#" class="btn btn-primary">
                      Button
                    </a>
                  </div>
                </div>
                {/* <p>{value.title}</p>
                <p>{value.description}</p>
                <p>{value.external}</p>
                <p>{value.level}</p>
                <p>{value.publication_date}</p>
                <p>{value.location}</p> */}
              </div>
            );
          })}
        </div>
      </>
    );
}

export default ShowJobs
