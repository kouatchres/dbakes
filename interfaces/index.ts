// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';
//   export type clientCartInterface ={
//    pdtCost:number,
// salesPrice:number;
// qtty:number;
// orderDate: Date(now());
// productId:string
//   };

export type User = {
  id: number;
  name: string;
  email: string;
};
export type Region = {
  regName: string;
  regCode: string;
};

export type ProviderValues = {
  clientID: string;
  clientSecret: string;
};

export interface IOptions {
  value: string | undefined;
  label: string | undefined;
}

export interface IUserOption {
  email: string;
  id: string;
}

export interface IInputs {
  reginID: string;
}
export interface ISection {
  id: string | undefined;
  sectionName: string | undefined;
}

export interface CandResponseProps {
  candidate1stName: string | undefined;
  candidate2ndName: string | undefined;
  candidate3rdName: string | undefined;
  email: string | undefined;
  candidateMatricule: string | undefined;
  candidateSecretCode: string | undefined;
  image: string | undefined;
  phoneNumber: 0 | undefined;
  placeOfBirth: string | undefined;
  dateOfBirth: '2018-01-01';
  gender: string | undefined;
}
