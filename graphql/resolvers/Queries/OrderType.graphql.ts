import { extendType, stringArg } from 'nexus';

export const orderType = extendType({
  type: 'Query',
  definition(t) {
    t.crud.orderType();
    t.crud.orderTypes();

    t.field('orderTypeById', {
      type: 'OrderType',
      args: {
        id: stringArg()
      },
      resolve: async (_parent, { id }, { prisma }) => {
        return await prisma.orderType.findUnique({
          where: { id: String(id) }
        });
      }
    });
  }
});
