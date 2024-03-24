import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

const SubscribeChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const options = {
      colors: ["#1A56DB", "#EB00EF"],
      series: [
        {
          name: "Subscribers",
          color: "#1A56DB",
          data: [
            { x: "Mon", y: 231 },
            { x: "Tue", y: 122 },
            { x: "Wed", y: 63 },
            { x: "Thu", y: 421 },
            { x: "Fri", y: 122 },
            { x: "Sat", y: 323 },
            { x: "Sun", y: 111 },
          ],
        },
        {
          name: "Notifications",
          color: "#EB00EF",
          data: [
            { x: "Mon", y: 232 },
            { x: "Tue", y: 113 },
            { x: "Wed", y: 341 },
            { x: "Thu", y: 224 },
            { x: "Fri", y: 522 },
            { x: "Sat", y: 411 },
            { x: "Sun", y: 243 },
          ],
        },
      ],
      chart: {
        type: "bar",
        height: "320px",
        fontFamily: "Inter, sans-serif",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "70%",
          borderRadiusApplication: "end",
          borderRadius: 8,
        },
      },
    };

    if (chartRef.current) {
      const chart = new ApexCharts(chartRef.current, options);
      chart.render();
    }
  }, []);

  return (
    <div className="w-full rounded-[24px] bg-white p-6 shadow dark:bg-gray-800 md:p-6">
      <div id="column-chart" ref={chartRef}></div>
    </div>
  );
};

export default SubscribeChart;
