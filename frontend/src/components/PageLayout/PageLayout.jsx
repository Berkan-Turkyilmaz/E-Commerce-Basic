import React, { useState } from "react";
import { IoStorefront } from "react-icons/io5";
import { MdOutlineLightMode } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";
import "./PageLayout.css";

function PageLayout() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div style={{ background: isDarkMode ? 
      "linear-gradient(to right, #0d0d0d, #003300)" :
    "linear-gradient(to right, #2E3192 ,#1095ca)"  }} 
    className="page-layout">

      <div className="header">
        <div className="logo">
          <span>PRODUCT STORE</span>
          <IoStorefront size={35} />
        </div>
        <div>
          <Link to="/" className="link">
            HOMEPAGE
          </Link>
        </div>
        <div className="header-buttons">
          <Link to="/add-product" className="add-product-button">
            <IoMdAdd color="white" />
          </Link>
          {isDarkMode ? (
            <div
              className="mode-toggle-button"
              onClick={() => setIsDarkMode(false)}
            >
              <MdOutlineLightMode />
            </div>
          ) : (
            <div
              className="mode-toggle-button"
              onClick={() => setIsDarkMode(true)}
            >
              <MdDarkMode />
            </div>
          )}
        </div>
      </div>
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
}

export default PageLayout;
