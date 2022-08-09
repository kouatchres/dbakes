import { objectType } from 'nexus';

export const Finance = objectType({
  name: 'Finance',
  definition(t) {
    t.model.id();
    t.model.amtPaid();
    t.model.orderId();
    t.model.Order();
  }
});
