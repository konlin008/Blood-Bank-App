import React from "react";
import { MdBloodtype } from "react-icons/md";
import { FaUserMd } from "react-icons/fa";
import { useSelector } from "react-redux";

const Header = () => {
  const { user } = useSelector((state) => state.auth);

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
                welcome {user.name}
                
              </p>
            </li>
            <li className="nav-item mx-3">
              <button className="btn btn-danger">logout</button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
