import { extendType, intArg, stringArg } from 'nexus';

export const client = extendType({
  type: 'Query',
  definition(t) {
    t.crud.client();
    t.crud.clients();

    t.field('clientByPhoneNumber', {
      type: 'Client',
      args: {
        clientPhoneNumb: intArg()
      },
      resolve: async (_parent, { clientPhoneNumb }, { prisma }) => {
        return await prisma.client.findUnique({
          where: {
            clientPhoneNumb: Number(clientPhoneNumb)
            // orderBy: [{ clientNames: 'asc' }]
          }
        });
      }
    });

    t.list.field('clients', {
      type: 'Client',
      resolve: async (_parent, _args, { prisma }) => {
        return await prisma.client.findMany({
          orderBy: [{ clientNames: 'asc' }]
        });
      }
    });

    t.list.field('clientById', {
      type: 'Client',
      args: {
        id: stringArg()
      },
      resolve: async (_parent, { id }, { prisma }) => {
        return await prisma.client.findMany({
          where: { id: String(id) }
        });
      }
    });
  }
});
