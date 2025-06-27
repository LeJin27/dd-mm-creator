import { createContext } from 'react';
import { Mob } from '../../mob';


export type MobContextType = {
  mobList: Mob[];
  setMobList: React.Dispatch<React.SetStateAction<Mob[]>>;
};

const MobContext = createContext<MobContextType | null>(null);

export default MobContext;