import { Grid } from "@mui/material";
import LoginBox from "./LoginBox";

export default function LoginView() {
  return (
    <Grid
      container
      sx={{
        justifyContent: "center",
      }}
    >
      <Grid size={4}>
        <LoginBox />
      </Grid>
    </Grid>
  );
}
