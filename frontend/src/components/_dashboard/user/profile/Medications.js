import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  MenuItem,
  Select,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@material-ui/core";
import { ChartPie } from "../../../charts"; // Reusing existing chart components

export default function Medications({ medications }) {
  const [filter, setFilter] = useState("all");

  // Example filter by type of medication (tablets, injections)
  const filteredMeds =
    filter === "all"
      ? medications
      : medications.filter((med) => med.type === filter);

  // Grouping medications by category (e.g., tablets, injections, etc.) for chart data
  const medicationCategories = medications.reduce((acc, med) => {
    acc[med.type] = (acc[med.type] || 0) + 1;
    return acc;
  }, {});

  const medicationTypes = Object.keys(medicationCategories);
  const medicationCount = Object.values(medicationCategories);

  const chartOptions = {
    labels: medicationTypes, // Labels for the pie chart
    chart: {
      toolbar: {
        show: false,
      },
    },
  };

  const chartSeries = medicationCount;

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Current Medications
        </Typography>

        {/* Medication Type Filter */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" component="div">
              Filter by Type
            </Typography>
            <Select value={filter} onChange={handleFilterChange} fullWidth>
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="tablet">Tablets</MenuItem>
              <MenuItem value="injection">Injections</MenuItem>
              <MenuItem value="capsule">Capsules</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" component="div" gutterBottom>
              Medication Distribution
            </Typography>
            {medications.length > 0 ? (
              <ChartPie series={chartSeries} options={chartOptions} />
            ) : (
              <Typography>No medication data available for chart</Typography>
            )}
          </Grid>
        </Grid>
        {/* Medication Distribution Chart */}

        {/* Medication List */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" component="div">
            Medication List
          </Typography>
          {filteredMeds && filteredMeds.length > 0 ? (
            <List>
              {filteredMeds.map((med, index) => (
                <React.Fragment key={index}>
                  <ListItem>
                    <ListItemText
                      primary={`Name: ${med.name}`}
                      secondary={`Dosage: ${med.dosage} mg/dL`}
                    />
                    <Typography>{med.type}</Typography>
                  </ListItem>
                  {index !== filteredMeds.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          ) : (
            <Typography>No medications available.</Typography>
          )}
        </Grid>
      </CardContent>
    </Card>
  );
}
