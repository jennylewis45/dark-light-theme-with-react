import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa"
import './Navbar.css'

function Navbar() {
  const[mode,setMode]=useState("light")

  const ToggleMode=()=>{
    if(mode==="light"){
        setMode("dark")
        document.body.style.background="black"
    }
    else{
        setMode("light")
        document.body.style.background="white"

    }
}
  return (
    <>
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Material Kit React
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  COMPONENTS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  📱UPGRADE TO PRO
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  ☁️DOWNLOAD
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <FaFacebookF />
      <br />
          <FaTwitter />
          <FaInstagram />
          <div className="form-check form-switch">
  <input onClick={ToggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" for="flexSwitchCheckDefault">Toggle Mode</label>
</div>

        </div>
      </nav>
    </>
  );
}

export default Navbar;
