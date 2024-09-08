import { merge } from "lodash";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
// material
import { Card, CardHeader, Box, TextField } from "@material-ui/core";
//
import { BaseOptionChart } from "../../charts";

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    year: 2023,
    data: [
      { name: "Tashkent", data: [10, 41, 35, 51, 49, 62, 69, 91, 148] },
      { name: "Bukhara", data: [10, 34, 13, 56, 77, 88, 99, 77, 45] },
      { name: "Samarkand", data: [23, 35, 36, 45, 98, 88, 68, 72, 51] },
    ],
  },
  {
    year: 2024,
    data: [
      { name: "Tashkent", data: [148, 91, 69, 62, 49, 51, 35, 41, 10] },
      { name: "Bukhara", data: [45, 77, 99, 88, 77, 56, 13, 34, 10] },
      { name: "Samarkand", data: [16, 33, 56, 56, 70, 78, 80, 81, 67] },
    ],
  },
];

export default function AppAreaInstalled() {
  const [seriesData, setSeriesData] = useState(2024);

  const handleChangeSeriesData = (event) => {
    setSeriesData(Number(event.target.value));
  };

  const chartOptions = merge(BaseOptionChart(), {
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
  });

  return (
    <Card>
      <CardHeader
        title="Health data activity by region"
        subheader="(+43%) than last year"
        action={
          <TextField
            select
            fullWidth
            value={seriesData}
            SelectProps={{ native: true }}
            onChange={handleChangeSeriesData}
            sx={{
              "& fieldset": { border: "0 !important" },
              "& select": {
                pl: 1,
                py: 0.5,
                pr: "24px !important",
                typography: "subtitle2",
              },
              "& .MuiOutlinedInput-root": {
                borderRadius: 0.75,
                bgcolor: "background.neutral",
              },
              "& .MuiNativeSelect-icon": {
                top: 4,
                right: 0,
                width: 20,
                height: 20,
              },
            }}
          >
            {CHART_DATA.map((option) => (
              <option key={option.year} value={option.year}>
                {option.year}
              </option>
            ))}
          </TextField>
        }
      />

      {CHART_DATA.map((item) => (
        <Box key={item.year} sx={{ mt: 3, mx: 3 }} dir="ltr">
          {item.year === seriesData && (
            <ReactApexChart
              type="line"
              series={item.data}
              options={chartOptions}
              height={364}
            />
          )}
        </Box>
      ))}
    </Card>
  );
}
