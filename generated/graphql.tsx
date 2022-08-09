import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/client/react/components';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type AnnualBranchEmployee = {
  id: Scalars['String'];
  BranchEmployee?: Maybe<BranchEmployee>;
  FinancialYear?: Maybe<FinancialYear>;
  orders: Array<Order>;
};


export type AnnualBranchEmployeeOrdersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<OrderWhereUniqueInput>;
  after?: Maybe<OrderWhereUniqueInput>;
};

export type AnnualClient = {
  id: Scalars['String'];
  Client?: Maybe<Client>;
  FinancialYear?: Maybe<FinancialYear>;
  orders: Array<Order>;
  carts: Array<Cart>;
  clientId?: Maybe<Scalars['String']>;
  financialYearId?: Maybe<Scalars['String']>;
};


export type AnnualClientOrdersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<OrderWhereUniqueInput>;
  after?: Maybe<OrderWhereUniqueInput>;
};


export type AnnualClientCartsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<CartWhereUniqueInput>;
  after?: Maybe<CartWhereUniqueInput>;
};

export type Bonus = {
  id: Scalars['String'];
  bonusName: Scalars['String'];
};

export type Branch = {
  id: Scalars['String'];
  branchName: Scalars['String'];
  branchEmpls: Array<BranchEmployee>;
  branchCode: Scalars['String'];
};


export type BranchBranchEmplsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<BranchEmployeeWhereUniqueInput>;
  after?: Maybe<BranchEmployeeWhereUniqueInput>;
};

export type BranchEmployee = {
  id: Scalars['String'];
  endDate: Scalars['DateTime'];
  startDate: Scalars['DateTime'];
  Employee: Employee;
  EmployeeStatus: EmployeeStatus;
  Branch: Branch;
};

export type Cart = {
  id: Scalars['String'];
  AnnualClient?: Maybe<AnnualClient>;
  orderDate: Scalars['DateTime'];
  qtty: Scalars['Float'];
  pdtCost: Scalars['Int'];
  salesPrice: Scalars['Int'];
  AnnualBranchEmployee?: Maybe<AnnualBranchEmployee>;
  annualBranchEmployeeId?: Maybe<Scalars['String']>;
  Product: Product;
};

export type Category = {
  id: Scalars['String'];
  categoryName: Scalars['String'];
  categoryCode: Scalars['String'];
  products: Array<Product>;
};


export type CategoryProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<ProductWhereUniqueInput>;
  after?: Maybe<ProductWhereUniqueInput>;
};

export type Client = {
  id: Scalars['String'];
  clientNames: Scalars['String'];
  clientPhoneNumb: Scalars['Int'];
};

export type Employee = {
  id: Scalars['String'];
  employeeNames: Scalars['String'];
  branchEmpls: Array<BranchEmployee>;
  employeePhoneNumb: Scalars['Int'];
  employeeCode: Scalars['String'];
};


export type EmployeeBranchEmplsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<BranchEmployeeWhereUniqueInput>;
  after?: Maybe<BranchEmployeeWhereUniqueInput>;
};

export type EmployeeStatus = {
  id: Scalars['String'];
  status: Scalars['String'];
};

export type Finance = {
  id: Scalars['String'];
  amtPaid: Scalars['Int'];
  orderId: Scalars['String'];
  Order: Order;
};

export type FinancialYear = {
  id: Scalars['String'];
  annBranchEmpls: Array<AnnualBranchEmployee>;
  yearName: Scalars['Int'];
  annClients: Array<AnnualClient>;
};


export type FinancialYearAnnBranchEmplsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<AnnualBranchEmployeeWhereUniqueInput>;
  after?: Maybe<AnnualBranchEmployeeWhereUniqueInput>;
};


export type FinancialYearAnnClientsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<AnnualClientWhereUniqueInput>;
  after?: Maybe<AnnualClientWhereUniqueInput>;
};

export type Inventory = {
  id: Scalars['String'];
  qttyInHand: Scalars['Int'];
};

export type Order = {
  id: Scalars['String'];
  orderDate: Scalars['DateTime'];
  orderTotal: Scalars['Int'];
  AnnualBranchEmployee?: Maybe<AnnualBranchEmployee>;
  annualBranchEmployeeId?: Maybe<Scalars['String']>;
  AnnualClient?: Maybe<AnnualClient>;
  annualClientId?: Maybe<Scalars['String']>;
  finances: Array<Finance>;
  totalPaid: Scalars['Int'];
  orderDetails: Array<OrderDetail>;
  orderNumber: Scalars['String'];
};


export type OrderFinancesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<FinanceWhereUniqueInput>;
  after?: Maybe<FinanceWhereUniqueInput>;
};


export type OrderOrderDetailsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<OrderDetailWhereUniqueInput>;
  after?: Maybe<OrderDetailWhereUniqueInput>;
};

export type OrderDetail = {
  id: Scalars['String'];
  qtty: Scalars['Float'];
  pdtCost: Scalars['Int'];
  salesPrice: Scalars['Int'];
  Order: Order;
  orderId: Scalars['String'];
  Product: Product;
  productId: Scalars['String'];
};

export type Product = {
  id: Scalars['String'];
  pdtName: Scalars['String'];
  pdtCode: Scalars['String'];
  Category?: Maybe<Category>;
  carts: Array<Cart>;
  categoryId?: Maybe<Scalars['String']>;
  unitPrice: Scalars['Int'];
  orderDetails: Array<OrderDetail>;
};


export type ProductCartsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<CartWhereUniqueInput>;
  after?: Maybe<CartWhereUniqueInput>;
};


export type ProductOrderDetailsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<OrderDetailWhereUniqueInput>;
  after?: Maybe<OrderDetailWhereUniqueInput>;
};

export type OrderWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type CartWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type BranchEmployeeWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};


export type ProductWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type AnnualBranchEmployeeWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type AnnualClientWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type FinanceWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type OrderDetailWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type ClientWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  clientPhoneNumb?: Maybe<Scalars['Int']>;
};

export type BonusWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type BranchWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  branchCode?: Maybe<Scalars['String']>;
};

export type FinancialYearWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type EmployeeWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  employeeCode?: Maybe<Scalars['String']>;
  employeePhoneNumb?: Maybe<Scalars['Int']>;
};

export type EmployeeStatusWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type InventoryWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type CategoryWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type AnnualBranchEmployeeCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  orders?: Maybe<OrderCreateNestedManyWithoutAnnualBranchEmployeeInput>;
  carts?: Maybe<CartCreateNestedManyWithoutAnnualBranchEmployeeInput>;
  BranchEmployee?: Maybe<BranchEmployeeCreateNestedOneWithoutAnnBranchEmployeeInput>;
  FinancialYear?: Maybe<FinancialYearCreateNestedOneWithoutAnnBranchEmplsInput>;
};

export type AnnualBranchEmployeeUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  orders?: Maybe<OrderUpdateManyWithoutAnnualBranchEmployeeInput>;
  carts?: Maybe<CartUpdateManyWithoutAnnualBranchEmployeeInput>;
  BranchEmployee?: Maybe<BranchEmployeeUpdateOneWithoutAnnBranchEmployeeInput>;
  FinancialYear?: Maybe<FinancialYearUpdateOneWithoutAnnBranchEmplsInput>;
};

export type AnnualClientCreateInput = {
  id?: Maybe<Scalars['String']>;
  orders?: Maybe<OrderCreateNestedManyWithoutAnnualClientInput>;
  carts?: Maybe<CartCreateNestedManyWithoutAnnualClientInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  Client?: Maybe<ClientCreateNestedOneWithoutAnnClientsInput>;
  FinancialYear?: Maybe<FinancialYearCreateNestedOneWithoutAnnClientsInput>;
};

export type AnnualClientUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  orders?: Maybe<OrderUpdateManyWithoutAnnualClientInput>;
  carts?: Maybe<CartUpdateManyWithoutAnnualClientInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  Client?: Maybe<ClientUpdateOneWithoutAnnClientsInput>;
  FinancialYear?: Maybe<FinancialYearUpdateOneWithoutAnnClientsInput>;
};

export type CartCreateInput = {
  id?: Maybe<Scalars['String']>;
  qtty: Scalars['Float'];
  pdtCost: Scalars['Int'];
  salesPrice: Scalars['Int'];
  orderDate?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  Product: ProductCreateNestedOneWithoutCartsInput;
  AnnualClient?: Maybe<AnnualClientCreateNestedOneWithoutCartsInput>;
  AnnualBranchEmployee?: Maybe<AnnualBranchEmployeeCreateNestedOneWithoutCartsInput>;
};

export type CartUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  qtty?: Maybe<FloatFieldUpdateOperationsInput>;
  pdtCost?: Maybe<IntFieldUpdateOperationsInput>;
  salesPrice?: Maybe<IntFieldUpdateOperationsInput>;
  orderDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  Product?: Maybe<ProductUpdateOneRequiredWithoutCartsInput>;
  AnnualClient?: Maybe<AnnualClientUpdateOneWithoutCartsInput>;
  AnnualBranchEmployee?: Maybe<AnnualBranchEmployeeUpdateOneWithoutCartsInput>;
};

export type CategoryCreateInput = {
  id?: Maybe<Scalars['String']>;
  categoryName: Scalars['String'];
  categoryCode: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  products?: Maybe<ProductCreateNestedManyWithoutCategoryInput>;
};

export type CategoryUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  categoryName?: Maybe<StringFieldUpdateOperationsInput>;
  categoryCode?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  products?: Maybe<ProductUpdateManyWithoutCategoryInput>;
};

export type ClientCreateInput = {
  id?: Maybe<Scalars['String']>;
  clientPhoneNumb: Scalars['Int'];
  annClients?: Maybe<AnnualClientCreateNestedManyWithoutClientInput>;
  clientNames: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ClientUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  clientPhoneNumb?: Maybe<IntFieldUpdateOperationsInput>;
  annClients?: Maybe<AnnualClientUpdateManyWithoutClientInput>;
  clientNames?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type OrderDetailCreateInput = {
  id?: Maybe<Scalars['String']>;
  pdtCost: Scalars['Int'];
  qtty: Scalars['Float'];
  salesPrice: Scalars['Int'];
  orderDate?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  Order: OrderCreateNestedOneWithoutOrderDetailsInput;
  Product: ProductCreateNestedOneWithoutOrderDetailsInput;
};

export type OrderDetailUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  pdtCost?: Maybe<IntFieldUpdateOperationsInput>;
  qtty?: Maybe<FloatFieldUpdateOperationsInput>;
  salesPrice?: Maybe<IntFieldUpdateOperationsInput>;
  orderDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  Order?: Maybe<OrderUpdateOneRequiredWithoutOrderDetailsInput>;
  Product?: Maybe<ProductUpdateOneRequiredWithoutOrderDetailsInput>;
};

export type OrderCreateInput = {
  id?: Maybe<Scalars['String']>;
  orderTotal: Scalars['Int'];
  totalPaid: Scalars['Int'];
  orderNumber: Scalars['String'];
  orderDate?: Maybe<Scalars['DateTime']>;
  orderDetails?: Maybe<OrderDetailCreateNestedManyWithoutOrderInput>;
  finances?: Maybe<FinanceCreateNestedManyWithoutOrderInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  AnnualClient?: Maybe<AnnualClientCreateNestedOneWithoutOrdersInput>;
  AnnualBranchEmployee?: Maybe<AnnualBranchEmployeeCreateNestedOneWithoutOrdersInput>;
};

export type OrderUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  orderTotal?: Maybe<IntFieldUpdateOperationsInput>;
  totalPaid?: Maybe<IntFieldUpdateOperationsInput>;
  orderNumber?: Maybe<StringFieldUpdateOperationsInput>;
  orderDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  orderDetails?: Maybe<OrderDetailUpdateManyWithoutOrderInput>;
  finances?: Maybe<FinanceUpdateManyWithoutOrderInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  AnnualClient?: Maybe<AnnualClientUpdateOneWithoutOrdersInput>;
  AnnualBranchEmployee?: Maybe<AnnualBranchEmployeeUpdateOneWithoutOrdersInput>;
};

export type BonusCreateInput = {
  id?: Maybe<Scalars['String']>;
  bonusName: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type BonusUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  bonusName?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type BranchCreateInput = {
  id?: Maybe<Scalars['String']>;
  branchName: Scalars['String'];
  branchCode: Scalars['String'];
  branchEmpls?: Maybe<BranchEmployeeCreateNestedManyWithoutBranchInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type BranchUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  branchName?: Maybe<StringFieldUpdateOperationsInput>;
  branchCode?: Maybe<StringFieldUpdateOperationsInput>;
  branchEmpls?: Maybe<BranchEmployeeUpdateManyWithoutBranchInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type BranchEmployeeCreateInput = {
  id?: Maybe<Scalars['String']>;
  annBranchEmployee?: Maybe<AnnualBranchEmployeeCreateNestedManyWithoutBranchEmployeeInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  startDate?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['DateTime']>;
  Employee: EmployeeCreateNestedOneWithoutBranchEmplsInput;
  Branch: BranchCreateNestedOneWithoutBranchEmplsInput;
  EmployeeStatus: EmployeeStatusCreateNestedOneWithoutBranchEmplsInput;
};

export type BranchEmployeeUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  annBranchEmployee?: Maybe<AnnualBranchEmployeeUpdateManyWithoutBranchEmployeeInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  startDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  endDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  Employee?: Maybe<EmployeeUpdateOneRequiredWithoutBranchEmplsInput>;
  Branch?: Maybe<BranchUpdateOneRequiredWithoutBranchEmplsInput>;
  EmployeeStatus?: Maybe<EmployeeStatusUpdateOneRequiredWithoutBranchEmplsInput>;
};

export type FinancialYearCreateInput = {
  id?: Maybe<Scalars['String']>;
  annBranchEmpls?: Maybe<AnnualBranchEmployeeCreateNestedManyWithoutFinancialYearInput>;
  annClients?: Maybe<AnnualClientCreateNestedManyWithoutFinancialYearInput>;
  yearName: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FinancialYearUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  annBranchEmpls?: Maybe<AnnualBranchEmployeeUpdateManyWithoutFinancialYearInput>;
  annClients?: Maybe<AnnualClientUpdateManyWithoutFinancialYearInput>;
  yearName?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type EmployeeCreateInput = {
  id?: Maybe<Scalars['String']>;
  branchEmpls?: Maybe<BranchEmployeeCreateNestedManyWithoutEmployeeInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  employeeNames: Scalars['String'];
  employeeCode: Scalars['String'];
  employeePhoneNumb: Scalars['Int'];
};

export type EmployeeUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  branchEmpls?: Maybe<BranchEmployeeUpdateManyWithoutEmployeeInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  employeeNames?: Maybe<StringFieldUpdateOperationsInput>;
  employeeCode?: Maybe<StringFieldUpdateOperationsInput>;
  employeePhoneNumb?: Maybe<IntFieldUpdateOperationsInput>;
};

export type EmployeeStatusCreateInput = {
  id?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  branchEmpls?: Maybe<BranchEmployeeCreateNestedManyWithoutEmployeeStatusInput>;
};

export type EmployeeStatusUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  status?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  branchEmpls?: Maybe<BranchEmployeeUpdateManyWithoutEmployeeStatusInput>;
};

export type FinanceCreateInput = {
  id?: Maybe<Scalars['String']>;
  amtPaid: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  Order: OrderCreateNestedOneWithoutFinancesInput;
};

export type FinanceUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  amtPaid?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  Order?: Maybe<OrderUpdateOneRequiredWithoutFinancesInput>;
};

export type InventoryCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  qttyInHand: Scalars['Int'];
};

export type InventoryUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  qttyInHand?: Maybe<IntFieldUpdateOperationsInput>;
};

export type ProductCreateInput = {
  id?: Maybe<Scalars['String']>;
  pdtName: Scalars['String'];
  pdtCode: Scalars['String'];
  unitPrice: Scalars['Int'];
  carts?: Maybe<CartCreateNestedManyWithoutProductInput>;
  orderDetails?: Maybe<OrderDetailCreateNestedManyWithoutProductInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  Category?: Maybe<CategoryCreateNestedOneWithoutProductsInput>;
};

export type ProductUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  pdtName?: Maybe<StringFieldUpdateOperationsInput>;
  pdtCode?: Maybe<StringFieldUpdateOperationsInput>;
  unitPrice?: Maybe<IntFieldUpdateOperationsInput>;
  carts?: Maybe<CartUpdateManyWithoutProductInput>;
  orderDetails?: Maybe<OrderDetailUpdateManyWithoutProductInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  Category?: Maybe<CategoryUpdateOneWithoutProductsInput>;
};

export type OrderCreateNestedManyWithoutAnnualBranchEmployeeInput = {
  create?: Maybe<Array<OrderCreateWithoutAnnualBranchEmployeeInput>>;
  connectOrCreate?: Maybe<Array<OrderCreateOrConnectWithoutAnnualBranchEmployeeInput>>;
  createMany?: Maybe<OrderCreateManyAnnualBranchEmployeeInputEnvelope>;
  connect?: Maybe<Array<OrderWhereUniqueInput>>;
};

export type CartCreateNestedManyWithoutAnnualBranchEmployeeInput = {
  create?: Maybe<Array<CartCreateWithoutAnnualBranchEmployeeInput>>;
  connectOrCreate?: Maybe<Array<CartCreateOrConnectWithoutAnnualBranchEmployeeInput>>;
  createMany?: Maybe<CartCreateManyAnnualBranchEmployeeInputEnvelope>;
  connect?: Maybe<Array<CartWhereUniqueInput>>;
};

export type BranchEmployeeCreateNestedOneWithoutAnnBranchEmployeeInput = {
  create?: Maybe<BranchEmployeeCreateWithoutAnnBranchEmployeeInput>;
  connectOrCreate?: Maybe<BranchEmployeeCreateOrConnectWithoutAnnBranchEmployeeInput>;
  connect?: Maybe<BranchEmployeeWhereUniqueInput>;
};

export type FinancialYearCreateNestedOneWithoutAnnBranchEmplsInput = {
  create?: Maybe<FinancialYearCreateWithoutAnnBranchEmplsInput>;
  connectOrCreate?: Maybe<FinancialYearCreateOrConnectWithoutAnnBranchEmplsInput>;
  connect?: Maybe<FinancialYearWhereUniqueInput>;
};

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type OrderUpdateManyWithoutAnnualBranchEmployeeInput = {
  create?: Maybe<Array<OrderCreateWithoutAnnualBranchEmployeeInput>>;
  connectOrCreate?: Maybe<Array<OrderCreateOrConnectWithoutAnnualBranchEmployeeInput>>;
  upsert?: Maybe<Array<OrderUpsertWithWhereUniqueWithoutAnnualBranchEmployeeInput>>;
  createMany?: Maybe<OrderCreateManyAnnualBranchEmployeeInputEnvelope>;
  set?: Maybe<Array<OrderWhereUniqueInput>>;
  disconnect?: Maybe<Array<OrderWhereUniqueInput>>;
  delete?: Maybe<Array<OrderWhereUniqueInput>>;
  connect?: Maybe<Array<OrderWhereUniqueInput>>;
  update?: Maybe<Array<OrderUpdateWithWhereUniqueWithoutAnnualBranchEmployeeInput>>;
  updateMany?: Maybe<Array<OrderUpdateManyWithWhereWithoutAnnualBranchEmployeeInput>>;
  deleteMany?: Maybe<Array<OrderScalarWhereInput>>;
};

export type CartUpdateManyWithoutAnnualBranchEmployeeInput = {
  create?: Maybe<Array<CartCreateWithoutAnnualBranchEmployeeInput>>;
  connectOrCreate?: Maybe<Array<CartCreateOrConnectWithoutAnnualBranchEmployeeInput>>;
  upsert?: Maybe<Array<CartUpsertWithWhereUniqueWithoutAnnualBranchEmployeeInput>>;
  createMany?: Maybe<CartCreateManyAnnualBranchEmployeeInputEnvelope>;
  set?: Maybe<Array<CartWhereUniqueInput>>;
  disconnect?: Maybe<Array<CartWhereUniqueInput>>;
  delete?: Maybe<Array<CartWhereUniqueInput>>;
  connect?: Maybe<Array<CartWhereUniqueInput>>;
  update?: Maybe<Array<CartUpdateWithWhereUniqueWithoutAnnualBranchEmployeeInput>>;
  updateMany?: Maybe<Array<CartUpdateManyWithWhereWithoutAnnualBranchEmployeeInput>>;
  deleteMany?: Maybe<Array<CartScalarWhereInput>>;
};

export type BranchEmployeeUpdateOneWithoutAnnBranchEmployeeInput = {
  create?: Maybe<BranchEmployeeCreateWithoutAnnBranchEmployeeInput>;
  connectOrCreate?: Maybe<BranchEmployeeCreateOrConnectWithoutAnnBranchEmployeeInput>;
  upsert?: Maybe<BranchEmployeeUpsertWithoutAnnBranchEmployeeInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  connect?: Maybe<BranchEmployeeWhereUniqueInput>;
  update?: Maybe<BranchEmployeeUpdateWithoutAnnBranchEmployeeInput>;
};

export type FinancialYearUpdateOneWithoutAnnBranchEmplsInput = {
  create?: Maybe<FinancialYearCreateWithoutAnnBranchEmplsInput>;
  connectOrCreate?: Maybe<FinancialYearCreateOrConnectWithoutAnnBranchEmplsInput>;
  upsert?: Maybe<FinancialYearUpsertWithoutAnnBranchEmplsInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  connect?: Maybe<FinancialYearWhereUniqueInput>;
  update?: Maybe<FinancialYearUpdateWithoutAnnBranchEmplsInput>;
};

export type OrderCreateNestedManyWithoutAnnualClientInput = {
  create?: Maybe<Array<OrderCreateWithoutAnnualClientInput>>;
  connectOrCreate?: Maybe<Array<OrderCreateOrConnectWithoutAnnualClientInput>>;
  createMany?: Maybe<OrderCreateManyAnnualClientInputEnvelope>;
  connect?: Maybe<Array<OrderWhereUniqueInput>>;
};

export type CartCreateNestedManyWithoutAnnualClientInput = {
  create?: Maybe<Array<CartCreateWithoutAnnualClientInput>>;
  connectOrCreate?: Maybe<Array<CartCreateOrConnectWithoutAnnualClientInput>>;
  createMany?: Maybe<CartCreateManyAnnualClientInputEnvelope>;
  connect?: Maybe<Array<CartWhereUniqueInput>>;
};

export type ClientCreateNestedOneWithoutAnnClientsInput = {
  create?: Maybe<ClientCreateWithoutAnnClientsInput>;
  connectOrCreate?: Maybe<ClientCreateOrConnectWithoutAnnClientsInput>;
  connect?: Maybe<ClientWhereUniqueInput>;
};

export type FinancialYearCreateNestedOneWithoutAnnClientsInput = {
  create?: Maybe<FinancialYearCreateWithoutAnnClientsInput>;
  connectOrCreate?: Maybe<FinancialYearCreateOrConnectWithoutAnnClientsInput>;
  connect?: Maybe<FinancialYearWhereUniqueInput>;
};

export type OrderUpdateManyWithoutAnnualClientInput = {
  create?: Maybe<Array<OrderCreateWithoutAnnualClientInput>>;
  connectOrCreate?: Maybe<Array<OrderCreateOrConnectWithoutAnnualClientInput>>;
  upsert?: Maybe<Array<OrderUpsertWithWhereUniqueWithoutAnnualClientInput>>;
  createMany?: Maybe<OrderCreateManyAnnualClientInputEnvelope>;
  set?: Maybe<Array<OrderWhereUniqueInput>>;
  disconnect?: Maybe<Array<OrderWhereUniqueInput>>;
  delete?: Maybe<Array<OrderWhereUniqueInput>>;
  connect?: Maybe<Array<OrderWhereUniqueInput>>;
  update?: Maybe<Array<OrderUpdateWithWhereUniqueWithoutAnnualClientInput>>;
  updateMany?: Maybe<Array<OrderUpdateManyWithWhereWithoutAnnualClientInput>>;
  deleteMany?: Maybe<Array<OrderScalarWhereInput>>;
};

export type CartUpdateManyWithoutAnnualClientInput = {
  create?: Maybe<Array<CartCreateWithoutAnnualClientInput>>;
  connectOrCreate?: Maybe<Array<CartCreateOrConnectWithoutAnnualClientInput>>;
  upsert?: Maybe<Array<CartUpsertWithWhereUniqueWithoutAnnualClientInput>>;
  createMany?: Maybe<CartCreateManyAnnualClientInputEnvelope>;
  set?: Maybe<Array<CartWhereUniqueInput>>;
  disconnect?: Maybe<Array<CartWhereUniqueInput>>;
  delete?: Maybe<Array<CartWhereUniqueInput>>;
  connect?: Maybe<Array<CartWhereUniqueInput>>;
  update?: Maybe<Array<CartUpdateWithWhereUniqueWithoutAnnualClientInput>>;
  updateMany?: Maybe<Array<CartUpdateManyWithWhereWithoutAnnualClientInput>>;
  deleteMany?: Maybe<Array<CartScalarWhereInput>>;
};

export type ClientUpdateOneWithoutAnnClientsInput = {
  create?: Maybe<ClientCreateWithoutAnnClientsInput>;
  connectOrCreate?: Maybe<ClientCreateOrConnectWithoutAnnClientsInput>;
  upsert?: Maybe<ClientUpsertWithoutAnnClientsInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  connect?: Maybe<ClientWhereUniqueInput>;
  update?: Maybe<ClientUpdateWithoutAnnClientsInput>;
};

export type FinancialYearUpdateOneWithoutAnnClientsInput = {
  create?: Maybe<FinancialYearCreateWithoutAnnClientsInput>;
  connectOrCreate?: Maybe<FinancialYearCreateOrConnectWithoutAnnClientsInput>;
  upsert?: Maybe<FinancialYearUpsertWithoutAnnClientsInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  connect?: Maybe<FinancialYearWhereUniqueInput>;
  update?: Maybe<FinancialYearUpdateWithoutAnnClientsInput>;
};

export type ProductCreateNestedOneWithoutCartsInput = {
  create?: Maybe<ProductCreateWithoutCartsInput>;
  connectOrCreate?: Maybe<ProductCreateOrConnectWithoutCartsInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
};

export type AnnualClientCreateNestedOneWithoutCartsInput = {
  create?: Maybe<AnnualClientCreateWithoutCartsInput>;
  connectOrCreate?: Maybe<AnnualClientCreateOrConnectWithoutCartsInput>;
  connect?: Maybe<AnnualClientWhereUniqueInput>;
};

export type AnnualBranchEmployeeCreateNestedOneWithoutCartsInput = {
  create?: Maybe<AnnualBranchEmployeeCreateWithoutCartsInput>;
  connectOrCreate?: Maybe<AnnualBranchEmployeeCreateOrConnectWithoutCartsInput>;
  connect?: Maybe<AnnualBranchEmployeeWhereUniqueInput>;
};

export type FloatFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Float']>;
  increment?: Maybe<Scalars['Float']>;
  decrement?: Maybe<Scalars['Float']>;
  multiply?: Maybe<Scalars['Float']>;
  divide?: Maybe<Scalars['Float']>;
};

export type IntFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Int']>;
  increment?: Maybe<Scalars['Int']>;
  decrement?: Maybe<Scalars['Int']>;
  multiply?: Maybe<Scalars['Int']>;
  divide?: Maybe<Scalars['Int']>;
};

export type ProductUpdateOneRequiredWithoutCartsInput = {
  create?: Maybe<ProductCreateWithoutCartsInput>;
  connectOrCreate?: Maybe<ProductCreateOrConnectWithoutCartsInput>;
  upsert?: Maybe<ProductUpsertWithoutCartsInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
  update?: Maybe<ProductUpdateWithoutCartsInput>;
};

export type AnnualClientUpdateOneWithoutCartsInput = {
  create?: Maybe<AnnualClientCreateWithoutCartsInput>;
  connectOrCreate?: Maybe<AnnualClientCreateOrConnectWithoutCartsInput>;
  upsert?: Maybe<AnnualClientUpsertWithoutCartsInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  connect?: Maybe<AnnualClientWhereUniqueInput>;
  update?: Maybe<AnnualClientUpdateWithoutCartsInput>;
};

export type AnnualBranchEmployeeUpdateOneWithoutCartsInput = {
  create?: Maybe<AnnualBranchEmployeeCreateWithoutCartsInput>;
  connectOrCreate?: Maybe<AnnualBranchEmployeeCreateOrConnectWithoutCartsInput>;
  upsert?: Maybe<AnnualBranchEmployeeUpsertWithoutCartsInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  connect?: Maybe<AnnualBranchEmployeeWhereUniqueInput>;
  update?: Maybe<AnnualBranchEmployeeUpdateWithoutCartsInput>;
};

export type ProductCreateNestedManyWithoutCategoryInput = {
  create?: Maybe<Array<ProductCreateWithoutCategoryInput>>;
  connectOrCreate?: Maybe<Array<ProductCreateOrConnectWithoutCategoryInput>>;
  createMany?: Maybe<ProductCreateManyCategoryInputEnvelope>;
  connect?: Maybe<Array<ProductWhereUniqueInput>>;
};

export type ProductUpdateManyWithoutCategoryInput = {
  create?: Maybe<Array<ProductCreateWithoutCategoryInput>>;
  connectOrCreate?: Maybe<Array<ProductCreateOrConnectWithoutCategoryInput>>;
  upsert?: Maybe<Array<ProductUpsertWithWhereUniqueWithoutCategoryInput>>;
  createMany?: Maybe<ProductCreateManyCategoryInputEnvelope>;
  set?: Maybe<Array<ProductWhereUniqueInput>>;
  disconnect?: Maybe<Array<ProductWhereUniqueInput>>;
  delete?: Maybe<Array<ProductWhereUniqueInput>>;
  connect?: Maybe<Array<ProductWhereUniqueInput>>;
  update?: Maybe<Array<ProductUpdateWithWhereUniqueWithoutCategoryInput>>;
  updateMany?: Maybe<Array<ProductUpdateManyWithWhereWithoutCategoryInput>>;
  deleteMany?: Maybe<Array<ProductScalarWhereInput>>;
};

export type AnnualClientCreateNestedManyWithoutClientInput = {
  create?: Maybe<Array<AnnualClientCreateWithoutClientInput>>;
  connectOrCreate?: Maybe<Array<AnnualClientCreateOrConnectWithoutClientInput>>;
  createMany?: Maybe<AnnualClientCreateManyClientInputEnvelope>;
  connect?: Maybe<Array<AnnualClientWhereUniqueInput>>;
};

export type AnnualClientUpdateManyWithoutClientInput = {
  create?: Maybe<Array<AnnualClientCreateWithoutClientInput>>;
  connectOrCreate?: Maybe<Array<AnnualClientCreateOrConnectWithoutClientInput>>;
  upsert?: Maybe<Array<AnnualClientUpsertWithWhereUniqueWithoutClientInput>>;
  createMany?: Maybe<AnnualClientCreateManyClientInputEnvelope>;
  set?: Maybe<Array<AnnualClientWhereUniqueInput>>;
  disconnect?: Maybe<Array<AnnualClientWhereUniqueInput>>;
  delete?: Maybe<Array<AnnualClientWhereUniqueInput>>;
  connect?: Maybe<Array<AnnualClientWhereUniqueInput>>;
  update?: Maybe<Array<AnnualClientUpdateWithWhereUniqueWithoutClientInput>>;
  updateMany?: Maybe<Array<AnnualClientUpdateManyWithWhereWithoutClientInput>>;
  deleteMany?: Maybe<Array<AnnualClientScalarWhereInput>>;
};

export type OrderCreateNestedOneWithoutOrderDetailsInput = {
  create?: Maybe<OrderCreateWithoutOrderDetailsInput>;
  connectOrCreate?: Maybe<OrderCreateOrConnectWithoutOrderDetailsInput>;
  connect?: Maybe<OrderWhereUniqueInput>;
};

export type ProductCreateNestedOneWithoutOrderDetailsInput = {
  create?: Maybe<ProductCreateWithoutOrderDetailsInput>;
  connectOrCreate?: Maybe<ProductCreateOrConnectWithoutOrderDetailsInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
};

export type OrderUpdateOneRequiredWithoutOrderDetailsInput = {
  create?: Maybe<OrderCreateWithoutOrderDetailsInput>;
  connectOrCreate?: Maybe<OrderCreateOrConnectWithoutOrderDetailsInput>;
  upsert?: Maybe<OrderUpsertWithoutOrderDetailsInput>;
  connect?: Maybe<OrderWhereUniqueInput>;
  update?: Maybe<OrderUpdateWithoutOrderDetailsInput>;
};

export type ProductUpdateOneRequiredWithoutOrderDetailsInput = {
  create?: Maybe<ProductCreateWithoutOrderDetailsInput>;
  connectOrCreate?: Maybe<ProductCreateOrConnectWithoutOrderDetailsInput>;
  upsert?: Maybe<ProductUpsertWithoutOrderDetailsInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
  update?: Maybe<ProductUpdateWithoutOrderDetailsInput>;
};

export type OrderDetailCreateNestedManyWithoutOrderInput = {
  create?: Maybe<Array<OrderDetailCreateWithoutOrderInput>>;
  connectOrCreate?: Maybe<Array<OrderDetailCreateOrConnectWithoutOrderInput>>;
  createMany?: Maybe<OrderDetailCreateManyOrderInputEnvelope>;
  connect?: Maybe<Array<OrderDetailWhereUniqueInput>>;
};

export type FinanceCreateNestedManyWithoutOrderInput = {
  create?: Maybe<Array<FinanceCreateWithoutOrderInput>>;
  connectOrCreate?: Maybe<Array<FinanceCreateOrConnectWithoutOrderInput>>;
  createMany?: Maybe<FinanceCreateManyOrderInputEnvelope>;
  connect?: Maybe<Array<FinanceWhereUniqueInput>>;
};

export type AnnualClientCreateNestedOneWithoutOrdersInput = {
  create?: Maybe<AnnualClientCreateWithoutOrdersInput>;
  connectOrCreate?: Maybe<AnnualClientCreateOrConnectWithoutOrdersInput>;
  connect?: Maybe<AnnualClientWhereUniqueInput>;
};

export type AnnualBranchEmployeeCreateNestedOneWithoutOrdersInput = {
  create?: Maybe<AnnualBranchEmployeeCreateWithoutOrdersInput>;
  connectOrCreate?: Maybe<AnnualBranchEmployeeCreateOrConnectWithoutOrdersInput>;
  connect?: Maybe<AnnualBranchEmployeeWhereUniqueInput>;
};

export type OrderDetailUpdateManyWithoutOrderInput = {
  create?: Maybe<Array<OrderDetailCreateWithoutOrderInput>>;
  connectOrCreate?: Maybe<Array<OrderDetailCreateOrConnectWithoutOrderInput>>;
  upsert?: Maybe<Array<OrderDetailUpsertWithWhereUniqueWithoutOrderInput>>;
  createMany?: Maybe<OrderDetailCreateManyOrderInputEnvelope>;
  set?: Maybe<Array<OrderDetailWhereUniqueInput>>;
  disconnect?: Maybe<Array<OrderDetailWhereUniqueInput>>;
  delete?: Maybe<Array<OrderDetailWhereUniqueInput>>;
  connect?: Maybe<Array<OrderDetailWhereUniqueInput>>;
  update?: Maybe<Array<OrderDetailUpdateWithWhereUniqueWithoutOrderInput>>;
  updateMany?: Maybe<Array<OrderDetailUpdateManyWithWhereWithoutOrderInput>>;
  deleteMany?: Maybe<Array<OrderDetailScalarWhereInput>>;
};

export type FinanceUpdateManyWithoutOrderInput = {
  create?: Maybe<Array<FinanceCreateWithoutOrderInput>>;
  connectOrCreate?: Maybe<Array<FinanceCreateOrConnectWithoutOrderInput>>;
  upsert?: Maybe<Array<FinanceUpsertWithWhereUniqueWithoutOrderInput>>;
  createMany?: Maybe<FinanceCreateManyOrderInputEnvelope>;
  set?: Maybe<Array<FinanceWhereUniqueInput>>;
  disconnect?: Maybe<Array<FinanceWhereUniqueInput>>;
  delete?: Maybe<Array<FinanceWhereUniqueInput>>;
  connect?: Maybe<Array<FinanceWhereUniqueInput>>;
  update?: Maybe<Array<FinanceUpdateWithWhereUniqueWithoutOrderInput>>;
  updateMany?: Maybe<Array<FinanceUpdateManyWithWhereWithoutOrderInput>>;
  deleteMany?: Maybe<Array<FinanceScalarWhereInput>>;
};

export type AnnualClientUpdateOneWithoutOrdersInput = {
  create?: Maybe<AnnualClientCreateWithoutOrdersInput>;
  connectOrCreate?: Maybe<AnnualClientCreateOrConnectWithoutOrdersInput>;
  upsert?: Maybe<AnnualClientUpsertWithoutOrdersInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  connect?: Maybe<AnnualClientWhereUniqueInput>;
  update?: Maybe<AnnualClientUpdateWithoutOrdersInput>;
};

export type AnnualBranchEmployeeUpdateOneWithoutOrdersInput = {
  create?: Maybe<AnnualBranchEmployeeCreateWithoutOrdersInput>;
  connectOrCreate?: Maybe<AnnualBranchEmployeeCreateOrConnectWithoutOrdersInput>;
  upsert?: Maybe<AnnualBranchEmployeeUpsertWithoutOrdersInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  connect?: Maybe<AnnualBranchEmployeeWhereUniqueInput>;
  update?: Maybe<AnnualBranchEmployeeUpdateWithoutOrdersInput>;
};

export type BranchEmployeeCreateNestedManyWithoutBranchInput = {
  create?: Maybe<Array<BranchEmployeeCreateWithoutBranchInput>>;
  connectOrCreate?: Maybe<Array<BranchEmployeeCreateOrConnectWithoutBranchInput>>;
  createMany?: Maybe<BranchEmployeeCreateManyBranchInputEnvelope>;
  connect?: Maybe<Array<BranchEmployeeWhereUniqueInput>>;
};

export type BranchEmployeeUpdateManyWithoutBranchInput = {
  create?: Maybe<Array<BranchEmployeeCreateWithoutBranchInput>>;
  connectOrCreate?: Maybe<Array<BranchEmployeeCreateOrConnectWithoutBranchInput>>;
  upsert?: Maybe<Array<BranchEmployeeUpsertWithWhereUniqueWithoutBranchInput>>;
  createMany?: Maybe<BranchEmployeeCreateManyBranchInputEnvelope>;
  set?: Maybe<Array<BranchEmployeeWhereUniqueInput>>;
  disconnect?: Maybe<Array<BranchEmployeeWhereUniqueInput>>;
  delete?: Maybe<Array<BranchEmployeeWhereUniqueInput>>;
  connect?: Maybe<Array<BranchEmployeeWhereUniqueInput>>;
  update?: Maybe<Array<BranchEmployeeUpdateWithWhereUniqueWithoutBranchInput>>;
  updateMany?: Maybe<Array<BranchEmployeeUpdateManyWithWhereWithoutBranchInput>>;
  deleteMany?: Maybe<Array<BranchEmployeeScalarWhereInput>>;
};

export type AnnualBranchEmployeeCreateNestedManyWithoutBranchEmployeeInput = {
  create?: Maybe<Array<AnnualBranchEmployeeCreateWithoutBranchEmployeeInput>>;
  connectOrCreate?: Maybe<Array<AnnualBranchEmployeeCreateOrConnectWithoutBranchEmployeeInput>>;
  createMany?: Maybe<AnnualBranchEmployeeCreateManyBranchEmployeeInputEnvelope>;
  connect?: Maybe<Array<AnnualBranchEmployeeWhereUniqueInput>>;
};

export type EmployeeCreateNestedOneWithoutBranchEmplsInput = {
  create?: Maybe<EmployeeCreateWithoutBranchEmplsInput>;
  connectOrCreate?: Maybe<EmployeeCreateOrConnectWithoutBranchEmplsInput>;
  connect?: Maybe<EmployeeWhereUniqueInput>;
};

export type BranchCreateNestedOneWithoutBranchEmplsInput = {
  create?: Maybe<BranchCreateWithoutBranchEmplsInput>;
  connectOrCreate?: Maybe<BranchCreateOrConnectWithoutBranchEmplsInput>;
  connect?: Maybe<BranchWhereUniqueInput>;
};

export type EmployeeStatusCreateNestedOneWithoutBranchEmplsInput = {
  create?: Maybe<EmployeeStatusCreateWithoutBranchEmplsInput>;
  connectOrCreate?: Maybe<EmployeeStatusCreateOrConnectWithoutBranchEmplsInput>;
  connect?: Maybe<EmployeeStatusWhereUniqueInput>;
};

export type AnnualBranchEmployeeUpdateManyWithoutBranchEmployeeInput = {
  create?: Maybe<Array<AnnualBranchEmployeeCreateWithoutBranchEmployeeInput>>;
  connectOrCreate?: Maybe<Array<AnnualBranchEmployeeCreateOrConnectWithoutBranchEmployeeInput>>;
  upsert?: Maybe<Array<AnnualBranchEmployeeUpsertWithWhereUniqueWithoutBranchEmployeeInput>>;
  createMany?: Maybe<AnnualBranchEmployeeCreateManyBranchEmployeeInputEnvelope>;
  set?: Maybe<Array<AnnualBranchEmployeeWhereUniqueInput>>;
  disconnect?: Maybe<Array<AnnualBranchEmployeeWhereUniqueInput>>;
  delete?: Maybe<Array<AnnualBranchEmployeeWhereUniqueInput>>;
  connect?: Maybe<Array<AnnualBranchEmployeeWhereUniqueInput>>;
  update?: Maybe<Array<AnnualBranchEmployeeUpdateWithWhereUniqueWithoutBranchEmployeeInput>>;
  updateMany?: Maybe<Array<AnnualBranchEmployeeUpdateManyWithWhereWithoutBranchEmployeeInput>>;
  deleteMany?: Maybe<Array<AnnualBranchEmployeeScalarWhereInput>>;
};

export type EmployeeUpdateOneRequiredWithoutBranchEmplsInput = {
  create?: Maybe<EmployeeCreateWithoutBranchEmplsInput>;
  connectOrCreate?: Maybe<EmployeeCreateOrConnectWithoutBranchEmplsInput>;
  upsert?: Maybe<EmployeeUpsertWithoutBranchEmplsInput>;
  connect?: Maybe<EmployeeWhereUniqueInput>;
  update?: Maybe<EmployeeUpdateWithoutBranchEmplsInput>;
};

export type BranchUpdateOneRequiredWithoutBranchEmplsInput = {
  create?: Maybe<BranchCreateWithoutBranchEmplsInput>;
  connectOrCreate?: Maybe<BranchCreateOrConnectWithoutBranchEmplsInput>;
  upsert?: Maybe<BranchUpsertWithoutBranchEmplsInput>;
  connect?: Maybe<BranchWhereUniqueInput>;
  update?: Maybe<BranchUpdateWithoutBranchEmplsInput>;
};

export type EmployeeStatusUpdateOneRequiredWithoutBranchEmplsInput = {
  create?: Maybe<EmployeeStatusCreateWithoutBranchEmplsInput>;
  connectOrCreate?: Maybe<EmployeeStatusCreateOrConnectWithoutBranchEmplsInput>;
  upsert?: Maybe<EmployeeStatusUpsertWithoutBranchEmplsInput>;
  connect?: Maybe<EmployeeStatusWhereUniqueInput>;
  update?: Maybe<EmployeeStatusUpdateWithoutBranchEmplsInput>;
};

export type AnnualBranchEmployeeCreateNestedManyWithoutFinancialYearInput = {
  create?: Maybe<Array<AnnualBranchEmployeeCreateWithoutFinancialYearInput>>;
  connectOrCreate?: Maybe<Array<AnnualBranchEmployeeCreateOrConnectWithoutFinancialYearInput>>;
  createMany?: Maybe<AnnualBranchEmployeeCreateManyFinancialYearInputEnvelope>;
  connect?: Maybe<Array<AnnualBranchEmployeeWhereUniqueInput>>;
};

export type AnnualClientCreateNestedManyWithoutFinancialYearInput = {
  create?: Maybe<Array<AnnualClientCreateWithoutFinancialYearInput>>;
  connectOrCreate?: Maybe<Array<AnnualClientCreateOrConnectWithoutFinancialYearInput>>;
  createMany?: Maybe<AnnualClientCreateManyFinancialYearInputEnvelope>;
  connect?: Maybe<Array<AnnualClientWhereUniqueInput>>;
};

export type AnnualBranchEmployeeUpdateManyWithoutFinancialYearInput = {
  create?: Maybe<Array<AnnualBranchEmployeeCreateWithoutFinancialYearInput>>;
  connectOrCreate?: Maybe<Array<AnnualBranchEmployeeCreateOrConnectWithoutFinancialYearInput>>;
  upsert?: Maybe<Array<AnnualBranchEmployeeUpsertWithWhereUniqueWithoutFinancialYearInput>>;
  createMany?: Maybe<AnnualBranchEmployeeCreateManyFinancialYearInputEnvelope>;
  set?: Maybe<Array<AnnualBranchEmployeeWhereUniqueInput>>;
  disconnect?: Maybe<Array<AnnualBranchEmployeeWhereUniqueInput>>;
  delete?: Maybe<Array<AnnualBranchEmployeeWhereUniqueInput>>;
  connect?: Maybe<Array<AnnualBranchEmployeeWhereUniqueInput>>;
  update?: Maybe<Array<AnnualBranchEmployeeUpdateWithWhereUniqueWithoutFinancialYearInput>>;
  updateMany?: Maybe<Array<AnnualBranchEmployeeUpdateManyWithWhereWithoutFinancialYearInput>>;
  deleteMany?: Maybe<Array<AnnualBranchEmployeeScalarWhereInput>>;
};

export type AnnualClientUpdateManyWithoutFinancialYearInput = {
  create?: Maybe<Array<AnnualClientCreateWithoutFinancialYearInput>>;
  connectOrCreate?: Maybe<Array<AnnualClientCreateOrConnectWithoutFinancialYearInput>>;
  upsert?: Maybe<Array<AnnualClientUpsertWithWhereUniqueWithoutFinancialYearInput>>;
  createMany?: Maybe<AnnualClientCreateManyFinancialYearInputEnvelope>;
  set?: Maybe<Array<AnnualClientWhereUniqueInput>>;
  disconnect?: Maybe<Array<AnnualClientWhereUniqueInput>>;
  delete?: Maybe<Array<AnnualClientWhereUniqueInput>>;
  connect?: Maybe<Array<AnnualClientWhereUniqueInput>>;
  update?: Maybe<Array<AnnualClientUpdateWithWhereUniqueWithoutFinancialYearInput>>;
  updateMany?: Maybe<Array<AnnualClientUpdateManyWithWhereWithoutFinancialYearInput>>;
  deleteMany?: Maybe<Array<AnnualClientScalarWhereInput>>;
};

export type BranchEmployeeCreateNestedManyWithoutEmployeeInput = {
  create?: Maybe<Array<BranchEmployeeCreateWithoutEmployeeInput>>;
  connectOrCreate?: Maybe<Array<BranchEmployeeCreateOrConnectWithoutEmployeeInput>>;
  createMany?: Maybe<BranchEmployeeCreateManyEmployeeInputEnvelope>;
  connect?: Maybe<Array<BranchEmployeeWhereUniqueInput>>;
};

export type BranchEmployeeUpdateManyWithoutEmployeeInput = {
  create?: Maybe<Array<BranchEmployeeCreateWithoutEmployeeInput>>;
  connectOrCreate?: Maybe<Array<BranchEmployeeCreateOrConnectWithoutEmployeeInput>>;
  upsert?: Maybe<Array<BranchEmployeeUpsertWithWhereUniqueWithoutEmployeeInput>>;
  createMany?: Maybe<BranchEmployeeCreateManyEmployeeInputEnvelope>;
  set?: Maybe<Array<BranchEmployeeWhereUniqueInput>>;
  disconnect?: Maybe<Array<BranchEmployeeWhereUniqueInput>>;
  delete?: Maybe<Array<BranchEmployeeWhereUniqueInput>>;
  connect?: Maybe<Array<BranchEmployeeWhereUniqueInput>>;
  update?: Maybe<Array<BranchEmployeeUpdateWithWhereUniqueWithoutEmployeeInput>>;
  updateMany?: Maybe<Array<BranchEmployeeUpdateManyWithWhereWithoutEmployeeInput>>;
  deleteMany?: Maybe<Array<BranchEmployeeScalarWhereInput>>;
};

export type BranchEmployeeCreateNestedManyWithoutEmployeeStatusInput = {
  create?: Maybe<Array<BranchEmployeeCreateWithoutEmployeeStatusInput>>;
  connectOrCreate?: Maybe<Array<BranchEmployeeCreateOrConnectWithoutEmployeeStatusInput>>;
  createMany?: Maybe<BranchEmployeeCreateManyEmployeeStatusInputEnvelope>;
  connect?: Maybe<Array<BranchEmployeeWhereUniqueInput>>;
};

export type BranchEmployeeUpdateManyWithoutEmployeeStatusInput = {
  create?: Maybe<Array<BranchEmployeeCreateWithoutEmployeeStatusInput>>;
  connectOrCreate?: Maybe<Array<BranchEmployeeCreateOrConnectWithoutEmployeeStatusInput>>;
  upsert?: Maybe<Array<BranchEmployeeUpsertWithWhereUniqueWithoutEmployeeStatusInput>>;
  createMany?: Maybe<BranchEmployeeCreateManyEmployeeStatusInputEnvelope>;
  set?: Maybe<Array<BranchEmployeeWhereUniqueInput>>;
  disconnect?: Maybe<Array<BranchEmployeeWhereUniqueInput>>;
  delete?: Maybe<Array<BranchEmployeeWhereUniqueInput>>;
  connect?: Maybe<Array<BranchEmployeeWhereUniqueInput>>;
  update?: Maybe<Array<BranchEmployeeUpdateWithWhereUniqueWithoutEmployeeStatusInput>>;
  updateMany?: Maybe<Array<BranchEmployeeUpdateManyWithWhereWithoutEmployeeStatusInput>>;
  deleteMany?: Maybe<Array<BranchEmployeeScalarWhereInput>>;
};

export type OrderCreateNestedOneWithoutFinancesInput = {
  create?: Maybe<OrderCreateWithoutFinancesInput>;
  connectOrCreate?: Maybe<OrderCreateOrConnectWithoutFinancesInput>;
  connect?: Maybe<OrderWhereUniqueInput>;
};

export type OrderUpdateOneRequiredWithoutFinancesInput = {
  create?: Maybe<OrderCreateWithoutFinancesInput>;
  connectOrCreate?: Maybe<OrderCreateOrConnectWithoutFinancesInput>;
  upsert?: Maybe<OrderUpsertWithoutFinancesInput>;
  connect?: Maybe<OrderWhereUniqueInput>;
  update?: Maybe<OrderUpdateWithoutFinancesInput>;
};

export type CartCreateNestedManyWithoutProductInput = {
  create?: Maybe<Array<CartCreateWithoutProductInput>>;
  connectOrCreate?: Maybe<Array<CartCreateOrConnectWithoutProductInput>>;
  createMany?: Maybe<CartCreateManyProductInputEnvelope>;
  connect?: Maybe<Array<CartWhereUniqueInput>>;
};

export type OrderDetailCreateNestedManyWithoutProductInput = {
  create?: Maybe<Array<OrderDetailCreateWithoutProductInput>>;
  connectOrCreate?: Maybe<Array<OrderDetailCreateOrConnectWithoutProductInput>>;
  createMany?: Maybe<OrderDetailCreateManyProductInputEnvelope>;
  connect?: Maybe<Array<OrderDetailWhereUniqueInput>>;
};

export type CategoryCreateNestedOneWithoutProductsInput = {
  create?: Maybe<CategoryCreateWithoutProductsInput>;
  connectOrCreate?: Maybe<CategoryCreateOrConnectWithoutProductsInput>;
  connect?: Maybe<CategoryWhereUniqueInput>;
};

export type CartUpdateManyWithoutProductInput = {
  create?: Maybe<Array<CartCreateWithoutProductInput>>;
  connectOrCreate?: Maybe<Array<CartCreateOrConnectWithoutProductInput>>;
  upsert?: Maybe<Array<CartUpsertWithWhereUniqueWithoutProductInput>>;
  createMany?: Maybe<CartCreateManyProductInputEnvelope>;
  set?: Maybe<Array<CartWhereUniqueInput>>;
  disconnect?: Maybe<Array<CartWhereUniqueInput>>;
  delete?: Maybe<Array<CartWhereUniqueInput>>;
  connect?: Maybe<Array<CartWhereUniqueInput>>;
  update?: Maybe<Array<CartUpdateWithWhereUniqueWithoutProductInput>>;
  updateMany?: Maybe<Array<CartUpdateManyWithWhereWithoutProductInput>>;
  deleteMany?: Maybe<Array<CartScalarWhereInput>>;
};

export type OrderDetailUpdateManyWithoutProductInput = {
  create?: Maybe<Array<OrderDetailCreateWithoutProductInput>>;
  connectOrCreate?: Maybe<Array<OrderDetailCreateOrConnectWithoutProductInput>>;
  upsert?: Maybe<Array<OrderDetailUpsertWithWhereUniqueWithoutProductInput>>;
  createMany?: Maybe<OrderDetailCreateManyProductInputEnvelope>;
  set?: Maybe<Array<OrderDetailWhereUniqueInput>>;
  disconnect?: Maybe<Array<OrderDetailWhereUniqueInput>>;
  delete?: Maybe<Array<OrderDetailWhereUniqueInput>>;
  connect?: Maybe<Array<OrderDetailWhereUniqueInput>>;
  update?: Maybe<Array<OrderDetailUpdateWithWhereUniqueWithoutProductInput>>;
  updateMany?: Maybe<Array<OrderDetailUpdateManyWithWhereWithoutProductInput>>;
  deleteMany?: Maybe<Array<OrderDetailScalarWhereInput>>;
};

export type CategoryUpdateOneWithoutProductsInput = {
  create?: Maybe<CategoryCreateWithoutProductsInput>;
  connectOrCreate?: Maybe<CategoryCreateOrConnectWithoutProductsInput>;
  upsert?: Maybe<CategoryUpsertWithoutProductsInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  connect?: Maybe<CategoryWhereUniqueInput>;
  update?: Maybe<CategoryUpdateWithoutProductsInput>;
};

export type OrderCreateWithoutAnnualBranchEmployeeInput = {
  id?: Maybe<Scalars['String']>;
  orderTotal: Scalars['Int'];
  totalPaid: Scalars['Int'];
  orderNumber: Scalars['String'];
  orderDate?: Maybe<Scalars['DateTime']>;
  orderDetails?: Maybe<OrderDetailCreateNestedManyWithoutOrderInput>;
  finances?: Maybe<FinanceCreateNestedManyWithoutOrderInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  AnnualClient?: Maybe<AnnualClientCreateNestedOneWithoutOrdersInput>;
};

export type OrderCreateOrConnectWithoutAnnualBranchEmployeeInput = {
  where: OrderWhereUniqueInput;
  create: OrderCreateWithoutAnnualBranchEmployeeInput;
};

export type OrderCreateManyAnnualBranchEmployeeInputEnvelope = {
  data?: Maybe<Array<OrderCreateManyAnnualBranchEmployeeInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CartCreateWithoutAnnualBranchEmployeeInput = {
  id?: Maybe<Scalars['String']>;
  qtty: Scalars['Float'];
  pdtCost: Scalars['Int'];
  salesPrice: Scalars['Int'];
  orderDate?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  Product: ProductCreateNestedOneWithoutCartsInput;
  AnnualClient?: Maybe<AnnualClientCreateNestedOneWithoutCartsInput>;
};

export type CartCreateOrConnectWithoutAnnualBranchEmployeeInput = {
  where: CartWhereUniqueInput;
  create: CartCreateWithoutAnnualBranchEmployeeInput;
};

export type CartCreateManyAnnualBranchEmployeeInputEnvelope = {
  data?: Maybe<Array<CartCreateManyAnnualBranchEmployeeInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type BranchEmployeeCreateWithoutAnnBranchEmployeeInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  startDate?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['DateTime']>;
  Employee: EmployeeCreateNestedOneWithoutBranchEmplsInput;
  Branch: BranchCreateNestedOneWithoutBranchEmplsInput;
  EmployeeStatus: EmployeeStatusCreateNestedOneWithoutBranchEmplsInput;
};

export type BranchEmployeeCreateOrConnectWithoutAnnBranchEmployeeInput = {
  where: BranchEmployeeWhereUniqueInput;
  create: BranchEmployeeCreateWithoutAnnBranchEmployeeInput;
};

export type FinancialYearCreateWithoutAnnBranchEmplsInput = {
  id?: Maybe<Scalars['String']>;
  annClients?: Maybe<AnnualClientCreateNestedManyWithoutFinancialYearInput>;
  yearName: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FinancialYearCreateOrConnectWithoutAnnBranchEmplsInput = {
  where: FinancialYearWhereUniqueInput;
  create: FinancialYearCreateWithoutAnnBranchEmplsInput;
};

export type OrderUpsertWithWhereUniqueWithoutAnnualBranchEmployeeInput = {
  where: OrderWhereUniqueInput;
  update: OrderUpdateWithoutAnnualBranchEmployeeInput;
  create: OrderCreateWithoutAnnualBranchEmployeeInput;
};

export type OrderUpdateWithWhereUniqueWithoutAnnualBranchEmployeeInput = {
  where: OrderWhereUniqueInput;
  data: OrderUpdateWithoutAnnualBranchEmployeeInput;
};

export type OrderUpdateManyWithWhereWithoutAnnualBranchEmployeeInput = {
  where: OrderScalarWhereInput;
  data: OrderUpdateManyMutationInput;
};

export type OrderScalarWhereInput = {
  AND?: Maybe<Array<OrderScalarWhereInput>>;
  OR?: Maybe<Array<OrderScalarWhereInput>>;
  NOT?: Maybe<Array<OrderScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  orderTotal?: Maybe<IntFilter>;
  totalPaid?: Maybe<IntFilter>;
  orderNumber?: Maybe<StringFilter>;
  orderDate?: Maybe<DateTimeFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  annualClientId?: Maybe<StringNullableFilter>;
  annualBranchEmployeeId?: Maybe<StringNullableFilter>;
};

export type CartUpsertWithWhereUniqueWithoutAnnualBranchEmployeeInput = {
  where: CartWhereUniqueInput;
  update: CartUpdateWithoutAnnualBranchEmployeeInput;
  create: CartCreateWithoutAnnualBranchEmployeeInput;
};

export type CartUpdateWithWhereUniqueWithoutAnnualBranchEmployeeInput = {
  where: CartWhereUniqueInput;
  data: CartUpdateWithoutAnnualBranchEmployeeInput;
};

export type CartUpdateManyWithWhereWithoutAnnualBranchEmployeeInput = {
  where: CartScalarWhereInput;
  data: CartUpdateManyMutationInput;
};

export type CartScalarWhereInput = {
  AND?: Maybe<Array<CartScalarWhereInput>>;
  OR?: Maybe<Array<CartScalarWhereInput>>;
  NOT?: Maybe<Array<CartScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  qtty?: Maybe<FloatFilter>;
  pdtCost?: Maybe<IntFilter>;
  salesPrice?: Maybe<IntFilter>;
  orderDate?: Maybe<DateTimeFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  productId?: Maybe<StringFilter>;
  annualClientId?: Maybe<StringNullableFilter>;
  annualBranchEmployeeId?: Maybe<StringNullableFilter>;
};

export type BranchEmployeeUpsertWithoutAnnBranchEmployeeInput = {
  update: BranchEmployeeUpdateWithoutAnnBranchEmployeeInput;
  create: BranchEmployeeCreateWithoutAnnBranchEmployeeInput;
};

export type BranchEmployeeUpdateWithoutAnnBranchEmployeeInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  startDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  endDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  Employee?: Maybe<EmployeeUpdateOneRequiredWithoutBranchEmplsInput>;
  Branch?: Maybe<BranchUpdateOneRequiredWithoutBranchEmplsInput>;
  EmployeeStatus?: Maybe<EmployeeStatusUpdateOneRequiredWithoutBranchEmplsInput>;
};

export type FinancialYearUpsertWithoutAnnBranchEmplsInput = {
  update: FinancialYearUpdateWithoutAnnBranchEmplsInput;
  create: FinancialYearCreateWithoutAnnBranchEmplsInput;
};

export type FinancialYearUpdateWithoutAnnBranchEmplsInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  annClients?: Maybe<AnnualClientUpdateManyWithoutFinancialYearInput>;
  yearName?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type OrderCreateWithoutAnnualClientInput = {
  id?: Maybe<Scalars['String']>;
  orderTotal: Scalars['Int'];
  totalPaid: Scalars['Int'];
  orderNumber: Scalars['String'];
  orderDate?: Maybe<Scalars['DateTime']>;
  orderDetails?: Maybe<OrderDetailCreateNestedManyWithoutOrderInput>;
  finances?: Maybe<FinanceCreateNestedManyWithoutOrderInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  AnnualBranchEmployee?: Maybe<AnnualBranchEmployeeCreateNestedOneWithoutOrdersInput>;
};

export type OrderCreateOrConnectWithoutAnnualClientInput = {
  where: OrderWhereUniqueInput;
  create: OrderCreateWithoutAnnualClientInput;
};

export type OrderCreateManyAnnualClientInputEnvelope = {
  data?: Maybe<Array<OrderCreateManyAnnualClientInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CartCreateWithoutAnnualClientInput = {
  id?: Maybe<Scalars['String']>;
  qtty: Scalars['Float'];
  pdtCost: Scalars['Int'];
  salesPrice: Scalars['Int'];
  orderDate?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  Product: ProductCreateNestedOneWithoutCartsInput;
  AnnualBranchEmployee?: Maybe<AnnualBranchEmployeeCreateNestedOneWithoutCartsInput>;
};

export type CartCreateOrConnectWithoutAnnualClientInput = {
  where: CartWhereUniqueInput;
  create: CartCreateWithoutAnnualClientInput;
};

export type CartCreateManyAnnualClientInputEnvelope = {
  data?: Maybe<Array<CartCreateManyAnnualClientInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ClientCreateWithoutAnnClientsInput = {
  id?: Maybe<Scalars['String']>;
  clientPhoneNumb: Scalars['Int'];
  clientNames: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ClientCreateOrConnectWithoutAnnClientsInput = {
  where: ClientWhereUniqueInput;
  create: ClientCreateWithoutAnnClientsInput;
};

export type FinancialYearCreateWithoutAnnClientsInput = {
  id?: Maybe<Scalars['String']>;
  annBranchEmpls?: Maybe<AnnualBranchEmployeeCreateNestedManyWithoutFinancialYearInput>;
  yearName: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FinancialYearCreateOrConnectWithoutAnnClientsInput = {
  where: FinancialYearWhereUniqueInput;
  create: FinancialYearCreateWithoutAnnClientsInput;
};

export type OrderUpsertWithWhereUniqueWithoutAnnualClientInput = {
  where: OrderWhereUniqueInput;
  update: OrderUpdateWithoutAnnualClientInput;
  create: OrderCreateWithoutAnnualClientInput;
};

export type OrderUpdateWithWhereUniqueWithoutAnnualClientInput = {
  where: OrderWhereUniqueInput;
  data: OrderUpdateWithoutAnnualClientInput;
};

export type OrderUpdateManyWithWhereWithoutAnnualClientInput = {
  where: OrderScalarWhereInput;
  data: OrderUpdateManyMutationInput;
};

export type CartUpsertWithWhereUniqueWithoutAnnualClientInput = {
  where: CartWhereUniqueInput;
  update: CartUpdateWithoutAnnualClientInput;
  create: CartCreateWithoutAnnualClientInput;
};

export type CartUpdateWithWhereUniqueWithoutAnnualClientInput = {
  where: CartWhereUniqueInput;
  data: CartUpdateWithoutAnnualClientInput;
};

export type CartUpdateManyWithWhereWithoutAnnualClientInput = {
  where: CartScalarWhereInput;
  data: CartUpdateManyMutationInput;
};

export type ClientUpsertWithoutAnnClientsInput = {
  update: ClientUpdateWithoutAnnClientsInput;
  create: ClientCreateWithoutAnnClientsInput;
};

export type ClientUpdateWithoutAnnClientsInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  clientPhoneNumb?: Maybe<IntFieldUpdateOperationsInput>;
  clientNames?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type FinancialYearUpsertWithoutAnnClientsInput = {
  update: FinancialYearUpdateWithoutAnnClientsInput;
  create: FinancialYearCreateWithoutAnnClientsInput;
};

export type FinancialYearUpdateWithoutAnnClientsInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  annBranchEmpls?: Maybe<AnnualBranchEmployeeUpdateManyWithoutFinancialYearInput>;
  yearName?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductCreateWithoutCartsInput = {
  id?: Maybe<Scalars['String']>;
  pdtName: Scalars['String'];
  pdtCode: Scalars['String'];
  unitPrice: Scalars['Int'];
  orderDetails?: Maybe<OrderDetailCreateNestedManyWithoutProductInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  Category?: Maybe<CategoryCreateNestedOneWithoutProductsInput>;
};

export type ProductCreateOrConnectWithoutCartsInput = {
  where: ProductWhereUniqueInput;
  create: ProductCreateWithoutCartsInput;
};

export type AnnualClientCreateWithoutCartsInput = {
  id?: Maybe<Scalars['String']>;
  orders?: Maybe<OrderCreateNestedManyWithoutAnnualClientInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  Client?: Maybe<ClientCreateNestedOneWithoutAnnClientsInput>;
  FinancialYear?: Maybe<FinancialYearCreateNestedOneWithoutAnnClientsInput>;
};

export type AnnualClientCreateOrConnectWithoutCartsInput = {
  where: AnnualClientWhereUniqueInput;
  create: AnnualClientCreateWithoutCartsInput;
};

export type AnnualBranchEmployeeCreateWithoutCartsInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  orders?: Maybe<OrderCreateNestedManyWithoutAnnualBranchEmployeeInput>;
  BranchEmployee?: Maybe<BranchEmployeeCreateNestedOneWithoutAnnBranchEmployeeInput>;
  FinancialYear?: Maybe<FinancialYearCreateNestedOneWithoutAnnBranchEmplsInput>;
};

export type AnnualBranchEmployeeCreateOrConnectWithoutCartsInput = {
  where: AnnualBranchEmployeeWhereUniqueInput;
  create: AnnualBranchEmployeeCreateWithoutCartsInput;
};

export type ProductUpsertWithoutCartsInput = {
  update: ProductUpdateWithoutCartsInput;
  create: ProductCreateWithoutCartsInput;
};

export type ProductUpdateWithoutCartsInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  pdtName?: Maybe<StringFieldUpdateOperationsInput>;
  pdtCode?: Maybe<StringFieldUpdateOperationsInput>;
  unitPrice?: Maybe<IntFieldUpdateOperationsInput>;
  orderDetails?: Maybe<OrderDetailUpdateManyWithoutProductInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  Category?: Maybe<CategoryUpdateOneWithoutProductsInput>;
};

export type AnnualClientUpsertWithoutCartsInput = {
  update: AnnualClientUpdateWithoutCartsInput;
  create: AnnualClientCreateWithoutCartsInput;
};

export type AnnualClientUpdateWithoutCartsInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  orders?: Maybe<OrderUpdateManyWithoutAnnualClientInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  Client?: Maybe<ClientUpdateOneWithoutAnnClientsInput>;
  FinancialYear?: Maybe<FinancialYearUpdateOneWithoutAnnClientsInput>;
};

export type AnnualBranchEmployeeUpsertWithoutCartsInput = {
  update: AnnualBranchEmployeeUpdateWithoutCartsInput;
  create: AnnualBranchEmployeeCreateWithoutCartsInput;
};

export type AnnualBranchEmployeeUpdateWithoutCartsInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  orders?: Maybe<OrderUpdateManyWithoutAnnualBranchEmployeeInput>;
  BranchEmployee?: Maybe<BranchEmployeeUpdateOneWithoutAnnBranchEmployeeInput>;
  FinancialYear?: Maybe<FinancialYearUpdateOneWithoutAnnBranchEmplsInput>;
};

export type ProductCreateWithoutCategoryInput = {
  id?: Maybe<Scalars['String']>;
  pdtName: Scalars['String'];
  pdtCode: Scalars['String'];
  unitPrice: Scalars['Int'];
  carts?: Maybe<CartCreateNestedManyWithoutProductInput>;
  orderDetails?: Maybe<OrderDetailCreateNestedManyWithoutProductInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductCreateOrConnectWithoutCategoryInput = {
  where: ProductWhereUniqueInput;
  create: ProductCreateWithoutCategoryInput;
};

export type ProductCreateManyCategoryInputEnvelope = {
  data?: Maybe<Array<ProductCreateManyCategoryInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
  where: ProductWhereUniqueInput;
  update: ProductUpdateWithoutCategoryInput;
  create: ProductCreateWithoutCategoryInput;
};

export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
  where: ProductWhereUniqueInput;
  data: ProductUpdateWithoutCategoryInput;
};

export type ProductUpdateManyWithWhereWithoutCategoryInput = {
  where: ProductScalarWhereInput;
  data: ProductUpdateManyMutationInput;
};

export type ProductScalarWhereInput = {
  AND?: Maybe<Array<ProductScalarWhereInput>>;
  OR?: Maybe<Array<ProductScalarWhereInput>>;
  NOT?: Maybe<Array<ProductScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  pdtName?: Maybe<StringFilter>;
  pdtCode?: Maybe<StringFilter>;
  unitPrice?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  categoryId?: Maybe<StringNullableFilter>;
};

export type AnnualClientCreateWithoutClientInput = {
  id?: Maybe<Scalars['String']>;
  orders?: Maybe<OrderCreateNestedManyWithoutAnnualClientInput>;
  carts?: Maybe<CartCreateNestedManyWithoutAnnualClientInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  FinancialYear?: Maybe<FinancialYearCreateNestedOneWithoutAnnClientsInput>;
};

export type AnnualClientCreateOrConnectWithoutClientInput = {
  where: AnnualClientWhereUniqueInput;
  create: AnnualClientCreateWithoutClientInput;
};

export type AnnualClientCreateManyClientInputEnvelope = {
  data?: Maybe<Array<AnnualClientCreateManyClientInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type AnnualClientUpsertWithWhereUniqueWithoutClientInput = {
  where: AnnualClientWhereUniqueInput;
  update: AnnualClientUpdateWithoutClientInput;
  create: AnnualClientCreateWithoutClientInput;
};

export type AnnualClientUpdateWithWhereUniqueWithoutClientInput = {
  where: AnnualClientWhereUniqueInput;
  data: AnnualClientUpdateWithoutClientInput;
};

export type AnnualClientUpdateManyWithWhereWithoutClientInput = {
  where: AnnualClientScalarWhereInput;
  data: AnnualClientUpdateManyMutationInput;
};

export type AnnualClientScalarWhereInput = {
  AND?: Maybe<Array<AnnualClientScalarWhereInput>>;
  OR?: Maybe<Array<AnnualClientScalarWhereInput>>;
  NOT?: Maybe<Array<AnnualClientScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  clientId?: Maybe<StringNullableFilter>;
  financialYearId?: Maybe<StringNullableFilter>;
};

export type OrderCreateWithoutOrderDetailsInput = {
  id?: Maybe<Scalars['String']>;
  orderTotal: Scalars['Int'];
  totalPaid: Scalars['Int'];
  orderNumber: Scalars['String'];
  orderDate?: Maybe<Scalars['DateTime']>;
  finances?: Maybe<FinanceCreateNestedManyWithoutOrderInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  AnnualClient?: Maybe<AnnualClientCreateNestedOneWithoutOrdersInput>;
  AnnualBranchEmployee?: Maybe<AnnualBranchEmployeeCreateNestedOneWithoutOrdersInput>;
};

export type OrderCreateOrConnectWithoutOrderDetailsInput = {
  where: OrderWhereUniqueInput;
  create: OrderCreateWithoutOrderDetailsInput;
};

export type ProductCreateWithoutOrderDetailsInput = {
  id?: Maybe<Scalars['String']>;
  pdtName: Scalars['String'];
  pdtCode: Scalars['String'];
  unitPrice: Scalars['Int'];
  carts?: Maybe<CartCreateNestedManyWithoutProductInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  Category?: Maybe<CategoryCreateNestedOneWithoutProductsInput>;
};

export type ProductCreateOrConnectWithoutOrderDetailsInput = {
  where: ProductWhereUniqueInput;
  create: ProductCreateWithoutOrderDetailsInput;
};

export type OrderUpsertWithoutOrderDetailsInput = {
  update: OrderUpdateWithoutOrderDetailsInput;
  create: OrderCreateWithoutOrderDetailsInput;
};

export type OrderUpdateWithoutOrderDetailsInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  orderTotal?: Maybe<IntFieldUpdateOperationsInput>;
  totalPaid?: Maybe<IntFieldUpdateOperationsInput>;
  orderNumber?: Maybe<StringFieldUpdateOperationsInput>;
  orderDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  finances?: Maybe<FinanceUpdateManyWithoutOrderInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  AnnualClient?: Maybe<AnnualClientUpdateOneWithoutOrdersInput>;
  AnnualBranchEmployee?: Maybe<AnnualBranchEmployeeUpdateOneWithoutOrdersInput>;
};

export type ProductUpsertWithoutOrderDetailsInput = {
  update: ProductUpdateWithoutOrderDetailsInput;
  create: ProductCreateWithoutOrderDetailsInput;
};

export type ProductUpdateWithoutOrderDetailsInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  pdtName?: Maybe<StringFieldUpdateOperationsInput>;
  pdtCode?: Maybe<StringFieldUpdateOperationsInput>;
  unitPrice?: Maybe<IntFieldUpdateOperationsInput>;
  carts?: Maybe<CartUpdateManyWithoutProductInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  Category?: Maybe<CategoryUpdateOneWithoutProductsInput>;
};

export type OrderDetailCreateWithoutOrderInput = {
  id?: Maybe<Scalars['String']>;
  pdtCost: Scalars['Int'];
  qtty: Scalars['Float'];
  salesPrice: Scalars['Int'];
  orderDate?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  Product: ProductCreateNestedOneWithoutOrderDetailsInput;
};

export type OrderDetailCreateOrConnectWithoutOrderInput = {
  where: OrderDetailWhereUniqueInput;
  create: OrderDetailCreateWithoutOrderInput;
};

export type OrderDetailCreateManyOrderInputEnvelope = {
  data?: Maybe<Array<OrderDetailCreateManyOrderInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type FinanceCreateWithoutOrderInput = {
  id?: Maybe<Scalars['String']>;
  amtPaid: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FinanceCreateOrConnectWithoutOrderInput = {
  where: FinanceWhereUniqueInput;
  create: FinanceCreateWithoutOrderInput;
};

export type FinanceCreateManyOrderInputEnvelope = {
  data?: Maybe<Array<FinanceCreateManyOrderInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type AnnualClientCreateWithoutOrdersInput = {
  id?: Maybe<Scalars['String']>;
  carts?: Maybe<CartCreateNestedManyWithoutAnnualClientInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  Client?: Maybe<ClientCreateNestedOneWithoutAnnClientsInput>;
  FinancialYear?: Maybe<FinancialYearCreateNestedOneWithoutAnnClientsInput>;
};

export type AnnualClientCreateOrConnectWithoutOrdersInput = {
  where: AnnualClientWhereUniqueInput;
  create: AnnualClientCreateWithoutOrdersInput;
};

export type AnnualBranchEmployeeCreateWithoutOrdersInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  carts?: Maybe<CartCreateNestedManyWithoutAnnualBranchEmployeeInput>;
  BranchEmployee?: Maybe<BranchEmployeeCreateNestedOneWithoutAnnBranchEmployeeInput>;
  FinancialYear?: Maybe<FinancialYearCreateNestedOneWithoutAnnBranchEmplsInput>;
};

export type AnnualBranchEmployeeCreateOrConnectWithoutOrdersInput = {
  where: AnnualBranchEmployeeWhereUniqueInput;
  create: AnnualBranchEmployeeCreateWithoutOrdersInput;
};

export type OrderDetailUpsertWithWhereUniqueWithoutOrderInput = {
  where: OrderDetailWhereUniqueInput;
  update: OrderDetailUpdateWithoutOrderInput;
  create: OrderDetailCreateWithoutOrderInput;
};

export type OrderDetailUpdateWithWhereUniqueWithoutOrderInput = {
  where: OrderDetailWhereUniqueInput;
  data: OrderDetailUpdateWithoutOrderInput;
};

export type OrderDetailUpdateManyWithWhereWithoutOrderInput = {
  where: OrderDetailScalarWhereInput;
  data: OrderDetailUpdateManyMutationInput;
};

export type OrderDetailScalarWhereInput = {
  AND?: Maybe<Array<OrderDetailScalarWhereInput>>;
  OR?: Maybe<Array<OrderDetailScalarWhereInput>>;
  NOT?: Maybe<Array<OrderDetailScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  pdtCost?: Maybe<IntFilter>;
  qtty?: Maybe<FloatFilter>;
  salesPrice?: Maybe<IntFilter>;
  orderDate?: Maybe<DateTimeFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  orderId?: Maybe<StringFilter>;
  productId?: Maybe<StringFilter>;
};

export type FinanceUpsertWithWhereUniqueWithoutOrderInput = {
  where: FinanceWhereUniqueInput;
  update: FinanceUpdateWithoutOrderInput;
  create: FinanceCreateWithoutOrderInput;
};

export type FinanceUpdateWithWhereUniqueWithoutOrderInput = {
  where: FinanceWhereUniqueInput;
  data: FinanceUpdateWithoutOrderInput;
};

export type FinanceUpdateManyWithWhereWithoutOrderInput = {
  where: FinanceScalarWhereInput;
  data: FinanceUpdateManyMutationInput;
};

export type FinanceScalarWhereInput = {
  AND?: Maybe<Array<FinanceScalarWhereInput>>;
  OR?: Maybe<Array<FinanceScalarWhereInput>>;
  NOT?: Maybe<Array<FinanceScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  amtPaid?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  orderId?: Maybe<StringFilter>;
};

export type AnnualClientUpsertWithoutOrdersInput = {
  update: AnnualClientUpdateWithoutOrdersInput;
  create: AnnualClientCreateWithoutOrdersInput;
};

export type AnnualClientUpdateWithoutOrdersInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  carts?: Maybe<CartUpdateManyWithoutAnnualClientInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  Client?: Maybe<ClientUpdateOneWithoutAnnClientsInput>;
  FinancialYear?: Maybe<FinancialYearUpdateOneWithoutAnnClientsInput>;
};

export type AnnualBranchEmployeeUpsertWithoutOrdersInput = {
  update: AnnualBranchEmployeeUpdateWithoutOrdersInput;
  create: AnnualBranchEmployeeCreateWithoutOrdersInput;
};

export type AnnualBranchEmployeeUpdateWithoutOrdersInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  carts?: Maybe<CartUpdateManyWithoutAnnualBranchEmployeeInput>;
  BranchEmployee?: Maybe<BranchEmployeeUpdateOneWithoutAnnBranchEmployeeInput>;
  FinancialYear?: Maybe<FinancialYearUpdateOneWithoutAnnBranchEmplsInput>;
};

export type BranchEmployeeCreateWithoutBranchInput = {
  id?: Maybe<Scalars['String']>;
  annBranchEmployee?: Maybe<AnnualBranchEmployeeCreateNestedManyWithoutBranchEmployeeInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  startDate?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['DateTime']>;
  Employee: EmployeeCreateNestedOneWithoutBranchEmplsInput;
  EmployeeStatus: EmployeeStatusCreateNestedOneWithoutBranchEmplsInput;
};

export type BranchEmployeeCreateOrConnectWithoutBranchInput = {
  where: BranchEmployeeWhereUniqueInput;
  create: BranchEmployeeCreateWithoutBranchInput;
};

export type BranchEmployeeCreateManyBranchInputEnvelope = {
  data?: Maybe<Array<BranchEmployeeCreateManyBranchInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type BranchEmployeeUpsertWithWhereUniqueWithoutBranchInput = {
  where: BranchEmployeeWhereUniqueInput;
  update: BranchEmployeeUpdateWithoutBranchInput;
  create: BranchEmployeeCreateWithoutBranchInput;
};

export type BranchEmployeeUpdateWithWhereUniqueWithoutBranchInput = {
  where: BranchEmployeeWhereUniqueInput;
  data: BranchEmployeeUpdateWithoutBranchInput;
};

export type BranchEmployeeUpdateManyWithWhereWithoutBranchInput = {
  where: BranchEmployeeScalarWhereInput;
  data: BranchEmployeeUpdateManyMutationInput;
};

export type BranchEmployeeScalarWhereInput = {
  AND?: Maybe<Array<BranchEmployeeScalarWhereInput>>;
  OR?: Maybe<Array<BranchEmployeeScalarWhereInput>>;
  NOT?: Maybe<Array<BranchEmployeeScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  startDate?: Maybe<DateTimeFilter>;
  endDate?: Maybe<DateTimeFilter>;
  employeeId?: Maybe<StringFilter>;
  branchId?: Maybe<StringFilter>;
  employeeStatusId?: Maybe<StringFilter>;
};

export type AnnualBranchEmployeeCreateWithoutBranchEmployeeInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  orders?: Maybe<OrderCreateNestedManyWithoutAnnualBranchEmployeeInput>;
  carts?: Maybe<CartCreateNestedManyWithoutAnnualBranchEmployeeInput>;
  FinancialYear?: Maybe<FinancialYearCreateNestedOneWithoutAnnBranchEmplsInput>;
};

export type AnnualBranchEmployeeCreateOrConnectWithoutBranchEmployeeInput = {
  where: AnnualBranchEmployeeWhereUniqueInput;
  create: AnnualBranchEmployeeCreateWithoutBranchEmployeeInput;
};

export type AnnualBranchEmployeeCreateManyBranchEmployeeInputEnvelope = {
  data?: Maybe<Array<AnnualBranchEmployeeCreateManyBranchEmployeeInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type EmployeeCreateWithoutBranchEmplsInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  employeeNames: Scalars['String'];
  employeeCode: Scalars['String'];
  employeePhoneNumb: Scalars['Int'];
};

export type EmployeeCreateOrConnectWithoutBranchEmplsInput = {
  where: EmployeeWhereUniqueInput;
  create: EmployeeCreateWithoutBranchEmplsInput;
};

export type BranchCreateWithoutBranchEmplsInput = {
  id?: Maybe<Scalars['String']>;
  branchName: Scalars['String'];
  branchCode: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type BranchCreateOrConnectWithoutBranchEmplsInput = {
  where: BranchWhereUniqueInput;
  create: BranchCreateWithoutBranchEmplsInput;
};

export type EmployeeStatusCreateWithoutBranchEmplsInput = {
  id?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type EmployeeStatusCreateOrConnectWithoutBranchEmplsInput = {
  where: EmployeeStatusWhereUniqueInput;
  create: EmployeeStatusCreateWithoutBranchEmplsInput;
};

export type AnnualBranchEmployeeUpsertWithWhereUniqueWithoutBranchEmployeeInput = {
  where: AnnualBranchEmployeeWhereUniqueInput;
  update: AnnualBranchEmployeeUpdateWithoutBranchEmployeeInput;
  create: AnnualBranchEmployeeCreateWithoutBranchEmployeeInput;
};

export type AnnualBranchEmployeeUpdateWithWhereUniqueWithoutBranchEmployeeInput = {
  where: AnnualBranchEmployeeWhereUniqueInput;
  data: AnnualBranchEmployeeUpdateWithoutBranchEmployeeInput;
};

export type AnnualBranchEmployeeUpdateManyWithWhereWithoutBranchEmployeeInput = {
  where: AnnualBranchEmployeeScalarWhereInput;
  data: AnnualBranchEmployeeUpdateManyMutationInput;
};

export type AnnualBranchEmployeeScalarWhereInput = {
  AND?: Maybe<Array<AnnualBranchEmployeeScalarWhereInput>>;
  OR?: Maybe<Array<AnnualBranchEmployeeScalarWhereInput>>;
  NOT?: Maybe<Array<AnnualBranchEmployeeScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  branchEmployeeId?: Maybe<StringNullableFilter>;
  financialYearId?: Maybe<StringNullableFilter>;
};

export type EmployeeUpsertWithoutBranchEmplsInput = {
  update: EmployeeUpdateWithoutBranchEmplsInput;
  create: EmployeeCreateWithoutBranchEmplsInput;
};

export type EmployeeUpdateWithoutBranchEmplsInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  employeeNames?: Maybe<StringFieldUpdateOperationsInput>;
  employeeCode?: Maybe<StringFieldUpdateOperationsInput>;
  employeePhoneNumb?: Maybe<IntFieldUpdateOperationsInput>;
};

export type BranchUpsertWithoutBranchEmplsInput = {
  update: BranchUpdateWithoutBranchEmplsInput;
  create: BranchCreateWithoutBranchEmplsInput;
};

export type BranchUpdateWithoutBranchEmplsInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  branchName?: Maybe<StringFieldUpdateOperationsInput>;
  branchCode?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type EmployeeStatusUpsertWithoutBranchEmplsInput = {
  update: EmployeeStatusUpdateWithoutBranchEmplsInput;
  create: EmployeeStatusCreateWithoutBranchEmplsInput;
};

export type EmployeeStatusUpdateWithoutBranchEmplsInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  status?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type AnnualBranchEmployeeCreateWithoutFinancialYearInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  orders?: Maybe<OrderCreateNestedManyWithoutAnnualBranchEmployeeInput>;
  carts?: Maybe<CartCreateNestedManyWithoutAnnualBranchEmployeeInput>;
  BranchEmployee?: Maybe<BranchEmployeeCreateNestedOneWithoutAnnBranchEmployeeInput>;
};

export type AnnualBranchEmployeeCreateOrConnectWithoutFinancialYearInput = {
  where: AnnualBranchEmployeeWhereUniqueInput;
  create: AnnualBranchEmployeeCreateWithoutFinancialYearInput;
};

export type AnnualBranchEmployeeCreateManyFinancialYearInputEnvelope = {
  data?: Maybe<Array<AnnualBranchEmployeeCreateManyFinancialYearInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type AnnualClientCreateWithoutFinancialYearInput = {
  id?: Maybe<Scalars['String']>;
  orders?: Maybe<OrderCreateNestedManyWithoutAnnualClientInput>;
  carts?: Maybe<CartCreateNestedManyWithoutAnnualClientInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  Client?: Maybe<ClientCreateNestedOneWithoutAnnClientsInput>;
};

export type AnnualClientCreateOrConnectWithoutFinancialYearInput = {
  where: AnnualClientWhereUniqueInput;
  create: AnnualClientCreateWithoutFinancialYearInput;
};

export type AnnualClientCreateManyFinancialYearInputEnvelope = {
  data?: Maybe<Array<AnnualClientCreateManyFinancialYearInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type AnnualBranchEmployeeUpsertWithWhereUniqueWithoutFinancialYearInput = {
  where: AnnualBranchEmployeeWhereUniqueInput;
  update: AnnualBranchEmployeeUpdateWithoutFinancialYearInput;
  create: AnnualBranchEmployeeCreateWithoutFinancialYearInput;
};

export type AnnualBranchEmployeeUpdateWithWhereUniqueWithoutFinancialYearInput = {
  where: AnnualBranchEmployeeWhereUniqueInput;
  data: AnnualBranchEmployeeUpdateWithoutFinancialYearInput;
};

export type AnnualBranchEmployeeUpdateManyWithWhereWithoutFinancialYearInput = {
  where: AnnualBranchEmployeeScalarWhereInput;
  data: AnnualBranchEmployeeUpdateManyMutationInput;
};

export type AnnualClientUpsertWithWhereUniqueWithoutFinancialYearInput = {
  where: AnnualClientWhereUniqueInput;
  update: AnnualClientUpdateWithoutFinancialYearInput;
  create: AnnualClientCreateWithoutFinancialYearInput;
};

export type AnnualClientUpdateWithWhereUniqueWithoutFinancialYearInput = {
  where: AnnualClientWhereUniqueInput;
  data: AnnualClientUpdateWithoutFinancialYearInput;
};

export type AnnualClientUpdateManyWithWhereWithoutFinancialYearInput = {
  where: AnnualClientScalarWhereInput;
  data: AnnualClientUpdateManyMutationInput;
};

export type BranchEmployeeCreateWithoutEmployeeInput = {
  id?: Maybe<Scalars['String']>;
  annBranchEmployee?: Maybe<AnnualBranchEmployeeCreateNestedManyWithoutBranchEmployeeInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  startDate?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['DateTime']>;
  Branch: BranchCreateNestedOneWithoutBranchEmplsInput;
  EmployeeStatus: EmployeeStatusCreateNestedOneWithoutBranchEmplsInput;
};

export type BranchEmployeeCreateOrConnectWithoutEmployeeInput = {
  where: BranchEmployeeWhereUniqueInput;
  create: BranchEmployeeCreateWithoutEmployeeInput;
};

export type BranchEmployeeCreateManyEmployeeInputEnvelope = {
  data?: Maybe<Array<BranchEmployeeCreateManyEmployeeInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type BranchEmployeeUpsertWithWhereUniqueWithoutEmployeeInput = {
  where: BranchEmployeeWhereUniqueInput;
  update: BranchEmployeeUpdateWithoutEmployeeInput;
  create: BranchEmployeeCreateWithoutEmployeeInput;
};

export type BranchEmployeeUpdateWithWhereUniqueWithoutEmployeeInput = {
  where: BranchEmployeeWhereUniqueInput;
  data: BranchEmployeeUpdateWithoutEmployeeInput;
};

export type BranchEmployeeUpdateManyWithWhereWithoutEmployeeInput = {
  where: BranchEmployeeScalarWhereInput;
  data: BranchEmployeeUpdateManyMutationInput;
};

export type BranchEmployeeCreateWithoutEmployeeStatusInput = {
  id?: Maybe<Scalars['String']>;
  annBranchEmployee?: Maybe<AnnualBranchEmployeeCreateNestedManyWithoutBranchEmployeeInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  startDate?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['DateTime']>;
  Employee: EmployeeCreateNestedOneWithoutBranchEmplsInput;
  Branch: BranchCreateNestedOneWithoutBranchEmplsInput;
};

export type BranchEmployeeCreateOrConnectWithoutEmployeeStatusInput = {
  where: BranchEmployeeWhereUniqueInput;
  create: BranchEmployeeCreateWithoutEmployeeStatusInput;
};

export type BranchEmployeeCreateManyEmployeeStatusInputEnvelope = {
  data?: Maybe<Array<BranchEmployeeCreateManyEmployeeStatusInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type BranchEmployeeUpsertWithWhereUniqueWithoutEmployeeStatusInput = {
  where: BranchEmployeeWhereUniqueInput;
  update: BranchEmployeeUpdateWithoutEmployeeStatusInput;
  create: BranchEmployeeCreateWithoutEmployeeStatusInput;
};

export type BranchEmployeeUpdateWithWhereUniqueWithoutEmployeeStatusInput = {
  where: BranchEmployeeWhereUniqueInput;
  data: BranchEmployeeUpdateWithoutEmployeeStatusInput;
};

export type BranchEmployeeUpdateManyWithWhereWithoutEmployeeStatusInput = {
  where: BranchEmployeeScalarWhereInput;
  data: BranchEmployeeUpdateManyMutationInput;
};

export type OrderCreateWithoutFinancesInput = {
  id?: Maybe<Scalars['String']>;
  orderTotal: Scalars['Int'];
  totalPaid: Scalars['Int'];
  orderNumber: Scalars['String'];
  orderDate?: Maybe<Scalars['DateTime']>;
  orderDetails?: Maybe<OrderDetailCreateNestedManyWithoutOrderInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  AnnualClient?: Maybe<AnnualClientCreateNestedOneWithoutOrdersInput>;
  AnnualBranchEmployee?: Maybe<AnnualBranchEmployeeCreateNestedOneWithoutOrdersInput>;
};

export type OrderCreateOrConnectWithoutFinancesInput = {
  where: OrderWhereUniqueInput;
  create: OrderCreateWithoutFinancesInput;
};

export type OrderUpsertWithoutFinancesInput = {
  update: OrderUpdateWithoutFinancesInput;
  create: OrderCreateWithoutFinancesInput;
};

export type OrderUpdateWithoutFinancesInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  orderTotal?: Maybe<IntFieldUpdateOperationsInput>;
  totalPaid?: Maybe<IntFieldUpdateOperationsInput>;
  orderNumber?: Maybe<StringFieldUpdateOperationsInput>;
  orderDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  orderDetails?: Maybe<OrderDetailUpdateManyWithoutOrderInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  AnnualClient?: Maybe<AnnualClientUpdateOneWithoutOrdersInput>;
  AnnualBranchEmployee?: Maybe<AnnualBranchEmployeeUpdateOneWithoutOrdersInput>;
};

export type CartCreateWithoutProductInput = {
  id?: Maybe<Scalars['String']>;
  qtty: Scalars['Float'];
  pdtCost: Scalars['Int'];
  salesPrice: Scalars['Int'];
  orderDate?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  AnnualClient?: Maybe<AnnualClientCreateNestedOneWithoutCartsInput>;
  AnnualBranchEmployee?: Maybe<AnnualBranchEmployeeCreateNestedOneWithoutCartsInput>;
};

export type CartCreateOrConnectWithoutProductInput = {
  where: CartWhereUniqueInput;
  create: CartCreateWithoutProductInput;
};

export type CartCreateManyProductInputEnvelope = {
  data?: Maybe<Array<CartCreateManyProductInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type OrderDetailCreateWithoutProductInput = {
  id?: Maybe<Scalars['String']>;
  pdtCost: Scalars['Int'];
  qtty: Scalars['Float'];
  salesPrice: Scalars['Int'];
  orderDate?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  Order: OrderCreateNestedOneWithoutOrderDetailsInput;
};

export type OrderDetailCreateOrConnectWithoutProductInput = {
  where: OrderDetailWhereUniqueInput;
  create: OrderDetailCreateWithoutProductInput;
};

export type OrderDetailCreateManyProductInputEnvelope = {
  data?: Maybe<Array<OrderDetailCreateManyProductInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CategoryCreateWithoutProductsInput = {
  id?: Maybe<Scalars['String']>;
  categoryName: Scalars['String'];
  categoryCode: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CategoryCreateOrConnectWithoutProductsInput = {
  where: CategoryWhereUniqueInput;
  create: CategoryCreateWithoutProductsInput;
};

export type CartUpsertWithWhereUniqueWithoutProductInput = {
  where: CartWhereUniqueInput;
  update: CartUpdateWithoutProductInput;
  create: CartCreateWithoutProductInput;
};

export type CartUpdateWithWhereUniqueWithoutProductInput = {
  where: CartWhereUniqueInput;
  data: CartUpdateWithoutProductInput;
};

export type CartUpdateManyWithWhereWithoutProductInput = {
  where: CartScalarWhereInput;
  data: CartUpdateManyMutationInput;
};

export type OrderDetailUpsertWithWhereUniqueWithoutProductInput = {
  where: OrderDetailWhereUniqueInput;
  update: OrderDetailUpdateWithoutProductInput;
  create: OrderDetailCreateWithoutProductInput;
};

export type OrderDetailUpdateWithWhereUniqueWithoutProductInput = {
  where: OrderDetailWhereUniqueInput;
  data: OrderDetailUpdateWithoutProductInput;
};

export type OrderDetailUpdateManyWithWhereWithoutProductInput = {
  where: OrderDetailScalarWhereInput;
  data: OrderDetailUpdateManyMutationInput;
};

export type CategoryUpsertWithoutProductsInput = {
  update: CategoryUpdateWithoutProductsInput;
  create: CategoryCreateWithoutProductsInput;
};

export type CategoryUpdateWithoutProductsInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  categoryName?: Maybe<StringFieldUpdateOperationsInput>;
  categoryCode?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type OrderCreateManyAnnualBranchEmployeeInput = {
  id?: Maybe<Scalars['String']>;
  orderTotal: Scalars['Int'];
  totalPaid: Scalars['Int'];
  orderNumber: Scalars['String'];
  orderDate?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  annualClientId?: Maybe<Scalars['String']>;
};

export type CartCreateManyAnnualBranchEmployeeInput = {
  id?: Maybe<Scalars['String']>;
  qtty: Scalars['Float'];
  pdtCost: Scalars['Int'];
  salesPrice: Scalars['Int'];
  orderDate?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  productId: Scalars['String'];
  annualClientId?: Maybe<Scalars['String']>;
};

export type OrderUpdateWithoutAnnualBranchEmployeeInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  orderTotal?: Maybe<IntFieldUpdateOperationsInput>;
  totalPaid?: Maybe<IntFieldUpdateOperationsInput>;
  orderNumber?: Maybe<StringFieldUpdateOperationsInput>;
  orderDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  orderDetails?: Maybe<OrderDetailUpdateManyWithoutOrderInput>;
  finances?: Maybe<FinanceUpdateManyWithoutOrderInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  AnnualClient?: Maybe<AnnualClientUpdateOneWithoutOrdersInput>;
};

export type OrderUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  orderTotal?: Maybe<IntFieldUpdateOperationsInput>;
  totalPaid?: Maybe<IntFieldUpdateOperationsInput>;
  orderNumber?: Maybe<StringFieldUpdateOperationsInput>;
  orderDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type StringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type StringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableFilter>;
};

export type CartUpdateWithoutAnnualBranchEmployeeInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  qtty?: Maybe<FloatFieldUpdateOperationsInput>;
  pdtCost?: Maybe<IntFieldUpdateOperationsInput>;
  salesPrice?: Maybe<IntFieldUpdateOperationsInput>;
  orderDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  Product?: Maybe<ProductUpdateOneRequiredWithoutCartsInput>;
  AnnualClient?: Maybe<AnnualClientUpdateOneWithoutCartsInput>;
};

export type CartUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  qtty?: Maybe<FloatFieldUpdateOperationsInput>;
  pdtCost?: Maybe<IntFieldUpdateOperationsInput>;
  salesPrice?: Maybe<IntFieldUpdateOperationsInput>;
  orderDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type FloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  notIn?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
};

export type OrderCreateManyAnnualClientInput = {
  id?: Maybe<Scalars['String']>;
  orderTotal: Scalars['Int'];
  totalPaid: Scalars['Int'];
  orderNumber: Scalars['String'];
  orderDate?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  annualBranchEmployeeId?: Maybe<Scalars['String']>;
};

export type CartCreateManyAnnualClientInput = {
  id?: Maybe<Scalars['String']>;
  qtty: Scalars['Float'];
  pdtCost: Scalars['Int'];
  salesPrice: Scalars['Int'];
  orderDate?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  productId: Scalars['String'];
  annualBranchEmployeeId?: Maybe<Scalars['String']>;
};

export type OrderUpdateWithoutAnnualClientInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  orderTotal?: Maybe<IntFieldUpdateOperationsInput>;
  totalPaid?: Maybe<IntFieldUpdateOperationsInput>;
  orderNumber?: Maybe<StringFieldUpdateOperationsInput>;
  orderDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  orderDetails?: Maybe<OrderDetailUpdateManyWithoutOrderInput>;
  finances?: Maybe<FinanceUpdateManyWithoutOrderInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  AnnualBranchEmployee?: Maybe<AnnualBranchEmployeeUpdateOneWithoutOrdersInput>;
};

export type CartUpdateWithoutAnnualClientInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  qtty?: Maybe<FloatFieldUpdateOperationsInput>;
  pdtCost?: Maybe<IntFieldUpdateOperationsInput>;
  salesPrice?: Maybe<IntFieldUpdateOperationsInput>;
  orderDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  Product?: Maybe<ProductUpdateOneRequiredWithoutCartsInput>;
  AnnualBranchEmployee?: Maybe<AnnualBranchEmployeeUpdateOneWithoutCartsInput>;
};

export type ProductCreateManyCategoryInput = {
  id?: Maybe<Scalars['String']>;
  pdtName: Scalars['String'];
  pdtCode: Scalars['String'];
  unitPrice: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductUpdateWithoutCategoryInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  pdtName?: Maybe<StringFieldUpdateOperationsInput>;
  pdtCode?: Maybe<StringFieldUpdateOperationsInput>;
  unitPrice?: Maybe<IntFieldUpdateOperationsInput>;
  carts?: Maybe<CartUpdateManyWithoutProductInput>;
  orderDetails?: Maybe<OrderDetailUpdateManyWithoutProductInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  pdtName?: Maybe<StringFieldUpdateOperationsInput>;
  pdtCode?: Maybe<StringFieldUpdateOperationsInput>;
  unitPrice?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type AnnualClientCreateManyClientInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  financialYearId?: Maybe<Scalars['String']>;
};

export type AnnualClientUpdateWithoutClientInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  orders?: Maybe<OrderUpdateManyWithoutAnnualClientInput>;
  carts?: Maybe<CartUpdateManyWithoutAnnualClientInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  FinancialYear?: Maybe<FinancialYearUpdateOneWithoutAnnClientsInput>;
};

export type AnnualClientUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type OrderDetailCreateManyOrderInput = {
  id?: Maybe<Scalars['String']>;
  pdtCost: Scalars['Int'];
  qtty: Scalars['Float'];
  salesPrice: Scalars['Int'];
  orderDate?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  productId: Scalars['String'];
};

export type FinanceCreateManyOrderInput = {
  id?: Maybe<Scalars['String']>;
  amtPaid: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type OrderDetailUpdateWithoutOrderInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  pdtCost?: Maybe<IntFieldUpdateOperationsInput>;
  qtty?: Maybe<FloatFieldUpdateOperationsInput>;
  salesPrice?: Maybe<IntFieldUpdateOperationsInput>;
  orderDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  Product?: Maybe<ProductUpdateOneRequiredWithoutOrderDetailsInput>;
};

export type OrderDetailUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  pdtCost?: Maybe<IntFieldUpdateOperationsInput>;
  qtty?: Maybe<FloatFieldUpdateOperationsInput>;
  salesPrice?: Maybe<IntFieldUpdateOperationsInput>;
  orderDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type FinanceUpdateWithoutOrderInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  amtPaid?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type FinanceUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  amtPaid?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type BranchEmployeeCreateManyBranchInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  startDate?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['DateTime']>;
  employeeId: Scalars['String'];
  employeeStatusId: Scalars['String'];
};

export type BranchEmployeeUpdateWithoutBranchInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  annBranchEmployee?: Maybe<AnnualBranchEmployeeUpdateManyWithoutBranchEmployeeInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  startDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  endDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  Employee?: Maybe<EmployeeUpdateOneRequiredWithoutBranchEmplsInput>;
  EmployeeStatus?: Maybe<EmployeeStatusUpdateOneRequiredWithoutBranchEmplsInput>;
};

export type BranchEmployeeUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  startDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  endDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type AnnualBranchEmployeeCreateManyBranchEmployeeInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  financialYearId?: Maybe<Scalars['String']>;
};

export type AnnualBranchEmployeeUpdateWithoutBranchEmployeeInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  orders?: Maybe<OrderUpdateManyWithoutAnnualBranchEmployeeInput>;
  carts?: Maybe<CartUpdateManyWithoutAnnualBranchEmployeeInput>;
  FinancialYear?: Maybe<FinancialYearUpdateOneWithoutAnnBranchEmplsInput>;
};

export type AnnualBranchEmployeeUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type AnnualBranchEmployeeCreateManyFinancialYearInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  branchEmployeeId?: Maybe<Scalars['String']>;
};

export type AnnualClientCreateManyFinancialYearInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  clientId?: Maybe<Scalars['String']>;
};

export type AnnualBranchEmployeeUpdateWithoutFinancialYearInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  orders?: Maybe<OrderUpdateManyWithoutAnnualBranchEmployeeInput>;
  carts?: Maybe<CartUpdateManyWithoutAnnualBranchEmployeeInput>;
  BranchEmployee?: Maybe<BranchEmployeeUpdateOneWithoutAnnBranchEmployeeInput>;
};

export type AnnualClientUpdateWithoutFinancialYearInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  orders?: Maybe<OrderUpdateManyWithoutAnnualClientInput>;
  carts?: Maybe<CartUpdateManyWithoutAnnualClientInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  Client?: Maybe<ClientUpdateOneWithoutAnnClientsInput>;
};

export type BranchEmployeeCreateManyEmployeeInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  startDate?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['DateTime']>;
  branchId: Scalars['String'];
  employeeStatusId: Scalars['String'];
};

export type BranchEmployeeUpdateWithoutEmployeeInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  annBranchEmployee?: Maybe<AnnualBranchEmployeeUpdateManyWithoutBranchEmployeeInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  startDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  endDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  Branch?: Maybe<BranchUpdateOneRequiredWithoutBranchEmplsInput>;
  EmployeeStatus?: Maybe<EmployeeStatusUpdateOneRequiredWithoutBranchEmplsInput>;
};

export type BranchEmployeeCreateManyEmployeeStatusInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  startDate?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['DateTime']>;
  employeeId: Scalars['String'];
  branchId: Scalars['String'];
};

export type BranchEmployeeUpdateWithoutEmployeeStatusInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  annBranchEmployee?: Maybe<AnnualBranchEmployeeUpdateManyWithoutBranchEmployeeInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  startDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  endDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  Employee?: Maybe<EmployeeUpdateOneRequiredWithoutBranchEmplsInput>;
  Branch?: Maybe<BranchUpdateOneRequiredWithoutBranchEmplsInput>;
};

export type CartCreateManyProductInput = {
  id?: Maybe<Scalars['String']>;
  qtty: Scalars['Float'];
  pdtCost: Scalars['Int'];
  salesPrice: Scalars['Int'];
  orderDate?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  annualClientId?: Maybe<Scalars['String']>;
  annualBranchEmployeeId?: Maybe<Scalars['String']>;
};

export type OrderDetailCreateManyProductInput = {
  id?: Maybe<Scalars['String']>;
  pdtCost: Scalars['Int'];
  qtty: Scalars['Float'];
  salesPrice: Scalars['Int'];
  orderDate?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  orderId: Scalars['String'];
};

export type CartUpdateWithoutProductInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  qtty?: Maybe<FloatFieldUpdateOperationsInput>;
  pdtCost?: Maybe<IntFieldUpdateOperationsInput>;
  salesPrice?: Maybe<IntFieldUpdateOperationsInput>;
  orderDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  AnnualClient?: Maybe<AnnualClientUpdateOneWithoutCartsInput>;
  AnnualBranchEmployee?: Maybe<AnnualBranchEmployeeUpdateOneWithoutCartsInput>;
};

export type OrderDetailUpdateWithoutProductInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  pdtCost?: Maybe<IntFieldUpdateOperationsInput>;
  qtty?: Maybe<FloatFieldUpdateOperationsInput>;
  salesPrice?: Maybe<IntFieldUpdateOperationsInput>;
  orderDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  Order?: Maybe<OrderUpdateOneRequiredWithoutOrderDetailsInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type NestedStringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type NestedStringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
};

export type NestedFloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  notIn?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
};

export type Query = {
  annualBranchEmployee?: Maybe<AnnualBranchEmployee>;
  annualBranchEmployees: Array<AnnualBranchEmployee>;
  annualBranchEmployeeById?: Maybe<AnnualBranchEmployee>;
  annualBranchEmployeeByBranchEmployeeAndYear?: Maybe<AnnualBranchEmployee>;
  annualClient?: Maybe<AnnualClient>;
  annualClients: Array<AnnualClient>;
  annualClientById?: Maybe<AnnualClient>;
  annualClientByPhoneAndYear?: Maybe<AnnualClient>;
  annualClientByYearClient?: Maybe<AnnualClient>;
  cart?: Maybe<Cart>;
  carts: Array<Cart>;
  cartById?: Maybe<Cart>;
  cartByAnnualClientIdAndEmplId?: Maybe<Array<Maybe<Cart>>>;
  client?: Maybe<Client>;
  clients?: Maybe<Array<Maybe<Client>>>;
  clientByPhoneNumber?: Maybe<Client>;
  clientById?: Maybe<Array<Maybe<Client>>>;
  orderDetail?: Maybe<OrderDetail>;
  orderDetails: Array<OrderDetail>;
  order?: Maybe<Order>;
  orders?: Maybe<Array<Maybe<Order>>>;
  orderById?: Maybe<Order>;
  bonus?: Maybe<Bonus>;
  bonuses: Array<Bonus>;
  bonusById?: Maybe<Bonus>;
  branch?: Maybe<Branch>;
  branches: Array<Branch>;
  branchById?: Maybe<Branch>;
  branchByBranchCode?: Maybe<Branch>;
  branchEmployee?: Maybe<BranchEmployee>;
  branchEmployees: Array<BranchEmployee>;
  branchEmployeeById?: Maybe<BranchEmployee>;
  branchEmployeeByEmplIdAndBranchId?: Maybe<BranchEmployee>;
  financialYear?: Maybe<FinancialYear>;
  financialYears?: Maybe<FinancialYear>;
  financialYearById?: Maybe<FinancialYear>;
  recentFinancialYear?: Maybe<FinancialYear>;
  employee?: Maybe<Employee>;
  employees: Array<Employee>;
  employeeById?: Maybe<Employee>;
  employeeByPhoneNumber?: Maybe<Employee>;
  employeeByCode?: Maybe<Employee>;
  employeeStatus?: Maybe<EmployeeStatus>;
  employeeStatuses: Array<EmployeeStatus>;
  employeeStatusById?: Maybe<EmployeeStatus>;
  finance?: Maybe<Finance>;
  finances: Array<Finance>;
  financeById?: Maybe<Finance>;
  inventory?: Maybe<Inventory>;
  inventories: Array<Inventory>;
  inventoryById?: Maybe<Inventory>;
  category?: Maybe<Category>;
  categories: Array<Category>;
  categoryById?: Maybe<Category>;
  product?: Maybe<Product>;
  products?: Maybe<Array<Maybe<Product>>>;
  productById?: Maybe<Product>;
  productsByCategoryID?: Maybe<Array<Maybe<Product>>>;
};


export type QueryAnnualBranchEmployeeArgs = {
  where: AnnualBranchEmployeeWhereUniqueInput;
};


export type QueryAnnualBranchEmployeesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<AnnualBranchEmployeeWhereUniqueInput>;
  after?: Maybe<AnnualBranchEmployeeWhereUniqueInput>;
};


export type QueryAnnualBranchEmployeeByIdArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryAnnualBranchEmployeeByBranchEmployeeAndYearArgs = {
  financialYearId?: Maybe<Scalars['String']>;
  branchEmployeeId?: Maybe<Scalars['String']>;
};


export type QueryAnnualClientArgs = {
  where: AnnualClientWhereUniqueInput;
};


export type QueryAnnualClientsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<AnnualClientWhereUniqueInput>;
  after?: Maybe<AnnualClientWhereUniqueInput>;
};


export type QueryAnnualClientByIdArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryAnnualClientByPhoneAndYearArgs = {
  clientId?: Maybe<Scalars['String']>;
  financialYearId?: Maybe<Scalars['String']>;
};


export type QueryAnnualClientByYearClientArgs = {
  yearClient?: Maybe<Scalars['String']>;
};


export type QueryCartArgs = {
  where: CartWhereUniqueInput;
};


export type QueryCartsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<CartWhereUniqueInput>;
  after?: Maybe<CartWhereUniqueInput>;
};


export type QueryCartByIdArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryCartByAnnualClientIdAndEmplIdArgs = {
  annualClientId?: Maybe<Scalars['String']>;
  annualBranchEmployeeId?: Maybe<Scalars['String']>;
};


export type QueryClientArgs = {
  where: ClientWhereUniqueInput;
};


export type QueryClientByPhoneNumberArgs = {
  clientPhoneNumb?: Maybe<Scalars['Int']>;
};


export type QueryClientByIdArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryOrderDetailArgs = {
  where: OrderDetailWhereUniqueInput;
};


export type QueryOrderDetailsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<OrderDetailWhereUniqueInput>;
  after?: Maybe<OrderDetailWhereUniqueInput>;
};


export type QueryOrderArgs = {
  where: OrderWhereUniqueInput;
};


export type QueryOrderByIdArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryBonusArgs = {
  where: BonusWhereUniqueInput;
};


export type QueryBonusesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<BonusWhereUniqueInput>;
  after?: Maybe<BonusWhereUniqueInput>;
};


export type QueryBonusByIdArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryBranchArgs = {
  where: BranchWhereUniqueInput;
};


export type QueryBranchesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<BranchWhereUniqueInput>;
  after?: Maybe<BranchWhereUniqueInput>;
};


export type QueryBranchByIdArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryBranchByBranchCodeArgs = {
  branchCode?: Maybe<Scalars['String']>;
};


export type QueryBranchEmployeeArgs = {
  where: BranchEmployeeWhereUniqueInput;
};


export type QueryBranchEmployeesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<BranchEmployeeWhereUniqueInput>;
  after?: Maybe<BranchEmployeeWhereUniqueInput>;
};


export type QueryBranchEmployeeByIdArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryBranchEmployeeByEmplIdAndBranchIdArgs = {
  employeeId?: Maybe<Scalars['String']>;
  branchId?: Maybe<Scalars['String']>;
};


export type QueryFinancialYearArgs = {
  where: FinancialYearWhereUniqueInput;
};


export type QueryFinancialYearsArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryFinancialYearByIdArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryEmployeeArgs = {
  where: EmployeeWhereUniqueInput;
};


export type QueryEmployeesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<EmployeeWhereUniqueInput>;
  after?: Maybe<EmployeeWhereUniqueInput>;
};


export type QueryEmployeeByIdArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryEmployeeByPhoneNumberArgs = {
  employeePhoneNumb?: Maybe<Scalars['Int']>;
};


export type QueryEmployeeByCodeArgs = {
  employeeCode?: Maybe<Scalars['String']>;
};


export type QueryEmployeeStatusArgs = {
  where: EmployeeStatusWhereUniqueInput;
};


export type QueryEmployeeStatusesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<EmployeeStatusWhereUniqueInput>;
  after?: Maybe<EmployeeStatusWhereUniqueInput>;
};


export type QueryEmployeeStatusByIdArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryFinanceArgs = {
  where: FinanceWhereUniqueInput;
};


export type QueryFinancesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<FinanceWhereUniqueInput>;
  after?: Maybe<FinanceWhereUniqueInput>;
};


export type QueryFinanceByIdArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryInventoryArgs = {
  where: InventoryWhereUniqueInput;
};


export type QueryInventoriesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<InventoryWhereUniqueInput>;
  after?: Maybe<InventoryWhereUniqueInput>;
};


export type QueryInventoryByIdArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type QueryCategoriesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<CategoryWhereUniqueInput>;
  after?: Maybe<CategoryWhereUniqueInput>;
};


export type QueryCategoryByIdArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryProductArgs = {
  where: ProductWhereUniqueInput;
};


export type QueryProductByIdArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryProductsByCategoryIdArgs = {
  categoryId?: Maybe<Scalars['String']>;
};

export type Mutation = {
  createOneAnnualBranchEmployee: AnnualBranchEmployee;
  deleteOneAnnualBranchEmployee?: Maybe<AnnualBranchEmployee>;
  updateOneAnnualBranchEmployee?: Maybe<AnnualBranchEmployee>;
  /** Stores a AnnualBranchEmployee manually */
  createAnnualBranchEmployee?: Maybe<AnnualBranchEmployee>;
  /** deletes a branchEmployee manually */
  deleteAnnualBranchEmployee?: Maybe<AnnualBranchEmployee>;
  createOneAnnualClient: AnnualClient;
  deleteOneAnnualClient?: Maybe<AnnualClient>;
  updateOneAnnualClient?: Maybe<AnnualClient>;
  /** Stores a AnnualClient manually */
  createAnnualClient?: Maybe<AnnualClient>;
  /** deletes a annualClient manually */
  deleteAnnualClient?: Maybe<AnnualClient>;
  createOneCart: Cart;
  deleteOneCart?: Maybe<Cart>;
  updateOneCart?: Maybe<Cart>;
  /** Stores a Cart manually */
  createCart?: Maybe<Cart>;
  /** deletes a cart manually */
  deleteCart?: Maybe<Cart>;
  createOneCategory: Category;
  deleteOneCategory?: Maybe<Category>;
  updateOneCategory?: Maybe<Category>;
  /** Stores a Category manually */
  createCategory?: Maybe<Category>;
  /** deletes a category manually */
  deleteCategory?: Maybe<Category>;
  createOneClient: Client;
  deleteOneClient?: Maybe<Client>;
  updateOneClient?: Maybe<Client>;
  /** Stores a Client manually */
  createClient?: Maybe<Client>;
  /** deletes a client manually */
  deleteClient?: Maybe<Client>;
  createOneOrderDetail: OrderDetail;
  deleteOneOrderDetail?: Maybe<OrderDetail>;
  updateOneOrderDetail?: Maybe<OrderDetail>;
  /** Stores a OrderDetail manually */
  createOrderDetail?: Maybe<OrderDetail>;
  /** deletes a OrderDetail manually */
  deleteOrderDetail?: Maybe<OrderDetail>;
  createOneOrder: Order;
  deleteOneOrder?: Maybe<Order>;
  updateOneOrder?: Maybe<Order>;
  /** Stores an  Order manually */
  createOrder?: Maybe<Order>;
  /** deletes a Order manually */
  deleteOrder?: Maybe<Order>;
  createOneBonus: Bonus;
  deleteOneBonus?: Maybe<Bonus>;
  updateOneBonus?: Maybe<Bonus>;
  /** Stores a Bonus manually */
  createBonus?: Maybe<Bonus>;
  /** deletes a Bonus manually */
  deleteBonus?: Maybe<Bonus>;
  createOneBranch: Branch;
  deleteOneBranch?: Maybe<Branch>;
  updateOneBranch?: Maybe<Branch>;
  /** Stores a Branch manually */
  createBranch?: Maybe<Branch>;
  /** deletes a branch manually */
  deleteBranch?: Maybe<Branch>;
  createOneBranchEmployee: BranchEmployee;
  deleteOneBranchEmployee?: Maybe<BranchEmployee>;
  updateOneBranchEmployee?: Maybe<BranchEmployee>;
  /** Stores a BranchEmployee manually */
  createBranchEmployee?: Maybe<BranchEmployee>;
  /** deletes a branchEmployee manually */
  deleteBranchEmployee?: Maybe<BranchEmployee>;
  createOneFinancialYear: FinancialYear;
  deleteOneFinancialYear?: Maybe<FinancialYear>;
  updateOneFinancialYear?: Maybe<FinancialYear>;
  /** Stores a FinancialYear manually */
  createFinancialYear?: Maybe<FinancialYear>;
  /** deletes a financialYear manually */
  deleteFinancialYear?: Maybe<FinancialYear>;
  createOneEmployee: Employee;
  deleteOneEmployee?: Maybe<Employee>;
  updateOneEmployee?: Maybe<Employee>;
  /** Stores a Employee manually */
  createEmployee?: Maybe<Employee>;
  /** deletes a employee manually */
  deleteEmployee?: Maybe<Employee>;
  createOneEmployeeStatus: EmployeeStatus;
  deleteOneEmployeeStatus?: Maybe<EmployeeStatus>;
  updateOneEmployeeStatus?: Maybe<EmployeeStatus>;
  /** Stores a EmployeeStatus manually */
  createEmployeeStatus?: Maybe<EmployeeStatus>;
  /** deletes a employeeStatus manually */
  deleteEmployeeStatus?: Maybe<EmployeeStatus>;
  createOneFinance: Finance;
  deleteOneFinance?: Maybe<Finance>;
  updateOneFinance?: Maybe<Finance>;
  /** Stores a Finance manually */
  createFinance?: Maybe<Finance>;
  /** deletes a finance manually */
  deleteFinance?: Maybe<Finance>;
  createOneInventory: Inventory;
  deleteOneInventory?: Maybe<Inventory>;
  updateOneInventory?: Maybe<Inventory>;
  /** Stores a Inventory manually */
  createInventory?: Maybe<Inventory>;
  /** deletes a inventory manually */
  deleteInventory?: Maybe<Inventory>;
  createOneProduct: Product;
  deleteOneProduct?: Maybe<Product>;
  updateOneProduct?: Maybe<Product>;
  /** Stores a Product manually */
  createProduct?: Maybe<Product>;
  /** deletes a Product manually */
  deleteProduct?: Maybe<Product>;
};


export type MutationCreateOneAnnualBranchEmployeeArgs = {
  data: AnnualBranchEmployeeCreateInput;
};


export type MutationDeleteOneAnnualBranchEmployeeArgs = {
  where: AnnualBranchEmployeeWhereUniqueInput;
};


export type MutationUpdateOneAnnualBranchEmployeeArgs = {
  data: AnnualBranchEmployeeUpdateInput;
  where: AnnualBranchEmployeeWhereUniqueInput;
};


export type MutationCreateAnnualBranchEmployeeArgs = {
  data: AnnualBranchEmployeeCreateInput;
};


export type MutationDeleteAnnualBranchEmployeeArgs = {
  where: AnnualBranchEmployeeWhereUniqueInput;
};


export type MutationCreateOneAnnualClientArgs = {
  data: AnnualClientCreateInput;
};


export type MutationDeleteOneAnnualClientArgs = {
  where: AnnualClientWhereUniqueInput;
};


export type MutationUpdateOneAnnualClientArgs = {
  data: AnnualClientUpdateInput;
  where: AnnualClientWhereUniqueInput;
};


export type MutationCreateAnnualClientArgs = {
  data: AnnualClientCreateInput;
};


export type MutationDeleteAnnualClientArgs = {
  where: AnnualClientWhereUniqueInput;
};


export type MutationCreateOneCartArgs = {
  data: CartCreateInput;
};


export type MutationDeleteOneCartArgs = {
  where: CartWhereUniqueInput;
};


export type MutationUpdateOneCartArgs = {
  data: CartUpdateInput;
  where: CartWhereUniqueInput;
};


export type MutationCreateCartArgs = {
  data: CartCreateInput;
};


export type MutationDeleteCartArgs = {
  where: CartWhereUniqueInput;
};


export type MutationCreateOneCategoryArgs = {
  data: CategoryCreateInput;
};


export type MutationDeleteOneCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type MutationUpdateOneCategoryArgs = {
  data: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};


export type MutationCreateCategoryArgs = {
  data: CategoryCreateInput;
};


export type MutationDeleteCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type MutationCreateOneClientArgs = {
  data: ClientCreateInput;
};


export type MutationDeleteOneClientArgs = {
  where: ClientWhereUniqueInput;
};


export type MutationUpdateOneClientArgs = {
  data: ClientUpdateInput;
  where: ClientWhereUniqueInput;
};


export type MutationCreateClientArgs = {
  data: ClientCreateInput;
};


export type MutationDeleteClientArgs = {
  where: ClientWhereUniqueInput;
};


export type MutationCreateOneOrderDetailArgs = {
  data: OrderDetailCreateInput;
};


export type MutationDeleteOneOrderDetailArgs = {
  where: OrderDetailWhereUniqueInput;
};


export type MutationUpdateOneOrderDetailArgs = {
  data: OrderDetailUpdateInput;
  where: OrderDetailWhereUniqueInput;
};


export type MutationCreateOrderDetailArgs = {
  data: OrderDetailCreateInput;
};


export type MutationDeleteOrderDetailArgs = {
  where: OrderDetailWhereUniqueInput;
};


export type MutationCreateOneOrderArgs = {
  data: OrderCreateInput;
};


export type MutationDeleteOneOrderArgs = {
  where: OrderWhereUniqueInput;
};


export type MutationUpdateOneOrderArgs = {
  data: OrderUpdateInput;
  where: OrderWhereUniqueInput;
};


export type MutationCreateOrderArgs = {
  data: OrderCreateInput;
};


export type MutationDeleteOrderArgs = {
  where: OrderWhereUniqueInput;
};


export type MutationCreateOneBonusArgs = {
  data: BonusCreateInput;
};


export type MutationDeleteOneBonusArgs = {
  where: BonusWhereUniqueInput;
};


export type MutationUpdateOneBonusArgs = {
  data: BonusUpdateInput;
  where: BonusWhereUniqueInput;
};


export type MutationCreateBonusArgs = {
  data: BonusCreateInput;
};


export type MutationDeleteBonusArgs = {
  where: BonusWhereUniqueInput;
};


export type MutationCreateOneBranchArgs = {
  data: BranchCreateInput;
};


export type MutationDeleteOneBranchArgs = {
  where: BranchWhereUniqueInput;
};


export type MutationUpdateOneBranchArgs = {
  data: BranchUpdateInput;
  where: BranchWhereUniqueInput;
};


export type MutationCreateBranchArgs = {
  data: BranchCreateInput;
};


export type MutationDeleteBranchArgs = {
  where: BranchWhereUniqueInput;
};


export type MutationCreateOneBranchEmployeeArgs = {
  data: BranchEmployeeCreateInput;
};


export type MutationDeleteOneBranchEmployeeArgs = {
  where: BranchEmployeeWhereUniqueInput;
};


export type MutationUpdateOneBranchEmployeeArgs = {
  data: BranchEmployeeUpdateInput;
  where: BranchEmployeeWhereUniqueInput;
};


export type MutationCreateBranchEmployeeArgs = {
  data: BranchEmployeeCreateInput;
};


export type MutationDeleteBranchEmployeeArgs = {
  where: BranchEmployeeWhereUniqueInput;
};


export type MutationCreateOneFinancialYearArgs = {
  data: FinancialYearCreateInput;
};


export type MutationDeleteOneFinancialYearArgs = {
  where: FinancialYearWhereUniqueInput;
};


export type MutationUpdateOneFinancialYearArgs = {
  data: FinancialYearUpdateInput;
  where: FinancialYearWhereUniqueInput;
};


export type MutationCreateFinancialYearArgs = {
  data: FinancialYearCreateInput;
};


export type MutationDeleteFinancialYearArgs = {
  where: FinancialYearWhereUniqueInput;
};


export type MutationCreateOneEmployeeArgs = {
  data: EmployeeCreateInput;
};


export type MutationDeleteOneEmployeeArgs = {
  where: EmployeeWhereUniqueInput;
};


export type MutationUpdateOneEmployeeArgs = {
  data: EmployeeUpdateInput;
  where: EmployeeWhereUniqueInput;
};


export type MutationCreateEmployeeArgs = {
  data: EmployeeCreateInput;
};


export type MutationDeleteEmployeeArgs = {
  where: EmployeeWhereUniqueInput;
};


export type MutationCreateOneEmployeeStatusArgs = {
  data: EmployeeStatusCreateInput;
};


export type MutationDeleteOneEmployeeStatusArgs = {
  where: EmployeeStatusWhereUniqueInput;
};


export type MutationUpdateOneEmployeeStatusArgs = {
  data: EmployeeStatusUpdateInput;
  where: EmployeeStatusWhereUniqueInput;
};


export type MutationCreateEmployeeStatusArgs = {
  data: EmployeeStatusCreateInput;
};


export type MutationDeleteEmployeeStatusArgs = {
  where: EmployeeStatusWhereUniqueInput;
};


export type MutationCreateOneFinanceArgs = {
  data: FinanceCreateInput;
};


export type MutationDeleteOneFinanceArgs = {
  where: FinanceWhereUniqueInput;
};


export type MutationUpdateOneFinanceArgs = {
  data: FinanceUpdateInput;
  where: FinanceWhereUniqueInput;
};


export type MutationCreateFinanceArgs = {
  data: FinanceCreateInput;
};


export type MutationDeleteFinanceArgs = {
  where: FinanceWhereUniqueInput;
};


export type MutationCreateOneInventoryArgs = {
  data: InventoryCreateInput;
};


export type MutationDeleteOneInventoryArgs = {
  where: InventoryWhereUniqueInput;
};


export type MutationUpdateOneInventoryArgs = {
  data: InventoryUpdateInput;
  where: InventoryWhereUniqueInput;
};


export type MutationCreateInventoryArgs = {
  data: InventoryCreateInput;
};


export type MutationDeleteInventoryArgs = {
  where: InventoryWhereUniqueInput;
};


export type MutationCreateOneProductArgs = {
  data: ProductCreateInput;
};


export type MutationDeleteOneProductArgs = {
  where: ProductWhereUniqueInput;
};


export type MutationUpdateOneProductArgs = {
  data: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};


export type MutationCreateProductArgs = {
  data: ProductCreateInput;
};


export type MutationDeleteProductArgs = {
  where: ProductWhereUniqueInput;
};

export type AnnualBranchEmployeeFragmentFragment = (
  Pick<AnnualBranchEmployee, 'id'>
  & { BranchEmployee?: Maybe<BranchEmployeeFragmentFragment>, orders: Array<OrderFragmentFragment>, FinancialYear?: Maybe<FinancialYearFragmentFragment> }
);

export type AnnualClientFragmentFragment = (
  Pick<AnnualClient, 'id'>
  & { Client?: Maybe<ClientFragmentFragment>, FinancialYear?: Maybe<FinancialYearFragmentFragment> }
);

export type BonusFragmentFragment = Pick<Bonus, 'bonusName' | 'id'>;

export type BranchEmployeeFragmentFragment = (
  Pick<BranchEmployee, 'endDate' | 'id' | 'startDate'>
  & { Branch: BranchFragmentFragment, Employee: EmployeeFragmentFragment }
);

export type BranchFragmentFragment = Pick<Branch, 'branchName' | 'branchCode' | 'id'>;

export type CartFragmentFragment = (
  Pick<Cart, 'annualBranchEmployeeId' | 'id' | 'orderDate' | 'qtty' | 'pdtCost' | 'salesPrice'>
  & { AnnualBranchEmployee?: Maybe<AnnualBranchEmployeeFragmentFragment>, AnnualClient?: Maybe<AnnualClientFragmentFragment> }
);

export type CategoryFragmentFragment = Pick<Category, 'categoryCode' | 'categoryName' | 'id'>;

export type ClientFragmentFragment = Pick<Client, 'id' | 'clientNames' | 'clientPhoneNumb'>;

export type EmployeeFragmentFragment = Pick<Employee, 'employeeNames' | 'employeeCode' | 'id' | 'employeePhoneNumb'>;

export type EmployeeStatusFragmentFragment = Pick<EmployeeStatus, 'id' | 'status'>;

export type FinanceFragmentFragment = (
  Pick<Finance, 'amtPaid' | 'orderId' | 'id'>
  & { Order: OrderFragmentFragment }
);

export type FinancialYearFragmentFragment = Pick<FinancialYear, 'yearName' | 'id'>;

export type InventoryFragmentFragment = Pick<Inventory, 'qttyInHand' | 'id'>;

export type OrderDetailFragmentFragment = Pick<OrderDetail, 'id' | 'pdtCost' | 'qtty' | 'salesPrice'>;

export type OrderFragmentFragment = (
  Pick<Order, 'id' | 'orderDate' | 'orderTotal' | 'totalPaid' | 'orderNumber'>
  & { orderDetails: Array<OrderDetailFragmentFragment>, AnnualClient?: Maybe<AnnualClientFragmentFragment> }
);

export type ProductFragmentFragment = (
  Pick<Product, 'id' | 'pdtName' | 'pdtCode' | 'categoryId' | 'unitPrice'>
  & { Category?: Maybe<CategoryFragmentFragment>, carts: Array<CartFragmentFragment>, orderDetails: Array<OrderDetailFragmentFragment> }
);

export type CreateAnnualBranchEmployeeMutationVariables = Exact<{
  data: AnnualBranchEmployeeCreateInput;
}>;


export type CreateAnnualBranchEmployeeMutation = { createOneAnnualBranchEmployee: AnnualBranchEmployeeFragmentFragment };

export type CreateAnAnnualBranchEmployeeMutationVariables = Exact<{
  data: AnnualBranchEmployeeCreateInput;
}>;


export type CreateAnAnnualBranchEmployeeMutation = { createAnnualBranchEmployee?: Maybe<AnnualBranchEmployeeFragmentFragment> };

export type DeleteAnAnnualBranchEmployeeMutationVariables = Exact<{
  where: AnnualBranchEmployeeWhereUniqueInput;
}>;


export type DeleteAnAnnualBranchEmployeeMutation = { deleteOneAnnualBranchEmployee?: Maybe<Pick<AnnualBranchEmployee, 'id'>> };

export type UpdateAnAnnualBranchEmployeeMutationVariables = Exact<{
  data: AnnualBranchEmployeeUpdateInput;
  where: AnnualBranchEmployeeWhereUniqueInput;
}>;


export type UpdateAnAnnualBranchEmployeeMutation = { updateOneAnnualBranchEmployee?: Maybe<AnnualBranchEmployeeFragmentFragment> };

export type CreateAnnualClientMutationVariables = Exact<{
  data: AnnualClientCreateInput;
}>;


export type CreateAnnualClientMutation = { createOneAnnualClient: AnnualClientFragmentFragment };

export type CreateAAnnualClientMutationVariables = Exact<{
  data: AnnualClientCreateInput;
}>;


export type CreateAAnnualClientMutation = { createAnnualClient?: Maybe<AnnualClientFragmentFragment> };

export type DeleteAAnnualClientMutationVariables = Exact<{
  where: AnnualClientWhereUniqueInput;
}>;


export type DeleteAAnnualClientMutation = { deleteOneAnnualClient?: Maybe<Pick<AnnualClient, 'id'>> };

export type UpdateAAnnualClientMutationVariables = Exact<{
  data: AnnualClientUpdateInput;
  where: AnnualClientWhereUniqueInput;
}>;


export type UpdateAAnnualClientMutation = { updateOneAnnualClient?: Maybe<AnnualClientFragmentFragment> };

export type CreateBonusMutationVariables = Exact<{
  data: BonusCreateInput;
}>;


export type CreateBonusMutation = { createOneBonus: BonusFragmentFragment };

export type CreateABonusMutationVariables = Exact<{
  data: BonusCreateInput;
}>;


export type CreateABonusMutation = { createBonus?: Maybe<BonusFragmentFragment> };

export type DeleteABonusMutationVariables = Exact<{
  where: BonusWhereUniqueInput;
}>;


export type DeleteABonusMutation = { deleteOneBonus?: Maybe<Pick<Bonus, 'id'>> };

export type UpdateABonusMutationVariables = Exact<{
  data: BonusUpdateInput;
  where: BonusWhereUniqueInput;
}>;


export type UpdateABonusMutation = { updateOneBonus?: Maybe<BonusFragmentFragment> };

export type CreateBranchMutationVariables = Exact<{
  data: BranchCreateInput;
}>;


export type CreateBranchMutation = { createOneBranch: BranchFragmentFragment };

export type CreateABranchMutationVariables = Exact<{
  data: BranchCreateInput;
}>;


export type CreateABranchMutation = { createBranch?: Maybe<BranchFragmentFragment> };

export type DeleteABranchMutationVariables = Exact<{
  where: BranchWhereUniqueInput;
}>;


export type DeleteABranchMutation = { deleteOneBranch?: Maybe<Pick<Branch, 'id'>> };

export type UpdateABranchMutationVariables = Exact<{
  data: BranchUpdateInput;
  where: BranchWhereUniqueInput;
}>;


export type UpdateABranchMutation = { updateOneBranch?: Maybe<BranchFragmentFragment> };

export type CreateBranchEmployeeMutationVariables = Exact<{
  data: BranchEmployeeCreateInput;
}>;


export type CreateBranchEmployeeMutation = { createOneBranchEmployee: BranchEmployeeFragmentFragment };

export type CreateABranchEmployeeMutationVariables = Exact<{
  data: BranchEmployeeCreateInput;
}>;


export type CreateABranchEmployeeMutation = { createBranchEmployee?: Maybe<BranchEmployeeFragmentFragment> };

export type DeleteABranchEmployeeMutationVariables = Exact<{
  where: BranchEmployeeWhereUniqueInput;
}>;


export type DeleteABranchEmployeeMutation = { deleteOneBranchEmployee?: Maybe<Pick<BranchEmployee, 'id'>> };

export type UpdateABranchEmployeeMutationVariables = Exact<{
  data: BranchEmployeeUpdateInput;
  where: BranchEmployeeWhereUniqueInput;
}>;


export type UpdateABranchEmployeeMutation = { updateOneBranchEmployee?: Maybe<BranchEmployeeFragmentFragment> };

export type CreateCartMutationVariables = Exact<{
  data: CartCreateInput;
}>;


export type CreateCartMutation = { createOneCart: CartFragmentFragment };

export type CreateACartMutationVariables = Exact<{
  data: CartCreateInput;
}>;


export type CreateACartMutation = { createCart?: Maybe<CartFragmentFragment> };

export type DeleteACartMutationVariables = Exact<{
  where: CartWhereUniqueInput;
}>;


export type DeleteACartMutation = { deleteOneCart?: Maybe<Pick<Cart, 'id'>> };

export type UpdateACartMutationVariables = Exact<{
  data: CartUpdateInput;
  where: CartWhereUniqueInput;
}>;


export type UpdateACartMutation = { updateOneCart?: Maybe<CartFragmentFragment> };

export type CreateCategoryMutationVariables = Exact<{
  data: CategoryCreateInput;
}>;


export type CreateCategoryMutation = { createOneCategory: CategoryFragmentFragment };

export type CreateACategoryMutationVariables = Exact<{
  data: CategoryCreateInput;
}>;


export type CreateACategoryMutation = { createCategory?: Maybe<CategoryFragmentFragment> };

export type DeleteACategoryMutationVariables = Exact<{
  where: CategoryWhereUniqueInput;
}>;


export type DeleteACategoryMutation = { deleteOneCategory?: Maybe<Pick<Category, 'id'>> };

export type UpdateACategoryMutationVariables = Exact<{
  data: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
}>;


export type UpdateACategoryMutation = { updateOneCategory?: Maybe<CategoryFragmentFragment> };

export type CreateClientMutationVariables = Exact<{
  data: ClientCreateInput;
}>;


export type CreateClientMutation = { createOneClient: ClientFragmentFragment };

export type CreateAClientMutationVariables = Exact<{
  data: ClientCreateInput;
}>;


export type CreateAClientMutation = { createClient?: Maybe<ClientFragmentFragment> };

export type DeleteAClientMutationVariables = Exact<{
  where: ClientWhereUniqueInput;
}>;


export type DeleteAClientMutation = { deleteOneClient?: Maybe<Pick<Client, 'id'>> };

export type UpdateAClientMutationVariables = Exact<{
  data: ClientUpdateInput;
  where: ClientWhereUniqueInput;
}>;


export type UpdateAClientMutation = { updateOneClient?: Maybe<ClientFragmentFragment> };

export type CreateEmployeeMutationVariables = Exact<{
  data: EmployeeCreateInput;
}>;


export type CreateEmployeeMutation = { createOneEmployee: EmployeeFragmentFragment };

export type CreateAnEmployeeMutationVariables = Exact<{
  data: EmployeeCreateInput;
}>;


export type CreateAnEmployeeMutation = { createEmployee?: Maybe<EmployeeFragmentFragment> };

export type DeleteAEmployeeMutationVariables = Exact<{
  where: EmployeeWhereUniqueInput;
}>;


export type DeleteAEmployeeMutation = { deleteOneEmployee?: Maybe<Pick<Employee, 'id'>> };

export type UpdateAEmployeeMutationVariables = Exact<{
  data: EmployeeUpdateInput;
  where: EmployeeWhereUniqueInput;
}>;


export type UpdateAEmployeeMutation = { updateOneEmployee?: Maybe<EmployeeFragmentFragment> };

export type CreateEmployeeStatusMutationVariables = Exact<{
  data: EmployeeStatusCreateInput;
}>;


export type CreateEmployeeStatusMutation = { createOneEmployeeStatus: EmployeeStatusFragmentFragment };

export type CreateAnEmployeeStatusMutationVariables = Exact<{
  data: EmployeeStatusCreateInput;
}>;


export type CreateAnEmployeeStatusMutation = { createEmployeeStatus?: Maybe<EmployeeStatusFragmentFragment> };

export type DeleteAnEmployeeStatusMutationVariables = Exact<{
  where: EmployeeStatusWhereUniqueInput;
}>;


export type DeleteAnEmployeeStatusMutation = { deleteOneEmployeeStatus?: Maybe<Pick<EmployeeStatus, 'id'>> };

export type UpdateAnEmployeeStatusMutationVariables = Exact<{
  data: EmployeeStatusUpdateInput;
  where: EmployeeStatusWhereUniqueInput;
}>;


export type UpdateAnEmployeeStatusMutation = { updateOneEmployeeStatus?: Maybe<EmployeeStatusFragmentFragment> };

export type CreateFinanceMutationVariables = Exact<{
  data: FinanceCreateInput;
}>;


export type CreateFinanceMutation = { createOneFinance: FinanceFragmentFragment };

export type CreateAFinanceMutationVariables = Exact<{
  data: FinanceCreateInput;
}>;


export type CreateAFinanceMutation = { createFinance?: Maybe<FinanceFragmentFragment> };

export type DeleteAFinanceMutationVariables = Exact<{
  where: FinanceWhereUniqueInput;
}>;


export type DeleteAFinanceMutation = { deleteOneFinance?: Maybe<Pick<Finance, 'id'>> };

export type UpdateAFinanceMutationVariables = Exact<{
  data: FinanceUpdateInput;
  where: FinanceWhereUniqueInput;
}>;


export type UpdateAFinanceMutation = { updateOneFinance?: Maybe<FinanceFragmentFragment> };

export type CreateFinancialYearMutationVariables = Exact<{
  data: FinancialYearCreateInput;
}>;


export type CreateFinancialYearMutation = { createOneFinancialYear: FinancialYearFragmentFragment };

export type CreateAFinancialYearMutationVariables = Exact<{
  data: FinancialYearCreateInput;
}>;


export type CreateAFinancialYearMutation = { createFinancialYear?: Maybe<FinancialYearFragmentFragment> };

export type DeleteAFinancialYearMutationVariables = Exact<{
  where: FinancialYearWhereUniqueInput;
}>;


export type DeleteAFinancialYearMutation = { deleteOneFinancialYear?: Maybe<Pick<FinancialYear, 'id'>> };

export type UpdateAFinancialYearMutationVariables = Exact<{
  data: FinancialYearUpdateInput;
  where: FinancialYearWhereUniqueInput;
}>;


export type UpdateAFinancialYearMutation = { updateOneFinancialYear?: Maybe<FinancialYearFragmentFragment> };

export type CreateInventoryMutationVariables = Exact<{
  data: InventoryCreateInput;
}>;


export type CreateInventoryMutation = { createOneInventory: InventoryFragmentFragment };

export type CreateAInventoryMutationVariables = Exact<{
  data: InventoryCreateInput;
}>;


export type CreateAInventoryMutation = { createInventory?: Maybe<InventoryFragmentFragment> };

export type DeleteAInventoryMutationVariables = Exact<{
  where: InventoryWhereUniqueInput;
}>;


export type DeleteAInventoryMutation = { deleteOneInventory?: Maybe<Pick<Inventory, 'id'>> };

export type UpdateAInventoryMutationVariables = Exact<{
  data: InventoryUpdateInput;
  where: InventoryWhereUniqueInput;
}>;


export type UpdateAInventoryMutation = { updateOneInventory?: Maybe<InventoryFragmentFragment> };

export type CreateOrderMutationVariables = Exact<{
  data: OrderCreateInput;
}>;


export type CreateOrderMutation = { createOneOrder: OrderFragmentFragment };

export type CreateAnOrderMutationVariables = Exact<{
  data: OrderCreateInput;
}>;


export type CreateAnOrderMutation = { createOrder?: Maybe<OrderFragmentFragment> };

export type DeleteAnOrderMutationVariables = Exact<{
  where: OrderWhereUniqueInput;
}>;


export type DeleteAnOrderMutation = { deleteOneOrder?: Maybe<Pick<Order, 'id'>> };

export type UpdateAnOrderMutationVariables = Exact<{
  data: OrderUpdateInput;
  where: OrderWhereUniqueInput;
}>;


export type UpdateAnOrderMutation = { updateOneOrder?: Maybe<OrderFragmentFragment> };

export type CreateOrderDetailMutationVariables = Exact<{
  data: OrderDetailCreateInput;
}>;


export type CreateOrderDetailMutation = { createOneOrderDetail: OrderDetailFragmentFragment };

export type CreateAnOrderDetailMutationVariables = Exact<{
  data: OrderDetailCreateInput;
}>;


export type CreateAnOrderDetailMutation = { createOrderDetail?: Maybe<OrderDetailFragmentFragment> };

export type DeleteAnOrderDetailMutationVariables = Exact<{
  where: OrderDetailWhereUniqueInput;
}>;


export type DeleteAnOrderDetailMutation = { deleteOneOrderDetail?: Maybe<Pick<OrderDetail, 'id'>> };

export type UpdateAnOrderDetailMutationVariables = Exact<{
  data: OrderDetailUpdateInput;
  where: OrderDetailWhereUniqueInput;
}>;


export type UpdateAnOrderDetailMutation = { updateOneOrderDetail?: Maybe<OrderDetailFragmentFragment> };

export type CreateProductMutationVariables = Exact<{
  data: ProductCreateInput;
}>;


export type CreateProductMutation = { createOneProduct: ProductFragmentFragment };

export type CreateAProductMutationVariables = Exact<{
  data: ProductCreateInput;
}>;


export type CreateAProductMutation = { createProduct?: Maybe<ProductFragmentFragment> };

export type DeleteAProductMutationVariables = Exact<{
  where: ProductWhereUniqueInput;
}>;


export type DeleteAProductMutation = { deleteOneProduct?: Maybe<Pick<Product, 'id'>> };

export type UpdateAProductMutationVariables = Exact<{
  data: ProductUpdateInput;
  where: ProductWhereUniqueInput;
}>;


export type UpdateAProductMutation = { updateOneProduct?: Maybe<ProductFragmentFragment> };

export type AllAnnualBranchEmployeesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllAnnualBranchEmployeesQuery = { annualBranchEmployees: Array<AnnualBranchEmployeeFragmentFragment> };

export type SingleAnnualBranchEmployeeQueryVariables = Exact<{
  where: AnnualBranchEmployeeWhereUniqueInput;
}>;


export type SingleAnnualBranchEmployeeQuery = { annualBranchEmployee?: Maybe<AnnualBranchEmployeeFragmentFragment> };

export type SingleAnnualBranchEmployeeByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type SingleAnnualBranchEmployeeByIdQuery = { annualBranchEmployeeById?: Maybe<AnnualBranchEmployeeFragmentFragment> };

export type SingleAnnualBranchEmployeeByBranchEmployeeAndYearQueryVariables = Exact<{
  financialYearId: Scalars['String'];
  branchEmployeeId: Scalars['String'];
}>;


export type SingleAnnualBranchEmployeeByBranchEmployeeAndYearQuery = { annualBranchEmployeeByBranchEmployeeAndYear?: Maybe<AnnualBranchEmployeeFragmentFragment> };

export type AllAnnualClientsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllAnnualClientsQuery = { annualClients: Array<AnnualClientFragmentFragment> };

export type SingleAnnualClientQueryVariables = Exact<{
  where: AnnualClientWhereUniqueInput;
}>;


export type SingleAnnualClientQuery = { annualClient?: Maybe<AnnualClientFragmentFragment> };

export type SingleAnnualClientByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type SingleAnnualClientByIdQuery = { annualClientById?: Maybe<AnnualClientFragmentFragment> };

export type SingleAnnualClientByYearClientQueryVariables = Exact<{
  yearClient: Scalars['String'];
}>;


export type SingleAnnualClientByYearClientQuery = { annualClientByYearClient?: Maybe<AnnualClientFragmentFragment> };

export type SingleAnnualClientByPhoneAndYearQueryVariables = Exact<{
  clientId: Scalars['String'];
  financialYearId: Scalars['String'];
}>;


export type SingleAnnualClientByPhoneAndYearQuery = { annualClientByPhoneAndYear?: Maybe<(
    { Client?: Maybe<ClientFragmentFragment>, FinancialYear?: Maybe<FinancialYearFragmentFragment> }
    & AnnualClientFragmentFragment
  )> };

export type AllBonusesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllBonusesQuery = { bonuses: Array<BonusFragmentFragment> };

export type SingleBonusQueryVariables = Exact<{
  where: BonusWhereUniqueInput;
}>;


export type SingleBonusQuery = { bonus?: Maybe<BonusFragmentFragment> };

export type SingleBonusByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type SingleBonusByIdQuery = { bonusById?: Maybe<BonusFragmentFragment> };

export type AllBranchesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllBranchesQuery = { branches: Array<BranchFragmentFragment> };

export type SingleBranchQueryVariables = Exact<{
  where: BranchWhereUniqueInput;
}>;


export type SingleBranchQuery = { branch?: Maybe<BranchFragmentFragment> };

export type SingleBranchByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type SingleBranchByIdQuery = { branchById?: Maybe<BranchFragmentFragment> };

export type SingleBranchByBranchCodeQueryVariables = Exact<{
  branchCode: Scalars['String'];
}>;


export type SingleBranchByBranchCodeQuery = { branchByBranchCode?: Maybe<BranchFragmentFragment> };

export type AllBranchEmployeesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllBranchEmployeesQuery = { branchEmployees: Array<BranchEmployeeFragmentFragment> };

export type SingleBranchEmployeeQueryVariables = Exact<{
  where: BranchEmployeeWhereUniqueInput;
}>;


export type SingleBranchEmployeeQuery = { branchEmployee?: Maybe<BranchEmployeeFragmentFragment> };

export type SingleBranchEmployeeByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type SingleBranchEmployeeByIdQuery = { branchEmployeeById?: Maybe<BranchEmployeeFragmentFragment> };

export type SingleBranchEmployeeByEmployeeIdAndBranchIdQueryVariables = Exact<{
  employeeId: Scalars['String'];
  branchId: Scalars['String'];
}>;


export type SingleBranchEmployeeByEmployeeIdAndBranchIdQuery = { branchEmployeeByEmplIdAndBranchId?: Maybe<BranchEmployeeFragmentFragment> };

export type AllCartsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllCartsQuery = { carts: Array<CartFragmentFragment> };

export type SingleCartQueryVariables = Exact<{
  where: CartWhereUniqueInput;
}>;


export type SingleCartQuery = { cart?: Maybe<CartFragmentFragment> };

export type SingleCartByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type SingleCartByIdQuery = { cartById?: Maybe<CartFragmentFragment> };

export type CartByAnnualClientIdAndEmployeeIdQueryVariables = Exact<{
  annualClientId: Scalars['String'];
  annualBranchEmployeeId: Scalars['String'];
}>;


export type CartByAnnualClientIdAndEmployeeIdQuery = { cartByAnnualClientIdAndEmplId?: Maybe<Array<Maybe<CartFragmentFragment>>> };

export type AllCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllCategoriesQuery = { categories: Array<CategoryFragmentFragment> };

export type SingleCategoryQueryVariables = Exact<{
  where: CategoryWhereUniqueInput;
}>;


export type SingleCategoryQuery = { category?: Maybe<CategoryFragmentFragment> };

export type SingleCategoryByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type SingleCategoryByIdQuery = { categoryById?: Maybe<CategoryFragmentFragment> };

export type AllClientsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllClientsQuery = { clients?: Maybe<Array<Maybe<ClientFragmentFragment>>> };

export type SingleClientQueryVariables = Exact<{
  where: ClientWhereUniqueInput;
}>;


export type SingleClientQuery = { client?: Maybe<ClientFragmentFragment> };

export type SingleClientByPhoneNumberQueryVariables = Exact<{
  clientPhoneNumb: Scalars['Int'];
}>;


export type SingleClientByPhoneNumberQuery = { clientByPhoneNumber?: Maybe<ClientFragmentFragment> };

export type SingleClientByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type SingleClientByIdQuery = { clientById?: Maybe<Array<Maybe<ClientFragmentFragment>>> };

export type AllEmployeesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllEmployeesQuery = { employees: Array<EmployeeFragmentFragment> };

export type SingleEmployeeQueryVariables = Exact<{
  where: EmployeeWhereUniqueInput;
}>;


export type SingleEmployeeQuery = { employee?: Maybe<EmployeeFragmentFragment> };

export type SingleEmployeeByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type SingleEmployeeByIdQuery = { employeeById?: Maybe<EmployeeFragmentFragment> };

export type SingleEmployeeByPhoneNumberQueryVariables = Exact<{
  employeePhoneNumb: Scalars['Int'];
}>;


export type SingleEmployeeByPhoneNumberQuery = { employeeByPhoneNumber?: Maybe<EmployeeFragmentFragment> };

export type SingleEmployeeByCodeQueryVariables = Exact<{
  employeeCode: Scalars['String'];
}>;


export type SingleEmployeeByCodeQuery = { employeeByCode?: Maybe<EmployeeFragmentFragment> };

export type AllEmployeeStatusesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllEmployeeStatusesQuery = { employeeStatuses: Array<EmployeeStatusFragmentFragment> };

export type SingleEmployeeStatusQueryVariables = Exact<{
  where: EmployeeStatusWhereUniqueInput;
}>;


export type SingleEmployeeStatusQuery = { employeeStatus?: Maybe<EmployeeStatusFragmentFragment> };

export type SingleEmployeeStatusByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type SingleEmployeeStatusByIdQuery = { employeeStatusById?: Maybe<EmployeeStatusFragmentFragment> };

export type AllFinancesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllFinancesQuery = { finances: Array<FinanceFragmentFragment> };

export type SingleFinanceQueryVariables = Exact<{
  where: FinanceWhereUniqueInput;
}>;


export type SingleFinanceQuery = { finance?: Maybe<FinanceFragmentFragment> };

export type SingleFinanceByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type SingleFinanceByIdQuery = { financeById?: Maybe<FinanceFragmentFragment> };

export type AllFinancialYearsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllFinancialYearsQuery = { financialYears?: Maybe<FinancialYearFragmentFragment> };

export type SingleFinancialYearQueryVariables = Exact<{
  where: FinancialYearWhereUniqueInput;
}>;


export type SingleFinancialYearQuery = { financialYear?: Maybe<FinancialYearFragmentFragment> };

export type SingleFinancialYearByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type SingleFinancialYearByIdQuery = { financialYearById?: Maybe<FinancialYearFragmentFragment> };

export type RecentSingleFinancialYearQueryVariables = Exact<{ [key: string]: never; }>;


export type RecentSingleFinancialYearQuery = { recentFinancialYear?: Maybe<FinancialYearFragmentFragment> };

export type AllInventorysQueryVariables = Exact<{ [key: string]: never; }>;


export type AllInventorysQuery = { inventories: Array<InventoryFragmentFragment> };

export type SingleInventoryQueryVariables = Exact<{
  where: InventoryWhereUniqueInput;
}>;


export type SingleInventoryQuery = { inventory?: Maybe<InventoryFragmentFragment> };

export type SingleInventoryByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type SingleInventoryByIdQuery = { inventoryById?: Maybe<InventoryFragmentFragment> };

export type AllOrderDetailQueryVariables = Exact<{ [key: string]: never; }>;


export type AllOrderDetailQuery = { orderDetails: Array<OrderDetailFragmentFragment> };

export type SingleOrderDetailQueryVariables = Exact<{
  where: OrderDetailWhereUniqueInput;
}>;


export type SingleOrderDetailQuery = { orderDetail?: Maybe<OrderDetailFragmentFragment> };

export type AllOrdersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllOrdersQuery = { orders?: Maybe<Array<Maybe<OrderFragmentFragment>>> };

export type SingleOrderQueryVariables = Exact<{
  where: OrderWhereUniqueInput;
}>;


export type SingleOrderQuery = { order?: Maybe<OrderFragmentFragment> };

export type AllProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllProductsQuery = { products?: Maybe<Array<Maybe<ProductFragmentFragment>>> };

export type SingleProductQueryVariables = Exact<{
  where: ProductWhereUniqueInput;
}>;


export type SingleProductQuery = { product?: Maybe<ProductFragmentFragment> };

export type SingleProductByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type SingleProductByIdQuery = { productById?: Maybe<ProductFragmentFragment> };

export type AllProductsByCategoryIdQueryVariables = Exact<{
  categoryId: Scalars['String'];
}>;


export type AllProductsByCategoryIdQuery = { productsByCategoryID?: Maybe<Array<Maybe<ProductFragmentFragment>>> };

export const BonusFragmentFragmentDoc = gql`
    fragment BonusFragment on Bonus {
  bonusName
  id
}
    `;
export const EmployeeStatusFragmentFragmentDoc = gql`
    fragment EmployeeStatusFragment on EmployeeStatus {
  id
  status
}
    `;
export const OrderDetailFragmentFragmentDoc = gql`
    fragment OrderDetailFragment on OrderDetail {
  id
  pdtCost
  qtty
  salesPrice
}
    `;
export const ClientFragmentFragmentDoc = gql`
    fragment ClientFragment on Client {
  id
  clientNames
  clientPhoneNumb
}
    `;
export const FinancialYearFragmentFragmentDoc = gql`
    fragment FinancialYearFragment on FinancialYear {
  yearName
  id
}
    `;
export const AnnualClientFragmentFragmentDoc = gql`
    fragment AnnualClientFragment on AnnualClient {
  Client {
    ...ClientFragment
  }
  FinancialYear {
    ...FinancialYearFragment
  }
  id
}
    ${ClientFragmentFragmentDoc}
${FinancialYearFragmentFragmentDoc}`;
export const OrderFragmentFragmentDoc = gql`
    fragment OrderFragment on Order {
  id
  orderDate
  orderTotal
  totalPaid
  orderNumber
  orderDetails {
    ...OrderDetailFragment
  }
  AnnualClient {
    ...AnnualClientFragment
  }
}
    ${OrderDetailFragmentFragmentDoc}
${AnnualClientFragmentFragmentDoc}`;
export const FinanceFragmentFragmentDoc = gql`
    fragment FinanceFragment on Finance {
  amtPaid
  orderId
  id
  Order {
    ...OrderFragment
  }
}
    ${OrderFragmentFragmentDoc}`;
export const InventoryFragmentFragmentDoc = gql`
    fragment InventoryFragment on Inventory {
  qttyInHand
  id
}
    `;
export const CategoryFragmentFragmentDoc = gql`
    fragment CategoryFragment on Category {
  categoryCode
  categoryName
  id
}
    `;
export const BranchFragmentFragmentDoc = gql`
    fragment BranchFragment on Branch {
  branchName
  branchCode
  id
}
    `;
export const EmployeeFragmentFragmentDoc = gql`
    fragment EmployeeFragment on Employee {
  employeeNames
  employeeCode
  id
  employeePhoneNumb
}
    `;
export const BranchEmployeeFragmentFragmentDoc = gql`
    fragment BranchEmployeeFragment on BranchEmployee {
  Branch {
    ...BranchFragment
  }
  endDate
  id
  startDate
  Employee {
    ...EmployeeFragment
  }
}
    ${BranchFragmentFragmentDoc}
${EmployeeFragmentFragmentDoc}`;
export const AnnualBranchEmployeeFragmentFragmentDoc = gql`
    fragment AnnualBranchEmployeeFragment on AnnualBranchEmployee {
  id
  BranchEmployee {
    ...BranchEmployeeFragment
  }
  orders {
    ...OrderFragment
  }
  FinancialYear {
    ...FinancialYearFragment
  }
}
    ${BranchEmployeeFragmentFragmentDoc}
${OrderFragmentFragmentDoc}
${FinancialYearFragmentFragmentDoc}`;
export const CartFragmentFragmentDoc = gql`
    fragment CartFragment on Cart {
  AnnualBranchEmployee {
    ...AnnualBranchEmployeeFragment
  }
  AnnualClient {
    ...AnnualClientFragment
  }
  annualBranchEmployeeId
  id
  orderDate
  qtty
  pdtCost
  salesPrice
}
    ${AnnualBranchEmployeeFragmentFragmentDoc}
${AnnualClientFragmentFragmentDoc}`;
export const ProductFragmentFragmentDoc = gql`
    fragment ProductFragment on Product {
  id
  pdtName
  pdtCode
  Category {
    ...CategoryFragment
  }
  carts {
    ...CartFragment
  }
  categoryId
  unitPrice
  orderDetails {
    ...OrderDetailFragment
  }
}
    ${CategoryFragmentFragmentDoc}
${CartFragmentFragmentDoc}
${OrderDetailFragmentFragmentDoc}`;
export const CreateAnnualBranchEmployeeDocument = gql`
    mutation createAnnualBranchEmployee($data: AnnualBranchEmployeeCreateInput!) {
  createOneAnnualBranchEmployee(data: $data) {
    ...AnnualBranchEmployeeFragment
  }
}
    ${AnnualBranchEmployeeFragmentFragmentDoc}`;
export type CreateAnnualBranchEmployeeMutationFn = Apollo.MutationFunction<CreateAnnualBranchEmployeeMutation, CreateAnnualBranchEmployeeMutationVariables>;
export type CreateAnnualBranchEmployeeComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateAnnualBranchEmployeeMutation, CreateAnnualBranchEmployeeMutationVariables>, 'mutation'>;

    export const CreateAnnualBranchEmployeeComponent = (props: CreateAnnualBranchEmployeeComponentProps) => (
      <ApolloReactComponents.Mutation<CreateAnnualBranchEmployeeMutation, CreateAnnualBranchEmployeeMutationVariables> mutation={CreateAnnualBranchEmployeeDocument} {...props} />
    );
    
export type CreateAnnualBranchEmployeeProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateAnnualBranchEmployeeMutation, CreateAnnualBranchEmployeeMutationVariables>
    } & TChildProps;
export function withCreateAnnualBranchEmployee<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateAnnualBranchEmployeeMutation,
  CreateAnnualBranchEmployeeMutationVariables,
  CreateAnnualBranchEmployeeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateAnnualBranchEmployeeMutation, CreateAnnualBranchEmployeeMutationVariables, CreateAnnualBranchEmployeeProps<TChildProps, TDataName>>(CreateAnnualBranchEmployeeDocument, {
      alias: 'createAnnualBranchEmployee',
      ...operationOptions
    });
};

/**
 * __useCreateAnnualBranchEmployeeMutation__
 *
 * To run a mutation, you first call `useCreateAnnualBranchEmployeeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAnnualBranchEmployeeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAnnualBranchEmployeeMutation, { data, loading, error }] = useCreateAnnualBranchEmployeeMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateAnnualBranchEmployeeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateAnnualBranchEmployeeMutation, CreateAnnualBranchEmployeeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateAnnualBranchEmployeeMutation, CreateAnnualBranchEmployeeMutationVariables>(CreateAnnualBranchEmployeeDocument, options);
      }
export type CreateAnnualBranchEmployeeMutationHookResult = ReturnType<typeof useCreateAnnualBranchEmployeeMutation>;
export type CreateAnnualBranchEmployeeMutationResult = Apollo.MutationResult<CreateAnnualBranchEmployeeMutation>;
export type CreateAnnualBranchEmployeeMutationOptions = Apollo.BaseMutationOptions<CreateAnnualBranchEmployeeMutation, CreateAnnualBranchEmployeeMutationVariables>;
export const CreateAnAnnualBranchEmployeeDocument = gql`
    mutation createAnAnnualBranchEmployee($data: AnnualBranchEmployeeCreateInput!) {
  createAnnualBranchEmployee(data: $data) {
    ...AnnualBranchEmployeeFragment
  }
}
    ${AnnualBranchEmployeeFragmentFragmentDoc}`;
export type CreateAnAnnualBranchEmployeeMutationFn = Apollo.MutationFunction<CreateAnAnnualBranchEmployeeMutation, CreateAnAnnualBranchEmployeeMutationVariables>;
export type CreateAnAnnualBranchEmployeeComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateAnAnnualBranchEmployeeMutation, CreateAnAnnualBranchEmployeeMutationVariables>, 'mutation'>;

    export const CreateAnAnnualBranchEmployeeComponent = (props: CreateAnAnnualBranchEmployeeComponentProps) => (
      <ApolloReactComponents.Mutation<CreateAnAnnualBranchEmployeeMutation, CreateAnAnnualBranchEmployeeMutationVariables> mutation={CreateAnAnnualBranchEmployeeDocument} {...props} />
    );
    
export type CreateAnAnnualBranchEmployeeProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateAnAnnualBranchEmployeeMutation, CreateAnAnnualBranchEmployeeMutationVariables>
    } & TChildProps;
export function withCreateAnAnnualBranchEmployee<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateAnAnnualBranchEmployeeMutation,
  CreateAnAnnualBranchEmployeeMutationVariables,
  CreateAnAnnualBranchEmployeeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateAnAnnualBranchEmployeeMutation, CreateAnAnnualBranchEmployeeMutationVariables, CreateAnAnnualBranchEmployeeProps<TChildProps, TDataName>>(CreateAnAnnualBranchEmployeeDocument, {
      alias: 'createAnAnnualBranchEmployee',
      ...operationOptions
    });
};

/**
 * __useCreateAnAnnualBranchEmployeeMutation__
 *
 * To run a mutation, you first call `useCreateAnAnnualBranchEmployeeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAnAnnualBranchEmployeeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAnAnnualBranchEmployeeMutation, { data, loading, error }] = useCreateAnAnnualBranchEmployeeMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateAnAnnualBranchEmployeeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateAnAnnualBranchEmployeeMutation, CreateAnAnnualBranchEmployeeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateAnAnnualBranchEmployeeMutation, CreateAnAnnualBranchEmployeeMutationVariables>(CreateAnAnnualBranchEmployeeDocument, options);
      }
export type CreateAnAnnualBranchEmployeeMutationHookResult = ReturnType<typeof useCreateAnAnnualBranchEmployeeMutation>;
export type CreateAnAnnualBranchEmployeeMutationResult = Apollo.MutationResult<CreateAnAnnualBranchEmployeeMutation>;
export type CreateAnAnnualBranchEmployeeMutationOptions = Apollo.BaseMutationOptions<CreateAnAnnualBranchEmployeeMutation, CreateAnAnnualBranchEmployeeMutationVariables>;
export const DeleteAnAnnualBranchEmployeeDocument = gql`
    mutation deleteAnAnnualBranchEmployee($where: AnnualBranchEmployeeWhereUniqueInput!) {
  deleteOneAnnualBranchEmployee(where: $where) {
    id
  }
}
    `;
export type DeleteAnAnnualBranchEmployeeMutationFn = Apollo.MutationFunction<DeleteAnAnnualBranchEmployeeMutation, DeleteAnAnnualBranchEmployeeMutationVariables>;
export type DeleteAnAnnualBranchEmployeeComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteAnAnnualBranchEmployeeMutation, DeleteAnAnnualBranchEmployeeMutationVariables>, 'mutation'>;

    export const DeleteAnAnnualBranchEmployeeComponent = (props: DeleteAnAnnualBranchEmployeeComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteAnAnnualBranchEmployeeMutation, DeleteAnAnnualBranchEmployeeMutationVariables> mutation={DeleteAnAnnualBranchEmployeeDocument} {...props} />
    );
    
export type DeleteAnAnnualBranchEmployeeProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteAnAnnualBranchEmployeeMutation, DeleteAnAnnualBranchEmployeeMutationVariables>
    } & TChildProps;
export function withDeleteAnAnnualBranchEmployee<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteAnAnnualBranchEmployeeMutation,
  DeleteAnAnnualBranchEmployeeMutationVariables,
  DeleteAnAnnualBranchEmployeeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteAnAnnualBranchEmployeeMutation, DeleteAnAnnualBranchEmployeeMutationVariables, DeleteAnAnnualBranchEmployeeProps<TChildProps, TDataName>>(DeleteAnAnnualBranchEmployeeDocument, {
      alias: 'deleteAnAnnualBranchEmployee',
      ...operationOptions
    });
};

/**
 * __useDeleteAnAnnualBranchEmployeeMutation__
 *
 * To run a mutation, you first call `useDeleteAnAnnualBranchEmployeeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAnAnnualBranchEmployeeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAnAnnualBranchEmployeeMutation, { data, loading, error }] = useDeleteAnAnnualBranchEmployeeMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteAnAnnualBranchEmployeeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteAnAnnualBranchEmployeeMutation, DeleteAnAnnualBranchEmployeeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteAnAnnualBranchEmployeeMutation, DeleteAnAnnualBranchEmployeeMutationVariables>(DeleteAnAnnualBranchEmployeeDocument, options);
      }
export type DeleteAnAnnualBranchEmployeeMutationHookResult = ReturnType<typeof useDeleteAnAnnualBranchEmployeeMutation>;
export type DeleteAnAnnualBranchEmployeeMutationResult = Apollo.MutationResult<DeleteAnAnnualBranchEmployeeMutation>;
export type DeleteAnAnnualBranchEmployeeMutationOptions = Apollo.BaseMutationOptions<DeleteAnAnnualBranchEmployeeMutation, DeleteAnAnnualBranchEmployeeMutationVariables>;
export const UpdateAnAnnualBranchEmployeeDocument = gql`
    mutation updateAnAnnualBranchEmployee($data: AnnualBranchEmployeeUpdateInput!, $where: AnnualBranchEmployeeWhereUniqueInput!) {
  updateOneAnnualBranchEmployee(data: $data, where: $where) {
    ...AnnualBranchEmployeeFragment
  }
}
    ${AnnualBranchEmployeeFragmentFragmentDoc}`;
export type UpdateAnAnnualBranchEmployeeMutationFn = Apollo.MutationFunction<UpdateAnAnnualBranchEmployeeMutation, UpdateAnAnnualBranchEmployeeMutationVariables>;
export type UpdateAnAnnualBranchEmployeeComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateAnAnnualBranchEmployeeMutation, UpdateAnAnnualBranchEmployeeMutationVariables>, 'mutation'>;

    export const UpdateAnAnnualBranchEmployeeComponent = (props: UpdateAnAnnualBranchEmployeeComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateAnAnnualBranchEmployeeMutation, UpdateAnAnnualBranchEmployeeMutationVariables> mutation={UpdateAnAnnualBranchEmployeeDocument} {...props} />
    );
    
export type UpdateAnAnnualBranchEmployeeProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdateAnAnnualBranchEmployeeMutation, UpdateAnAnnualBranchEmployeeMutationVariables>
    } & TChildProps;
export function withUpdateAnAnnualBranchEmployee<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateAnAnnualBranchEmployeeMutation,
  UpdateAnAnnualBranchEmployeeMutationVariables,
  UpdateAnAnnualBranchEmployeeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateAnAnnualBranchEmployeeMutation, UpdateAnAnnualBranchEmployeeMutationVariables, UpdateAnAnnualBranchEmployeeProps<TChildProps, TDataName>>(UpdateAnAnnualBranchEmployeeDocument, {
      alias: 'updateAnAnnualBranchEmployee',
      ...operationOptions
    });
};

/**
 * __useUpdateAnAnnualBranchEmployeeMutation__
 *
 * To run a mutation, you first call `useUpdateAnAnnualBranchEmployeeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAnAnnualBranchEmployeeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAnAnnualBranchEmployeeMutation, { data, loading, error }] = useUpdateAnAnnualBranchEmployeeMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateAnAnnualBranchEmployeeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateAnAnnualBranchEmployeeMutation, UpdateAnAnnualBranchEmployeeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateAnAnnualBranchEmployeeMutation, UpdateAnAnnualBranchEmployeeMutationVariables>(UpdateAnAnnualBranchEmployeeDocument, options);
      }
export type UpdateAnAnnualBranchEmployeeMutationHookResult = ReturnType<typeof useUpdateAnAnnualBranchEmployeeMutation>;
export type UpdateAnAnnualBranchEmployeeMutationResult = Apollo.MutationResult<UpdateAnAnnualBranchEmployeeMutation>;
export type UpdateAnAnnualBranchEmployeeMutationOptions = Apollo.BaseMutationOptions<UpdateAnAnnualBranchEmployeeMutation, UpdateAnAnnualBranchEmployeeMutationVariables>;
export const CreateAnnualClientDocument = gql`
    mutation createAnnualClient($data: AnnualClientCreateInput!) {
  createOneAnnualClient(data: $data) {
    ...AnnualClientFragment
  }
}
    ${AnnualClientFragmentFragmentDoc}`;
export type CreateAnnualClientMutationFn = Apollo.MutationFunction<CreateAnnualClientMutation, CreateAnnualClientMutationVariables>;
export type CreateAnnualClientComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateAnnualClientMutation, CreateAnnualClientMutationVariables>, 'mutation'>;

    export const CreateAnnualClientComponent = (props: CreateAnnualClientComponentProps) => (
      <ApolloReactComponents.Mutation<CreateAnnualClientMutation, CreateAnnualClientMutationVariables> mutation={CreateAnnualClientDocument} {...props} />
    );
    
export type CreateAnnualClientProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateAnnualClientMutation, CreateAnnualClientMutationVariables>
    } & TChildProps;
export function withCreateAnnualClient<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateAnnualClientMutation,
  CreateAnnualClientMutationVariables,
  CreateAnnualClientProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateAnnualClientMutation, CreateAnnualClientMutationVariables, CreateAnnualClientProps<TChildProps, TDataName>>(CreateAnnualClientDocument, {
      alias: 'createAnnualClient',
      ...operationOptions
    });
};

/**
 * __useCreateAnnualClientMutation__
 *
 * To run a mutation, you first call `useCreateAnnualClientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAnnualClientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAnnualClientMutation, { data, loading, error }] = useCreateAnnualClientMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateAnnualClientMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateAnnualClientMutation, CreateAnnualClientMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateAnnualClientMutation, CreateAnnualClientMutationVariables>(CreateAnnualClientDocument, options);
      }
export type CreateAnnualClientMutationHookResult = ReturnType<typeof useCreateAnnualClientMutation>;
export type CreateAnnualClientMutationResult = Apollo.MutationResult<CreateAnnualClientMutation>;
export type CreateAnnualClientMutationOptions = Apollo.BaseMutationOptions<CreateAnnualClientMutation, CreateAnnualClientMutationVariables>;
export const CreateAAnnualClientDocument = gql`
    mutation createAAnnualClient($data: AnnualClientCreateInput!) {
  createAnnualClient(data: $data) {
    ...AnnualClientFragment
  }
}
    ${AnnualClientFragmentFragmentDoc}`;
export type CreateAAnnualClientMutationFn = Apollo.MutationFunction<CreateAAnnualClientMutation, CreateAAnnualClientMutationVariables>;
export type CreateAAnnualClientComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateAAnnualClientMutation, CreateAAnnualClientMutationVariables>, 'mutation'>;

    export const CreateAAnnualClientComponent = (props: CreateAAnnualClientComponentProps) => (
      <ApolloReactComponents.Mutation<CreateAAnnualClientMutation, CreateAAnnualClientMutationVariables> mutation={CreateAAnnualClientDocument} {...props} />
    );
    
export type CreateAAnnualClientProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateAAnnualClientMutation, CreateAAnnualClientMutationVariables>
    } & TChildProps;
export function withCreateAAnnualClient<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateAAnnualClientMutation,
  CreateAAnnualClientMutationVariables,
  CreateAAnnualClientProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateAAnnualClientMutation, CreateAAnnualClientMutationVariables, CreateAAnnualClientProps<TChildProps, TDataName>>(CreateAAnnualClientDocument, {
      alias: 'createAAnnualClient',
      ...operationOptions
    });
};

/**
 * __useCreateAAnnualClientMutation__
 *
 * To run a mutation, you first call `useCreateAAnnualClientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAAnnualClientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAAnnualClientMutation, { data, loading, error }] = useCreateAAnnualClientMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateAAnnualClientMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateAAnnualClientMutation, CreateAAnnualClientMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateAAnnualClientMutation, CreateAAnnualClientMutationVariables>(CreateAAnnualClientDocument, options);
      }
export type CreateAAnnualClientMutationHookResult = ReturnType<typeof useCreateAAnnualClientMutation>;
export type CreateAAnnualClientMutationResult = Apollo.MutationResult<CreateAAnnualClientMutation>;
export type CreateAAnnualClientMutationOptions = Apollo.BaseMutationOptions<CreateAAnnualClientMutation, CreateAAnnualClientMutationVariables>;
export const DeleteAAnnualClientDocument = gql`
    mutation deleteAAnnualClient($where: AnnualClientWhereUniqueInput!) {
  deleteOneAnnualClient(where: $where) {
    id
  }
}
    `;
export type DeleteAAnnualClientMutationFn = Apollo.MutationFunction<DeleteAAnnualClientMutation, DeleteAAnnualClientMutationVariables>;
export type DeleteAAnnualClientComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteAAnnualClientMutation, DeleteAAnnualClientMutationVariables>, 'mutation'>;

    export const DeleteAAnnualClientComponent = (props: DeleteAAnnualClientComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteAAnnualClientMutation, DeleteAAnnualClientMutationVariables> mutation={DeleteAAnnualClientDocument} {...props} />
    );
    
export type DeleteAAnnualClientProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteAAnnualClientMutation, DeleteAAnnualClientMutationVariables>
    } & TChildProps;
export function withDeleteAAnnualClient<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteAAnnualClientMutation,
  DeleteAAnnualClientMutationVariables,
  DeleteAAnnualClientProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteAAnnualClientMutation, DeleteAAnnualClientMutationVariables, DeleteAAnnualClientProps<TChildProps, TDataName>>(DeleteAAnnualClientDocument, {
      alias: 'deleteAAnnualClient',
      ...operationOptions
    });
};

/**
 * __useDeleteAAnnualClientMutation__
 *
 * To run a mutation, you first call `useDeleteAAnnualClientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAAnnualClientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAAnnualClientMutation, { data, loading, error }] = useDeleteAAnnualClientMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteAAnnualClientMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteAAnnualClientMutation, DeleteAAnnualClientMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteAAnnualClientMutation, DeleteAAnnualClientMutationVariables>(DeleteAAnnualClientDocument, options);
      }
export type DeleteAAnnualClientMutationHookResult = ReturnType<typeof useDeleteAAnnualClientMutation>;
export type DeleteAAnnualClientMutationResult = Apollo.MutationResult<DeleteAAnnualClientMutation>;
export type DeleteAAnnualClientMutationOptions = Apollo.BaseMutationOptions<DeleteAAnnualClientMutation, DeleteAAnnualClientMutationVariables>;
export const UpdateAAnnualClientDocument = gql`
    mutation updateAAnnualClient($data: AnnualClientUpdateInput!, $where: AnnualClientWhereUniqueInput!) {
  updateOneAnnualClient(data: $data, where: $where) {
    ...AnnualClientFragment
  }
}
    ${AnnualClientFragmentFragmentDoc}`;
export type UpdateAAnnualClientMutationFn = Apollo.MutationFunction<UpdateAAnnualClientMutation, UpdateAAnnualClientMutationVariables>;
export type UpdateAAnnualClientComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateAAnnualClientMutation, UpdateAAnnualClientMutationVariables>, 'mutation'>;

    export const UpdateAAnnualClientComponent = (props: UpdateAAnnualClientComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateAAnnualClientMutation, UpdateAAnnualClientMutationVariables> mutation={UpdateAAnnualClientDocument} {...props} />
    );
    
export type UpdateAAnnualClientProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdateAAnnualClientMutation, UpdateAAnnualClientMutationVariables>
    } & TChildProps;
export function withUpdateAAnnualClient<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateAAnnualClientMutation,
  UpdateAAnnualClientMutationVariables,
  UpdateAAnnualClientProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateAAnnualClientMutation, UpdateAAnnualClientMutationVariables, UpdateAAnnualClientProps<TChildProps, TDataName>>(UpdateAAnnualClientDocument, {
      alias: 'updateAAnnualClient',
      ...operationOptions
    });
};

/**
 * __useUpdateAAnnualClientMutation__
 *
 * To run a mutation, you first call `useUpdateAAnnualClientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAAnnualClientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAAnnualClientMutation, { data, loading, error }] = useUpdateAAnnualClientMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateAAnnualClientMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateAAnnualClientMutation, UpdateAAnnualClientMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateAAnnualClientMutation, UpdateAAnnualClientMutationVariables>(UpdateAAnnualClientDocument, options);
      }
export type UpdateAAnnualClientMutationHookResult = ReturnType<typeof useUpdateAAnnualClientMutation>;
export type UpdateAAnnualClientMutationResult = Apollo.MutationResult<UpdateAAnnualClientMutation>;
export type UpdateAAnnualClientMutationOptions = Apollo.BaseMutationOptions<UpdateAAnnualClientMutation, UpdateAAnnualClientMutationVariables>;
export const CreateBonusDocument = gql`
    mutation createBonus($data: BonusCreateInput!) {
  createOneBonus(data: $data) {
    ...BonusFragment
  }
}
    ${BonusFragmentFragmentDoc}`;
export type CreateBonusMutationFn = Apollo.MutationFunction<CreateBonusMutation, CreateBonusMutationVariables>;
export type CreateBonusComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateBonusMutation, CreateBonusMutationVariables>, 'mutation'>;

    export const CreateBonusComponent = (props: CreateBonusComponentProps) => (
      <ApolloReactComponents.Mutation<CreateBonusMutation, CreateBonusMutationVariables> mutation={CreateBonusDocument} {...props} />
    );
    
export type CreateBonusProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateBonusMutation, CreateBonusMutationVariables>
    } & TChildProps;
export function withCreateBonus<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateBonusMutation,
  CreateBonusMutationVariables,
  CreateBonusProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateBonusMutation, CreateBonusMutationVariables, CreateBonusProps<TChildProps, TDataName>>(CreateBonusDocument, {
      alias: 'createBonus',
      ...operationOptions
    });
};

/**
 * __useCreateBonusMutation__
 *
 * To run a mutation, you first call `useCreateBonusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBonusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBonusMutation, { data, loading, error }] = useCreateBonusMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateBonusMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateBonusMutation, CreateBonusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateBonusMutation, CreateBonusMutationVariables>(CreateBonusDocument, options);
      }
export type CreateBonusMutationHookResult = ReturnType<typeof useCreateBonusMutation>;
export type CreateBonusMutationResult = Apollo.MutationResult<CreateBonusMutation>;
export type CreateBonusMutationOptions = Apollo.BaseMutationOptions<CreateBonusMutation, CreateBonusMutationVariables>;
export const CreateABonusDocument = gql`
    mutation createABonus($data: BonusCreateInput!) {
  createBonus(data: $data) {
    ...BonusFragment
  }
}
    ${BonusFragmentFragmentDoc}`;
export type CreateABonusMutationFn = Apollo.MutationFunction<CreateABonusMutation, CreateABonusMutationVariables>;
export type CreateABonusComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateABonusMutation, CreateABonusMutationVariables>, 'mutation'>;

    export const CreateABonusComponent = (props: CreateABonusComponentProps) => (
      <ApolloReactComponents.Mutation<CreateABonusMutation, CreateABonusMutationVariables> mutation={CreateABonusDocument} {...props} />
    );
    
export type CreateABonusProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateABonusMutation, CreateABonusMutationVariables>
    } & TChildProps;
export function withCreateABonus<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateABonusMutation,
  CreateABonusMutationVariables,
  CreateABonusProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateABonusMutation, CreateABonusMutationVariables, CreateABonusProps<TChildProps, TDataName>>(CreateABonusDocument, {
      alias: 'createABonus',
      ...operationOptions
    });
};

/**
 * __useCreateABonusMutation__
 *
 * To run a mutation, you first call `useCreateABonusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateABonusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createABonusMutation, { data, loading, error }] = useCreateABonusMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateABonusMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateABonusMutation, CreateABonusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateABonusMutation, CreateABonusMutationVariables>(CreateABonusDocument, options);
      }
export type CreateABonusMutationHookResult = ReturnType<typeof useCreateABonusMutation>;
export type CreateABonusMutationResult = Apollo.MutationResult<CreateABonusMutation>;
export type CreateABonusMutationOptions = Apollo.BaseMutationOptions<CreateABonusMutation, CreateABonusMutationVariables>;
export const DeleteABonusDocument = gql`
    mutation deleteABonus($where: BonusWhereUniqueInput!) {
  deleteOneBonus(where: $where) {
    id
  }
}
    `;
export type DeleteABonusMutationFn = Apollo.MutationFunction<DeleteABonusMutation, DeleteABonusMutationVariables>;
export type DeleteABonusComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteABonusMutation, DeleteABonusMutationVariables>, 'mutation'>;

    export const DeleteABonusComponent = (props: DeleteABonusComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteABonusMutation, DeleteABonusMutationVariables> mutation={DeleteABonusDocument} {...props} />
    );
    
export type DeleteABonusProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteABonusMutation, DeleteABonusMutationVariables>
    } & TChildProps;
export function withDeleteABonus<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteABonusMutation,
  DeleteABonusMutationVariables,
  DeleteABonusProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteABonusMutation, DeleteABonusMutationVariables, DeleteABonusProps<TChildProps, TDataName>>(DeleteABonusDocument, {
      alias: 'deleteABonus',
      ...operationOptions
    });
};

/**
 * __useDeleteABonusMutation__
 *
 * To run a mutation, you first call `useDeleteABonusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteABonusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteABonusMutation, { data, loading, error }] = useDeleteABonusMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteABonusMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteABonusMutation, DeleteABonusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteABonusMutation, DeleteABonusMutationVariables>(DeleteABonusDocument, options);
      }
export type DeleteABonusMutationHookResult = ReturnType<typeof useDeleteABonusMutation>;
export type DeleteABonusMutationResult = Apollo.MutationResult<DeleteABonusMutation>;
export type DeleteABonusMutationOptions = Apollo.BaseMutationOptions<DeleteABonusMutation, DeleteABonusMutationVariables>;
export const UpdateABonusDocument = gql`
    mutation updateABonus($data: BonusUpdateInput!, $where: BonusWhereUniqueInput!) {
  updateOneBonus(data: $data, where: $where) {
    ...BonusFragment
  }
}
    ${BonusFragmentFragmentDoc}`;
export type UpdateABonusMutationFn = Apollo.MutationFunction<UpdateABonusMutation, UpdateABonusMutationVariables>;
export type UpdateABonusComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateABonusMutation, UpdateABonusMutationVariables>, 'mutation'>;

    export const UpdateABonusComponent = (props: UpdateABonusComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateABonusMutation, UpdateABonusMutationVariables> mutation={UpdateABonusDocument} {...props} />
    );
    
export type UpdateABonusProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdateABonusMutation, UpdateABonusMutationVariables>
    } & TChildProps;
export function withUpdateABonus<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateABonusMutation,
  UpdateABonusMutationVariables,
  UpdateABonusProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateABonusMutation, UpdateABonusMutationVariables, UpdateABonusProps<TChildProps, TDataName>>(UpdateABonusDocument, {
      alias: 'updateABonus',
      ...operationOptions
    });
};

/**
 * __useUpdateABonusMutation__
 *
 * To run a mutation, you first call `useUpdateABonusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateABonusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateABonusMutation, { data, loading, error }] = useUpdateABonusMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateABonusMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateABonusMutation, UpdateABonusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateABonusMutation, UpdateABonusMutationVariables>(UpdateABonusDocument, options);
      }
export type UpdateABonusMutationHookResult = ReturnType<typeof useUpdateABonusMutation>;
export type UpdateABonusMutationResult = Apollo.MutationResult<UpdateABonusMutation>;
export type UpdateABonusMutationOptions = Apollo.BaseMutationOptions<UpdateABonusMutation, UpdateABonusMutationVariables>;
export const CreateBranchDocument = gql`
    mutation createBranch($data: BranchCreateInput!) {
  createOneBranch(data: $data) {
    ...BranchFragment
  }
}
    ${BranchFragmentFragmentDoc}`;
export type CreateBranchMutationFn = Apollo.MutationFunction<CreateBranchMutation, CreateBranchMutationVariables>;
export type CreateBranchComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateBranchMutation, CreateBranchMutationVariables>, 'mutation'>;

    export const CreateBranchComponent = (props: CreateBranchComponentProps) => (
      <ApolloReactComponents.Mutation<CreateBranchMutation, CreateBranchMutationVariables> mutation={CreateBranchDocument} {...props} />
    );
    
export type CreateBranchProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateBranchMutation, CreateBranchMutationVariables>
    } & TChildProps;
export function withCreateBranch<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateBranchMutation,
  CreateBranchMutationVariables,
  CreateBranchProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateBranchMutation, CreateBranchMutationVariables, CreateBranchProps<TChildProps, TDataName>>(CreateBranchDocument, {
      alias: 'createBranch',
      ...operationOptions
    });
};

/**
 * __useCreateBranchMutation__
 *
 * To run a mutation, you first call `useCreateBranchMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBranchMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBranchMutation, { data, loading, error }] = useCreateBranchMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateBranchMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateBranchMutation, CreateBranchMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateBranchMutation, CreateBranchMutationVariables>(CreateBranchDocument, options);
      }
export type CreateBranchMutationHookResult = ReturnType<typeof useCreateBranchMutation>;
export type CreateBranchMutationResult = Apollo.MutationResult<CreateBranchMutation>;
export type CreateBranchMutationOptions = Apollo.BaseMutationOptions<CreateBranchMutation, CreateBranchMutationVariables>;
export const CreateABranchDocument = gql`
    mutation createABranch($data: BranchCreateInput!) {
  createBranch(data: $data) {
    ...BranchFragment
  }
}
    ${BranchFragmentFragmentDoc}`;
export type CreateABranchMutationFn = Apollo.MutationFunction<CreateABranchMutation, CreateABranchMutationVariables>;
export type CreateABranchComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateABranchMutation, CreateABranchMutationVariables>, 'mutation'>;

    export const CreateABranchComponent = (props: CreateABranchComponentProps) => (
      <ApolloReactComponents.Mutation<CreateABranchMutation, CreateABranchMutationVariables> mutation={CreateABranchDocument} {...props} />
    );
    
export type CreateABranchProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateABranchMutation, CreateABranchMutationVariables>
    } & TChildProps;
export function withCreateABranch<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateABranchMutation,
  CreateABranchMutationVariables,
  CreateABranchProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateABranchMutation, CreateABranchMutationVariables, CreateABranchProps<TChildProps, TDataName>>(CreateABranchDocument, {
      alias: 'createABranch',
      ...operationOptions
    });
};

/**
 * __useCreateABranchMutation__
 *
 * To run a mutation, you first call `useCreateABranchMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateABranchMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createABranchMutation, { data, loading, error }] = useCreateABranchMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateABranchMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateABranchMutation, CreateABranchMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateABranchMutation, CreateABranchMutationVariables>(CreateABranchDocument, options);
      }
export type CreateABranchMutationHookResult = ReturnType<typeof useCreateABranchMutation>;
export type CreateABranchMutationResult = Apollo.MutationResult<CreateABranchMutation>;
export type CreateABranchMutationOptions = Apollo.BaseMutationOptions<CreateABranchMutation, CreateABranchMutationVariables>;
export const DeleteABranchDocument = gql`
    mutation deleteABranch($where: BranchWhereUniqueInput!) {
  deleteOneBranch(where: $where) {
    id
  }
}
    `;
export type DeleteABranchMutationFn = Apollo.MutationFunction<DeleteABranchMutation, DeleteABranchMutationVariables>;
export type DeleteABranchComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteABranchMutation, DeleteABranchMutationVariables>, 'mutation'>;

    export const DeleteABranchComponent = (props: DeleteABranchComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteABranchMutation, DeleteABranchMutationVariables> mutation={DeleteABranchDocument} {...props} />
    );
    
export type DeleteABranchProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteABranchMutation, DeleteABranchMutationVariables>
    } & TChildProps;
export function withDeleteABranch<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteABranchMutation,
  DeleteABranchMutationVariables,
  DeleteABranchProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteABranchMutation, DeleteABranchMutationVariables, DeleteABranchProps<TChildProps, TDataName>>(DeleteABranchDocument, {
      alias: 'deleteABranch',
      ...operationOptions
    });
};

/**
 * __useDeleteABranchMutation__
 *
 * To run a mutation, you first call `useDeleteABranchMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteABranchMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteABranchMutation, { data, loading, error }] = useDeleteABranchMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteABranchMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteABranchMutation, DeleteABranchMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteABranchMutation, DeleteABranchMutationVariables>(DeleteABranchDocument, options);
      }
export type DeleteABranchMutationHookResult = ReturnType<typeof useDeleteABranchMutation>;
export type DeleteABranchMutationResult = Apollo.MutationResult<DeleteABranchMutation>;
export type DeleteABranchMutationOptions = Apollo.BaseMutationOptions<DeleteABranchMutation, DeleteABranchMutationVariables>;
export const UpdateABranchDocument = gql`
    mutation updateABranch($data: BranchUpdateInput!, $where: BranchWhereUniqueInput!) {
  updateOneBranch(data: $data, where: $where) {
    ...BranchFragment
  }
}
    ${BranchFragmentFragmentDoc}`;
export type UpdateABranchMutationFn = Apollo.MutationFunction<UpdateABranchMutation, UpdateABranchMutationVariables>;
export type UpdateABranchComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateABranchMutation, UpdateABranchMutationVariables>, 'mutation'>;

    export const UpdateABranchComponent = (props: UpdateABranchComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateABranchMutation, UpdateABranchMutationVariables> mutation={UpdateABranchDocument} {...props} />
    );
    
export type UpdateABranchProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdateABranchMutation, UpdateABranchMutationVariables>
    } & TChildProps;
export function withUpdateABranch<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateABranchMutation,
  UpdateABranchMutationVariables,
  UpdateABranchProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateABranchMutation, UpdateABranchMutationVariables, UpdateABranchProps<TChildProps, TDataName>>(UpdateABranchDocument, {
      alias: 'updateABranch',
      ...operationOptions
    });
};

/**
 * __useUpdateABranchMutation__
 *
 * To run a mutation, you first call `useUpdateABranchMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateABranchMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateABranchMutation, { data, loading, error }] = useUpdateABranchMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateABranchMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateABranchMutation, UpdateABranchMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateABranchMutation, UpdateABranchMutationVariables>(UpdateABranchDocument, options);
      }
export type UpdateABranchMutationHookResult = ReturnType<typeof useUpdateABranchMutation>;
export type UpdateABranchMutationResult = Apollo.MutationResult<UpdateABranchMutation>;
export type UpdateABranchMutationOptions = Apollo.BaseMutationOptions<UpdateABranchMutation, UpdateABranchMutationVariables>;
export const CreateBranchEmployeeDocument = gql`
    mutation createBranchEmployee($data: BranchEmployeeCreateInput!) {
  createOneBranchEmployee(data: $data) {
    ...BranchEmployeeFragment
  }
}
    ${BranchEmployeeFragmentFragmentDoc}`;
export type CreateBranchEmployeeMutationFn = Apollo.MutationFunction<CreateBranchEmployeeMutation, CreateBranchEmployeeMutationVariables>;
export type CreateBranchEmployeeComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateBranchEmployeeMutation, CreateBranchEmployeeMutationVariables>, 'mutation'>;

    export const CreateBranchEmployeeComponent = (props: CreateBranchEmployeeComponentProps) => (
      <ApolloReactComponents.Mutation<CreateBranchEmployeeMutation, CreateBranchEmployeeMutationVariables> mutation={CreateBranchEmployeeDocument} {...props} />
    );
    
export type CreateBranchEmployeeProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateBranchEmployeeMutation, CreateBranchEmployeeMutationVariables>
    } & TChildProps;
export function withCreateBranchEmployee<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateBranchEmployeeMutation,
  CreateBranchEmployeeMutationVariables,
  CreateBranchEmployeeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateBranchEmployeeMutation, CreateBranchEmployeeMutationVariables, CreateBranchEmployeeProps<TChildProps, TDataName>>(CreateBranchEmployeeDocument, {
      alias: 'createBranchEmployee',
      ...operationOptions
    });
};

/**
 * __useCreateBranchEmployeeMutation__
 *
 * To run a mutation, you first call `useCreateBranchEmployeeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBranchEmployeeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBranchEmployeeMutation, { data, loading, error }] = useCreateBranchEmployeeMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateBranchEmployeeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateBranchEmployeeMutation, CreateBranchEmployeeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateBranchEmployeeMutation, CreateBranchEmployeeMutationVariables>(CreateBranchEmployeeDocument, options);
      }
export type CreateBranchEmployeeMutationHookResult = ReturnType<typeof useCreateBranchEmployeeMutation>;
export type CreateBranchEmployeeMutationResult = Apollo.MutationResult<CreateBranchEmployeeMutation>;
export type CreateBranchEmployeeMutationOptions = Apollo.BaseMutationOptions<CreateBranchEmployeeMutation, CreateBranchEmployeeMutationVariables>;
export const CreateABranchEmployeeDocument = gql`
    mutation createABranchEmployee($data: BranchEmployeeCreateInput!) {
  createBranchEmployee(data: $data) {
    ...BranchEmployeeFragment
  }
}
    ${BranchEmployeeFragmentFragmentDoc}`;
export type CreateABranchEmployeeMutationFn = Apollo.MutationFunction<CreateABranchEmployeeMutation, CreateABranchEmployeeMutationVariables>;
export type CreateABranchEmployeeComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateABranchEmployeeMutation, CreateABranchEmployeeMutationVariables>, 'mutation'>;

    export const CreateABranchEmployeeComponent = (props: CreateABranchEmployeeComponentProps) => (
      <ApolloReactComponents.Mutation<CreateABranchEmployeeMutation, CreateABranchEmployeeMutationVariables> mutation={CreateABranchEmployeeDocument} {...props} />
    );
    
export type CreateABranchEmployeeProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateABranchEmployeeMutation, CreateABranchEmployeeMutationVariables>
    } & TChildProps;
export function withCreateABranchEmployee<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateABranchEmployeeMutation,
  CreateABranchEmployeeMutationVariables,
  CreateABranchEmployeeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateABranchEmployeeMutation, CreateABranchEmployeeMutationVariables, CreateABranchEmployeeProps<TChildProps, TDataName>>(CreateABranchEmployeeDocument, {
      alias: 'createABranchEmployee',
      ...operationOptions
    });
};

/**
 * __useCreateABranchEmployeeMutation__
 *
 * To run a mutation, you first call `useCreateABranchEmployeeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateABranchEmployeeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createABranchEmployeeMutation, { data, loading, error }] = useCreateABranchEmployeeMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateABranchEmployeeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateABranchEmployeeMutation, CreateABranchEmployeeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateABranchEmployeeMutation, CreateABranchEmployeeMutationVariables>(CreateABranchEmployeeDocument, options);
      }
export type CreateABranchEmployeeMutationHookResult = ReturnType<typeof useCreateABranchEmployeeMutation>;
export type CreateABranchEmployeeMutationResult = Apollo.MutationResult<CreateABranchEmployeeMutation>;
export type CreateABranchEmployeeMutationOptions = Apollo.BaseMutationOptions<CreateABranchEmployeeMutation, CreateABranchEmployeeMutationVariables>;
export const DeleteABranchEmployeeDocument = gql`
    mutation deleteABranchEmployee($where: BranchEmployeeWhereUniqueInput!) {
  deleteOneBranchEmployee(where: $where) {
    id
  }
}
    `;
export type DeleteABranchEmployeeMutationFn = Apollo.MutationFunction<DeleteABranchEmployeeMutation, DeleteABranchEmployeeMutationVariables>;
export type DeleteABranchEmployeeComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteABranchEmployeeMutation, DeleteABranchEmployeeMutationVariables>, 'mutation'>;

    export const DeleteABranchEmployeeComponent = (props: DeleteABranchEmployeeComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteABranchEmployeeMutation, DeleteABranchEmployeeMutationVariables> mutation={DeleteABranchEmployeeDocument} {...props} />
    );
    
export type DeleteABranchEmployeeProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteABranchEmployeeMutation, DeleteABranchEmployeeMutationVariables>
    } & TChildProps;
export function withDeleteABranchEmployee<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteABranchEmployeeMutation,
  DeleteABranchEmployeeMutationVariables,
  DeleteABranchEmployeeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteABranchEmployeeMutation, DeleteABranchEmployeeMutationVariables, DeleteABranchEmployeeProps<TChildProps, TDataName>>(DeleteABranchEmployeeDocument, {
      alias: 'deleteABranchEmployee',
      ...operationOptions
    });
};

/**
 * __useDeleteABranchEmployeeMutation__
 *
 * To run a mutation, you first call `useDeleteABranchEmployeeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteABranchEmployeeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteABranchEmployeeMutation, { data, loading, error }] = useDeleteABranchEmployeeMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteABranchEmployeeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteABranchEmployeeMutation, DeleteABranchEmployeeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteABranchEmployeeMutation, DeleteABranchEmployeeMutationVariables>(DeleteABranchEmployeeDocument, options);
      }
export type DeleteABranchEmployeeMutationHookResult = ReturnType<typeof useDeleteABranchEmployeeMutation>;
export type DeleteABranchEmployeeMutationResult = Apollo.MutationResult<DeleteABranchEmployeeMutation>;
export type DeleteABranchEmployeeMutationOptions = Apollo.BaseMutationOptions<DeleteABranchEmployeeMutation, DeleteABranchEmployeeMutationVariables>;
export const UpdateABranchEmployeeDocument = gql`
    mutation updateABranchEmployee($data: BranchEmployeeUpdateInput!, $where: BranchEmployeeWhereUniqueInput!) {
  updateOneBranchEmployee(data: $data, where: $where) {
    ...BranchEmployeeFragment
  }
}
    ${BranchEmployeeFragmentFragmentDoc}`;
export type UpdateABranchEmployeeMutationFn = Apollo.MutationFunction<UpdateABranchEmployeeMutation, UpdateABranchEmployeeMutationVariables>;
export type UpdateABranchEmployeeComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateABranchEmployeeMutation, UpdateABranchEmployeeMutationVariables>, 'mutation'>;

    export const UpdateABranchEmployeeComponent = (props: UpdateABranchEmployeeComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateABranchEmployeeMutation, UpdateABranchEmployeeMutationVariables> mutation={UpdateABranchEmployeeDocument} {...props} />
    );
    
export type UpdateABranchEmployeeProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdateABranchEmployeeMutation, UpdateABranchEmployeeMutationVariables>
    } & TChildProps;
export function withUpdateABranchEmployee<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateABranchEmployeeMutation,
  UpdateABranchEmployeeMutationVariables,
  UpdateABranchEmployeeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateABranchEmployeeMutation, UpdateABranchEmployeeMutationVariables, UpdateABranchEmployeeProps<TChildProps, TDataName>>(UpdateABranchEmployeeDocument, {
      alias: 'updateABranchEmployee',
      ...operationOptions
    });
};

/**
 * __useUpdateABranchEmployeeMutation__
 *
 * To run a mutation, you first call `useUpdateABranchEmployeeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateABranchEmployeeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateABranchEmployeeMutation, { data, loading, error }] = useUpdateABranchEmployeeMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateABranchEmployeeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateABranchEmployeeMutation, UpdateABranchEmployeeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateABranchEmployeeMutation, UpdateABranchEmployeeMutationVariables>(UpdateABranchEmployeeDocument, options);
      }
export type UpdateABranchEmployeeMutationHookResult = ReturnType<typeof useUpdateABranchEmployeeMutation>;
export type UpdateABranchEmployeeMutationResult = Apollo.MutationResult<UpdateABranchEmployeeMutation>;
export type UpdateABranchEmployeeMutationOptions = Apollo.BaseMutationOptions<UpdateABranchEmployeeMutation, UpdateABranchEmployeeMutationVariables>;
export const CreateCartDocument = gql`
    mutation createCart($data: CartCreateInput!) {
  createOneCart(data: $data) {
    ...CartFragment
  }
}
    ${CartFragmentFragmentDoc}`;
export type CreateCartMutationFn = Apollo.MutationFunction<CreateCartMutation, CreateCartMutationVariables>;
export type CreateCartComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateCartMutation, CreateCartMutationVariables>, 'mutation'>;

    export const CreateCartComponent = (props: CreateCartComponentProps) => (
      <ApolloReactComponents.Mutation<CreateCartMutation, CreateCartMutationVariables> mutation={CreateCartDocument} {...props} />
    );
    
export type CreateCartProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateCartMutation, CreateCartMutationVariables>
    } & TChildProps;
export function withCreateCart<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateCartMutation,
  CreateCartMutationVariables,
  CreateCartProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateCartMutation, CreateCartMutationVariables, CreateCartProps<TChildProps, TDataName>>(CreateCartDocument, {
      alias: 'createCart',
      ...operationOptions
    });
};

/**
 * __useCreateCartMutation__
 *
 * To run a mutation, you first call `useCreateCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCartMutation, { data, loading, error }] = useCreateCartMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateCartMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateCartMutation, CreateCartMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateCartMutation, CreateCartMutationVariables>(CreateCartDocument, options);
      }
export type CreateCartMutationHookResult = ReturnType<typeof useCreateCartMutation>;
export type CreateCartMutationResult = Apollo.MutationResult<CreateCartMutation>;
export type CreateCartMutationOptions = Apollo.BaseMutationOptions<CreateCartMutation, CreateCartMutationVariables>;
export const CreateACartDocument = gql`
    mutation createACart($data: CartCreateInput!) {
  createCart(data: $data) {
    ...CartFragment
  }
}
    ${CartFragmentFragmentDoc}`;
export type CreateACartMutationFn = Apollo.MutationFunction<CreateACartMutation, CreateACartMutationVariables>;
export type CreateACartComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateACartMutation, CreateACartMutationVariables>, 'mutation'>;

    export const CreateACartComponent = (props: CreateACartComponentProps) => (
      <ApolloReactComponents.Mutation<CreateACartMutation, CreateACartMutationVariables> mutation={CreateACartDocument} {...props} />
    );
    
export type CreateACartProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateACartMutation, CreateACartMutationVariables>
    } & TChildProps;
export function withCreateACart<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateACartMutation,
  CreateACartMutationVariables,
  CreateACartProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateACartMutation, CreateACartMutationVariables, CreateACartProps<TChildProps, TDataName>>(CreateACartDocument, {
      alias: 'createACart',
      ...operationOptions
    });
};

/**
 * __useCreateACartMutation__
 *
 * To run a mutation, you first call `useCreateACartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateACartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createACartMutation, { data, loading, error }] = useCreateACartMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateACartMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateACartMutation, CreateACartMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateACartMutation, CreateACartMutationVariables>(CreateACartDocument, options);
      }
export type CreateACartMutationHookResult = ReturnType<typeof useCreateACartMutation>;
export type CreateACartMutationResult = Apollo.MutationResult<CreateACartMutation>;
export type CreateACartMutationOptions = Apollo.BaseMutationOptions<CreateACartMutation, CreateACartMutationVariables>;
export const DeleteACartDocument = gql`
    mutation deleteACart($where: CartWhereUniqueInput!) {
  deleteOneCart(where: $where) {
    id
  }
}
    `;
export type DeleteACartMutationFn = Apollo.MutationFunction<DeleteACartMutation, DeleteACartMutationVariables>;
export type DeleteACartComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteACartMutation, DeleteACartMutationVariables>, 'mutation'>;

    export const DeleteACartComponent = (props: DeleteACartComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteACartMutation, DeleteACartMutationVariables> mutation={DeleteACartDocument} {...props} />
    );
    
export type DeleteACartProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteACartMutation, DeleteACartMutationVariables>
    } & TChildProps;
export function withDeleteACart<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteACartMutation,
  DeleteACartMutationVariables,
  DeleteACartProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteACartMutation, DeleteACartMutationVariables, DeleteACartProps<TChildProps, TDataName>>(DeleteACartDocument, {
      alias: 'deleteACart',
      ...operationOptions
    });
};

/**
 * __useDeleteACartMutation__
 *
 * To run a mutation, you first call `useDeleteACartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteACartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteACartMutation, { data, loading, error }] = useDeleteACartMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteACartMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteACartMutation, DeleteACartMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteACartMutation, DeleteACartMutationVariables>(DeleteACartDocument, options);
      }
export type DeleteACartMutationHookResult = ReturnType<typeof useDeleteACartMutation>;
export type DeleteACartMutationResult = Apollo.MutationResult<DeleteACartMutation>;
export type DeleteACartMutationOptions = Apollo.BaseMutationOptions<DeleteACartMutation, DeleteACartMutationVariables>;
export const UpdateACartDocument = gql`
    mutation updateACart($data: CartUpdateInput!, $where: CartWhereUniqueInput!) {
  updateOneCart(data: $data, where: $where) {
    ...CartFragment
  }
}
    ${CartFragmentFragmentDoc}`;
export type UpdateACartMutationFn = Apollo.MutationFunction<UpdateACartMutation, UpdateACartMutationVariables>;
export type UpdateACartComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateACartMutation, UpdateACartMutationVariables>, 'mutation'>;

    export const UpdateACartComponent = (props: UpdateACartComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateACartMutation, UpdateACartMutationVariables> mutation={UpdateACartDocument} {...props} />
    );
    
export type UpdateACartProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdateACartMutation, UpdateACartMutationVariables>
    } & TChildProps;
export function withUpdateACart<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateACartMutation,
  UpdateACartMutationVariables,
  UpdateACartProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateACartMutation, UpdateACartMutationVariables, UpdateACartProps<TChildProps, TDataName>>(UpdateACartDocument, {
      alias: 'updateACart',
      ...operationOptions
    });
};

/**
 * __useUpdateACartMutation__
 *
 * To run a mutation, you first call `useUpdateACartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateACartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateACartMutation, { data, loading, error }] = useUpdateACartMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateACartMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateACartMutation, UpdateACartMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateACartMutation, UpdateACartMutationVariables>(UpdateACartDocument, options);
      }
export type UpdateACartMutationHookResult = ReturnType<typeof useUpdateACartMutation>;
export type UpdateACartMutationResult = Apollo.MutationResult<UpdateACartMutation>;
export type UpdateACartMutationOptions = Apollo.BaseMutationOptions<UpdateACartMutation, UpdateACartMutationVariables>;
export const CreateCategoryDocument = gql`
    mutation createCategory($data: CategoryCreateInput!) {
  createOneCategory(data: $data) {
    ...CategoryFragment
  }
}
    ${CategoryFragmentFragmentDoc}`;
export type CreateCategoryMutationFn = Apollo.MutationFunction<CreateCategoryMutation, CreateCategoryMutationVariables>;
export type CreateCategoryComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateCategoryMutation, CreateCategoryMutationVariables>, 'mutation'>;

    export const CreateCategoryComponent = (props: CreateCategoryComponentProps) => (
      <ApolloReactComponents.Mutation<CreateCategoryMutation, CreateCategoryMutationVariables> mutation={CreateCategoryDocument} {...props} />
    );
    
export type CreateCategoryProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateCategoryMutation, CreateCategoryMutationVariables>
    } & TChildProps;
export function withCreateCategory<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateCategoryMutation,
  CreateCategoryMutationVariables,
  CreateCategoryProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateCategoryMutation, CreateCategoryMutationVariables, CreateCategoryProps<TChildProps, TDataName>>(CreateCategoryDocument, {
      alias: 'createCategory',
      ...operationOptions
    });
};

/**
 * __useCreateCategoryMutation__
 *
 * To run a mutation, you first call `useCreateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCategoryMutation, { data, loading, error }] = useCreateCategoryMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateCategoryMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateCategoryMutation, CreateCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateCategoryMutation, CreateCategoryMutationVariables>(CreateCategoryDocument, options);
      }
export type CreateCategoryMutationHookResult = ReturnType<typeof useCreateCategoryMutation>;
export type CreateCategoryMutationResult = Apollo.MutationResult<CreateCategoryMutation>;
export type CreateCategoryMutationOptions = Apollo.BaseMutationOptions<CreateCategoryMutation, CreateCategoryMutationVariables>;
export const CreateACategoryDocument = gql`
    mutation createACategory($data: CategoryCreateInput!) {
  createCategory(data: $data) {
    ...CategoryFragment
  }
}
    ${CategoryFragmentFragmentDoc}`;
export type CreateACategoryMutationFn = Apollo.MutationFunction<CreateACategoryMutation, CreateACategoryMutationVariables>;
export type CreateACategoryComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateACategoryMutation, CreateACategoryMutationVariables>, 'mutation'>;

    export const CreateACategoryComponent = (props: CreateACategoryComponentProps) => (
      <ApolloReactComponents.Mutation<CreateACategoryMutation, CreateACategoryMutationVariables> mutation={CreateACategoryDocument} {...props} />
    );
    
export type CreateACategoryProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateACategoryMutation, CreateACategoryMutationVariables>
    } & TChildProps;
export function withCreateACategory<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateACategoryMutation,
  CreateACategoryMutationVariables,
  CreateACategoryProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateACategoryMutation, CreateACategoryMutationVariables, CreateACategoryProps<TChildProps, TDataName>>(CreateACategoryDocument, {
      alias: 'createACategory',
      ...operationOptions
    });
};

/**
 * __useCreateACategoryMutation__
 *
 * To run a mutation, you first call `useCreateACategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateACategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createACategoryMutation, { data, loading, error }] = useCreateACategoryMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateACategoryMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateACategoryMutation, CreateACategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateACategoryMutation, CreateACategoryMutationVariables>(CreateACategoryDocument, options);
      }
export type CreateACategoryMutationHookResult = ReturnType<typeof useCreateACategoryMutation>;
export type CreateACategoryMutationResult = Apollo.MutationResult<CreateACategoryMutation>;
export type CreateACategoryMutationOptions = Apollo.BaseMutationOptions<CreateACategoryMutation, CreateACategoryMutationVariables>;
export const DeleteACategoryDocument = gql`
    mutation deleteACategory($where: CategoryWhereUniqueInput!) {
  deleteOneCategory(where: $where) {
    id
  }
}
    `;
export type DeleteACategoryMutationFn = Apollo.MutationFunction<DeleteACategoryMutation, DeleteACategoryMutationVariables>;
export type DeleteACategoryComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteACategoryMutation, DeleteACategoryMutationVariables>, 'mutation'>;

    export const DeleteACategoryComponent = (props: DeleteACategoryComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteACategoryMutation, DeleteACategoryMutationVariables> mutation={DeleteACategoryDocument} {...props} />
    );
    
export type DeleteACategoryProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteACategoryMutation, DeleteACategoryMutationVariables>
    } & TChildProps;
export function withDeleteACategory<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteACategoryMutation,
  DeleteACategoryMutationVariables,
  DeleteACategoryProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteACategoryMutation, DeleteACategoryMutationVariables, DeleteACategoryProps<TChildProps, TDataName>>(DeleteACategoryDocument, {
      alias: 'deleteACategory',
      ...operationOptions
    });
};

/**
 * __useDeleteACategoryMutation__
 *
 * To run a mutation, you first call `useDeleteACategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteACategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteACategoryMutation, { data, loading, error }] = useDeleteACategoryMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteACategoryMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteACategoryMutation, DeleteACategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteACategoryMutation, DeleteACategoryMutationVariables>(DeleteACategoryDocument, options);
      }
export type DeleteACategoryMutationHookResult = ReturnType<typeof useDeleteACategoryMutation>;
export type DeleteACategoryMutationResult = Apollo.MutationResult<DeleteACategoryMutation>;
export type DeleteACategoryMutationOptions = Apollo.BaseMutationOptions<DeleteACategoryMutation, DeleteACategoryMutationVariables>;
export const UpdateACategoryDocument = gql`
    mutation updateACategory($data: CategoryUpdateInput!, $where: CategoryWhereUniqueInput!) {
  updateOneCategory(data: $data, where: $where) {
    ...CategoryFragment
  }
}
    ${CategoryFragmentFragmentDoc}`;
export type UpdateACategoryMutationFn = Apollo.MutationFunction<UpdateACategoryMutation, UpdateACategoryMutationVariables>;
export type UpdateACategoryComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateACategoryMutation, UpdateACategoryMutationVariables>, 'mutation'>;

    export const UpdateACategoryComponent = (props: UpdateACategoryComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateACategoryMutation, UpdateACategoryMutationVariables> mutation={UpdateACategoryDocument} {...props} />
    );
    
export type UpdateACategoryProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdateACategoryMutation, UpdateACategoryMutationVariables>
    } & TChildProps;
export function withUpdateACategory<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateACategoryMutation,
  UpdateACategoryMutationVariables,
  UpdateACategoryProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateACategoryMutation, UpdateACategoryMutationVariables, UpdateACategoryProps<TChildProps, TDataName>>(UpdateACategoryDocument, {
      alias: 'updateACategory',
      ...operationOptions
    });
};

/**
 * __useUpdateACategoryMutation__
 *
 * To run a mutation, you first call `useUpdateACategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateACategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateACategoryMutation, { data, loading, error }] = useUpdateACategoryMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateACategoryMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateACategoryMutation, UpdateACategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateACategoryMutation, UpdateACategoryMutationVariables>(UpdateACategoryDocument, options);
      }
export type UpdateACategoryMutationHookResult = ReturnType<typeof useUpdateACategoryMutation>;
export type UpdateACategoryMutationResult = Apollo.MutationResult<UpdateACategoryMutation>;
export type UpdateACategoryMutationOptions = Apollo.BaseMutationOptions<UpdateACategoryMutation, UpdateACategoryMutationVariables>;
export const CreateClientDocument = gql`
    mutation createClient($data: ClientCreateInput!) {
  createOneClient(data: $data) {
    ...ClientFragment
  }
}
    ${ClientFragmentFragmentDoc}`;
export type CreateClientMutationFn = Apollo.MutationFunction<CreateClientMutation, CreateClientMutationVariables>;
export type CreateClientComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateClientMutation, CreateClientMutationVariables>, 'mutation'>;

    export const CreateClientComponent = (props: CreateClientComponentProps) => (
      <ApolloReactComponents.Mutation<CreateClientMutation, CreateClientMutationVariables> mutation={CreateClientDocument} {...props} />
    );
    
export type CreateClientProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateClientMutation, CreateClientMutationVariables>
    } & TChildProps;
export function withCreateClient<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateClientMutation,
  CreateClientMutationVariables,
  CreateClientProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateClientMutation, CreateClientMutationVariables, CreateClientProps<TChildProps, TDataName>>(CreateClientDocument, {
      alias: 'createClient',
      ...operationOptions
    });
};

/**
 * __useCreateClientMutation__
 *
 * To run a mutation, you first call `useCreateClientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateClientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createClientMutation, { data, loading, error }] = useCreateClientMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateClientMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateClientMutation, CreateClientMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateClientMutation, CreateClientMutationVariables>(CreateClientDocument, options);
      }
export type CreateClientMutationHookResult = ReturnType<typeof useCreateClientMutation>;
export type CreateClientMutationResult = Apollo.MutationResult<CreateClientMutation>;
export type CreateClientMutationOptions = Apollo.BaseMutationOptions<CreateClientMutation, CreateClientMutationVariables>;
export const CreateAClientDocument = gql`
    mutation createAClient($data: ClientCreateInput!) {
  createClient(data: $data) {
    ...ClientFragment
  }
}
    ${ClientFragmentFragmentDoc}`;
export type CreateAClientMutationFn = Apollo.MutationFunction<CreateAClientMutation, CreateAClientMutationVariables>;
export type CreateAClientComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateAClientMutation, CreateAClientMutationVariables>, 'mutation'>;

    export const CreateAClientComponent = (props: CreateAClientComponentProps) => (
      <ApolloReactComponents.Mutation<CreateAClientMutation, CreateAClientMutationVariables> mutation={CreateAClientDocument} {...props} />
    );
    
export type CreateAClientProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateAClientMutation, CreateAClientMutationVariables>
    } & TChildProps;
export function withCreateAClient<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateAClientMutation,
  CreateAClientMutationVariables,
  CreateAClientProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateAClientMutation, CreateAClientMutationVariables, CreateAClientProps<TChildProps, TDataName>>(CreateAClientDocument, {
      alias: 'createAClient',
      ...operationOptions
    });
};

/**
 * __useCreateAClientMutation__
 *
 * To run a mutation, you first call `useCreateAClientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAClientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAClientMutation, { data, loading, error }] = useCreateAClientMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateAClientMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateAClientMutation, CreateAClientMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateAClientMutation, CreateAClientMutationVariables>(CreateAClientDocument, options);
      }
export type CreateAClientMutationHookResult = ReturnType<typeof useCreateAClientMutation>;
export type CreateAClientMutationResult = Apollo.MutationResult<CreateAClientMutation>;
export type CreateAClientMutationOptions = Apollo.BaseMutationOptions<CreateAClientMutation, CreateAClientMutationVariables>;
export const DeleteAClientDocument = gql`
    mutation deleteAClient($where: ClientWhereUniqueInput!) {
  deleteOneClient(where: $where) {
    id
  }
}
    `;
export type DeleteAClientMutationFn = Apollo.MutationFunction<DeleteAClientMutation, DeleteAClientMutationVariables>;
export type DeleteAClientComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteAClientMutation, DeleteAClientMutationVariables>, 'mutation'>;

    export const DeleteAClientComponent = (props: DeleteAClientComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteAClientMutation, DeleteAClientMutationVariables> mutation={DeleteAClientDocument} {...props} />
    );
    
export type DeleteAClientProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteAClientMutation, DeleteAClientMutationVariables>
    } & TChildProps;
export function withDeleteAClient<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteAClientMutation,
  DeleteAClientMutationVariables,
  DeleteAClientProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteAClientMutation, DeleteAClientMutationVariables, DeleteAClientProps<TChildProps, TDataName>>(DeleteAClientDocument, {
      alias: 'deleteAClient',
      ...operationOptions
    });
};

/**
 * __useDeleteAClientMutation__
 *
 * To run a mutation, you first call `useDeleteAClientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAClientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAClientMutation, { data, loading, error }] = useDeleteAClientMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteAClientMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteAClientMutation, DeleteAClientMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteAClientMutation, DeleteAClientMutationVariables>(DeleteAClientDocument, options);
      }
export type DeleteAClientMutationHookResult = ReturnType<typeof useDeleteAClientMutation>;
export type DeleteAClientMutationResult = Apollo.MutationResult<DeleteAClientMutation>;
export type DeleteAClientMutationOptions = Apollo.BaseMutationOptions<DeleteAClientMutation, DeleteAClientMutationVariables>;
export const UpdateAClientDocument = gql`
    mutation updateAClient($data: ClientUpdateInput!, $where: ClientWhereUniqueInput!) {
  updateOneClient(data: $data, where: $where) {
    ...ClientFragment
  }
}
    ${ClientFragmentFragmentDoc}`;
export type UpdateAClientMutationFn = Apollo.MutationFunction<UpdateAClientMutation, UpdateAClientMutationVariables>;
export type UpdateAClientComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateAClientMutation, UpdateAClientMutationVariables>, 'mutation'>;

    export const UpdateAClientComponent = (props: UpdateAClientComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateAClientMutation, UpdateAClientMutationVariables> mutation={UpdateAClientDocument} {...props} />
    );
    
export type UpdateAClientProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdateAClientMutation, UpdateAClientMutationVariables>
    } & TChildProps;
export function withUpdateAClient<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateAClientMutation,
  UpdateAClientMutationVariables,
  UpdateAClientProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateAClientMutation, UpdateAClientMutationVariables, UpdateAClientProps<TChildProps, TDataName>>(UpdateAClientDocument, {
      alias: 'updateAClient',
      ...operationOptions
    });
};

/**
 * __useUpdateAClientMutation__
 *
 * To run a mutation, you first call `useUpdateAClientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAClientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAClientMutation, { data, loading, error }] = useUpdateAClientMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateAClientMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateAClientMutation, UpdateAClientMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateAClientMutation, UpdateAClientMutationVariables>(UpdateAClientDocument, options);
      }
export type UpdateAClientMutationHookResult = ReturnType<typeof useUpdateAClientMutation>;
export type UpdateAClientMutationResult = Apollo.MutationResult<UpdateAClientMutation>;
export type UpdateAClientMutationOptions = Apollo.BaseMutationOptions<UpdateAClientMutation, UpdateAClientMutationVariables>;
export const CreateEmployeeDocument = gql`
    mutation createEmployee($data: EmployeeCreateInput!) {
  createOneEmployee(data: $data) {
    ...EmployeeFragment
  }
}
    ${EmployeeFragmentFragmentDoc}`;
export type CreateEmployeeMutationFn = Apollo.MutationFunction<CreateEmployeeMutation, CreateEmployeeMutationVariables>;
export type CreateEmployeeComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateEmployeeMutation, CreateEmployeeMutationVariables>, 'mutation'>;

    export const CreateEmployeeComponent = (props: CreateEmployeeComponentProps) => (
      <ApolloReactComponents.Mutation<CreateEmployeeMutation, CreateEmployeeMutationVariables> mutation={CreateEmployeeDocument} {...props} />
    );
    
export type CreateEmployeeProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateEmployeeMutation, CreateEmployeeMutationVariables>
    } & TChildProps;
export function withCreateEmployee<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateEmployeeMutation,
  CreateEmployeeMutationVariables,
  CreateEmployeeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateEmployeeMutation, CreateEmployeeMutationVariables, CreateEmployeeProps<TChildProps, TDataName>>(CreateEmployeeDocument, {
      alias: 'createEmployee',
      ...operationOptions
    });
};

/**
 * __useCreateEmployeeMutation__
 *
 * To run a mutation, you first call `useCreateEmployeeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEmployeeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEmployeeMutation, { data, loading, error }] = useCreateEmployeeMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateEmployeeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateEmployeeMutation, CreateEmployeeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateEmployeeMutation, CreateEmployeeMutationVariables>(CreateEmployeeDocument, options);
      }
export type CreateEmployeeMutationHookResult = ReturnType<typeof useCreateEmployeeMutation>;
export type CreateEmployeeMutationResult = Apollo.MutationResult<CreateEmployeeMutation>;
export type CreateEmployeeMutationOptions = Apollo.BaseMutationOptions<CreateEmployeeMutation, CreateEmployeeMutationVariables>;
export const CreateAnEmployeeDocument = gql`
    mutation createAnEmployee($data: EmployeeCreateInput!) {
  createEmployee(data: $data) {
    ...EmployeeFragment
  }
}
    ${EmployeeFragmentFragmentDoc}`;
export type CreateAnEmployeeMutationFn = Apollo.MutationFunction<CreateAnEmployeeMutation, CreateAnEmployeeMutationVariables>;
export type CreateAnEmployeeComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateAnEmployeeMutation, CreateAnEmployeeMutationVariables>, 'mutation'>;

    export const CreateAnEmployeeComponent = (props: CreateAnEmployeeComponentProps) => (
      <ApolloReactComponents.Mutation<CreateAnEmployeeMutation, CreateAnEmployeeMutationVariables> mutation={CreateAnEmployeeDocument} {...props} />
    );
    
export type CreateAnEmployeeProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateAnEmployeeMutation, CreateAnEmployeeMutationVariables>
    } & TChildProps;
export function withCreateAnEmployee<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateAnEmployeeMutation,
  CreateAnEmployeeMutationVariables,
  CreateAnEmployeeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateAnEmployeeMutation, CreateAnEmployeeMutationVariables, CreateAnEmployeeProps<TChildProps, TDataName>>(CreateAnEmployeeDocument, {
      alias: 'createAnEmployee',
      ...operationOptions
    });
};

/**
 * __useCreateAnEmployeeMutation__
 *
 * To run a mutation, you first call `useCreateAnEmployeeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAnEmployeeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAnEmployeeMutation, { data, loading, error }] = useCreateAnEmployeeMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateAnEmployeeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateAnEmployeeMutation, CreateAnEmployeeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateAnEmployeeMutation, CreateAnEmployeeMutationVariables>(CreateAnEmployeeDocument, options);
      }
export type CreateAnEmployeeMutationHookResult = ReturnType<typeof useCreateAnEmployeeMutation>;
export type CreateAnEmployeeMutationResult = Apollo.MutationResult<CreateAnEmployeeMutation>;
export type CreateAnEmployeeMutationOptions = Apollo.BaseMutationOptions<CreateAnEmployeeMutation, CreateAnEmployeeMutationVariables>;
export const DeleteAEmployeeDocument = gql`
    mutation deleteAEmployee($where: EmployeeWhereUniqueInput!) {
  deleteOneEmployee(where: $where) {
    id
  }
}
    `;
export type DeleteAEmployeeMutationFn = Apollo.MutationFunction<DeleteAEmployeeMutation, DeleteAEmployeeMutationVariables>;
export type DeleteAEmployeeComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteAEmployeeMutation, DeleteAEmployeeMutationVariables>, 'mutation'>;

    export const DeleteAEmployeeComponent = (props: DeleteAEmployeeComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteAEmployeeMutation, DeleteAEmployeeMutationVariables> mutation={DeleteAEmployeeDocument} {...props} />
    );
    
export type DeleteAEmployeeProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteAEmployeeMutation, DeleteAEmployeeMutationVariables>
    } & TChildProps;
export function withDeleteAEmployee<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteAEmployeeMutation,
  DeleteAEmployeeMutationVariables,
  DeleteAEmployeeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteAEmployeeMutation, DeleteAEmployeeMutationVariables, DeleteAEmployeeProps<TChildProps, TDataName>>(DeleteAEmployeeDocument, {
      alias: 'deleteAEmployee',
      ...operationOptions
    });
};

/**
 * __useDeleteAEmployeeMutation__
 *
 * To run a mutation, you first call `useDeleteAEmployeeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAEmployeeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAEmployeeMutation, { data, loading, error }] = useDeleteAEmployeeMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteAEmployeeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteAEmployeeMutation, DeleteAEmployeeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteAEmployeeMutation, DeleteAEmployeeMutationVariables>(DeleteAEmployeeDocument, options);
      }
export type DeleteAEmployeeMutationHookResult = ReturnType<typeof useDeleteAEmployeeMutation>;
export type DeleteAEmployeeMutationResult = Apollo.MutationResult<DeleteAEmployeeMutation>;
export type DeleteAEmployeeMutationOptions = Apollo.BaseMutationOptions<DeleteAEmployeeMutation, DeleteAEmployeeMutationVariables>;
export const UpdateAEmployeeDocument = gql`
    mutation updateAEmployee($data: EmployeeUpdateInput!, $where: EmployeeWhereUniqueInput!) {
  updateOneEmployee(data: $data, where: $where) {
    ...EmployeeFragment
  }
}
    ${EmployeeFragmentFragmentDoc}`;
export type UpdateAEmployeeMutationFn = Apollo.MutationFunction<UpdateAEmployeeMutation, UpdateAEmployeeMutationVariables>;
export type UpdateAEmployeeComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateAEmployeeMutation, UpdateAEmployeeMutationVariables>, 'mutation'>;

    export const UpdateAEmployeeComponent = (props: UpdateAEmployeeComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateAEmployeeMutation, UpdateAEmployeeMutationVariables> mutation={UpdateAEmployeeDocument} {...props} />
    );
    
export type UpdateAEmployeeProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdateAEmployeeMutation, UpdateAEmployeeMutationVariables>
    } & TChildProps;
export function withUpdateAEmployee<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateAEmployeeMutation,
  UpdateAEmployeeMutationVariables,
  UpdateAEmployeeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateAEmployeeMutation, UpdateAEmployeeMutationVariables, UpdateAEmployeeProps<TChildProps, TDataName>>(UpdateAEmployeeDocument, {
      alias: 'updateAEmployee',
      ...operationOptions
    });
};

/**
 * __useUpdateAEmployeeMutation__
 *
 * To run a mutation, you first call `useUpdateAEmployeeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAEmployeeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAEmployeeMutation, { data, loading, error }] = useUpdateAEmployeeMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateAEmployeeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateAEmployeeMutation, UpdateAEmployeeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateAEmployeeMutation, UpdateAEmployeeMutationVariables>(UpdateAEmployeeDocument, options);
      }
export type UpdateAEmployeeMutationHookResult = ReturnType<typeof useUpdateAEmployeeMutation>;
export type UpdateAEmployeeMutationResult = Apollo.MutationResult<UpdateAEmployeeMutation>;
export type UpdateAEmployeeMutationOptions = Apollo.BaseMutationOptions<UpdateAEmployeeMutation, UpdateAEmployeeMutationVariables>;
export const CreateEmployeeStatusDocument = gql`
    mutation createEmployeeStatus($data: EmployeeStatusCreateInput!) {
  createOneEmployeeStatus(data: $data) {
    ...EmployeeStatusFragment
  }
}
    ${EmployeeStatusFragmentFragmentDoc}`;
export type CreateEmployeeStatusMutationFn = Apollo.MutationFunction<CreateEmployeeStatusMutation, CreateEmployeeStatusMutationVariables>;
export type CreateEmployeeStatusComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateEmployeeStatusMutation, CreateEmployeeStatusMutationVariables>, 'mutation'>;

    export const CreateEmployeeStatusComponent = (props: CreateEmployeeStatusComponentProps) => (
      <ApolloReactComponents.Mutation<CreateEmployeeStatusMutation, CreateEmployeeStatusMutationVariables> mutation={CreateEmployeeStatusDocument} {...props} />
    );
    
export type CreateEmployeeStatusProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateEmployeeStatusMutation, CreateEmployeeStatusMutationVariables>
    } & TChildProps;
export function withCreateEmployeeStatus<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateEmployeeStatusMutation,
  CreateEmployeeStatusMutationVariables,
  CreateEmployeeStatusProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateEmployeeStatusMutation, CreateEmployeeStatusMutationVariables, CreateEmployeeStatusProps<TChildProps, TDataName>>(CreateEmployeeStatusDocument, {
      alias: 'createEmployeeStatus',
      ...operationOptions
    });
};

/**
 * __useCreateEmployeeStatusMutation__
 *
 * To run a mutation, you first call `useCreateEmployeeStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEmployeeStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEmployeeStatusMutation, { data, loading, error }] = useCreateEmployeeStatusMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateEmployeeStatusMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateEmployeeStatusMutation, CreateEmployeeStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateEmployeeStatusMutation, CreateEmployeeStatusMutationVariables>(CreateEmployeeStatusDocument, options);
      }
export type CreateEmployeeStatusMutationHookResult = ReturnType<typeof useCreateEmployeeStatusMutation>;
export type CreateEmployeeStatusMutationResult = Apollo.MutationResult<CreateEmployeeStatusMutation>;
export type CreateEmployeeStatusMutationOptions = Apollo.BaseMutationOptions<CreateEmployeeStatusMutation, CreateEmployeeStatusMutationVariables>;
export const CreateAnEmployeeStatusDocument = gql`
    mutation createAnEmployeeStatus($data: EmployeeStatusCreateInput!) {
  createEmployeeStatus(data: $data) {
    ...EmployeeStatusFragment
  }
}
    ${EmployeeStatusFragmentFragmentDoc}`;
export type CreateAnEmployeeStatusMutationFn = Apollo.MutationFunction<CreateAnEmployeeStatusMutation, CreateAnEmployeeStatusMutationVariables>;
export type CreateAnEmployeeStatusComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateAnEmployeeStatusMutation, CreateAnEmployeeStatusMutationVariables>, 'mutation'>;

    export const CreateAnEmployeeStatusComponent = (props: CreateAnEmployeeStatusComponentProps) => (
      <ApolloReactComponents.Mutation<CreateAnEmployeeStatusMutation, CreateAnEmployeeStatusMutationVariables> mutation={CreateAnEmployeeStatusDocument} {...props} />
    );
    
export type CreateAnEmployeeStatusProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateAnEmployeeStatusMutation, CreateAnEmployeeStatusMutationVariables>
    } & TChildProps;
export function withCreateAnEmployeeStatus<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateAnEmployeeStatusMutation,
  CreateAnEmployeeStatusMutationVariables,
  CreateAnEmployeeStatusProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateAnEmployeeStatusMutation, CreateAnEmployeeStatusMutationVariables, CreateAnEmployeeStatusProps<TChildProps, TDataName>>(CreateAnEmployeeStatusDocument, {
      alias: 'createAnEmployeeStatus',
      ...operationOptions
    });
};

/**
 * __useCreateAnEmployeeStatusMutation__
 *
 * To run a mutation, you first call `useCreateAnEmployeeStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAnEmployeeStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAnEmployeeStatusMutation, { data, loading, error }] = useCreateAnEmployeeStatusMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateAnEmployeeStatusMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateAnEmployeeStatusMutation, CreateAnEmployeeStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateAnEmployeeStatusMutation, CreateAnEmployeeStatusMutationVariables>(CreateAnEmployeeStatusDocument, options);
      }
export type CreateAnEmployeeStatusMutationHookResult = ReturnType<typeof useCreateAnEmployeeStatusMutation>;
export type CreateAnEmployeeStatusMutationResult = Apollo.MutationResult<CreateAnEmployeeStatusMutation>;
export type CreateAnEmployeeStatusMutationOptions = Apollo.BaseMutationOptions<CreateAnEmployeeStatusMutation, CreateAnEmployeeStatusMutationVariables>;
export const DeleteAnEmployeeStatusDocument = gql`
    mutation deleteAnEmployeeStatus($where: EmployeeStatusWhereUniqueInput!) {
  deleteOneEmployeeStatus(where: $where) {
    id
  }
}
    `;
export type DeleteAnEmployeeStatusMutationFn = Apollo.MutationFunction<DeleteAnEmployeeStatusMutation, DeleteAnEmployeeStatusMutationVariables>;
export type DeleteAnEmployeeStatusComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteAnEmployeeStatusMutation, DeleteAnEmployeeStatusMutationVariables>, 'mutation'>;

    export const DeleteAnEmployeeStatusComponent = (props: DeleteAnEmployeeStatusComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteAnEmployeeStatusMutation, DeleteAnEmployeeStatusMutationVariables> mutation={DeleteAnEmployeeStatusDocument} {...props} />
    );
    
export type DeleteAnEmployeeStatusProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteAnEmployeeStatusMutation, DeleteAnEmployeeStatusMutationVariables>
    } & TChildProps;
export function withDeleteAnEmployeeStatus<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteAnEmployeeStatusMutation,
  DeleteAnEmployeeStatusMutationVariables,
  DeleteAnEmployeeStatusProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteAnEmployeeStatusMutation, DeleteAnEmployeeStatusMutationVariables, DeleteAnEmployeeStatusProps<TChildProps, TDataName>>(DeleteAnEmployeeStatusDocument, {
      alias: 'deleteAnEmployeeStatus',
      ...operationOptions
    });
};

/**
 * __useDeleteAnEmployeeStatusMutation__
 *
 * To run a mutation, you first call `useDeleteAnEmployeeStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAnEmployeeStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAnEmployeeStatusMutation, { data, loading, error }] = useDeleteAnEmployeeStatusMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteAnEmployeeStatusMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteAnEmployeeStatusMutation, DeleteAnEmployeeStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteAnEmployeeStatusMutation, DeleteAnEmployeeStatusMutationVariables>(DeleteAnEmployeeStatusDocument, options);
      }
export type DeleteAnEmployeeStatusMutationHookResult = ReturnType<typeof useDeleteAnEmployeeStatusMutation>;
export type DeleteAnEmployeeStatusMutationResult = Apollo.MutationResult<DeleteAnEmployeeStatusMutation>;
export type DeleteAnEmployeeStatusMutationOptions = Apollo.BaseMutationOptions<DeleteAnEmployeeStatusMutation, DeleteAnEmployeeStatusMutationVariables>;
export const UpdateAnEmployeeStatusDocument = gql`
    mutation updateAnEmployeeStatus($data: EmployeeStatusUpdateInput!, $where: EmployeeStatusWhereUniqueInput!) {
  updateOneEmployeeStatus(data: $data, where: $where) {
    ...EmployeeStatusFragment
  }
}
    ${EmployeeStatusFragmentFragmentDoc}`;
export type UpdateAnEmployeeStatusMutationFn = Apollo.MutationFunction<UpdateAnEmployeeStatusMutation, UpdateAnEmployeeStatusMutationVariables>;
export type UpdateAnEmployeeStatusComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateAnEmployeeStatusMutation, UpdateAnEmployeeStatusMutationVariables>, 'mutation'>;

    export const UpdateAnEmployeeStatusComponent = (props: UpdateAnEmployeeStatusComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateAnEmployeeStatusMutation, UpdateAnEmployeeStatusMutationVariables> mutation={UpdateAnEmployeeStatusDocument} {...props} />
    );
    
export type UpdateAnEmployeeStatusProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdateAnEmployeeStatusMutation, UpdateAnEmployeeStatusMutationVariables>
    } & TChildProps;
export function withUpdateAnEmployeeStatus<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateAnEmployeeStatusMutation,
  UpdateAnEmployeeStatusMutationVariables,
  UpdateAnEmployeeStatusProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateAnEmployeeStatusMutation, UpdateAnEmployeeStatusMutationVariables, UpdateAnEmployeeStatusProps<TChildProps, TDataName>>(UpdateAnEmployeeStatusDocument, {
      alias: 'updateAnEmployeeStatus',
      ...operationOptions
    });
};

/**
 * __useUpdateAnEmployeeStatusMutation__
 *
 * To run a mutation, you first call `useUpdateAnEmployeeStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAnEmployeeStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAnEmployeeStatusMutation, { data, loading, error }] = useUpdateAnEmployeeStatusMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateAnEmployeeStatusMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateAnEmployeeStatusMutation, UpdateAnEmployeeStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateAnEmployeeStatusMutation, UpdateAnEmployeeStatusMutationVariables>(UpdateAnEmployeeStatusDocument, options);
      }
export type UpdateAnEmployeeStatusMutationHookResult = ReturnType<typeof useUpdateAnEmployeeStatusMutation>;
export type UpdateAnEmployeeStatusMutationResult = Apollo.MutationResult<UpdateAnEmployeeStatusMutation>;
export type UpdateAnEmployeeStatusMutationOptions = Apollo.BaseMutationOptions<UpdateAnEmployeeStatusMutation, UpdateAnEmployeeStatusMutationVariables>;
export const CreateFinanceDocument = gql`
    mutation createFinance($data: FinanceCreateInput!) {
  createOneFinance(data: $data) {
    ...FinanceFragment
  }
}
    ${FinanceFragmentFragmentDoc}`;
export type CreateFinanceMutationFn = Apollo.MutationFunction<CreateFinanceMutation, CreateFinanceMutationVariables>;
export type CreateFinanceComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateFinanceMutation, CreateFinanceMutationVariables>, 'mutation'>;

    export const CreateFinanceComponent = (props: CreateFinanceComponentProps) => (
      <ApolloReactComponents.Mutation<CreateFinanceMutation, CreateFinanceMutationVariables> mutation={CreateFinanceDocument} {...props} />
    );
    
export type CreateFinanceProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateFinanceMutation, CreateFinanceMutationVariables>
    } & TChildProps;
export function withCreateFinance<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateFinanceMutation,
  CreateFinanceMutationVariables,
  CreateFinanceProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateFinanceMutation, CreateFinanceMutationVariables, CreateFinanceProps<TChildProps, TDataName>>(CreateFinanceDocument, {
      alias: 'createFinance',
      ...operationOptions
    });
};

/**
 * __useCreateFinanceMutation__
 *
 * To run a mutation, you first call `useCreateFinanceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFinanceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFinanceMutation, { data, loading, error }] = useCreateFinanceMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateFinanceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateFinanceMutation, CreateFinanceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateFinanceMutation, CreateFinanceMutationVariables>(CreateFinanceDocument, options);
      }
export type CreateFinanceMutationHookResult = ReturnType<typeof useCreateFinanceMutation>;
export type CreateFinanceMutationResult = Apollo.MutationResult<CreateFinanceMutation>;
export type CreateFinanceMutationOptions = Apollo.BaseMutationOptions<CreateFinanceMutation, CreateFinanceMutationVariables>;
export const CreateAFinanceDocument = gql`
    mutation createAFinance($data: FinanceCreateInput!) {
  createFinance(data: $data) {
    ...FinanceFragment
  }
}
    ${FinanceFragmentFragmentDoc}`;
export type CreateAFinanceMutationFn = Apollo.MutationFunction<CreateAFinanceMutation, CreateAFinanceMutationVariables>;
export type CreateAFinanceComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateAFinanceMutation, CreateAFinanceMutationVariables>, 'mutation'>;

    export const CreateAFinanceComponent = (props: CreateAFinanceComponentProps) => (
      <ApolloReactComponents.Mutation<CreateAFinanceMutation, CreateAFinanceMutationVariables> mutation={CreateAFinanceDocument} {...props} />
    );
    
export type CreateAFinanceProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateAFinanceMutation, CreateAFinanceMutationVariables>
    } & TChildProps;
export function withCreateAFinance<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateAFinanceMutation,
  CreateAFinanceMutationVariables,
  CreateAFinanceProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateAFinanceMutation, CreateAFinanceMutationVariables, CreateAFinanceProps<TChildProps, TDataName>>(CreateAFinanceDocument, {
      alias: 'createAFinance',
      ...operationOptions
    });
};

/**
 * __useCreateAFinanceMutation__
 *
 * To run a mutation, you first call `useCreateAFinanceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAFinanceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAFinanceMutation, { data, loading, error }] = useCreateAFinanceMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateAFinanceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateAFinanceMutation, CreateAFinanceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateAFinanceMutation, CreateAFinanceMutationVariables>(CreateAFinanceDocument, options);
      }
export type CreateAFinanceMutationHookResult = ReturnType<typeof useCreateAFinanceMutation>;
export type CreateAFinanceMutationResult = Apollo.MutationResult<CreateAFinanceMutation>;
export type CreateAFinanceMutationOptions = Apollo.BaseMutationOptions<CreateAFinanceMutation, CreateAFinanceMutationVariables>;
export const DeleteAFinanceDocument = gql`
    mutation deleteAFinance($where: FinanceWhereUniqueInput!) {
  deleteOneFinance(where: $where) {
    id
  }
}
    `;
export type DeleteAFinanceMutationFn = Apollo.MutationFunction<DeleteAFinanceMutation, DeleteAFinanceMutationVariables>;
export type DeleteAFinanceComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteAFinanceMutation, DeleteAFinanceMutationVariables>, 'mutation'>;

    export const DeleteAFinanceComponent = (props: DeleteAFinanceComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteAFinanceMutation, DeleteAFinanceMutationVariables> mutation={DeleteAFinanceDocument} {...props} />
    );
    
export type DeleteAFinanceProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteAFinanceMutation, DeleteAFinanceMutationVariables>
    } & TChildProps;
export function withDeleteAFinance<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteAFinanceMutation,
  DeleteAFinanceMutationVariables,
  DeleteAFinanceProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteAFinanceMutation, DeleteAFinanceMutationVariables, DeleteAFinanceProps<TChildProps, TDataName>>(DeleteAFinanceDocument, {
      alias: 'deleteAFinance',
      ...operationOptions
    });
};

/**
 * __useDeleteAFinanceMutation__
 *
 * To run a mutation, you first call `useDeleteAFinanceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAFinanceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAFinanceMutation, { data, loading, error }] = useDeleteAFinanceMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteAFinanceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteAFinanceMutation, DeleteAFinanceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteAFinanceMutation, DeleteAFinanceMutationVariables>(DeleteAFinanceDocument, options);
      }
export type DeleteAFinanceMutationHookResult = ReturnType<typeof useDeleteAFinanceMutation>;
export type DeleteAFinanceMutationResult = Apollo.MutationResult<DeleteAFinanceMutation>;
export type DeleteAFinanceMutationOptions = Apollo.BaseMutationOptions<DeleteAFinanceMutation, DeleteAFinanceMutationVariables>;
export const UpdateAFinanceDocument = gql`
    mutation updateAFinance($data: FinanceUpdateInput!, $where: FinanceWhereUniqueInput!) {
  updateOneFinance(data: $data, where: $where) {
    ...FinanceFragment
  }
}
    ${FinanceFragmentFragmentDoc}`;
export type UpdateAFinanceMutationFn = Apollo.MutationFunction<UpdateAFinanceMutation, UpdateAFinanceMutationVariables>;
export type UpdateAFinanceComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateAFinanceMutation, UpdateAFinanceMutationVariables>, 'mutation'>;

    export const UpdateAFinanceComponent = (props: UpdateAFinanceComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateAFinanceMutation, UpdateAFinanceMutationVariables> mutation={UpdateAFinanceDocument} {...props} />
    );
    
export type UpdateAFinanceProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdateAFinanceMutation, UpdateAFinanceMutationVariables>
    } & TChildProps;
export function withUpdateAFinance<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateAFinanceMutation,
  UpdateAFinanceMutationVariables,
  UpdateAFinanceProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateAFinanceMutation, UpdateAFinanceMutationVariables, UpdateAFinanceProps<TChildProps, TDataName>>(UpdateAFinanceDocument, {
      alias: 'updateAFinance',
      ...operationOptions
    });
};

/**
 * __useUpdateAFinanceMutation__
 *
 * To run a mutation, you first call `useUpdateAFinanceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAFinanceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAFinanceMutation, { data, loading, error }] = useUpdateAFinanceMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateAFinanceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateAFinanceMutation, UpdateAFinanceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateAFinanceMutation, UpdateAFinanceMutationVariables>(UpdateAFinanceDocument, options);
      }
export type UpdateAFinanceMutationHookResult = ReturnType<typeof useUpdateAFinanceMutation>;
export type UpdateAFinanceMutationResult = Apollo.MutationResult<UpdateAFinanceMutation>;
export type UpdateAFinanceMutationOptions = Apollo.BaseMutationOptions<UpdateAFinanceMutation, UpdateAFinanceMutationVariables>;
export const CreateFinancialYearDocument = gql`
    mutation createFinancialYear($data: FinancialYearCreateInput!) {
  createOneFinancialYear(data: $data) {
    ...FinancialYearFragment
  }
}
    ${FinancialYearFragmentFragmentDoc}`;
export type CreateFinancialYearMutationFn = Apollo.MutationFunction<CreateFinancialYearMutation, CreateFinancialYearMutationVariables>;
export type CreateFinancialYearComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateFinancialYearMutation, CreateFinancialYearMutationVariables>, 'mutation'>;

    export const CreateFinancialYearComponent = (props: CreateFinancialYearComponentProps) => (
      <ApolloReactComponents.Mutation<CreateFinancialYearMutation, CreateFinancialYearMutationVariables> mutation={CreateFinancialYearDocument} {...props} />
    );
    
export type CreateFinancialYearProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateFinancialYearMutation, CreateFinancialYearMutationVariables>
    } & TChildProps;
export function withCreateFinancialYear<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateFinancialYearMutation,
  CreateFinancialYearMutationVariables,
  CreateFinancialYearProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateFinancialYearMutation, CreateFinancialYearMutationVariables, CreateFinancialYearProps<TChildProps, TDataName>>(CreateFinancialYearDocument, {
      alias: 'createFinancialYear',
      ...operationOptions
    });
};

/**
 * __useCreateFinancialYearMutation__
 *
 * To run a mutation, you first call `useCreateFinancialYearMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFinancialYearMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFinancialYearMutation, { data, loading, error }] = useCreateFinancialYearMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateFinancialYearMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateFinancialYearMutation, CreateFinancialYearMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateFinancialYearMutation, CreateFinancialYearMutationVariables>(CreateFinancialYearDocument, options);
      }
export type CreateFinancialYearMutationHookResult = ReturnType<typeof useCreateFinancialYearMutation>;
export type CreateFinancialYearMutationResult = Apollo.MutationResult<CreateFinancialYearMutation>;
export type CreateFinancialYearMutationOptions = Apollo.BaseMutationOptions<CreateFinancialYearMutation, CreateFinancialYearMutationVariables>;
export const CreateAFinancialYearDocument = gql`
    mutation createAFinancialYear($data: FinancialYearCreateInput!) {
  createFinancialYear(data: $data) {
    ...FinancialYearFragment
  }
}
    ${FinancialYearFragmentFragmentDoc}`;
export type CreateAFinancialYearMutationFn = Apollo.MutationFunction<CreateAFinancialYearMutation, CreateAFinancialYearMutationVariables>;
export type CreateAFinancialYearComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateAFinancialYearMutation, CreateAFinancialYearMutationVariables>, 'mutation'>;

    export const CreateAFinancialYearComponent = (props: CreateAFinancialYearComponentProps) => (
      <ApolloReactComponents.Mutation<CreateAFinancialYearMutation, CreateAFinancialYearMutationVariables> mutation={CreateAFinancialYearDocument} {...props} />
    );
    
export type CreateAFinancialYearProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateAFinancialYearMutation, CreateAFinancialYearMutationVariables>
    } & TChildProps;
export function withCreateAFinancialYear<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateAFinancialYearMutation,
  CreateAFinancialYearMutationVariables,
  CreateAFinancialYearProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateAFinancialYearMutation, CreateAFinancialYearMutationVariables, CreateAFinancialYearProps<TChildProps, TDataName>>(CreateAFinancialYearDocument, {
      alias: 'createAFinancialYear',
      ...operationOptions
    });
};

/**
 * __useCreateAFinancialYearMutation__
 *
 * To run a mutation, you first call `useCreateAFinancialYearMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAFinancialYearMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAFinancialYearMutation, { data, loading, error }] = useCreateAFinancialYearMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateAFinancialYearMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateAFinancialYearMutation, CreateAFinancialYearMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateAFinancialYearMutation, CreateAFinancialYearMutationVariables>(CreateAFinancialYearDocument, options);
      }
export type CreateAFinancialYearMutationHookResult = ReturnType<typeof useCreateAFinancialYearMutation>;
export type CreateAFinancialYearMutationResult = Apollo.MutationResult<CreateAFinancialYearMutation>;
export type CreateAFinancialYearMutationOptions = Apollo.BaseMutationOptions<CreateAFinancialYearMutation, CreateAFinancialYearMutationVariables>;
export const DeleteAFinancialYearDocument = gql`
    mutation deleteAFinancialYear($where: FinancialYearWhereUniqueInput!) {
  deleteOneFinancialYear(where: $where) {
    id
  }
}
    `;
export type DeleteAFinancialYearMutationFn = Apollo.MutationFunction<DeleteAFinancialYearMutation, DeleteAFinancialYearMutationVariables>;
export type DeleteAFinancialYearComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteAFinancialYearMutation, DeleteAFinancialYearMutationVariables>, 'mutation'>;

    export const DeleteAFinancialYearComponent = (props: DeleteAFinancialYearComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteAFinancialYearMutation, DeleteAFinancialYearMutationVariables> mutation={DeleteAFinancialYearDocument} {...props} />
    );
    
export type DeleteAFinancialYearProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteAFinancialYearMutation, DeleteAFinancialYearMutationVariables>
    } & TChildProps;
export function withDeleteAFinancialYear<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteAFinancialYearMutation,
  DeleteAFinancialYearMutationVariables,
  DeleteAFinancialYearProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteAFinancialYearMutation, DeleteAFinancialYearMutationVariables, DeleteAFinancialYearProps<TChildProps, TDataName>>(DeleteAFinancialYearDocument, {
      alias: 'deleteAFinancialYear',
      ...operationOptions
    });
};

/**
 * __useDeleteAFinancialYearMutation__
 *
 * To run a mutation, you first call `useDeleteAFinancialYearMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAFinancialYearMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAFinancialYearMutation, { data, loading, error }] = useDeleteAFinancialYearMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteAFinancialYearMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteAFinancialYearMutation, DeleteAFinancialYearMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteAFinancialYearMutation, DeleteAFinancialYearMutationVariables>(DeleteAFinancialYearDocument, options);
      }
export type DeleteAFinancialYearMutationHookResult = ReturnType<typeof useDeleteAFinancialYearMutation>;
export type DeleteAFinancialYearMutationResult = Apollo.MutationResult<DeleteAFinancialYearMutation>;
export type DeleteAFinancialYearMutationOptions = Apollo.BaseMutationOptions<DeleteAFinancialYearMutation, DeleteAFinancialYearMutationVariables>;
export const UpdateAFinancialYearDocument = gql`
    mutation updateAFinancialYear($data: FinancialYearUpdateInput!, $where: FinancialYearWhereUniqueInput!) {
  updateOneFinancialYear(data: $data, where: $where) {
    ...FinancialYearFragment
  }
}
    ${FinancialYearFragmentFragmentDoc}`;
export type UpdateAFinancialYearMutationFn = Apollo.MutationFunction<UpdateAFinancialYearMutation, UpdateAFinancialYearMutationVariables>;
export type UpdateAFinancialYearComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateAFinancialYearMutation, UpdateAFinancialYearMutationVariables>, 'mutation'>;

    export const UpdateAFinancialYearComponent = (props: UpdateAFinancialYearComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateAFinancialYearMutation, UpdateAFinancialYearMutationVariables> mutation={UpdateAFinancialYearDocument} {...props} />
    );
    
export type UpdateAFinancialYearProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdateAFinancialYearMutation, UpdateAFinancialYearMutationVariables>
    } & TChildProps;
export function withUpdateAFinancialYear<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateAFinancialYearMutation,
  UpdateAFinancialYearMutationVariables,
  UpdateAFinancialYearProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateAFinancialYearMutation, UpdateAFinancialYearMutationVariables, UpdateAFinancialYearProps<TChildProps, TDataName>>(UpdateAFinancialYearDocument, {
      alias: 'updateAFinancialYear',
      ...operationOptions
    });
};

/**
 * __useUpdateAFinancialYearMutation__
 *
 * To run a mutation, you first call `useUpdateAFinancialYearMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAFinancialYearMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAFinancialYearMutation, { data, loading, error }] = useUpdateAFinancialYearMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateAFinancialYearMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateAFinancialYearMutation, UpdateAFinancialYearMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateAFinancialYearMutation, UpdateAFinancialYearMutationVariables>(UpdateAFinancialYearDocument, options);
      }
export type UpdateAFinancialYearMutationHookResult = ReturnType<typeof useUpdateAFinancialYearMutation>;
export type UpdateAFinancialYearMutationResult = Apollo.MutationResult<UpdateAFinancialYearMutation>;
export type UpdateAFinancialYearMutationOptions = Apollo.BaseMutationOptions<UpdateAFinancialYearMutation, UpdateAFinancialYearMutationVariables>;
export const CreateInventoryDocument = gql`
    mutation createInventory($data: InventoryCreateInput!) {
  createOneInventory(data: $data) {
    ...InventoryFragment
  }
}
    ${InventoryFragmentFragmentDoc}`;
export type CreateInventoryMutationFn = Apollo.MutationFunction<CreateInventoryMutation, CreateInventoryMutationVariables>;
export type CreateInventoryComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateInventoryMutation, CreateInventoryMutationVariables>, 'mutation'>;

    export const CreateInventoryComponent = (props: CreateInventoryComponentProps) => (
      <ApolloReactComponents.Mutation<CreateInventoryMutation, CreateInventoryMutationVariables> mutation={CreateInventoryDocument} {...props} />
    );
    
export type CreateInventoryProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateInventoryMutation, CreateInventoryMutationVariables>
    } & TChildProps;
export function withCreateInventory<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateInventoryMutation,
  CreateInventoryMutationVariables,
  CreateInventoryProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateInventoryMutation, CreateInventoryMutationVariables, CreateInventoryProps<TChildProps, TDataName>>(CreateInventoryDocument, {
      alias: 'createInventory',
      ...operationOptions
    });
};

/**
 * __useCreateInventoryMutation__
 *
 * To run a mutation, you first call `useCreateInventoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateInventoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createInventoryMutation, { data, loading, error }] = useCreateInventoryMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateInventoryMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateInventoryMutation, CreateInventoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateInventoryMutation, CreateInventoryMutationVariables>(CreateInventoryDocument, options);
      }
export type CreateInventoryMutationHookResult = ReturnType<typeof useCreateInventoryMutation>;
export type CreateInventoryMutationResult = Apollo.MutationResult<CreateInventoryMutation>;
export type CreateInventoryMutationOptions = Apollo.BaseMutationOptions<CreateInventoryMutation, CreateInventoryMutationVariables>;
export const CreateAInventoryDocument = gql`
    mutation createAInventory($data: InventoryCreateInput!) {
  createInventory(data: $data) {
    ...InventoryFragment
  }
}
    ${InventoryFragmentFragmentDoc}`;
export type CreateAInventoryMutationFn = Apollo.MutationFunction<CreateAInventoryMutation, CreateAInventoryMutationVariables>;
export type CreateAInventoryComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateAInventoryMutation, CreateAInventoryMutationVariables>, 'mutation'>;

    export const CreateAInventoryComponent = (props: CreateAInventoryComponentProps) => (
      <ApolloReactComponents.Mutation<CreateAInventoryMutation, CreateAInventoryMutationVariables> mutation={CreateAInventoryDocument} {...props} />
    );
    
export type CreateAInventoryProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateAInventoryMutation, CreateAInventoryMutationVariables>
    } & TChildProps;
export function withCreateAInventory<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateAInventoryMutation,
  CreateAInventoryMutationVariables,
  CreateAInventoryProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateAInventoryMutation, CreateAInventoryMutationVariables, CreateAInventoryProps<TChildProps, TDataName>>(CreateAInventoryDocument, {
      alias: 'createAInventory',
      ...operationOptions
    });
};

/**
 * __useCreateAInventoryMutation__
 *
 * To run a mutation, you first call `useCreateAInventoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAInventoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAInventoryMutation, { data, loading, error }] = useCreateAInventoryMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateAInventoryMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateAInventoryMutation, CreateAInventoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateAInventoryMutation, CreateAInventoryMutationVariables>(CreateAInventoryDocument, options);
      }
export type CreateAInventoryMutationHookResult = ReturnType<typeof useCreateAInventoryMutation>;
export type CreateAInventoryMutationResult = Apollo.MutationResult<CreateAInventoryMutation>;
export type CreateAInventoryMutationOptions = Apollo.BaseMutationOptions<CreateAInventoryMutation, CreateAInventoryMutationVariables>;
export const DeleteAInventoryDocument = gql`
    mutation deleteAInventory($where: InventoryWhereUniqueInput!) {
  deleteOneInventory(where: $where) {
    id
  }
}
    `;
export type DeleteAInventoryMutationFn = Apollo.MutationFunction<DeleteAInventoryMutation, DeleteAInventoryMutationVariables>;
export type DeleteAInventoryComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteAInventoryMutation, DeleteAInventoryMutationVariables>, 'mutation'>;

    export const DeleteAInventoryComponent = (props: DeleteAInventoryComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteAInventoryMutation, DeleteAInventoryMutationVariables> mutation={DeleteAInventoryDocument} {...props} />
    );
    
export type DeleteAInventoryProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteAInventoryMutation, DeleteAInventoryMutationVariables>
    } & TChildProps;
export function withDeleteAInventory<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteAInventoryMutation,
  DeleteAInventoryMutationVariables,
  DeleteAInventoryProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteAInventoryMutation, DeleteAInventoryMutationVariables, DeleteAInventoryProps<TChildProps, TDataName>>(DeleteAInventoryDocument, {
      alias: 'deleteAInventory',
      ...operationOptions
    });
};

/**
 * __useDeleteAInventoryMutation__
 *
 * To run a mutation, you first call `useDeleteAInventoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAInventoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAInventoryMutation, { data, loading, error }] = useDeleteAInventoryMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteAInventoryMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteAInventoryMutation, DeleteAInventoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteAInventoryMutation, DeleteAInventoryMutationVariables>(DeleteAInventoryDocument, options);
      }
export type DeleteAInventoryMutationHookResult = ReturnType<typeof useDeleteAInventoryMutation>;
export type DeleteAInventoryMutationResult = Apollo.MutationResult<DeleteAInventoryMutation>;
export type DeleteAInventoryMutationOptions = Apollo.BaseMutationOptions<DeleteAInventoryMutation, DeleteAInventoryMutationVariables>;
export const UpdateAInventoryDocument = gql`
    mutation updateAInventory($data: InventoryUpdateInput!, $where: InventoryWhereUniqueInput!) {
  updateOneInventory(data: $data, where: $where) {
    ...InventoryFragment
  }
}
    ${InventoryFragmentFragmentDoc}`;
export type UpdateAInventoryMutationFn = Apollo.MutationFunction<UpdateAInventoryMutation, UpdateAInventoryMutationVariables>;
export type UpdateAInventoryComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateAInventoryMutation, UpdateAInventoryMutationVariables>, 'mutation'>;

    export const UpdateAInventoryComponent = (props: UpdateAInventoryComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateAInventoryMutation, UpdateAInventoryMutationVariables> mutation={UpdateAInventoryDocument} {...props} />
    );
    
export type UpdateAInventoryProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdateAInventoryMutation, UpdateAInventoryMutationVariables>
    } & TChildProps;
export function withUpdateAInventory<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateAInventoryMutation,
  UpdateAInventoryMutationVariables,
  UpdateAInventoryProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateAInventoryMutation, UpdateAInventoryMutationVariables, UpdateAInventoryProps<TChildProps, TDataName>>(UpdateAInventoryDocument, {
      alias: 'updateAInventory',
      ...operationOptions
    });
};

/**
 * __useUpdateAInventoryMutation__
 *
 * To run a mutation, you first call `useUpdateAInventoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAInventoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAInventoryMutation, { data, loading, error }] = useUpdateAInventoryMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateAInventoryMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateAInventoryMutation, UpdateAInventoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateAInventoryMutation, UpdateAInventoryMutationVariables>(UpdateAInventoryDocument, options);
      }
export type UpdateAInventoryMutationHookResult = ReturnType<typeof useUpdateAInventoryMutation>;
export type UpdateAInventoryMutationResult = Apollo.MutationResult<UpdateAInventoryMutation>;
export type UpdateAInventoryMutationOptions = Apollo.BaseMutationOptions<UpdateAInventoryMutation, UpdateAInventoryMutationVariables>;
export const CreateOrderDocument = gql`
    mutation createOrder($data: OrderCreateInput!) {
  createOneOrder(data: $data) {
    ...OrderFragment
  }
}
    ${OrderFragmentFragmentDoc}`;
export type CreateOrderMutationFn = Apollo.MutationFunction<CreateOrderMutation, CreateOrderMutationVariables>;
export type CreateOrderComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateOrderMutation, CreateOrderMutationVariables>, 'mutation'>;

    export const CreateOrderComponent = (props: CreateOrderComponentProps) => (
      <ApolloReactComponents.Mutation<CreateOrderMutation, CreateOrderMutationVariables> mutation={CreateOrderDocument} {...props} />
    );
    
export type CreateOrderProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateOrderMutation, CreateOrderMutationVariables>
    } & TChildProps;
export function withCreateOrder<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateOrderMutation,
  CreateOrderMutationVariables,
  CreateOrderProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateOrderMutation, CreateOrderMutationVariables, CreateOrderProps<TChildProps, TDataName>>(CreateOrderDocument, {
      alias: 'createOrder',
      ...operationOptions
    });
};

/**
 * __useCreateOrderMutation__
 *
 * To run a mutation, you first call `useCreateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrderMutation, { data, loading, error }] = useCreateOrderMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOrderMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateOrderMutation, CreateOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateOrderMutation, CreateOrderMutationVariables>(CreateOrderDocument, options);
      }
export type CreateOrderMutationHookResult = ReturnType<typeof useCreateOrderMutation>;
export type CreateOrderMutationResult = Apollo.MutationResult<CreateOrderMutation>;
export type CreateOrderMutationOptions = Apollo.BaseMutationOptions<CreateOrderMutation, CreateOrderMutationVariables>;
export const CreateAnOrderDocument = gql`
    mutation createAnOrder($data: OrderCreateInput!) {
  createOrder(data: $data) {
    ...OrderFragment
  }
}
    ${OrderFragmentFragmentDoc}`;
export type CreateAnOrderMutationFn = Apollo.MutationFunction<CreateAnOrderMutation, CreateAnOrderMutationVariables>;
export type CreateAnOrderComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateAnOrderMutation, CreateAnOrderMutationVariables>, 'mutation'>;

    export const CreateAnOrderComponent = (props: CreateAnOrderComponentProps) => (
      <ApolloReactComponents.Mutation<CreateAnOrderMutation, CreateAnOrderMutationVariables> mutation={CreateAnOrderDocument} {...props} />
    );
    
export type CreateAnOrderProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateAnOrderMutation, CreateAnOrderMutationVariables>
    } & TChildProps;
export function withCreateAnOrder<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateAnOrderMutation,
  CreateAnOrderMutationVariables,
  CreateAnOrderProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateAnOrderMutation, CreateAnOrderMutationVariables, CreateAnOrderProps<TChildProps, TDataName>>(CreateAnOrderDocument, {
      alias: 'createAnOrder',
      ...operationOptions
    });
};

/**
 * __useCreateAnOrderMutation__
 *
 * To run a mutation, you first call `useCreateAnOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAnOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAnOrderMutation, { data, loading, error }] = useCreateAnOrderMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateAnOrderMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateAnOrderMutation, CreateAnOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateAnOrderMutation, CreateAnOrderMutationVariables>(CreateAnOrderDocument, options);
      }
export type CreateAnOrderMutationHookResult = ReturnType<typeof useCreateAnOrderMutation>;
export type CreateAnOrderMutationResult = Apollo.MutationResult<CreateAnOrderMutation>;
export type CreateAnOrderMutationOptions = Apollo.BaseMutationOptions<CreateAnOrderMutation, CreateAnOrderMutationVariables>;
export const DeleteAnOrderDocument = gql`
    mutation deleteAnOrder($where: OrderWhereUniqueInput!) {
  deleteOneOrder(where: $where) {
    id
  }
}
    `;
export type DeleteAnOrderMutationFn = Apollo.MutationFunction<DeleteAnOrderMutation, DeleteAnOrderMutationVariables>;
export type DeleteAnOrderComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteAnOrderMutation, DeleteAnOrderMutationVariables>, 'mutation'>;

    export const DeleteAnOrderComponent = (props: DeleteAnOrderComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteAnOrderMutation, DeleteAnOrderMutationVariables> mutation={DeleteAnOrderDocument} {...props} />
    );
    
export type DeleteAnOrderProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteAnOrderMutation, DeleteAnOrderMutationVariables>
    } & TChildProps;
export function withDeleteAnOrder<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteAnOrderMutation,
  DeleteAnOrderMutationVariables,
  DeleteAnOrderProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteAnOrderMutation, DeleteAnOrderMutationVariables, DeleteAnOrderProps<TChildProps, TDataName>>(DeleteAnOrderDocument, {
      alias: 'deleteAnOrder',
      ...operationOptions
    });
};

/**
 * __useDeleteAnOrderMutation__
 *
 * To run a mutation, you first call `useDeleteAnOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAnOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAnOrderMutation, { data, loading, error }] = useDeleteAnOrderMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteAnOrderMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteAnOrderMutation, DeleteAnOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteAnOrderMutation, DeleteAnOrderMutationVariables>(DeleteAnOrderDocument, options);
      }
export type DeleteAnOrderMutationHookResult = ReturnType<typeof useDeleteAnOrderMutation>;
export type DeleteAnOrderMutationResult = Apollo.MutationResult<DeleteAnOrderMutation>;
export type DeleteAnOrderMutationOptions = Apollo.BaseMutationOptions<DeleteAnOrderMutation, DeleteAnOrderMutationVariables>;
export const UpdateAnOrderDocument = gql`
    mutation updateAnOrder($data: OrderUpdateInput!, $where: OrderWhereUniqueInput!) {
  updateOneOrder(data: $data, where: $where) {
    ...OrderFragment
  }
}
    ${OrderFragmentFragmentDoc}`;
export type UpdateAnOrderMutationFn = Apollo.MutationFunction<UpdateAnOrderMutation, UpdateAnOrderMutationVariables>;
export type UpdateAnOrderComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateAnOrderMutation, UpdateAnOrderMutationVariables>, 'mutation'>;

    export const UpdateAnOrderComponent = (props: UpdateAnOrderComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateAnOrderMutation, UpdateAnOrderMutationVariables> mutation={UpdateAnOrderDocument} {...props} />
    );
    
export type UpdateAnOrderProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdateAnOrderMutation, UpdateAnOrderMutationVariables>
    } & TChildProps;
export function withUpdateAnOrder<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateAnOrderMutation,
  UpdateAnOrderMutationVariables,
  UpdateAnOrderProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateAnOrderMutation, UpdateAnOrderMutationVariables, UpdateAnOrderProps<TChildProps, TDataName>>(UpdateAnOrderDocument, {
      alias: 'updateAnOrder',
      ...operationOptions
    });
};

/**
 * __useUpdateAnOrderMutation__
 *
 * To run a mutation, you first call `useUpdateAnOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAnOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAnOrderMutation, { data, loading, error }] = useUpdateAnOrderMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateAnOrderMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateAnOrderMutation, UpdateAnOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateAnOrderMutation, UpdateAnOrderMutationVariables>(UpdateAnOrderDocument, options);
      }
export type UpdateAnOrderMutationHookResult = ReturnType<typeof useUpdateAnOrderMutation>;
export type UpdateAnOrderMutationResult = Apollo.MutationResult<UpdateAnOrderMutation>;
export type UpdateAnOrderMutationOptions = Apollo.BaseMutationOptions<UpdateAnOrderMutation, UpdateAnOrderMutationVariables>;
export const CreateOrderDetailDocument = gql`
    mutation createOrderDetail($data: OrderDetailCreateInput!) {
  createOneOrderDetail(data: $data) {
    ...OrderDetailFragment
  }
}
    ${OrderDetailFragmentFragmentDoc}`;
export type CreateOrderDetailMutationFn = Apollo.MutationFunction<CreateOrderDetailMutation, CreateOrderDetailMutationVariables>;
export type CreateOrderDetailComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateOrderDetailMutation, CreateOrderDetailMutationVariables>, 'mutation'>;

    export const CreateOrderDetailComponent = (props: CreateOrderDetailComponentProps) => (
      <ApolloReactComponents.Mutation<CreateOrderDetailMutation, CreateOrderDetailMutationVariables> mutation={CreateOrderDetailDocument} {...props} />
    );
    
export type CreateOrderDetailProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateOrderDetailMutation, CreateOrderDetailMutationVariables>
    } & TChildProps;
export function withCreateOrderDetail<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateOrderDetailMutation,
  CreateOrderDetailMutationVariables,
  CreateOrderDetailProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateOrderDetailMutation, CreateOrderDetailMutationVariables, CreateOrderDetailProps<TChildProps, TDataName>>(CreateOrderDetailDocument, {
      alias: 'createOrderDetail',
      ...operationOptions
    });
};

/**
 * __useCreateOrderDetailMutation__
 *
 * To run a mutation, you first call `useCreateOrderDetailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrderDetailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrderDetailMutation, { data, loading, error }] = useCreateOrderDetailMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOrderDetailMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateOrderDetailMutation, CreateOrderDetailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateOrderDetailMutation, CreateOrderDetailMutationVariables>(CreateOrderDetailDocument, options);
      }
export type CreateOrderDetailMutationHookResult = ReturnType<typeof useCreateOrderDetailMutation>;
export type CreateOrderDetailMutationResult = Apollo.MutationResult<CreateOrderDetailMutation>;
export type CreateOrderDetailMutationOptions = Apollo.BaseMutationOptions<CreateOrderDetailMutation, CreateOrderDetailMutationVariables>;
export const CreateAnOrderDetailDocument = gql`
    mutation createAnOrderDetail($data: OrderDetailCreateInput!) {
  createOrderDetail(data: $data) {
    ...OrderDetailFragment
  }
}
    ${OrderDetailFragmentFragmentDoc}`;
export type CreateAnOrderDetailMutationFn = Apollo.MutationFunction<CreateAnOrderDetailMutation, CreateAnOrderDetailMutationVariables>;
export type CreateAnOrderDetailComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateAnOrderDetailMutation, CreateAnOrderDetailMutationVariables>, 'mutation'>;

    export const CreateAnOrderDetailComponent = (props: CreateAnOrderDetailComponentProps) => (
      <ApolloReactComponents.Mutation<CreateAnOrderDetailMutation, CreateAnOrderDetailMutationVariables> mutation={CreateAnOrderDetailDocument} {...props} />
    );
    
export type CreateAnOrderDetailProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateAnOrderDetailMutation, CreateAnOrderDetailMutationVariables>
    } & TChildProps;
export function withCreateAnOrderDetail<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateAnOrderDetailMutation,
  CreateAnOrderDetailMutationVariables,
  CreateAnOrderDetailProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateAnOrderDetailMutation, CreateAnOrderDetailMutationVariables, CreateAnOrderDetailProps<TChildProps, TDataName>>(CreateAnOrderDetailDocument, {
      alias: 'createAnOrderDetail',
      ...operationOptions
    });
};

/**
 * __useCreateAnOrderDetailMutation__
 *
 * To run a mutation, you first call `useCreateAnOrderDetailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAnOrderDetailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAnOrderDetailMutation, { data, loading, error }] = useCreateAnOrderDetailMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateAnOrderDetailMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateAnOrderDetailMutation, CreateAnOrderDetailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateAnOrderDetailMutation, CreateAnOrderDetailMutationVariables>(CreateAnOrderDetailDocument, options);
      }
export type CreateAnOrderDetailMutationHookResult = ReturnType<typeof useCreateAnOrderDetailMutation>;
export type CreateAnOrderDetailMutationResult = Apollo.MutationResult<CreateAnOrderDetailMutation>;
export type CreateAnOrderDetailMutationOptions = Apollo.BaseMutationOptions<CreateAnOrderDetailMutation, CreateAnOrderDetailMutationVariables>;
export const DeleteAnOrderDetailDocument = gql`
    mutation deleteAnOrderDetail($where: OrderDetailWhereUniqueInput!) {
  deleteOneOrderDetail(where: $where) {
    id
  }
}
    `;
export type DeleteAnOrderDetailMutationFn = Apollo.MutationFunction<DeleteAnOrderDetailMutation, DeleteAnOrderDetailMutationVariables>;
export type DeleteAnOrderDetailComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteAnOrderDetailMutation, DeleteAnOrderDetailMutationVariables>, 'mutation'>;

    export const DeleteAnOrderDetailComponent = (props: DeleteAnOrderDetailComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteAnOrderDetailMutation, DeleteAnOrderDetailMutationVariables> mutation={DeleteAnOrderDetailDocument} {...props} />
    );
    
export type DeleteAnOrderDetailProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteAnOrderDetailMutation, DeleteAnOrderDetailMutationVariables>
    } & TChildProps;
export function withDeleteAnOrderDetail<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteAnOrderDetailMutation,
  DeleteAnOrderDetailMutationVariables,
  DeleteAnOrderDetailProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteAnOrderDetailMutation, DeleteAnOrderDetailMutationVariables, DeleteAnOrderDetailProps<TChildProps, TDataName>>(DeleteAnOrderDetailDocument, {
      alias: 'deleteAnOrderDetail',
      ...operationOptions
    });
};

/**
 * __useDeleteAnOrderDetailMutation__
 *
 * To run a mutation, you first call `useDeleteAnOrderDetailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAnOrderDetailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAnOrderDetailMutation, { data, loading, error }] = useDeleteAnOrderDetailMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteAnOrderDetailMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteAnOrderDetailMutation, DeleteAnOrderDetailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteAnOrderDetailMutation, DeleteAnOrderDetailMutationVariables>(DeleteAnOrderDetailDocument, options);
      }
export type DeleteAnOrderDetailMutationHookResult = ReturnType<typeof useDeleteAnOrderDetailMutation>;
export type DeleteAnOrderDetailMutationResult = Apollo.MutationResult<DeleteAnOrderDetailMutation>;
export type DeleteAnOrderDetailMutationOptions = Apollo.BaseMutationOptions<DeleteAnOrderDetailMutation, DeleteAnOrderDetailMutationVariables>;
export const UpdateAnOrderDetailDocument = gql`
    mutation updateAnOrderDetail($data: OrderDetailUpdateInput!, $where: OrderDetailWhereUniqueInput!) {
  updateOneOrderDetail(data: $data, where: $where) {
    ...OrderDetailFragment
  }
}
    ${OrderDetailFragmentFragmentDoc}`;
export type UpdateAnOrderDetailMutationFn = Apollo.MutationFunction<UpdateAnOrderDetailMutation, UpdateAnOrderDetailMutationVariables>;
export type UpdateAnOrderDetailComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateAnOrderDetailMutation, UpdateAnOrderDetailMutationVariables>, 'mutation'>;

    export const UpdateAnOrderDetailComponent = (props: UpdateAnOrderDetailComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateAnOrderDetailMutation, UpdateAnOrderDetailMutationVariables> mutation={UpdateAnOrderDetailDocument} {...props} />
    );
    
export type UpdateAnOrderDetailProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdateAnOrderDetailMutation, UpdateAnOrderDetailMutationVariables>
    } & TChildProps;
export function withUpdateAnOrderDetail<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateAnOrderDetailMutation,
  UpdateAnOrderDetailMutationVariables,
  UpdateAnOrderDetailProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateAnOrderDetailMutation, UpdateAnOrderDetailMutationVariables, UpdateAnOrderDetailProps<TChildProps, TDataName>>(UpdateAnOrderDetailDocument, {
      alias: 'updateAnOrderDetail',
      ...operationOptions
    });
};

/**
 * __useUpdateAnOrderDetailMutation__
 *
 * To run a mutation, you first call `useUpdateAnOrderDetailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAnOrderDetailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAnOrderDetailMutation, { data, loading, error }] = useUpdateAnOrderDetailMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateAnOrderDetailMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateAnOrderDetailMutation, UpdateAnOrderDetailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateAnOrderDetailMutation, UpdateAnOrderDetailMutationVariables>(UpdateAnOrderDetailDocument, options);
      }
export type UpdateAnOrderDetailMutationHookResult = ReturnType<typeof useUpdateAnOrderDetailMutation>;
export type UpdateAnOrderDetailMutationResult = Apollo.MutationResult<UpdateAnOrderDetailMutation>;
export type UpdateAnOrderDetailMutationOptions = Apollo.BaseMutationOptions<UpdateAnOrderDetailMutation, UpdateAnOrderDetailMutationVariables>;
export const CreateProductDocument = gql`
    mutation createProduct($data: ProductCreateInput!) {
  createOneProduct(data: $data) {
    ...ProductFragment
  }
}
    ${ProductFragmentFragmentDoc}`;
export type CreateProductMutationFn = Apollo.MutationFunction<CreateProductMutation, CreateProductMutationVariables>;
export type CreateProductComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateProductMutation, CreateProductMutationVariables>, 'mutation'>;

    export const CreateProductComponent = (props: CreateProductComponentProps) => (
      <ApolloReactComponents.Mutation<CreateProductMutation, CreateProductMutationVariables> mutation={CreateProductDocument} {...props} />
    );
    
export type CreateProductProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateProductMutation, CreateProductMutationVariables>
    } & TChildProps;
export function withCreateProduct<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateProductMutation,
  CreateProductMutationVariables,
  CreateProductProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateProductMutation, CreateProductMutationVariables, CreateProductProps<TChildProps, TDataName>>(CreateProductDocument, {
      alias: 'createProduct',
      ...operationOptions
    });
};

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateProductMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateProductMutation, CreateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument, options);
      }
export type CreateProductMutationHookResult = ReturnType<typeof useCreateProductMutation>;
export type CreateProductMutationResult = Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<CreateProductMutation, CreateProductMutationVariables>;
export const CreateAProductDocument = gql`
    mutation createAProduct($data: ProductCreateInput!) {
  createProduct(data: $data) {
    ...ProductFragment
  }
}
    ${ProductFragmentFragmentDoc}`;
export type CreateAProductMutationFn = Apollo.MutationFunction<CreateAProductMutation, CreateAProductMutationVariables>;
export type CreateAProductComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateAProductMutation, CreateAProductMutationVariables>, 'mutation'>;

    export const CreateAProductComponent = (props: CreateAProductComponentProps) => (
      <ApolloReactComponents.Mutation<CreateAProductMutation, CreateAProductMutationVariables> mutation={CreateAProductDocument} {...props} />
    );
    
export type CreateAProductProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateAProductMutation, CreateAProductMutationVariables>
    } & TChildProps;
export function withCreateAProduct<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateAProductMutation,
  CreateAProductMutationVariables,
  CreateAProductProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateAProductMutation, CreateAProductMutationVariables, CreateAProductProps<TChildProps, TDataName>>(CreateAProductDocument, {
      alias: 'createAProduct',
      ...operationOptions
    });
};

/**
 * __useCreateAProductMutation__
 *
 * To run a mutation, you first call `useCreateAProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAProductMutation, { data, loading, error }] = useCreateAProductMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateAProductMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateAProductMutation, CreateAProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateAProductMutation, CreateAProductMutationVariables>(CreateAProductDocument, options);
      }
export type CreateAProductMutationHookResult = ReturnType<typeof useCreateAProductMutation>;
export type CreateAProductMutationResult = Apollo.MutationResult<CreateAProductMutation>;
export type CreateAProductMutationOptions = Apollo.BaseMutationOptions<CreateAProductMutation, CreateAProductMutationVariables>;
export const DeleteAProductDocument = gql`
    mutation deleteAProduct($where: ProductWhereUniqueInput!) {
  deleteOneProduct(where: $where) {
    id
  }
}
    `;
export type DeleteAProductMutationFn = Apollo.MutationFunction<DeleteAProductMutation, DeleteAProductMutationVariables>;
export type DeleteAProductComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteAProductMutation, DeleteAProductMutationVariables>, 'mutation'>;

    export const DeleteAProductComponent = (props: DeleteAProductComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteAProductMutation, DeleteAProductMutationVariables> mutation={DeleteAProductDocument} {...props} />
    );
    
export type DeleteAProductProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteAProductMutation, DeleteAProductMutationVariables>
    } & TChildProps;
export function withDeleteAProduct<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteAProductMutation,
  DeleteAProductMutationVariables,
  DeleteAProductProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteAProductMutation, DeleteAProductMutationVariables, DeleteAProductProps<TChildProps, TDataName>>(DeleteAProductDocument, {
      alias: 'deleteAProduct',
      ...operationOptions
    });
};

/**
 * __useDeleteAProductMutation__
 *
 * To run a mutation, you first call `useDeleteAProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAProductMutation, { data, loading, error }] = useDeleteAProductMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteAProductMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteAProductMutation, DeleteAProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteAProductMutation, DeleteAProductMutationVariables>(DeleteAProductDocument, options);
      }
export type DeleteAProductMutationHookResult = ReturnType<typeof useDeleteAProductMutation>;
export type DeleteAProductMutationResult = Apollo.MutationResult<DeleteAProductMutation>;
export type DeleteAProductMutationOptions = Apollo.BaseMutationOptions<DeleteAProductMutation, DeleteAProductMutationVariables>;
export const UpdateAProductDocument = gql`
    mutation updateAProduct($data: ProductUpdateInput!, $where: ProductWhereUniqueInput!) {
  updateOneProduct(data: $data, where: $where) {
    ...ProductFragment
  }
}
    ${ProductFragmentFragmentDoc}`;
export type UpdateAProductMutationFn = Apollo.MutationFunction<UpdateAProductMutation, UpdateAProductMutationVariables>;
export type UpdateAProductComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateAProductMutation, UpdateAProductMutationVariables>, 'mutation'>;

    export const UpdateAProductComponent = (props: UpdateAProductComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateAProductMutation, UpdateAProductMutationVariables> mutation={UpdateAProductDocument} {...props} />
    );
    
export type UpdateAProductProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdateAProductMutation, UpdateAProductMutationVariables>
    } & TChildProps;
export function withUpdateAProduct<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateAProductMutation,
  UpdateAProductMutationVariables,
  UpdateAProductProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateAProductMutation, UpdateAProductMutationVariables, UpdateAProductProps<TChildProps, TDataName>>(UpdateAProductDocument, {
      alias: 'updateAProduct',
      ...operationOptions
    });
};

/**
 * __useUpdateAProductMutation__
 *
 * To run a mutation, you first call `useUpdateAProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAProductMutation, { data, loading, error }] = useUpdateAProductMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateAProductMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateAProductMutation, UpdateAProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateAProductMutation, UpdateAProductMutationVariables>(UpdateAProductDocument, options);
      }
export type UpdateAProductMutationHookResult = ReturnType<typeof useUpdateAProductMutation>;
export type UpdateAProductMutationResult = Apollo.MutationResult<UpdateAProductMutation>;
export type UpdateAProductMutationOptions = Apollo.BaseMutationOptions<UpdateAProductMutation, UpdateAProductMutationVariables>;
export const AllAnnualBranchEmployeesDocument = gql`
    query AllAnnualBranchEmployees {
  annualBranchEmployees {
    ...AnnualBranchEmployeeFragment
  }
}
    ${AnnualBranchEmployeeFragmentFragmentDoc}`;
export type AllAnnualBranchEmployeesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllAnnualBranchEmployeesQuery, AllAnnualBranchEmployeesQueryVariables>, 'query'>;

    export const AllAnnualBranchEmployeesComponent = (props: AllAnnualBranchEmployeesComponentProps) => (
      <ApolloReactComponents.Query<AllAnnualBranchEmployeesQuery, AllAnnualBranchEmployeesQueryVariables> query={AllAnnualBranchEmployeesDocument} {...props} />
    );
    
export type AllAnnualBranchEmployeesProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<AllAnnualBranchEmployeesQuery, AllAnnualBranchEmployeesQueryVariables>
    } & TChildProps;
export function withAllAnnualBranchEmployees<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AllAnnualBranchEmployeesQuery,
  AllAnnualBranchEmployeesQueryVariables,
  AllAnnualBranchEmployeesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, AllAnnualBranchEmployeesQuery, AllAnnualBranchEmployeesQueryVariables, AllAnnualBranchEmployeesProps<TChildProps, TDataName>>(AllAnnualBranchEmployeesDocument, {
      alias: 'allAnnualBranchEmployees',
      ...operationOptions
    });
};

/**
 * __useAllAnnualBranchEmployeesQuery__
 *
 * To run a query within a React component, call `useAllAnnualBranchEmployeesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllAnnualBranchEmployeesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllAnnualBranchEmployeesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllAnnualBranchEmployeesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllAnnualBranchEmployeesQuery, AllAnnualBranchEmployeesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<AllAnnualBranchEmployeesQuery, AllAnnualBranchEmployeesQueryVariables>(AllAnnualBranchEmployeesDocument, options);
      }
export function useAllAnnualBranchEmployeesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllAnnualBranchEmployeesQuery, AllAnnualBranchEmployeesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<AllAnnualBranchEmployeesQuery, AllAnnualBranchEmployeesQueryVariables>(AllAnnualBranchEmployeesDocument, options);
        }
export type AllAnnualBranchEmployeesQueryHookResult = ReturnType<typeof useAllAnnualBranchEmployeesQuery>;
export type AllAnnualBranchEmployeesLazyQueryHookResult = ReturnType<typeof useAllAnnualBranchEmployeesLazyQuery>;
export type AllAnnualBranchEmployeesQueryResult = Apollo.QueryResult<AllAnnualBranchEmployeesQuery, AllAnnualBranchEmployeesQueryVariables>;
export const SingleAnnualBranchEmployeeDocument = gql`
    query SingleAnnualBranchEmployee($where: AnnualBranchEmployeeWhereUniqueInput!) {
  annualBranchEmployee(where: $where) {
    ...AnnualBranchEmployeeFragment
  }
}
    ${AnnualBranchEmployeeFragmentFragmentDoc}`;
export type SingleAnnualBranchEmployeeComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SingleAnnualBranchEmployeeQuery, SingleAnnualBranchEmployeeQueryVariables>, 'query'> & ({ variables: SingleAnnualBranchEmployeeQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SingleAnnualBranchEmployeeComponent = (props: SingleAnnualBranchEmployeeComponentProps) => (
      <ApolloReactComponents.Query<SingleAnnualBranchEmployeeQuery, SingleAnnualBranchEmployeeQueryVariables> query={SingleAnnualBranchEmployeeDocument} {...props} />
    );
    
export type SingleAnnualBranchEmployeeProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SingleAnnualBranchEmployeeQuery, SingleAnnualBranchEmployeeQueryVariables>
    } & TChildProps;
export function withSingleAnnualBranchEmployee<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SingleAnnualBranchEmployeeQuery,
  SingleAnnualBranchEmployeeQueryVariables,
  SingleAnnualBranchEmployeeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SingleAnnualBranchEmployeeQuery, SingleAnnualBranchEmployeeQueryVariables, SingleAnnualBranchEmployeeProps<TChildProps, TDataName>>(SingleAnnualBranchEmployeeDocument, {
      alias: 'singleAnnualBranchEmployee',
      ...operationOptions
    });
};

/**
 * __useSingleAnnualBranchEmployeeQuery__
 *
 * To run a query within a React component, call `useSingleAnnualBranchEmployeeQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleAnnualBranchEmployeeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleAnnualBranchEmployeeQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useSingleAnnualBranchEmployeeQuery(baseOptions: ApolloReactHooks.QueryHookOptions<SingleAnnualBranchEmployeeQuery, SingleAnnualBranchEmployeeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<SingleAnnualBranchEmployeeQuery, SingleAnnualBranchEmployeeQueryVariables>(SingleAnnualBranchEmployeeDocument, options);
      }
export function useSingleAnnualBranchEmployeeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SingleAnnualBranchEmployeeQuery, SingleAnnualBranchEmployeeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<SingleAnnualBranchEmployeeQuery, SingleAnnualBranchEmployeeQueryVariables>(SingleAnnualBranchEmployeeDocument, options);
        }
export type SingleAnnualBranchEmployeeQueryHookResult = ReturnType<typeof useSingleAnnualBranchEmployeeQuery>;
export type SingleAnnualBranchEmployeeLazyQueryHookResult = ReturnType<typeof useSingleAnnualBranchEmployeeLazyQuery>;
export type SingleAnnualBranchEmployeeQueryResult = Apollo.QueryResult<SingleAnnualBranchEmployeeQuery, SingleAnnualBranchEmployeeQueryVariables>;
export const SingleAnnualBranchEmployeeByIdDocument = gql`
    query SingleAnnualBranchEmployeeById($id: String!) {
  annualBranchEmployeeById(id: $id) {
    ...AnnualBranchEmployeeFragment
  }
}
    ${AnnualBranchEmployeeFragmentFragmentDoc}`;
export type SingleAnnualBranchEmployeeByIdComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SingleAnnualBranchEmployeeByIdQuery, SingleAnnualBranchEmployeeByIdQueryVariables>, 'query'> & ({ variables: SingleAnnualBranchEmployeeByIdQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SingleAnnualBranchEmployeeByIdComponent = (props: SingleAnnualBranchEmployeeByIdComponentProps) => (
      <ApolloReactComponents.Query<SingleAnnualBranchEmployeeByIdQuery, SingleAnnualBranchEmployeeByIdQueryVariables> query={SingleAnnualBranchEmployeeByIdDocument} {...props} />
    );
    
export type SingleAnnualBranchEmployeeByIdProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SingleAnnualBranchEmployeeByIdQuery, SingleAnnualBranchEmployeeByIdQueryVariables>
    } & TChildProps;
export function withSingleAnnualBranchEmployeeById<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SingleAnnualBranchEmployeeByIdQuery,
  SingleAnnualBranchEmployeeByIdQueryVariables,
  SingleAnnualBranchEmployeeByIdProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SingleAnnualBranchEmployeeByIdQuery, SingleAnnualBranchEmployeeByIdQueryVariables, SingleAnnualBranchEmployeeByIdProps<TChildProps, TDataName>>(SingleAnnualBranchEmployeeByIdDocument, {
      alias: 'singleAnnualBranchEmployeeById',
      ...operationOptions
    });
};

/**
 * __useSingleAnnualBranchEmployeeByIdQuery__
 *
 * To run a query within a React component, call `useSingleAnnualBranchEmployeeByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleAnnualBranchEmployeeByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleAnnualBranchEmployeeByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSingleAnnualBranchEmployeeByIdQuery(baseOptions: ApolloReactHooks.QueryHookOptions<SingleAnnualBranchEmployeeByIdQuery, SingleAnnualBranchEmployeeByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<SingleAnnualBranchEmployeeByIdQuery, SingleAnnualBranchEmployeeByIdQueryVariables>(SingleAnnualBranchEmployeeByIdDocument, options);
      }
export function useSingleAnnualBranchEmployeeByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SingleAnnualBranchEmployeeByIdQuery, SingleAnnualBranchEmployeeByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<SingleAnnualBranchEmployeeByIdQuery, SingleAnnualBranchEmployeeByIdQueryVariables>(SingleAnnualBranchEmployeeByIdDocument, options);
        }
export type SingleAnnualBranchEmployeeByIdQueryHookResult = ReturnType<typeof useSingleAnnualBranchEmployeeByIdQuery>;
export type SingleAnnualBranchEmployeeByIdLazyQueryHookResult = ReturnType<typeof useSingleAnnualBranchEmployeeByIdLazyQuery>;
export type SingleAnnualBranchEmployeeByIdQueryResult = Apollo.QueryResult<SingleAnnualBranchEmployeeByIdQuery, SingleAnnualBranchEmployeeByIdQueryVariables>;
export const SingleAnnualBranchEmployeeByBranchEmployeeAndYearDocument = gql`
    query SingleAnnualBranchEmployeeByBranchEmployeeAndYear($financialYearId: String!, $branchEmployeeId: String!) {
  annualBranchEmployeeByBranchEmployeeAndYear(
    financialYearId: $financialYearId
    branchEmployeeId: $branchEmployeeId
  ) {
    ...AnnualBranchEmployeeFragment
  }
}
    ${AnnualBranchEmployeeFragmentFragmentDoc}`;
export type SingleAnnualBranchEmployeeByBranchEmployeeAndYearComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SingleAnnualBranchEmployeeByBranchEmployeeAndYearQuery, SingleAnnualBranchEmployeeByBranchEmployeeAndYearQueryVariables>, 'query'> & ({ variables: SingleAnnualBranchEmployeeByBranchEmployeeAndYearQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SingleAnnualBranchEmployeeByBranchEmployeeAndYearComponent = (props: SingleAnnualBranchEmployeeByBranchEmployeeAndYearComponentProps) => (
      <ApolloReactComponents.Query<SingleAnnualBranchEmployeeByBranchEmployeeAndYearQuery, SingleAnnualBranchEmployeeByBranchEmployeeAndYearQueryVariables> query={SingleAnnualBranchEmployeeByBranchEmployeeAndYearDocument} {...props} />
    );
    
export type SingleAnnualBranchEmployeeByBranchEmployeeAndYearProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SingleAnnualBranchEmployeeByBranchEmployeeAndYearQuery, SingleAnnualBranchEmployeeByBranchEmployeeAndYearQueryVariables>
    } & TChildProps;
export function withSingleAnnualBranchEmployeeByBranchEmployeeAndYear<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SingleAnnualBranchEmployeeByBranchEmployeeAndYearQuery,
  SingleAnnualBranchEmployeeByBranchEmployeeAndYearQueryVariables,
  SingleAnnualBranchEmployeeByBranchEmployeeAndYearProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SingleAnnualBranchEmployeeByBranchEmployeeAndYearQuery, SingleAnnualBranchEmployeeByBranchEmployeeAndYearQueryVariables, SingleAnnualBranchEmployeeByBranchEmployeeAndYearProps<TChildProps, TDataName>>(SingleAnnualBranchEmployeeByBranchEmployeeAndYearDocument, {
      alias: 'singleAnnualBranchEmployeeByBranchEmployeeAndYear',
      ...operationOptions
    });
};

/**
 * __useSingleAnnualBranchEmployeeByBranchEmployeeAndYearQuery__
 *
 * To run a query within a React component, call `useSingleAnnualBranchEmployeeByBranchEmployeeAndYearQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleAnnualBranchEmployeeByBranchEmployeeAndYearQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleAnnualBranchEmployeeByBranchEmployeeAndYearQuery({
 *   variables: {
 *      financialYearId: // value for 'financialYearId'
 *      branchEmployeeId: // value for 'branchEmployeeId'
 *   },
 * });
 */
export function useSingleAnnualBranchEmployeeByBranchEmployeeAndYearQuery(baseOptions: ApolloReactHooks.QueryHookOptions<SingleAnnualBranchEmployeeByBranchEmployeeAndYearQuery, SingleAnnualBranchEmployeeByBranchEmployeeAndYearQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<SingleAnnualBranchEmployeeByBranchEmployeeAndYearQuery, SingleAnnualBranchEmployeeByBranchEmployeeAndYearQueryVariables>(SingleAnnualBranchEmployeeByBranchEmployeeAndYearDocument, options);
      }
export function useSingleAnnualBranchEmployeeByBranchEmployeeAndYearLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SingleAnnualBranchEmployeeByBranchEmployeeAndYearQuery, SingleAnnualBranchEmployeeByBranchEmployeeAndYearQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<SingleAnnualBranchEmployeeByBranchEmployeeAndYearQuery, SingleAnnualBranchEmployeeByBranchEmployeeAndYearQueryVariables>(SingleAnnualBranchEmployeeByBranchEmployeeAndYearDocument, options);
        }
export type SingleAnnualBranchEmployeeByBranchEmployeeAndYearQueryHookResult = ReturnType<typeof useSingleAnnualBranchEmployeeByBranchEmployeeAndYearQuery>;
export type SingleAnnualBranchEmployeeByBranchEmployeeAndYearLazyQueryHookResult = ReturnType<typeof useSingleAnnualBranchEmployeeByBranchEmployeeAndYearLazyQuery>;
export type SingleAnnualBranchEmployeeByBranchEmployeeAndYearQueryResult = Apollo.QueryResult<SingleAnnualBranchEmployeeByBranchEmployeeAndYearQuery, SingleAnnualBranchEmployeeByBranchEmployeeAndYearQueryVariables>;
export const AllAnnualClientsDocument = gql`
    query AllAnnualClients {
  annualClients {
    ...AnnualClientFragment
  }
}
    ${AnnualClientFragmentFragmentDoc}`;
export type AllAnnualClientsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllAnnualClientsQuery, AllAnnualClientsQueryVariables>, 'query'>;

    export const AllAnnualClientsComponent = (props: AllAnnualClientsComponentProps) => (
      <ApolloReactComponents.Query<AllAnnualClientsQuery, AllAnnualClientsQueryVariables> query={AllAnnualClientsDocument} {...props} />
    );
    
export type AllAnnualClientsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<AllAnnualClientsQuery, AllAnnualClientsQueryVariables>
    } & TChildProps;
export function withAllAnnualClients<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AllAnnualClientsQuery,
  AllAnnualClientsQueryVariables,
  AllAnnualClientsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, AllAnnualClientsQuery, AllAnnualClientsQueryVariables, AllAnnualClientsProps<TChildProps, TDataName>>(AllAnnualClientsDocument, {
      alias: 'allAnnualClients',
      ...operationOptions
    });
};

/**
 * __useAllAnnualClientsQuery__
 *
 * To run a query within a React component, call `useAllAnnualClientsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllAnnualClientsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllAnnualClientsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllAnnualClientsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllAnnualClientsQuery, AllAnnualClientsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<AllAnnualClientsQuery, AllAnnualClientsQueryVariables>(AllAnnualClientsDocument, options);
      }
export function useAllAnnualClientsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllAnnualClientsQuery, AllAnnualClientsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<AllAnnualClientsQuery, AllAnnualClientsQueryVariables>(AllAnnualClientsDocument, options);
        }
export type AllAnnualClientsQueryHookResult = ReturnType<typeof useAllAnnualClientsQuery>;
export type AllAnnualClientsLazyQueryHookResult = ReturnType<typeof useAllAnnualClientsLazyQuery>;
export type AllAnnualClientsQueryResult = Apollo.QueryResult<AllAnnualClientsQuery, AllAnnualClientsQueryVariables>;
export const SingleAnnualClientDocument = gql`
    query SingleAnnualClient($where: AnnualClientWhereUniqueInput!) {
  annualClient(where: $where) {
    ...AnnualClientFragment
  }
}
    ${AnnualClientFragmentFragmentDoc}`;
export type SingleAnnualClientComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SingleAnnualClientQuery, SingleAnnualClientQueryVariables>, 'query'> & ({ variables: SingleAnnualClientQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SingleAnnualClientComponent = (props: SingleAnnualClientComponentProps) => (
      <ApolloReactComponents.Query<SingleAnnualClientQuery, SingleAnnualClientQueryVariables> query={SingleAnnualClientDocument} {...props} />
    );
    
export type SingleAnnualClientProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SingleAnnualClientQuery, SingleAnnualClientQueryVariables>
    } & TChildProps;
export function withSingleAnnualClient<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SingleAnnualClientQuery,
  SingleAnnualClientQueryVariables,
  SingleAnnualClientProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SingleAnnualClientQuery, SingleAnnualClientQueryVariables, SingleAnnualClientProps<TChildProps, TDataName>>(SingleAnnualClientDocument, {
      alias: 'singleAnnualClient',
      ...operationOptions
    });
};

/**
 * __useSingleAnnualClientQuery__
 *
 * To run a query within a React component, call `useSingleAnnualClientQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleAnnualClientQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleAnnualClientQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useSingleAnnualClientQuery(baseOptions: ApolloReactHooks.QueryHookOptions<SingleAnnualClientQuery, SingleAnnualClientQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<SingleAnnualClientQuery, SingleAnnualClientQueryVariables>(SingleAnnualClientDocument, options);
      }
export function useSingleAnnualClientLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SingleAnnualClientQuery, SingleAnnualClientQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<SingleAnnualClientQuery, SingleAnnualClientQueryVariables>(SingleAnnualClientDocument, options);
        }
export type SingleAnnualClientQueryHookResult = ReturnType<typeof useSingleAnnualClientQuery>;
export type SingleAnnualClientLazyQueryHookResult = ReturnType<typeof useSingleAnnualClientLazyQuery>;
export type SingleAnnualClientQueryResult = Apollo.QueryResult<SingleAnnualClientQuery, SingleAnnualClientQueryVariables>;
export const SingleAnnualClientByIdDocument = gql`
    query SingleAnnualClientById($id: String!) {
  annualClientById(id: $id) {
    ...AnnualClientFragment
  }
}
    ${AnnualClientFragmentFragmentDoc}`;
export type SingleAnnualClientByIdComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SingleAnnualClientByIdQuery, SingleAnnualClientByIdQueryVariables>, 'query'> & ({ variables: SingleAnnualClientByIdQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SingleAnnualClientByIdComponent = (props: SingleAnnualClientByIdComponentProps) => (
      <ApolloReactComponents.Query<SingleAnnualClientByIdQuery, SingleAnnualClientByIdQueryVariables> query={SingleAnnualClientByIdDocument} {...props} />
    );
    
export type SingleAnnualClientByIdProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SingleAnnualClientByIdQuery, SingleAnnualClientByIdQueryVariables>
    } & TChildProps;
export function withSingleAnnualClientById<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SingleAnnualClientByIdQuery,
  SingleAnnualClientByIdQueryVariables,
  SingleAnnualClientByIdProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SingleAnnualClientByIdQuery, SingleAnnualClientByIdQueryVariables, SingleAnnualClientByIdProps<TChildProps, TDataName>>(SingleAnnualClientByIdDocument, {
      alias: 'singleAnnualClientById',
      ...operationOptions
    });
};

/**
 * __useSingleAnnualClientByIdQuery__
 *
 * To run a query within a React component, call `useSingleAnnualClientByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleAnnualClientByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleAnnualClientByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSingleAnnualClientByIdQuery(baseOptions: ApolloReactHooks.QueryHookOptions<SingleAnnualClientByIdQuery, SingleAnnualClientByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<SingleAnnualClientByIdQuery, SingleAnnualClientByIdQueryVariables>(SingleAnnualClientByIdDocument, options);
      }
export function useSingleAnnualClientByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SingleAnnualClientByIdQuery, SingleAnnualClientByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<SingleAnnualClientByIdQuery, SingleAnnualClientByIdQueryVariables>(SingleAnnualClientByIdDocument, options);
        }
export type SingleAnnualClientByIdQueryHookResult = ReturnType<typeof useSingleAnnualClientByIdQuery>;
export type SingleAnnualClientByIdLazyQueryHookResult = ReturnType<typeof useSingleAnnualClientByIdLazyQuery>;
export type SingleAnnualClientByIdQueryResult = Apollo.QueryResult<SingleAnnualClientByIdQuery, SingleAnnualClientByIdQueryVariables>;
export const SingleAnnualClientByYearClientDocument = gql`
    query SingleAnnualClientByYearClient($yearClient: String!) {
  annualClientByYearClient(yearClient: $yearClient) {
    ...AnnualClientFragment
  }
}
    ${AnnualClientFragmentFragmentDoc}`;
export type SingleAnnualClientByYearClientComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SingleAnnualClientByYearClientQuery, SingleAnnualClientByYearClientQueryVariables>, 'query'> & ({ variables: SingleAnnualClientByYearClientQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SingleAnnualClientByYearClientComponent = (props: SingleAnnualClientByYearClientComponentProps) => (
      <ApolloReactComponents.Query<SingleAnnualClientByYearClientQuery, SingleAnnualClientByYearClientQueryVariables> query={SingleAnnualClientByYearClientDocument} {...props} />
    );
    
export type SingleAnnualClientByYearClientProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SingleAnnualClientByYearClientQuery, SingleAnnualClientByYearClientQueryVariables>
    } & TChildProps;
export function withSingleAnnualClientByYearClient<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SingleAnnualClientByYearClientQuery,
  SingleAnnualClientByYearClientQueryVariables,
  SingleAnnualClientByYearClientProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SingleAnnualClientByYearClientQuery, SingleAnnualClientByYearClientQueryVariables, SingleAnnualClientByYearClientProps<TChildProps, TDataName>>(SingleAnnualClientByYearClientDocument, {
      alias: 'singleAnnualClientByYearClient',
      ...operationOptions
    });
};

/**
 * __useSingleAnnualClientByYearClientQuery__
 *
 * To run a query within a React component, call `useSingleAnnualClientByYearClientQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleAnnualClientByYearClientQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleAnnualClientByYearClientQuery({
 *   variables: {
 *      yearClient: // value for 'yearClient'
 *   },
 * });
 */
export function useSingleAnnualClientByYearClientQuery(baseOptions: ApolloReactHooks.QueryHookOptions<SingleAnnualClientByYearClientQuery, SingleAnnualClientByYearClientQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<SingleAnnualClientByYearClientQuery, SingleAnnualClientByYearClientQueryVariables>(SingleAnnualClientByYearClientDocument, options);
      }
export function useSingleAnnualClientByYearClientLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SingleAnnualClientByYearClientQuery, SingleAnnualClientByYearClientQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<SingleAnnualClientByYearClientQuery, SingleAnnualClientByYearClientQueryVariables>(SingleAnnualClientByYearClientDocument, options);
        }
export type SingleAnnualClientByYearClientQueryHookResult = ReturnType<typeof useSingleAnnualClientByYearClientQuery>;
export type SingleAnnualClientByYearClientLazyQueryHookResult = ReturnType<typeof useSingleAnnualClientByYearClientLazyQuery>;
export type SingleAnnualClientByYearClientQueryResult = Apollo.QueryResult<SingleAnnualClientByYearClientQuery, SingleAnnualClientByYearClientQueryVariables>;
export const SingleAnnualClientByPhoneAndYearDocument = gql`
    query SingleAnnualClientByPhoneAndYear($clientId: String!, $financialYearId: String!) {
  annualClientByPhoneAndYear(
    clientId: $clientId
    financialYearId: $financialYearId
  ) {
    ...AnnualClientFragment
    Client {
      ...ClientFragment
    }
    FinancialYear {
      ...FinancialYearFragment
    }
  }
}
    ${AnnualClientFragmentFragmentDoc}
${ClientFragmentFragmentDoc}
${FinancialYearFragmentFragmentDoc}`;
export type SingleAnnualClientByPhoneAndYearComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SingleAnnualClientByPhoneAndYearQuery, SingleAnnualClientByPhoneAndYearQueryVariables>, 'query'> & ({ variables: SingleAnnualClientByPhoneAndYearQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SingleAnnualClientByPhoneAndYearComponent = (props: SingleAnnualClientByPhoneAndYearComponentProps) => (
      <ApolloReactComponents.Query<SingleAnnualClientByPhoneAndYearQuery, SingleAnnualClientByPhoneAndYearQueryVariables> query={SingleAnnualClientByPhoneAndYearDocument} {...props} />
    );
    
export type SingleAnnualClientByPhoneAndYearProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SingleAnnualClientByPhoneAndYearQuery, SingleAnnualClientByPhoneAndYearQueryVariables>
    } & TChildProps;
export function withSingleAnnualClientByPhoneAndYear<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SingleAnnualClientByPhoneAndYearQuery,
  SingleAnnualClientByPhoneAndYearQueryVariables,
  SingleAnnualClientByPhoneAndYearProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SingleAnnualClientByPhoneAndYearQuery, SingleAnnualClientByPhoneAndYearQueryVariables, SingleAnnualClientByPhoneAndYearProps<TChildProps, TDataName>>(SingleAnnualClientByPhoneAndYearDocument, {
      alias: 'singleAnnualClientByPhoneAndYear',
      ...operationOptions
    });
};

/**
 * __useSingleAnnualClientByPhoneAndYearQuery__
 *
 * To run a query within a React component, call `useSingleAnnualClientByPhoneAndYearQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleAnnualClientByPhoneAndYearQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleAnnualClientByPhoneAndYearQuery({
 *   variables: {
 *      clientId: // value for 'clientId'
 *      financialYearId: // value for 'financialYearId'
 *   },
 * });
 */
export function useSingleAnnualClientByPhoneAndYearQuery(baseOptions: ApolloReactHooks.QueryHookOptions<SingleAnnualClientByPhoneAndYearQuery, SingleAnnualClientByPhoneAndYearQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<SingleAnnualClientByPhoneAndYearQuery, SingleAnnualClientByPhoneAndYearQueryVariables>(SingleAnnualClientByPhoneAndYearDocument, options);
      }
export function useSingleAnnualClientByPhoneAndYearLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SingleAnnualClientByPhoneAndYearQuery, SingleAnnualClientByPhoneAndYearQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<SingleAnnualClientByPhoneAndYearQuery, SingleAnnualClientByPhoneAndYearQueryVariables>(SingleAnnualClientByPhoneAndYearDocument, options);
        }
export type SingleAnnualClientByPhoneAndYearQueryHookResult = ReturnType<typeof useSingleAnnualClientByPhoneAndYearQuery>;
export type SingleAnnualClientByPhoneAndYearLazyQueryHookResult = ReturnType<typeof useSingleAnnualClientByPhoneAndYearLazyQuery>;
export type SingleAnnualClientByPhoneAndYearQueryResult = Apollo.QueryResult<SingleAnnualClientByPhoneAndYearQuery, SingleAnnualClientByPhoneAndYearQueryVariables>;
export const AllBonusesDocument = gql`
    query AllBonuses {
  bonuses {
    ...BonusFragment
  }
}
    ${BonusFragmentFragmentDoc}`;
export type AllBonusesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllBonusesQuery, AllBonusesQueryVariables>, 'query'>;

    export const AllBonusesComponent = (props: AllBonusesComponentProps) => (
      <ApolloReactComponents.Query<AllBonusesQuery, AllBonusesQueryVariables> query={AllBonusesDocument} {...props} />
    );
    
export type AllBonusesProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<AllBonusesQuery, AllBonusesQueryVariables>
    } & TChildProps;
export function withAllBonuses<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AllBonusesQuery,
  AllBonusesQueryVariables,
  AllBonusesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, AllBonusesQuery, AllBonusesQueryVariables, AllBonusesProps<TChildProps, TDataName>>(AllBonusesDocument, {
      alias: 'allBonuses',
      ...operationOptions
    });
};

/**
 * __useAllBonusesQuery__
 *
 * To run a query within a React component, call `useAllBonusesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllBonusesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllBonusesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllBonusesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllBonusesQuery, AllBonusesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<AllBonusesQuery, AllBonusesQueryVariables>(AllBonusesDocument, options);
      }
export function useAllBonusesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllBonusesQuery, AllBonusesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<AllBonusesQuery, AllBonusesQueryVariables>(AllBonusesDocument, options);
        }
export type AllBonusesQueryHookResult = ReturnType<typeof useAllBonusesQuery>;
export type AllBonusesLazyQueryHookResult = ReturnType<typeof useAllBonusesLazyQuery>;
export type AllBonusesQueryResult = Apollo.QueryResult<AllBonusesQuery, AllBonusesQueryVariables>;
export const SingleBonusDocument = gql`
    query SingleBonus($where: BonusWhereUniqueInput!) {
  bonus(where: $where) {
    ...BonusFragment
  }
}
    ${BonusFragmentFragmentDoc}`;
export type SingleBonusComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SingleBonusQuery, SingleBonusQueryVariables>, 'query'> & ({ variables: SingleBonusQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SingleBonusComponent = (props: SingleBonusComponentProps) => (
      <ApolloReactComponents.Query<SingleBonusQuery, SingleBonusQueryVariables> query={SingleBonusDocument} {...props} />
    );
    
export type SingleBonusProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SingleBonusQuery, SingleBonusQueryVariables>
    } & TChildProps;
export function withSingleBonus<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SingleBonusQuery,
  SingleBonusQueryVariables,
  SingleBonusProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SingleBonusQuery, SingleBonusQueryVariables, SingleBonusProps<TChildProps, TDataName>>(SingleBonusDocument, {
      alias: 'singleBonus',
      ...operationOptions
    });
};

/**
 * __useSingleBonusQuery__
 *
 * To run a query within a React component, call `useSingleBonusQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleBonusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleBonusQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useSingleBonusQuery(baseOptions: ApolloReactHooks.QueryHookOptions<SingleBonusQuery, SingleBonusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<SingleBonusQuery, SingleBonusQueryVariables>(SingleBonusDocument, options);
      }
export function useSingleBonusLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SingleBonusQuery, SingleBonusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<SingleBonusQuery, SingleBonusQueryVariables>(SingleBonusDocument, options);
        }
export type SingleBonusQueryHookResult = ReturnType<typeof useSingleBonusQuery>;
export type SingleBonusLazyQueryHookResult = ReturnType<typeof useSingleBonusLazyQuery>;
export type SingleBonusQueryResult = Apollo.QueryResult<SingleBonusQuery, SingleBonusQueryVariables>;
export const SingleBonusByIdDocument = gql`
    query SingleBonusById($id: String!) {
  bonusById(id: $id) {
    ...BonusFragment
  }
}
    ${BonusFragmentFragmentDoc}`;
export type SingleBonusByIdComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SingleBonusByIdQuery, SingleBonusByIdQueryVariables>, 'query'> & ({ variables: SingleBonusByIdQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SingleBonusByIdComponent = (props: SingleBonusByIdComponentProps) => (
      <ApolloReactComponents.Query<SingleBonusByIdQuery, SingleBonusByIdQueryVariables> query={SingleBonusByIdDocument} {...props} />
    );
    
export type SingleBonusByIdProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SingleBonusByIdQuery, SingleBonusByIdQueryVariables>
    } & TChildProps;
export function withSingleBonusById<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SingleBonusByIdQuery,
  SingleBonusByIdQueryVariables,
  SingleBonusByIdProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SingleBonusByIdQuery, SingleBonusByIdQueryVariables, SingleBonusByIdProps<TChildProps, TDataName>>(SingleBonusByIdDocument, {
      alias: 'singleBonusById',
      ...operationOptions
    });
};

/**
 * __useSingleBonusByIdQuery__
 *
 * To run a query within a React component, call `useSingleBonusByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleBonusByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleBonusByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSingleBonusByIdQuery(baseOptions: ApolloReactHooks.QueryHookOptions<SingleBonusByIdQuery, SingleBonusByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<SingleBonusByIdQuery, SingleBonusByIdQueryVariables>(SingleBonusByIdDocument, options);
      }
export function useSingleBonusByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SingleBonusByIdQuery, SingleBonusByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<SingleBonusByIdQuery, SingleBonusByIdQueryVariables>(SingleBonusByIdDocument, options);
        }
export type SingleBonusByIdQueryHookResult = ReturnType<typeof useSingleBonusByIdQuery>;
export type SingleBonusByIdLazyQueryHookResult = ReturnType<typeof useSingleBonusByIdLazyQuery>;
export type SingleBonusByIdQueryResult = Apollo.QueryResult<SingleBonusByIdQuery, SingleBonusByIdQueryVariables>;
export const AllBranchesDocument = gql`
    query AllBranches {
  branches {
    ...BranchFragment
  }
}
    ${BranchFragmentFragmentDoc}`;
export type AllBranchesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllBranchesQuery, AllBranchesQueryVariables>, 'query'>;

    export const AllBranchesComponent = (props: AllBranchesComponentProps) => (
      <ApolloReactComponents.Query<AllBranchesQuery, AllBranchesQueryVariables> query={AllBranchesDocument} {...props} />
    );
    
export type AllBranchesProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<AllBranchesQuery, AllBranchesQueryVariables>
    } & TChildProps;
export function withAllBranches<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AllBranchesQuery,
  AllBranchesQueryVariables,
  AllBranchesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, AllBranchesQuery, AllBranchesQueryVariables, AllBranchesProps<TChildProps, TDataName>>(AllBranchesDocument, {
      alias: 'allBranches',
      ...operationOptions
    });
};

/**
 * __useAllBranchesQuery__
 *
 * To run a query within a React component, call `useAllBranchesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllBranchesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllBranchesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllBranchesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllBranchesQuery, AllBranchesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<AllBranchesQuery, AllBranchesQueryVariables>(AllBranchesDocument, options);
      }
export function useAllBranchesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllBranchesQuery, AllBranchesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<AllBranchesQuery, AllBranchesQueryVariables>(AllBranchesDocument, options);
        }
export type AllBranchesQueryHookResult = ReturnType<typeof useAllBranchesQuery>;
export type AllBranchesLazyQueryHookResult = ReturnType<typeof useAllBranchesLazyQuery>;
export type AllBranchesQueryResult = Apollo.QueryResult<AllBranchesQuery, AllBranchesQueryVariables>;
export const SingleBranchDocument = gql`
    query SingleBranch($where: BranchWhereUniqueInput!) {
  branch(where: $where) {
    ...BranchFragment
  }
}
    ${BranchFragmentFragmentDoc}`;
export type SingleBranchComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SingleBranchQuery, SingleBranchQueryVariables>, 'query'> & ({ variables: SingleBranchQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SingleBranchComponent = (props: SingleBranchComponentProps) => (
      <ApolloReactComponents.Query<SingleBranchQuery, SingleBranchQueryVariables> query={SingleBranchDocument} {...props} />
    );
    
export type SingleBranchProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SingleBranchQuery, SingleBranchQueryVariables>
    } & TChildProps;
export function withSingleBranch<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SingleBranchQuery,
  SingleBranchQueryVariables,
  SingleBranchProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SingleBranchQuery, SingleBranchQueryVariables, SingleBranchProps<TChildProps, TDataName>>(SingleBranchDocument, {
      alias: 'singleBranch',
      ...operationOptions
    });
};

/**
 * __useSingleBranchQuery__
 *
 * To run a query within a React component, call `useSingleBranchQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleBranchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleBranchQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useSingleBranchQuery(baseOptions: ApolloReactHooks.QueryHookOptions<SingleBranchQuery, SingleBranchQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<SingleBranchQuery, SingleBranchQueryVariables>(SingleBranchDocument, options);
      }
export function useSingleBranchLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SingleBranchQuery, SingleBranchQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<SingleBranchQuery, SingleBranchQueryVariables>(SingleBranchDocument, options);
        }
export type SingleBranchQueryHookResult = ReturnType<typeof useSingleBranchQuery>;
export type SingleBranchLazyQueryHookResult = ReturnType<typeof useSingleBranchLazyQuery>;
export type SingleBranchQueryResult = Apollo.QueryResult<SingleBranchQuery, SingleBranchQueryVariables>;
export const SingleBranchByIdDocument = gql`
    query SingleBranchById($id: String!) {
  branchById(id: $id) {
    ...BranchFragment
  }
}
    ${BranchFragmentFragmentDoc}`;
export type SingleBranchByIdComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SingleBranchByIdQuery, SingleBranchByIdQueryVariables>, 'query'> & ({ variables: SingleBranchByIdQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SingleBranchByIdComponent = (props: SingleBranchByIdComponentProps) => (
      <ApolloReactComponents.Query<SingleBranchByIdQuery, SingleBranchByIdQueryVariables> query={SingleBranchByIdDocument} {...props} />
    );
    
export type SingleBranchByIdProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SingleBranchByIdQuery, SingleBranchByIdQueryVariables>
    } & TChildProps;
export function withSingleBranchById<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SingleBranchByIdQuery,
  SingleBranchByIdQueryVariables,
  SingleBranchByIdProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SingleBranchByIdQuery, SingleBranchByIdQueryVariables, SingleBranchByIdProps<TChildProps, TDataName>>(SingleBranchByIdDocument, {
      alias: 'singleBranchById',
      ...operationOptions
    });
};

/**
 * __useSingleBranchByIdQuery__
 *
 * To run a query within a React component, call `useSingleBranchByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleBranchByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleBranchByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSingleBranchByIdQuery(baseOptions: ApolloReactHooks.QueryHookOptions<SingleBranchByIdQuery, SingleBranchByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<SingleBranchByIdQuery, SingleBranchByIdQueryVariables>(SingleBranchByIdDocument, options);
      }
export function useSingleBranchByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SingleBranchByIdQuery, SingleBranchByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<SingleBranchByIdQuery, SingleBranchByIdQueryVariables>(SingleBranchByIdDocument, options);
        }
export type SingleBranchByIdQueryHookResult = ReturnType<typeof useSingleBranchByIdQuery>;
export type SingleBranchByIdLazyQueryHookResult = ReturnType<typeof useSingleBranchByIdLazyQuery>;
export type SingleBranchByIdQueryResult = Apollo.QueryResult<SingleBranchByIdQuery, SingleBranchByIdQueryVariables>;
export const SingleBranchByBranchCodeDocument = gql`
    query SingleBranchByBranchCode($branchCode: String!) {
  branchByBranchCode(branchCode: $branchCode) {
    ...BranchFragment
  }
}
    ${BranchFragmentFragmentDoc}`;
export type SingleBranchByBranchCodeComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SingleBranchByBranchCodeQuery, SingleBranchByBranchCodeQueryVariables>, 'query'> & ({ variables: SingleBranchByBranchCodeQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SingleBranchByBranchCodeComponent = (props: SingleBranchByBranchCodeComponentProps) => (
      <ApolloReactComponents.Query<SingleBranchByBranchCodeQuery, SingleBranchByBranchCodeQueryVariables> query={SingleBranchByBranchCodeDocument} {...props} />
    );
    
export type SingleBranchByBranchCodeProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SingleBranchByBranchCodeQuery, SingleBranchByBranchCodeQueryVariables>
    } & TChildProps;
export function withSingleBranchByBranchCode<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SingleBranchByBranchCodeQuery,
  SingleBranchByBranchCodeQueryVariables,
  SingleBranchByBranchCodeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SingleBranchByBranchCodeQuery, SingleBranchByBranchCodeQueryVariables, SingleBranchByBranchCodeProps<TChildProps, TDataName>>(SingleBranchByBranchCodeDocument, {
      alias: 'singleBranchByBranchCode',
      ...operationOptions
    });
};

/**
 * __useSingleBranchByBranchCodeQuery__
 *
 * To run a query within a React component, call `useSingleBranchByBranchCodeQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleBranchByBranchCodeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleBranchByBranchCodeQuery({
 *   variables: {
 *      branchCode: // value for 'branchCode'
 *   },
 * });
 */
export function useSingleBranchByBranchCodeQuery(baseOptions: ApolloReactHooks.QueryHookOptions<SingleBranchByBranchCodeQuery, SingleBranchByBranchCodeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<SingleBranchByBranchCodeQuery, SingleBranchByBranchCodeQueryVariables>(SingleBranchByBranchCodeDocument, options);
      }
export function useSingleBranchByBranchCodeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SingleBranchByBranchCodeQuery, SingleBranchByBranchCodeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<SingleBranchByBranchCodeQuery, SingleBranchByBranchCodeQueryVariables>(SingleBranchByBranchCodeDocument, options);
        }
export type SingleBranchByBranchCodeQueryHookResult = ReturnType<typeof useSingleBranchByBranchCodeQuery>;
export type SingleBranchByBranchCodeLazyQueryHookResult = ReturnType<typeof useSingleBranchByBranchCodeLazyQuery>;
export type SingleBranchByBranchCodeQueryResult = Apollo.QueryResult<SingleBranchByBranchCodeQuery, SingleBranchByBranchCodeQueryVariables>;
export const AllBranchEmployeesDocument = gql`
    query AllBranchEmployees {
  branchEmployees {
    ...BranchEmployeeFragment
  }
}
    ${BranchEmployeeFragmentFragmentDoc}`;
export type AllBranchEmployeesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllBranchEmployeesQuery, AllBranchEmployeesQueryVariables>, 'query'>;

    export const AllBranchEmployeesComponent = (props: AllBranchEmployeesComponentProps) => (
      <ApolloReactComponents.Query<AllBranchEmployeesQuery, AllBranchEmployeesQueryVariables> query={AllBranchEmployeesDocument} {...props} />
    );
    
export type AllBranchEmployeesProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<AllBranchEmployeesQuery, AllBranchEmployeesQueryVariables>
    } & TChildProps;
export function withAllBranchEmployees<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AllBranchEmployeesQuery,
  AllBranchEmployeesQueryVariables,
  AllBranchEmployeesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, AllBranchEmployeesQuery, AllBranchEmployeesQueryVariables, AllBranchEmployeesProps<TChildProps, TDataName>>(AllBranchEmployeesDocument, {
      alias: 'allBranchEmployees',
      ...operationOptions
    });
};

/**
 * __useAllBranchEmployeesQuery__
 *
 * To run a query within a React component, call `useAllBranchEmployeesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllBranchEmployeesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllBranchEmployeesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllBranchEmployeesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllBranchEmployeesQuery, AllBranchEmployeesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<AllBranchEmployeesQuery, AllBranchEmployeesQueryVariables>(AllBranchEmployeesDocument, options);
      }
export function useAllBranchEmployeesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllBranchEmployeesQuery, AllBranchEmployeesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<AllBranchEmployeesQuery, AllBranchEmployeesQueryVariables>(AllBranchEmployeesDocument, options);
        }
export type AllBranchEmployeesQueryHookResult = ReturnType<typeof useAllBranchEmployeesQuery>;
export type AllBranchEmployeesLazyQueryHookResult = ReturnType<typeof useAllBranchEmployeesLazyQuery>;
export type AllBranchEmployeesQueryResult = Apollo.QueryResult<AllBranchEmployeesQuery, AllBranchEmployeesQueryVariables>;
export const SingleBranchEmployeeDocument = gql`
    query SingleBranchEmployee($where: BranchEmployeeWhereUniqueInput!) {
  branchEmployee(where: $where) {
    ...BranchEmployeeFragment
  }
}
    ${BranchEmployeeFragmentFragmentDoc}`;
export type SingleBranchEmployeeComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SingleBranchEmployeeQuery, SingleBranchEmployeeQueryVariables>, 'query'> & ({ variables: SingleBranchEmployeeQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SingleBranchEmployeeComponent = (props: SingleBranchEmployeeComponentProps) => (
      <ApolloReactComponents.Query<SingleBranchEmployeeQuery, SingleBranchEmployeeQueryVariables> query={SingleBranchEmployeeDocument} {...props} />
    );
    
export type SingleBranchEmployeeProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SingleBranchEmployeeQuery, SingleBranchEmployeeQueryVariables>
    } & TChildProps;
export function withSingleBranchEmployee<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SingleBranchEmployeeQuery,
  SingleBranchEmployeeQueryVariables,
  SingleBranchEmployeeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SingleBranchEmployeeQuery, SingleBranchEmployeeQueryVariables, SingleBranchEmployeeProps<TChildProps, TDataName>>(SingleBranchEmployeeDocument, {
      alias: 'singleBranchEmployee',
      ...operationOptions
    });
};

/**
 * __useSingleBranchEmployeeQuery__
 *
 * To run a query within a React component, call `useSingleBranchEmployeeQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleBranchEmployeeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleBranchEmployeeQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useSingleBranchEmployeeQuery(baseOptions: ApolloReactHooks.QueryHookOptions<SingleBranchEmployeeQuery, SingleBranchEmployeeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<SingleBranchEmployeeQuery, SingleBranchEmployeeQueryVariables>(SingleBranchEmployeeDocument, options);
      }
export function useSingleBranchEmployeeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SingleBranchEmployeeQuery, SingleBranchEmployeeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<SingleBranchEmployeeQuery, SingleBranchEmployeeQueryVariables>(SingleBranchEmployeeDocument, options);
        }
export type SingleBranchEmployeeQueryHookResult = ReturnType<typeof useSingleBranchEmployeeQuery>;
export type SingleBranchEmployeeLazyQueryHookResult = ReturnType<typeof useSingleBranchEmployeeLazyQuery>;
export type SingleBranchEmployeeQueryResult = Apollo.QueryResult<SingleBranchEmployeeQuery, SingleBranchEmployeeQueryVariables>;
export const SingleBranchEmployeeByIdDocument = gql`
    query SingleBranchEmployeeById($id: String!) {
  branchEmployeeById(id: $id) {
    ...BranchEmployeeFragment
  }
}
    ${BranchEmployeeFragmentFragmentDoc}`;
export type SingleBranchEmployeeByIdComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SingleBranchEmployeeByIdQuery, SingleBranchEmployeeByIdQueryVariables>, 'query'> & ({ variables: SingleBranchEmployeeByIdQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SingleBranchEmployeeByIdComponent = (props: SingleBranchEmployeeByIdComponentProps) => (
      <ApolloReactComponents.Query<SingleBranchEmployeeByIdQuery, SingleBranchEmployeeByIdQueryVariables> query={SingleBranchEmployeeByIdDocument} {...props} />
    );
    
export type SingleBranchEmployeeByIdProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SingleBranchEmployeeByIdQuery, SingleBranchEmployeeByIdQueryVariables>
    } & TChildProps;
export function withSingleBranchEmployeeById<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SingleBranchEmployeeByIdQuery,
  SingleBranchEmployeeByIdQueryVariables,
  SingleBranchEmployeeByIdProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SingleBranchEmployeeByIdQuery, SingleBranchEmployeeByIdQueryVariables, SingleBranchEmployeeByIdProps<TChildProps, TDataName>>(SingleBranchEmployeeByIdDocument, {
      alias: 'singleBranchEmployeeById',
      ...operationOptions
    });
};

/**
 * __useSingleBranchEmployeeByIdQuery__
 *
 * To run a query within a React component, call `useSingleBranchEmployeeByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleBranchEmployeeByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleBranchEmployeeByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSingleBranchEmployeeByIdQuery(baseOptions: ApolloReactHooks.QueryHookOptions<SingleBranchEmployeeByIdQuery, SingleBranchEmployeeByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<SingleBranchEmployeeByIdQuery, SingleBranchEmployeeByIdQueryVariables>(SingleBranchEmployeeByIdDocument, options);
      }
export function useSingleBranchEmployeeByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SingleBranchEmployeeByIdQuery, SingleBranchEmployeeByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<SingleBranchEmployeeByIdQuery, SingleBranchEmployeeByIdQueryVariables>(SingleBranchEmployeeByIdDocument, options);
        }
export type SingleBranchEmployeeByIdQueryHookResult = ReturnType<typeof useSingleBranchEmployeeByIdQuery>;
export type SingleBranchEmployeeByIdLazyQueryHookResult = ReturnType<typeof useSingleBranchEmployeeByIdLazyQuery>;
export type SingleBranchEmployeeByIdQueryResult = Apollo.QueryResult<SingleBranchEmployeeByIdQuery, SingleBranchEmployeeByIdQueryVariables>;
export const SingleBranchEmployeeByEmployeeIdAndBranchIdDocument = gql`
    query SingleBranchEmployeeByEmployeeIdAndBranchId($employeeId: String!, $branchId: String!) {
  branchEmployeeByEmplIdAndBranchId(employeeId: $employeeId, branchId: $branchId) {
    ...BranchEmployeeFragment
  }
}
    ${BranchEmployeeFragmentFragmentDoc}`;
export type SingleBranchEmployeeByEmployeeIdAndBranchIdComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SingleBranchEmployeeByEmployeeIdAndBranchIdQuery, SingleBranchEmployeeByEmployeeIdAndBranchIdQueryVariables>, 'query'> & ({ variables: SingleBranchEmployeeByEmployeeIdAndBranchIdQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SingleBranchEmployeeByEmployeeIdAndBranchIdComponent = (props: SingleBranchEmployeeByEmployeeIdAndBranchIdComponentProps) => (
      <ApolloReactComponents.Query<SingleBranchEmployeeByEmployeeIdAndBranchIdQuery, SingleBranchEmployeeByEmployeeIdAndBranchIdQueryVariables> query={SingleBranchEmployeeByEmployeeIdAndBranchIdDocument} {...props} />
    );
    
export type SingleBranchEmployeeByEmployeeIdAndBranchIdProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SingleBranchEmployeeByEmployeeIdAndBranchIdQuery, SingleBranchEmployeeByEmployeeIdAndBranchIdQueryVariables>
    } & TChildProps;
export function withSingleBranchEmployeeByEmployeeIdAndBranchId<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SingleBranchEmployeeByEmployeeIdAndBranchIdQuery,
  SingleBranchEmployeeByEmployeeIdAndBranchIdQueryVariables,
  SingleBranchEmployeeByEmployeeIdAndBranchIdProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SingleBranchEmployeeByEmployeeIdAndBranchIdQuery, SingleBranchEmployeeByEmployeeIdAndBranchIdQueryVariables, SingleBranchEmployeeByEmployeeIdAndBranchIdProps<TChildProps, TDataName>>(SingleBranchEmployeeByEmployeeIdAndBranchIdDocument, {
      alias: 'singleBranchEmployeeByEmployeeIdAndBranchId',
      ...operationOptions
    });
};

/**
 * __useSingleBranchEmployeeByEmployeeIdAndBranchIdQuery__
 *
 * To run a query within a React component, call `useSingleBranchEmployeeByEmployeeIdAndBranchIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleBranchEmployeeByEmployeeIdAndBranchIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleBranchEmployeeByEmployeeIdAndBranchIdQuery({
 *   variables: {
 *      employeeId: // value for 'employeeId'
 *      branchId: // value for 'branchId'
 *   },
 * });
 */
export function useSingleBranchEmployeeByEmployeeIdAndBranchIdQuery(baseOptions: ApolloReactHooks.QueryHookOptions<SingleBranchEmployeeByEmployeeIdAndBranchIdQuery, SingleBranchEmployeeByEmployeeIdAndBranchIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<SingleBranchEmployeeByEmployeeIdAndBranchIdQuery, SingleBranchEmployeeByEmployeeIdAndBranchIdQueryVariables>(SingleBranchEmployeeByEmployeeIdAndBranchIdDocument, options);
      }
export function useSingleBranchEmployeeByEmployeeIdAndBranchIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SingleBranchEmployeeByEmployeeIdAndBranchIdQuery, SingleBranchEmployeeByEmployeeIdAndBranchIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<SingleBranchEmployeeByEmployeeIdAndBranchIdQuery, SingleBranchEmployeeByEmployeeIdAndBranchIdQueryVariables>(SingleBranchEmployeeByEmployeeIdAndBranchIdDocument, options);
        }
export type SingleBranchEmployeeByEmployeeIdAndBranchIdQueryHookResult = ReturnType<typeof useSingleBranchEmployeeByEmployeeIdAndBranchIdQuery>;
export type SingleBranchEmployeeByEmployeeIdAndBranchIdLazyQueryHookResult = ReturnType<typeof useSingleBranchEmployeeByEmployeeIdAndBranchIdLazyQuery>;
export type SingleBranchEmployeeByEmployeeIdAndBranchIdQueryResult = Apollo.QueryResult<SingleBranchEmployeeByEmployeeIdAndBranchIdQuery, SingleBranchEmployeeByEmployeeIdAndBranchIdQueryVariables>;
export const AllCartsDocument = gql`
    query AllCarts {
  carts {
    ...CartFragment
  }
}
    ${CartFragmentFragmentDoc}`;
export type AllCartsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllCartsQuery, AllCartsQueryVariables>, 'query'>;

    export const AllCartsComponent = (props: AllCartsComponentProps) => (
      <ApolloReactComponents.Query<AllCartsQuery, AllCartsQueryVariables> query={AllCartsDocument} {...props} />
    );
    
export type AllCartsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<AllCartsQuery, AllCartsQueryVariables>
    } & TChildProps;
export function withAllCarts<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AllCartsQuery,
  AllCartsQueryVariables,
  AllCartsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, AllCartsQuery, AllCartsQueryVariables, AllCartsProps<TChildProps, TDataName>>(AllCartsDocument, {
      alias: 'allCarts',
      ...operationOptions
    });
};

/**
 * __useAllCartsQuery__
 *
 * To run a query within a React component, call `useAllCartsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllCartsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllCartsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllCartsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllCartsQuery, AllCartsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<AllCartsQuery, AllCartsQueryVariables>(AllCartsDocument, options);
      }
export function useAllCartsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllCartsQuery, AllCartsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<AllCartsQuery, AllCartsQueryVariables>(AllCartsDocument, options);
        }
export type AllCartsQueryHookResult = ReturnType<typeof useAllCartsQuery>;
export type AllCartsLazyQueryHookResult = ReturnType<typeof useAllCartsLazyQuery>;
export type AllCartsQueryResult = Apollo.QueryResult<AllCartsQuery, AllCartsQueryVariables>;
export const SingleCartDocument = gql`
    query SingleCart($where: CartWhereUniqueInput!) {
  cart(where: $where) {
    ...CartFragment
  }
}
    ${CartFragmentFragmentDoc}`;
export type SingleCartComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SingleCartQuery, SingleCartQueryVariables>, 'query'> & ({ variables: SingleCartQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SingleCartComponent = (props: SingleCartComponentProps) => (
      <ApolloReactComponents.Query<SingleCartQuery, SingleCartQueryVariables> query={SingleCartDocument} {...props} />
    );
    
export type SingleCartProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SingleCartQuery, SingleCartQueryVariables>
    } & TChildProps;
export function withSingleCart<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SingleCartQuery,
  SingleCartQueryVariables,
  SingleCartProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SingleCartQuery, SingleCartQueryVariables, SingleCartProps<TChildProps, TDataName>>(SingleCartDocument, {
      alias: 'singleCart',
      ...operationOptions
    });
};

/**
 * __useSingleCartQuery__
 *
 * To run a query within a React component, call `useSingleCartQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleCartQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleCartQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useSingleCartQuery(baseOptions: ApolloReactHooks.QueryHookOptions<SingleCartQuery, SingleCartQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<SingleCartQuery, SingleCartQueryVariables>(SingleCartDocument, options);
      }
export function useSingleCartLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SingleCartQuery, SingleCartQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<SingleCartQuery, SingleCartQueryVariables>(SingleCartDocument, options);
        }
export type SingleCartQueryHookResult = ReturnType<typeof useSingleCartQuery>;
export type SingleCartLazyQueryHookResult = ReturnType<typeof useSingleCartLazyQuery>;
export type SingleCartQueryResult = Apollo.QueryResult<SingleCartQuery, SingleCartQueryVariables>;
export const SingleCartByIdDocument = gql`
    query SingleCartById($id: String!) {
  cartById(id: $id) {
    ...CartFragment
  }
}
    ${CartFragmentFragmentDoc}`;
export type SingleCartByIdComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SingleCartByIdQuery, SingleCartByIdQueryVariables>, 'query'> & ({ variables: SingleCartByIdQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SingleCartByIdComponent = (props: SingleCartByIdComponentProps) => (
      <ApolloReactComponents.Query<SingleCartByIdQuery, SingleCartByIdQueryVariables> query={SingleCartByIdDocument} {...props} />
    );
    
export type SingleCartByIdProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SingleCartByIdQuery, SingleCartByIdQueryVariables>
    } & TChildProps;
export function withSingleCartById<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SingleCartByIdQuery,
  SingleCartByIdQueryVariables,
  SingleCartByIdProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SingleCartByIdQuery, SingleCartByIdQueryVariables, SingleCartByIdProps<TChildProps, TDataName>>(SingleCartByIdDocument, {
      alias: 'singleCartById',
      ...operationOptions
    });
};

/**
 * __useSingleCartByIdQuery__
 *
 * To run a query within a React component, call `useSingleCartByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleCartByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleCartByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSingleCartByIdQuery(baseOptions: ApolloReactHooks.QueryHookOptions<SingleCartByIdQuery, SingleCartByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<SingleCartByIdQuery, SingleCartByIdQueryVariables>(SingleCartByIdDocument, options);
      }
export function useSingleCartByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SingleCartByIdQuery, SingleCartByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<SingleCartByIdQuery, SingleCartByIdQueryVariables>(SingleCartByIdDocument, options);
        }
export type SingleCartByIdQueryHookResult = ReturnType<typeof useSingleCartByIdQuery>;
export type SingleCartByIdLazyQueryHookResult = ReturnType<typeof useSingleCartByIdLazyQuery>;
export type SingleCartByIdQueryResult = Apollo.QueryResult<SingleCartByIdQuery, SingleCartByIdQueryVariables>;
export const CartByAnnualClientIdAndEmployeeIdDocument = gql`
    query cartByAnnualClientIdAndEmployeeId($annualClientId: String!, $annualBranchEmployeeId: String!) {
  cartByAnnualClientIdAndEmplId(
    annualClientId: $annualClientId
    annualBranchEmployeeId: $annualBranchEmployeeId
  ) {
    ...CartFragment
  }
}
    ${CartFragmentFragmentDoc}`;
export type CartByAnnualClientIdAndEmployeeIdComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CartByAnnualClientIdAndEmployeeIdQuery, CartByAnnualClientIdAndEmployeeIdQueryVariables>, 'query'> & ({ variables: CartByAnnualClientIdAndEmployeeIdQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const CartByAnnualClientIdAndEmployeeIdComponent = (props: CartByAnnualClientIdAndEmployeeIdComponentProps) => (
      <ApolloReactComponents.Query<CartByAnnualClientIdAndEmployeeIdQuery, CartByAnnualClientIdAndEmployeeIdQueryVariables> query={CartByAnnualClientIdAndEmployeeIdDocument} {...props} />
    );
    
export type CartByAnnualClientIdAndEmployeeIdProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<CartByAnnualClientIdAndEmployeeIdQuery, CartByAnnualClientIdAndEmployeeIdQueryVariables>
    } & TChildProps;
export function withCartByAnnualClientIdAndEmployeeId<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CartByAnnualClientIdAndEmployeeIdQuery,
  CartByAnnualClientIdAndEmployeeIdQueryVariables,
  CartByAnnualClientIdAndEmployeeIdProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, CartByAnnualClientIdAndEmployeeIdQuery, CartByAnnualClientIdAndEmployeeIdQueryVariables, CartByAnnualClientIdAndEmployeeIdProps<TChildProps, TDataName>>(CartByAnnualClientIdAndEmployeeIdDocument, {
      alias: 'cartByAnnualClientIdAndEmployeeId',
      ...operationOptions
    });
};

/**
 * __useCartByAnnualClientIdAndEmployeeIdQuery__
 *
 * To run a query within a React component, call `useCartByAnnualClientIdAndEmployeeIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useCartByAnnualClientIdAndEmployeeIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCartByAnnualClientIdAndEmployeeIdQuery({
 *   variables: {
 *      annualClientId: // value for 'annualClientId'
 *      annualBranchEmployeeId: // value for 'annualBranchEmployeeId'
 *   },
 * });
 */
export function useCartByAnnualClientIdAndEmployeeIdQuery(baseOptions: ApolloReactHooks.QueryHookOptions<CartByAnnualClientIdAndEmployeeIdQuery, CartByAnnualClientIdAndEmployeeIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<CartByAnnualClientIdAndEmployeeIdQuery, CartByAnnualClientIdAndEmployeeIdQueryVariables>(CartByAnnualClientIdAndEmployeeIdDocument, options);
      }
export function useCartByAnnualClientIdAndEmployeeIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CartByAnnualClientIdAndEmployeeIdQuery, CartByAnnualClientIdAndEmployeeIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<CartByAnnualClientIdAndEmployeeIdQuery, CartByAnnualClientIdAndEmployeeIdQueryVariables>(CartByAnnualClientIdAndEmployeeIdDocument, options);
        }
export type CartByAnnualClientIdAndEmployeeIdQueryHookResult = ReturnType<typeof useCartByAnnualClientIdAndEmployeeIdQuery>;
export type CartByAnnualClientIdAndEmployeeIdLazyQueryHookResult = ReturnType<typeof useCartByAnnualClientIdAndEmployeeIdLazyQuery>;
export type CartByAnnualClientIdAndEmployeeIdQueryResult = Apollo.QueryResult<CartByAnnualClientIdAndEmployeeIdQuery, CartByAnnualClientIdAndEmployeeIdQueryVariables>;
export const AllCategoriesDocument = gql`
    query AllCategories {
  categories {
    ...CategoryFragment
  }
}
    ${CategoryFragmentFragmentDoc}`;
export type AllCategoriesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllCategoriesQuery, AllCategoriesQueryVariables>, 'query'>;

    export const AllCategoriesComponent = (props: AllCategoriesComponentProps) => (
      <ApolloReactComponents.Query<AllCategoriesQuery, AllCategoriesQueryVariables> query={AllCategoriesDocument} {...props} />
    );
    
export type AllCategoriesProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<AllCategoriesQuery, AllCategoriesQueryVariables>
    } & TChildProps;
export function withAllCategories<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AllCategoriesQuery,
  AllCategoriesQueryVariables,
  AllCategoriesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, AllCategoriesQuery, AllCategoriesQueryVariables, AllCategoriesProps<TChildProps, TDataName>>(AllCategoriesDocument, {
      alias: 'allCategories',
      ...operationOptions
    });
};

/**
 * __useAllCategoriesQuery__
 *
 * To run a query within a React component, call `useAllCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllCategoriesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllCategoriesQuery, AllCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<AllCategoriesQuery, AllCategoriesQueryVariables>(AllCategoriesDocument, options);
      }
export function useAllCategoriesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllCategoriesQuery, AllCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<AllCategoriesQuery, AllCategoriesQueryVariables>(AllCategoriesDocument, options);
        }
export type AllCategoriesQueryHookResult = ReturnType<typeof useAllCategoriesQuery>;
export type AllCategoriesLazyQueryHookResult = ReturnType<typeof useAllCategoriesLazyQuery>;
export type AllCategoriesQueryResult = Apollo.QueryResult<AllCategoriesQuery, AllCategoriesQueryVariables>;
export const SingleCategoryDocument = gql`
    query SingleCategory($where: CategoryWhereUniqueInput!) {
  category(where: $where) {
    ...CategoryFragment
  }
}
    ${CategoryFragmentFragmentDoc}`;
export type SingleCategoryComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SingleCategoryQuery, SingleCategoryQueryVariables>, 'query'> & ({ variables: SingleCategoryQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SingleCategoryComponent = (props: SingleCategoryComponentProps) => (
      <ApolloReactComponents.Query<SingleCategoryQuery, SingleCategoryQueryVariables> query={SingleCategoryDocument} {...props} />
    );
    
export type SingleCategoryProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SingleCategoryQuery, SingleCategoryQueryVariables>
    } & TChildProps;
export function withSingleCategory<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SingleCategoryQuery,
  SingleCategoryQueryVariables,
  SingleCategoryProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SingleCategoryQuery, SingleCategoryQueryVariables, SingleCategoryProps<TChildProps, TDataName>>(SingleCategoryDocument, {
      alias: 'singleCategory',
      ...operationOptions
    });
};

/**
 * __useSingleCategoryQuery__
 *
 * To run a query within a React component, call `useSingleCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleCategoryQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useSingleCategoryQuery(baseOptions: ApolloReactHooks.QueryHookOptions<SingleCategoryQuery, SingleCategoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<SingleCategoryQuery, SingleCategoryQueryVariables>(SingleCategoryDocument, options);
      }
export function useSingleCategoryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SingleCategoryQuery, SingleCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<SingleCategoryQuery, SingleCategoryQueryVariables>(SingleCategoryDocument, options);
        }
export type SingleCategoryQueryHookResult = ReturnType<typeof useSingleCategoryQuery>;
export type SingleCategoryLazyQueryHookResult = ReturnType<typeof useSingleCategoryLazyQuery>;
export type SingleCategoryQueryResult = Apollo.QueryResult<SingleCategoryQuery, SingleCategoryQueryVariables>;
export const SingleCategoryByIdDocument = gql`
    query SingleCategoryById($id: String!) {
  categoryById(id: $id) {
    ...CategoryFragment
  }
}
    ${CategoryFragmentFragmentDoc}`;
export type SingleCategoryByIdComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SingleCategoryByIdQuery, SingleCategoryByIdQueryVariables>, 'query'> & ({ variables: SingleCategoryByIdQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SingleCategoryByIdComponent = (props: SingleCategoryByIdComponentProps) => (
      <ApolloReactComponents.Query<SingleCategoryByIdQuery, SingleCategoryByIdQueryVariables> query={SingleCategoryByIdDocument} {...props} />
    );
    
export type SingleCategoryByIdProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SingleCategoryByIdQuery, SingleCategoryByIdQueryVariables>
    } & TChildProps;
export function withSingleCategoryById<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SingleCategoryByIdQuery,
  SingleCategoryByIdQueryVariables,
  SingleCategoryByIdProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SingleCategoryByIdQuery, SingleCategoryByIdQueryVariables, SingleCategoryByIdProps<TChildProps, TDataName>>(SingleCategoryByIdDocument, {
      alias: 'singleCategoryById',
      ...operationOptions
    });
};

/**
 * __useSingleCategoryByIdQuery__
 *
 * To run a query within a React component, call `useSingleCategoryByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleCategoryByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleCategoryByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSingleCategoryByIdQuery(baseOptions: ApolloReactHooks.QueryHookOptions<SingleCategoryByIdQuery, SingleCategoryByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<SingleCategoryByIdQuery, SingleCategoryByIdQueryVariables>(SingleCategoryByIdDocument, options);
      }
export function useSingleCategoryByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SingleCategoryByIdQuery, SingleCategoryByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<SingleCategoryByIdQuery, SingleCategoryByIdQueryVariables>(SingleCategoryByIdDocument, options);
        }
export type SingleCategoryByIdQueryHookResult = ReturnType<typeof useSingleCategoryByIdQuery>;
export type SingleCategoryByIdLazyQueryHookResult = ReturnType<typeof useSingleCategoryByIdLazyQuery>;
export type SingleCategoryByIdQueryResult = Apollo.QueryResult<SingleCategoryByIdQuery, SingleCategoryByIdQueryVariables>;
export const AllClientsDocument = gql`
    query AllClients {
  clients {
    ...ClientFragment
  }
}
    ${ClientFragmentFragmentDoc}`;
export type AllClientsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllClientsQuery, AllClientsQueryVariables>, 'query'>;

    export const AllClientsComponent = (props: AllClientsComponentProps) => (
      <ApolloReactComponents.Query<AllClientsQuery, AllClientsQueryVariables> query={AllClientsDocument} {...props} />
    );
    
export type AllClientsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<AllClientsQuery, AllClientsQueryVariables>
    } & TChildProps;
export function withAllClients<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AllClientsQuery,
  AllClientsQueryVariables,
  AllClientsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, AllClientsQuery, AllClientsQueryVariables, AllClientsProps<TChildProps, TDataName>>(AllClientsDocument, {
      alias: 'allClients',
      ...operationOptions
    });
};

/**
 * __useAllClientsQuery__
 *
 * To run a query within a React component, call `useAllClientsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllClientsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllClientsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllClientsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllClientsQuery, AllClientsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<AllClientsQuery, AllClientsQueryVariables>(AllClientsDocument, options);
      }
export function useAllClientsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllClientsQuery, AllClientsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<AllClientsQuery, AllClientsQueryVariables>(AllClientsDocument, options);
        }
export type AllClientsQueryHookResult = ReturnType<typeof useAllClientsQuery>;
export type AllClientsLazyQueryHookResult = ReturnType<typeof useAllClientsLazyQuery>;
export type AllClientsQueryResult = Apollo.QueryResult<AllClientsQuery, AllClientsQueryVariables>;
export const SingleClientDocument = gql`
    query SingleClient($where: ClientWhereUniqueInput!) {
  client(where: $where) {
    ...ClientFragment
  }
}
    ${ClientFragmentFragmentDoc}`;
export type SingleClientComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SingleClientQuery, SingleClientQueryVariables>, 'query'> & ({ variables: SingleClientQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SingleClientComponent = (props: SingleClientComponentProps) => (
      <ApolloReactComponents.Query<SingleClientQuery, SingleClientQueryVariables> query={SingleClientDocument} {...props} />
    );
    
export type SingleClientProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SingleClientQuery, SingleClientQueryVariables>
    } & TChildProps;
export function withSingleClient<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SingleClientQuery,
  SingleClientQueryVariables,
  SingleClientProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SingleClientQuery, SingleClientQueryVariables, SingleClientProps<TChildProps, TDataName>>(SingleClientDocument, {
      alias: 'singleClient',
      ...operationOptions
    });
};

/**
 * __useSingleClientQuery__
 *
 * To run a query within a React component, call `useSingleClientQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleClientQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleClientQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useSingleClientQuery(baseOptions: ApolloReactHooks.QueryHookOptions<SingleClientQuery, SingleClientQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<SingleClientQuery, SingleClientQueryVariables>(SingleClientDocument, options);
      }
export function useSingleClientLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SingleClientQuery, SingleClientQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<SingleClientQuery, SingleClientQueryVariables>(SingleClientDocument, options);
        }
export type SingleClientQueryHookResult = ReturnType<typeof useSingleClientQuery>;
export type SingleClientLazyQueryHookResult = ReturnType<typeof useSingleClientLazyQuery>;
export type SingleClientQueryResult = Apollo.QueryResult<SingleClientQuery, SingleClientQueryVariables>;
export const SingleClientByPhoneNumberDocument = gql`
    query SingleClientByPhoneNumber($clientPhoneNumb: Int!) {
  clientByPhoneNumber(clientPhoneNumb: $clientPhoneNumb) {
    ...ClientFragment
  }
}
    ${ClientFragmentFragmentDoc}`;
export type SingleClientByPhoneNumberComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SingleClientByPhoneNumberQuery, SingleClientByPhoneNumberQueryVariables>, 'query'> & ({ variables: SingleClientByPhoneNumberQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SingleClientByPhoneNumberComponent = (props: SingleClientByPhoneNumberComponentProps) => (
      <ApolloReactComponents.Query<SingleClientByPhoneNumberQuery, SingleClientByPhoneNumberQueryVariables> query={SingleClientByPhoneNumberDocument} {...props} />
    );
    
export type SingleClientByPhoneNumberProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SingleClientByPhoneNumberQuery, SingleClientByPhoneNumberQueryVariables>
    } & TChildProps;
export function withSingleClientByPhoneNumber<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SingleClientByPhoneNumberQuery,
  SingleClientByPhoneNumberQueryVariables,
  SingleClientByPhoneNumberProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SingleClientByPhoneNumberQuery, SingleClientByPhoneNumberQueryVariables, SingleClientByPhoneNumberProps<TChildProps, TDataName>>(SingleClientByPhoneNumberDocument, {
      alias: 'singleClientByPhoneNumber',
      ...operationOptions
    });
};

/**
 * __useSingleClientByPhoneNumberQuery__
 *
 * To run a query within a React component, call `useSingleClientByPhoneNumberQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleClientByPhoneNumberQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleClientByPhoneNumberQuery({
 *   variables: {
 *      clientPhoneNumb: // value for 'clientPhoneNumb'
 *   },
 * });
 */
export function useSingleClientByPhoneNumberQuery(baseOptions: ApolloReactHooks.QueryHookOptions<SingleClientByPhoneNumberQuery, SingleClientByPhoneNumberQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<SingleClientByPhoneNumberQuery, SingleClientByPhoneNumberQueryVariables>(SingleClientByPhoneNumberDocument, options);
      }
export function useSingleClientByPhoneNumberLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SingleClientByPhoneNumberQuery, SingleClientByPhoneNumberQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<SingleClientByPhoneNumberQuery, SingleClientByPhoneNumberQueryVariables>(SingleClientByPhoneNumberDocument, options);
        }
export type SingleClientByPhoneNumberQueryHookResult = ReturnType<typeof useSingleClientByPhoneNumberQuery>;
export type SingleClientByPhoneNumberLazyQueryHookResult = ReturnType<typeof useSingleClientByPhoneNumberLazyQuery>;
export type SingleClientByPhoneNumberQueryResult = Apollo.QueryResult<SingleClientByPhoneNumberQuery, SingleClientByPhoneNumberQueryVariables>;
export const SingleClientByIdDocument = gql`
    query SingleClientById($id: String!) {
  clientById(id: $id) {
    ...ClientFragment
  }
}
    ${ClientFragmentFragmentDoc}`;
export type SingleClientByIdComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SingleClientByIdQuery, SingleClientByIdQueryVariables>, 'query'> & ({ variables: SingleClientByIdQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SingleClientByIdComponent = (props: SingleClientByIdComponentProps) => (
      <ApolloReactComponents.Query<SingleClientByIdQuery, SingleClientByIdQueryVariables> query={SingleClientByIdDocument} {...props} />
    );
    
export type SingleClientByIdProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SingleClientByIdQuery, SingleClientByIdQueryVariables>
    } & TChildProps;
export function withSingleClientById<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SingleClientByIdQuery,
  SingleClientByIdQueryVariables,
  SingleClientByIdProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SingleClientByIdQuery, SingleClientByIdQueryVariables, SingleClientByIdProps<TChildProps, TDataName>>(SingleClientByIdDocument, {
      alias: 'singleClientById',
      ...operationOptions
    });
};

/**
 * __useSingleClientByIdQuery__
 *
 * To run a query within a React component, call `useSingleClientByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleClientByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleClientByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSingleClientByIdQuery(baseOptions: ApolloReactHooks.QueryHookOptions<SingleClientByIdQuery, SingleClientByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<SingleClientByIdQuery, SingleClientByIdQueryVariables>(SingleClientByIdDocument, options);
      }
export function useSingleClientByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SingleClientByIdQuery, SingleClientByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<SingleClientByIdQuery, SingleClientByIdQueryVariables>(SingleClientByIdDocument, options);
        }
export type SingleClientByIdQueryHookResult = ReturnType<typeof useSingleClientByIdQuery>;
export type SingleClientByIdLazyQueryHookResult = ReturnType<typeof useSingleClientByIdLazyQuery>;
export type SingleClientByIdQueryResult = Apollo.QueryResult<SingleClientByIdQuery, SingleClientByIdQueryVariables>;
export const AllEmployeesDocument = gql`
    query AllEmployees {
  employees {
    ...EmployeeFragment
  }
}
    ${EmployeeFragmentFragmentDoc}`;
export type AllEmployeesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllEmployeesQuery, AllEmployeesQueryVariables>, 'query'>;

    export const AllEmployeesComponent = (props: AllEmployeesComponentProps) => (
      <ApolloReactComponents.Query<AllEmployeesQuery, AllEmployeesQueryVariables> query={AllEmployeesDocument} {...props} />
    );
    
export type AllEmployeesProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<AllEmployeesQuery, AllEmployeesQueryVariables>
    } & TChildProps;
export function withAllEmployees<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AllEmployeesQuery,
  AllEmployeesQueryVariables,
  AllEmployeesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, AllEmployeesQuery, AllEmployeesQueryVariables, AllEmployeesProps<TChildProps, TDataName>>(AllEmployeesDocument, {
      alias: 'allEmployees',
      ...operationOptions
    });
};

/**
 * __useAllEmployeesQuery__
 *
 * To run a query within a React component, call `useAllEmployeesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllEmployeesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllEmployeesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllEmployeesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllEmployeesQuery, AllEmployeesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<AllEmployeesQuery, AllEmployeesQueryVariables>(AllEmployeesDocument, options);
      }
export function useAllEmployeesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllEmployeesQuery, AllEmployeesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<AllEmployeesQuery, AllEmployeesQueryVariables>(AllEmployeesDocument, options);
        }
export type AllEmployeesQueryHookResult = ReturnType<typeof useAllEmployeesQuery>;
export type AllEmployeesLazyQueryHookResult = ReturnType<typeof useAllEmployeesLazyQuery>;
export type AllEmployeesQueryResult = Apollo.QueryResult<AllEmployeesQuery, AllEmployeesQueryVariables>;
export const SingleEmployeeDocument = gql`
    query SingleEmployee($where: EmployeeWhereUniqueInput!) {
  employee(where: $where) {
    ...EmployeeFragment
  }
}
    ${EmployeeFragmentFragmentDoc}`;
export type SingleEmployeeComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SingleEmployeeQuery, SingleEmployeeQueryVariables>, 'query'> & ({ variables: SingleEmployeeQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SingleEmployeeComponent = (props: SingleEmployeeComponentProps) => (
      <ApolloReactComponents.Query<SingleEmployeeQuery, SingleEmployeeQueryVariables> query={SingleEmployeeDocument} {...props} />
    );
    
export type SingleEmployeeProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SingleEmployeeQuery, SingleEmployeeQueryVariables>
    } & TChildProps;
export function withSingleEmployee<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SingleEmployeeQuery,
  SingleEmployeeQueryVariables,
  SingleEmployeeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SingleEmployeeQuery, SingleEmployeeQueryVariables, SingleEmployeeProps<TChildProps, TDataName>>(SingleEmployeeDocument, {
      alias: 'singleEmployee',
      ...operationOptions
    });
};

/**
 * __useSingleEmployeeQuery__
 *
 * To run a query within a React component, call `useSingleEmployeeQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleEmployeeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleEmployeeQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useSingleEmployeeQuery(baseOptions: ApolloReactHooks.QueryHookOptions<SingleEmployeeQuery, SingleEmployeeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<SingleEmployeeQuery, SingleEmployeeQueryVariables>(SingleEmployeeDocument, options);
      }
export function useSingleEmployeeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SingleEmployeeQuery, SingleEmployeeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<SingleEmployeeQuery, SingleEmployeeQueryVariables>(SingleEmployeeDocument, options);
        }
export type SingleEmployeeQueryHookResult = ReturnType<typeof useSingleEmployeeQuery>;
export type SingleEmployeeLazyQueryHookResult = ReturnType<typeof useSingleEmployeeLazyQuery>;
export type SingleEmployeeQueryResult = Apollo.QueryResult<SingleEmployeeQuery, SingleEmployeeQueryVariables>;
export const SingleEmployeeByIdDocument = gql`
    query SingleEmployeeById($id: String!) {
  employeeById(id: $id) {
    ...EmployeeFragment
  }
}
    ${EmployeeFragmentFragmentDoc}`;
export type SingleEmployeeByIdComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SingleEmployeeByIdQuery, SingleEmployeeByIdQueryVariables>, 'query'> & ({ variables: SingleEmployeeByIdQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SingleEmployeeByIdComponent = (props: SingleEmployeeByIdComponentProps) => (
      <ApolloReactComponents.Query<SingleEmployeeByIdQuery, SingleEmployeeByIdQueryVariables> query={SingleEmployeeByIdDocument} {...props} />
    );
    
export type SingleEmployeeByIdProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SingleEmployeeByIdQuery, SingleEmployeeByIdQueryVariables>
    } & TChildProps;
export function withSingleEmployeeById<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SingleEmployeeByIdQuery,
  SingleEmployeeByIdQueryVariables,
  SingleEmployeeByIdProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SingleEmployeeByIdQuery, SingleEmployeeByIdQueryVariables, SingleEmployeeByIdProps<TChildProps, TDataName>>(SingleEmployeeByIdDocument, {
      alias: 'singleEmployeeById',
      ...operationOptions
    });
};

/**
 * __useSingleEmployeeByIdQuery__
 *
 * To run a query within a React component, call `useSingleEmployeeByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleEmployeeByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleEmployeeByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSingleEmployeeByIdQuery(baseOptions: ApolloReactHooks.QueryHookOptions<SingleEmployeeByIdQuery, SingleEmployeeByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<SingleEmployeeByIdQuery, SingleEmployeeByIdQueryVariables>(SingleEmployeeByIdDocument, options);
      }
export function useSingleEmployeeByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SingleEmployeeByIdQuery, SingleEmployeeByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<SingleEmployeeByIdQuery, SingleEmployeeByIdQueryVariables>(SingleEmployeeByIdDocument, options);
        }
export type SingleEmployeeByIdQueryHookResult = ReturnType<typeof useSingleEmployeeByIdQuery>;
export type SingleEmployeeByIdLazyQueryHookResult = ReturnType<typeof useSingleEmployeeByIdLazyQuery>;
export type SingleEmployeeByIdQueryResult = Apollo.QueryResult<SingleEmployeeByIdQuery, SingleEmployeeByIdQueryVariables>;
export const SingleEmployeeByPhoneNumberDocument = gql`
    query SingleEmployeeByPhoneNumber($employeePhoneNumb: Int!) {
  employeeByPhoneNumber(employeePhoneNumb: $employeePhoneNumb) {
    ...EmployeeFragment
  }
}
    ${EmployeeFragmentFragmentDoc}`;
export type SingleEmployeeByPhoneNumberComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SingleEmployeeByPhoneNumberQuery, SingleEmployeeByPhoneNumberQueryVariables>, 'query'> & ({ variables: SingleEmployeeByPhoneNumberQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SingleEmployeeByPhoneNumberComponent = (props: SingleEmployeeByPhoneNumberComponentProps) => (
      <ApolloReactComponents.Query<SingleEmployeeByPhoneNumberQuery, SingleEmployeeByPhoneNumberQueryVariables> query={SingleEmployeeByPhoneNumberDocument} {...props} />
    );
    
export type SingleEmployeeByPhoneNumberProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SingleEmployeeByPhoneNumberQuery, SingleEmployeeByPhoneNumberQueryVariables>
    } & TChildProps;
export function withSingleEmployeeByPhoneNumber<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SingleEmployeeByPhoneNumberQuery,
  SingleEmployeeByPhoneNumberQueryVariables,
  SingleEmployeeByPhoneNumberProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SingleEmployeeByPhoneNumberQuery, SingleEmployeeByPhoneNumberQueryVariables, SingleEmployeeByPhoneNumberProps<TChildProps, TDataName>>(SingleEmployeeByPhoneNumberDocument, {
      alias: 'singleEmployeeByPhoneNumber',
      ...operationOptions
    });
};

/**
 * __useSingleEmployeeByPhoneNumberQuery__
 *
 * To run a query within a React component, call `useSingleEmployeeByPhoneNumberQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleEmployeeByPhoneNumberQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleEmployeeByPhoneNumberQuery({
 *   variables: {
 *      employeePhoneNumb: // value for 'employeePhoneNumb'
 *   },
 * });
 */
export function useSingleEmployeeByPhoneNumberQuery(baseOptions: ApolloReactHooks.QueryHookOptions<SingleEmployeeByPhoneNumberQuery, SingleEmployeeByPhoneNumberQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<SingleEmployeeByPhoneNumberQuery, SingleEmployeeByPhoneNumberQueryVariables>(SingleEmployeeByPhoneNumberDocument, options);
      }
export function useSingleEmployeeByPhoneNumberLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SingleEmployeeByPhoneNumberQuery, SingleEmployeeByPhoneNumberQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<SingleEmployeeByPhoneNumberQuery, SingleEmployeeByPhoneNumberQueryVariables>(SingleEmployeeByPhoneNumberDocument, options);
        }
export type SingleEmployeeByPhoneNumberQueryHookResult = ReturnType<typeof useSingleEmployeeByPhoneNumberQuery>;
export type SingleEmployeeByPhoneNumberLazyQueryHookResult = ReturnType<typeof useSingleEmployeeByPhoneNumberLazyQuery>;
export type SingleEmployeeByPhoneNumberQueryResult = Apollo.QueryResult<SingleEmployeeByPhoneNumberQuery, SingleEmployeeByPhoneNumberQueryVariables>;
export const SingleEmployeeByCodeDocument = gql`
    query SingleEmployeeByCode($employeeCode: String!) {
  employeeByCode(employeeCode: $employeeCode) {
    ...EmployeeFragment
  }
}
    ${EmployeeFragmentFragmentDoc}`;
export type SingleEmployeeByCodeComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SingleEmployeeByCodeQuery, SingleEmployeeByCodeQueryVariables>, 'query'> & ({ variables: SingleEmployeeByCodeQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SingleEmployeeByCodeComponent = (props: SingleEmployeeByCodeComponentProps) => (
      <ApolloReactComponents.Query<SingleEmployeeByCodeQuery, SingleEmployeeByCodeQueryVariables> query={SingleEmployeeByCodeDocument} {...props} />
    );
    
export type SingleEmployeeByCodeProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SingleEmployeeByCodeQuery, SingleEmployeeByCodeQueryVariables>
    } & TChildProps;
export function withSingleEmployeeByCode<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SingleEmployeeByCodeQuery,
  SingleEmployeeByCodeQueryVariables,
  SingleEmployeeByCodeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SingleEmployeeByCodeQuery, SingleEmployeeByCodeQueryVariables, SingleEmployeeByCodeProps<TChildProps, TDataName>>(SingleEmployeeByCodeDocument, {
      alias: 'singleEmployeeByCode',
      ...operationOptions
    });
};

/**
 * __useSingleEmployeeByCodeQuery__
 *
 * To run a query within a React component, call `useSingleEmployeeByCodeQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleEmployeeByCodeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleEmployeeByCodeQuery({
 *   variables: {
 *      employeeCode: // value for 'employeeCode'
 *   },
 * });
 */
export function useSingleEmployeeByCodeQuery(baseOptions: ApolloReactHooks.QueryHookOptions<SingleEmployeeByCodeQuery, SingleEmployeeByCodeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<SingleEmployeeByCodeQuery, SingleEmployeeByCodeQueryVariables>(SingleEmployeeByCodeDocument, options);
      }
export function useSingleEmployeeByCodeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SingleEmployeeByCodeQuery, SingleEmployeeByCodeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<SingleEmployeeByCodeQuery, SingleEmployeeByCodeQueryVariables>(SingleEmployeeByCodeDocument, options);
        }
export type SingleEmployeeByCodeQueryHookResult = ReturnType<typeof useSingleEmployeeByCodeQuery>;
export type SingleEmployeeByCodeLazyQueryHookResult = ReturnType<typeof useSingleEmployeeByCodeLazyQuery>;
export type SingleEmployeeByCodeQueryResult = Apollo.QueryResult<SingleEmployeeByCodeQuery, SingleEmployeeByCodeQueryVariables>;
export const AllEmployeeStatusesDocument = gql`
    query AllEmployeeStatuses {
  employeeStatuses {
    ...EmployeeStatusFragment
  }
}
    ${EmployeeStatusFragmentFragmentDoc}`;
export type AllEmployeeStatusesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllEmployeeStatusesQuery, AllEmployeeStatusesQueryVariables>, 'query'>;

    export const AllEmployeeStatusesComponent = (props: AllEmployeeStatusesComponentProps) => (
      <ApolloReactComponents.Query<AllEmployeeStatusesQuery, AllEmployeeStatusesQueryVariables> query={AllEmployeeStatusesDocument} {...props} />
    );
    
export type AllEmployeeStatusesProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<AllEmployeeStatusesQuery, AllEmployeeStatusesQueryVariables>
    } & TChildProps;
export function withAllEmployeeStatuses<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AllEmployeeStatusesQuery,
  AllEmployeeStatusesQueryVariables,
  AllEmployeeStatusesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, AllEmployeeStatusesQuery, AllEmployeeStatusesQueryVariables, AllEmployeeStatusesProps<TChildProps, TDataName>>(AllEmployeeStatusesDocument, {
      alias: 'allEmployeeStatuses',
      ...operationOptions
    });
};

/**
 * __useAllEmployeeStatusesQuery__
 *
 * To run a query within a React component, call `useAllEmployeeStatusesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllEmployeeStatusesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllEmployeeStatusesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllEmployeeStatusesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllEmployeeStatusesQuery, AllEmployeeStatusesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<AllEmployeeStatusesQuery, AllEmployeeStatusesQueryVariables>(AllEmployeeStatusesDocument, options);
      }
export function useAllEmployeeStatusesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllEmployeeStatusesQuery, AllEmployeeStatusesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<AllEmployeeStatusesQuery, AllEmployeeStatusesQueryVariables>(AllEmployeeStatusesDocument, options);
        }
export type AllEmployeeStatusesQueryHookResult = ReturnType<typeof useAllEmployeeStatusesQuery>;
export type AllEmployeeStatusesLazyQueryHookResult = ReturnType<typeof useAllEmployeeStatusesLazyQuery>;
export type AllEmployeeStatusesQueryResult = Apollo.QueryResult<AllEmployeeStatusesQuery, AllEmployeeStatusesQueryVariables>;
export const SingleEmployeeStatusDocument = gql`
    query SingleEmployeeStatus($where: EmployeeStatusWhereUniqueInput!) {
  employeeStatus(where: $where) {
    ...EmployeeStatusFragment
  }
}
    ${EmployeeStatusFragmentFragmentDoc}`;
export type SingleEmployeeStatusComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SingleEmployeeStatusQuery, SingleEmployeeStatusQueryVariables>, 'query'> & ({ variables: SingleEmployeeStatusQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SingleEmployeeStatusComponent = (props: SingleEmployeeStatusComponentProps) => (
      <ApolloReactComponents.Query<SingleEmployeeStatusQuery, SingleEmployeeStatusQueryVariables> query={SingleEmployeeStatusDocument} {...props} />
    );
    
export type SingleEmployeeStatusProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SingleEmployeeStatusQuery, SingleEmployeeStatusQueryVariables>
    } & TChildProps;
export function withSingleEmployeeStatus<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SingleEmployeeStatusQuery,
  SingleEmployeeStatusQueryVariables,
  SingleEmployeeStatusProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SingleEmployeeStatusQuery, SingleEmployeeStatusQueryVariables, SingleEmployeeStatusProps<TChildProps, TDataName>>(SingleEmployeeStatusDocument, {
      alias: 'singleEmployeeStatus',
      ...operationOptions
    });
};

/**
 * __useSingleEmployeeStatusQuery__
 *
 * To run a query within a React component, call `useSingleEmployeeStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleEmployeeStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleEmployeeStatusQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useSingleEmployeeStatusQuery(baseOptions: ApolloReactHooks.QueryHookOptions<SingleEmployeeStatusQuery, SingleEmployeeStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<SingleEmployeeStatusQuery, SingleEmployeeStatusQueryVariables>(SingleEmployeeStatusDocument, options);
      }
export function useSingleEmployeeStatusLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SingleEmployeeStatusQuery, SingleEmployeeStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<SingleEmployeeStatusQuery, SingleEmployeeStatusQueryVariables>(SingleEmployeeStatusDocument, options);
        }
export type SingleEmployeeStatusQueryHookResult = ReturnType<typeof useSingleEmployeeStatusQuery>;
export type SingleEmployeeStatusLazyQueryHookResult = ReturnType<typeof useSingleEmployeeStatusLazyQuery>;
export type SingleEmployeeStatusQueryResult = Apollo.QueryResult<SingleEmployeeStatusQuery, SingleEmployeeStatusQueryVariables>;
export const SingleEmployeeStatusByIdDocument = gql`
    query SingleEmployeeStatusById($id: String!) {
  employeeStatusById(id: $id) {
    ...EmployeeStatusFragment
  }
}
    ${EmployeeStatusFragmentFragmentDoc}`;
export type SingleEmployeeStatusByIdComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SingleEmployeeStatusByIdQuery, SingleEmployeeStatusByIdQueryVariables>, 'query'> & ({ variables: SingleEmployeeStatusByIdQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SingleEmployeeStatusByIdComponent = (props: SingleEmployeeStatusByIdComponentProps) => (
      <ApolloReactComponents.Query<SingleEmployeeStatusByIdQuery, SingleEmployeeStatusByIdQueryVariables> query={SingleEmployeeStatusByIdDocument} {...props} />
    );
    
export type SingleEmployeeStatusByIdProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SingleEmployeeStatusByIdQuery, SingleEmployeeStatusByIdQueryVariables>
    } & TChildProps;
export function withSingleEmployeeStatusById<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SingleEmployeeStatusByIdQuery,
  SingleEmployeeStatusByIdQueryVariables,
  SingleEmployeeStatusByIdProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SingleEmployeeStatusByIdQuery, SingleEmployeeStatusByIdQueryVariables, SingleEmployeeStatusByIdProps<TChildProps, TDataName>>(SingleEmployeeStatusByIdDocument, {
      alias: 'singleEmployeeStatusById',
      ...operationOptions
    });
};

/**
 * __useSingleEmployeeStatusByIdQuery__
 *
 * To run a query within a React component, call `useSingleEmployeeStatusByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleEmployeeStatusByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleEmployeeStatusByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSingleEmployeeStatusByIdQuery(baseOptions: ApolloReactHooks.QueryHookOptions<SingleEmployeeStatusByIdQuery, SingleEmployeeStatusByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<SingleEmployeeStatusByIdQuery, SingleEmployeeStatusByIdQueryVariables>(SingleEmployeeStatusByIdDocument, options);
      }
export function useSingleEmployeeStatusByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SingleEmployeeStatusByIdQuery, SingleEmployeeStatusByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<SingleEmployeeStatusByIdQuery, SingleEmployeeStatusByIdQueryVariables>(SingleEmployeeStatusByIdDocument, options);
        }
export type SingleEmployeeStatusByIdQueryHookResult = ReturnType<typeof useSingleEmployeeStatusByIdQuery>;
export type SingleEmployeeStatusByIdLazyQueryHookResult = ReturnType<typeof useSingleEmployeeStatusByIdLazyQuery>;
export type SingleEmployeeStatusByIdQueryResult = Apollo.QueryResult<SingleEmployeeStatusByIdQuery, SingleEmployeeStatusByIdQueryVariables>;
export const AllFinancesDocument = gql`
    query AllFinances {
  finances {
    ...FinanceFragment
  }
}
    ${FinanceFragmentFragmentDoc}`;
export type AllFinancesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllFinancesQuery, AllFinancesQueryVariables>, 'query'>;

    export const AllFinancesComponent = (props: AllFinancesComponentProps) => (
      <ApolloReactComponents.Query<AllFinancesQuery, AllFinancesQueryVariables> query={AllFinancesDocument} {...props} />
    );
    
export type AllFinancesProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<AllFinancesQuery, AllFinancesQueryVariables>
    } & TChildProps;
export function withAllFinances<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AllFinancesQuery,
  AllFinancesQueryVariables,
  AllFinancesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, AllFinancesQuery, AllFinancesQueryVariables, AllFinancesProps<TChildProps, TDataName>>(AllFinancesDocument, {
      alias: 'allFinances',
      ...operationOptions
    });
};

/**
 * __useAllFinancesQuery__
 *
 * To run a query within a React component, call `useAllFinancesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllFinancesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllFinancesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllFinancesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllFinancesQuery, AllFinancesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<AllFinancesQuery, AllFinancesQueryVariables>(AllFinancesDocument, options);
      }
export function useAllFinancesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllFinancesQuery, AllFinancesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<AllFinancesQuery, AllFinancesQueryVariables>(AllFinancesDocument, options);
        }
export type AllFinancesQueryHookResult = ReturnType<typeof useAllFinancesQuery>;
export type AllFinancesLazyQueryHookResult = ReturnType<typeof useAllFinancesLazyQuery>;
export type AllFinancesQueryResult = Apollo.QueryResult<AllFinancesQuery, AllFinancesQueryVariables>;
export const SingleFinanceDocument = gql`
    query SingleFinance($where: FinanceWhereUniqueInput!) {
  finance(where: $where) {
    ...FinanceFragment
  }
}
    ${FinanceFragmentFragmentDoc}`;
export type SingleFinanceComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SingleFinanceQuery, SingleFinanceQueryVariables>, 'query'> & ({ variables: SingleFinanceQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SingleFinanceComponent = (props: SingleFinanceComponentProps) => (
      <ApolloReactComponents.Query<SingleFinanceQuery, SingleFinanceQueryVariables> query={SingleFinanceDocument} {...props} />
    );
    
export type SingleFinanceProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SingleFinanceQuery, SingleFinanceQueryVariables>
    } & TChildProps;
export function withSingleFinance<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SingleFinanceQuery,
  SingleFinanceQueryVariables,
  SingleFinanceProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SingleFinanceQuery, SingleFinanceQueryVariables, SingleFinanceProps<TChildProps, TDataName>>(SingleFinanceDocument, {
      alias: 'singleFinance',
      ...operationOptions
    });
};

/**
 * __useSingleFinanceQuery__
 *
 * To run a query within a React component, call `useSingleFinanceQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleFinanceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleFinanceQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useSingleFinanceQuery(baseOptions: ApolloReactHooks.QueryHookOptions<SingleFinanceQuery, SingleFinanceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<SingleFinanceQuery, SingleFinanceQueryVariables>(SingleFinanceDocument, options);
      }
export function useSingleFinanceLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SingleFinanceQuery, SingleFinanceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<SingleFinanceQuery, SingleFinanceQueryVariables>(SingleFinanceDocument, options);
        }
export type SingleFinanceQueryHookResult = ReturnType<typeof useSingleFinanceQuery>;
export type SingleFinanceLazyQueryHookResult = ReturnType<typeof useSingleFinanceLazyQuery>;
export type SingleFinanceQueryResult = Apollo.QueryResult<SingleFinanceQuery, SingleFinanceQueryVariables>;
export const SingleFinanceByIdDocument = gql`
    query SingleFinanceById($id: String!) {
  financeById(id: $id) {
    ...FinanceFragment
  }
}
    ${FinanceFragmentFragmentDoc}`;
export type SingleFinanceByIdComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SingleFinanceByIdQuery, SingleFinanceByIdQueryVariables>, 'query'> & ({ variables: SingleFinanceByIdQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SingleFinanceByIdComponent = (props: SingleFinanceByIdComponentProps) => (
      <ApolloReactComponents.Query<SingleFinanceByIdQuery, SingleFinanceByIdQueryVariables> query={SingleFinanceByIdDocument} {...props} />
    );
    
export type SingleFinanceByIdProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SingleFinanceByIdQuery, SingleFinanceByIdQueryVariables>
    } & TChildProps;
export function withSingleFinanceById<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SingleFinanceByIdQuery,
  SingleFinanceByIdQueryVariables,
  SingleFinanceByIdProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SingleFinanceByIdQuery, SingleFinanceByIdQueryVariables, SingleFinanceByIdProps<TChildProps, TDataName>>(SingleFinanceByIdDocument, {
      alias: 'singleFinanceById',
      ...operationOptions
    });
};

/**
 * __useSingleFinanceByIdQuery__
 *
 * To run a query within a React component, call `useSingleFinanceByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleFinanceByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleFinanceByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSingleFinanceByIdQuery(baseOptions: ApolloReactHooks.QueryHookOptions<SingleFinanceByIdQuery, SingleFinanceByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<SingleFinanceByIdQuery, SingleFinanceByIdQueryVariables>(SingleFinanceByIdDocument, options);
      }
export function useSingleFinanceByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SingleFinanceByIdQuery, SingleFinanceByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<SingleFinanceByIdQuery, SingleFinanceByIdQueryVariables>(SingleFinanceByIdDocument, options);
        }
export type SingleFinanceByIdQueryHookResult = ReturnType<typeof useSingleFinanceByIdQuery>;
export type SingleFinanceByIdLazyQueryHookResult = ReturnType<typeof useSingleFinanceByIdLazyQuery>;
export type SingleFinanceByIdQueryResult = Apollo.QueryResult<SingleFinanceByIdQuery, SingleFinanceByIdQueryVariables>;
export const AllFinancialYearsDocument = gql`
    query AllFinancialYears {
  financialYears {
    ...FinancialYearFragment
  }
}
    ${FinancialYearFragmentFragmentDoc}`;
export type AllFinancialYearsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllFinancialYearsQuery, AllFinancialYearsQueryVariables>, 'query'>;

    export const AllFinancialYearsComponent = (props: AllFinancialYearsComponentProps) => (
      <ApolloReactComponents.Query<AllFinancialYearsQuery, AllFinancialYearsQueryVariables> query={AllFinancialYearsDocument} {...props} />
    );
    
export type AllFinancialYearsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<AllFinancialYearsQuery, AllFinancialYearsQueryVariables>
    } & TChildProps;
export function withAllFinancialYears<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AllFinancialYearsQuery,
  AllFinancialYearsQueryVariables,
  AllFinancialYearsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, AllFinancialYearsQuery, AllFinancialYearsQueryVariables, AllFinancialYearsProps<TChildProps, TDataName>>(AllFinancialYearsDocument, {
      alias: 'allFinancialYears',
      ...operationOptions
    });
};

/**
 * __useAllFinancialYearsQuery__
 *
 * To run a query within a React component, call `useAllFinancialYearsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllFinancialYearsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllFinancialYearsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllFinancialYearsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllFinancialYearsQuery, AllFinancialYearsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<AllFinancialYearsQuery, AllFinancialYearsQueryVariables>(AllFinancialYearsDocument, options);
      }
export function useAllFinancialYearsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllFinancialYearsQuery, AllFinancialYearsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<AllFinancialYearsQuery, AllFinancialYearsQueryVariables>(AllFinancialYearsDocument, options);
        }
export type AllFinancialYearsQueryHookResult = ReturnType<typeof useAllFinancialYearsQuery>;
export type AllFinancialYearsLazyQueryHookResult = ReturnType<typeof useAllFinancialYearsLazyQuery>;
export type AllFinancialYearsQueryResult = Apollo.QueryResult<AllFinancialYearsQuery, AllFinancialYearsQueryVariables>;
export const SingleFinancialYearDocument = gql`
    query SingleFinancialYear($where: FinancialYearWhereUniqueInput!) {
  financialYear(where: $where) {
    ...FinancialYearFragment
  }
}
    ${FinancialYearFragmentFragmentDoc}`;
export type SingleFinancialYearComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SingleFinancialYearQuery, SingleFinancialYearQueryVariables>, 'query'> & ({ variables: SingleFinancialYearQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SingleFinancialYearComponent = (props: SingleFinancialYearComponentProps) => (
      <ApolloReactComponents.Query<SingleFinancialYearQuery, SingleFinancialYearQueryVariables> query={SingleFinancialYearDocument} {...props} />
    );
    
export type SingleFinancialYearProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SingleFinancialYearQuery, SingleFinancialYearQueryVariables>
    } & TChildProps;
export function withSingleFinancialYear<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SingleFinancialYearQuery,
  SingleFinancialYearQueryVariables,
  SingleFinancialYearProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SingleFinancialYearQuery, SingleFinancialYearQueryVariables, SingleFinancialYearProps<TChildProps, TDataName>>(SingleFinancialYearDocument, {
      alias: 'singleFinancialYear',
      ...operationOptions
    });
};

/**
 * __useSingleFinancialYearQuery__
 *
 * To run a query within a React component, call `useSingleFinancialYearQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleFinancialYearQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleFinancialYearQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useSingleFinancialYearQuery(baseOptions: ApolloReactHooks.QueryHookOptions<SingleFinancialYearQuery, SingleFinancialYearQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<SingleFinancialYearQuery, SingleFinancialYearQueryVariables>(SingleFinancialYearDocument, options);
      }
export function useSingleFinancialYearLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SingleFinancialYearQuery, SingleFinancialYearQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<SingleFinancialYearQuery, SingleFinancialYearQueryVariables>(SingleFinancialYearDocument, options);
        }
export type SingleFinancialYearQueryHookResult = ReturnType<typeof useSingleFinancialYearQuery>;
export type SingleFinancialYearLazyQueryHookResult = ReturnType<typeof useSingleFinancialYearLazyQuery>;
export type SingleFinancialYearQueryResult = Apollo.QueryResult<SingleFinancialYearQuery, SingleFinancialYearQueryVariables>;
export const SingleFinancialYearByIdDocument = gql`
    query SingleFinancialYearById($id: String!) {
  financialYearById(id: $id) {
    ...FinancialYearFragment
  }
}
    ${FinancialYearFragmentFragmentDoc}`;
export type SingleFinancialYearByIdComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SingleFinancialYearByIdQuery, SingleFinancialYearByIdQueryVariables>, 'query'> & ({ variables: SingleFinancialYearByIdQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SingleFinancialYearByIdComponent = (props: SingleFinancialYearByIdComponentProps) => (
      <ApolloReactComponents.Query<SingleFinancialYearByIdQuery, SingleFinancialYearByIdQueryVariables> query={SingleFinancialYearByIdDocument} {...props} />
    );
    
export type SingleFinancialYearByIdProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SingleFinancialYearByIdQuery, SingleFinancialYearByIdQueryVariables>
    } & TChildProps;
export function withSingleFinancialYearById<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SingleFinancialYearByIdQuery,
  SingleFinancialYearByIdQueryVariables,
  SingleFinancialYearByIdProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SingleFinancialYearByIdQuery, SingleFinancialYearByIdQueryVariables, SingleFinancialYearByIdProps<TChildProps, TDataName>>(SingleFinancialYearByIdDocument, {
      alias: 'singleFinancialYearById',
      ...operationOptions
    });
};

/**
 * __useSingleFinancialYearByIdQuery__
 *
 * To run a query within a React component, call `useSingleFinancialYearByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleFinancialYearByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleFinancialYearByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSingleFinancialYearByIdQuery(baseOptions: ApolloReactHooks.QueryHookOptions<SingleFinancialYearByIdQuery, SingleFinancialYearByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<SingleFinancialYearByIdQuery, SingleFinancialYearByIdQueryVariables>(SingleFinancialYearByIdDocument, options);
      }
export function useSingleFinancialYearByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SingleFinancialYearByIdQuery, SingleFinancialYearByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<SingleFinancialYearByIdQuery, SingleFinancialYearByIdQueryVariables>(SingleFinancialYearByIdDocument, options);
        }
export type SingleFinancialYearByIdQueryHookResult = ReturnType<typeof useSingleFinancialYearByIdQuery>;
export type SingleFinancialYearByIdLazyQueryHookResult = ReturnType<typeof useSingleFinancialYearByIdLazyQuery>;
export type SingleFinancialYearByIdQueryResult = Apollo.QueryResult<SingleFinancialYearByIdQuery, SingleFinancialYearByIdQueryVariables>;
export const RecentSingleFinancialYearDocument = gql`
    query RecentSingleFinancialYear {
  recentFinancialYear {
    ...FinancialYearFragment
  }
}
    ${FinancialYearFragmentFragmentDoc}`;
export type RecentSingleFinancialYearComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<RecentSingleFinancialYearQuery, RecentSingleFinancialYearQueryVariables>, 'query'>;

    export const RecentSingleFinancialYearComponent = (props: RecentSingleFinancialYearComponentProps) => (
      <ApolloReactComponents.Query<RecentSingleFinancialYearQuery, RecentSingleFinancialYearQueryVariables> query={RecentSingleFinancialYearDocument} {...props} />
    );
    
export type RecentSingleFinancialYearProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<RecentSingleFinancialYearQuery, RecentSingleFinancialYearQueryVariables>
    } & TChildProps;
export function withRecentSingleFinancialYear<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  RecentSingleFinancialYearQuery,
  RecentSingleFinancialYearQueryVariables,
  RecentSingleFinancialYearProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, RecentSingleFinancialYearQuery, RecentSingleFinancialYearQueryVariables, RecentSingleFinancialYearProps<TChildProps, TDataName>>(RecentSingleFinancialYearDocument, {
      alias: 'recentSingleFinancialYear',
      ...operationOptions
    });
};

/**
 * __useRecentSingleFinancialYearQuery__
 *
 * To run a query within a React component, call `useRecentSingleFinancialYearQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecentSingleFinancialYearQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecentSingleFinancialYearQuery({
 *   variables: {
 *   },
 * });
 */
export function useRecentSingleFinancialYearQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<RecentSingleFinancialYearQuery, RecentSingleFinancialYearQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<RecentSingleFinancialYearQuery, RecentSingleFinancialYearQueryVariables>(RecentSingleFinancialYearDocument, options);
      }
export function useRecentSingleFinancialYearLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<RecentSingleFinancialYearQuery, RecentSingleFinancialYearQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<RecentSingleFinancialYearQuery, RecentSingleFinancialYearQueryVariables>(RecentSingleFinancialYearDocument, options);
        }
export type RecentSingleFinancialYearQueryHookResult = ReturnType<typeof useRecentSingleFinancialYearQuery>;
export type RecentSingleFinancialYearLazyQueryHookResult = ReturnType<typeof useRecentSingleFinancialYearLazyQuery>;
export type RecentSingleFinancialYearQueryResult = Apollo.QueryResult<RecentSingleFinancialYearQuery, RecentSingleFinancialYearQueryVariables>;
export const AllInventorysDocument = gql`
    query AllInventorys {
  inventories {
    ...InventoryFragment
  }
}
    ${InventoryFragmentFragmentDoc}`;
export type AllInventorysComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllInventorysQuery, AllInventorysQueryVariables>, 'query'>;

    export const AllInventorysComponent = (props: AllInventorysComponentProps) => (
      <ApolloReactComponents.Query<AllInventorysQuery, AllInventorysQueryVariables> query={AllInventorysDocument} {...props} />
    );
    
export type AllInventorysProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<AllInventorysQuery, AllInventorysQueryVariables>
    } & TChildProps;
export function withAllInventorys<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AllInventorysQuery,
  AllInventorysQueryVariables,
  AllInventorysProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, AllInventorysQuery, AllInventorysQueryVariables, AllInventorysProps<TChildProps, TDataName>>(AllInventorysDocument, {
      alias: 'allInventorys',
      ...operationOptions
    });
};

/**
 * __useAllInventorysQuery__
 *
 * To run a query within a React component, call `useAllInventorysQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllInventorysQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllInventorysQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllInventorysQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllInventorysQuery, AllInventorysQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<AllInventorysQuery, AllInventorysQueryVariables>(AllInventorysDocument, options);
      }
export function useAllInventorysLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllInventorysQuery, AllInventorysQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<AllInventorysQuery, AllInventorysQueryVariables>(AllInventorysDocument, options);
        }
export type AllInventorysQueryHookResult = ReturnType<typeof useAllInventorysQuery>;
export type AllInventorysLazyQueryHookResult = ReturnType<typeof useAllInventorysLazyQuery>;
export type AllInventorysQueryResult = Apollo.QueryResult<AllInventorysQuery, AllInventorysQueryVariables>;
export const SingleInventoryDocument = gql`
    query SingleInventory($where: InventoryWhereUniqueInput!) {
  inventory(where: $where) {
    ...InventoryFragment
  }
}
    ${InventoryFragmentFragmentDoc}`;
export type SingleInventoryComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SingleInventoryQuery, SingleInventoryQueryVariables>, 'query'> & ({ variables: SingleInventoryQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SingleInventoryComponent = (props: SingleInventoryComponentProps) => (
      <ApolloReactComponents.Query<SingleInventoryQuery, SingleInventoryQueryVariables> query={SingleInventoryDocument} {...props} />
    );
    
export type SingleInventoryProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SingleInventoryQuery, SingleInventoryQueryVariables>
    } & TChildProps;
export function withSingleInventory<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SingleInventoryQuery,
  SingleInventoryQueryVariables,
  SingleInventoryProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SingleInventoryQuery, SingleInventoryQueryVariables, SingleInventoryProps<TChildProps, TDataName>>(SingleInventoryDocument, {
      alias: 'singleInventory',
      ...operationOptions
    });
};

/**
 * __useSingleInventoryQuery__
 *
 * To run a query within a React component, call `useSingleInventoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleInventoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleInventoryQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useSingleInventoryQuery(baseOptions: ApolloReactHooks.QueryHookOptions<SingleInventoryQuery, SingleInventoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<SingleInventoryQuery, SingleInventoryQueryVariables>(SingleInventoryDocument, options);
      }
export function useSingleInventoryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SingleInventoryQuery, SingleInventoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<SingleInventoryQuery, SingleInventoryQueryVariables>(SingleInventoryDocument, options);
        }
export type SingleInventoryQueryHookResult = ReturnType<typeof useSingleInventoryQuery>;
export type SingleInventoryLazyQueryHookResult = ReturnType<typeof useSingleInventoryLazyQuery>;
export type SingleInventoryQueryResult = Apollo.QueryResult<SingleInventoryQuery, SingleInventoryQueryVariables>;
export const SingleInventoryByIdDocument = gql`
    query SingleInventoryById($id: String!) {
  inventoryById(id: $id) {
    ...InventoryFragment
  }
}
    ${InventoryFragmentFragmentDoc}`;
export type SingleInventoryByIdComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SingleInventoryByIdQuery, SingleInventoryByIdQueryVariables>, 'query'> & ({ variables: SingleInventoryByIdQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SingleInventoryByIdComponent = (props: SingleInventoryByIdComponentProps) => (
      <ApolloReactComponents.Query<SingleInventoryByIdQuery, SingleInventoryByIdQueryVariables> query={SingleInventoryByIdDocument} {...props} />
    );
    
export type SingleInventoryByIdProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SingleInventoryByIdQuery, SingleInventoryByIdQueryVariables>
    } & TChildProps;
export function withSingleInventoryById<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SingleInventoryByIdQuery,
  SingleInventoryByIdQueryVariables,
  SingleInventoryByIdProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SingleInventoryByIdQuery, SingleInventoryByIdQueryVariables, SingleInventoryByIdProps<TChildProps, TDataName>>(SingleInventoryByIdDocument, {
      alias: 'singleInventoryById',
      ...operationOptions
    });
};

/**
 * __useSingleInventoryByIdQuery__
 *
 * To run a query within a React component, call `useSingleInventoryByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleInventoryByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleInventoryByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSingleInventoryByIdQuery(baseOptions: ApolloReactHooks.QueryHookOptions<SingleInventoryByIdQuery, SingleInventoryByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<SingleInventoryByIdQuery, SingleInventoryByIdQueryVariables>(SingleInventoryByIdDocument, options);
      }
export function useSingleInventoryByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SingleInventoryByIdQuery, SingleInventoryByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<SingleInventoryByIdQuery, SingleInventoryByIdQueryVariables>(SingleInventoryByIdDocument, options);
        }
export type SingleInventoryByIdQueryHookResult = ReturnType<typeof useSingleInventoryByIdQuery>;
export type SingleInventoryByIdLazyQueryHookResult = ReturnType<typeof useSingleInventoryByIdLazyQuery>;
export type SingleInventoryByIdQueryResult = Apollo.QueryResult<SingleInventoryByIdQuery, SingleInventoryByIdQueryVariables>;
export const AllOrderDetailDocument = gql`
    query AllOrderDetail {
  orderDetails {
    ...OrderDetailFragment
  }
}
    ${OrderDetailFragmentFragmentDoc}`;
export type AllOrderDetailComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllOrderDetailQuery, AllOrderDetailQueryVariables>, 'query'>;

    export const AllOrderDetailComponent = (props: AllOrderDetailComponentProps) => (
      <ApolloReactComponents.Query<AllOrderDetailQuery, AllOrderDetailQueryVariables> query={AllOrderDetailDocument} {...props} />
    );
    
export type AllOrderDetailProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<AllOrderDetailQuery, AllOrderDetailQueryVariables>
    } & TChildProps;
export function withAllOrderDetail<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AllOrderDetailQuery,
  AllOrderDetailQueryVariables,
  AllOrderDetailProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, AllOrderDetailQuery, AllOrderDetailQueryVariables, AllOrderDetailProps<TChildProps, TDataName>>(AllOrderDetailDocument, {
      alias: 'allOrderDetail',
      ...operationOptions
    });
};

/**
 * __useAllOrderDetailQuery__
 *
 * To run a query within a React component, call `useAllOrderDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllOrderDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllOrderDetailQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllOrderDetailQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllOrderDetailQuery, AllOrderDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<AllOrderDetailQuery, AllOrderDetailQueryVariables>(AllOrderDetailDocument, options);
      }
export function useAllOrderDetailLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllOrderDetailQuery, AllOrderDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<AllOrderDetailQuery, AllOrderDetailQueryVariables>(AllOrderDetailDocument, options);
        }
export type AllOrderDetailQueryHookResult = ReturnType<typeof useAllOrderDetailQuery>;
export type AllOrderDetailLazyQueryHookResult = ReturnType<typeof useAllOrderDetailLazyQuery>;
export type AllOrderDetailQueryResult = Apollo.QueryResult<AllOrderDetailQuery, AllOrderDetailQueryVariables>;
export const SingleOrderDetailDocument = gql`
    query SingleOrderDetail($where: OrderDetailWhereUniqueInput!) {
  orderDetail(where: $where) {
    ...OrderDetailFragment
  }
}
    ${OrderDetailFragmentFragmentDoc}`;
export type SingleOrderDetailComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SingleOrderDetailQuery, SingleOrderDetailQueryVariables>, 'query'> & ({ variables: SingleOrderDetailQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SingleOrderDetailComponent = (props: SingleOrderDetailComponentProps) => (
      <ApolloReactComponents.Query<SingleOrderDetailQuery, SingleOrderDetailQueryVariables> query={SingleOrderDetailDocument} {...props} />
    );
    
export type SingleOrderDetailProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SingleOrderDetailQuery, SingleOrderDetailQueryVariables>
    } & TChildProps;
export function withSingleOrderDetail<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SingleOrderDetailQuery,
  SingleOrderDetailQueryVariables,
  SingleOrderDetailProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SingleOrderDetailQuery, SingleOrderDetailQueryVariables, SingleOrderDetailProps<TChildProps, TDataName>>(SingleOrderDetailDocument, {
      alias: 'singleOrderDetail',
      ...operationOptions
    });
};

/**
 * __useSingleOrderDetailQuery__
 *
 * To run a query within a React component, call `useSingleOrderDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleOrderDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleOrderDetailQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useSingleOrderDetailQuery(baseOptions: ApolloReactHooks.QueryHookOptions<SingleOrderDetailQuery, SingleOrderDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<SingleOrderDetailQuery, SingleOrderDetailQueryVariables>(SingleOrderDetailDocument, options);
      }
export function useSingleOrderDetailLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SingleOrderDetailQuery, SingleOrderDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<SingleOrderDetailQuery, SingleOrderDetailQueryVariables>(SingleOrderDetailDocument, options);
        }
export type SingleOrderDetailQueryHookResult = ReturnType<typeof useSingleOrderDetailQuery>;
export type SingleOrderDetailLazyQueryHookResult = ReturnType<typeof useSingleOrderDetailLazyQuery>;
export type SingleOrderDetailQueryResult = Apollo.QueryResult<SingleOrderDetailQuery, SingleOrderDetailQueryVariables>;
export const AllOrdersDocument = gql`
    query AllOrders {
  orders {
    ...OrderFragment
  }
}
    ${OrderFragmentFragmentDoc}`;
export type AllOrdersComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllOrdersQuery, AllOrdersQueryVariables>, 'query'>;

    export const AllOrdersComponent = (props: AllOrdersComponentProps) => (
      <ApolloReactComponents.Query<AllOrdersQuery, AllOrdersQueryVariables> query={AllOrdersDocument} {...props} />
    );
    
export type AllOrdersProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<AllOrdersQuery, AllOrdersQueryVariables>
    } & TChildProps;
export function withAllOrders<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AllOrdersQuery,
  AllOrdersQueryVariables,
  AllOrdersProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, AllOrdersQuery, AllOrdersQueryVariables, AllOrdersProps<TChildProps, TDataName>>(AllOrdersDocument, {
      alias: 'allOrders',
      ...operationOptions
    });
};

/**
 * __useAllOrdersQuery__
 *
 * To run a query within a React component, call `useAllOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllOrdersQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllOrdersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllOrdersQuery, AllOrdersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<AllOrdersQuery, AllOrdersQueryVariables>(AllOrdersDocument, options);
      }
export function useAllOrdersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllOrdersQuery, AllOrdersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<AllOrdersQuery, AllOrdersQueryVariables>(AllOrdersDocument, options);
        }
export type AllOrdersQueryHookResult = ReturnType<typeof useAllOrdersQuery>;
export type AllOrdersLazyQueryHookResult = ReturnType<typeof useAllOrdersLazyQuery>;
export type AllOrdersQueryResult = Apollo.QueryResult<AllOrdersQuery, AllOrdersQueryVariables>;
export const SingleOrderDocument = gql`
    query SingleOrder($where: OrderWhereUniqueInput!) {
  order(where: $where) {
    ...OrderFragment
  }
}
    ${OrderFragmentFragmentDoc}`;
export type SingleOrderComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SingleOrderQuery, SingleOrderQueryVariables>, 'query'> & ({ variables: SingleOrderQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SingleOrderComponent = (props: SingleOrderComponentProps) => (
      <ApolloReactComponents.Query<SingleOrderQuery, SingleOrderQueryVariables> query={SingleOrderDocument} {...props} />
    );
    
export type SingleOrderProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SingleOrderQuery, SingleOrderQueryVariables>
    } & TChildProps;
export function withSingleOrder<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SingleOrderQuery,
  SingleOrderQueryVariables,
  SingleOrderProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SingleOrderQuery, SingleOrderQueryVariables, SingleOrderProps<TChildProps, TDataName>>(SingleOrderDocument, {
      alias: 'singleOrder',
      ...operationOptions
    });
};

/**
 * __useSingleOrderQuery__
 *
 * To run a query within a React component, call `useSingleOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleOrderQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useSingleOrderQuery(baseOptions: ApolloReactHooks.QueryHookOptions<SingleOrderQuery, SingleOrderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<SingleOrderQuery, SingleOrderQueryVariables>(SingleOrderDocument, options);
      }
export function useSingleOrderLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SingleOrderQuery, SingleOrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<SingleOrderQuery, SingleOrderQueryVariables>(SingleOrderDocument, options);
        }
export type SingleOrderQueryHookResult = ReturnType<typeof useSingleOrderQuery>;
export type SingleOrderLazyQueryHookResult = ReturnType<typeof useSingleOrderLazyQuery>;
export type SingleOrderQueryResult = Apollo.QueryResult<SingleOrderQuery, SingleOrderQueryVariables>;
export const AllProductsDocument = gql`
    query AllProducts {
  products {
    ...ProductFragment
  }
}
    ${ProductFragmentFragmentDoc}`;
export type AllProductsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllProductsQuery, AllProductsQueryVariables>, 'query'>;

    export const AllProductsComponent = (props: AllProductsComponentProps) => (
      <ApolloReactComponents.Query<AllProductsQuery, AllProductsQueryVariables> query={AllProductsDocument} {...props} />
    );
    
export type AllProductsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<AllProductsQuery, AllProductsQueryVariables>
    } & TChildProps;
export function withAllProducts<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AllProductsQuery,
  AllProductsQueryVariables,
  AllProductsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, AllProductsQuery, AllProductsQueryVariables, AllProductsProps<TChildProps, TDataName>>(AllProductsDocument, {
      alias: 'allProducts',
      ...operationOptions
    });
};

/**
 * __useAllProductsQuery__
 *
 * To run a query within a React component, call `useAllProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllProductsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllProductsQuery, AllProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<AllProductsQuery, AllProductsQueryVariables>(AllProductsDocument, options);
      }
export function useAllProductsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllProductsQuery, AllProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<AllProductsQuery, AllProductsQueryVariables>(AllProductsDocument, options);
        }
export type AllProductsQueryHookResult = ReturnType<typeof useAllProductsQuery>;
export type AllProductsLazyQueryHookResult = ReturnType<typeof useAllProductsLazyQuery>;
export type AllProductsQueryResult = Apollo.QueryResult<AllProductsQuery, AllProductsQueryVariables>;
export const SingleProductDocument = gql`
    query SingleProduct($where: ProductWhereUniqueInput!) {
  product(where: $where) {
    ...ProductFragment
  }
}
    ${ProductFragmentFragmentDoc}`;
export type SingleProductComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SingleProductQuery, SingleProductQueryVariables>, 'query'> & ({ variables: SingleProductQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SingleProductComponent = (props: SingleProductComponentProps) => (
      <ApolloReactComponents.Query<SingleProductQuery, SingleProductQueryVariables> query={SingleProductDocument} {...props} />
    );
    
export type SingleProductProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SingleProductQuery, SingleProductQueryVariables>
    } & TChildProps;
export function withSingleProduct<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SingleProductQuery,
  SingleProductQueryVariables,
  SingleProductProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SingleProductQuery, SingleProductQueryVariables, SingleProductProps<TChildProps, TDataName>>(SingleProductDocument, {
      alias: 'singleProduct',
      ...operationOptions
    });
};

/**
 * __useSingleProductQuery__
 *
 * To run a query within a React component, call `useSingleProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleProductQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useSingleProductQuery(baseOptions: ApolloReactHooks.QueryHookOptions<SingleProductQuery, SingleProductQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<SingleProductQuery, SingleProductQueryVariables>(SingleProductDocument, options);
      }
export function useSingleProductLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SingleProductQuery, SingleProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<SingleProductQuery, SingleProductQueryVariables>(SingleProductDocument, options);
        }
export type SingleProductQueryHookResult = ReturnType<typeof useSingleProductQuery>;
export type SingleProductLazyQueryHookResult = ReturnType<typeof useSingleProductLazyQuery>;
export type SingleProductQueryResult = Apollo.QueryResult<SingleProductQuery, SingleProductQueryVariables>;
export const SingleProductByIdDocument = gql`
    query SingleProductById($id: String!) {
  productById(id: $id) {
    ...ProductFragment
  }
}
    ${ProductFragmentFragmentDoc}`;
export type SingleProductByIdComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SingleProductByIdQuery, SingleProductByIdQueryVariables>, 'query'> & ({ variables: SingleProductByIdQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SingleProductByIdComponent = (props: SingleProductByIdComponentProps) => (
      <ApolloReactComponents.Query<SingleProductByIdQuery, SingleProductByIdQueryVariables> query={SingleProductByIdDocument} {...props} />
    );
    
export type SingleProductByIdProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SingleProductByIdQuery, SingleProductByIdQueryVariables>
    } & TChildProps;
export function withSingleProductById<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SingleProductByIdQuery,
  SingleProductByIdQueryVariables,
  SingleProductByIdProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SingleProductByIdQuery, SingleProductByIdQueryVariables, SingleProductByIdProps<TChildProps, TDataName>>(SingleProductByIdDocument, {
      alias: 'singleProductById',
      ...operationOptions
    });
};

/**
 * __useSingleProductByIdQuery__
 *
 * To run a query within a React component, call `useSingleProductByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleProductByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleProductByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSingleProductByIdQuery(baseOptions: ApolloReactHooks.QueryHookOptions<SingleProductByIdQuery, SingleProductByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<SingleProductByIdQuery, SingleProductByIdQueryVariables>(SingleProductByIdDocument, options);
      }
export function useSingleProductByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SingleProductByIdQuery, SingleProductByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<SingleProductByIdQuery, SingleProductByIdQueryVariables>(SingleProductByIdDocument, options);
        }
export type SingleProductByIdQueryHookResult = ReturnType<typeof useSingleProductByIdQuery>;
export type SingleProductByIdLazyQueryHookResult = ReturnType<typeof useSingleProductByIdLazyQuery>;
export type SingleProductByIdQueryResult = Apollo.QueryResult<SingleProductByIdQuery, SingleProductByIdQueryVariables>;
export const AllProductsByCategoryIdDocument = gql`
    query AllProductsByCategoryID($categoryId: String!) {
  productsByCategoryID(categoryId: $categoryId) {
    ...ProductFragment
  }
}
    ${ProductFragmentFragmentDoc}`;
export type AllProductsByCategoryIdComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllProductsByCategoryIdQuery, AllProductsByCategoryIdQueryVariables>, 'query'> & ({ variables: AllProductsByCategoryIdQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const AllProductsByCategoryIdComponent = (props: AllProductsByCategoryIdComponentProps) => (
      <ApolloReactComponents.Query<AllProductsByCategoryIdQuery, AllProductsByCategoryIdQueryVariables> query={AllProductsByCategoryIdDocument} {...props} />
    );
    
export type AllProductsByCategoryIdProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<AllProductsByCategoryIdQuery, AllProductsByCategoryIdQueryVariables>
    } & TChildProps;
export function withAllProductsByCategoryId<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AllProductsByCategoryIdQuery,
  AllProductsByCategoryIdQueryVariables,
  AllProductsByCategoryIdProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, AllProductsByCategoryIdQuery, AllProductsByCategoryIdQueryVariables, AllProductsByCategoryIdProps<TChildProps, TDataName>>(AllProductsByCategoryIdDocument, {
      alias: 'allProductsByCategoryId',
      ...operationOptions
    });
};

/**
 * __useAllProductsByCategoryIdQuery__
 *
 * To run a query within a React component, call `useAllProductsByCategoryIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllProductsByCategoryIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllProductsByCategoryIdQuery({
 *   variables: {
 *      categoryId: // value for 'categoryId'
 *   },
 * });
 */
export function useAllProductsByCategoryIdQuery(baseOptions: ApolloReactHooks.QueryHookOptions<AllProductsByCategoryIdQuery, AllProductsByCategoryIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<AllProductsByCategoryIdQuery, AllProductsByCategoryIdQueryVariables>(AllProductsByCategoryIdDocument, options);
      }
export function useAllProductsByCategoryIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllProductsByCategoryIdQuery, AllProductsByCategoryIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<AllProductsByCategoryIdQuery, AllProductsByCategoryIdQueryVariables>(AllProductsByCategoryIdDocument, options);
        }
export type AllProductsByCategoryIdQueryHookResult = ReturnType<typeof useAllProductsByCategoryIdQuery>;
export type AllProductsByCategoryIdLazyQueryHookResult = ReturnType<typeof useAllProductsByCategoryIdLazyQuery>;
export type AllProductsByCategoryIdQueryResult = Apollo.QueryResult<AllProductsByCategoryIdQuery, AllProductsByCategoryIdQueryVariables>;


export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AnnualBranchEmployee: ResolverTypeWrapper<AnnualBranchEmployee>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  AnnualClient: ResolverTypeWrapper<AnnualClient>;
  Bonus: ResolverTypeWrapper<Bonus>;
  Branch: ResolverTypeWrapper<Branch>;
  BranchEmployee: ResolverTypeWrapper<BranchEmployee>;
  Cart: ResolverTypeWrapper<Cart>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Category: ResolverTypeWrapper<Category>;
  Client: ResolverTypeWrapper<Client>;
  Employee: ResolverTypeWrapper<Employee>;
  EmployeeStatus: ResolverTypeWrapper<EmployeeStatus>;
  Finance: ResolverTypeWrapper<Finance>;
  FinancialYear: ResolverTypeWrapper<FinancialYear>;
  Inventory: ResolverTypeWrapper<Inventory>;
  Order: ResolverTypeWrapper<Order>;
  OrderDetail: ResolverTypeWrapper<OrderDetail>;
  Product: ResolverTypeWrapper<Product>;
  OrderWhereUniqueInput: OrderWhereUniqueInput;
  CartWhereUniqueInput: CartWhereUniqueInput;
  BranchEmployeeWhereUniqueInput: BranchEmployeeWhereUniqueInput;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  ProductWhereUniqueInput: ProductWhereUniqueInput;
  AnnualBranchEmployeeWhereUniqueInput: AnnualBranchEmployeeWhereUniqueInput;
  AnnualClientWhereUniqueInput: AnnualClientWhereUniqueInput;
  FinanceWhereUniqueInput: FinanceWhereUniqueInput;
  OrderDetailWhereUniqueInput: OrderDetailWhereUniqueInput;
  ClientWhereUniqueInput: ClientWhereUniqueInput;
  BonusWhereUniqueInput: BonusWhereUniqueInput;
  BranchWhereUniqueInput: BranchWhereUniqueInput;
  FinancialYearWhereUniqueInput: FinancialYearWhereUniqueInput;
  EmployeeWhereUniqueInput: EmployeeWhereUniqueInput;
  EmployeeStatusWhereUniqueInput: EmployeeStatusWhereUniqueInput;
  InventoryWhereUniqueInput: InventoryWhereUniqueInput;
  CategoryWhereUniqueInput: CategoryWhereUniqueInput;
  AnnualBranchEmployeeCreateInput: AnnualBranchEmployeeCreateInput;
  AnnualBranchEmployeeUpdateInput: AnnualBranchEmployeeUpdateInput;
  AnnualClientCreateInput: AnnualClientCreateInput;
  AnnualClientUpdateInput: AnnualClientUpdateInput;
  CartCreateInput: CartCreateInput;
  CartUpdateInput: CartUpdateInput;
  CategoryCreateInput: CategoryCreateInput;
  CategoryUpdateInput: CategoryUpdateInput;
  ClientCreateInput: ClientCreateInput;
  ClientUpdateInput: ClientUpdateInput;
  OrderDetailCreateInput: OrderDetailCreateInput;
  OrderDetailUpdateInput: OrderDetailUpdateInput;
  OrderCreateInput: OrderCreateInput;
  OrderUpdateInput: OrderUpdateInput;
  BonusCreateInput: BonusCreateInput;
  BonusUpdateInput: BonusUpdateInput;
  BranchCreateInput: BranchCreateInput;
  BranchUpdateInput: BranchUpdateInput;
  BranchEmployeeCreateInput: BranchEmployeeCreateInput;
  BranchEmployeeUpdateInput: BranchEmployeeUpdateInput;
  FinancialYearCreateInput: FinancialYearCreateInput;
  FinancialYearUpdateInput: FinancialYearUpdateInput;
  EmployeeCreateInput: EmployeeCreateInput;
  EmployeeUpdateInput: EmployeeUpdateInput;
  EmployeeStatusCreateInput: EmployeeStatusCreateInput;
  EmployeeStatusUpdateInput: EmployeeStatusUpdateInput;
  FinanceCreateInput: FinanceCreateInput;
  FinanceUpdateInput: FinanceUpdateInput;
  InventoryCreateInput: InventoryCreateInput;
  InventoryUpdateInput: InventoryUpdateInput;
  ProductCreateInput: ProductCreateInput;
  ProductUpdateInput: ProductUpdateInput;
  OrderCreateNestedManyWithoutAnnualBranchEmployeeInput: OrderCreateNestedManyWithoutAnnualBranchEmployeeInput;
  CartCreateNestedManyWithoutAnnualBranchEmployeeInput: CartCreateNestedManyWithoutAnnualBranchEmployeeInput;
  BranchEmployeeCreateNestedOneWithoutAnnBranchEmployeeInput: BranchEmployeeCreateNestedOneWithoutAnnBranchEmployeeInput;
  FinancialYearCreateNestedOneWithoutAnnBranchEmplsInput: FinancialYearCreateNestedOneWithoutAnnBranchEmplsInput;
  StringFieldUpdateOperationsInput: StringFieldUpdateOperationsInput;
  DateTimeFieldUpdateOperationsInput: DateTimeFieldUpdateOperationsInput;
  OrderUpdateManyWithoutAnnualBranchEmployeeInput: OrderUpdateManyWithoutAnnualBranchEmployeeInput;
  CartUpdateManyWithoutAnnualBranchEmployeeInput: CartUpdateManyWithoutAnnualBranchEmployeeInput;
  BranchEmployeeUpdateOneWithoutAnnBranchEmployeeInput: BranchEmployeeUpdateOneWithoutAnnBranchEmployeeInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  FinancialYearUpdateOneWithoutAnnBranchEmplsInput: FinancialYearUpdateOneWithoutAnnBranchEmplsInput;
  OrderCreateNestedManyWithoutAnnualClientInput: OrderCreateNestedManyWithoutAnnualClientInput;
  CartCreateNestedManyWithoutAnnualClientInput: CartCreateNestedManyWithoutAnnualClientInput;
  ClientCreateNestedOneWithoutAnnClientsInput: ClientCreateNestedOneWithoutAnnClientsInput;
  FinancialYearCreateNestedOneWithoutAnnClientsInput: FinancialYearCreateNestedOneWithoutAnnClientsInput;
  OrderUpdateManyWithoutAnnualClientInput: OrderUpdateManyWithoutAnnualClientInput;
  CartUpdateManyWithoutAnnualClientInput: CartUpdateManyWithoutAnnualClientInput;
  ClientUpdateOneWithoutAnnClientsInput: ClientUpdateOneWithoutAnnClientsInput;
  FinancialYearUpdateOneWithoutAnnClientsInput: FinancialYearUpdateOneWithoutAnnClientsInput;
  ProductCreateNestedOneWithoutCartsInput: ProductCreateNestedOneWithoutCartsInput;
  AnnualClientCreateNestedOneWithoutCartsInput: AnnualClientCreateNestedOneWithoutCartsInput;
  AnnualBranchEmployeeCreateNestedOneWithoutCartsInput: AnnualBranchEmployeeCreateNestedOneWithoutCartsInput;
  FloatFieldUpdateOperationsInput: FloatFieldUpdateOperationsInput;
  IntFieldUpdateOperationsInput: IntFieldUpdateOperationsInput;
  ProductUpdateOneRequiredWithoutCartsInput: ProductUpdateOneRequiredWithoutCartsInput;
  AnnualClientUpdateOneWithoutCartsInput: AnnualClientUpdateOneWithoutCartsInput;
  AnnualBranchEmployeeUpdateOneWithoutCartsInput: AnnualBranchEmployeeUpdateOneWithoutCartsInput;
  ProductCreateNestedManyWithoutCategoryInput: ProductCreateNestedManyWithoutCategoryInput;
  ProductUpdateManyWithoutCategoryInput: ProductUpdateManyWithoutCategoryInput;
  AnnualClientCreateNestedManyWithoutClientInput: AnnualClientCreateNestedManyWithoutClientInput;
  AnnualClientUpdateManyWithoutClientInput: AnnualClientUpdateManyWithoutClientInput;
  OrderCreateNestedOneWithoutOrderDetailsInput: OrderCreateNestedOneWithoutOrderDetailsInput;
  ProductCreateNestedOneWithoutOrderDetailsInput: ProductCreateNestedOneWithoutOrderDetailsInput;
  OrderUpdateOneRequiredWithoutOrderDetailsInput: OrderUpdateOneRequiredWithoutOrderDetailsInput;
  ProductUpdateOneRequiredWithoutOrderDetailsInput: ProductUpdateOneRequiredWithoutOrderDetailsInput;
  OrderDetailCreateNestedManyWithoutOrderInput: OrderDetailCreateNestedManyWithoutOrderInput;
  FinanceCreateNestedManyWithoutOrderInput: FinanceCreateNestedManyWithoutOrderInput;
  AnnualClientCreateNestedOneWithoutOrdersInput: AnnualClientCreateNestedOneWithoutOrdersInput;
  AnnualBranchEmployeeCreateNestedOneWithoutOrdersInput: AnnualBranchEmployeeCreateNestedOneWithoutOrdersInput;
  OrderDetailUpdateManyWithoutOrderInput: OrderDetailUpdateManyWithoutOrderInput;
  FinanceUpdateManyWithoutOrderInput: FinanceUpdateManyWithoutOrderInput;
  AnnualClientUpdateOneWithoutOrdersInput: AnnualClientUpdateOneWithoutOrdersInput;
  AnnualBranchEmployeeUpdateOneWithoutOrdersInput: AnnualBranchEmployeeUpdateOneWithoutOrdersInput;
  BranchEmployeeCreateNestedManyWithoutBranchInput: BranchEmployeeCreateNestedManyWithoutBranchInput;
  BranchEmployeeUpdateManyWithoutBranchInput: BranchEmployeeUpdateManyWithoutBranchInput;
  AnnualBranchEmployeeCreateNestedManyWithoutBranchEmployeeInput: AnnualBranchEmployeeCreateNestedManyWithoutBranchEmployeeInput;
  EmployeeCreateNestedOneWithoutBranchEmplsInput: EmployeeCreateNestedOneWithoutBranchEmplsInput;
  BranchCreateNestedOneWithoutBranchEmplsInput: BranchCreateNestedOneWithoutBranchEmplsInput;
  EmployeeStatusCreateNestedOneWithoutBranchEmplsInput: EmployeeStatusCreateNestedOneWithoutBranchEmplsInput;
  AnnualBranchEmployeeUpdateManyWithoutBranchEmployeeInput: AnnualBranchEmployeeUpdateManyWithoutBranchEmployeeInput;
  EmployeeUpdateOneRequiredWithoutBranchEmplsInput: EmployeeUpdateOneRequiredWithoutBranchEmplsInput;
  BranchUpdateOneRequiredWithoutBranchEmplsInput: BranchUpdateOneRequiredWithoutBranchEmplsInput;
  EmployeeStatusUpdateOneRequiredWithoutBranchEmplsInput: EmployeeStatusUpdateOneRequiredWithoutBranchEmplsInput;
  AnnualBranchEmployeeCreateNestedManyWithoutFinancialYearInput: AnnualBranchEmployeeCreateNestedManyWithoutFinancialYearInput;
  AnnualClientCreateNestedManyWithoutFinancialYearInput: AnnualClientCreateNestedManyWithoutFinancialYearInput;
  AnnualBranchEmployeeUpdateManyWithoutFinancialYearInput: AnnualBranchEmployeeUpdateManyWithoutFinancialYearInput;
  AnnualClientUpdateManyWithoutFinancialYearInput: AnnualClientUpdateManyWithoutFinancialYearInput;
  BranchEmployeeCreateNestedManyWithoutEmployeeInput: BranchEmployeeCreateNestedManyWithoutEmployeeInput;
  BranchEmployeeUpdateManyWithoutEmployeeInput: BranchEmployeeUpdateManyWithoutEmployeeInput;
  BranchEmployeeCreateNestedManyWithoutEmployeeStatusInput: BranchEmployeeCreateNestedManyWithoutEmployeeStatusInput;
  BranchEmployeeUpdateManyWithoutEmployeeStatusInput: BranchEmployeeUpdateManyWithoutEmployeeStatusInput;
  OrderCreateNestedOneWithoutFinancesInput: OrderCreateNestedOneWithoutFinancesInput;
  OrderUpdateOneRequiredWithoutFinancesInput: OrderUpdateOneRequiredWithoutFinancesInput;
  CartCreateNestedManyWithoutProductInput: CartCreateNestedManyWithoutProductInput;
  OrderDetailCreateNestedManyWithoutProductInput: OrderDetailCreateNestedManyWithoutProductInput;
  CategoryCreateNestedOneWithoutProductsInput: CategoryCreateNestedOneWithoutProductsInput;
  CartUpdateManyWithoutProductInput: CartUpdateManyWithoutProductInput;
  OrderDetailUpdateManyWithoutProductInput: OrderDetailUpdateManyWithoutProductInput;
  CategoryUpdateOneWithoutProductsInput: CategoryUpdateOneWithoutProductsInput;
  OrderCreateWithoutAnnualBranchEmployeeInput: OrderCreateWithoutAnnualBranchEmployeeInput;
  OrderCreateOrConnectWithoutAnnualBranchEmployeeInput: OrderCreateOrConnectWithoutAnnualBranchEmployeeInput;
  OrderCreateManyAnnualBranchEmployeeInputEnvelope: OrderCreateManyAnnualBranchEmployeeInputEnvelope;
  CartCreateWithoutAnnualBranchEmployeeInput: CartCreateWithoutAnnualBranchEmployeeInput;
  CartCreateOrConnectWithoutAnnualBranchEmployeeInput: CartCreateOrConnectWithoutAnnualBranchEmployeeInput;
  CartCreateManyAnnualBranchEmployeeInputEnvelope: CartCreateManyAnnualBranchEmployeeInputEnvelope;
  BranchEmployeeCreateWithoutAnnBranchEmployeeInput: BranchEmployeeCreateWithoutAnnBranchEmployeeInput;
  BranchEmployeeCreateOrConnectWithoutAnnBranchEmployeeInput: BranchEmployeeCreateOrConnectWithoutAnnBranchEmployeeInput;
  FinancialYearCreateWithoutAnnBranchEmplsInput: FinancialYearCreateWithoutAnnBranchEmplsInput;
  FinancialYearCreateOrConnectWithoutAnnBranchEmplsInput: FinancialYearCreateOrConnectWithoutAnnBranchEmplsInput;
  OrderUpsertWithWhereUniqueWithoutAnnualBranchEmployeeInput: OrderUpsertWithWhereUniqueWithoutAnnualBranchEmployeeInput;
  OrderUpdateWithWhereUniqueWithoutAnnualBranchEmployeeInput: OrderUpdateWithWhereUniqueWithoutAnnualBranchEmployeeInput;
  OrderUpdateManyWithWhereWithoutAnnualBranchEmployeeInput: OrderUpdateManyWithWhereWithoutAnnualBranchEmployeeInput;
  OrderScalarWhereInput: OrderScalarWhereInput;
  CartUpsertWithWhereUniqueWithoutAnnualBranchEmployeeInput: CartUpsertWithWhereUniqueWithoutAnnualBranchEmployeeInput;
  CartUpdateWithWhereUniqueWithoutAnnualBranchEmployeeInput: CartUpdateWithWhereUniqueWithoutAnnualBranchEmployeeInput;
  CartUpdateManyWithWhereWithoutAnnualBranchEmployeeInput: CartUpdateManyWithWhereWithoutAnnualBranchEmployeeInput;
  CartScalarWhereInput: CartScalarWhereInput;
  BranchEmployeeUpsertWithoutAnnBranchEmployeeInput: BranchEmployeeUpsertWithoutAnnBranchEmployeeInput;
  BranchEmployeeUpdateWithoutAnnBranchEmployeeInput: BranchEmployeeUpdateWithoutAnnBranchEmployeeInput;
  FinancialYearUpsertWithoutAnnBranchEmplsInput: FinancialYearUpsertWithoutAnnBranchEmplsInput;
  FinancialYearUpdateWithoutAnnBranchEmplsInput: FinancialYearUpdateWithoutAnnBranchEmplsInput;
  OrderCreateWithoutAnnualClientInput: OrderCreateWithoutAnnualClientInput;
  OrderCreateOrConnectWithoutAnnualClientInput: OrderCreateOrConnectWithoutAnnualClientInput;
  OrderCreateManyAnnualClientInputEnvelope: OrderCreateManyAnnualClientInputEnvelope;
  CartCreateWithoutAnnualClientInput: CartCreateWithoutAnnualClientInput;
  CartCreateOrConnectWithoutAnnualClientInput: CartCreateOrConnectWithoutAnnualClientInput;
  CartCreateManyAnnualClientInputEnvelope: CartCreateManyAnnualClientInputEnvelope;
  ClientCreateWithoutAnnClientsInput: ClientCreateWithoutAnnClientsInput;
  ClientCreateOrConnectWithoutAnnClientsInput: ClientCreateOrConnectWithoutAnnClientsInput;
  FinancialYearCreateWithoutAnnClientsInput: FinancialYearCreateWithoutAnnClientsInput;
  FinancialYearCreateOrConnectWithoutAnnClientsInput: FinancialYearCreateOrConnectWithoutAnnClientsInput;
  OrderUpsertWithWhereUniqueWithoutAnnualClientInput: OrderUpsertWithWhereUniqueWithoutAnnualClientInput;
  OrderUpdateWithWhereUniqueWithoutAnnualClientInput: OrderUpdateWithWhereUniqueWithoutAnnualClientInput;
  OrderUpdateManyWithWhereWithoutAnnualClientInput: OrderUpdateManyWithWhereWithoutAnnualClientInput;
  CartUpsertWithWhereUniqueWithoutAnnualClientInput: CartUpsertWithWhereUniqueWithoutAnnualClientInput;
  CartUpdateWithWhereUniqueWithoutAnnualClientInput: CartUpdateWithWhereUniqueWithoutAnnualClientInput;
  CartUpdateManyWithWhereWithoutAnnualClientInput: CartUpdateManyWithWhereWithoutAnnualClientInput;
  ClientUpsertWithoutAnnClientsInput: ClientUpsertWithoutAnnClientsInput;
  ClientUpdateWithoutAnnClientsInput: ClientUpdateWithoutAnnClientsInput;
  FinancialYearUpsertWithoutAnnClientsInput: FinancialYearUpsertWithoutAnnClientsInput;
  FinancialYearUpdateWithoutAnnClientsInput: FinancialYearUpdateWithoutAnnClientsInput;
  ProductCreateWithoutCartsInput: ProductCreateWithoutCartsInput;
  ProductCreateOrConnectWithoutCartsInput: ProductCreateOrConnectWithoutCartsInput;
  AnnualClientCreateWithoutCartsInput: AnnualClientCreateWithoutCartsInput;
  AnnualClientCreateOrConnectWithoutCartsInput: AnnualClientCreateOrConnectWithoutCartsInput;
  AnnualBranchEmployeeCreateWithoutCartsInput: AnnualBranchEmployeeCreateWithoutCartsInput;
  AnnualBranchEmployeeCreateOrConnectWithoutCartsInput: AnnualBranchEmployeeCreateOrConnectWithoutCartsInput;
  ProductUpsertWithoutCartsInput: ProductUpsertWithoutCartsInput;
  ProductUpdateWithoutCartsInput: ProductUpdateWithoutCartsInput;
  AnnualClientUpsertWithoutCartsInput: AnnualClientUpsertWithoutCartsInput;
  AnnualClientUpdateWithoutCartsInput: AnnualClientUpdateWithoutCartsInput;
  AnnualBranchEmployeeUpsertWithoutCartsInput: AnnualBranchEmployeeUpsertWithoutCartsInput;
  AnnualBranchEmployeeUpdateWithoutCartsInput: AnnualBranchEmployeeUpdateWithoutCartsInput;
  ProductCreateWithoutCategoryInput: ProductCreateWithoutCategoryInput;
  ProductCreateOrConnectWithoutCategoryInput: ProductCreateOrConnectWithoutCategoryInput;
  ProductCreateManyCategoryInputEnvelope: ProductCreateManyCategoryInputEnvelope;
  ProductUpsertWithWhereUniqueWithoutCategoryInput: ProductUpsertWithWhereUniqueWithoutCategoryInput;
  ProductUpdateWithWhereUniqueWithoutCategoryInput: ProductUpdateWithWhereUniqueWithoutCategoryInput;
  ProductUpdateManyWithWhereWithoutCategoryInput: ProductUpdateManyWithWhereWithoutCategoryInput;
  ProductScalarWhereInput: ProductScalarWhereInput;
  AnnualClientCreateWithoutClientInput: AnnualClientCreateWithoutClientInput;
  AnnualClientCreateOrConnectWithoutClientInput: AnnualClientCreateOrConnectWithoutClientInput;
  AnnualClientCreateManyClientInputEnvelope: AnnualClientCreateManyClientInputEnvelope;
  AnnualClientUpsertWithWhereUniqueWithoutClientInput: AnnualClientUpsertWithWhereUniqueWithoutClientInput;
  AnnualClientUpdateWithWhereUniqueWithoutClientInput: AnnualClientUpdateWithWhereUniqueWithoutClientInput;
  AnnualClientUpdateManyWithWhereWithoutClientInput: AnnualClientUpdateManyWithWhereWithoutClientInput;
  AnnualClientScalarWhereInput: AnnualClientScalarWhereInput;
  OrderCreateWithoutOrderDetailsInput: OrderCreateWithoutOrderDetailsInput;
  OrderCreateOrConnectWithoutOrderDetailsInput: OrderCreateOrConnectWithoutOrderDetailsInput;
  ProductCreateWithoutOrderDetailsInput: ProductCreateWithoutOrderDetailsInput;
  ProductCreateOrConnectWithoutOrderDetailsInput: ProductCreateOrConnectWithoutOrderDetailsInput;
  OrderUpsertWithoutOrderDetailsInput: OrderUpsertWithoutOrderDetailsInput;
  OrderUpdateWithoutOrderDetailsInput: OrderUpdateWithoutOrderDetailsInput;
  ProductUpsertWithoutOrderDetailsInput: ProductUpsertWithoutOrderDetailsInput;
  ProductUpdateWithoutOrderDetailsInput: ProductUpdateWithoutOrderDetailsInput;
  OrderDetailCreateWithoutOrderInput: OrderDetailCreateWithoutOrderInput;
  OrderDetailCreateOrConnectWithoutOrderInput: OrderDetailCreateOrConnectWithoutOrderInput;
  OrderDetailCreateManyOrderInputEnvelope: OrderDetailCreateManyOrderInputEnvelope;
  FinanceCreateWithoutOrderInput: FinanceCreateWithoutOrderInput;
  FinanceCreateOrConnectWithoutOrderInput: FinanceCreateOrConnectWithoutOrderInput;
  FinanceCreateManyOrderInputEnvelope: FinanceCreateManyOrderInputEnvelope;
  AnnualClientCreateWithoutOrdersInput: AnnualClientCreateWithoutOrdersInput;
  AnnualClientCreateOrConnectWithoutOrdersInput: AnnualClientCreateOrConnectWithoutOrdersInput;
  AnnualBranchEmployeeCreateWithoutOrdersInput: AnnualBranchEmployeeCreateWithoutOrdersInput;
  AnnualBranchEmployeeCreateOrConnectWithoutOrdersInput: AnnualBranchEmployeeCreateOrConnectWithoutOrdersInput;
  OrderDetailUpsertWithWhereUniqueWithoutOrderInput: OrderDetailUpsertWithWhereUniqueWithoutOrderInput;
  OrderDetailUpdateWithWhereUniqueWithoutOrderInput: OrderDetailUpdateWithWhereUniqueWithoutOrderInput;
  OrderDetailUpdateManyWithWhereWithoutOrderInput: OrderDetailUpdateManyWithWhereWithoutOrderInput;
  OrderDetailScalarWhereInput: OrderDetailScalarWhereInput;
  FinanceUpsertWithWhereUniqueWithoutOrderInput: FinanceUpsertWithWhereUniqueWithoutOrderInput;
  FinanceUpdateWithWhereUniqueWithoutOrderInput: FinanceUpdateWithWhereUniqueWithoutOrderInput;
  FinanceUpdateManyWithWhereWithoutOrderInput: FinanceUpdateManyWithWhereWithoutOrderInput;
  FinanceScalarWhereInput: FinanceScalarWhereInput;
  AnnualClientUpsertWithoutOrdersInput: AnnualClientUpsertWithoutOrdersInput;
  AnnualClientUpdateWithoutOrdersInput: AnnualClientUpdateWithoutOrdersInput;
  AnnualBranchEmployeeUpsertWithoutOrdersInput: AnnualBranchEmployeeUpsertWithoutOrdersInput;
  AnnualBranchEmployeeUpdateWithoutOrdersInput: AnnualBranchEmployeeUpdateWithoutOrdersInput;
  BranchEmployeeCreateWithoutBranchInput: BranchEmployeeCreateWithoutBranchInput;
  BranchEmployeeCreateOrConnectWithoutBranchInput: BranchEmployeeCreateOrConnectWithoutBranchInput;
  BranchEmployeeCreateManyBranchInputEnvelope: BranchEmployeeCreateManyBranchInputEnvelope;
  BranchEmployeeUpsertWithWhereUniqueWithoutBranchInput: BranchEmployeeUpsertWithWhereUniqueWithoutBranchInput;
  BranchEmployeeUpdateWithWhereUniqueWithoutBranchInput: BranchEmployeeUpdateWithWhereUniqueWithoutBranchInput;
  BranchEmployeeUpdateManyWithWhereWithoutBranchInput: BranchEmployeeUpdateManyWithWhereWithoutBranchInput;
  BranchEmployeeScalarWhereInput: BranchEmployeeScalarWhereInput;
  AnnualBranchEmployeeCreateWithoutBranchEmployeeInput: AnnualBranchEmployeeCreateWithoutBranchEmployeeInput;
  AnnualBranchEmployeeCreateOrConnectWithoutBranchEmployeeInput: AnnualBranchEmployeeCreateOrConnectWithoutBranchEmployeeInput;
  AnnualBranchEmployeeCreateManyBranchEmployeeInputEnvelope: AnnualBranchEmployeeCreateManyBranchEmployeeInputEnvelope;
  EmployeeCreateWithoutBranchEmplsInput: EmployeeCreateWithoutBranchEmplsInput;
  EmployeeCreateOrConnectWithoutBranchEmplsInput: EmployeeCreateOrConnectWithoutBranchEmplsInput;
  BranchCreateWithoutBranchEmplsInput: BranchCreateWithoutBranchEmplsInput;
  BranchCreateOrConnectWithoutBranchEmplsInput: BranchCreateOrConnectWithoutBranchEmplsInput;
  EmployeeStatusCreateWithoutBranchEmplsInput: EmployeeStatusCreateWithoutBranchEmplsInput;
  EmployeeStatusCreateOrConnectWithoutBranchEmplsInput: EmployeeStatusCreateOrConnectWithoutBranchEmplsInput;
  AnnualBranchEmployeeUpsertWithWhereUniqueWithoutBranchEmployeeInput: AnnualBranchEmployeeUpsertWithWhereUniqueWithoutBranchEmployeeInput;
  AnnualBranchEmployeeUpdateWithWhereUniqueWithoutBranchEmployeeInput: AnnualBranchEmployeeUpdateWithWhereUniqueWithoutBranchEmployeeInput;
  AnnualBranchEmployeeUpdateManyWithWhereWithoutBranchEmployeeInput: AnnualBranchEmployeeUpdateManyWithWhereWithoutBranchEmployeeInput;
  AnnualBranchEmployeeScalarWhereInput: AnnualBranchEmployeeScalarWhereInput;
  EmployeeUpsertWithoutBranchEmplsInput: EmployeeUpsertWithoutBranchEmplsInput;
  EmployeeUpdateWithoutBranchEmplsInput: EmployeeUpdateWithoutBranchEmplsInput;
  BranchUpsertWithoutBranchEmplsInput: BranchUpsertWithoutBranchEmplsInput;
  BranchUpdateWithoutBranchEmplsInput: BranchUpdateWithoutBranchEmplsInput;
  EmployeeStatusUpsertWithoutBranchEmplsInput: EmployeeStatusUpsertWithoutBranchEmplsInput;
  EmployeeStatusUpdateWithoutBranchEmplsInput: EmployeeStatusUpdateWithoutBranchEmplsInput;
  AnnualBranchEmployeeCreateWithoutFinancialYearInput: AnnualBranchEmployeeCreateWithoutFinancialYearInput;
  AnnualBranchEmployeeCreateOrConnectWithoutFinancialYearInput: AnnualBranchEmployeeCreateOrConnectWithoutFinancialYearInput;
  AnnualBranchEmployeeCreateManyFinancialYearInputEnvelope: AnnualBranchEmployeeCreateManyFinancialYearInputEnvelope;
  AnnualClientCreateWithoutFinancialYearInput: AnnualClientCreateWithoutFinancialYearInput;
  AnnualClientCreateOrConnectWithoutFinancialYearInput: AnnualClientCreateOrConnectWithoutFinancialYearInput;
  AnnualClientCreateManyFinancialYearInputEnvelope: AnnualClientCreateManyFinancialYearInputEnvelope;
  AnnualBranchEmployeeUpsertWithWhereUniqueWithoutFinancialYearInput: AnnualBranchEmployeeUpsertWithWhereUniqueWithoutFinancialYearInput;
  AnnualBranchEmployeeUpdateWithWhereUniqueWithoutFinancialYearInput: AnnualBranchEmployeeUpdateWithWhereUniqueWithoutFinancialYearInput;
  AnnualBranchEmployeeUpdateManyWithWhereWithoutFinancialYearInput: AnnualBranchEmployeeUpdateManyWithWhereWithoutFinancialYearInput;
  AnnualClientUpsertWithWhereUniqueWithoutFinancialYearInput: AnnualClientUpsertWithWhereUniqueWithoutFinancialYearInput;
  AnnualClientUpdateWithWhereUniqueWithoutFinancialYearInput: AnnualClientUpdateWithWhereUniqueWithoutFinancialYearInput;
  AnnualClientUpdateManyWithWhereWithoutFinancialYearInput: AnnualClientUpdateManyWithWhereWithoutFinancialYearInput;
  BranchEmployeeCreateWithoutEmployeeInput: BranchEmployeeCreateWithoutEmployeeInput;
  BranchEmployeeCreateOrConnectWithoutEmployeeInput: BranchEmployeeCreateOrConnectWithoutEmployeeInput;
  BranchEmployeeCreateManyEmployeeInputEnvelope: BranchEmployeeCreateManyEmployeeInputEnvelope;
  BranchEmployeeUpsertWithWhereUniqueWithoutEmployeeInput: BranchEmployeeUpsertWithWhereUniqueWithoutEmployeeInput;
  BranchEmployeeUpdateWithWhereUniqueWithoutEmployeeInput: BranchEmployeeUpdateWithWhereUniqueWithoutEmployeeInput;
  BranchEmployeeUpdateManyWithWhereWithoutEmployeeInput: BranchEmployeeUpdateManyWithWhereWithoutEmployeeInput;
  BranchEmployeeCreateWithoutEmployeeStatusInput: BranchEmployeeCreateWithoutEmployeeStatusInput;
  BranchEmployeeCreateOrConnectWithoutEmployeeStatusInput: BranchEmployeeCreateOrConnectWithoutEmployeeStatusInput;
  BranchEmployeeCreateManyEmployeeStatusInputEnvelope: BranchEmployeeCreateManyEmployeeStatusInputEnvelope;
  BranchEmployeeUpsertWithWhereUniqueWithoutEmployeeStatusInput: BranchEmployeeUpsertWithWhereUniqueWithoutEmployeeStatusInput;
  BranchEmployeeUpdateWithWhereUniqueWithoutEmployeeStatusInput: BranchEmployeeUpdateWithWhereUniqueWithoutEmployeeStatusInput;
  BranchEmployeeUpdateManyWithWhereWithoutEmployeeStatusInput: BranchEmployeeUpdateManyWithWhereWithoutEmployeeStatusInput;
  OrderCreateWithoutFinancesInput: OrderCreateWithoutFinancesInput;
  OrderCreateOrConnectWithoutFinancesInput: OrderCreateOrConnectWithoutFinancesInput;
  OrderUpsertWithoutFinancesInput: OrderUpsertWithoutFinancesInput;
  OrderUpdateWithoutFinancesInput: OrderUpdateWithoutFinancesInput;
  CartCreateWithoutProductInput: CartCreateWithoutProductInput;
  CartCreateOrConnectWithoutProductInput: CartCreateOrConnectWithoutProductInput;
  CartCreateManyProductInputEnvelope: CartCreateManyProductInputEnvelope;
  OrderDetailCreateWithoutProductInput: OrderDetailCreateWithoutProductInput;
  OrderDetailCreateOrConnectWithoutProductInput: OrderDetailCreateOrConnectWithoutProductInput;
  OrderDetailCreateManyProductInputEnvelope: OrderDetailCreateManyProductInputEnvelope;
  CategoryCreateWithoutProductsInput: CategoryCreateWithoutProductsInput;
  CategoryCreateOrConnectWithoutProductsInput: CategoryCreateOrConnectWithoutProductsInput;
  CartUpsertWithWhereUniqueWithoutProductInput: CartUpsertWithWhereUniqueWithoutProductInput;
  CartUpdateWithWhereUniqueWithoutProductInput: CartUpdateWithWhereUniqueWithoutProductInput;
  CartUpdateManyWithWhereWithoutProductInput: CartUpdateManyWithWhereWithoutProductInput;
  OrderDetailUpsertWithWhereUniqueWithoutProductInput: OrderDetailUpsertWithWhereUniqueWithoutProductInput;
  OrderDetailUpdateWithWhereUniqueWithoutProductInput: OrderDetailUpdateWithWhereUniqueWithoutProductInput;
  OrderDetailUpdateManyWithWhereWithoutProductInput: OrderDetailUpdateManyWithWhereWithoutProductInput;
  CategoryUpsertWithoutProductsInput: CategoryUpsertWithoutProductsInput;
  CategoryUpdateWithoutProductsInput: CategoryUpdateWithoutProductsInput;
  OrderCreateManyAnnualBranchEmployeeInput: OrderCreateManyAnnualBranchEmployeeInput;
  CartCreateManyAnnualBranchEmployeeInput: CartCreateManyAnnualBranchEmployeeInput;
  OrderUpdateWithoutAnnualBranchEmployeeInput: OrderUpdateWithoutAnnualBranchEmployeeInput;
  OrderUpdateManyMutationInput: OrderUpdateManyMutationInput;
  StringFilter: StringFilter;
  IntFilter: IntFilter;
  DateTimeFilter: DateTimeFilter;
  StringNullableFilter: StringNullableFilter;
  CartUpdateWithoutAnnualBranchEmployeeInput: CartUpdateWithoutAnnualBranchEmployeeInput;
  CartUpdateManyMutationInput: CartUpdateManyMutationInput;
  FloatFilter: FloatFilter;
  OrderCreateManyAnnualClientInput: OrderCreateManyAnnualClientInput;
  CartCreateManyAnnualClientInput: CartCreateManyAnnualClientInput;
  OrderUpdateWithoutAnnualClientInput: OrderUpdateWithoutAnnualClientInput;
  CartUpdateWithoutAnnualClientInput: CartUpdateWithoutAnnualClientInput;
  ProductCreateManyCategoryInput: ProductCreateManyCategoryInput;
  ProductUpdateWithoutCategoryInput: ProductUpdateWithoutCategoryInput;
  ProductUpdateManyMutationInput: ProductUpdateManyMutationInput;
  AnnualClientCreateManyClientInput: AnnualClientCreateManyClientInput;
  AnnualClientUpdateWithoutClientInput: AnnualClientUpdateWithoutClientInput;
  AnnualClientUpdateManyMutationInput: AnnualClientUpdateManyMutationInput;
  OrderDetailCreateManyOrderInput: OrderDetailCreateManyOrderInput;
  FinanceCreateManyOrderInput: FinanceCreateManyOrderInput;
  OrderDetailUpdateWithoutOrderInput: OrderDetailUpdateWithoutOrderInput;
  OrderDetailUpdateManyMutationInput: OrderDetailUpdateManyMutationInput;
  FinanceUpdateWithoutOrderInput: FinanceUpdateWithoutOrderInput;
  FinanceUpdateManyMutationInput: FinanceUpdateManyMutationInput;
  BranchEmployeeCreateManyBranchInput: BranchEmployeeCreateManyBranchInput;
  BranchEmployeeUpdateWithoutBranchInput: BranchEmployeeUpdateWithoutBranchInput;
  BranchEmployeeUpdateManyMutationInput: BranchEmployeeUpdateManyMutationInput;
  AnnualBranchEmployeeCreateManyBranchEmployeeInput: AnnualBranchEmployeeCreateManyBranchEmployeeInput;
  AnnualBranchEmployeeUpdateWithoutBranchEmployeeInput: AnnualBranchEmployeeUpdateWithoutBranchEmployeeInput;
  AnnualBranchEmployeeUpdateManyMutationInput: AnnualBranchEmployeeUpdateManyMutationInput;
  AnnualBranchEmployeeCreateManyFinancialYearInput: AnnualBranchEmployeeCreateManyFinancialYearInput;
  AnnualClientCreateManyFinancialYearInput: AnnualClientCreateManyFinancialYearInput;
  AnnualBranchEmployeeUpdateWithoutFinancialYearInput: AnnualBranchEmployeeUpdateWithoutFinancialYearInput;
  AnnualClientUpdateWithoutFinancialYearInput: AnnualClientUpdateWithoutFinancialYearInput;
  BranchEmployeeCreateManyEmployeeInput: BranchEmployeeCreateManyEmployeeInput;
  BranchEmployeeUpdateWithoutEmployeeInput: BranchEmployeeUpdateWithoutEmployeeInput;
  BranchEmployeeCreateManyEmployeeStatusInput: BranchEmployeeCreateManyEmployeeStatusInput;
  BranchEmployeeUpdateWithoutEmployeeStatusInput: BranchEmployeeUpdateWithoutEmployeeStatusInput;
  CartCreateManyProductInput: CartCreateManyProductInput;
  OrderDetailCreateManyProductInput: OrderDetailCreateManyProductInput;
  CartUpdateWithoutProductInput: CartUpdateWithoutProductInput;
  OrderDetailUpdateWithoutProductInput: OrderDetailUpdateWithoutProductInput;
  QueryMode: QueryMode;
  NestedStringFilter: NestedStringFilter;
  NestedIntFilter: NestedIntFilter;
  NestedDateTimeFilter: NestedDateTimeFilter;
  NestedStringNullableFilter: NestedStringNullableFilter;
  NestedFloatFilter: NestedFloatFilter;
  Query: ResolverTypeWrapper<{}>;
  Mutation: ResolverTypeWrapper<{}>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AnnualBranchEmployee: AnnualBranchEmployee;
  String: Scalars['String'];
  Int: Scalars['Int'];
  AnnualClient: AnnualClient;
  Bonus: Bonus;
  Branch: Branch;
  BranchEmployee: BranchEmployee;
  Cart: Cart;
  Float: Scalars['Float'];
  Category: Category;
  Client: Client;
  Employee: Employee;
  EmployeeStatus: EmployeeStatus;
  Finance: Finance;
  FinancialYear: FinancialYear;
  Inventory: Inventory;
  Order: Order;
  OrderDetail: OrderDetail;
  Product: Product;
  OrderWhereUniqueInput: OrderWhereUniqueInput;
  CartWhereUniqueInput: CartWhereUniqueInput;
  BranchEmployeeWhereUniqueInput: BranchEmployeeWhereUniqueInput;
  DateTime: Scalars['DateTime'];
  ProductWhereUniqueInput: ProductWhereUniqueInput;
  AnnualBranchEmployeeWhereUniqueInput: AnnualBranchEmployeeWhereUniqueInput;
  AnnualClientWhereUniqueInput: AnnualClientWhereUniqueInput;
  FinanceWhereUniqueInput: FinanceWhereUniqueInput;
  OrderDetailWhereUniqueInput: OrderDetailWhereUniqueInput;
  ClientWhereUniqueInput: ClientWhereUniqueInput;
  BonusWhereUniqueInput: BonusWhereUniqueInput;
  BranchWhereUniqueInput: BranchWhereUniqueInput;
  FinancialYearWhereUniqueInput: FinancialYearWhereUniqueInput;
  EmployeeWhereUniqueInput: EmployeeWhereUniqueInput;
  EmployeeStatusWhereUniqueInput: EmployeeStatusWhereUniqueInput;
  InventoryWhereUniqueInput: InventoryWhereUniqueInput;
  CategoryWhereUniqueInput: CategoryWhereUniqueInput;
  AnnualBranchEmployeeCreateInput: AnnualBranchEmployeeCreateInput;
  AnnualBranchEmployeeUpdateInput: AnnualBranchEmployeeUpdateInput;
  AnnualClientCreateInput: AnnualClientCreateInput;
  AnnualClientUpdateInput: AnnualClientUpdateInput;
  CartCreateInput: CartCreateInput;
  CartUpdateInput: CartUpdateInput;
  CategoryCreateInput: CategoryCreateInput;
  CategoryUpdateInput: CategoryUpdateInput;
  ClientCreateInput: ClientCreateInput;
  ClientUpdateInput: ClientUpdateInput;
  OrderDetailCreateInput: OrderDetailCreateInput;
  OrderDetailUpdateInput: OrderDetailUpdateInput;
  OrderCreateInput: OrderCreateInput;
  OrderUpdateInput: OrderUpdateInput;
  BonusCreateInput: BonusCreateInput;
  BonusUpdateInput: BonusUpdateInput;
  BranchCreateInput: BranchCreateInput;
  BranchUpdateInput: BranchUpdateInput;
  BranchEmployeeCreateInput: BranchEmployeeCreateInput;
  BranchEmployeeUpdateInput: BranchEmployeeUpdateInput;
  FinancialYearCreateInput: FinancialYearCreateInput;
  FinancialYearUpdateInput: FinancialYearUpdateInput;
  EmployeeCreateInput: EmployeeCreateInput;
  EmployeeUpdateInput: EmployeeUpdateInput;
  EmployeeStatusCreateInput: EmployeeStatusCreateInput;
  EmployeeStatusUpdateInput: EmployeeStatusUpdateInput;
  FinanceCreateInput: FinanceCreateInput;
  FinanceUpdateInput: FinanceUpdateInput;
  InventoryCreateInput: InventoryCreateInput;
  InventoryUpdateInput: InventoryUpdateInput;
  ProductCreateInput: ProductCreateInput;
  ProductUpdateInput: ProductUpdateInput;
  OrderCreateNestedManyWithoutAnnualBranchEmployeeInput: OrderCreateNestedManyWithoutAnnualBranchEmployeeInput;
  CartCreateNestedManyWithoutAnnualBranchEmployeeInput: CartCreateNestedManyWithoutAnnualBranchEmployeeInput;
  BranchEmployeeCreateNestedOneWithoutAnnBranchEmployeeInput: BranchEmployeeCreateNestedOneWithoutAnnBranchEmployeeInput;
  FinancialYearCreateNestedOneWithoutAnnBranchEmplsInput: FinancialYearCreateNestedOneWithoutAnnBranchEmplsInput;
  StringFieldUpdateOperationsInput: StringFieldUpdateOperationsInput;
  DateTimeFieldUpdateOperationsInput: DateTimeFieldUpdateOperationsInput;
  OrderUpdateManyWithoutAnnualBranchEmployeeInput: OrderUpdateManyWithoutAnnualBranchEmployeeInput;
  CartUpdateManyWithoutAnnualBranchEmployeeInput: CartUpdateManyWithoutAnnualBranchEmployeeInput;
  BranchEmployeeUpdateOneWithoutAnnBranchEmployeeInput: BranchEmployeeUpdateOneWithoutAnnBranchEmployeeInput;
  Boolean: Scalars['Boolean'];
  FinancialYearUpdateOneWithoutAnnBranchEmplsInput: FinancialYearUpdateOneWithoutAnnBranchEmplsInput;
  OrderCreateNestedManyWithoutAnnualClientInput: OrderCreateNestedManyWithoutAnnualClientInput;
  CartCreateNestedManyWithoutAnnualClientInput: CartCreateNestedManyWithoutAnnualClientInput;
  ClientCreateNestedOneWithoutAnnClientsInput: ClientCreateNestedOneWithoutAnnClientsInput;
  FinancialYearCreateNestedOneWithoutAnnClientsInput: FinancialYearCreateNestedOneWithoutAnnClientsInput;
  OrderUpdateManyWithoutAnnualClientInput: OrderUpdateManyWithoutAnnualClientInput;
  CartUpdateManyWithoutAnnualClientInput: CartUpdateManyWithoutAnnualClientInput;
  ClientUpdateOneWithoutAnnClientsInput: ClientUpdateOneWithoutAnnClientsInput;
  FinancialYearUpdateOneWithoutAnnClientsInput: FinancialYearUpdateOneWithoutAnnClientsInput;
  ProductCreateNestedOneWithoutCartsInput: ProductCreateNestedOneWithoutCartsInput;
  AnnualClientCreateNestedOneWithoutCartsInput: AnnualClientCreateNestedOneWithoutCartsInput;
  AnnualBranchEmployeeCreateNestedOneWithoutCartsInput: AnnualBranchEmployeeCreateNestedOneWithoutCartsInput;
  FloatFieldUpdateOperationsInput: FloatFieldUpdateOperationsInput;
  IntFieldUpdateOperationsInput: IntFieldUpdateOperationsInput;
  ProductUpdateOneRequiredWithoutCartsInput: ProductUpdateOneRequiredWithoutCartsInput;
  AnnualClientUpdateOneWithoutCartsInput: AnnualClientUpdateOneWithoutCartsInput;
  AnnualBranchEmployeeUpdateOneWithoutCartsInput: AnnualBranchEmployeeUpdateOneWithoutCartsInput;
  ProductCreateNestedManyWithoutCategoryInput: ProductCreateNestedManyWithoutCategoryInput;
  ProductUpdateManyWithoutCategoryInput: ProductUpdateManyWithoutCategoryInput;
  AnnualClientCreateNestedManyWithoutClientInput: AnnualClientCreateNestedManyWithoutClientInput;
  AnnualClientUpdateManyWithoutClientInput: AnnualClientUpdateManyWithoutClientInput;
  OrderCreateNestedOneWithoutOrderDetailsInput: OrderCreateNestedOneWithoutOrderDetailsInput;
  ProductCreateNestedOneWithoutOrderDetailsInput: ProductCreateNestedOneWithoutOrderDetailsInput;
  OrderUpdateOneRequiredWithoutOrderDetailsInput: OrderUpdateOneRequiredWithoutOrderDetailsInput;
  ProductUpdateOneRequiredWithoutOrderDetailsInput: ProductUpdateOneRequiredWithoutOrderDetailsInput;
  OrderDetailCreateNestedManyWithoutOrderInput: OrderDetailCreateNestedManyWithoutOrderInput;
  FinanceCreateNestedManyWithoutOrderInput: FinanceCreateNestedManyWithoutOrderInput;
  AnnualClientCreateNestedOneWithoutOrdersInput: AnnualClientCreateNestedOneWithoutOrdersInput;
  AnnualBranchEmployeeCreateNestedOneWithoutOrdersInput: AnnualBranchEmployeeCreateNestedOneWithoutOrdersInput;
  OrderDetailUpdateManyWithoutOrderInput: OrderDetailUpdateManyWithoutOrderInput;
  FinanceUpdateManyWithoutOrderInput: FinanceUpdateManyWithoutOrderInput;
  AnnualClientUpdateOneWithoutOrdersInput: AnnualClientUpdateOneWithoutOrdersInput;
  AnnualBranchEmployeeUpdateOneWithoutOrdersInput: AnnualBranchEmployeeUpdateOneWithoutOrdersInput;
  BranchEmployeeCreateNestedManyWithoutBranchInput: BranchEmployeeCreateNestedManyWithoutBranchInput;
  BranchEmployeeUpdateManyWithoutBranchInput: BranchEmployeeUpdateManyWithoutBranchInput;
  AnnualBranchEmployeeCreateNestedManyWithoutBranchEmployeeInput: AnnualBranchEmployeeCreateNestedManyWithoutBranchEmployeeInput;
  EmployeeCreateNestedOneWithoutBranchEmplsInput: EmployeeCreateNestedOneWithoutBranchEmplsInput;
  BranchCreateNestedOneWithoutBranchEmplsInput: BranchCreateNestedOneWithoutBranchEmplsInput;
  EmployeeStatusCreateNestedOneWithoutBranchEmplsInput: EmployeeStatusCreateNestedOneWithoutBranchEmplsInput;
  AnnualBranchEmployeeUpdateManyWithoutBranchEmployeeInput: AnnualBranchEmployeeUpdateManyWithoutBranchEmployeeInput;
  EmployeeUpdateOneRequiredWithoutBranchEmplsInput: EmployeeUpdateOneRequiredWithoutBranchEmplsInput;
  BranchUpdateOneRequiredWithoutBranchEmplsInput: BranchUpdateOneRequiredWithoutBranchEmplsInput;
  EmployeeStatusUpdateOneRequiredWithoutBranchEmplsInput: EmployeeStatusUpdateOneRequiredWithoutBranchEmplsInput;
  AnnualBranchEmployeeCreateNestedManyWithoutFinancialYearInput: AnnualBranchEmployeeCreateNestedManyWithoutFinancialYearInput;
  AnnualClientCreateNestedManyWithoutFinancialYearInput: AnnualClientCreateNestedManyWithoutFinancialYearInput;
  AnnualBranchEmployeeUpdateManyWithoutFinancialYearInput: AnnualBranchEmployeeUpdateManyWithoutFinancialYearInput;
  AnnualClientUpdateManyWithoutFinancialYearInput: AnnualClientUpdateManyWithoutFinancialYearInput;
  BranchEmployeeCreateNestedManyWithoutEmployeeInput: BranchEmployeeCreateNestedManyWithoutEmployeeInput;
  BranchEmployeeUpdateManyWithoutEmployeeInput: BranchEmployeeUpdateManyWithoutEmployeeInput;
  BranchEmployeeCreateNestedManyWithoutEmployeeStatusInput: BranchEmployeeCreateNestedManyWithoutEmployeeStatusInput;
  BranchEmployeeUpdateManyWithoutEmployeeStatusInput: BranchEmployeeUpdateManyWithoutEmployeeStatusInput;
  OrderCreateNestedOneWithoutFinancesInput: OrderCreateNestedOneWithoutFinancesInput;
  OrderUpdateOneRequiredWithoutFinancesInput: OrderUpdateOneRequiredWithoutFinancesInput;
  CartCreateNestedManyWithoutProductInput: CartCreateNestedManyWithoutProductInput;
  OrderDetailCreateNestedManyWithoutProductInput: OrderDetailCreateNestedManyWithoutProductInput;
  CategoryCreateNestedOneWithoutProductsInput: CategoryCreateNestedOneWithoutProductsInput;
  CartUpdateManyWithoutProductInput: CartUpdateManyWithoutProductInput;
  OrderDetailUpdateManyWithoutProductInput: OrderDetailUpdateManyWithoutProductInput;
  CategoryUpdateOneWithoutProductsInput: CategoryUpdateOneWithoutProductsInput;
  OrderCreateWithoutAnnualBranchEmployeeInput: OrderCreateWithoutAnnualBranchEmployeeInput;
  OrderCreateOrConnectWithoutAnnualBranchEmployeeInput: OrderCreateOrConnectWithoutAnnualBranchEmployeeInput;
  OrderCreateManyAnnualBranchEmployeeInputEnvelope: OrderCreateManyAnnualBranchEmployeeInputEnvelope;
  CartCreateWithoutAnnualBranchEmployeeInput: CartCreateWithoutAnnualBranchEmployeeInput;
  CartCreateOrConnectWithoutAnnualBranchEmployeeInput: CartCreateOrConnectWithoutAnnualBranchEmployeeInput;
  CartCreateManyAnnualBranchEmployeeInputEnvelope: CartCreateManyAnnualBranchEmployeeInputEnvelope;
  BranchEmployeeCreateWithoutAnnBranchEmployeeInput: BranchEmployeeCreateWithoutAnnBranchEmployeeInput;
  BranchEmployeeCreateOrConnectWithoutAnnBranchEmployeeInput: BranchEmployeeCreateOrConnectWithoutAnnBranchEmployeeInput;
  FinancialYearCreateWithoutAnnBranchEmplsInput: FinancialYearCreateWithoutAnnBranchEmplsInput;
  FinancialYearCreateOrConnectWithoutAnnBranchEmplsInput: FinancialYearCreateOrConnectWithoutAnnBranchEmplsInput;
  OrderUpsertWithWhereUniqueWithoutAnnualBranchEmployeeInput: OrderUpsertWithWhereUniqueWithoutAnnualBranchEmployeeInput;
  OrderUpdateWithWhereUniqueWithoutAnnualBranchEmployeeInput: OrderUpdateWithWhereUniqueWithoutAnnualBranchEmployeeInput;
  OrderUpdateManyWithWhereWithoutAnnualBranchEmployeeInput: OrderUpdateManyWithWhereWithoutAnnualBranchEmployeeInput;
  OrderScalarWhereInput: OrderScalarWhereInput;
  CartUpsertWithWhereUniqueWithoutAnnualBranchEmployeeInput: CartUpsertWithWhereUniqueWithoutAnnualBranchEmployeeInput;
  CartUpdateWithWhereUniqueWithoutAnnualBranchEmployeeInput: CartUpdateWithWhereUniqueWithoutAnnualBranchEmployeeInput;
  CartUpdateManyWithWhereWithoutAnnualBranchEmployeeInput: CartUpdateManyWithWhereWithoutAnnualBranchEmployeeInput;
  CartScalarWhereInput: CartScalarWhereInput;
  BranchEmployeeUpsertWithoutAnnBranchEmployeeInput: BranchEmployeeUpsertWithoutAnnBranchEmployeeInput;
  BranchEmployeeUpdateWithoutAnnBranchEmployeeInput: BranchEmployeeUpdateWithoutAnnBranchEmployeeInput;
  FinancialYearUpsertWithoutAnnBranchEmplsInput: FinancialYearUpsertWithoutAnnBranchEmplsInput;
  FinancialYearUpdateWithoutAnnBranchEmplsInput: FinancialYearUpdateWithoutAnnBranchEmplsInput;
  OrderCreateWithoutAnnualClientInput: OrderCreateWithoutAnnualClientInput;
  OrderCreateOrConnectWithoutAnnualClientInput: OrderCreateOrConnectWithoutAnnualClientInput;
  OrderCreateManyAnnualClientInputEnvelope: OrderCreateManyAnnualClientInputEnvelope;
  CartCreateWithoutAnnualClientInput: CartCreateWithoutAnnualClientInput;
  CartCreateOrConnectWithoutAnnualClientInput: CartCreateOrConnectWithoutAnnualClientInput;
  CartCreateManyAnnualClientInputEnvelope: CartCreateManyAnnualClientInputEnvelope;
  ClientCreateWithoutAnnClientsInput: ClientCreateWithoutAnnClientsInput;
  ClientCreateOrConnectWithoutAnnClientsInput: ClientCreateOrConnectWithoutAnnClientsInput;
  FinancialYearCreateWithoutAnnClientsInput: FinancialYearCreateWithoutAnnClientsInput;
  FinancialYearCreateOrConnectWithoutAnnClientsInput: FinancialYearCreateOrConnectWithoutAnnClientsInput;
  OrderUpsertWithWhereUniqueWithoutAnnualClientInput: OrderUpsertWithWhereUniqueWithoutAnnualClientInput;
  OrderUpdateWithWhereUniqueWithoutAnnualClientInput: OrderUpdateWithWhereUniqueWithoutAnnualClientInput;
  OrderUpdateManyWithWhereWithoutAnnualClientInput: OrderUpdateManyWithWhereWithoutAnnualClientInput;
  CartUpsertWithWhereUniqueWithoutAnnualClientInput: CartUpsertWithWhereUniqueWithoutAnnualClientInput;
  CartUpdateWithWhereUniqueWithoutAnnualClientInput: CartUpdateWithWhereUniqueWithoutAnnualClientInput;
  CartUpdateManyWithWhereWithoutAnnualClientInput: CartUpdateManyWithWhereWithoutAnnualClientInput;
  ClientUpsertWithoutAnnClientsInput: ClientUpsertWithoutAnnClientsInput;
  ClientUpdateWithoutAnnClientsInput: ClientUpdateWithoutAnnClientsInput;
  FinancialYearUpsertWithoutAnnClientsInput: FinancialYearUpsertWithoutAnnClientsInput;
  FinancialYearUpdateWithoutAnnClientsInput: FinancialYearUpdateWithoutAnnClientsInput;
  ProductCreateWithoutCartsInput: ProductCreateWithoutCartsInput;
  ProductCreateOrConnectWithoutCartsInput: ProductCreateOrConnectWithoutCartsInput;
  AnnualClientCreateWithoutCartsInput: AnnualClientCreateWithoutCartsInput;
  AnnualClientCreateOrConnectWithoutCartsInput: AnnualClientCreateOrConnectWithoutCartsInput;
  AnnualBranchEmployeeCreateWithoutCartsInput: AnnualBranchEmployeeCreateWithoutCartsInput;
  AnnualBranchEmployeeCreateOrConnectWithoutCartsInput: AnnualBranchEmployeeCreateOrConnectWithoutCartsInput;
  ProductUpsertWithoutCartsInput: ProductUpsertWithoutCartsInput;
  ProductUpdateWithoutCartsInput: ProductUpdateWithoutCartsInput;
  AnnualClientUpsertWithoutCartsInput: AnnualClientUpsertWithoutCartsInput;
  AnnualClientUpdateWithoutCartsInput: AnnualClientUpdateWithoutCartsInput;
  AnnualBranchEmployeeUpsertWithoutCartsInput: AnnualBranchEmployeeUpsertWithoutCartsInput;
  AnnualBranchEmployeeUpdateWithoutCartsInput: AnnualBranchEmployeeUpdateWithoutCartsInput;
  ProductCreateWithoutCategoryInput: ProductCreateWithoutCategoryInput;
  ProductCreateOrConnectWithoutCategoryInput: ProductCreateOrConnectWithoutCategoryInput;
  ProductCreateManyCategoryInputEnvelope: ProductCreateManyCategoryInputEnvelope;
  ProductUpsertWithWhereUniqueWithoutCategoryInput: ProductUpsertWithWhereUniqueWithoutCategoryInput;
  ProductUpdateWithWhereUniqueWithoutCategoryInput: ProductUpdateWithWhereUniqueWithoutCategoryInput;
  ProductUpdateManyWithWhereWithoutCategoryInput: ProductUpdateManyWithWhereWithoutCategoryInput;
  ProductScalarWhereInput: ProductScalarWhereInput;
  AnnualClientCreateWithoutClientInput: AnnualClientCreateWithoutClientInput;
  AnnualClientCreateOrConnectWithoutClientInput: AnnualClientCreateOrConnectWithoutClientInput;
  AnnualClientCreateManyClientInputEnvelope: AnnualClientCreateManyClientInputEnvelope;
  AnnualClientUpsertWithWhereUniqueWithoutClientInput: AnnualClientUpsertWithWhereUniqueWithoutClientInput;
  AnnualClientUpdateWithWhereUniqueWithoutClientInput: AnnualClientUpdateWithWhereUniqueWithoutClientInput;
  AnnualClientUpdateManyWithWhereWithoutClientInput: AnnualClientUpdateManyWithWhereWithoutClientInput;
  AnnualClientScalarWhereInput: AnnualClientScalarWhereInput;
  OrderCreateWithoutOrderDetailsInput: OrderCreateWithoutOrderDetailsInput;
  OrderCreateOrConnectWithoutOrderDetailsInput: OrderCreateOrConnectWithoutOrderDetailsInput;
  ProductCreateWithoutOrderDetailsInput: ProductCreateWithoutOrderDetailsInput;
  ProductCreateOrConnectWithoutOrderDetailsInput: ProductCreateOrConnectWithoutOrderDetailsInput;
  OrderUpsertWithoutOrderDetailsInput: OrderUpsertWithoutOrderDetailsInput;
  OrderUpdateWithoutOrderDetailsInput: OrderUpdateWithoutOrderDetailsInput;
  ProductUpsertWithoutOrderDetailsInput: ProductUpsertWithoutOrderDetailsInput;
  ProductUpdateWithoutOrderDetailsInput: ProductUpdateWithoutOrderDetailsInput;
  OrderDetailCreateWithoutOrderInput: OrderDetailCreateWithoutOrderInput;
  OrderDetailCreateOrConnectWithoutOrderInput: OrderDetailCreateOrConnectWithoutOrderInput;
  OrderDetailCreateManyOrderInputEnvelope: OrderDetailCreateManyOrderInputEnvelope;
  FinanceCreateWithoutOrderInput: FinanceCreateWithoutOrderInput;
  FinanceCreateOrConnectWithoutOrderInput: FinanceCreateOrConnectWithoutOrderInput;
  FinanceCreateManyOrderInputEnvelope: FinanceCreateManyOrderInputEnvelope;
  AnnualClientCreateWithoutOrdersInput: AnnualClientCreateWithoutOrdersInput;
  AnnualClientCreateOrConnectWithoutOrdersInput: AnnualClientCreateOrConnectWithoutOrdersInput;
  AnnualBranchEmployeeCreateWithoutOrdersInput: AnnualBranchEmployeeCreateWithoutOrdersInput;
  AnnualBranchEmployeeCreateOrConnectWithoutOrdersInput: AnnualBranchEmployeeCreateOrConnectWithoutOrdersInput;
  OrderDetailUpsertWithWhereUniqueWithoutOrderInput: OrderDetailUpsertWithWhereUniqueWithoutOrderInput;
  OrderDetailUpdateWithWhereUniqueWithoutOrderInput: OrderDetailUpdateWithWhereUniqueWithoutOrderInput;
  OrderDetailUpdateManyWithWhereWithoutOrderInput: OrderDetailUpdateManyWithWhereWithoutOrderInput;
  OrderDetailScalarWhereInput: OrderDetailScalarWhereInput;
  FinanceUpsertWithWhereUniqueWithoutOrderInput: FinanceUpsertWithWhereUniqueWithoutOrderInput;
  FinanceUpdateWithWhereUniqueWithoutOrderInput: FinanceUpdateWithWhereUniqueWithoutOrderInput;
  FinanceUpdateManyWithWhereWithoutOrderInput: FinanceUpdateManyWithWhereWithoutOrderInput;
  FinanceScalarWhereInput: FinanceScalarWhereInput;
  AnnualClientUpsertWithoutOrdersInput: AnnualClientUpsertWithoutOrdersInput;
  AnnualClientUpdateWithoutOrdersInput: AnnualClientUpdateWithoutOrdersInput;
  AnnualBranchEmployeeUpsertWithoutOrdersInput: AnnualBranchEmployeeUpsertWithoutOrdersInput;
  AnnualBranchEmployeeUpdateWithoutOrdersInput: AnnualBranchEmployeeUpdateWithoutOrdersInput;
  BranchEmployeeCreateWithoutBranchInput: BranchEmployeeCreateWithoutBranchInput;
  BranchEmployeeCreateOrConnectWithoutBranchInput: BranchEmployeeCreateOrConnectWithoutBranchInput;
  BranchEmployeeCreateManyBranchInputEnvelope: BranchEmployeeCreateManyBranchInputEnvelope;
  BranchEmployeeUpsertWithWhereUniqueWithoutBranchInput: BranchEmployeeUpsertWithWhereUniqueWithoutBranchInput;
  BranchEmployeeUpdateWithWhereUniqueWithoutBranchInput: BranchEmployeeUpdateWithWhereUniqueWithoutBranchInput;
  BranchEmployeeUpdateManyWithWhereWithoutBranchInput: BranchEmployeeUpdateManyWithWhereWithoutBranchInput;
  BranchEmployeeScalarWhereInput: BranchEmployeeScalarWhereInput;
  AnnualBranchEmployeeCreateWithoutBranchEmployeeInput: AnnualBranchEmployeeCreateWithoutBranchEmployeeInput;
  AnnualBranchEmployeeCreateOrConnectWithoutBranchEmployeeInput: AnnualBranchEmployeeCreateOrConnectWithoutBranchEmployeeInput;
  AnnualBranchEmployeeCreateManyBranchEmployeeInputEnvelope: AnnualBranchEmployeeCreateManyBranchEmployeeInputEnvelope;
  EmployeeCreateWithoutBranchEmplsInput: EmployeeCreateWithoutBranchEmplsInput;
  EmployeeCreateOrConnectWithoutBranchEmplsInput: EmployeeCreateOrConnectWithoutBranchEmplsInput;
  BranchCreateWithoutBranchEmplsInput: BranchCreateWithoutBranchEmplsInput;
  BranchCreateOrConnectWithoutBranchEmplsInput: BranchCreateOrConnectWithoutBranchEmplsInput;
  EmployeeStatusCreateWithoutBranchEmplsInput: EmployeeStatusCreateWithoutBranchEmplsInput;
  EmployeeStatusCreateOrConnectWithoutBranchEmplsInput: EmployeeStatusCreateOrConnectWithoutBranchEmplsInput;
  AnnualBranchEmployeeUpsertWithWhereUniqueWithoutBranchEmployeeInput: AnnualBranchEmployeeUpsertWithWhereUniqueWithoutBranchEmployeeInput;
  AnnualBranchEmployeeUpdateWithWhereUniqueWithoutBranchEmployeeInput: AnnualBranchEmployeeUpdateWithWhereUniqueWithoutBranchEmployeeInput;
  AnnualBranchEmployeeUpdateManyWithWhereWithoutBranchEmployeeInput: AnnualBranchEmployeeUpdateManyWithWhereWithoutBranchEmployeeInput;
  AnnualBranchEmployeeScalarWhereInput: AnnualBranchEmployeeScalarWhereInput;
  EmployeeUpsertWithoutBranchEmplsInput: EmployeeUpsertWithoutBranchEmplsInput;
  EmployeeUpdateWithoutBranchEmplsInput: EmployeeUpdateWithoutBranchEmplsInput;
  BranchUpsertWithoutBranchEmplsInput: BranchUpsertWithoutBranchEmplsInput;
  BranchUpdateWithoutBranchEmplsInput: BranchUpdateWithoutBranchEmplsInput;
  EmployeeStatusUpsertWithoutBranchEmplsInput: EmployeeStatusUpsertWithoutBranchEmplsInput;
  EmployeeStatusUpdateWithoutBranchEmplsInput: EmployeeStatusUpdateWithoutBranchEmplsInput;
  AnnualBranchEmployeeCreateWithoutFinancialYearInput: AnnualBranchEmployeeCreateWithoutFinancialYearInput;
  AnnualBranchEmployeeCreateOrConnectWithoutFinancialYearInput: AnnualBranchEmployeeCreateOrConnectWithoutFinancialYearInput;
  AnnualBranchEmployeeCreateManyFinancialYearInputEnvelope: AnnualBranchEmployeeCreateManyFinancialYearInputEnvelope;
  AnnualClientCreateWithoutFinancialYearInput: AnnualClientCreateWithoutFinancialYearInput;
  AnnualClientCreateOrConnectWithoutFinancialYearInput: AnnualClientCreateOrConnectWithoutFinancialYearInput;
  AnnualClientCreateManyFinancialYearInputEnvelope: AnnualClientCreateManyFinancialYearInputEnvelope;
  AnnualBranchEmployeeUpsertWithWhereUniqueWithoutFinancialYearInput: AnnualBranchEmployeeUpsertWithWhereUniqueWithoutFinancialYearInput;
  AnnualBranchEmployeeUpdateWithWhereUniqueWithoutFinancialYearInput: AnnualBranchEmployeeUpdateWithWhereUniqueWithoutFinancialYearInput;
  AnnualBranchEmployeeUpdateManyWithWhereWithoutFinancialYearInput: AnnualBranchEmployeeUpdateManyWithWhereWithoutFinancialYearInput;
  AnnualClientUpsertWithWhereUniqueWithoutFinancialYearInput: AnnualClientUpsertWithWhereUniqueWithoutFinancialYearInput;
  AnnualClientUpdateWithWhereUniqueWithoutFinancialYearInput: AnnualClientUpdateWithWhereUniqueWithoutFinancialYearInput;
  AnnualClientUpdateManyWithWhereWithoutFinancialYearInput: AnnualClientUpdateManyWithWhereWithoutFinancialYearInput;
  BranchEmployeeCreateWithoutEmployeeInput: BranchEmployeeCreateWithoutEmployeeInput;
  BranchEmployeeCreateOrConnectWithoutEmployeeInput: BranchEmployeeCreateOrConnectWithoutEmployeeInput;
  BranchEmployeeCreateManyEmployeeInputEnvelope: BranchEmployeeCreateManyEmployeeInputEnvelope;
  BranchEmployeeUpsertWithWhereUniqueWithoutEmployeeInput: BranchEmployeeUpsertWithWhereUniqueWithoutEmployeeInput;
  BranchEmployeeUpdateWithWhereUniqueWithoutEmployeeInput: BranchEmployeeUpdateWithWhereUniqueWithoutEmployeeInput;
  BranchEmployeeUpdateManyWithWhereWithoutEmployeeInput: BranchEmployeeUpdateManyWithWhereWithoutEmployeeInput;
  BranchEmployeeCreateWithoutEmployeeStatusInput: BranchEmployeeCreateWithoutEmployeeStatusInput;
  BranchEmployeeCreateOrConnectWithoutEmployeeStatusInput: BranchEmployeeCreateOrConnectWithoutEmployeeStatusInput;
  BranchEmployeeCreateManyEmployeeStatusInputEnvelope: BranchEmployeeCreateManyEmployeeStatusInputEnvelope;
  BranchEmployeeUpsertWithWhereUniqueWithoutEmployeeStatusInput: BranchEmployeeUpsertWithWhereUniqueWithoutEmployeeStatusInput;
  BranchEmployeeUpdateWithWhereUniqueWithoutEmployeeStatusInput: BranchEmployeeUpdateWithWhereUniqueWithoutEmployeeStatusInput;
  BranchEmployeeUpdateManyWithWhereWithoutEmployeeStatusInput: BranchEmployeeUpdateManyWithWhereWithoutEmployeeStatusInput;
  OrderCreateWithoutFinancesInput: OrderCreateWithoutFinancesInput;
  OrderCreateOrConnectWithoutFinancesInput: OrderCreateOrConnectWithoutFinancesInput;
  OrderUpsertWithoutFinancesInput: OrderUpsertWithoutFinancesInput;
  OrderUpdateWithoutFinancesInput: OrderUpdateWithoutFinancesInput;
  CartCreateWithoutProductInput: CartCreateWithoutProductInput;
  CartCreateOrConnectWithoutProductInput: CartCreateOrConnectWithoutProductInput;
  CartCreateManyProductInputEnvelope: CartCreateManyProductInputEnvelope;
  OrderDetailCreateWithoutProductInput: OrderDetailCreateWithoutProductInput;
  OrderDetailCreateOrConnectWithoutProductInput: OrderDetailCreateOrConnectWithoutProductInput;
  OrderDetailCreateManyProductInputEnvelope: OrderDetailCreateManyProductInputEnvelope;
  CategoryCreateWithoutProductsInput: CategoryCreateWithoutProductsInput;
  CategoryCreateOrConnectWithoutProductsInput: CategoryCreateOrConnectWithoutProductsInput;
  CartUpsertWithWhereUniqueWithoutProductInput: CartUpsertWithWhereUniqueWithoutProductInput;
  CartUpdateWithWhereUniqueWithoutProductInput: CartUpdateWithWhereUniqueWithoutProductInput;
  CartUpdateManyWithWhereWithoutProductInput: CartUpdateManyWithWhereWithoutProductInput;
  OrderDetailUpsertWithWhereUniqueWithoutProductInput: OrderDetailUpsertWithWhereUniqueWithoutProductInput;
  OrderDetailUpdateWithWhereUniqueWithoutProductInput: OrderDetailUpdateWithWhereUniqueWithoutProductInput;
  OrderDetailUpdateManyWithWhereWithoutProductInput: OrderDetailUpdateManyWithWhereWithoutProductInput;
  CategoryUpsertWithoutProductsInput: CategoryUpsertWithoutProductsInput;
  CategoryUpdateWithoutProductsInput: CategoryUpdateWithoutProductsInput;
  OrderCreateManyAnnualBranchEmployeeInput: OrderCreateManyAnnualBranchEmployeeInput;
  CartCreateManyAnnualBranchEmployeeInput: CartCreateManyAnnualBranchEmployeeInput;
  OrderUpdateWithoutAnnualBranchEmployeeInput: OrderUpdateWithoutAnnualBranchEmployeeInput;
  OrderUpdateManyMutationInput: OrderUpdateManyMutationInput;
  StringFilter: StringFilter;
  IntFilter: IntFilter;
  DateTimeFilter: DateTimeFilter;
  StringNullableFilter: StringNullableFilter;
  CartUpdateWithoutAnnualBranchEmployeeInput: CartUpdateWithoutAnnualBranchEmployeeInput;
  CartUpdateManyMutationInput: CartUpdateManyMutationInput;
  FloatFilter: FloatFilter;
  OrderCreateManyAnnualClientInput: OrderCreateManyAnnualClientInput;
  CartCreateManyAnnualClientInput: CartCreateManyAnnualClientInput;
  OrderUpdateWithoutAnnualClientInput: OrderUpdateWithoutAnnualClientInput;
  CartUpdateWithoutAnnualClientInput: CartUpdateWithoutAnnualClientInput;
  ProductCreateManyCategoryInput: ProductCreateManyCategoryInput;
  ProductUpdateWithoutCategoryInput: ProductUpdateWithoutCategoryInput;
  ProductUpdateManyMutationInput: ProductUpdateManyMutationInput;
  AnnualClientCreateManyClientInput: AnnualClientCreateManyClientInput;
  AnnualClientUpdateWithoutClientInput: AnnualClientUpdateWithoutClientInput;
  AnnualClientUpdateManyMutationInput: AnnualClientUpdateManyMutationInput;
  OrderDetailCreateManyOrderInput: OrderDetailCreateManyOrderInput;
  FinanceCreateManyOrderInput: FinanceCreateManyOrderInput;
  OrderDetailUpdateWithoutOrderInput: OrderDetailUpdateWithoutOrderInput;
  OrderDetailUpdateManyMutationInput: OrderDetailUpdateManyMutationInput;
  FinanceUpdateWithoutOrderInput: FinanceUpdateWithoutOrderInput;
  FinanceUpdateManyMutationInput: FinanceUpdateManyMutationInput;
  BranchEmployeeCreateManyBranchInput: BranchEmployeeCreateManyBranchInput;
  BranchEmployeeUpdateWithoutBranchInput: BranchEmployeeUpdateWithoutBranchInput;
  BranchEmployeeUpdateManyMutationInput: BranchEmployeeUpdateManyMutationInput;
  AnnualBranchEmployeeCreateManyBranchEmployeeInput: AnnualBranchEmployeeCreateManyBranchEmployeeInput;
  AnnualBranchEmployeeUpdateWithoutBranchEmployeeInput: AnnualBranchEmployeeUpdateWithoutBranchEmployeeInput;
  AnnualBranchEmployeeUpdateManyMutationInput: AnnualBranchEmployeeUpdateManyMutationInput;
  AnnualBranchEmployeeCreateManyFinancialYearInput: AnnualBranchEmployeeCreateManyFinancialYearInput;
  AnnualClientCreateManyFinancialYearInput: AnnualClientCreateManyFinancialYearInput;
  AnnualBranchEmployeeUpdateWithoutFinancialYearInput: AnnualBranchEmployeeUpdateWithoutFinancialYearInput;
  AnnualClientUpdateWithoutFinancialYearInput: AnnualClientUpdateWithoutFinancialYearInput;
  BranchEmployeeCreateManyEmployeeInput: BranchEmployeeCreateManyEmployeeInput;
  BranchEmployeeUpdateWithoutEmployeeInput: BranchEmployeeUpdateWithoutEmployeeInput;
  BranchEmployeeCreateManyEmployeeStatusInput: BranchEmployeeCreateManyEmployeeStatusInput;
  BranchEmployeeUpdateWithoutEmployeeStatusInput: BranchEmployeeUpdateWithoutEmployeeStatusInput;
  CartCreateManyProductInput: CartCreateManyProductInput;
  OrderDetailCreateManyProductInput: OrderDetailCreateManyProductInput;
  CartUpdateWithoutProductInput: CartUpdateWithoutProductInput;
  OrderDetailUpdateWithoutProductInput: OrderDetailUpdateWithoutProductInput;
  NestedStringFilter: NestedStringFilter;
  NestedIntFilter: NestedIntFilter;
  NestedDateTimeFilter: NestedDateTimeFilter;
  NestedStringNullableFilter: NestedStringNullableFilter;
  NestedFloatFilter: NestedFloatFilter;
  Query: {};
  Mutation: {};
};

export type AnnualBranchEmployeeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnnualBranchEmployee'] = ResolversParentTypes['AnnualBranchEmployee']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  BranchEmployee?: Resolver<Maybe<ResolversTypes['BranchEmployee']>, ParentType, ContextType>;
  FinancialYear?: Resolver<Maybe<ResolversTypes['FinancialYear']>, ParentType, ContextType>;
  orders?: Resolver<Array<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<AnnualBranchEmployeeOrdersArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnnualClientResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnnualClient'] = ResolversParentTypes['AnnualClient']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Client?: Resolver<Maybe<ResolversTypes['Client']>, ParentType, ContextType>;
  FinancialYear?: Resolver<Maybe<ResolversTypes['FinancialYear']>, ParentType, ContextType>;
  orders?: Resolver<Array<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<AnnualClientOrdersArgs, never>>;
  carts?: Resolver<Array<ResolversTypes['Cart']>, ParentType, ContextType, RequireFields<AnnualClientCartsArgs, never>>;
  clientId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  financialYearId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BonusResolvers<ContextType = any, ParentType extends ResolversParentTypes['Bonus'] = ResolversParentTypes['Bonus']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bonusName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BranchResolvers<ContextType = any, ParentType extends ResolversParentTypes['Branch'] = ResolversParentTypes['Branch']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  branchName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  branchEmpls?: Resolver<Array<ResolversTypes['BranchEmployee']>, ParentType, ContextType, RequireFields<BranchBranchEmplsArgs, never>>;
  branchCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BranchEmployeeResolvers<ContextType = any, ParentType extends ResolversParentTypes['BranchEmployee'] = ResolversParentTypes['BranchEmployee']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  endDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  startDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  Employee?: Resolver<ResolversTypes['Employee'], ParentType, ContextType>;
  EmployeeStatus?: Resolver<ResolversTypes['EmployeeStatus'], ParentType, ContextType>;
  Branch?: Resolver<ResolversTypes['Branch'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartResolvers<ContextType = any, ParentType extends ResolversParentTypes['Cart'] = ResolversParentTypes['Cart']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  AnnualClient?: Resolver<Maybe<ResolversTypes['AnnualClient']>, ParentType, ContextType>;
  orderDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  qtty?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  pdtCost?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  salesPrice?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  AnnualBranchEmployee?: Resolver<Maybe<ResolversTypes['AnnualBranchEmployee']>, ParentType, ContextType>;
  annualBranchEmployeeId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Product?: Resolver<ResolversTypes['Product'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  categoryName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  categoryCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  products?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<CategoryProductsArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClientResolvers<ContextType = any, ParentType extends ResolversParentTypes['Client'] = ResolversParentTypes['Client']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  clientNames?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  clientPhoneNumb?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EmployeeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Employee'] = ResolversParentTypes['Employee']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  employeeNames?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  branchEmpls?: Resolver<Array<ResolversTypes['BranchEmployee']>, ParentType, ContextType, RequireFields<EmployeeBranchEmplsArgs, never>>;
  employeePhoneNumb?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  employeeCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EmployeeStatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['EmployeeStatus'] = ResolversParentTypes['EmployeeStatus']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FinanceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Finance'] = ResolversParentTypes['Finance']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  amtPaid?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  orderId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Order?: Resolver<ResolversTypes['Order'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FinancialYearResolvers<ContextType = any, ParentType extends ResolversParentTypes['FinancialYear'] = ResolversParentTypes['FinancialYear']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  annBranchEmpls?: Resolver<Array<ResolversTypes['AnnualBranchEmployee']>, ParentType, ContextType, RequireFields<FinancialYearAnnBranchEmplsArgs, never>>;
  yearName?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  annClients?: Resolver<Array<ResolversTypes['AnnualClient']>, ParentType, ContextType, RequireFields<FinancialYearAnnClientsArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InventoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Inventory'] = ResolversParentTypes['Inventory']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  qttyInHand?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderResolvers<ContextType = any, ParentType extends ResolversParentTypes['Order'] = ResolversParentTypes['Order']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  orderTotal?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  AnnualBranchEmployee?: Resolver<Maybe<ResolversTypes['AnnualBranchEmployee']>, ParentType, ContextType>;
  annualBranchEmployeeId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  AnnualClient?: Resolver<Maybe<ResolversTypes['AnnualClient']>, ParentType, ContextType>;
  annualClientId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  finances?: Resolver<Array<ResolversTypes['Finance']>, ParentType, ContextType, RequireFields<OrderFinancesArgs, never>>;
  totalPaid?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  orderDetails?: Resolver<Array<ResolversTypes['OrderDetail']>, ParentType, ContextType, RequireFields<OrderOrderDetailsArgs, never>>;
  orderNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderDetailResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderDetail'] = ResolversParentTypes['OrderDetail']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  qtty?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  pdtCost?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  salesPrice?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  Order?: Resolver<ResolversTypes['Order'], ParentType, ContextType>;
  orderId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Product?: Resolver<ResolversTypes['Product'], ParentType, ContextType>;
  productId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pdtName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pdtCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>;
  carts?: Resolver<Array<ResolversTypes['Cart']>, ParentType, ContextType, RequireFields<ProductCartsArgs, never>>;
  categoryId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unitPrice?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  orderDetails?: Resolver<Array<ResolversTypes['OrderDetail']>, ParentType, ContextType, RequireFields<ProductOrderDetailsArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  annualBranchEmployee?: Resolver<Maybe<ResolversTypes['AnnualBranchEmployee']>, ParentType, ContextType, RequireFields<QueryAnnualBranchEmployeeArgs, 'where'>>;
  annualBranchEmployees?: Resolver<Array<ResolversTypes['AnnualBranchEmployee']>, ParentType, ContextType, RequireFields<QueryAnnualBranchEmployeesArgs, never>>;
  annualBranchEmployeeById?: Resolver<Maybe<ResolversTypes['AnnualBranchEmployee']>, ParentType, ContextType, RequireFields<QueryAnnualBranchEmployeeByIdArgs, never>>;
  annualBranchEmployeeByBranchEmployeeAndYear?: Resolver<Maybe<ResolversTypes['AnnualBranchEmployee']>, ParentType, ContextType, RequireFields<QueryAnnualBranchEmployeeByBranchEmployeeAndYearArgs, never>>;
  annualClient?: Resolver<Maybe<ResolversTypes['AnnualClient']>, ParentType, ContextType, RequireFields<QueryAnnualClientArgs, 'where'>>;
  annualClients?: Resolver<Array<ResolversTypes['AnnualClient']>, ParentType, ContextType, RequireFields<QueryAnnualClientsArgs, never>>;
  annualClientById?: Resolver<Maybe<ResolversTypes['AnnualClient']>, ParentType, ContextType, RequireFields<QueryAnnualClientByIdArgs, never>>;
  annualClientByPhoneAndYear?: Resolver<Maybe<ResolversTypes['AnnualClient']>, ParentType, ContextType, RequireFields<QueryAnnualClientByPhoneAndYearArgs, never>>;
  annualClientByYearClient?: Resolver<Maybe<ResolversTypes['AnnualClient']>, ParentType, ContextType, RequireFields<QueryAnnualClientByYearClientArgs, never>>;
  cart?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType, RequireFields<QueryCartArgs, 'where'>>;
  carts?: Resolver<Array<ResolversTypes['Cart']>, ParentType, ContextType, RequireFields<QueryCartsArgs, never>>;
  cartById?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType, RequireFields<QueryCartByIdArgs, never>>;
  cartByAnnualClientIdAndEmplId?: Resolver<Maybe<Array<Maybe<ResolversTypes['Cart']>>>, ParentType, ContextType, RequireFields<QueryCartByAnnualClientIdAndEmplIdArgs, never>>;
  client?: Resolver<Maybe<ResolversTypes['Client']>, ParentType, ContextType, RequireFields<QueryClientArgs, 'where'>>;
  clients?: Resolver<Maybe<Array<Maybe<ResolversTypes['Client']>>>, ParentType, ContextType>;
  clientByPhoneNumber?: Resolver<Maybe<ResolversTypes['Client']>, ParentType, ContextType, RequireFields<QueryClientByPhoneNumberArgs, never>>;
  clientById?: Resolver<Maybe<Array<Maybe<ResolversTypes['Client']>>>, ParentType, ContextType, RequireFields<QueryClientByIdArgs, never>>;
  orderDetail?: Resolver<Maybe<ResolversTypes['OrderDetail']>, ParentType, ContextType, RequireFields<QueryOrderDetailArgs, 'where'>>;
  orderDetails?: Resolver<Array<ResolversTypes['OrderDetail']>, ParentType, ContextType, RequireFields<QueryOrderDetailsArgs, never>>;
  order?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<QueryOrderArgs, 'where'>>;
  orders?: Resolver<Maybe<Array<Maybe<ResolversTypes['Order']>>>, ParentType, ContextType>;
  orderById?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<QueryOrderByIdArgs, never>>;
  bonus?: Resolver<Maybe<ResolversTypes['Bonus']>, ParentType, ContextType, RequireFields<QueryBonusArgs, 'where'>>;
  bonuses?: Resolver<Array<ResolversTypes['Bonus']>, ParentType, ContextType, RequireFields<QueryBonusesArgs, never>>;
  bonusById?: Resolver<Maybe<ResolversTypes['Bonus']>, ParentType, ContextType, RequireFields<QueryBonusByIdArgs, never>>;
  branch?: Resolver<Maybe<ResolversTypes['Branch']>, ParentType, ContextType, RequireFields<QueryBranchArgs, 'where'>>;
  branches?: Resolver<Array<ResolversTypes['Branch']>, ParentType, ContextType, RequireFields<QueryBranchesArgs, never>>;
  branchById?: Resolver<Maybe<ResolversTypes['Branch']>, ParentType, ContextType, RequireFields<QueryBranchByIdArgs, never>>;
  branchByBranchCode?: Resolver<Maybe<ResolversTypes['Branch']>, ParentType, ContextType, RequireFields<QueryBranchByBranchCodeArgs, never>>;
  branchEmployee?: Resolver<Maybe<ResolversTypes['BranchEmployee']>, ParentType, ContextType, RequireFields<QueryBranchEmployeeArgs, 'where'>>;
  branchEmployees?: Resolver<Array<ResolversTypes['BranchEmployee']>, ParentType, ContextType, RequireFields<QueryBranchEmployeesArgs, never>>;
  branchEmployeeById?: Resolver<Maybe<ResolversTypes['BranchEmployee']>, ParentType, ContextType, RequireFields<QueryBranchEmployeeByIdArgs, never>>;
  branchEmployeeByEmplIdAndBranchId?: Resolver<Maybe<ResolversTypes['BranchEmployee']>, ParentType, ContextType, RequireFields<QueryBranchEmployeeByEmplIdAndBranchIdArgs, never>>;
  financialYear?: Resolver<Maybe<ResolversTypes['FinancialYear']>, ParentType, ContextType, RequireFields<QueryFinancialYearArgs, 'where'>>;
  financialYears?: Resolver<Maybe<ResolversTypes['FinancialYear']>, ParentType, ContextType, RequireFields<QueryFinancialYearsArgs, never>>;
  financialYearById?: Resolver<Maybe<ResolversTypes['FinancialYear']>, ParentType, ContextType, RequireFields<QueryFinancialYearByIdArgs, never>>;
  recentFinancialYear?: Resolver<Maybe<ResolversTypes['FinancialYear']>, ParentType, ContextType>;
  employee?: Resolver<Maybe<ResolversTypes['Employee']>, ParentType, ContextType, RequireFields<QueryEmployeeArgs, 'where'>>;
  employees?: Resolver<Array<ResolversTypes['Employee']>, ParentType, ContextType, RequireFields<QueryEmployeesArgs, never>>;
  employeeById?: Resolver<Maybe<ResolversTypes['Employee']>, ParentType, ContextType, RequireFields<QueryEmployeeByIdArgs, never>>;
  employeeByPhoneNumber?: Resolver<Maybe<ResolversTypes['Employee']>, ParentType, ContextType, RequireFields<QueryEmployeeByPhoneNumberArgs, never>>;
  employeeByCode?: Resolver<Maybe<ResolversTypes['Employee']>, ParentType, ContextType, RequireFields<QueryEmployeeByCodeArgs, never>>;
  employeeStatus?: Resolver<Maybe<ResolversTypes['EmployeeStatus']>, ParentType, ContextType, RequireFields<QueryEmployeeStatusArgs, 'where'>>;
  employeeStatuses?: Resolver<Array<ResolversTypes['EmployeeStatus']>, ParentType, ContextType, RequireFields<QueryEmployeeStatusesArgs, never>>;
  employeeStatusById?: Resolver<Maybe<ResolversTypes['EmployeeStatus']>, ParentType, ContextType, RequireFields<QueryEmployeeStatusByIdArgs, never>>;
  finance?: Resolver<Maybe<ResolversTypes['Finance']>, ParentType, ContextType, RequireFields<QueryFinanceArgs, 'where'>>;
  finances?: Resolver<Array<ResolversTypes['Finance']>, ParentType, ContextType, RequireFields<QueryFinancesArgs, never>>;
  financeById?: Resolver<Maybe<ResolversTypes['Finance']>, ParentType, ContextType, RequireFields<QueryFinanceByIdArgs, never>>;
  inventory?: Resolver<Maybe<ResolversTypes['Inventory']>, ParentType, ContextType, RequireFields<QueryInventoryArgs, 'where'>>;
  inventories?: Resolver<Array<ResolversTypes['Inventory']>, ParentType, ContextType, RequireFields<QueryInventoriesArgs, never>>;
  inventoryById?: Resolver<Maybe<ResolversTypes['Inventory']>, ParentType, ContextType, RequireFields<QueryInventoryByIdArgs, never>>;
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<QueryCategoryArgs, 'where'>>;
  categories?: Resolver<Array<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<QueryCategoriesArgs, never>>;
  categoryById?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<QueryCategoryByIdArgs, never>>;
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<QueryProductArgs, 'where'>>;
  products?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType>;
  productById?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<QueryProductByIdArgs, never>>;
  productsByCategoryID?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType, RequireFields<QueryProductsByCategoryIdArgs, never>>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createOneAnnualBranchEmployee?: Resolver<ResolversTypes['AnnualBranchEmployee'], ParentType, ContextType, RequireFields<MutationCreateOneAnnualBranchEmployeeArgs, 'data'>>;
  deleteOneAnnualBranchEmployee?: Resolver<Maybe<ResolversTypes['AnnualBranchEmployee']>, ParentType, ContextType, RequireFields<MutationDeleteOneAnnualBranchEmployeeArgs, 'where'>>;
  updateOneAnnualBranchEmployee?: Resolver<Maybe<ResolversTypes['AnnualBranchEmployee']>, ParentType, ContextType, RequireFields<MutationUpdateOneAnnualBranchEmployeeArgs, 'data' | 'where'>>;
  createAnnualBranchEmployee?: Resolver<Maybe<ResolversTypes['AnnualBranchEmployee']>, ParentType, ContextType, RequireFields<MutationCreateAnnualBranchEmployeeArgs, 'data'>>;
  deleteAnnualBranchEmployee?: Resolver<Maybe<ResolversTypes['AnnualBranchEmployee']>, ParentType, ContextType, RequireFields<MutationDeleteAnnualBranchEmployeeArgs, 'where'>>;
  createOneAnnualClient?: Resolver<ResolversTypes['AnnualClient'], ParentType, ContextType, RequireFields<MutationCreateOneAnnualClientArgs, 'data'>>;
  deleteOneAnnualClient?: Resolver<Maybe<ResolversTypes['AnnualClient']>, ParentType, ContextType, RequireFields<MutationDeleteOneAnnualClientArgs, 'where'>>;
  updateOneAnnualClient?: Resolver<Maybe<ResolversTypes['AnnualClient']>, ParentType, ContextType, RequireFields<MutationUpdateOneAnnualClientArgs, 'data' | 'where'>>;
  createAnnualClient?: Resolver<Maybe<ResolversTypes['AnnualClient']>, ParentType, ContextType, RequireFields<MutationCreateAnnualClientArgs, 'data'>>;
  deleteAnnualClient?: Resolver<Maybe<ResolversTypes['AnnualClient']>, ParentType, ContextType, RequireFields<MutationDeleteAnnualClientArgs, 'where'>>;
  createOneCart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType, RequireFields<MutationCreateOneCartArgs, 'data'>>;
  deleteOneCart?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType, RequireFields<MutationDeleteOneCartArgs, 'where'>>;
  updateOneCart?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType, RequireFields<MutationUpdateOneCartArgs, 'data' | 'where'>>;
  createCart?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType, RequireFields<MutationCreateCartArgs, 'data'>>;
  deleteCart?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType, RequireFields<MutationDeleteCartArgs, 'where'>>;
  createOneCategory?: Resolver<ResolversTypes['Category'], ParentType, ContextType, RequireFields<MutationCreateOneCategoryArgs, 'data'>>;
  deleteOneCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationDeleteOneCategoryArgs, 'where'>>;
  updateOneCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationUpdateOneCategoryArgs, 'data' | 'where'>>;
  createCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationCreateCategoryArgs, 'data'>>;
  deleteCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationDeleteCategoryArgs, 'where'>>;
  createOneClient?: Resolver<ResolversTypes['Client'], ParentType, ContextType, RequireFields<MutationCreateOneClientArgs, 'data'>>;
  deleteOneClient?: Resolver<Maybe<ResolversTypes['Client']>, ParentType, ContextType, RequireFields<MutationDeleteOneClientArgs, 'where'>>;
  updateOneClient?: Resolver<Maybe<ResolversTypes['Client']>, ParentType, ContextType, RequireFields<MutationUpdateOneClientArgs, 'data' | 'where'>>;
  createClient?: Resolver<Maybe<ResolversTypes['Client']>, ParentType, ContextType, RequireFields<MutationCreateClientArgs, 'data'>>;
  deleteClient?: Resolver<Maybe<ResolversTypes['Client']>, ParentType, ContextType, RequireFields<MutationDeleteClientArgs, 'where'>>;
  createOneOrderDetail?: Resolver<ResolversTypes['OrderDetail'], ParentType, ContextType, RequireFields<MutationCreateOneOrderDetailArgs, 'data'>>;
  deleteOneOrderDetail?: Resolver<Maybe<ResolversTypes['OrderDetail']>, ParentType, ContextType, RequireFields<MutationDeleteOneOrderDetailArgs, 'where'>>;
  updateOneOrderDetail?: Resolver<Maybe<ResolversTypes['OrderDetail']>, ParentType, ContextType, RequireFields<MutationUpdateOneOrderDetailArgs, 'data' | 'where'>>;
  createOrderDetail?: Resolver<Maybe<ResolversTypes['OrderDetail']>, ParentType, ContextType, RequireFields<MutationCreateOrderDetailArgs, 'data'>>;
  deleteOrderDetail?: Resolver<Maybe<ResolversTypes['OrderDetail']>, ParentType, ContextType, RequireFields<MutationDeleteOrderDetailArgs, 'where'>>;
  createOneOrder?: Resolver<ResolversTypes['Order'], ParentType, ContextType, RequireFields<MutationCreateOneOrderArgs, 'data'>>;
  deleteOneOrder?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<MutationDeleteOneOrderArgs, 'where'>>;
  updateOneOrder?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<MutationUpdateOneOrderArgs, 'data' | 'where'>>;
  createOrder?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<MutationCreateOrderArgs, 'data'>>;
  deleteOrder?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<MutationDeleteOrderArgs, 'where'>>;
  createOneBonus?: Resolver<ResolversTypes['Bonus'], ParentType, ContextType, RequireFields<MutationCreateOneBonusArgs, 'data'>>;
  deleteOneBonus?: Resolver<Maybe<ResolversTypes['Bonus']>, ParentType, ContextType, RequireFields<MutationDeleteOneBonusArgs, 'where'>>;
  updateOneBonus?: Resolver<Maybe<ResolversTypes['Bonus']>, ParentType, ContextType, RequireFields<MutationUpdateOneBonusArgs, 'data' | 'where'>>;
  createBonus?: Resolver<Maybe<ResolversTypes['Bonus']>, ParentType, ContextType, RequireFields<MutationCreateBonusArgs, 'data'>>;
  deleteBonus?: Resolver<Maybe<ResolversTypes['Bonus']>, ParentType, ContextType, RequireFields<MutationDeleteBonusArgs, 'where'>>;
  createOneBranch?: Resolver<ResolversTypes['Branch'], ParentType, ContextType, RequireFields<MutationCreateOneBranchArgs, 'data'>>;
  deleteOneBranch?: Resolver<Maybe<ResolversTypes['Branch']>, ParentType, ContextType, RequireFields<MutationDeleteOneBranchArgs, 'where'>>;
  updateOneBranch?: Resolver<Maybe<ResolversTypes['Branch']>, ParentType, ContextType, RequireFields<MutationUpdateOneBranchArgs, 'data' | 'where'>>;
  createBranch?: Resolver<Maybe<ResolversTypes['Branch']>, ParentType, ContextType, RequireFields<MutationCreateBranchArgs, 'data'>>;
  deleteBranch?: Resolver<Maybe<ResolversTypes['Branch']>, ParentType, ContextType, RequireFields<MutationDeleteBranchArgs, 'where'>>;
  createOneBranchEmployee?: Resolver<ResolversTypes['BranchEmployee'], ParentType, ContextType, RequireFields<MutationCreateOneBranchEmployeeArgs, 'data'>>;
  deleteOneBranchEmployee?: Resolver<Maybe<ResolversTypes['BranchEmployee']>, ParentType, ContextType, RequireFields<MutationDeleteOneBranchEmployeeArgs, 'where'>>;
  updateOneBranchEmployee?: Resolver<Maybe<ResolversTypes['BranchEmployee']>, ParentType, ContextType, RequireFields<MutationUpdateOneBranchEmployeeArgs, 'data' | 'where'>>;
  createBranchEmployee?: Resolver<Maybe<ResolversTypes['BranchEmployee']>, ParentType, ContextType, RequireFields<MutationCreateBranchEmployeeArgs, 'data'>>;
  deleteBranchEmployee?: Resolver<Maybe<ResolversTypes['BranchEmployee']>, ParentType, ContextType, RequireFields<MutationDeleteBranchEmployeeArgs, 'where'>>;
  createOneFinancialYear?: Resolver<ResolversTypes['FinancialYear'], ParentType, ContextType, RequireFields<MutationCreateOneFinancialYearArgs, 'data'>>;
  deleteOneFinancialYear?: Resolver<Maybe<ResolversTypes['FinancialYear']>, ParentType, ContextType, RequireFields<MutationDeleteOneFinancialYearArgs, 'where'>>;
  updateOneFinancialYear?: Resolver<Maybe<ResolversTypes['FinancialYear']>, ParentType, ContextType, RequireFields<MutationUpdateOneFinancialYearArgs, 'data' | 'where'>>;
  createFinancialYear?: Resolver<Maybe<ResolversTypes['FinancialYear']>, ParentType, ContextType, RequireFields<MutationCreateFinancialYearArgs, 'data'>>;
  deleteFinancialYear?: Resolver<Maybe<ResolversTypes['FinancialYear']>, ParentType, ContextType, RequireFields<MutationDeleteFinancialYearArgs, 'where'>>;
  createOneEmployee?: Resolver<ResolversTypes['Employee'], ParentType, ContextType, RequireFields<MutationCreateOneEmployeeArgs, 'data'>>;
  deleteOneEmployee?: Resolver<Maybe<ResolversTypes['Employee']>, ParentType, ContextType, RequireFields<MutationDeleteOneEmployeeArgs, 'where'>>;
  updateOneEmployee?: Resolver<Maybe<ResolversTypes['Employee']>, ParentType, ContextType, RequireFields<MutationUpdateOneEmployeeArgs, 'data' | 'where'>>;
  createEmployee?: Resolver<Maybe<ResolversTypes['Employee']>, ParentType, ContextType, RequireFields<MutationCreateEmployeeArgs, 'data'>>;
  deleteEmployee?: Resolver<Maybe<ResolversTypes['Employee']>, ParentType, ContextType, RequireFields<MutationDeleteEmployeeArgs, 'where'>>;
  createOneEmployeeStatus?: Resolver<ResolversTypes['EmployeeStatus'], ParentType, ContextType, RequireFields<MutationCreateOneEmployeeStatusArgs, 'data'>>;
  deleteOneEmployeeStatus?: Resolver<Maybe<ResolversTypes['EmployeeStatus']>, ParentType, ContextType, RequireFields<MutationDeleteOneEmployeeStatusArgs, 'where'>>;
  updateOneEmployeeStatus?: Resolver<Maybe<ResolversTypes['EmployeeStatus']>, ParentType, ContextType, RequireFields<MutationUpdateOneEmployeeStatusArgs, 'data' | 'where'>>;
  createEmployeeStatus?: Resolver<Maybe<ResolversTypes['EmployeeStatus']>, ParentType, ContextType, RequireFields<MutationCreateEmployeeStatusArgs, 'data'>>;
  deleteEmployeeStatus?: Resolver<Maybe<ResolversTypes['EmployeeStatus']>, ParentType, ContextType, RequireFields<MutationDeleteEmployeeStatusArgs, 'where'>>;
  createOneFinance?: Resolver<ResolversTypes['Finance'], ParentType, ContextType, RequireFields<MutationCreateOneFinanceArgs, 'data'>>;
  deleteOneFinance?: Resolver<Maybe<ResolversTypes['Finance']>, ParentType, ContextType, RequireFields<MutationDeleteOneFinanceArgs, 'where'>>;
  updateOneFinance?: Resolver<Maybe<ResolversTypes['Finance']>, ParentType, ContextType, RequireFields<MutationUpdateOneFinanceArgs, 'data' | 'where'>>;
  createFinance?: Resolver<Maybe<ResolversTypes['Finance']>, ParentType, ContextType, RequireFields<MutationCreateFinanceArgs, 'data'>>;
  deleteFinance?: Resolver<Maybe<ResolversTypes['Finance']>, ParentType, ContextType, RequireFields<MutationDeleteFinanceArgs, 'where'>>;
  createOneInventory?: Resolver<ResolversTypes['Inventory'], ParentType, ContextType, RequireFields<MutationCreateOneInventoryArgs, 'data'>>;
  deleteOneInventory?: Resolver<Maybe<ResolversTypes['Inventory']>, ParentType, ContextType, RequireFields<MutationDeleteOneInventoryArgs, 'where'>>;
  updateOneInventory?: Resolver<Maybe<ResolversTypes['Inventory']>, ParentType, ContextType, RequireFields<MutationUpdateOneInventoryArgs, 'data' | 'where'>>;
  createInventory?: Resolver<Maybe<ResolversTypes['Inventory']>, ParentType, ContextType, RequireFields<MutationCreateInventoryArgs, 'data'>>;
  deleteInventory?: Resolver<Maybe<ResolversTypes['Inventory']>, ParentType, ContextType, RequireFields<MutationDeleteInventoryArgs, 'where'>>;
  createOneProduct?: Resolver<ResolversTypes['Product'], ParentType, ContextType, RequireFields<MutationCreateOneProductArgs, 'data'>>;
  deleteOneProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationDeleteOneProductArgs, 'where'>>;
  updateOneProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationUpdateOneProductArgs, 'data' | 'where'>>;
  createProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationCreateProductArgs, 'data'>>;
  deleteProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationDeleteProductArgs, 'where'>>;
};

export type Resolvers<ContextType = any> = {
  AnnualBranchEmployee?: AnnualBranchEmployeeResolvers<ContextType>;
  AnnualClient?: AnnualClientResolvers<ContextType>;
  Bonus?: BonusResolvers<ContextType>;
  Branch?: BranchResolvers<ContextType>;
  BranchEmployee?: BranchEmployeeResolvers<ContextType>;
  Cart?: CartResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  Client?: ClientResolvers<ContextType>;
  Employee?: EmployeeResolvers<ContextType>;
  EmployeeStatus?: EmployeeStatusResolvers<ContextType>;
  Finance?: FinanceResolvers<ContextType>;
  FinancialYear?: FinancialYearResolvers<ContextType>;
  Inventory?: InventoryResolvers<ContextType>;
  Order?: OrderResolvers<ContextType>;
  OrderDetail?: OrderDetailResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
