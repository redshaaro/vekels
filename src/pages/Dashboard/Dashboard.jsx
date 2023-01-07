import React from "react";
import Booking from "../../components/Booking/Booking/Booking";
import Optiondash from "../../components/Dashboard/Optiondash";
import Nav from "../../components/nav/Nav";
import Sidebar from "../../components/sidebar/Sidebar";
import { useAppContext } from "../../context/appContext";

import styles from "./dashboard.module.css";

const Dashboard = () => {
  const { booking,dashboard } = useAppContext();

  return (
    <div>
      <Nav></Nav>
      <div className={styles.divider}>
        <Sidebar></Sidebar>

        {booking && <Booking></Booking> } 
        {dashboard && <Optiondash></Optiondash>}
        
         
         
        
        
      </div>
    </div>
  );
};

export default Dashboard;
