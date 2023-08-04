import React from "react";
import classes from "./Accommodation.module.css";
import { FaRegHeart } from "react-icons/fa";

const Card = () => {
  return (
    <div className={classes.card}>
      <div className={classes.image}>
        <div className={classes.pos}>
          <FaRegHeart color="red" size={26} />
        </div>
      </div>
      <div className={classes.cardInfo}>
        <div className={classes.cardInfoTitle}>
          <h3>NAZWA</h3>
          <h3>
            ocena <span>8,8</span>
          </h3>
        </div>
        <h5>Adres lorem ipsum</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          porttitor, dolor nec fermentum finibus, turpis dui efficitur magna,
          quis bibendum arcu mauris non est. Proin pulvinar massa augue. Vivamus
          eleifend nec ex et lobortis. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Curabitur ac nulla sit amet risus dictum porta vitae
          vestibulum nunc.
        </p>
        <div className={classes.bottomInfo}>
          <div className={classes.bottomLeftInfo}>
            <div className={classes.smallImage}></div>
            <div className={classes.smallImage}></div>
            <div className={classes.smallImage}></div>
          </div>
          <div className={classes.bottomRightInfo}>
            <h3>Cena od 200zł</h3>
            <button>Zobacz nocleg</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
