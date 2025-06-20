import { Box, Card, CardActionArea, Paper } from "@mui/material";
import { Mob } from "../../mob";

const growFull = { flexGrow: 1, height: "100%" };

export default function MobCard({ mob }: { mob: Mob }) {
  return (
    <Box sx={{ display: "flex", height: "100%", width: "100%", minHeight: "5vh" }}>
      <Paper sx={{ width: "100%", display: "flex", alignItems: "center" }}>
        <Card sx={{ border: "1px solid white", ...growFull }}>
          <CardActionArea sx={growFull}>{mob.name}</CardActionArea>
        </Card>
      </Paper>
    </Box>
  );
}