import * as AnnualBranchEmployee from './AnnualBranchEmployee.graphql';
import * as AnnualClient from './AnnualClient.graphql';
import * as Bonus from './Bonus.graphql';
import * as Branch from './Branch.graphql';
import * as BranchEmployee from './BranchEmployee.graphql';
import * as Cart from './Cart.graphql';
import * as Category from './Category.graphql';
import * as Client from './Client.graphql';
import * as Employee from './Employee.graphql';
import * as EmployeeStatus from './EmployeeStatus.graphql';
import * as Finance from './Finance.graphql';
import * as FinancialYear from './FinancialYear.graphql';
import * as Inventory from './Inventory.graphql';
import * as Order from './Order.graphql';
import * as OrderDetial from './OrderDetail.graphql';
import * as Product from './Product.graphql';

export const Query = {
  ...AnnualBranchEmployee,
  ...AnnualClient,
  ...Cart,
  ...Client,
  ...OrderDetial,
  ...Order,
  ...Bonus,
  ...Branch,
  ...BranchEmployee,
  ...FinancialYear,
  ...Employee,
  ...EmployeeStatus,
  ...Finance,
  ...Inventory,
  ...Category,
  ...Product
};
