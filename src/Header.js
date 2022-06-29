import React from "react";
import "./Header.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="amazon logo"
      />
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <img
          className="indian__flag"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1024px-Flag_of_India.svg.png"
          alt="Indian flag"
        />
        <ArrowDropDownIcon className="flag__Arrow" style={{ color: "grey" }} />
        <div className="header__option">
          <span className="header__optionLine1">Hello, user</span>
          <span className="header__optionLine2">Accounts and Lists</span>
        </div>
        <div className="header__option">
          <span className="header__optionLine1">Returns</span>
          <span className="header__optionLine2">and Orders</span>
        </div>
        <div className="header__optionBasket">
          <ShoppingCartOutlinedIcon style={{ color: "white" }} />
          <span className="header__optionLine2 header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
