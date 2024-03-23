import React, { useState } from "react";

import { Lock } from "lucide-react";

import Chart from "react-apexcharts";
import { CardHeader, Typography } from "@material-tailwind/react";

const DeviceChart = () => {
  const initialSeries = [35.1, 23.5, 2.4, 5.4];
  const labels = ["Tablet", "Mobile", "Other", "Desktop"];

  const [series, setSeries] = useState(initialSeries);

  const chartOptions = {
    colors: ["#1C64F2", "#16BDCA", "#FDBA8C", "#E74694"],
    chart: {
      type: "donut",
      height: 320,
    },
    stroke: {
      colors: ["transparent"],
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              show: true,
              offsetY: 20,
            },
            total: {
              showAlways: true,
              show: true,
              label: "Unique visitors",
              formatter: (w: any) => {
                const sum = w.globals.seriesTotals.reduce((a: any, b: any) => a + b, 0);
                return `${sum}k`;
              },
            },
            value: {
              show: true,
              offsetY: -20,
              formatter: (value: any) => `${value}k`,
            },
          },
          size: "80%",
        },
      },
    },
    legend: {
      position: "bottom",
    },
    labels,
    dataLabels: {
      enabled: false,
    },
  };

  return (
    <div className="traffic-analysis-chart rounded-[25px] bg-white pb-6">
      <CardHeader floated={false} shadow={false} color="transparent" className="border-style flex flex-col gap-4 p-6 md:flex-row md:items-center">
        <div className="w-max rounded-lg bg-[#502374] p-5 text-white">
          <Lock className="h-6 w-6" />
        </div>
        <div>
          <Typography variant="h6" color="blue-gray">
            Line Chart
          </Typography>
          <Typography variant="small" color="gray" className="max-w-sm font-normal">
            Visualize your data in a simple way using the @material-tailwind/react chart plugin.
          </Typography>
        </div>
      </CardHeader>
      {/*// @ts-ignore*/}
      <Chart options={chartOptions} series={series} type="donut" height={320} />
    </div>
  );
};

export default DeviceChart;
