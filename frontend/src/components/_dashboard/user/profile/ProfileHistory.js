import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MedicationIcon from "@material-ui/icons/LocalPharmacy";
import AllergyIcon from "@material-ui/icons/Warning";
import ConditionIcon from "@material-ui/icons/Healing";
import SurgeryIcon from "@material-ui/icons/LocalHospital";
import FamilyHistoryIcon from "@material-ui/icons/FamilyRestroom";

export default function ProfileHealthHistory({ profileHealthHistory }) {
  const {
    bloodType,
    allergies,
    conditions,
    surgeries,
    medications,
    familyHistory,
  } = profileHealthHistory;

  const [expanded, setExpanded] = useState(false);

  const handleExpand = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Health History Overview
        </Typography>

        <Grid container spacing={3}>
          {/* Blood Type */}
          <Grid item xs={12}>
            <Typography variant="h6" component="div" color={"error"}>
              Blood Type: {bloodType || "Unknown"}
            </Typography>
          </Grid>

          {/* Allergies */}
          <Grid item xs={12}>
            <Accordion
              expanded={expanded === "allergiesPanel"}
              onChange={handleExpand("allergiesPanel")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="allergiesPanel-content"
                id="allergiesPanel-header"
              >
                <Typography variant="h6">
                  <AllergyIcon /> Allergies
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {allergies && allergies.length > 0 ? (
                  <List>
                    {allergies.map((allergy, index) => (
                      <ListItem key={index}>
                        <ListItemIcon>
                          <AllergyIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary={allergy.name}
                          secondary={`Reaction: ${allergy.reaction}`}
                        />
                      </ListItem>
                    ))}
                  </List>
                ) : (
                  <Typography>No known allergies.</Typography>
                )}
              </AccordionDetails>
            </Accordion>
          </Grid>

          {/* Conditions */}
          <Grid item xs={12}>
            <Accordion
              expanded={expanded === "conditionsPanel"}
              onChange={handleExpand("conditionsPanel")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="conditionsPanel-content"
                id="conditionsPanel-header"
              >
                <Typography variant="h6">
                  <ConditionIcon /> Medical Conditions
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {conditions && conditions.length > 0 ? (
                  <List>
                    {conditions.map((condition, index) => (
                      <ListItem key={index}>
                        <ListItemIcon>
                          <ConditionIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary={condition.name}
                          secondary={`Diagnosed on: ${condition.diagnosisDate}`}
                        />
                      </ListItem>
                    ))}
                  </List>
                ) : (
                  <Typography>No known medical conditions.</Typography>
                )}
              </AccordionDetails>
            </Accordion>
          </Grid>

          {/* Surgeries */}
          <Grid item xs={12}>
            <Accordion
              expanded={expanded === "surgeriesPanel"}
              onChange={handleExpand("surgeriesPanel")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="surgeriesPanel-content"
                id="surgeriesPanel-header"
              >
                <Typography variant="h6">
                  <SurgeryIcon /> Surgical History
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {surgeries && surgeries.length > 0 ? (
                  <List>
                    {surgeries.map((surgery, index) => (
                      <ListItem key={index}>
                        <ListItemIcon>
                          <SurgeryIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary={surgery.name}
                          secondary={`Performed on: ${surgery.date}`}
                        />
                      </ListItem>
                    ))}
                  </List>
                ) : (
                  <Typography>No surgical history available.</Typography>
                )}
              </AccordionDetails>
            </Accordion>
          </Grid>

          {/* Medications */}
          <Grid item xs={12}>
            <Accordion
              expanded={expanded === "medicationsPanel"}
              onChange={handleExpand("medicationsPanel")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="medicationsPanel-content"
                id="medicationsPanel-header"
              >
                <Typography variant="h6">
                  <MedicationIcon /> Current Medications
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {medications && medications.length > 0 ? (
                  <List>
                    {medications.map((med, index) => (
                      <ListItem key={index}>
                        <ListItemIcon>
                          <MedicationIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary={med.name}
                          secondary={`${med.dosage} (${med.type})`}
                        />
                      </ListItem>
                    ))}
                  </List>
                ) : (
                  <Typography>No medications listed.</Typography>
                )}
              </AccordionDetails>
            </Accordion>
          </Grid>

          {/* Family History */}
          <Grid item xs={12}>
            <Accordion
              expanded={expanded === "familyHistoryPanel"}
              onChange={handleExpand("familyHistoryPanel")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="familyHistoryPanel-content"
                id="familyHistoryPanel-header"
              >
                <Typography variant="h6">
                  <FamilyHistoryIcon /> Family Medical History
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {familyHistory && familyHistory.length > 0 ? (
                  <>
                    {familyHistory.map((relative, index) => (
                      <div key={index}>
                        <Typography variant="subtitle1">
                          {relative.relationship}
                        </Typography>
                        <List>
                          {relative.conditions.map((condition, idx) => (
                            <ListItem key={idx}>
                              <ListItemText
                                primary={condition.name}
                                secondary={`Diagnosed on: ${condition.diagnosisDate}`}
                              />
                            </ListItem>
                          ))}
                        </List>
                        <Divider />
                      </div>
                    ))}
                  </>
                ) : (
                  <Typography>No family medical history available.</Typography>
                )}
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
