"use client";

import React from "react";

import { Lock } from "lucide-react";

import Chart from "react-apexcharts";
import { CardBody, CardHeader, Typography } from "@material-tailwind/react";

const chartConfig = {
  type: "line",
  height: 240,
  series: [
    {
      name: "Sales",
      data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    title: {
      show: "",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#502374"],
    stroke: {
      lineCap: "round",
      curve: "smooth",
    },
    markers: {
      size: 0,
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#502374",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
      categories: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    },
    yaxis: {
      labels: {
        style: {
          colors: "#502374",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#502374",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: "dark",
    },
  },
};

export default function BarChart() {
  return (
    <div className={"rounded-[25px] bg-white"}>
      <CardHeader floated={false} shadow={false} color="transparent" className="border-style flex flex-col gap-4 p-6 md:flex-row md:items-center" children={undefined} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <div className="w-max rounded-lg bg-[#502374] p-5 text-white">
          <Lock className="h-6 w-6" />
        </div>
        <div>
          <Typography variant="h6" color="blue-gray" children={undefined} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            Line Chart
          </Typography>
          <Typography variant="small" color="gray" className="max-w-sm font-normal" children={undefined} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            Visualize your data in a simple way using the @material-tailwind/react chart plugin.
          </Typography>
        </div>
      </CardHeader>
      <CardBody className="px-2 pb-0" children={undefined} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        {/*// @ts-ignore*/}
        <Chart {...chartConfig} />
      </CardBody>
    </div>
  );
}
