"use server";
import { cookies } from "next/headers"
import { Mob } from "../../mob";
import { MobService } from "../../mob/service";

export async function getAllMobsAction(): Promise<Mob[] | undefined> {
  const cookie = (await cookies()).get('session')?.value;

  try {
    return new MobService().getAll(cookie);
  } catch {
    return undefined
  }
}

