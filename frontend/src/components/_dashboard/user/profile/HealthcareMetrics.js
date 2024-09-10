import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import { ChartLine, ChartPie, ChartBar } from "../../../charts"; // Reuse existing chart components

export default function HealthcareMetrics({ healthMetrics }) {
  const {
    glucose,
    bloodPressure,
    skinThickness,
    insulin,
    bmi,
    dpf,
    bodyFatPercentage,
    bodyTemperature,
    cervicalMucus,
    cervicalPosition,
    heartRate,
  } = healthMetrics;

  // Chart options for Glucose over time
  const glucoseOptions = {
    xaxis: {
      categories: glucose?.map((data) => data.date),
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

  const glucoseSeries = [
    {
      name: "Glucose (mg/dL)",
      data: glucose?.map((data) => data.value),
    },
  ];

  // Chart options for Heart Rate over time
  const heartRateOptions = {
    xaxis: {
      categories: heartRate?.map((data) => data.date),
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

  const heartRateSeries = [
    {
      name: "Heart Rate (bpm)",
      data: heartRate?.map((data) => data.value),
    },
  ];

  // Chart options for BMI (using ChartPie for BMI distribution)
  const bmiOptions = {
    labels: ["Underweight", "Normal", "Overweight", "Obese"],
    chart: {
      toolbar: {
        show: false,
      },
    },
  };

  const bmiSeries = bmi?.length > 0 ? [10, 40, 30, 20] : [0, 0, 0, 0];

  // Chart options for Blood Pressure (Bar Chart)
  const bloodPressureOptions = {
    xaxis: {
      categories: bloodPressure?.map((data) => data.date),
    },
  };

  const bloodPressureSeries = [
    {
      name: "Systolic",
      data: bloodPressure?.map((data) => data.systolic),
    },
    {
      name: "Diastolic",
      data: bloodPressure?.map((data) => data.diastolic),
    },
  ];

  // Chart options for Skin Thickness (Line Chart)
  const skinThicknessOptions = {
    xaxis: {
      categories: skinThickness?.map((data) => data.date),
    },
  };

  const skinThicknessSeries = [
    {
      name: "Skin Thickness (mm)",
      data: skinThickness?.map((data) => data.value),
    },
  ];

  // Chart options for Insulin Levels (Line Chart)
  const insulinOptions = {
    xaxis: {
      categories: insulin?.map((data) => data.date),
    },
  };

  const insulinSeries = [
    {
      name: "Insulin (mU/L)",
      data: insulin?.map((data) => data.value),
    },
  ];

  // Chart options for Body Fat Percentage (Line Chart)
  const bodyFatPercentageOptions = {
    xaxis: {
      categories: bodyFatPercentage?.map((data) => data.date),
    },
  };

  const bodyFatPercentageSeries = [
    {
      name: "Body Fat Percentage",
      data: bodyFatPercentage?.map((data) => data.value),
    },
  ];

  // Chart options for Body Temperature (Line Chart)
  const bodyTemperatureOptions = {
    xaxis: {
      categories: bodyTemperature?.map((data) => data.date),
    },
  };

  const bodyTemperatureSeries = [
    {
      name: "Body Temperature (°C)",
      data: bodyTemperature?.map((data) => data.value),
    },
  ];

  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Healthcare Metrics
        </Typography>
        <Grid container spacing={3}>
          {/* Glucose Levels Section */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" component="div">
              Glucose Levels
            </Typography>
            {glucose?.length > 0 ? (
              <ChartLine series={glucoseSeries} options={glucoseOptions} />
            ) : (
              <Typography>No glucose data available</Typography>
            )}
          </Grid>

          {/* Heart Rate Section */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" component="div">
              Heart Rate
            </Typography>
            {heartRate?.length > 0 ? (
              <ChartLine series={heartRateSeries} options={heartRateOptions} />
            ) : (
              <Typography>No heart rate data available</Typography>
            )}
          </Grid>

          {/* BMI Distribution Section */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" component="div">
              BMI Distribution
            </Typography>
            {bmi?.length > 0 ? (
              <ChartPie series={bmiSeries} options={bmiOptions} />
            ) : (
              <Typography>No BMI data available</Typography>
            )}
          </Grid>

          {/* Blood Pressure Section */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" component="div">
              Blood Pressure
            </Typography>
            {bloodPressure?.length > 0 ? (
              <ChartBar
                series={bloodPressureSeries}
                options={bloodPressureOptions}
                isHorizontal={false}
              />
            ) : (
              <Typography>No blood pressure data available</Typography>
            )}
          </Grid>

          {/* Skin Thickness Section */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" component="div">
              Skin Thickness
            </Typography>
            {skinThickness?.length > 0 ? (
              <ChartLine
                series={skinThicknessSeries}
                options={skinThicknessOptions}
              />
            ) : (
              <Typography>No skin thickness data available</Typography>
            )}
          </Grid>

          {/* Insulin Section */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" component="div">
              Insulin Levels
            </Typography>
            {insulin?.length > 0 ? (
              <ChartLine series={insulinSeries} options={insulinOptions} />
            ) : (
              <Typography>No insulin data available</Typography>
            )}
          </Grid>

          {/* Body Fat Percentage Section */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" component="div">
              Body Fat Percentage
            </Typography>
            {bodyFatPercentage?.length > 0 ? (
              <ChartLine
                series={bodyFatPercentageSeries}
                options={bodyFatPercentageOptions}
              />
            ) : (
              <Typography>No body fat percentage data available</Typography>
            )}
          </Grid>

          {/* Body Temperature Section */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" component="div">
              Body Temperature
            </Typography>
            {bodyTemperature?.length > 0 ? (
              <ChartLine
                series={bodyTemperatureSeries}
                options={bodyTemperatureOptions}
              />
            ) : (
              <Typography>No body temperature data available</Typography>
            )}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
