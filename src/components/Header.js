import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { getAuth } from "firebase/auth";
import "../styles/Header.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Button from "@mui/material/Button";
function Header() {
  // eslint-disable-next-line
  const [{ basket, user }, dispatch] = useStateValue();
  const auth = getAuth();
  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon logo"
        />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Button>
          English
          <ArrowDropDownIcon fontSize="small" />
        </Button>
        <Link to={!user && "/login"}>
          <div className="header__option" onClick={handleAuth}>
            <span className="header__optionLine1">
              Hello,{" "}
              <strong style={{ color: "#F8F9D7" }}>
                {user ? auth.currentUser.displayName : "Guest"}
              </strong>
            </span>
            <span className="header__optionLine2">
              {user ? "Sign Out" : "Sign-In"}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLine1">Returns</span>
          <span className="header__optionLine2">and Orders</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingCartOutlinedIcon style={{ color: "white" }} />
            <span className="header__optionLine2 header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
