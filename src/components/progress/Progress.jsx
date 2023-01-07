import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import styles from "./prog.module.css";
import "react-circular-progressbar/dist/styles.css";

const Progress = () => {
  const percentage = 45;
  const percentage2 = 80;

  const percentage3 = 9;

  const percentage4 = 25;

  
  return (
    <div className={styles.progContainer}>
      <div className={styles.card}>
        <i class="fa-solid fa-bolt"></i>
        <p>Energy</p>

        <div style={{ width: 200, height: 200 }}>
          <CircularProgressbar
            className={styles.progedit}
            value={percentage}
            text={`${percentage}%`}
            styles={{ path: { stroke: `#fff` }, text: { fill: `#fff` } }}
          />
        </div>
      </div>
      <div className={styles.card2}>
         
      <i   class="fa-solid fa-arrows-up-down"></i>
        <p>Energy</p>

        <div style={{ width: 200, height: 200 }}>
          <CircularProgressbar
            className={styles.progedit}
            value={percentage2}
            text={`${percentage2}%`}
            styles={{ path: { stroke: `#FF7E86` }, text: { fill: `#242731` } }}
          />
        </div>
        
      </div>

      <div className={styles.card2}>
      <i className={styles.icon3} class="fa-solid fa-droplet"></i>
        <p>Energy</p>

        <div style={{ width: 200, height: 200 }}>
          <CircularProgressbar
            className={styles.progedit}
            value={percentage3}
            text={`${percentage3}%`}
            styles={{ path: { stroke: `#A162F7` }, text: { fill: `#242731` } }}
          />
        </div>
        
      </div>
      <div className={styles.card2}>
      <i className={styles.icon4} class="fa-solid fa-car"></i>
        <p>Energy</p>

        <div style={{ width: 200, height: 200 }}>
          <CircularProgressbar
            className={styles.progedit}
            value={percentage4}
            text={`${percentage4}%`}
            styles={{ path: { stroke: `#F6CC0D` }, text: { fill: `#242731` } }}
          />
        </div>
        
      </div>
    </div>
  );
};

export default Progress;
