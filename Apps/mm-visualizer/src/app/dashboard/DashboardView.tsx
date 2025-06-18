import { Card, Grid, Typography } from "@mui/material";

export default function DashboardView() {
  return (
    <Grid
      container
      sx={{
        justifyContent: "center",
        height: "100vh",
        border: "1px solid black"
      }}
    >
      
      <Grid size={12} sx = {{border: "1px solid black"}}><Typography>Title</Typography></Grid>
      <Grid size={2}><Card sx={{ height: "20vh", m: 1}}>Test</Card></Grid>
      <Grid size={2}><Card sx={{ height: "20vh", m: 1}}>Test</Card></Grid>
      <Grid size={2}><Card sx={{ height: "20vh", m: 1}}>Test</Card></Grid>
      <Grid size={2}><Card sx={{ height: "20vh", m: 1}}>Test</Card></Grid>
      <Grid size={2}><Card sx={{ height: "20vh", m: 1}}>Test</Card></Grid>
      <Grid size={2}><Card sx={{ height: "20vh", m: 1}}>Test</Card></Grid>
    </Grid>
  );
}
