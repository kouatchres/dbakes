import { objectType } from 'nexus';

export const Order = objectType({
  name: 'Order',
  definition(t) {
    t.model.id();
    t.model.orderDate();
    t.model.orderTotal();
    t.model.AnnualBranchEmployee();
    t.model.annualBranchEmployeeId();
    t.model.AnnualClient();
    t.model.annualClientId();
    t.model.finances();
    t.model.totalPaid();
    t.model.orderDetails();

    t.model.orderNumber();
  }
});
