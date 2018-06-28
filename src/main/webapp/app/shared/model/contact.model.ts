import { IAddress } from './address.model';

export interface IContact {
  id?: number;
  name?: string;
  home?: IAddress;
}

export const defaultValue: Readonly<IContact> = {};
