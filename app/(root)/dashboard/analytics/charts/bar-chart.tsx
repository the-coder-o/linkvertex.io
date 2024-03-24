"use client";

import React, { useEffect, useRef } from "react";

export default function BarChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    const options = {
      grid: {
        show: true,
        strokeDashArray: 4,
      },
      series: [
        {
          name: "Unique Views",
          data: [1500, 1418, 1456, 1526, 1356, 1256],
          color: "#1A56DB",
        },
        {
          name: "Total Clicks",
          data: [643, 413, 765, 412, 1423, 1731],
          color: "#7E3BF2",
        },
        {
          name: "Total Views",
          data: [158, 158, 45, 155, 1007, 125],
          color: "#EB00EF",
        },
      ],
      chart: {
        type: "area",
        fontFamily: "Inter, sans-serif",
      },
      tooltip: {
        enabled: true,
        x: {
          show: false,
        },
      },
      legend: {
        show: true,
      },
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.55,
          opacityTo: 0,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 6,
      },
      yaxis: {
        labels: {
          formatter: function (value: any) {
            return value;
          },
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
      <div className="mb-5 flex justify-between">
        <div>
          <h5 className="pb-2 text-3xl font-bold leading-none text-gray-900 dark:text-white">12,423k</h5>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">Sales this week</p>
        </div>
        <div className="flex items-center px-2.5 py-0.5 text-center text-base font-semibold text-green-500 dark:text-green-500">23%</div>
      </div>
      <div ref={chartRef}></div>
    </div>
  );
}
