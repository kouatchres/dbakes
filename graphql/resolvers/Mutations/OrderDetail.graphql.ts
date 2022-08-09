import { arg, extendType, nonNull } from 'nexus';

export const orderDetail = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneOrderDetail();
    t.crud.deleteOneOrderDetail();
    t.crud.updateOneOrderDetail();

    t.field('createOrderDetail', {
      type: 'OrderDetail',
      description: 'Stores a OrderDetail manually',
      args: {
        data: nonNull(arg({ type: 'OrderDetailCreateInput' }))
      },

      resolve: async (_, { data }, { prisma, userId }) => {
        console.log({ userId });
        // const wasRegistered = (
        //   await prisma.orderDetail.findMany({
        //     where: {
        //       orderDetailDate: data?.orderDetailDate
        //     }
        //   })
        // )[0];
        // if (wasRegistered) {
        //   throw new Error('OrderDetail présent');
        // }

        return await prisma.orderDetail.create({
          data: {
            ...data,
            Product: {
              connect: { id: String(data?.Product?.connect?.id) }
            },
            Order: {
              connect: { id: String(data?.Order?.connect?.id) }
            },

            orderDate: String(data?.orderDate)
          }
        });
      }
    });

    t.field('deleteOrderDetail', {
      type: 'OrderDetail',
      description: 'deletes a OrderDetail manually',
      args: {
        where: nonNull(arg({ type: 'OrderDetailWhereUniqueInput' }))
      },

      resolve: async (_, { where: { id } }, { prisma }) => {
        return await prisma.orderDetail.delete({
          where: { id: String(id) }
        });
      }
    });
  }
});
