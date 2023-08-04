import React from "react";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.nav}>
      <div className={classes.left}>
        <a href="/">
          <h1>Rentali.pl</h1>
        </a>
      </div>
      <div className={classes.right}>
        <a href="/">NOCLEGI</a>
        <a href="/">ZALOGUJ SIĘ</a>
      </div>
    </div>
  );
};

export default Navbar;
