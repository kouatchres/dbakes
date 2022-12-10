import { OrderDetail } from '@/graphql';
import { ApolloError } from 'apollo-server-micro';
import { arg, extendType, nonNull } from 'nexus';

export const order = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneOrder();
    t.crud.deleteOneOrder();
    t.crud.updateOneOrder();

    t.field('createOrder', {
      type: 'Order',
      description: 'Stores an  Order manually',
      args: {
        data: nonNull(arg({ type: 'OrderCreateInput' }))
      },

      resolve: async (_, { data }, { prisma }) => {
        const clientCartItems = await prisma.cart.findMany({
          where: {
            clientId: String(data?.Client?.connect?.id),
            employeeId: String(data?.Employee?.connect?.id)
          }
        });
        if (!clientCartItems) {
          throw new ApolloError(
            'Your cart is empty, start choosing items to buy'
          );
        }

        const clientCart = clientCartItems?.map(
          (item: {
            pdtCost: 0;
            salesPrice: 0;
            qtty: 0;
            orderDate: string;
            productId: string;
          }) => ({
            pdtCost: item?.pdtCost,
            salesPrice: item?.salesPrice,
            qtty: item?.qtty,
            orderDate: item?.orderDate,
            productId: item?.productId
          })
        );

        const cartItemQtty = clientCartItems?.map(
          (item: { productId: string; qtty: 0 }) => ({
            cartItemQtty: item?.qtty,
            productId: item?.productId
          })
        );

        //     const pdtItemQtty = await prisma.product.findMany({
        //       where: {
        //         id: {
        //   in: users.map(user => user.user_id)
        // },
        //   }
        // });

        // console.log({ clientCartItems });
        const calcOrderTotal = (clientCart: OrderDetail[]) => {
          const orderTotal =
            clientCart &&
            clientCart.reduce((tally, item) => tally + item.salesPrice, 0);
          return orderTotal;
        };

        return await prisma.$transaction([
          prisma.order.create({
            data: {
              ...data,
              orderTotal: calcOrderTotal(clientCartItems),
              client: {
                connect: { id: String(data?.Client?.connect?.id) }
              },
              Employee: {
                connect: { id: String(data?.Employee?.connect?.id) }
              },
              orderDetails: {
                createMany: {
                  data: clientCart
                }
              },
              finances: {
                create: {
                  amtPaid: calcOrderTotal(clientCart)
                }
              }
            }
          }),
          prisma.cart.deleteMany({
            where: {
              clientId: String(data?.Client?.connect?.id),
              EmployeeId: String(data?.Employee?.connect?.id)
            }
          })
        ]);

        // const [posts, totalPosts] = await prisma.$transaction([
        //   prisma.post.findMany({ where: { title: { contains: 'prisma' } } }),
        //   prisma.post.count()
        // ]);
        // return await prisma.cart.deleteMany({
        //   where: {
        //     clientId: String(data?.client?.connect?.id),
        //     EmployeeId: String(
        //       data?.Employee?.connect?.id
        //     )
        //   }
        // });

        // // const deleteAllClientsCarts = prisma.cart.deleteMany({});
        // return await prisma.$transaction([
        //   transferCartToOrder,
        //   deleteClientCart
        // ]);
      }
    });

    t.field('deleteOrder', {
      type: 'Order',
      description: 'deletes a Order manually',
      args: {
        where: nonNull(arg({ type: 'OrderWhereUniqueInput' }))
      },

      resolve: async (_, { where: { id } }, { prisma }) => {
        return await prisma.order.delete({
          where: { id: String(id) }
        });
      }
    });
  }
});
