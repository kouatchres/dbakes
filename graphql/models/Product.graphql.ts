import { objectType } from 'nexus';

export const Product = objectType({
  name: 'Product',
  definition(t) {
    t.model.id();
    t.model.pdtName();
    t.model.pdtCode();
    t.model.Category();
    t.model.carts();
    t.model.categoryId();
    t.model.unitPrice();
    t.model.orderDetails();
  }
});
