import React, { useState, memo } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/header-logo.png";
import SearchSection from "./SearchSection";
import { useGetSearchProductsQuery } from "../../context/api/productsApi";

const Header = () => {
  // const [showSearch, setShowSearch] = useState(false);
  const [value, setValue] = useState("");
  let { data } = useGetSearchProductsQuery({ q: value });
  return (
    <div>
      <header>
        <div className="container">
          <nav>
            <div className="nav-links">
              <NavLink className="nav-link" to={"/"}>
                Home
              </NavLink>
              <a className="nav-link">Contact</a>
              <a className="nav-link">Blog</a>
            </div>
            <NavLink to={"/"}>
              <img src={logo} alt="header-logo" />
            </NavLink>
            <form className="header-form">
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                // onFocus={() => setShowSearch(true)}
                // onBlur={() => setShowSearch(false)}
                className="header-input"
                type="text"
                placeholder="Search Product"
              />
              <button className="search">Search</button>
              {value.trim() ? (
                <SearchSection setValue={setValue} data={data?.products} />
              ) : (
                <></>
              )}
            </form>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default memo(Header);
