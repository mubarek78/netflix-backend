
import React, { useState, useEffect } from "react";
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./Nav.css";



function Nav() {
  const [show, handleShow] = useState(false);
  const [showOpt, setShowopt] = useState(false)
  { console.log(showOpt)}
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  const logout = () => {
    localStorage.clear();
}

  return (
    <div className={`nav ${show && "nav__black"}`}
    onMouseLeave={() => setShowopt(false)}>
    <div className="left">
      <img
           className="nav__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
      <div className="left_menu">
      <Link to="/" className="link">
       <span>Homepage</span>
       </Link>
       <Link to="/series" className="link">
       <span>Series</span>
       </Link>
       <Link to="/movies" className="link">
       <span>Movies</span>
       </Link>
       <Link to="/popular" className="link">
       <span>Popular</span>
       </Link>
       <span>My List</span>
       </div>
      </div>
      <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon dropdown" 
              onMouseEnter={() => setShowopt(true)}
              
            />
            <div   className={`${showOpt ? "options" : "options hideoptions"}`}>
              <span>Settings</span>
              <span onClick={() => logout()}>Logout</span>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Nav;