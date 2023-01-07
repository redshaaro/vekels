import React from "react";
import styles from "./recom.module.css";
import img1 from "../../assets/carwhite.png";
import img2 from "../../assets/carsilver.png";
import img3 from "../../assets/carred.png";

const Recom = () => {
  return (
    <div className={styles.recomContainer}>
      <div className={styles.card1}>
        <div className={styles.top}>
          <i class="fa-solid fa-arrows-turn-to-dots"></i>
          <p>64% recommended</p>
        </div>
        <div className={styles.mid}>
          <img src={img1} alt="" />
        </div>
        <div className={styles.bottom}>
          <p>Mini cooper</p>
          <div className={styles.details}>
            <div className={styles.detailsleft}>
              <i class="fa-solid fa-arrows-turn-to-dots"></i>
              <p>132k</p>
              <i class="fa-solid fa-plus"></i>
              <i class="fa-solid fa-bolt"></i>
            </div>
            <div className={styles.detailsright}>
              <span className={styles.price}>$32/h</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.card2}>
        <div className={styles.top}>
          <i class="fa-solid fa-arrows-turn-to-dots"></i>
          <p>64% recommended</p>
        </div>
        <div className={styles.mid}>
          <img src={img2} alt="" />
        </div>
        <div className={styles.bottom}>
          <p>Mini cooper</p>
          <div className={styles.details}>
            <div className={styles.detailsleft}>
              <i class="fa-solid fa-arrows-turn-to-dots"></i>
              <p>132k</p>
              <i class="fa-solid fa-plus"></i>
              <i class="fa-solid fa-bolt"></i>
            </div>
            <div className={styles.detailsright}>
              <span className={styles.price}>$32/h</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.card3}>
        <div className={styles.top}>
          <i class="fa-solid fa-arrows-turn-to-dots"></i>
          <p>64% recommended</p>
        </div>
        <div className={styles.mid}>
          <img src={img3} alt="" />
        </div>
        <div className={styles.bottom}>
          <p>Mini cooper</p>
          <div className={styles.details}>
            <div className={styles.detailsleft}>
              <i class="fa-solid fa-arrows-turn-to-dots"></i>
              <p>132k</p>
              <i class="fa-solid fa-plus"></i>
              <i class="fa-solid fa-bolt"></i>
            </div>
            <div className={styles.detailsright}>
              <span className={styles.price}>$32/h</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recom;
