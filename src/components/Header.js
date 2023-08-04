import React from "react";
import classes from "./Header.module.css";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.inputs}>
        <div className={classes.inputsContainer}>
          <div className={classes.upperInputs}>
            <input
              type="text"
              placeholder="Miejscowość, ulica, region"
              className={classes.widerInput}
            />
            <input type="text" placeholder="Od - do" />
            <input type="text" placeholder="Dorośli" />
            <input type="text" placeholder="Dzieci" />
          </div>
          <div className={classes.moreInfo}>
            <IoIosArrowDown size={20} /> Dodatkowe opcje filtrowania
          </div>
          <div className={classes.lowerInputs}>
            <input type="text" placeholder="Rodzaj obiektu" />
            <input type="text" placeholder="Udogodnienia" />
          </div>
          <div className={classes.moreInfo}>
            <AiOutlineClose /> Wyczyść
          </div>
        </div>
        <div className={classes.buttonContainer}>
          <button>Szukaj</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
