import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import pinFill from "@iconify/icons-eva/pin-fill";
import emailFill from "@iconify/icons-eva/email-fill";
import roundBusinessCenter from "@iconify/icons-ic/round-business-center";
import healthIcon from "@iconify/icons-eva/heart-fill"; // Health icon for diagnosis
import doctorIcon from "@iconify/icons-eva/person-fill"; // Doctor icon for treating physician
import calendarIcon from "@iconify/icons-eva/calendar-fill"; // Diagnosis date icon
import ageIcon from "@iconify/icons-eva/award-fill"; // Age icon
// material
import { styled } from "@material-ui/core/styles";
import { Link, Card, Typography, CardHeader, Stack } from "@material-ui/core";
import { age } from "src/utils/mock-data/number";

// ----------------------------------------------------------------------

const IconStyle = styled(Icon)(({ theme }) => ({
  width: 20,
  height: 20,
  marginTop: 1,
  flexShrink: 0,
  marginRight: theme.spacing(2),
}));

// ----------------------------------------------------------------------

ProfileAbout.propTypes = {
  profile: PropTypes.object,
};

export default function ProfileAbout({ profile }) {
  const {
    quote,
    diagnosisDate,
    healthStatus,
    email,
    treatingPhysician,
    medications,
    diagnosis,
    age,
  } = profile;

  return (
    <Card>
      <CardHeader title="About" />

      <Stack spacing={2} sx={{ p: 3 }}>
        {/* Personal Health Status */}
        <Typography variant="body2" color="text.secondary">
          "{quote}"
        </Typography>

        {/* Health Status */}
        <Stack direction="row">
          <IconStyle icon={healthIcon} />
          <Typography variant="body2">
            Current Health Status: &nbsp;
            <Link component="span" variant="subtitle2" color="text.primary">
              {healthStatus || "No data available"}
            </Link>
          </Typography>
        </Stack>
        {/* Health Status */}
        <Stack direction="row">
          <IconStyle icon={ageIcon} />
          <Typography variant="body2">
            Age: &nbsp;
            <Link component="span" variant="subtitle2" color="text.primary">
              {age || "No data available"}
            </Link>
          </Typography>
        </Stack>

        {/* Diagnosis */}
        <Stack direction="row">
          <IconStyle icon={healthIcon} />
          <Typography variant="body2">
            Diagnosis: &nbsp;
            <Link component="span" variant="subtitle2" color="text.primary">
              {diagnosis || "Unknown"}
            </Link>
          </Typography>
        </Stack>

        {/* Diagnosis Date */}
        <Stack direction="row">
          <IconStyle icon={calendarIcon} />
          <Typography variant="body2">
            Diagnosed on: &nbsp;
            <Link component="span" variant="subtitle2" color="text.primary">
              {diagnosisDate || "N/A"}
            </Link>
          </Typography>
        </Stack>

        {/* Treating Physician */}
        <Stack direction="row">
          <IconStyle icon={doctorIcon} />
          <Typography variant="body2">
            Treating Physician: &nbsp;
            <Link component="span" variant="subtitle2" color="text.primary">
              {treatingPhysician || "Unknown"}
            </Link>
          </Typography>
        </Stack>

        {/* Medications */}
        <Stack direction="row">
          <IconStyle icon={roundBusinessCenter} />
          <Typography variant="body2">
            Current Medications: &nbsp;
            <Link component="span" variant="subtitle2" color="text.primary">
              {medications?.length > 0
                ? medications.map((med) => med.name).join(", ")
                : "No medications"}
            </Link>
          </Typography>
        </Stack>

        {/* Contact */}
        <Stack direction="row">
          <IconStyle icon={emailFill} />
          <Typography variant="body2">{email || "No contact info"}</Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
