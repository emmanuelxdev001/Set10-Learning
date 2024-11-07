import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { FC } from "react";

import { Bar } from "react-chartjs-2";

Chart.register(CategoryScale);

export default function ChartApp() {
  const dataMain = {
    labels: ["Red", "Orange", "Blue"],

    datasets: [
      {
        label: "Popularity of colours",
        data: [55, 56, 10, 43, 23, 96],

        backgroundColor: [
          "rgba(25, 85, 15, 0.6)",
          "rgba(255, 255, 255, 0.6)",
          "rgba(255, 255, 255, 0.6)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="App">
      <BarChart chartData={dataMain} />
    </div>
  );
}

export const BarChart: FC<any> = ({ chartData }) => {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Bar Chart</h2>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020",
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
};
