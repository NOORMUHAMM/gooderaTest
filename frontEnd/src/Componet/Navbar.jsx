import React from 'react'
import "./navbar.css";
import ShowJobs from './ShowJobs';
import PostJob from './PostJob';
const Navbar = () => {
    return (
        <div className="container">
        <ShowJobs/>
        {/* <PostJob/> */}
        </div>
    )
}

export default Navbar
