export interface IAddress {
  id?: number;
  street?: string;
  number?: number;
}

export const defaultValue: Readonly<IAddress> = {};
