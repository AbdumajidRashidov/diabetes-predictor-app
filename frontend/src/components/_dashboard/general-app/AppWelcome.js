import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
// material
import { styled } from "@material-ui/core/styles";
import { Typography, Button, Card, CardContent } from "@material-ui/core";
import { SeoIllustration } from "../../../assets";
import Label from "src/components/Label";

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: "none",
  textAlign: "center",
  backgroundColor: theme.palette.primary.lighter,
  [theme.breakpoints.up("md")]: {
    height: "100%",
    display: "flex",
    textAlign: "left",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

// ----------------------------------------------------------------------

AppWelcome.propTypes = {
  displayName: PropTypes.string,
};

export default function AppWelcome({ displayName }) {
  return (
    <RootStyle>
      <CardContent
        sx={{
          p: { md: 0 },
          pl: { md: 5 },
          color: "grey.800",
        }}
      >
        <Typography gutterBottom variant="h4">
          Welcome back,
          <br />
          Dr {!displayName ? "..." : displayName}!
        </Typography>

        <Typography
          variant="body2"
          sx={{ pb: { xs: 3, xl: 5 }, maxWidth: 480, mx: "auto" }}
        >
          You have <Label color="error"> 3 new </Label> patients flagged for
          high diabetes risk based on recent health data. There are{" "}
          <Label color="warning">5 pending</Label> tasks that require your
          attention, including patient follow-ups and report generation.
        </Typography>

        <Button variant="contained" to="#" component={RouterLink}>
          Go to users list
        </Button>
      </CardContent>

      <SeoIllustration
        sx={{
          p: 3,
          width: 360,
          margin: { xs: "auto", md: "inherit" },
        }}
      />
    </RootStyle>
  );
}
