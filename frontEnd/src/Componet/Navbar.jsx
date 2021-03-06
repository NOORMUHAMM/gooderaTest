import React from 'react'
import "./navbar.css";
const Navbar = () => {
    return (
      <div className="container">
        <nav class=" navbar-expand-lg  navbar navbar-dark bg-primary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              Navbar w/ text
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Post Jobs
                  </a>
                </li>
              
              </ul>
              <span class="navbar-text">
                    Login
              </span>
            </div>
          </div>
        </nav>
      </div>
    );
}

export default Navbar
