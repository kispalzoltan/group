import { Code } from './code.model';
import { Identifier } from './identifier.model';

export interface Eszkoz {
  id: string;
  identifier: Identifier,
  active: boolean,
  type: string;
  actual:boolean;
  code: Code;
  name: string;
  quantity: number;
  title:string;

}