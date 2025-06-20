"use client";
import { useEffect, useState } from "react";
import { getAllMobsAction } from "./action";
import { Mob } from "../../mob";
import { Autocomplete, Box, Fab, TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import MobCard from "./MobCard";

export default function MobList() {
  const [mobList, setMobList] = useState<Mob[]>([]);

  useEffect(() => {
    const getAllMobsHelper = async () => {
      const mobs = await getAllMobsAction();
      if (mobs) {
        setMobList(mobs);
      } else {
        setMobList([]);
      }
    };

    getAllMobsHelper();
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        width:"100%"
      }}
    >
      <Box sx={{display: "flex", width: "100%", flexDirection: "column"}}>
          {mobList.map((mob) => (
            <MobCard key = {mob.id} mob = {mob}></MobCard>
          ))}
      </Box>
      <Box sx ={{display: "flex", width: "100%"}}>
      <Autocomplete
      sx={{ flex: 1 }} 
        getOptionLabel={(option) =>
          typeof option === "string" ? option : option.name
        }
        freeSolo={true}
        options={mobList}
        renderInput={(params) => <TextField {...params} />}
      />
      <Fab color="primary"><AddIcon fontSize="large"/></Fab>
</Box>
    </Box>
  );
}
