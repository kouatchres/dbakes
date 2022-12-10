import { ApolloError } from 'apollo-server-micro';
import { arg, extendType, nonNull } from 'nexus';

export const financialYear = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneFinancialYear();
    t.crud.deleteOneFinancialYear();
    t.crud.updateOneFinancialYear();

    t.field('createFinancialYear', {
      type: 'FinancialYear',
      description: 'Stores a FinancialYear manually',
      args: {
        data: nonNull(arg({ type: 'FinancialYearCreateInput' }))
      },

      resolve: async (_, { data }, { prisma }) => {
        const wasRegistered = (
          await prisma.financialYear.findMany({
            where: {
              yearName: data?.yearName
            }
          })
        )[0];
        if (wasRegistered) {
          throw new ApolloError('Financial Year already present');
        }

        return await prisma.financialYear.create({ data });
      }
    });

    t.field('deleteFinancialYear', {
      type: 'FinancialYear',
      description: 'deletes a financialYear manually',
      args: {
        where: nonNull(arg({ type: 'FinancialYearWhereUniqueInput' }))
      },

      resolve: async (_, { where: { id } }, { prisma }) => {
        return await prisma.financialYear.delete({
          where: { id: String(id) }
        });
      }
    });
  }
});
