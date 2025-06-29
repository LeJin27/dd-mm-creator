import { Box, CardMedia, Divider, Fab, Paper, Typography } from "@mui/material";
import { Mob } from "../../mob";
import GlobeIcon from "../../../public/place_holder.webp";
import EditNoteIcon from "@mui/icons-material/EditNote";

export default function MobCard({ mob }: { mob: Mob }) {
  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        minHeight: "20vh",
      }}
    >
      
<Box
  sx={{
    backgroundColor: "secondary.main",
    borderRadius: 100,
    padding: 1,
    position: "relative", 
  }}
>
  <Fab
    sx={{
      position: "absolute",
      right: 0, 
      top: "50%",
      transform: "translate(150%, -50%)",
    }}
  >
    <Typography fontSize="large">
      <strong>{mob.size}</strong>
    </Typography>
  </Fab>

  <CardMedia
    component="img" 
    image={GlobeIcon.src}
    sx={{ height: 300, width: 300 }}
  />
</Box>

<Box sx={{ display: "flex", alignItems: "center", width: "60%", my: 2 }}>
  <Divider sx={{ flex: 1, borderColor: "secondary.main"}}/>
  <Typography variant="h4" align="center" sx={{ mx: 2 }}>
    {mob.name}
  </Typography>
  <Divider sx={{ flex: 1 , borderColor: "secondary.main"}} />
</Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "60%",
          justifyContent: "flex-end",
        }}
      >
        <Fab size="small" sx={{ position: "fixed", translate: "3rem" }}>
          <EditNoteIcon />
        </Fab>
        <Paper square={false} sx={{p:2, width: "100%", minHeight: "10vh" }}>
          <Typography>{mob.description}</Typography>
        </Paper>
      </Box>
    </Box>
  );
}
