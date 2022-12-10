import * as Cart from './Cart.graphql';
import * as Category from './Category.graphql';
import * as Client from './Client.graphql';
import * as Employee from './Employee.graphql';
import * as EmployeeStatus from './EmployeeStatus.graphql';
import * as Finance from './Finance.graphql';
import * as FinancialYear from './FinancialYear.graphql';
import * as Order from './Order.graphql';
import * as OrderDetial from './OrderDetail.graphql';
import * as OrderType from './OrderType.graphql';
import * as Product from './Product.graphql';

export const Query = {
  ...Cart,
  ...Category,
  ...Client,
  ...Employee,
  ...EmployeeStatus,
  ...Finance,
  ...FinancialYear,
  ...Order,
  ...OrderDetial,
  ...OrderType,
  ...Product
};
