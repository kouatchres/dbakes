import { arg, extendType, nonNull } from 'nexus';

export const finance = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneFinance();
    t.crud.deleteOneFinance();
    t.crud.updateOneFinance();

    t.field('createFinance', {
      type: 'Finance',
      description: 'Stores a Finance manually',
      args: {
        data: nonNull(arg({ type: 'FinanceCreateInput' }))
      },

      resolve: async (_, { data }, { prisma, userId }) => {
        console.log({ userId });
        // const wasRegistered = (
        //   await prisma.finance.findMany({
        //     where: {
        //       amtPaid: data?.amtPaid
        //     }
        //   })
        // )[0];
        // if (wasRegistered) {
        //   throw new ApolloError('Finance present');
        // }

        return await prisma.finance.create({ data });
      }
    });

    t.field('deleteFinance', {
      type: 'Finance',
      description: 'deletes a finance manually',
      args: {
        where: nonNull(arg({ type: 'FinanceWhereUniqueInput' }))
      },

      resolve: async (_, { where: { id } }, { prisma }) => {
        return await prisma.finance.delete({
          where: { id: String(id) }
        });
      }
    });
  }
});
