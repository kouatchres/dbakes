import { objectType } from 'nexus';

export const OrderDetail = objectType({
  name: 'OrderDetail',
  definition(t) {
    t.model.id();
    t.model.qtty();
    t.model.pdtCost();
    t.model.salesPrice();
    t.model.Order();
    t.model.orderId();
    t.model.Product();
    t.model.productId();
  }
});
