import { objectType } from 'nexus';

export const Order = objectType({
  name: 'Order',
  definition(t) {
    t.model.id();
    t.model.orderDate();
    t.model.orderTotal();
    t.model.finances();
    t.model.totalPaid();
    t.model.orderDetails();

    t.model.orderNumber();
  }
});
