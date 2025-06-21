"use client";
import { useEffect, useState } from "react";
import { getAllMobsAction } from "./action";
import { Mob } from "../../mob";
import {
  Autocomplete,
  Box,
  Fab,
  InputAdornment,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
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

  const enterNewMobButton = () => {
    return (
      <>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Fab size="small" color="success">
            <AddIcon />
          </Fab>
          <Fab size="small" color="error">
            <ClearIcon />
          </Fab>
        </Box>
      </>
    );
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        width: "100%",
      }}
    >
      <Box sx={{ display: "flex", width: "100%", flexDirection: "column" }}>
        {mobList.map((mob) => (
          <MobCard key={mob.id} mob={mob}></MobCard>
        ))}
      </Box>
      <Box sx={{ display: "flex", width: "100%" }}>
        <Autocomplete
          fullWidth
          getOptionLabel={(option) =>
            typeof option === "string" ? option : option.name
          }
          freeSolo={true}
          options={mobList}
          disableClearable
          renderInput={(params) => (
            <TextField
              {...params}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <>
                    {params.InputProps.endAdornment}

                    <InputAdornment position="end">
                      {enterNewMobButton()}
                    </InputAdornment>
                  </>
                ),
              }}
            />
          )}
        />
      </Box>
    </Box>
  );
}
