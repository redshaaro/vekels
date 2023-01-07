import React from "react";
import styles from "./side.module.css";
import { useAppContext } from "../../context/appContext";
 

const Sidebar = () => {
  const { tabHandler } = useAppContext();
  return (
    <div className={styles.sideContainer}>
      <div className={styles.top}>
        <div onClick={()=>{tabHandler('dashboard')}}>
          <i class="fa-solid fa-gauge"></i>
          <p>Dashboard</p>
        </div>
        <div>
          <i class="fa-regular fa-user"></i>
          <p>Assets</p>
        </div>
        <div onClick={()=>{tabHandler('booking')}}>
          <i class="fa-solid fa-car"></i>
          <p>Booking</p>
        </div>
        <div>
          <i class="fa-solid fa-bag-shopping"></i>
          <p>Sell cars</p>
        </div>
        <div>
          <i class="fa-solid fa-cart-shopping"></i>
          <p>Buy cars</p>
        </div>
        <div>
          <i class="fa-solid fa-plug"></i>
          <p>Services</p>
        </div>
        <div>
          <i class="fa-solid fa-calendar-days"></i>
          <p>Calendar</p>
        </div>
        <div>
          <i class="fa-solid fa-message"></i>
          <p>Messages</p>
        </div>
      </div>
      <div className={styles.bottom}>
        <div>
        <i class="fa-solid fa-gear"></i>
        <p>Settings</p>
        </div>
       <div>
        <i class="fa-solid fa-right-from-bracket"></i>
        <p>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
