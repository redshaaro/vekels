import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import styles from "./Bar.module.css";

const MyBar = () => {
  const data = [
    {
      name: "1pm",
      Miles: 4000,
    },
    {
      name: "2pm",
      Miles: 3000,

      amt: 2210,
    },
    {
      name: "3pm",
      Miles: 2000,

      amt: 2290,
    },
    {
      name: "4pm",
      Miles: 2780,

      amt: 2000,
    },
    {
      name: "5pm",
      Miles: 1890,

      amt: 2181,
    },
    {
      name: "6pm",
      Miles: 2390,

      amt: 2500,
    },
    {
      name: "7pm",
      Miles: 3490,

      amt: 2100,
    },
  ];
  return (
    <div className={styles.barCardContainer}>
      <div>
      <h1 className={styles.cardheader} >
        <span>Miles</span> Statistics
      </h1>
      <div className={styles.tools}>
        <div className={styles.left}>
          <span className={styles.specialbtn}>Day</span>

          <span className={styles.span} >Week</span>
          <span className={styles.span} >Month</span>
        </div>
        <div className={styles.right}>
          <p>256 Miles</p>

        </div>
      </div>
      <BarChart
        width={488}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" />

        <Tooltip />

        <Bar dataKey="Miles" fill="#2884FF" />
      </BarChart>
    </div>
    </div>
  );
};

export default MyBar;
