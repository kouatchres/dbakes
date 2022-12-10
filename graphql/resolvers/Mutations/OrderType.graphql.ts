import { ApolloError } from 'apollo-server-micro';
import { arg, extendType, nonNull } from 'nexus';

export const orderType = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneOrderType();
    t.crud.deleteOneOrderType();
    t.crud.updateOneOrderType();

    t.field('createOrderType', {
      type: 'OrderType',
      description: 'Stores a OrderType manually',
      args: {
        data: nonNull(arg({ type: 'OrderTypeCreateInput' }))
      },

      resolve: async (_, { data }, { prisma }) => {
        const wasRegistered = (
          await prisma.orderType.findMany({
            where: {
              orderTypeName: data?.orderTypeName
            }
          })
        )[0];
        if (wasRegistered) {
          throw new ApolloError('Order Type already present');
        }

        return await prisma.orderType.create({ data });
      }
    });

    t.field('deleteOrderType', {
      type: 'OrderType',
      description: 'deletes a orderType manually',
      args: {
        where: nonNull(arg({ type: 'OrderTypeWhereUniqueInput' }))
      },

      resolve: async (_, { where: { id } }, { prisma }) => {
        return await prisma.orderType.delete({
          where: { id: String(id) }
        });
      }
    });
  }
});
