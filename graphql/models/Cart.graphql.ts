import { objectType } from 'nexus';

export const Cart = objectType({
  name: 'Cart',
  definition(t) {
    t.model.id();
    t.model.AnnualClient();
    t.model.orderDate();
    t.model.qtty();
    t.model.pdtCost();
    t.model.salesPrice();
    t.model.AnnualBranchEmployee();
    t.model.annualBranchEmployeeId();
    t.model.Product();
  }
});
