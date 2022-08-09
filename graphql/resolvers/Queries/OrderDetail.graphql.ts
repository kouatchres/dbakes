import { extendType } from 'nexus';

export const orderDetial = extendType({
  type: 'Query',
  definition(t) {
    t.crud.orderDetail();
    t.crud.orderDetails();
  }
});
