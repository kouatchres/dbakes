import { extendType, stringArg } from 'nexus';

export const financialYear = extendType({
  type: 'Query',
  definition(t) {
    t.crud.financialYear();
    t.crud.financialYears();

    t.field('financialYearById', {
      type: 'FinancialYear',
      args: {
        id: stringArg()
      },
      resolve: async (_parent, { id }, { prisma }) => {
        return await prisma.financialYear.findUnique({
          where: { id: String(id) }
        });
      }
    });

    t.field('recentFinancialYear', {
      type: 'FinancialYear',

      resolve: async (_parent, _args, { prisma }) => {
        return await prisma.financialYear.findFirst({
          orderBy: [{ yearName: 'desc' }]
        });
      }
    });
    t.field('financialYears', {
      type: 'FinancialYear',
      args: {
        id: stringArg()
      },
      resolve: async (_parent, { id }, { prisma }) => {
        return await prisma.financialYear.findMany({
          where: { id: String(id) }
        });
      }
    });
  }
});
