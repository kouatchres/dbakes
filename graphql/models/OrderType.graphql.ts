import { objectType } from 'nexus';

export const OrderType = objectType({
  name: 'OrderType',
  definition(t) {
    t.model.id();
    t.model.orderTypeName();
    t.model.orderTypeCode();
  }
});
