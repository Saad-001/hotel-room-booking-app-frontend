import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./navbar.css";

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  console.log(user);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>
          <span className="logo">Booking App</span>
        </Link>
        {user ? (
          <div className="nav-user">
            <p>{user.userName}</p>
            <div className="navItems">
              <button className="navButton" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        ) : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <Link to={"/login"}>
              <button className="navButton">Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
