import React from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@material-ui/core";
import { ChartLine } from "../../../charts/index"; // Using your existing ChartLine component

export default function BloodSugarLogs({ bloodSugarLogs }) {
  console.log("bloodSugarLogs", bloodSugarLogs);

  const formattedData = bloodSugarLogs.map((log) => ({
    date: log.date,
    bloodSugarLevel: log.bloodSugarLevel,
  }));

  const chartOptions = {
    xaxis: {
      categories: formattedData.map((log) => log.date), // Dates for X-axis
    },
    chart: {
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: "smooth",
    },
    markers: {
      size: 4,
    },
    dataLabels: {
      enabled: true,
    },
    tooltip: {
      x: {
        format: "dd/MM/yy",
      },
    },
  };

  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Blood Sugar Logs
        </Typography>

        {bloodSugarLogs && bloodSugarLogs.length > 0 ? (
          <>
            {/* Chart Section using ChartLine */}
            <ChartLine
              series={[
                {
                  name: "Blood Sugar Level",
                  data: formattedData.map((log) => log.bloodSugarLevel), // Blood sugar levels for Y-axis
                },
              ]}
              options={chartOptions}
            />

            {/* List Section */}
            <List>
              {bloodSugarLogs.map((log, index) => (
                <React.Fragment key={index}>
                  <ListItem>
                    <ListItemText
                      primary={`Date: ${log.date}`}
                      secondary={`Blood Sugar Level: ${log.bloodSugarLevel} mg/dL`}
                    />
                  </ListItem>
                  {index !== bloodSugarLogs.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          </>
        ) : (
          <Typography variant="body2" color="textSecondary">
            No blood sugar logs available.
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}
