import { Box, CardMedia, Fab, Typography } from "@mui/material";
import { Mob } from "../../mob";
import GlobeIcon from "../../../public/place_holder.webp";

export default function MobCard({ mob }: { mob: Mob }) {
  return (
    <Box
      sx={{ alignItems: "center", display: "flex", flexDirection: "column", minHeight:"20vh"}}
    >
      <Fab color="primary" size="large">
        <CardMedia
          component="image"
          image={GlobeIcon.src}
          color="white"
          sx={{ height: 60, width: 60 }}
        />
      </Fab>

      <Typography variant="h3" align="center">
        {mob.name}
      </Typography>
      <Typography>{mob.description}</Typography>
    </Box>
  );
}
