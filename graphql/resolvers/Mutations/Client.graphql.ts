import { ApolloError } from 'apollo-server-micro';
import { arg, extendType, nonNull } from 'nexus';

export const client = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneClient();
    t.crud.deleteOneClient();
    t.crud.updateOneClient();

    t.field('createClient', {
      type: 'Client',
      description: 'Stores a Client manually',
      args: {
        data: nonNull(arg({ type: 'ClientCreateInput' }))
      },

      resolve: async (_, { data }, { prisma }) => {
        const wasRegistered = (
          await prisma.client.findMany({
            where: {
              clientNames: data?.clientNames
            }
          })
        )[0];
        if (wasRegistered) {
          throw new ApolloError('Client present');
        }

        return await prisma.client.create({ data });
      }
    });

    t.field('deleteClient', {
      type: 'Client',
      description: 'deletes a client manually',
      args: {
        where: nonNull(arg({ type: 'ClientWhereUniqueInput' }))
      },

      resolve: async (_, { where: { id } }, { prisma }) => {
        return await prisma.client.delete({
          where: { id: String(id) }
        });
      }
    });
  }
});
