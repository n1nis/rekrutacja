import React from "react";
import classes from "./Filtres.module.css";

const Filtres = () => {
  const generateCheckboxes = (count, sectionName) => {
    const checkboxes = [];
    for (let i = 1; i <= count; i++) {
      const id = `${sectionName}${i}`;
      checkboxes.push(
        <div className={classes.checkboxes} key={id}>
          <input type="checkbox" id={id} name={id} />
          <label htmlFor={id}>Rodzaj obiektu (125)</label>
        </div>
      );
    }
    return checkboxes;
  };

  return (
    <div className={classes.filtres}>
      <h3>FILTRY</h3>
      <h4>Rodzaj obiektu</h4>
      {generateCheckboxes(8, "kindObject")}
      <h4>Cena</h4>
      <div className={classes.prices}>
        <input type="number" placeholder="Od" />
        -
        <input type="number" placeholder="Do" />
      </div>
      <h4>Udogodnienia</h4>
      {generateCheckboxes(12, "amenities")}
    </div>
  );
};

export default Filtres;
