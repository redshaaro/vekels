import React from "react";
import styles from "./card.module.css";
import car from "../../assets/white car.png";

const Card = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.top}>
        <h3>Porche 718 Cayman S</h3>
        <i class="fa-regular fa-heart"></i>
      </div>
      <div className={styles.sub}>
        <p>Coupe</p>
      </div>
      <div className={styles.img}>
        <img src={car} alt="" />
      </div>
      <div className={styles.bottom}>
        <div className={styles.left}>
          <i class="fa-regular fa-user"></i>
          <span>4</span>
          <i class="fa-solid fa-arrows-turn-to-dots"></i>
          <span>Manual</span>
        </div>
        <div className={styles.right}>
          <p className={styles.rightp}>
            <span className={styles.special}>$400</span>/d
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
