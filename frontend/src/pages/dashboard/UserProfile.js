import { Icon } from "@iconify/react";
import { capitalCase } from "change-case";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import heartFill from "@iconify/icons-eva/heart-fill";
// import roundBloodTest from "@iconify/mdi/blood-check"; // New icon for blood sugar logs
// import roundMedication from "@iconify/mdi/medication"; // New icon for medication
// import healthMetrics from "@iconify/mdi/health-potion"; // New icon for health metrics
// material
import { styled } from "@material-ui/core/styles";
import { Tab, Box, Card, Tabs, Container } from "@material-ui/core";
// redux
import { useDispatch, useSelector } from "../../redux/store";
import {
  getProfile,
  getHealthMetrics,
  getBloodSugarLogs,
  getMedications,
  getProfileHelthHistory,
} from "../../redux/slices/user"; // New actions for health-related data
// routes
import { PATH_DASHBOARD } from "../../routes/paths";
// hooks
import useAuth from "../../hooks/useAuth";
import useSettings from "../../hooks/useSettings";
// components
import Page from "../../components/Page";
import HeaderBreadcrumbs from "../../components/HeaderBreadcrumbs";
import {
  Profile,
  HealthMetrics, // New component for health metrics
  BloodSugarLogs, // New component for blood sugar logs
  Medications,
  ProfileCover, // New component for medications
} from "../../components/_dashboard/user/profile";

// ----------------------------------------------------------------------

const TabsWrapperStyle = styled("div")(({ theme }) => ({
  zIndex: 9,
  bottom: 0,
  width: "100%",
  display: "flex",
  position: "absolute",
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.up("sm")]: {
    justifyContent: "center",
  },
  [theme.breakpoints.up("md")]: {
    justifyContent: "flex-end",
    paddingRight: theme.spacing(3),
  },
}));

// ----------------------------------------------------------------------

export default function UserProfile() {
  const { themeStretch } = useSettings();
  const dispatch = useDispatch();
  const {
    myProfile,
    healthMetrics,
    bloodSugarLogs,
    medications,
    profileHealthHistory,
  } = useSelector((state) => state.user);
  const { name } = useParams();
  const [currentTab, setCurrentTab] = useState("profile");

  useEffect(() => {
    dispatch(getProfile());
    dispatch(getHealthMetrics()); // Fetching health metrics
    dispatch(getBloodSugarLogs()); // Fetching blood sugar logs
    dispatch(getMedications()); // Fetching medication info
    dispatch(getProfileHelthHistory());
  }, [dispatch]);

  const handleChangeTab = (event, newValue) => {
    setCurrentTab(newValue);
  };

  if (!myProfile) {
    return null;
  }

  const PROFILE_TABS = [
    {
      value: "profile",
      icon: <Icon icon={heartFill} width={20} height={20} />,
      component: (
        <Profile
          myProfile={myProfile}
          profileHealthHistory={profileHealthHistory}
        />
      ),
    },
    {
      value: "health-metrics",
      icon: <Icon icon={heartFill} width={20} height={20} />,
      component: <HealthMetrics healthMetrics={healthMetrics} />,
    },
    {
      value: "blood-sugar-logs",
      icon: <Icon icon={heartFill} width={20} height={20} />,
      component: <BloodSugarLogs bloodSugarLogs={bloodSugarLogs} />,
    },
    {
      value: "medications",
      icon: <Icon icon={heartFill} width={20} height={20} />,
      component: <Medications medications={medications} />,
    },
  ];

  return (
    <Page title="Patients: Profile | Diabetes Management System">
      <Container maxWidth={themeStretch ? false : "lg"}>
        <HeaderBreadcrumbs
          heading="Profile"
          links={[
            { name: "Dashboard", href: PATH_DASHBOARD.root },
            { name: "Patient", href: PATH_DASHBOARD.user.root },
            { name: name },
          ]}
        />
        <Card
          sx={{
            mb: 3,
            height: 280,
            position: "relative",
          }}
        >
          <ProfileCover myProfile={myProfile} />

          <TabsWrapperStyle>
            <Tabs
              value={currentTab}
              scrollButtons="auto"
              variant="scrollable"
              allowScrollButtonsMobile
              onChange={handleChangeTab}
            >
              {PROFILE_TABS.map((tab) => (
                <Tab
                  disableRipple
                  key={tab.value}
                  value={tab.value}
                  icon={tab.icon}
                  label={capitalCase(tab.value)}
                />
              ))}
            </Tabs>
          </TabsWrapperStyle>
        </Card>

        {PROFILE_TABS.map((tab) => {
          const isMatched = tab.value === currentTab;
          return isMatched && <Box key={tab.value}>{tab.component}</Box>;
        })}
      </Container>
    </Page>
  );
}
