import { Grid} from "@mui/material";
import DashboardCard from "./DashboardCard";
import AdbIcon from "@mui/icons-material/Adb";

export default function DashboardView() {
  return (
    <Grid
      container
      sx={{
        justifyContent: "center",
        border: "1px solid black",
      }}
    >
      <Grid size={12} sx={{ border: "1px solid black", height: "20vh" }}>
        test
      </Grid>
      <Grid size={2}>
        <DashboardCard
          name="Mobs"
          icon={<AdbIcon color="secondary" fontSize="large" />}
          number={1}
        />
      </Grid>
      <Grid size={2}>
        <DashboardCard
          name="Mashes"
          icon={<AdbIcon color="secondary" fontSize="large" />}
          number={1}
        />
      </Grid>
      <Grid size={2}>
        <DashboardCard
          name="Regions"
          icon={<AdbIcon color="secondary" fontSize="large" />}
          number={1}
        />
      </Grid>
      <Grid size={2}>
        <DashboardCard
          name="Classes"
          icon={<AdbIcon color="secondary" fontSize="large" />}
          number={1}
        />
      </Grid>
    </Grid>
  );
}
