import React from "react";
import { userMenu } from "./Menus/userMenu";
import { useLocation, Link } from "react-router-dom";
import "../../../styles/Layout.css";

const Sidebar = () => {
  const location = useLocation();
  return (
    <div>
      <div className="sidebar">
        <div className="menu">
          {userMenu.map((menu) => {
            const isActive = location.pathname === menu.path;
            return (
              <div 
                key={menu.path} // Add a unique key here
                className={`menu-item ${isActive && "active"}`}
              >
                <i className={menu.icon}></i> {/* Fixed className syntax */}
                <Link to={menu.path}>{menu.name}</Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
