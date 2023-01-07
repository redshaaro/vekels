import React from "react";
import Card from "../../cards/Card";
import styles from "./booking.module.css";

const Booking = () => {
  return (
    <div className={styles.bookingContainer}>
      <h1>Booking</h1>
      <div className={styles.controls}>
        <div className={styles.left}>
          <select>
            <option>New</option>
          </select>
          <select>
            <option>Toyota</option>
          </select>
        </div>
        <div className={styles.right}>
          <button className={styles.btn1} ><i class="fa-solid fa-gear"></i></button>
          <button className={styles.btn2} ><i class="fa-solid fa-table-cells-large"></i></button>
        </div>
      </div>
      <div className={styles.catalog}>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        









      </div>





    </div>
  );
};

export default Booking;
