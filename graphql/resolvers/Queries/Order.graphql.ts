import { extendType, stringArg } from 'nexus';

export const order = extendType({
  type: 'Query',
  definition(t) {
    t.crud.order();
    t.crud.orders();

    t.field('orderById', {
      type: 'Order',
      args: {
        id: stringArg()
      },
      resolve: async (_parent, { id }, { prisma }) => {
        return await prisma.order.findUnique({
          where: { id: String(id) }
        });
      }
    });

    t.list.field('orders', {
      type: 'Order',
      resolve: async (_parent, _args, { prisma }) => {
        return await prisma.order.findMany();
      }
    });
  }
});
