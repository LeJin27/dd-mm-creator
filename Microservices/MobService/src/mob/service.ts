import { DBMob, Mob, NewMob } from "./schema";
import * as queries from './queries'
import { pool } from "../db";


export class MobService {
  private rowToMob = async (rows: DBMob[]) => {
    const mobs = await Promise.all(rows.map(async (mob: DBMob) => {
      const data = mob.data;
      const mobObj: Mob = {
        id: mob.id,
        name: data.name,
        image: data.image,
        size: data.size,
        description: data.description
      };
      return mobObj;
    }));
    return mobs;
  }





  public async getAll(): Promise<Mob[]> {
    const query = {
      text: queries.getAll,
      //values: [userId],
    };

    const { rows } = await pool.query(query);
    const mobs = await this.rowToMob(rows);
    return mobs;
  }
  public async getCount(): Promise<number> {
    const query = {
      text: queries.getCount,
      //values: [userId],
    };

    const { rows } = await pool.query(query);
    const baseNumber = 10
    const count = parseInt(rows[0].count, baseNumber);

    return count;
  }
  public async createMob(newMob : NewMob): Promise<Mob> {
    const query = {
      text: queries.createMob,
      values: [newMob.name, newMob.size, newMob.image, newMob.description],
    };
    const { rows } = await pool.query(query);

    const mobs = await this.rowToMob(rows);
    return mobs[0]



  }
}
