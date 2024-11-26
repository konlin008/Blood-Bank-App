import React from "react";
import { MdBloodtype } from "react-icons/md";
import { FaUserMd } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  //logout handler

  const handellogout = () => {
    localStorage.clear();
    alert("Logout Successfully");
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar">
        <div className="container-fluid">
          <div className="navbar-brand h1">
            <MdBloodtype color="red" />
            Blood Bank App
          </div>
          <ul className="navbar-nav  flex-row">
            <li className="nav-item mx-3">
              <p className="nav-link">
                <FaUserMd />
                Welcome {user?.name || user?.hospitalName || user?.orgnisationName}{" "}
                 &nbsp;
                <span className="badge text-bg-secondary">{user?.role}</span>
              </p>
            </li>
            <li className="nav-item mx-3">
              <button className="btn btn-danger" onClick={handellogout}>
                logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
