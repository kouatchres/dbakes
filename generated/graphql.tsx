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

export type Cart = {
  id: Scalars['String'];
  orderDate: Scalars['DateTime'];
  qtty: Scalars['Float'];
  pdtCost: Scalars['Int'];
  salesPrice: Scalars['Int'];
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
  employeePhoneNumb: Scalars['Int'];
  employeeCode: Scalars['String'];
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
  yearName: Scalars['Int'];
};

export type Order = {
  id: Scalars['String'];
  orderDate: Scalars['DateTime'];
  orderTotal: Scalars['Int'];
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

export type OrderType = {
  id: Scalars['String'];
  orderTypeName: Scalars['String'];
  orderTypeCode: Scalars['String'];
};

export type Product = {
  id: Scalars['String'];
  pdtName: Scalars['String'];
  pdtCode: Scalars['String'];
  Category: Category;
  carts: Array<Cart>;
  categoryId: Scalars['String'];
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


export type ProductWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type FinanceWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type OrderDetailWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type CartWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type CategoryWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type ClientWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  clientPhoneNumb?: Maybe<Scalars['Int']>;
};

export type EmployeeWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  employeeCode?: Maybe<Scalars['String']>;
  employeePhoneNumb?: Maybe<Scalars['Int']>;
};

export type EmployeeStatusWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type FinancialYearWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type OrderWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type OrderTypeWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
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
  Client: ClientCreateNestedOneWithoutCartsInput;
  Employee: EmployeeCreateNestedOneWithoutCartsInput;
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
  Client?: Maybe<ClientUpdateOneRequiredWithoutCartsInput>;
  Employee?: Maybe<EmployeeUpdateOneRequiredWithoutCartsInput>;
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
  clientNames: Scalars['String'];
  carts?: Maybe<CartCreateNestedManyWithoutClientInput>;
  orders?: Maybe<OrderCreateNestedManyWithoutClientInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ClientUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  clientPhoneNumb?: Maybe<IntFieldUpdateOperationsInput>;
  clientNames?: Maybe<StringFieldUpdateOperationsInput>;
  carts?: Maybe<CartUpdateManyWithoutClientInput>;
  orders?: Maybe<OrderUpdateManyWithoutClientInput>;
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
  Client: ClientCreateNestedOneWithoutOrdersInput;
  Employee: EmployeeCreateNestedOneWithoutOrdersInput;
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
  Client?: Maybe<ClientUpdateOneRequiredWithoutOrdersInput>;
  Employee?: Maybe<EmployeeUpdateOneRequiredWithoutOrdersInput>;
};

export type OrderTypeCreateInput = {
  id?: Maybe<Scalars['String']>;
  orderTypeName: Scalars['String'];
  orderTypeCode: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type OrderTypeUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  orderTypeName?: Maybe<StringFieldUpdateOperationsInput>;
  orderTypeCode?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type FinancialYearCreateInput = {
  id?: Maybe<Scalars['String']>;
  yearName: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FinancialYearUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  yearName?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type EmployeeCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  carts?: Maybe<CartCreateNestedManyWithoutEmployeeInput>;
  orders?: Maybe<OrderCreateNestedManyWithoutEmployeeInput>;
  employeeNames: Scalars['String'];
  employeeCode: Scalars['String'];
  employeePhoneNumb: Scalars['Int'];
};

export type EmployeeUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  carts?: Maybe<CartUpdateManyWithoutEmployeeInput>;
  orders?: Maybe<OrderUpdateManyWithoutEmployeeInput>;
  employeeNames?: Maybe<StringFieldUpdateOperationsInput>;
  employeeCode?: Maybe<StringFieldUpdateOperationsInput>;
  employeePhoneNumb?: Maybe<IntFieldUpdateOperationsInput>;
};

export type EmployeeStatusCreateInput = {
  id?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type EmployeeStatusUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  status?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
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

export type ProductCreateInput = {
  id?: Maybe<Scalars['String']>;
  pdtName: Scalars['String'];
  pdtCode: Scalars['String'];
  qttyInHand: Scalars['Int'];
  unitPrice: Scalars['Int'];
  carts?: Maybe<CartCreateNestedManyWithoutProductInput>;
  orderDetails?: Maybe<OrderDetailCreateNestedManyWithoutProductInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  Category: CategoryCreateNestedOneWithoutProductsInput;
};

export type ProductUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  pdtName?: Maybe<StringFieldUpdateOperationsInput>;
  pdtCode?: Maybe<StringFieldUpdateOperationsInput>;
  qttyInHand?: Maybe<IntFieldUpdateOperationsInput>;
  unitPrice?: Maybe<IntFieldUpdateOperationsInput>;
  carts?: Maybe<CartUpdateManyWithoutProductInput>;
  orderDetails?: Maybe<OrderDetailUpdateManyWithoutProductInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  Category?: Maybe<CategoryUpdateOneRequiredWithoutProductsInput>;
};

export type ProductCreateNestedOneWithoutCartsInput = {
  create?: Maybe<ProductCreateWithoutCartsInput>;
  connectOrCreate?: Maybe<ProductCreateOrConnectWithoutCartsInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
};

export type ClientCreateNestedOneWithoutCartsInput = {
  create?: Maybe<ClientCreateWithoutCartsInput>;
  connectOrCreate?: Maybe<ClientCreateOrConnectWithoutCartsInput>;
  connect?: Maybe<ClientWhereUniqueInput>;
};

export type EmployeeCreateNestedOneWithoutCartsInput = {
  create?: Maybe<EmployeeCreateWithoutCartsInput>;
  connectOrCreate?: Maybe<EmployeeCreateOrConnectWithoutCartsInput>;
  connect?: Maybe<EmployeeWhereUniqueInput>;
};

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
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

export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type ProductUpdateOneRequiredWithoutCartsInput = {
  create?: Maybe<ProductCreateWithoutCartsInput>;
  connectOrCreate?: Maybe<ProductCreateOrConnectWithoutCartsInput>;
  upsert?: Maybe<ProductUpsertWithoutCartsInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
  update?: Maybe<ProductUpdateWithoutCartsInput>;
};

export type ClientUpdateOneRequiredWithoutCartsInput = {
  create?: Maybe<ClientCreateWithoutCartsInput>;
  connectOrCreate?: Maybe<ClientCreateOrConnectWithoutCartsInput>;
  upsert?: Maybe<ClientUpsertWithoutCartsInput>;
  connect?: Maybe<ClientWhereUniqueInput>;
  update?: Maybe<ClientUpdateWithoutCartsInput>;
};

