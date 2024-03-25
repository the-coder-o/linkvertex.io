"use client";

import React from "react";
import Chart from "react-apexcharts";

const SocialIcons = () => {
  const chartOptions = {
    series: [90, 85, 70, 25, 58, 92],
    options: {
      colors: ["#1C64F2", "#16BDCA", "#7E3BF2", "#EB00EF"],
      chart: {
        height: "380px",
        type: "radialBar",
        sparkline: {
          enabled: true,
        },
      },
      plotOptions: {
        radialBar: {
          track: {
            background: "#E5E7EB",
          },
          dataLabels: {
            show: false,
          },
          hollow: {
            margin: 0,
            size: "32%",
          },
        },
      },
      grid: {
        show: false,
      },
      labels: ["Twitter", "Instagram", "Youtube", "Tiktok", "Linkedin", "Email Address"],
      legend: {
        show: true,
        position: "bottom",
        fontFamily: "Inter, sans-serif",
      },
      tooltip: {
        enabled: true,
        x: {
          show: false,
        },
      },
      yaxis: {
        show: false,
        labels: {
          formatter: function (value: any) {
            return value + "%";
          },
        },
      },
    },
  };

  return (
    <div className="w-full rounded-[24px] bg-white p-6 shadow dark:bg-gray-800 md:p-6">
      <div className="mb-3 flex justify-between">
        <div className="flex items-center">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Social Icons</h5>
        </div>
      </div>
      <div className="mb-2 grid grid-cols-6 gap-3 max-sm:grid-cols-1">
        <div className="flex h-[78px] flex-col items-center justify-center rounded-lg bg-orange-50 dark:bg-gray-600">
          <div className="mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-sm font-medium text-orange-600 dark:bg-gray-500 dark:text-orange-300">12</div>
          <div className="text-sm font-medium text-orange-600 dark:text-orange-300">Tiktok</div>
        </div>
        <div className="flex h-[78px] flex-col items-center justify-center rounded-lg bg-teal-50 dark:bg-gray-600">
          <div className="mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 text-sm font-medium text-teal-600 dark:bg-gray-500 dark:text-teal-300">23</div>
          <div className="text-sm font-medium text-teal-600 dark:text-teal-300">Instagram</div>
        </div>
        <div className="flex h-[78px] flex-col items-center justify-center rounded-lg bg-blue-50 dark:bg-gray-600">
          <div className="mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-600 dark:bg-gray-500 dark:text-blue-300">64</div>
          <div className="text-sm font-medium text-blue-600 dark:text-blue-300">Youtube</div>
        </div>
        <div className="flex h-[78px] flex-col items-center justify-center rounded-lg bg-pink-50 dark:bg-gray-600">
          <div className="mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-600 dark:bg-gray-500 dark:text-blue-300">25</div>
          <div className="text-sm font-medium text-blue-600 dark:text-blue-300">Twitter</div>
        </div>
        <div className="flex h-[78px] flex-col items-center justify-center rounded-lg bg-pink-50 dark:bg-gray-600">
          <div className="mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-600 dark:bg-gray-500 dark:text-blue-300">25</div>
          <div className="text-sm font-medium text-blue-600 dark:text-blue-300">Linkedin</div>
        </div>
        <div className="flex h-[78px] flex-col items-center justify-center rounded-lg bg-pink-50 dark:bg-gray-600">
          <div className="mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-600 dark:bg-gray-500 dark:text-blue-300">25</div>
          <div className="text-sm font-medium text-blue-600 dark:text-blue-300">Email Address</div>
        </div>
      </div>
      <div className="py-6">
        {/*// @ts-ignore*/}
        <Chart options={chartOptions?.options} series={chartOptions?.series} type="radialBar" height={380} />
      </div>
    </div>
  );
};

export default SocialIcons;
