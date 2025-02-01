import React from "react";
import "./Header.css";
import { LuBaggageClaim } from "react-icons/lu";
import { useSelector } from "react-redux";
const Header = () => {
  const countProdyct = useSelector((state) => state.counter.countProduct);
  return (
    <>
      <nav className="navbar">
        <div className="container head">
          <a className="navbar-brand" href="#">
            UseReducer
          </a>
          <div className="bag">
            <LuBaggageClaim size={50} color={"blueviolet"} />
            <p>{countProdyct}</p>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
