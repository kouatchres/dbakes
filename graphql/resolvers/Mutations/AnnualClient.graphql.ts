import { arg, extendType, nonNull } from 'nexus';

export const annualClient = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneAnnualClient();
    t.crud.deleteOneAnnualClient();
    t.crud.updateOneAnnualClient();

    t.field('createAnnualClient', {
      type: 'AnnualClient',
      description: 'Stores a AnnualClient manually',
      args: {
        data: nonNull(arg({ type: 'AnnualClientCreateInput' }))
      },

      resolve: async (_, { data }, { prisma, userId }) => {
        // console.log({ userId });
        // const wasRegistered = (
        //   await prisma.annualClient.findMany({
        //     where: {
        //       annualClientNames: data?.annualClientNames
        //     }
        //   })
        // )[0];
        // if (wasRegistered) {
        //   throw new ApolloError('AnnualClient present');
        // }

        return await prisma.annualClient.create({
          data: {
            Client: { connect: { id: String(data?.Client?.connect?.id) } },
            FinancialYear: {
              connect: { id: String(data?.FinancialYear?.connect?.id) }
            }
          }
        });
      }
    });

    t.field('deleteAnnualClient', {
      type: 'AnnualClient',
      description: 'deletes a annualClient manually',
      args: {
        where: nonNull(arg({ type: 'AnnualClientWhereUniqueInput' }))
      },

      resolve: async (_, { where: { id } }, { prisma }) => {
        return await prisma.annualClient.delete({
          where: { id: String(id) }
        });
      }
    });
  }
});
