import React,{useState,useEffect} from 'react'
import axios from "axios"
// import { useHistory } from 'react-router-dom'


const PostJob = () => {
//   const history=useHistory()

    const[details,setDetails]=useState({title:"",description:"",external:"",publication_date:"",location:"",level:""})
    

    const {title,description,external,publication_date,location,level}=details

    const handlechange=(e)=>{
        setDetails({...details,[e.target.name]:e.target.value})
     }
  
    const onsubmit=async e=>{
        e.preventDefault()
        var res = await axios.post("http://localhost:8000/job", details);
        console.log("post=",res)
        // history.push("/")

        
    }


    return (
        <div style={{"width":"50%",textAlign:"center",margin:"0 auto",marginTop:"20px"}}>
            <form onSubmit={e=>onsubmit(e)} >
             <input type="text"class="form-control"  name="title" value={title} onChange={handlechange} placeholder="title" />  
            <br />  <input type="text" class="form-control"  name="description" value={description} onChange={handlechange} placeholder="lastneme" />  
            <br />  <input type="text" class="form-control" name="external"value={external} onChange={handlechange} placeholder="external" />  
            <br/>  <input type="text" class="form-control"  name="publication_date"value={publication_date} onChange={handlechange} placeholder="publication_date" />  
             <br /> <input type="text" class="form-control" name="location"value={location} onChange={handlechange} placeholder="location" />  
             <br/> <br /> <input type="text" class="form-control" name="level"value={level} onChange={handlechange} placeholder="level" />  
            <br />  <button class="btn btn-primary">submit</button>
            </form>
            
        </div>
    )
}

export default PostJob

