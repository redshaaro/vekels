import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import styles from './area.module.css'

const Areachart = () => {
  const data = [
    {
      name: "7am",
      dummy: 4000,
    },
    {
      name: "9am",
      dummy: 3000,
    },
    {
      name: "11am",
      dummy: 2000,
    },
    {
      name: "1pm",
      dummy: 2780,
    },
    {
      name: "3pm",
      dummy: 1890,
    },
    {
      name: "5pm",
      dummy: 2390,
    },
    {
      name: "7pm",
      dummy: 3490,
    },
    {
      name: "9pm",
      dummy: 3490,
    },
  ];
  return (
    <div className={styles.barCardContainer}>
      <div>
      <h1 className={styles.cardheader} >
        <span>Miles</span> Statistics
      </h1>
      <div className={styles.tools}>
        
        <div className={styles.right}>
          <p>20 February 2022</p>

        </div>
        <div className={styles.left}>
          <span className={styles.specialbtn}>Day</span>

          <span className={styles.span} >Week</span>
          <span className={styles.span} >Month</span>
        </div>
      </div>
      <AreaChart
        width={400}
        height={300}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colordummy" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />

        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="dummy"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colordummy)"
        />
      </AreaChart>
    </div>
    </div>
    
  );
};

export default Areachart;
