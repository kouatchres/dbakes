import { extendType, stringArg } from 'nexus';

export const bonus = extendType({
  type: 'Query',
  definition(t) {
    t.crud.bonus();
    t.crud.bonuses();

    t.field('bonusById', {
      type: 'Bonus',
      args: {
        id: stringArg()
      },
      resolve: async (_parent, { id }, { prisma }) => {
        return await prisma.bonus.findUnique({
          where: { id: String(id) }
        });
      }
    });
  }
});
