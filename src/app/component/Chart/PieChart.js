"use client";

import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
// const labels = ["January", "February", "March", "April", "May", "June"];
const data = {
  // labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(0,0,255)",
      data: [5, 5, 5],
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  scales: {
    y: {
      stacked: true,
      grid: {
        display: true,
        color: "rgba(255,99,132,0.15)",
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
};
const PieChart = () => {
  return (
    <div>
      <Pie data={data} options={options} />
    </div>
  );
};
export default PieChart;
