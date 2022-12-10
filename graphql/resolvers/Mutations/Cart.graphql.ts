import { ApolloError } from 'apollo-server-micro';
import { arg, extendType, nonNull } from 'nexus';

export const cart = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneCart();
    t.crud.deleteOneCart();
    t.crud.updateOneCart();

    t.field('createCart', {
      type: 'Cart',
      description: 'Stores a Cart manually',
      args: {
        data: nonNull(arg({ type: 'CartCreateInput' }))
      },

      resolve: async (_, { data }, { prisma, userId }) => {
        console.log({ userId });
        //  const employeeNotPresent = (
        //    await prisma.branchEmployee.findMany({
        //      where: {
        //        branchId: String(data?.?.connect?.id),
        //        employeeId: String(data?.Employee?.connect?.id)
        //      }
        //    })
        //  )[0];

        //  if (employeeNotPresent) {
        //    throw new ApolloError('Employee already present in this branch');
        //  }

        const presentInCart = (
          await prisma.cart.findMany({
            where: {
              clientId: String(data?.Client?.connect?.id),
              employeeId: String(data?.Employee?.connect?.id),
              productId: String(data?.Product?.connect?.id)
            }
          })
        )[0];
        if (presentInCart) {
          throw new ApolloError('Product already present in your cart');
        }

        return await prisma.cart.create({
          data: {
            ...data,
            Client: {
              connect: { id: String(data?.Client?.connect?.id) }
            },
            Employee: {
              connect: { id: String(data?.Employee?.connect?.id) }
            },
            Product: {
              connect: { id: String(data?.Product?.connect?.id) }
            }
          }
        });
      }
    });

    t.field('deleteCart', {
      type: 'Cart',
      description: 'deletes a cart manually',
      args: {
        where: nonNull(arg({ type: 'CartWhereUniqueInput' }))
      },

      resolve: async (_, { where: { id } }, { prisma }) => {
        return await prisma.cart.delete({
          where: { id: String(id) }
        });
      }
    });
  }
});
