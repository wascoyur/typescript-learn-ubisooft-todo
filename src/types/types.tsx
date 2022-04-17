export interface IUserAddress {
  city: string;
  street: string;
  zip: number;
}

export interface IUser {
  name: string;
  id: number;
  email: string;
  address: IUserAddress;
}
