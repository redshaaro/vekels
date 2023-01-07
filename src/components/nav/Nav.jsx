import React from "react";
import logo from "../../assets/logo.png";
import profile from "../../assets/portrait-handsome-european-male-student-has-gentle-smile-face-happy-hear-pleasant-news-stands-delighted-wears-round-spectacles-orange-jumper.png";
import styles from './nav.module.css'
const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <img src={logo} alt="nth to preview" />
        <h1>Motiv.</h1>
      </div>
      <div className={styles.mid}>
        <form>
          <input type="text" placeholder="search or type" />
        </form>
      </div>
      <div className={styles.right}>
        <i class="fa-solid fa-bell"></i>
        <img src={profile} alt="" />
      </div>
    </nav>
  );
};

export default Nav;
