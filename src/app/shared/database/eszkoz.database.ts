import { Eszkoz } from '../models/eszkoz.model';
import { Code } from '../models/code.model';
/*export interface Eszkoz {
  id: number;
  title: string;
  type: string;
  code: string;
  description: string;
  elhasz_ev: number;
  img?: string;
  actual:boolean;
}*/

export const ESZKOZOK: Eszkoz[] = [
    {
    id: '1',
    identifier: {
      use:"aasd",
      value:"asd",
    },
    active: true,
    type: "device",
    actual: true,
    code: {
      title:"aasd",
      creation:new Date(),
    },
    name: "FÜL-ORR-GÉGÉSZET",
    quantity: 100,
    title:""
    }
  
  ];