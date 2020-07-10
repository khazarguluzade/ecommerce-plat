import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        MAĞAZA
      </Link>
      <Link className="option" to="/123">
        İLETİŞİM
      </Link>
      <Link className="option" to="/signin">
        HESABIM
      </Link>
    </div>
  </div>
);

export default Header;
