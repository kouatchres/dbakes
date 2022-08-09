import { ApolloError } from 'apollo-server-micro';
import { arg, extendType, nonNull } from 'nexus';

export const bonus = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneBonus();
    t.crud.deleteOneBonus();
    t.crud.updateOneBonus();

    t.field('createBonus', {
      type: 'Bonus',
      description: 'Stores a Bonus manually',
      args: {
        data: nonNull(arg({ type: 'BonusCreateInput' }))
      },

      resolve: async (_, { data }, { prisma, userId }) => {
        console.log({ userId });
        const wasRegistered = (
          await prisma.bonus.findMany({
            where: {
              bonusName: data?.bonusName
            }
          })
        )[0];
        if (wasRegistered) {
          throw new ApolloError('Bonus present');
        }

        return await prisma.bonus.create({ data });
      }
    });

    t.field('deleteBonus', {
      type: 'Bonus',
      description: 'deletes a Bonus manually',
      args: {
        where: nonNull(arg({ type: 'BonusWhereUniqueInput' }))
      },

      resolve: async (_, { where: { id } }, { prisma }) => {
        return await prisma.bonus.delete({
          where: { id: String(id) }
        });
      }
    });
  }
});
