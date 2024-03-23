import { CardBody, CardHeader, Typography } from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { Lock } from "lucide-react";

const chartConfig = {
  type: "bar",
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
    plotOptions: {
      bar: {
        columnWidth: "40%",
        borderRadius: 2,
      },
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

export default function SubscribeChart() {
  return (
    <div className={"rounded-[25px] bg-white"}>
      <CardHeader floated={false} shadow={false} color="transparent" className="flex flex-col gap-4 rounded-none p-6 md:flex-row md:items-center">
        <div className="w-max rounded-lg bg-[#502374] p-5 text-white">
          <Lock className="h-6 w-6" />
        </div>
        <div>
          <Typography variant="h6" color="blue-gray">
            Bar Chart
          </Typography>
          <Typography variant="small" color="gray" className="max-w-sm font-normal">
            Visualize your data in a simple way using the @material-tailwind/react chart plugin.
          </Typography>
        </div>
      </CardHeader>
      <CardBody className="px-2 pb-0">
        {/*// @ts-ignore*/}
        <Chart {...chartConfig} />
      </CardBody>
    </div>
  );
}
