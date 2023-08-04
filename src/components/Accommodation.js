import React from "react";
import classes from "./Accommodation.module.css";
import Card from "./Card";
import Advertisement from "./Advertisement";
import { BsSortUp } from "react-icons/bs";

const Accommodation = () => {
  return (
    <div className={classes.accommodation}>
      <div className={classes.mainHeader}>
        <h3>NOCLEGI</h3>
        <div className={classes.flex}>
          <BsSortUp size={26} />
          <h3>SORTOWANIE</h3>
        </div>
      </div>
      <Card isTransparent={true} />
      <Card isTransparent={true}/>
      <Advertisement />
      <Card isTransparent={false}/>
    </div>
  );
};

export default Accommodation;