export type EmployeeUpdateOneRequiredWithoutCartsInput = {
  create?: Maybe<EmployeeCreateWithoutCartsInput>;
  connectOrCreate?: Maybe<EmployeeCreateOrConnectWithoutCartsInput>;
  upsert?: Maybe<EmployeeUpsertWithoutCartsInput>;
  connect?: Maybe<EmployeeWhereUniqueInput>;
  update?: Maybe<EmployeeUpdateWithoutCartsInput>;
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

export type CartCreateNestedManyWithoutClientInput = {
  create?: Maybe<Array<CartCreateWithoutClientInput>>;
  connectOrCreate?: Maybe<Array<CartCreateOrConnectWithoutClientInput>>;
  createMany?: Maybe<CartCreateManyClientInputEnvelope>;
  connect?: Maybe<Array<CartWhereUniqueInput>>;
};

export type OrderCreateNestedManyWithoutClientInput = {
  create?: Maybe<Array<OrderCreateWithoutClientInput>>;
  connectOrCreate?: Maybe<Array<OrderCreateOrConnectWithoutClientInput>>;
  createMany?: Maybe<OrderCreateManyClientInputEnvelope>;
  connect?: Maybe<Array<OrderWhereUniqueInput>>;
};

export type CartUpdateManyWithoutClientInput = {
  create?: Maybe<Array<CartCreateWithoutClientInput>>;
  connectOrCreate?: Maybe<Array<CartCreateOrConnectWithoutClientInput>>;
  upsert?: Maybe<Array<CartUpsertWithWhereUniqueWithoutClientInput>>;
  createMany?: Maybe<CartCreateManyClientInputEnvelope>;
  set?: Maybe<Array<CartWhereUniqueInput>>;
  disconnect?: Maybe<Array<CartWhereUniqueInput>>;
  delete?: Maybe<Array<CartWhereUniqueInput>>;
  connect?: Maybe<Array<CartWhereUniqueInput>>;
  update?: Maybe<Array<CartUpdateWithWhereUniqueWithoutClientInput>>;
  updateMany?: Maybe<Array<CartUpdateManyWithWhereWithoutClientInput>>;
  deleteMany?: Maybe<Array<CartScalarWhereInput>>;
};

export type OrderUpdateManyWithoutClientInput = {
  create?: Maybe<Array<OrderCreateWithoutClientInput>>;
  connectOrCreate?: Maybe<Array<OrderCreateOrConnectWithoutClientInput>>;
  upsert?: Maybe<Array<OrderUpsertWithWhereUniqueWithoutClientInput>>;
  createMany?: Maybe<OrderCreateManyClientInputEnvelope>;
  set?: Maybe<Array<OrderWhereUniqueInput>>;
  disconnect?: Maybe<Array<OrderWhereUniqueInput>>;
  delete?: Maybe<Array<OrderWhereUniqueInput>>;
  connect?: Maybe<Array<OrderWhereUniqueInput>>;
  update?: Maybe<Array<OrderUpdateWithWhereUniqueWithoutClientInput>>;
  updateMany?: Maybe<Array<OrderUpdateManyWithWhereWithoutClientInput>>;
  deleteMany?: Maybe<Array<OrderScalarWhereInput>>;
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

export type ClientCreateNestedOneWithoutOrdersInput = {
  create?: Maybe<ClientCreateWithoutOrdersInput>;
  connectOrCreate?: Maybe<ClientCreateOrConnectWithoutOrdersInput>;
  connect?: Maybe<ClientWhereUniqueInput>;
};

export type EmployeeCreateNestedOneWithoutOrdersInput = {
  create?: Maybe<EmployeeCreateWithoutOrdersInput>;
  connectOrCreate?: Maybe<EmployeeCreateOrConnectWithoutOrdersInput>;
  connect?: Maybe<EmployeeWhereUniqueInput>;
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

export type ClientUpdateOneRequiredWithoutOrdersInput = {
  create?: Maybe<ClientCreateWithoutOrdersInput>;
  connectOrCreate?: Maybe<ClientCreateOrConnectWithoutOrdersInput>;
  upsert?: Maybe<ClientUpsertWithoutOrdersInput>;
  connect?: Maybe<ClientWhereUniqueInput>;
  update?: Maybe<ClientUpdateWithoutOrdersInput>;
};

export type EmployeeUpdateOneRequiredWithoutOrdersInput = {
  create?: Maybe<EmployeeCreateWithoutOrdersInput>;
  connectOrCreate?: Maybe<EmployeeCreateOrConnectWithoutOrdersInput>;
  upsert?: Maybe<EmployeeUpsertWithoutOrdersInput>;
  connect?: Maybe<EmployeeWhereUniqueInput>;
  update?: Maybe<EmployeeUpdateWithoutOrdersInput>;
};

export type CartCreateNestedManyWithoutEmployeeInput = {
  create?: Maybe<Array<CartCreateWithoutEmployeeInput>>;
  connectOrCreate?: Maybe<Array<CartCreateOrConnectWithoutEmployeeInput>>;
  createMany?: Maybe<CartCreateManyEmployeeInputEnvelope>;
  connect?: Maybe<Array<CartWhereUniqueInput>>;
};

export type OrderCreateNestedManyWithoutEmployeeInput = {
  create?: Maybe<Array<OrderCreateWithoutEmployeeInput>>;
  connectOrCreate?: Maybe<Array<OrderCreateOrConnectWithoutEmployeeInput>>;
  createMany?: Maybe<OrderCreateManyEmployeeInputEnvelope>;
  connect?: Maybe<Array<OrderWhereUniqueInput>>;
};

export type CartUpdateManyWithoutEmployeeInput = {
  create?: Maybe<Array<CartCreateWithoutEmployeeInput>>;
  connectOrCreate?: Maybe<Array<CartCreateOrConnectWithoutEmployeeInput>>;
  upsert?: Maybe<Array<CartUpsertWithWhereUniqueWithoutEmployeeInput>>;
  createMany?: Maybe<CartCreateManyEmployeeInputEnvelope>;
  set?: Maybe<Array<CartWhereUniqueInput>>;
  disconnect?: Maybe<Array<CartWhereUniqueInput>>;
  delete?: Maybe<Array<CartWhereUniqueInput>>;
  connect?: Maybe<Array<CartWhereUniqueInput>>;
  update?: Maybe<Array<CartUpdateWithWhereUniqueWithoutEmployeeInput>>;
  updateMany?: Maybe<Array<CartUpdateManyWithWhereWithoutEmployeeInput>>;
  deleteMany?: Maybe<Array<CartScalarWhereInput>>;
};

export type OrderUpdateManyWithoutEmployeeInput = {
  create?: Maybe<Array<OrderCreateWithoutEmployeeInput>>;
  connectOrCreate?: Maybe<Array<OrderCreateOrConnectWithoutEmployeeInput>>;
  upsert?: Maybe<Array<OrderUpsertWithWhereUniqueWithoutEmployeeInput>>;
  createMany?: Maybe<OrderCreateManyEmployeeInputEnvelope>;
  set?: Maybe<Array<OrderWhereUniqueInput>>;
  disconnect?: Maybe<Array<OrderWhereUniqueInput>>;
  delete?: Maybe<Array<OrderWhereUniqueInput>>;
  connect?: Maybe<Array<OrderWhereUniqueInput>>;
  update?: Maybe<Array<OrderUpdateWithWhereUniqueWithoutEmployeeInput>>;
  updateMany?: Maybe<Array<OrderUpdateManyWithWhereWithoutEmployeeInput>>;
  deleteMany?: Maybe<Array<OrderScalarWhereInput>>;
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

export type CategoryUpdateOneRequiredWithoutProductsInput = {
  create?: Maybe<CategoryCreateWithoutProductsInput>;
  connectOrCreate?: Maybe<CategoryCreateOrConnectWithoutProductsInput>;
  upsert?: Maybe<CategoryUpsertWithoutProductsInput>;
  connect?: Maybe<CategoryWhereUniqueInput>;
  update?: Maybe<CategoryUpdateWithoutProductsInput>;
};

export type ProductCreateWithoutCartsInput = {
  id?: Maybe<Scalars['String']>;
  pdtName: Scalars['String'];
  pdtCode: Scalars['String'];
  qttyInHand: Scalars['Int'];
  unitPrice: Scalars['Int'];
  orderDetails?: Maybe<OrderDetailCreateNestedManyWithoutProductInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  Category: CategoryCreateNestedOneWithoutProductsInput;
};

export type ProductCreateOrConnectWithoutCartsInput = {
  where: ProductWhereUniqueInput;
  create: ProductCreateWithoutCartsInput;
};

export type ClientCreateWithoutCartsInput = {
  id?: Maybe<Scalars['String']>;
  clientPhoneNumb: Scalars['Int'];
  clientNames: Scalars['String'];
  orders?: Maybe<OrderCreateNestedManyWithoutClientInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ClientCreateOrConnectWithoutCartsInput = {
  where: ClientWhereUniqueInput;
  create: ClientCreateWithoutCartsInput;
};

export type EmployeeCreateWithoutCartsInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  orders?: Maybe<OrderCreateNestedManyWithoutEmployeeInput>;
  employeeNames: Scalars['String'];
  employeeCode: Scalars['String'];
  employeePhoneNumb: Scalars['Int'];
};

export type EmployeeCreateOrConnectWithoutCartsInput = {
  where: EmployeeWhereUniqueInput;
  create: EmployeeCreateWithoutCartsInput;
};

export type ProductUpsertWithoutCartsInput = {
  update: ProductUpdateWithoutCartsInput;
  create: ProductCreateWithoutCartsInput;
};

export type ProductUpdateWithoutCartsInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  pdtName?: Maybe<StringFieldUpdateOperationsInput>;
  pdtCode?: Maybe<StringFieldUpdateOperationsInput>;
  qttyInHand?: Maybe<IntFieldUpdateOperationsInput>;
  unitPrice?: Maybe<IntFieldUpdateOperationsInput>;
  orderDetails?: Maybe<OrderDetailUpdateManyWithoutProductInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  Category?: Maybe<CategoryUpdateOneRequiredWithoutProductsInput>;
};

export type ClientUpsertWithoutCartsInput = {
  update: ClientUpdateWithoutCartsInput;
  create: ClientCreateWithoutCartsInput;
};

export type ClientUpdateWithoutCartsInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  clientPhoneNumb?: Maybe<IntFieldUpdateOperationsInput>;
  clientNames?: Maybe<StringFieldUpdateOperationsInput>;
  orders?: Maybe<OrderUpdateManyWithoutClientInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type EmployeeUpsertWithoutCartsInput = {
  update: EmployeeUpdateWithoutCartsInput;
  create: EmployeeCreateWithoutCartsInput;
};

export type EmployeeUpdateWithoutCartsInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  orders?: Maybe<OrderUpdateManyWithoutEmployeeInput>;
  employeeNames?: Maybe<StringFieldUpdateOperationsInput>;
  employeeCode?: Maybe<StringFieldUpdateOperationsInput>;
  employeePhoneNumb?: Maybe<IntFieldUpdateOperationsInput>;
};

export type ProductCreateWithoutCategoryInput = {
  id?: Maybe<Scalars['String']>;
  pdtName: Scalars['String'];
  pdtCode: Scalars['String'];
  qttyInHand: Scalars['Int'];
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
  qttyInHand?: Maybe<IntFilter>;
  unitPrice?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  categoryId?: Maybe<StringFilter>;
};

export type CartCreateWithoutClientInput = {
  id?: Maybe<Scalars['String']>;
  qtty: Scalars['Float'];
  pdtCost: Scalars['Int'];
  salesPrice: Scalars['Int'];
  orderDate?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  Product: ProductCreateNestedOneWithoutCartsInput;
  Employee: EmployeeCreateNestedOneWithoutCartsInput;
};

export type CartCreateOrConnectWithoutClientInput = {
  where: CartWhereUniqueInput;
  create: CartCreateWithoutClientInput;
};

export type CartCreateManyClientInputEnvelope = {
  data?: Maybe<Array<CartCreateManyClientInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type OrderCreateWithoutClientInput = {
  id?: Maybe<Scalars['String']>;
  orderTotal: Scalars['Int'];
  totalPaid: Scalars['Int'];
  orderNumber: Scalars['String'];
  orderDate?: Maybe<Scalars['DateTime']>;
  orderDetails?: Maybe<OrderDetailCreateNestedManyWithoutOrderInput>;
  finances?: Maybe<FinanceCreateNestedManyWithoutOrderInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  Employee: EmployeeCreateNestedOneWithoutOrdersInput;
};

export type OrderCreateOrConnectWithoutClientInput = {
  where: OrderWhereUniqueInput;
  create: OrderCreateWithoutClientInput;
};

export type OrderCreateManyClientInputEnvelope = {
  data?: Maybe<Array<OrderCreateManyClientInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CartUpsertWithWhereUniqueWithoutClientInput = {
  where: CartWhereUniqueInput;
  update: CartUpdateWithoutClientInput;
  create: CartCreateWithoutClientInput;
};

export type CartUpdateWithWhereUniqueWithoutClientInput = {
  where: CartWhereUniqueInput;
  data: CartUpdateWithoutClientInput;
};

export type CartUpdateManyWithWhereWithoutClientInput = {
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
  clientId?: Maybe<StringFilter>;
  employeeId?: Maybe<StringFilter>;
};

export type OrderUpsertWithWhereUniqueWithoutClientInput = {
  where: OrderWhereUniqueInput;
  update: OrderUpdateWithoutClientInput;
  create: OrderCreateWithoutClientInput;
};

export type OrderUpdateWithWhereUniqueWithoutClientInput = {
  where: OrderWhereUniqueInput;
  data: OrderUpdateWithoutClientInput;
};

export type OrderUpdateManyWithWhereWithoutClientInput = {
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
  clientId?: Maybe<StringFilter>;
  employeeId?: Maybe<StringFilter>;
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
  Client: ClientCreateNestedOneWithoutOrdersInput;
  Employee: EmployeeCreateNestedOneWithoutOrdersInput;
};

export type OrderCreateOrConnectWithoutOrderDetailsInput = {
  where: OrderWhereUniqueInput;
  create: OrderCreateWithoutOrderDetailsInput;
};

export type ProductCreateWithoutOrderDetailsInput = {
  id?: Maybe<Scalars['String']>;
  pdtName: Scalars['String'];
  pdtCode: Scalars['String'];
  qttyInHand: Scalars['Int'];
  unitPrice: Scalars['Int'];
  carts?: Maybe<CartCreateNestedManyWithoutProductInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  Category: CategoryCreateNestedOneWithoutProductsInput;
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
  Client?: Maybe<ClientUpdateOneRequiredWithoutOrdersInput>;
  Employee?: Maybe<EmployeeUpdateOneRequiredWithoutOrdersInput>;
};

export type ProductUpsertWithoutOrderDetailsInput = {
  update: ProductUpdateWithoutOrderDetailsInput;
  create: ProductCreateWithoutOrderDetailsInput;
};

export type ProductUpdateWithoutOrderDetailsInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  pdtName?: Maybe<StringFieldUpdateOperationsInput>;
  pdtCode?: Maybe<StringFieldUpdateOperationsInput>;
  qttyInHand?: Maybe<IntFieldUpdateOperationsInput>;
  unitPrice?: Maybe<IntFieldUpdateOperationsInput>;
  carts?: Maybe<CartUpdateManyWithoutProductInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  Category?: Maybe<CategoryUpdateOneRequiredWithoutProductsInput>;
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

export type ClientCreateWithoutOrdersInput = {
  id?: Maybe<Scalars['String']>;
  clientPhoneNumb: Scalars['Int'];
  clientNames: Scalars['String'];
  carts?: Maybe<CartCreateNestedManyWithoutClientInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ClientCreateOrConnectWithoutOrdersInput = {
  where: ClientWhereUniqueInput;
  create: ClientCreateWithoutOrdersInput;
};

export type EmployeeCreateWithoutOrdersInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  carts?: Maybe<CartCreateNestedManyWithoutEmployeeInput>;
  employeeNames: Scalars['String'];
  employeeCode: Scalars['String'];
  employeePhoneNumb: Scalars['Int'];
};

export type EmployeeCreateOrConnectWithoutOrdersInput = {
  where: EmployeeWhereUniqueInput;
  create: EmployeeCreateWithoutOrdersInput;
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

export type ClientUpsertWithoutOrdersInput = {
  update: ClientUpdateWithoutOrdersInput;
  create: ClientCreateWithoutOrdersInput;
};

export type ClientUpdateWithoutOrdersInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  clientPhoneNumb?: Maybe<IntFieldUpdateOperationsInput>;
  clientNames?: Maybe<StringFieldUpdateOperationsInput>;
  carts?: Maybe<CartUpdateManyWithoutClientInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type EmployeeUpsertWithoutOrdersInput = {
  update: EmployeeUpdateWithoutOrdersInput;
  create: EmployeeCreateWithoutOrdersInput;
};

export type EmployeeUpdateWithoutOrdersInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  carts?: Maybe<CartUpdateManyWithoutEmployeeInput>;
  employeeNames?: Maybe<StringFieldUpdateOperationsInput>;
  employeeCode?: Maybe<StringFieldUpdateOperationsInput>;
  employeePhoneNumb?: Maybe<IntFieldUpdateOperationsInput>;
};

export type CartCreateWithoutEmployeeInput = {
  id?: Maybe<Scalars['String']>;
  qtty: Scalars['Float'];
  pdtCost: Scalars['Int'];
  salesPrice: Scalars['Int'];
  orderDate?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  Product: ProductCreateNestedOneWithoutCartsInput;
  Client: ClientCreateNestedOneWithoutCartsInput;
};

export type CartCreateOrConnectWithoutEmployeeInput = {
  where: CartWhereUniqueInput;
  create: CartCreateWithoutEmployeeInput;
};

export type CartCreateManyEmployeeInputEnvelope = {
  data?: Maybe<Array<CartCreateManyEmployeeInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type OrderCreateWithoutEmployeeInput = {
  id?: Maybe<Scalars['String']>;
  orderTotal: Scalars['Int'];
  totalPaid: Scalars['Int'];
  orderNumber: Scalars['String'];
  orderDate?: Maybe<Scalars['DateTime']>;
  orderDetails?: Maybe<OrderDetailCreateNestedManyWithoutOrderInput>;
  finances?: Maybe<FinanceCreateNestedManyWithoutOrderInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  Client: ClientCreateNestedOneWithoutOrdersInput;
};

export type OrderCreateOrConnectWithoutEmployeeInput = {
  where: OrderWhereUniqueInput;
  create: OrderCreateWithoutEmployeeInput;
};

export type OrderCreateManyEmployeeInputEnvelope = {
  data?: Maybe<Array<OrderCreateManyEmployeeInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CartUpsertWithWhereUniqueWithoutEmployeeInput = {
  where: CartWhereUniqueInput;
  update: CartUpdateWithoutEmployeeInput;
  create: CartCreateWithoutEmployeeInput;
};

export type CartUpdateWithWhereUniqueWithoutEmployeeInput = {
  where: CartWhereUniqueInput;
  data: CartUpdateWithoutEmployeeInput;
};

export type CartUpdateManyWithWhereWithoutEmployeeInput = {
  where: CartScalarWhereInput;
  data: CartUpdateManyMutationInput;
};

export type OrderUpsertWithWhereUniqueWithoutEmployeeInput = {
  where: OrderWhereUniqueInput;
  update: OrderUpdateWithoutEmployeeInput;
  create: OrderCreateWithoutEmployeeInput;
};

export type OrderUpdateWithWhereUniqueWithoutEmployeeInput = {
  where: OrderWhereUniqueInput;
  data: OrderUpdateWithoutEmployeeInput;
};

export type OrderUpdateManyWithWhereWithoutEmployeeInput = {
  where: OrderScalarWhereInput;
  data: OrderUpdateManyMutationInput;
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
  Client: ClientCreateNestedOneWithoutOrdersInput;
  Employee: EmployeeCreateNestedOneWithoutOrdersInput;
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
  Client?: Maybe<ClientUpdateOneRequiredWithoutOrdersInput>;
  Employee?: Maybe<EmployeeUpdateOneRequiredWithoutOrdersInput>;
};

export type CartCreateWithoutProductInput = {
  id?: Maybe<Scalars['String']>;
  qtty: Scalars['Float'];
  pdtCost: Scalars['Int'];
  salesPrice: Scalars['Int'];
  orderDate?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  Client: ClientCreateNestedOneWithoutCartsInput;
  Employee: EmployeeCreateNestedOneWithoutCartsInput;
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

export type ProductCreateManyCategoryInput = {
  id?: Maybe<Scalars['String']>;
  pdtName: Scalars['String'];
  pdtCode: Scalars['String'];
  qttyInHand: Scalars['Int'];
  unitPrice: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductUpdateWithoutCategoryInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  pdtName?: Maybe<StringFieldUpdateOperationsInput>;
  pdtCode?: Maybe<StringFieldUpdateOperationsInput>;
  qttyInHand?: Maybe<IntFieldUpdateOperationsInput>;
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
  qttyInHand?: Maybe<IntFieldUpdateOperationsInput>;
  unitPrice?: Maybe<IntFieldUpdateOperationsInput>;
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

export type CartCreateManyClientInput = {
  id?: Maybe<Scalars['String']>;
  qtty: Scalars['Float'];
  pdtCost: Scalars['Int'];
  salesPrice: Scalars['Int'];
  orderDate?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  productId: Scalars['String'];
  employeeId: Scalars['String'];
};

export type OrderCreateManyClientInput = {
  id?: Maybe<Scalars['String']>;
  orderTotal: Scalars['Int'];
  totalPaid: Scalars['Int'];
  orderNumber: Scalars['String'];
  orderDate?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  employeeId: Scalars['String'];
};

export type CartUpdateWithoutClientInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  qtty?: Maybe<FloatFieldUpdateOperationsInput>;
  pdtCost?: Maybe<IntFieldUpdateOperationsInput>;
  salesPrice?: Maybe<IntFieldUpdateOperationsInput>;
  orderDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  Product?: Maybe<ProductUpdateOneRequiredWithoutCartsInput>;
  Employee?: Maybe<EmployeeUpdateOneRequiredWithoutCartsInput>;
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

export type OrderUpdateWithoutClientInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  orderTotal?: Maybe<IntFieldUpdateOperationsInput>;
  totalPaid?: Maybe<IntFieldUpdateOperationsInput>;
  orderNumber?: Maybe<StringFieldUpdateOperationsInput>;
  orderDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  orderDetails?: Maybe<OrderDetailUpdateManyWithoutOrderInput>;
  finances?: Maybe<FinanceUpdateManyWithoutOrderInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  Employee?: Maybe<EmployeeUpdateOneRequiredWithoutOrdersInput>;
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

export type CartCreateManyEmployeeInput = {
  id?: Maybe<Scalars['String']>;
  qtty: Scalars['Float'];
  pdtCost: Scalars['Int'];
  salesPrice: Scalars['Int'];
  orderDate?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  productId: Scalars['String'];
  clientId: Scalars['String'];
};

export type OrderCreateManyEmployeeInput = {
  id?: Maybe<Scalars['String']>;
  orderTotal: Scalars['Int'];
  totalPaid: Scalars['Int'];
  orderNumber: Scalars['String'];
  orderDate?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  clientId: Scalars['String'];
};

export type CartUpdateWithoutEmployeeInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  qtty?: Maybe<FloatFieldUpdateOperationsInput>;
  pdtCost?: Maybe<IntFieldUpdateOperationsInput>;
  salesPrice?: Maybe<IntFieldUpdateOperationsInput>;
  orderDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  Product?: Maybe<ProductUpdateOneRequiredWithoutCartsInput>;
  Client?: Maybe<ClientUpdateOneRequiredWithoutCartsInput>;
};

export type OrderUpdateWithoutEmployeeInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  orderTotal?: Maybe<IntFieldUpdateOperationsInput>;
  totalPaid?: Maybe<IntFieldUpdateOperationsInput>;
  orderNumber?: Maybe<StringFieldUpdateOperationsInput>;
  orderDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  orderDetails?: Maybe<OrderDetailUpdateManyWithoutOrderInput>;
  finances?: Maybe<FinanceUpdateManyWithoutOrderInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  Client?: Maybe<ClientUpdateOneRequiredWithoutOrdersInput>;
};

export type CartCreateManyProductInput = {
  id?: Maybe<Scalars['String']>;
  qtty: Scalars['Float'];
  pdtCost: Scalars['Int'];
  salesPrice: Scalars['Int'];
  orderDate?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  clientId: Scalars['String'];
  employeeId: Scalars['String'];
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
  Client?: Maybe<ClientUpdateOneRequiredWithoutCartsInput>;
  Employee?: Maybe<EmployeeUpdateOneRequiredWithoutCartsInput>;
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
  cart?: Maybe<Cart>;
  carts: Array<Cart>;
  cartById?: Maybe<Cart>;
  cartByClientIdAndEmplId?: Maybe<Array<Maybe<Cart>>>;
  category?: Maybe<Category>;
  categories: Array<Category>;
  categoryById?: Maybe<Category>;
  client?: Maybe<Client>;
  clients?: Maybe<Array<Maybe<Client>>>;
  clientByPhoneNumber?: Maybe<Client>;
  clientById?: Maybe<Array<Maybe<Client>>>;
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
  financialYear?: Maybe<FinancialYear>;
  financialYears?: Maybe<FinancialYear>;
  financialYearById?: Maybe<FinancialYear>;
  recentFinancialYear?: Maybe<FinancialYear>;
  order?: Maybe<Order>;
  orders?: Maybe<Array<Maybe<Order>>>;
  orderById?: Maybe<Order>;
  orderDetail?: Maybe<OrderDetail>;
  orderDetails: Array<OrderDetail>;
  orderType?: Maybe<OrderType>;
  orderTypes: Array<OrderType>;
  orderTypeById?: Maybe<OrderType>;
  product?: Maybe<Product>;
  products?: Maybe<Array<Maybe<Product>>>;
  productById?: Maybe<Product>;
  productsByCategoryID?: Maybe<Array<Maybe<Product>>>;
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


export type QueryCartByClientIdAndEmplIdArgs = {
  clientId?: Maybe<Scalars['String']>;
  employeeId?: Maybe<Scalars['String']>;
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


export type QueryClientArgs = {
  where: ClientWhereUniqueInput;
};


export type QueryClientByPhoneNumberArgs = {
  clientPhoneNumb?: Maybe<Scalars['Int']>;
};


export type QueryClientByIdArgs = {
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


export type QueryFinancialYearArgs = {
  where: FinancialYearWhereUniqueInput;
};


export type QueryFinancialYearsArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryFinancialYearByIdArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryOrderArgs = {
  where: OrderWhereUniqueInput;
};


export type QueryOrderByIdArgs = {
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


export type QueryOrderTypeArgs = {
  where: OrderTypeWhereUniqueInput;
};


export type QueryOrderTypesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<OrderTypeWhereUniqueInput>;
  after?: Maybe<OrderTypeWhereUniqueInput>;
};


export type QueryOrderTypeByIdArgs = {
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
  createOneOrderType: OrderType;
  deleteOneOrderType?: Maybe<OrderType>;
  updateOneOrderType?: Maybe<OrderType>;
  /** Stores a OrderType manually */
  createOrderType?: Maybe<OrderType>;
  /** deletes a orderType manually */
  deleteOrderType?: Maybe<OrderType>;
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
  createOneProduct: Product;
  deleteOneProduct?: Maybe<Product>;
  updateOneProduct?: Maybe<Product>;
  /** Stores a Product manually */
  createProduct?: Maybe<Product>;
  /** deletes a Product manually */
  deleteProduct?: Maybe<Product>;
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


export type MutationCreateOneOrderTypeArgs = {
  data: OrderTypeCreateInput;
};


export type MutationDeleteOneOrderTypeArgs = {
  where: OrderTypeWhereUniqueInput;
};


export type MutationUpdateOneOrderTypeArgs = {
  data: OrderTypeUpdateInput;
  where: OrderTypeWhereUniqueInput;
};


export type MutationCreateOrderTypeArgs = {
  data: OrderTypeCreateInput;
};


export type MutationDeleteOrderTypeArgs = {
  where: OrderTypeWhereUniqueInput;
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

export type CartFragmentFragment = Pick<Cart, 'id' | 'orderDate' | 'qtty' | 'pdtCost' | 'salesPrice'>;

export type CategoryFragmentFragment = Pick<Category, 'categoryCode' | 'categoryName' | 'id'>;

export type ClientFragmentFragment = Pick<Client, 'id' | 'clientNames' | 'clientPhoneNumb'>;

export type EmployeeFragmentFragment = Pick<Employee, 'employeeNames' | 'employeeCode' | 'id' | 'employeePhoneNumb'>;

export type EmployeeStatusFragmentFragment = Pick<EmployeeStatus, 'id' | 'status'>;

export type FinanceFragmentFragment = (
  Pick<Finance, 'amtPaid' | 'orderId' | 'id'>
  & { Order: OrderFragmentFragment }
);

export type FinancialYearFragmentFragment = Pick<FinancialYear, 'yearName' | 'id'>;

export type OrderDetailFragmentFragment = Pick<OrderDetail, 'id' | 'pdtCost' | 'qtty' | 'salesPrice'>;

export type OrderFragmentFragment = (
  Pick<Order, 'id' | 'orderDate' | 'orderTotal' | 'totalPaid' | 'orderNumber'>
  & { orderDetails: Array<OrderDetailFragmentFragment> }
);

export type OrderTypeFragmentFragment = Pick<OrderType, 'orderTypeCode' | 'orderTypeName' | 'id'>;

export type ProductFragmentFragment = (
  Pick<Product, 'id' | 'pdtName' | 'pdtCode' | 'categoryId' | 'unitPrice'>
  & { Category: CategoryFragmentFragment, carts: Array<CartFragmentFragment>, orderDetails: Array<OrderDetailFragmentFragment> }
);

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

export type CreateOrderTypeMutationVariables = Exact<{
  data: OrderTypeCreateInput;
}>;


export type CreateOrderTypeMutation = { createOneOrderType: OrderTypeFragmentFragment };

export type CreateAOrderTypeMutationVariables = Exact<{
  data: OrderTypeCreateInput;
}>;


export type CreateAOrderTypeMutation = { createOrderType?: Maybe<OrderTypeFragmentFragment> };

export type DeleteAOrderTypeMutationVariables = Exact<{
  where: OrderTypeWhereUniqueInput;
}>;


export type DeleteAOrderTypeMutation = { deleteOneOrderType?: Maybe<Pick<OrderType, 'id'>> };

export type UpdateAOrderTypeMutationVariables = Exact<{
  data: OrderTypeUpdateInput;
  where: OrderTypeWhereUniqueInput;
}>;


export type UpdateAOrderTypeMutation = { updateOneOrderType?: Maybe<OrderTypeFragmentFragment> };

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

export type CartByClientIdAndEmployeeIdQueryVariables = Exact<{
  clientId: Scalars['String'];
  employeeId: Scalars['String'];
}>;


export type CartByClientIdAndEmployeeIdQuery = { cartByClientIdAndEmplId?: Maybe<Array<Maybe<CartFragmentFragment>>> };

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

export type AllOrderTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllOrderTypesQuery = { orderTypes: Array<OrderTypeFragmentFragment> };

export type SingleOrderTypeQueryVariables = Exact<{
  where: OrderTypeWhereUniqueInput;
}>;


export type SingleOrderTypeQuery = { orderType?: Maybe<OrderTypeFragmentFragment> };

export type SingleOrderTypeByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type SingleOrderTypeByIdQuery = { orderTypeById?: Maybe<OrderTypeFragmentFragment> };

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

export const ClientFragmentFragmentDoc = gql`
    fragment ClientFragment on Client {
  id
  clientNames
  clientPhoneNumb
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
}
    ${OrderDetailFragmentFragmentDoc}`;
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
export const FinancialYearFragmentFragmentDoc = gql`
    fragment FinancialYearFragment on FinancialYear {
  yearName
  id
}
    `;
export const OrderTypeFragmentFragmentDoc = gql`
    fragment OrderTypeFragment on OrderType {
  orderTypeCode
  orderTypeName
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
export const CartFragmentFragmentDoc = gql`
    fragment CartFragment on Cart {
  id
  orderDate
  qtty
  pdtCost
  salesPrice
}
    `;
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
export const CreateOrderTypeDocument = gql`
    mutation createOrderType($data: OrderTypeCreateInput!) {
  createOneOrderType(data: $data) {
    ...OrderTypeFragment
  }
}
    ${OrderTypeFragmentFragmentDoc}`;
export type CreateOrderTypeMutationFn = Apollo.MutationFunction<CreateOrderTypeMutation, CreateOrderTypeMutationVariables>;
export type CreateOrderTypeComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateOrderTypeMutation, CreateOrderTypeMutationVariables>, 'mutation'>;

    export const CreateOrderTypeComponent = (props: CreateOrderTypeComponentProps) => (
      <ApolloReactComponents.Mutation<CreateOrderTypeMutation, CreateOrderTypeMutationVariables> mutation={CreateOrderTypeDocument} {...props} />
    );
    
export type CreateOrderTypeProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateOrderTypeMutation, CreateOrderTypeMutationVariables>
    } & TChildProps;
export function withCreateOrderType<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateOrderTypeMutation,
  CreateOrderTypeMutationVariables,
  CreateOrderTypeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateOrderTypeMutation, CreateOrderTypeMutationVariables, CreateOrderTypeProps<TChildProps, TDataName>>(CreateOrderTypeDocument, {
      alias: 'createOrderType',
      ...operationOptions
    });
};

/**
 * __useCreateOrderTypeMutation__
 *
 * To run a mutation, you first call `useCreateOrderTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrderTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrderTypeMutation, { data, loading, error }] = useCreateOrderTypeMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOrderTypeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateOrderTypeMutation, CreateOrderTypeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateOrderTypeMutation, CreateOrderTypeMutationVariables>(CreateOrderTypeDocument, options);
      }
export type CreateOrderTypeMutationHookResult = ReturnType<typeof useCreateOrderTypeMutation>;
export type CreateOrderTypeMutationResult = Apollo.MutationResult<CreateOrderTypeMutation>;
export type CreateOrderTypeMutationOptions = Apollo.BaseMutationOptions<CreateOrderTypeMutation, CreateOrderTypeMutationVariables>;
export const CreateAOrderTypeDocument = gql`
    mutation createAOrderType($data: OrderTypeCreateInput!) {
  createOrderType(data: $data) {
    ...OrderTypeFragment
  }
}
    ${OrderTypeFragmentFragmentDoc}`;
export type CreateAOrderTypeMutationFn = Apollo.MutationFunction<CreateAOrderTypeMutation, CreateAOrderTypeMutationVariables>;
export type CreateAOrderTypeComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateAOrderTypeMutation, CreateAOrderTypeMutationVariables>, 'mutation'>;

    export const CreateAOrderTypeComponent = (props: CreateAOrderTypeComponentProps) => (
      <ApolloReactComponents.Mutation<CreateAOrderTypeMutation, CreateAOrderTypeMutationVariables> mutation={CreateAOrderTypeDocument} {...props} />
    );
    
export type CreateAOrderTypeProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateAOrderTypeMutation, CreateAOrderTypeMutationVariables>
    } & TChildProps;
export function withCreateAOrderType<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateAOrderTypeMutation,
  CreateAOrderTypeMutationVariables,
  CreateAOrderTypeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateAOrderTypeMutation, CreateAOrderTypeMutationVariables, CreateAOrderTypeProps<TChildProps, TDataName>>(CreateAOrderTypeDocument, {
      alias: 'createAOrderType',
      ...operationOptions
    });
};

/**
 * __useCreateAOrderTypeMutation__
 *
 * To run a mutation, you first call `useCreateAOrderTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAOrderTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAOrderTypeMutation, { data, loading, error }] = useCreateAOrderTypeMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateAOrderTypeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateAOrderTypeMutation, CreateAOrderTypeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateAOrderTypeMutation, CreateAOrderTypeMutationVariables>(CreateAOrderTypeDocument, options);
      }
export type CreateAOrderTypeMutationHookResult = ReturnType<typeof useCreateAOrderTypeMutation>;
export type CreateAOrderTypeMutationResult = Apollo.MutationResult<CreateAOrderTypeMutation>;
export type CreateAOrderTypeMutationOptions = Apollo.BaseMutationOptions<CreateAOrderTypeMutation, CreateAOrderTypeMutationVariables>;
export const DeleteAOrderTypeDocument = gql`
    mutation deleteAOrderType($where: OrderTypeWhereUniqueInput!) {
  deleteOneOrderType(where: $where) {
    id
  }
}
    `;
export type DeleteAOrderTypeMutationFn = Apollo.MutationFunction<DeleteAOrderTypeMutation, DeleteAOrderTypeMutationVariables>;
export type DeleteAOrderTypeComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteAOrderTypeMutation, DeleteAOrderTypeMutationVariables>, 'mutation'>;

    export const DeleteAOrderTypeComponent = (props: DeleteAOrderTypeComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteAOrderTypeMutation, DeleteAOrderTypeMutationVariables> mutation={DeleteAOrderTypeDocument} {...props} />
    );
    
export type DeleteAOrderTypeProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteAOrderTypeMutation, DeleteAOrderTypeMutationVariables>
    } & TChildProps;
export function withDeleteAOrderType<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteAOrderTypeMutation,
  DeleteAOrderTypeMutationVariables,
  DeleteAOrderTypeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteAOrderTypeMutation, DeleteAOrderTypeMutationVariables, DeleteAOrderTypeProps<TChildProps, TDataName>>(DeleteAOrderTypeDocument, {
      alias: 'deleteAOrderType',
      ...operationOptions
    });
};

/**
 * __useDeleteAOrderTypeMutation__
 *
 * To run a mutation, you first call `useDeleteAOrderTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAOrderTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAOrderTypeMutation, { data, loading, error }] = useDeleteAOrderTypeMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteAOrderTypeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteAOrderTypeMutation, DeleteAOrderTypeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteAOrderTypeMutation, DeleteAOrderTypeMutationVariables>(DeleteAOrderTypeDocument, options);
      }
export type DeleteAOrderTypeMutationHookResult = ReturnType<typeof useDeleteAOrderTypeMutation>;
export type DeleteAOrderTypeMutationResult = Apollo.MutationResult<DeleteAOrderTypeMutation>;
export type DeleteAOrderTypeMutationOptions = Apollo.BaseMutationOptions<DeleteAOrderTypeMutation, DeleteAOrderTypeMutationVariables>;
export const UpdateAOrderTypeDocument = gql`
    mutation updateAOrderType($data: OrderTypeUpdateInput!, $where: OrderTypeWhereUniqueInput!) {
  updateOneOrderType(data: $data, where: $where) {
    ...OrderTypeFragment
  }
}
    ${OrderTypeFragmentFragmentDoc}`;
export type UpdateAOrderTypeMutationFn = Apollo.MutationFunction<UpdateAOrderTypeMutation, UpdateAOrderTypeMutationVariables>;
export type UpdateAOrderTypeComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateAOrderTypeMutation, UpdateAOrderTypeMutationVariables>, 'mutation'>;

    export const UpdateAOrderTypeComponent = (props: UpdateAOrderTypeComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateAOrderTypeMutation, UpdateAOrderTypeMutationVariables> mutation={UpdateAOrderTypeDocument} {...props} />
    );
    
export type UpdateAOrderTypeProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdateAOrderTypeMutation, UpdateAOrderTypeMutationVariables>
    } & TChildProps;
export function withUpdateAOrderType<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateAOrderTypeMutation,
  UpdateAOrderTypeMutationVariables,
  UpdateAOrderTypeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateAOrderTypeMutation, UpdateAOrderTypeMutationVariables, UpdateAOrderTypeProps<TChildProps, TDataName>>(UpdateAOrderTypeDocument, {
      alias: 'updateAOrderType',
      ...operationOptions
    });
};

/**
 * __useUpdateAOrderTypeMutation__
 *
 * To run a mutation, you first call `useUpdateAOrderTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAOrderTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAOrderTypeMutation, { data, loading, error }] = useUpdateAOrderTypeMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateAOrderTypeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateAOrderTypeMutation, UpdateAOrderTypeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateAOrderTypeMutation, UpdateAOrderTypeMutationVariables>(UpdateAOrderTypeDocument, options);
      }
export type UpdateAOrderTypeMutationHookResult = ReturnType<typeof useUpdateAOrderTypeMutation>;
export type UpdateAOrderTypeMutationResult = Apollo.MutationResult<UpdateAOrderTypeMutation>;
export type UpdateAOrderTypeMutationOptions = Apollo.BaseMutationOptions<UpdateAOrderTypeMutation, UpdateAOrderTypeMutationVariables>;
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
export const CartByClientIdAndEmployeeIdDocument = gql`
    query cartByClientIdAndEmployeeId($clientId: String!, $employeeId: String!) {
  cartByClientIdAndEmplId(clientId: $clientId, employeeId: $employeeId) {
    ...CartFragment
  }
}
    ${CartFragmentFragmentDoc}`;
export type CartByClientIdAndEmployeeIdComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CartByClientIdAndEmployeeIdQuery, CartByClientIdAndEmployeeIdQueryVariables>, 'query'> & ({ variables: CartByClientIdAndEmployeeIdQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const CartByClientIdAndEmployeeIdComponent = (props: CartByClientIdAndEmployeeIdComponentProps) => (
      <ApolloReactComponents.Query<CartByClientIdAndEmployeeIdQuery, CartByClientIdAndEmployeeIdQueryVariables> query={CartByClientIdAndEmployeeIdDocument} {...props} />
    );
    
export type CartByClientIdAndEmployeeIdProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<CartByClientIdAndEmployeeIdQuery, CartByClientIdAndEmployeeIdQueryVariables>
    } & TChildProps;
export function withCartByClientIdAndEmployeeId<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CartByClientIdAndEmployeeIdQuery,
  CartByClientIdAndEmployeeIdQueryVariables,
  CartByClientIdAndEmployeeIdProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, CartByClientIdAndEmployeeIdQuery, CartByClientIdAndEmployeeIdQueryVariables, CartByClientIdAndEmployeeIdProps<TChildProps, TDataName>>(CartByClientIdAndEmployeeIdDocument, {
      alias: 'cartByClientIdAndEmployeeId',
      ...operationOptions
    });
};

/**
 * __useCartByClientIdAndEmployeeIdQuery__
 *
 * To run a query within a React component, call `useCartByClientIdAndEmployeeIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useCartByClientIdAndEmployeeIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCartByClientIdAndEmployeeIdQuery({
 *   variables: {
 *      clientId: // value for 'clientId'
 *      employeeId: // value for 'employeeId'
 *   },
 * });
 */
export function useCartByClientIdAndEmployeeIdQuery(baseOptions: ApolloReactHooks.QueryHookOptions<CartByClientIdAndEmployeeIdQuery, CartByClientIdAndEmployeeIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<CartByClientIdAndEmployeeIdQuery, CartByClientIdAndEmployeeIdQueryVariables>(CartByClientIdAndEmployeeIdDocument, options);
      }
export function useCartByClientIdAndEmployeeIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CartByClientIdAndEmployeeIdQuery, CartByClientIdAndEmployeeIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<CartByClientIdAndEmployeeIdQuery, CartByClientIdAndEmployeeIdQueryVariables>(CartByClientIdAndEmployeeIdDocument, options);
        }
export type CartByClientIdAndEmployeeIdQueryHookResult = ReturnType<typeof useCartByClientIdAndEmployeeIdQuery>;
export type CartByClientIdAndEmployeeIdLazyQueryHookResult = ReturnType<typeof useCartByClientIdAndEmployeeIdLazyQuery>;
export type CartByClientIdAndEmployeeIdQueryResult = Apollo.QueryResult<CartByClientIdAndEmployeeIdQuery, CartByClientIdAndEmployeeIdQueryVariables>;
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
export const AllOrderTypesDocument = gql`
    query AllOrderTypes {
  orderTypes {
    ...OrderTypeFragment
  }
}
    ${OrderTypeFragmentFragmentDoc}`;
export type AllOrderTypesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllOrderTypesQuery, AllOrderTypesQueryVariables>, 'query'>;

    export const AllOrderTypesComponent = (props: AllOrderTypesComponentProps) => (
      <ApolloReactComponents.Query<AllOrderTypesQuery, AllOrderTypesQueryVariables> query={AllOrderTypesDocument} {...props} />
    );
    
export type AllOrderTypesProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<AllOrderTypesQuery, AllOrderTypesQueryVariables>
    } & TChildProps;
export function withAllOrderTypes<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AllOrderTypesQuery,
  AllOrderTypesQueryVariables,
  AllOrderTypesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, AllOrderTypesQuery, AllOrderTypesQueryVariables, AllOrderTypesProps<TChildProps, TDataName>>(AllOrderTypesDocument, {
      alias: 'allOrderTypes',
      ...operationOptions
    });
};

/**
 * __useAllOrderTypesQuery__
 *
 * To run a query within a React component, call `useAllOrderTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllOrderTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllOrderTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllOrderTypesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllOrderTypesQuery, AllOrderTypesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<AllOrderTypesQuery, AllOrderTypesQueryVariables>(AllOrderTypesDocument, options);
      }
export function useAllOrderTypesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllOrderTypesQuery, AllOrderTypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<AllOrderTypesQuery, AllOrderTypesQueryVariables>(AllOrderTypesDocument, options);
        }
export type AllOrderTypesQueryHookResult = ReturnType<typeof useAllOrderTypesQuery>;
export type AllOrderTypesLazyQueryHookResult = ReturnType<typeof useAllOrderTypesLazyQuery>;
export type AllOrderTypesQueryResult = Apollo.QueryResult<AllOrderTypesQuery, AllOrderTypesQueryVariables>;
export const SingleOrderTypeDocument = gql`
    query SingleOrderType($where: OrderTypeWhereUniqueInput!) {
  orderType(where: $where) {
    ...OrderTypeFragment
  }
}
    ${OrderTypeFragmentFragmentDoc}`;
export type SingleOrderTypeComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SingleOrderTypeQuery, SingleOrderTypeQueryVariables>, 'query'> & ({ variables: SingleOrderTypeQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SingleOrderTypeComponent = (props: SingleOrderTypeComponentProps) => (
      <ApolloReactComponents.Query<SingleOrderTypeQuery, SingleOrderTypeQueryVariables> query={SingleOrderTypeDocument} {...props} />
    );
    
export type SingleOrderTypeProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SingleOrderTypeQuery, SingleOrderTypeQueryVariables>
    } & TChildProps;
export function withSingleOrderType<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SingleOrderTypeQuery,
  SingleOrderTypeQueryVariables,
  SingleOrderTypeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SingleOrderTypeQuery, SingleOrderTypeQueryVariables, SingleOrderTypeProps<TChildProps, TDataName>>(SingleOrderTypeDocument, {
      alias: 'singleOrderType',
      ...operationOptions
    });
};

/**
 * __useSingleOrderTypeQuery__
 *
 * To run a query within a React component, call `useSingleOrderTypeQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleOrderTypeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleOrderTypeQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useSingleOrderTypeQuery(baseOptions: ApolloReactHooks.QueryHookOptions<SingleOrderTypeQuery, SingleOrderTypeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<SingleOrderTypeQuery, SingleOrderTypeQueryVariables>(SingleOrderTypeDocument, options);
      }
export function useSingleOrderTypeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SingleOrderTypeQuery, SingleOrderTypeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<SingleOrderTypeQuery, SingleOrderTypeQueryVariables>(SingleOrderTypeDocument, options);
        }
export type SingleOrderTypeQueryHookResult = ReturnType<typeof useSingleOrderTypeQuery>;
export type SingleOrderTypeLazyQueryHookResult = ReturnType<typeof useSingleOrderTypeLazyQuery>;
export type SingleOrderTypeQueryResult = Apollo.QueryResult<SingleOrderTypeQuery, SingleOrderTypeQueryVariables>;
export const SingleOrderTypeByIdDocument = gql`
    query SingleOrderTypeById($id: String!) {
  orderTypeById(id: $id) {
    ...OrderTypeFragment
  }
}
    ${OrderTypeFragmentFragmentDoc}`;
export type SingleOrderTypeByIdComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SingleOrderTypeByIdQuery, SingleOrderTypeByIdQueryVariables>, 'query'> & ({ variables: SingleOrderTypeByIdQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SingleOrderTypeByIdComponent = (props: SingleOrderTypeByIdComponentProps) => (
      <ApolloReactComponents.Query<SingleOrderTypeByIdQuery, SingleOrderTypeByIdQueryVariables> query={SingleOrderTypeByIdDocument} {...props} />
    );
    
export type SingleOrderTypeByIdProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SingleOrderTypeByIdQuery, SingleOrderTypeByIdQueryVariables>
    } & TChildProps;
export function withSingleOrderTypeById<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SingleOrderTypeByIdQuery,
  SingleOrderTypeByIdQueryVariables,
  SingleOrderTypeByIdProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SingleOrderTypeByIdQuery, SingleOrderTypeByIdQueryVariables, SingleOrderTypeByIdProps<TChildProps, TDataName>>(SingleOrderTypeByIdDocument, {
      alias: 'singleOrderTypeById',
      ...operationOptions
    });
};

/**
 * __useSingleOrderTypeByIdQuery__
 *
 * To run a query within a React component, call `useSingleOrderTypeByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleOrderTypeByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleOrderTypeByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSingleOrderTypeByIdQuery(baseOptions: ApolloReactHooks.QueryHookOptions<SingleOrderTypeByIdQuery, SingleOrderTypeByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<SingleOrderTypeByIdQuery, SingleOrderTypeByIdQueryVariables>(SingleOrderTypeByIdDocument, options);
      }
export function useSingleOrderTypeByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SingleOrderTypeByIdQuery, SingleOrderTypeByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<SingleOrderTypeByIdQuery, SingleOrderTypeByIdQueryVariables>(SingleOrderTypeByIdDocument, options);
        }
export type SingleOrderTypeByIdQueryHookResult = ReturnType<typeof useSingleOrderTypeByIdQuery>;
export type SingleOrderTypeByIdLazyQueryHookResult = ReturnType<typeof useSingleOrderTypeByIdLazyQuery>;
export type SingleOrderTypeByIdQueryResult = Apollo.QueryResult<SingleOrderTypeByIdQuery, SingleOrderTypeByIdQueryVariables>;
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
  Cart: ResolverTypeWrapper<Cart>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Category: ResolverTypeWrapper<Category>;
  Client: ResolverTypeWrapper<Client>;
  Employee: ResolverTypeWrapper<Employee>;
  EmployeeStatus: ResolverTypeWrapper<EmployeeStatus>;
  Finance: ResolverTypeWrapper<Finance>;
  FinancialYear: ResolverTypeWrapper<FinancialYear>;
  Order: ResolverTypeWrapper<Order>;
  OrderDetail: ResolverTypeWrapper<OrderDetail>;
  OrderType: ResolverTypeWrapper<OrderType>;
  Product: ResolverTypeWrapper<Product>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  ProductWhereUniqueInput: ProductWhereUniqueInput;
  FinanceWhereUniqueInput: FinanceWhereUniqueInput;
  OrderDetailWhereUniqueInput: OrderDetailWhereUniqueInput;
  CartWhereUniqueInput: CartWhereUniqueInput;
  CategoryWhereUniqueInput: CategoryWhereUniqueInput;
  ClientWhereUniqueInput: ClientWhereUniqueInput;
  EmployeeWhereUniqueInput: EmployeeWhereUniqueInput;
  EmployeeStatusWhereUniqueInput: EmployeeStatusWhereUniqueInput;
  FinancialYearWhereUniqueInput: FinancialYearWhereUniqueInput;
  OrderWhereUniqueInput: OrderWhereUniqueInput;
  OrderTypeWhereUniqueInput: OrderTypeWhereUniqueInput;
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
  OrderTypeCreateInput: OrderTypeCreateInput;
  OrderTypeUpdateInput: OrderTypeUpdateInput;
  FinancialYearCreateInput: FinancialYearCreateInput;
  FinancialYearUpdateInput: FinancialYearUpdateInput;
  EmployeeCreateInput: EmployeeCreateInput;
  EmployeeUpdateInput: EmployeeUpdateInput;
  EmployeeStatusCreateInput: EmployeeStatusCreateInput;
  EmployeeStatusUpdateInput: EmployeeStatusUpdateInput;
  FinanceCreateInput: FinanceCreateInput;
  FinanceUpdateInput: FinanceUpdateInput;
  ProductCreateInput: ProductCreateInput;
  ProductUpdateInput: ProductUpdateInput;
  ProductCreateNestedOneWithoutCartsInput: ProductCreateNestedOneWithoutCartsInput;
  ClientCreateNestedOneWithoutCartsInput: ClientCreateNestedOneWithoutCartsInput;
  EmployeeCreateNestedOneWithoutCartsInput: EmployeeCreateNestedOneWithoutCartsInput;
  StringFieldUpdateOperationsInput: StringFieldUpdateOperationsInput;
  FloatFieldUpdateOperationsInput: FloatFieldUpdateOperationsInput;
  IntFieldUpdateOperationsInput: IntFieldUpdateOperationsInput;
  DateTimeFieldUpdateOperationsInput: DateTimeFieldUpdateOperationsInput;
  ProductUpdateOneRequiredWithoutCartsInput: ProductUpdateOneRequiredWithoutCartsInput;
  ClientUpdateOneRequiredWithoutCartsInput: ClientUpdateOneRequiredWithoutCartsInput;
  EmployeeUpdateOneRequiredWithoutCartsInput: EmployeeUpdateOneRequiredWithoutCartsInput;
  ProductCreateNestedManyWithoutCategoryInput: ProductCreateNestedManyWithoutCategoryInput;
  ProductUpdateManyWithoutCategoryInput: ProductUpdateManyWithoutCategoryInput;
  CartCreateNestedManyWithoutClientInput: CartCreateNestedManyWithoutClientInput;
  OrderCreateNestedManyWithoutClientInput: OrderCreateNestedManyWithoutClientInput;
  CartUpdateManyWithoutClientInput: CartUpdateManyWithoutClientInput;
  OrderUpdateManyWithoutClientInput: OrderUpdateManyWithoutClientInput;
  OrderCreateNestedOneWithoutOrderDetailsInput: OrderCreateNestedOneWithoutOrderDetailsInput;
  ProductCreateNestedOneWithoutOrderDetailsInput: ProductCreateNestedOneWithoutOrderDetailsInput;
  OrderUpdateOneRequiredWithoutOrderDetailsInput: OrderUpdateOneRequiredWithoutOrderDetailsInput;
  ProductUpdateOneRequiredWithoutOrderDetailsInput: ProductUpdateOneRequiredWithoutOrderDetailsInput;
  OrderDetailCreateNestedManyWithoutOrderInput: OrderDetailCreateNestedManyWithoutOrderInput;
  FinanceCreateNestedManyWithoutOrderInput: FinanceCreateNestedManyWithoutOrderInput;
  ClientCreateNestedOneWithoutOrdersInput: ClientCreateNestedOneWithoutOrdersInput;
  EmployeeCreateNestedOneWithoutOrdersInput: EmployeeCreateNestedOneWithoutOrdersInput;
  OrderDetailUpdateManyWithoutOrderInput: OrderDetailUpdateManyWithoutOrderInput;
  FinanceUpdateManyWithoutOrderInput: FinanceUpdateManyWithoutOrderInput;
  ClientUpdateOneRequiredWithoutOrdersInput: ClientUpdateOneRequiredWithoutOrdersInput;
  EmployeeUpdateOneRequiredWithoutOrdersInput: EmployeeUpdateOneRequiredWithoutOrdersInput;
  CartCreateNestedManyWithoutEmployeeInput: CartCreateNestedManyWithoutEmployeeInput;
  OrderCreateNestedManyWithoutEmployeeInput: OrderCreateNestedManyWithoutEmployeeInput;
  CartUpdateManyWithoutEmployeeInput: CartUpdateManyWithoutEmployeeInput;
  OrderUpdateManyWithoutEmployeeInput: OrderUpdateManyWithoutEmployeeInput;
  OrderCreateNestedOneWithoutFinancesInput: OrderCreateNestedOneWithoutFinancesInput;
  OrderUpdateOneRequiredWithoutFinancesInput: OrderUpdateOneRequiredWithoutFinancesInput;
  CartCreateNestedManyWithoutProductInput: CartCreateNestedManyWithoutProductInput;
  OrderDetailCreateNestedManyWithoutProductInput: OrderDetailCreateNestedManyWithoutProductInput;
  CategoryCreateNestedOneWithoutProductsInput: CategoryCreateNestedOneWithoutProductsInput;
  CartUpdateManyWithoutProductInput: CartUpdateManyWithoutProductInput;
  OrderDetailUpdateManyWithoutProductInput: OrderDetailUpdateManyWithoutProductInput;
  CategoryUpdateOneRequiredWithoutProductsInput: CategoryUpdateOneRequiredWithoutProductsInput;
  ProductCreateWithoutCartsInput: ProductCreateWithoutCartsInput;
  ProductCreateOrConnectWithoutCartsInput: ProductCreateOrConnectWithoutCartsInput;
  ClientCreateWithoutCartsInput: ClientCreateWithoutCartsInput;
  ClientCreateOrConnectWithoutCartsInput: ClientCreateOrConnectWithoutCartsInput;
  EmployeeCreateWithoutCartsInput: EmployeeCreateWithoutCartsInput;
  EmployeeCreateOrConnectWithoutCartsInput: EmployeeCreateOrConnectWithoutCartsInput;
  ProductUpsertWithoutCartsInput: ProductUpsertWithoutCartsInput;
  ProductUpdateWithoutCartsInput: ProductUpdateWithoutCartsInput;
  ClientUpsertWithoutCartsInput: ClientUpsertWithoutCartsInput;
  ClientUpdateWithoutCartsInput: ClientUpdateWithoutCartsInput;
  EmployeeUpsertWithoutCartsInput: EmployeeUpsertWithoutCartsInput;
  EmployeeUpdateWithoutCartsInput: EmployeeUpdateWithoutCartsInput;
  ProductCreateWithoutCategoryInput: ProductCreateWithoutCategoryInput;
  ProductCreateOrConnectWithoutCategoryInput: ProductCreateOrConnectWithoutCategoryInput;
  ProductCreateManyCategoryInputEnvelope: ProductCreateManyCategoryInputEnvelope;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ProductUpsertWithWhereUniqueWithoutCategoryInput: ProductUpsertWithWhereUniqueWithoutCategoryInput;
  ProductUpdateWithWhereUniqueWithoutCategoryInput: ProductUpdateWithWhereUniqueWithoutCategoryInput;
  ProductUpdateManyWithWhereWithoutCategoryInput: ProductUpdateManyWithWhereWithoutCategoryInput;
  ProductScalarWhereInput: ProductScalarWhereInput;
  CartCreateWithoutClientInput: CartCreateWithoutClientInput;
  CartCreateOrConnectWithoutClientInput: CartCreateOrConnectWithoutClientInput;
  CartCreateManyClientInputEnvelope: CartCreateManyClientInputEnvelope;
  OrderCreateWithoutClientInput: OrderCreateWithoutClientInput;
  OrderCreateOrConnectWithoutClientInput: OrderCreateOrConnectWithoutClientInput;
  OrderCreateManyClientInputEnvelope: OrderCreateManyClientInputEnvelope;
  CartUpsertWithWhereUniqueWithoutClientInput: CartUpsertWithWhereUniqueWithoutClientInput;
  CartUpdateWithWhereUniqueWithoutClientInput: CartUpdateWithWhereUniqueWithoutClientInput;
  CartUpdateManyWithWhereWithoutClientInput: CartUpdateManyWithWhereWithoutClientInput;
  CartScalarWhereInput: CartScalarWhereInput;
  OrderUpsertWithWhereUniqueWithoutClientInput: OrderUpsertWithWhereUniqueWithoutClientInput;
  OrderUpdateWithWhereUniqueWithoutClientInput: OrderUpdateWithWhereUniqueWithoutClientInput;
  OrderUpdateManyWithWhereWithoutClientInput: OrderUpdateManyWithWhereWithoutClientInput;
  OrderScalarWhereInput: OrderScalarWhereInput;
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
  ClientCreateWithoutOrdersInput: ClientCreateWithoutOrdersInput;
  ClientCreateOrConnectWithoutOrdersInput: ClientCreateOrConnectWithoutOrdersInput;
  EmployeeCreateWithoutOrdersInput: EmployeeCreateWithoutOrdersInput;
  EmployeeCreateOrConnectWithoutOrdersInput: EmployeeCreateOrConnectWithoutOrdersInput;
  OrderDetailUpsertWithWhereUniqueWithoutOrderInput: OrderDetailUpsertWithWhereUniqueWithoutOrderInput;
  OrderDetailUpdateWithWhereUniqueWithoutOrderInput: OrderDetailUpdateWithWhereUniqueWithoutOrderInput;
  OrderDetailUpdateManyWithWhereWithoutOrderInput: OrderDetailUpdateManyWithWhereWithoutOrderInput;
  OrderDetailScalarWhereInput: OrderDetailScalarWhereInput;
  FinanceUpsertWithWhereUniqueWithoutOrderInput: FinanceUpsertWithWhereUniqueWithoutOrderInput;
  FinanceUpdateWithWhereUniqueWithoutOrderInput: FinanceUpdateWithWhereUniqueWithoutOrderInput;
  FinanceUpdateManyWithWhereWithoutOrderInput: FinanceUpdateManyWithWhereWithoutOrderInput;
  FinanceScalarWhereInput: FinanceScalarWhereInput;
  ClientUpsertWithoutOrdersInput: ClientUpsertWithoutOrdersInput;
  ClientUpdateWithoutOrdersInput: ClientUpdateWithoutOrdersInput;
  EmployeeUpsertWithoutOrdersInput: EmployeeUpsertWithoutOrdersInput;
  EmployeeUpdateWithoutOrdersInput: EmployeeUpdateWithoutOrdersInput;
  CartCreateWithoutEmployeeInput: CartCreateWithoutEmployeeInput;
  CartCreateOrConnectWithoutEmployeeInput: CartCreateOrConnectWithoutEmployeeInput;
  CartCreateManyEmployeeInputEnvelope: CartCreateManyEmployeeInputEnvelope;
  OrderCreateWithoutEmployeeInput: OrderCreateWithoutEmployeeInput;
  OrderCreateOrConnectWithoutEmployeeInput: OrderCreateOrConnectWithoutEmployeeInput;
  OrderCreateManyEmployeeInputEnvelope: OrderCreateManyEmployeeInputEnvelope;
  CartUpsertWithWhereUniqueWithoutEmployeeInput: CartUpsertWithWhereUniqueWithoutEmployeeInput;
  CartUpdateWithWhereUniqueWithoutEmployeeInput: CartUpdateWithWhereUniqueWithoutEmployeeInput;
  CartUpdateManyWithWhereWithoutEmployeeInput: CartUpdateManyWithWhereWithoutEmployeeInput;
  OrderUpsertWithWhereUniqueWithoutEmployeeInput: OrderUpsertWithWhereUniqueWithoutEmployeeInput;
  OrderUpdateWithWhereUniqueWithoutEmployeeInput: OrderUpdateWithWhereUniqueWithoutEmployeeInput;
  OrderUpdateManyWithWhereWithoutEmployeeInput: OrderUpdateManyWithWhereWithoutEmployeeInput;
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
  ProductCreateManyCategoryInput: ProductCreateManyCategoryInput;
  ProductUpdateWithoutCategoryInput: ProductUpdateWithoutCategoryInput;
  ProductUpdateManyMutationInput: ProductUpdateManyMutationInput;
  StringFilter: StringFilter;
  IntFilter: IntFilter;
  DateTimeFilter: DateTimeFilter;
  CartCreateManyClientInput: CartCreateManyClientInput;
  OrderCreateManyClientInput: OrderCreateManyClientInput;
  CartUpdateWithoutClientInput: CartUpdateWithoutClientInput;
  CartUpdateManyMutationInput: CartUpdateManyMutationInput;
  FloatFilter: FloatFilter;
  OrderUpdateWithoutClientInput: OrderUpdateWithoutClientInput;
  OrderUpdateManyMutationInput: OrderUpdateManyMutationInput;
  OrderDetailCreateManyOrderInput: OrderDetailCreateManyOrderInput;
  FinanceCreateManyOrderInput: FinanceCreateManyOrderInput;
  OrderDetailUpdateWithoutOrderInput: OrderDetailUpdateWithoutOrderInput;
  OrderDetailUpdateManyMutationInput: OrderDetailUpdateManyMutationInput;
  FinanceUpdateWithoutOrderInput: FinanceUpdateWithoutOrderInput;
  FinanceUpdateManyMutationInput: FinanceUpdateManyMutationInput;
  CartCreateManyEmployeeInput: CartCreateManyEmployeeInput;
  OrderCreateManyEmployeeInput: OrderCreateManyEmployeeInput;
  CartUpdateWithoutEmployeeInput: CartUpdateWithoutEmployeeInput;
  OrderUpdateWithoutEmployeeInput: OrderUpdateWithoutEmployeeInput;
  CartCreateManyProductInput: CartCreateManyProductInput;
  OrderDetailCreateManyProductInput: OrderDetailCreateManyProductInput;
  CartUpdateWithoutProductInput: CartUpdateWithoutProductInput;
  OrderDetailUpdateWithoutProductInput: OrderDetailUpdateWithoutProductInput;
  QueryMode: QueryMode;
  NestedStringFilter: NestedStringFilter;
  NestedIntFilter: NestedIntFilter;
  NestedDateTimeFilter: NestedDateTimeFilter;
  NestedFloatFilter: NestedFloatFilter;
  Query: ResolverTypeWrapper<{}>;
  Mutation: ResolverTypeWrapper<{}>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Cart: Cart;
  String: Scalars['String'];
  Float: Scalars['Float'];
  Int: Scalars['Int'];
  Category: Category;
  Client: Client;
  Employee: Employee;
  EmployeeStatus: EmployeeStatus;
  Finance: Finance;
  FinancialYear: FinancialYear;
  Order: Order;
  OrderDetail: OrderDetail;
  OrderType: OrderType;
  Product: Product;
  DateTime: Scalars['DateTime'];
  ProductWhereUniqueInput: ProductWhereUniqueInput;
  FinanceWhereUniqueInput: FinanceWhereUniqueInput;
  OrderDetailWhereUniqueInput: OrderDetailWhereUniqueInput;
  CartWhereUniqueInput: CartWhereUniqueInput;
  CategoryWhereUniqueInput: CategoryWhereUniqueInput;
  ClientWhereUniqueInput: ClientWhereUniqueInput;
  EmployeeWhereUniqueInput: EmployeeWhereUniqueInput;
  EmployeeStatusWhereUniqueInput: EmployeeStatusWhereUniqueInput;
  FinancialYearWhereUniqueInput: FinancialYearWhereUniqueInput;
  OrderWhereUniqueInput: OrderWhereUniqueInput;
  OrderTypeWhereUniqueInput: OrderTypeWhereUniqueInput;
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
  OrderTypeCreateInput: OrderTypeCreateInput;
  OrderTypeUpdateInput: OrderTypeUpdateInput;
  FinancialYearCreateInput: FinancialYearCreateInput;
  FinancialYearUpdateInput: FinancialYearUpdateInput;
  EmployeeCreateInput: EmployeeCreateInput;
  EmployeeUpdateInput: EmployeeUpdateInput;
  EmployeeStatusCreateInput: EmployeeStatusCreateInput;
  EmployeeStatusUpdateInput: EmployeeStatusUpdateInput;
  FinanceCreateInput: FinanceCreateInput;
  FinanceUpdateInput: FinanceUpdateInput;
  ProductCreateInput: ProductCreateInput;
  ProductUpdateInput: ProductUpdateInput;
  ProductCreateNestedOneWithoutCartsInput: ProductCreateNestedOneWithoutCartsInput;
  ClientCreateNestedOneWithoutCartsInput: ClientCreateNestedOneWithoutCartsInput;
  EmployeeCreateNestedOneWithoutCartsInput: EmployeeCreateNestedOneWithoutCartsInput;
  StringFieldUpdateOperationsInput: StringFieldUpdateOperationsInput;
  FloatFieldUpdateOperationsInput: FloatFieldUpdateOperationsInput;
  IntFieldUpdateOperationsInput: IntFieldUpdateOperationsInput;
  DateTimeFieldUpdateOperationsInput: DateTimeFieldUpdateOperationsInput;
  ProductUpdateOneRequiredWithoutCartsInput: ProductUpdateOneRequiredWithoutCartsInput;
  ClientUpdateOneRequiredWithoutCartsInput: ClientUpdateOneRequiredWithoutCartsInput;
  EmployeeUpdateOneRequiredWithoutCartsInput: EmployeeUpdateOneRequiredWithoutCartsInput;
  ProductCreateNestedManyWithoutCategoryInput: ProductCreateNestedManyWithoutCategoryInput;
  ProductUpdateManyWithoutCategoryInput: ProductUpdateManyWithoutCategoryInput;
  CartCreateNestedManyWithoutClientInput: CartCreateNestedManyWithoutClientInput;
  OrderCreateNestedManyWithoutClientInput: OrderCreateNestedManyWithoutClientInput;
  CartUpdateManyWithoutClientInput: CartUpdateManyWithoutClientInput;
  OrderUpdateManyWithoutClientInput: OrderUpdateManyWithoutClientInput;
  OrderCreateNestedOneWithoutOrderDetailsInput: OrderCreateNestedOneWithoutOrderDetailsInput;
  ProductCreateNestedOneWithoutOrderDetailsInput: ProductCreateNestedOneWithoutOrderDetailsInput;
  OrderUpdateOneRequiredWithoutOrderDetailsInput: OrderUpdateOneRequiredWithoutOrderDetailsInput;
  ProductUpdateOneRequiredWithoutOrderDetailsInput: ProductUpdateOneRequiredWithoutOrderDetailsInput;
  OrderDetailCreateNestedManyWithoutOrderInput: OrderDetailCreateNestedManyWithoutOrderInput;
  FinanceCreateNestedManyWithoutOrderInput: FinanceCreateNestedManyWithoutOrderInput;
  ClientCreateNestedOneWithoutOrdersInput: ClientCreateNestedOneWithoutOrdersInput;
  EmployeeCreateNestedOneWithoutOrdersInput: EmployeeCreateNestedOneWithoutOrdersInput;
  OrderDetailUpdateManyWithoutOrderInput: OrderDetailUpdateManyWithoutOrderInput;
  FinanceUpdateManyWithoutOrderInput: FinanceUpdateManyWithoutOrderInput;
  ClientUpdateOneRequiredWithoutOrdersInput: ClientUpdateOneRequiredWithoutOrdersInput;
  EmployeeUpdateOneRequiredWithoutOrdersInput: EmployeeUpdateOneRequiredWithoutOrdersInput;
  CartCreateNestedManyWithoutEmployeeInput: CartCreateNestedManyWithoutEmployeeInput;
  OrderCreateNestedManyWithoutEmployeeInput: OrderCreateNestedManyWithoutEmployeeInput;
  CartUpdateManyWithoutEmployeeInput: CartUpdateManyWithoutEmployeeInput;
  OrderUpdateManyWithoutEmployeeInput: OrderUpdateManyWithoutEmployeeInput;
  OrderCreateNestedOneWithoutFinancesInput: OrderCreateNestedOneWithoutFinancesInput;
  OrderUpdateOneRequiredWithoutFinancesInput: OrderUpdateOneRequiredWithoutFinancesInput;
  CartCreateNestedManyWithoutProductInput: CartCreateNestedManyWithoutProductInput;
  OrderDetailCreateNestedManyWithoutProductInput: OrderDetailCreateNestedManyWithoutProductInput;
  CategoryCreateNestedOneWithoutProductsInput: CategoryCreateNestedOneWithoutProductsInput;
  CartUpdateManyWithoutProductInput: CartUpdateManyWithoutProductInput;
  OrderDetailUpdateManyWithoutProductInput: OrderDetailUpdateManyWithoutProductInput;
  CategoryUpdateOneRequiredWithoutProductsInput: CategoryUpdateOneRequiredWithoutProductsInput;
  ProductCreateWithoutCartsInput: ProductCreateWithoutCartsInput;
  ProductCreateOrConnectWithoutCartsInput: ProductCreateOrConnectWithoutCartsInput;
  ClientCreateWithoutCartsInput: ClientCreateWithoutCartsInput;
  ClientCreateOrConnectWithoutCartsInput: ClientCreateOrConnectWithoutCartsInput;
  EmployeeCreateWithoutCartsInput: EmployeeCreateWithoutCartsInput;
  EmployeeCreateOrConnectWithoutCartsInput: EmployeeCreateOrConnectWithoutCartsInput;
  ProductUpsertWithoutCartsInput: ProductUpsertWithoutCartsInput;
  ProductUpdateWithoutCartsInput: ProductUpdateWithoutCartsInput;
  ClientUpsertWithoutCartsInput: ClientUpsertWithoutCartsInput;
  ClientUpdateWithoutCartsInput: ClientUpdateWithoutCartsInput;
  EmployeeUpsertWithoutCartsInput: EmployeeUpsertWithoutCartsInput;
  EmployeeUpdateWithoutCartsInput: EmployeeUpdateWithoutCartsInput;
  ProductCreateWithoutCategoryInput: ProductCreateWithoutCategoryInput;
  ProductCreateOrConnectWithoutCategoryInput: ProductCreateOrConnectWithoutCategoryInput;
  ProductCreateManyCategoryInputEnvelope: ProductCreateManyCategoryInputEnvelope;
  Boolean: Scalars['Boolean'];
  ProductUpsertWithWhereUniqueWithoutCategoryInput: ProductUpsertWithWhereUniqueWithoutCategoryInput;
  ProductUpdateWithWhereUniqueWithoutCategoryInput: ProductUpdateWithWhereUniqueWithoutCategoryInput;
  ProductUpdateManyWithWhereWithoutCategoryInput: ProductUpdateManyWithWhereWithoutCategoryInput;
  ProductScalarWhereInput: ProductScalarWhereInput;
  CartCreateWithoutClientInput: CartCreateWithoutClientInput;
  CartCreateOrConnectWithoutClientInput: CartCreateOrConnectWithoutClientInput;
  CartCreateManyClientInputEnvelope: CartCreateManyClientInputEnvelope;
  OrderCreateWithoutClientInput: OrderCreateWithoutClientInput;
  OrderCreateOrConnectWithoutClientInput: OrderCreateOrConnectWithoutClientInput;
  OrderCreateManyClientInputEnvelope: OrderCreateManyClientInputEnvelope;
  CartUpsertWithWhereUniqueWithoutClientInput: CartUpsertWithWhereUniqueWithoutClientInput;
  CartUpdateWithWhereUniqueWithoutClientInput: CartUpdateWithWhereUniqueWithoutClientInput;
  CartUpdateManyWithWhereWithoutClientInput: CartUpdateManyWithWhereWithoutClientInput;
  CartScalarWhereInput: CartScalarWhereInput;
  OrderUpsertWithWhereUniqueWithoutClientInput: OrderUpsertWithWhereUniqueWithoutClientInput;
  OrderUpdateWithWhereUniqueWithoutClientInput: OrderUpdateWithWhereUniqueWithoutClientInput;
  OrderUpdateManyWithWhereWithoutClientInput: OrderUpdateManyWithWhereWithoutClientInput;
  OrderScalarWhereInput: OrderScalarWhereInput;
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
  ClientCreateWithoutOrdersInput: ClientCreateWithoutOrdersInput;
  ClientCreateOrConnectWithoutOrdersInput: ClientCreateOrConnectWithoutOrdersInput;
  EmployeeCreateWithoutOrdersInput: EmployeeCreateWithoutOrdersInput;
  EmployeeCreateOrConnectWithoutOrdersInput: EmployeeCreateOrConnectWithoutOrdersInput;
  OrderDetailUpsertWithWhereUniqueWithoutOrderInput: OrderDetailUpsertWithWhereUniqueWithoutOrderInput;
  OrderDetailUpdateWithWhereUniqueWithoutOrderInput: OrderDetailUpdateWithWhereUniqueWithoutOrderInput;
  OrderDetailUpdateManyWithWhereWithoutOrderInput: OrderDetailUpdateManyWithWhereWithoutOrderInput;
  OrderDetailScalarWhereInput: OrderDetailScalarWhereInput;
  FinanceUpsertWithWhereUniqueWithoutOrderInput: FinanceUpsertWithWhereUniqueWithoutOrderInput;
  FinanceUpdateWithWhereUniqueWithoutOrderInput: FinanceUpdateWithWhereUniqueWithoutOrderInput;
  FinanceUpdateManyWithWhereWithoutOrderInput: FinanceUpdateManyWithWhereWithoutOrderInput;
  FinanceScalarWhereInput: FinanceScalarWhereInput;
  ClientUpsertWithoutOrdersInput: ClientUpsertWithoutOrdersInput;
  ClientUpdateWithoutOrdersInput: ClientUpdateWithoutOrdersInput;
  EmployeeUpsertWithoutOrdersInput: EmployeeUpsertWithoutOrdersInput;
  EmployeeUpdateWithoutOrdersInput: EmployeeUpdateWithoutOrdersInput;
  CartCreateWithoutEmployeeInput: CartCreateWithoutEmployeeInput;
  CartCreateOrConnectWithoutEmployeeInput: CartCreateOrConnectWithoutEmployeeInput;
  CartCreateManyEmployeeInputEnvelope: CartCreateManyEmployeeInputEnvelope;
  OrderCreateWithoutEmployeeInput: OrderCreateWithoutEmployeeInput;
  OrderCreateOrConnectWithoutEmployeeInput: OrderCreateOrConnectWithoutEmployeeInput;
  OrderCreateManyEmployeeInputEnvelope: OrderCreateManyEmployeeInputEnvelope;
  CartUpsertWithWhereUniqueWithoutEmployeeInput: CartUpsertWithWhereUniqueWithoutEmployeeInput;
  CartUpdateWithWhereUniqueWithoutEmployeeInput: CartUpdateWithWhereUniqueWithoutEmployeeInput;
  CartUpdateManyWithWhereWithoutEmployeeInput: CartUpdateManyWithWhereWithoutEmployeeInput;
  OrderUpsertWithWhereUniqueWithoutEmployeeInput: OrderUpsertWithWhereUniqueWithoutEmployeeInput;
  OrderUpdateWithWhereUniqueWithoutEmployeeInput: OrderUpdateWithWhereUniqueWithoutEmployeeInput;
  OrderUpdateManyWithWhereWithoutEmployeeInput: OrderUpdateManyWithWhereWithoutEmployeeInput;
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
  ProductCreateManyCategoryInput: ProductCreateManyCategoryInput;
  ProductUpdateWithoutCategoryInput: ProductUpdateWithoutCategoryInput;
  ProductUpdateManyMutationInput: ProductUpdateManyMutationInput;
  StringFilter: StringFilter;
  IntFilter: IntFilter;
  DateTimeFilter: DateTimeFilter;
  CartCreateManyClientInput: CartCreateManyClientInput;
  OrderCreateManyClientInput: OrderCreateManyClientInput;
  CartUpdateWithoutClientInput: CartUpdateWithoutClientInput;
  CartUpdateManyMutationInput: CartUpdateManyMutationInput;
  FloatFilter: FloatFilter;
  OrderUpdateWithoutClientInput: OrderUpdateWithoutClientInput;
  OrderUpdateManyMutationInput: OrderUpdateManyMutationInput;
  OrderDetailCreateManyOrderInput: OrderDetailCreateManyOrderInput;
  FinanceCreateManyOrderInput: FinanceCreateManyOrderInput;
  OrderDetailUpdateWithoutOrderInput: OrderDetailUpdateWithoutOrderInput;
  OrderDetailUpdateManyMutationInput: OrderDetailUpdateManyMutationInput;
  FinanceUpdateWithoutOrderInput: FinanceUpdateWithoutOrderInput;
  FinanceUpdateManyMutationInput: FinanceUpdateManyMutationInput;
  CartCreateManyEmployeeInput: CartCreateManyEmployeeInput;
  OrderCreateManyEmployeeInput: OrderCreateManyEmployeeInput;
  CartUpdateWithoutEmployeeInput: CartUpdateWithoutEmployeeInput;
  OrderUpdateWithoutEmployeeInput: OrderUpdateWithoutEmployeeInput;
  CartCreateManyProductInput: CartCreateManyProductInput;
  OrderDetailCreateManyProductInput: OrderDetailCreateManyProductInput;
  CartUpdateWithoutProductInput: CartUpdateWithoutProductInput;
  OrderDetailUpdateWithoutProductInput: OrderDetailUpdateWithoutProductInput;
  NestedStringFilter: NestedStringFilter;
  NestedIntFilter: NestedIntFilter;
  NestedDateTimeFilter: NestedDateTimeFilter;
  NestedFloatFilter: NestedFloatFilter;
  Query: {};
  Mutation: {};
};

export type CartResolvers<ContextType = any, ParentType extends ResolversParentTypes['Cart'] = ResolversParentTypes['Cart']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  qtty?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  pdtCost?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  salesPrice?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
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
  yearName?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderResolvers<ContextType = any, ParentType extends ResolversParentTypes['Order'] = ResolversParentTypes['Order']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  orderTotal?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
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

export type OrderTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderType'] = ResolversParentTypes['OrderType']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderTypeName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderTypeCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pdtName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pdtCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Category?: Resolver<ResolversTypes['Category'], ParentType, ContextType>;
  carts?: Resolver<Array<ResolversTypes['Cart']>, ParentType, ContextType, RequireFields<ProductCartsArgs, never>>;
  categoryId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  unitPrice?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  orderDetails?: Resolver<Array<ResolversTypes['OrderDetail']>, ParentType, ContextType, RequireFields<ProductOrderDetailsArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  cart?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType, RequireFields<QueryCartArgs, 'where'>>;
  carts?: Resolver<Array<ResolversTypes['Cart']>, ParentType, ContextType, RequireFields<QueryCartsArgs, never>>;
  cartById?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType, RequireFields<QueryCartByIdArgs, never>>;
  cartByClientIdAndEmplId?: Resolver<Maybe<Array<Maybe<ResolversTypes['Cart']>>>, ParentType, ContextType, RequireFields<QueryCartByClientIdAndEmplIdArgs, never>>;
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<QueryCategoryArgs, 'where'>>;
  categories?: Resolver<Array<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<QueryCategoriesArgs, never>>;
  categoryById?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<QueryCategoryByIdArgs, never>>;
  client?: Resolver<Maybe<ResolversTypes['Client']>, ParentType, ContextType, RequireFields<QueryClientArgs, 'where'>>;
  clients?: Resolver<Maybe<Array<Maybe<ResolversTypes['Client']>>>, ParentType, ContextType>;
  clientByPhoneNumber?: Resolver<Maybe<ResolversTypes['Client']>, ParentType, ContextType, RequireFields<QueryClientByPhoneNumberArgs, never>>;
  clientById?: Resolver<Maybe<Array<Maybe<ResolversTypes['Client']>>>, ParentType, ContextType, RequireFields<QueryClientByIdArgs, never>>;
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
  financialYear?: Resolver<Maybe<ResolversTypes['FinancialYear']>, ParentType, ContextType, RequireFields<QueryFinancialYearArgs, 'where'>>;
  financialYears?: Resolver<Maybe<ResolversTypes['FinancialYear']>, ParentType, ContextType, RequireFields<QueryFinancialYearsArgs, never>>;
  financialYearById?: Resolver<Maybe<ResolversTypes['FinancialYear']>, ParentType, ContextType, RequireFields<QueryFinancialYearByIdArgs, never>>;
  recentFinancialYear?: Resolver<Maybe<ResolversTypes['FinancialYear']>, ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<QueryOrderArgs, 'where'>>;
  orders?: Resolver<Maybe<Array<Maybe<ResolversTypes['Order']>>>, ParentType, ContextType>;
  orderById?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<QueryOrderByIdArgs, never>>;
  orderDetail?: Resolver<Maybe<ResolversTypes['OrderDetail']>, ParentType, ContextType, RequireFields<QueryOrderDetailArgs, 'where'>>;
  orderDetails?: Resolver<Array<ResolversTypes['OrderDetail']>, ParentType, ContextType, RequireFields<QueryOrderDetailsArgs, never>>;
  orderType?: Resolver<Maybe<ResolversTypes['OrderType']>, ParentType, ContextType, RequireFields<QueryOrderTypeArgs, 'where'>>;
  orderTypes?: Resolver<Array<ResolversTypes['OrderType']>, ParentType, ContextType, RequireFields<QueryOrderTypesArgs, never>>;
  orderTypeById?: Resolver<Maybe<ResolversTypes['OrderType']>, ParentType, ContextType, RequireFields<QueryOrderTypeByIdArgs, never>>;
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<QueryProductArgs, 'where'>>;
  products?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType>;
  productById?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<QueryProductByIdArgs, never>>;
  productsByCategoryID?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType, RequireFields<QueryProductsByCategoryIdArgs, never>>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
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
  createOneOrderType?: Resolver<ResolversTypes['OrderType'], ParentType, ContextType, RequireFields<MutationCreateOneOrderTypeArgs, 'data'>>;
  deleteOneOrderType?: Resolver<Maybe<ResolversTypes['OrderType']>, ParentType, ContextType, RequireFields<MutationDeleteOneOrderTypeArgs, 'where'>>;
  updateOneOrderType?: Resolver<Maybe<ResolversTypes['OrderType']>, ParentType, ContextType, RequireFields<MutationUpdateOneOrderTypeArgs, 'data' | 'where'>>;
  createOrderType?: Resolver<Maybe<ResolversTypes['OrderType']>, ParentType, ContextType, RequireFields<MutationCreateOrderTypeArgs, 'data'>>;
  deleteOrderType?: Resolver<Maybe<ResolversTypes['OrderType']>, ParentType, ContextType, RequireFields<MutationDeleteOrderTypeArgs, 'where'>>;
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
  createOneProduct?: Resolver<ResolversTypes['Product'], ParentType, ContextType, RequireFields<MutationCreateOneProductArgs, 'data'>>;
  deleteOneProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationDeleteOneProductArgs, 'where'>>;
  updateOneProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationUpdateOneProductArgs, 'data' | 'where'>>;
  createProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationCreateProductArgs, 'data'>>;
  deleteProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationDeleteProductArgs, 'where'>>;
};

export type Resolvers<ContextType = any> = {
  Cart?: CartResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  Client?: ClientResolvers<ContextType>;
  Employee?: EmployeeResolvers<ContextType>;
  EmployeeStatus?: EmployeeStatusResolvers<ContextType>;
  Finance?: FinanceResolvers<ContextType>;
  FinancialYear?: FinancialYearResolvers<ContextType>;
  Order?: OrderResolvers<ContextType>;
  OrderDetail?: OrderDetailResolvers<ContextType>;
  OrderType?: OrderTypeResolvers<ContextType>;
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
