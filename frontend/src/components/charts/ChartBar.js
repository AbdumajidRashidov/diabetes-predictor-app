import { merge } from "lodash";
import ReactApexChart from "react-apexcharts";
//
import BaseOptionChart from "./BaseOptionChart";

// ----------------------------------------------------------------------

const CHART_DATA = [
  { data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380] },
];

export default function ChartBar({ series, options, isHorizontal = true }) {
  const chartOptions = merge(BaseOptionChart(), {
    stroke: { show: false },
    plotOptions: {
      bar: { horizontal: isHorizontal, barHeight: "30%" },
    },
    xaxis: {
      categories: options
        ? [...options.xaxis.categories]
        : [
            "Italy",
            "Japan",
            "China",
            "Canada",
            "France",
            "Germany",
            "South Korea",
            "Netherlands",
            "United States",
            "United Kingdom",
          ],
    },
  });

  return (
    <ReactApexChart
      type="bar"
      series={series ? series : CHART_DATA}
      options={chartOptions}
      height={320}
    />
  );
}
