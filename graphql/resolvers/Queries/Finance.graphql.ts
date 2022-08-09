import { extendType, stringArg } from 'nexus';

export const finance = extendType({
  type: 'Query',
  definition(t) {
    t.crud.finance();
    t.crud.finances();

    t.field('financeById', {
      type: 'Finance',
      args: {
        id: stringArg()
      },
      resolve: async (_parent, { id }, { prisma }) => {
        return await prisma.finance.findUnique({
          where: { id: String(id) }
        });
      }
    });
  }
});
