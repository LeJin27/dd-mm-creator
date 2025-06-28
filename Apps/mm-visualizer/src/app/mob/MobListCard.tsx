import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Fab,
  Paper,
  Typography,
} from "@mui/material";
import { Mob } from "../../mob";
import GlobeIcon from "../../../public/place_holder.webp";
import { useContext } from "react";
import MobContext from "./MobContext";

const growFull = { flexGrow: 1, height: "100%" };

export default function MobListCard({ mob }: { mob: Mob }) {
  const context = useContext(MobContext);

  if (!context) {
    throw new Error("Context error");
  }
  const { setCurrentMob } = context;
  return (
    <Box
      sx={{ display: "flex", height: "100%", width: "100%", minHeight: "5vh" }}
    >
      <Paper sx={{ width: "100%", display: "flex", alignItems: "center" }}>
        <Card sx={{ ...growFull }}>
          <CardActionArea
            sx={{
              ...growFull,
              display: "flex",
              border: "1px solid white",
              justifyContent: "left",
              gap: 2,
              p: 1,
            }}

            onClick={() => setCurrentMob(mob)}
          >
            <Fab
              component="div"
              color="secondary"
              sx={{
                "&:hover": {
                  bgcolor: "secondary.main",
                },
              }}
            >
              <CardMedia
                component="image"
                image={GlobeIcon.src}
                color="white"
                sx={{ height: 60, width: 60 }}
              />
            </Fab>

            <Typography>
              <strong>{mob.name}</strong>
            </Typography>
          </CardActionArea>
        </Card>
      </Paper>
    </Box>
  );
}
