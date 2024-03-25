"use client";

import React, { useEffect } from "react";
import ApexCharts from "apexcharts";
import ReactApexChart from "react-apexcharts";

const TopLinks = () => {
  const options = {
    series: [
      {
        name: "Income",
        color: "#EB00EF",
        data: ["1420", "1620", "1820", "1420", "1650", "2120"],
      },
      {
        name: "Expense",
        data: ["788", "810", "866", "788", "1100", "1200"],
        color: "#0067DE",
      },
    ],
    chart: {
      sparkline: {
        enabled: false,
      },
      type: "bar",
      height: 400,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        columnWidth: "100%",
        borderRadius: 6,
      },
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (val: any) {
          return val;
        },
      },
    },
    xaxis: {
      categories: ["Instagram", "Twitter", "Linkvertex", "Tiktok", "Snapchat", "Facebook"],
      labels: {
        formatter: function (val: any) {
          return val;
        },
      },
    },
    yaxis: {
      labels: {
        show: true,
      },
    },
  };

  useEffect(() => {
    if (typeof ApexCharts !== "undefined") {
      const chart = new ApexCharts(document.querySelector("#bar-chart"), options);
      chart.render();
    }
  }, []);

  return (
    <div className="w-full rounded-[24px] bg-white p-6 shadow dark:bg-gray-800 md:p-6">
      <div className="flex justify-between border-b border-gray-200 pb-3 dark:border-gray-700">
        <dl>
          <dt className="pb-1 text-base font-normal text-gray-500 dark:text-gray-400">Top Referrers</dt>
        </dl>
      </div>
      <div id="bar-chart">
        {/*// @ts-ignore*/}
        <ReactApexChart options={options} series={options.series} type="bar" height={400} />
      </div>
    </div>
  );
};

export default TopLinks;
