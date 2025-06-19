'use client'

import { useEffect, useState } from "react";
import { getAllMobs, getAllMobsAction } from "./action";
import { Mob } from "../../mob";

export default function MobView() {
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
    <div>
      {mobList.map((mob) => (
        <div key={mob.id}>{mob.name}</div>
      ))}
    </div>
  );
}
