import { extendType, stringArg } from 'nexus';

export const cart = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cart();
    t.crud.carts();

    t.field('cartById', {
      type: 'Cart',
      args: {
        id: stringArg()
      },
      resolve: async (_parent, { id }, { prisma }) => {
        return await prisma.cart.findUnique({
          where: { id: String(id) }
        });
      }
    });

    // t.field('productCostFromCartId', {
    //   type: 'Cart',
    //   args: {
    //     id: stringArg()
    //   },
    //   resolve: async (_parent, { id }, { prisma }) => {
    //     return await prisma.cart.findUnique({
    //       where: { id: String(id) }
    //     });
    //   }
    // });

    t.list.field('cartByClientIdAndEmplId', {
      type: 'Cart',
      args: {
        clientId: stringArg(),
        employeeId: stringArg()
      },
      resolve: async (_parent, { clientId, employeeId }, { prisma }) => {
        return await prisma.cart.findMany({
          where: {
            clientId: String(clientId),
            employeeId: String(employeeId)
          }
        });
      }
    });
  }
});
