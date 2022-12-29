import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./stateProvider";
import { auth } from "./firebase";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div>
      <div className="header">
        <Link to="/">
          <img
            className="header__logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
        </Link>

        <div className="header__search">
          <input
            className="header__searchInput"
            type="text"
            placeholder="Search"
          />
          <SearchIcon className="header__searchIcon" />
        </div>

        <div className="header__nav">
          <Link to="/login">
            <div className="header__option">
              <span className="header__optionOnLine1">
                Hello {!user ? "Guest" : user.email + ","},
              </span>
              <span
                onClick={handleAuthentication}
                className="header__optionOnLine2"
              >
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>

          <div className="header__option">
            <span className="header__optionOnLine1">Returns</span>
            <span className="header__optionOnLine2">& Orders</span>
          </div>

          <div className="header__option">
            <span className="header__optionOnLine1">Your</span>
            <span className="header__optionOnLine2">Prime</span>
          </div>

          <Link to="/checkout">
            <div className="header__optionBasket">
              {/* <ShoppingBasketIcon /> */}
              <AddShoppingCartIcon />
              <span className="header__optionLineBasketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
