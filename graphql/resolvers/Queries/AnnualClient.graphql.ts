import { extendType, stringArg } from 'nexus';

export const annualClient = extendType({
  type: 'Query',
  definition(t) {
    t.crud.annualClient();
    t.crud.annualClients();

    t.field('annualClientById', {
      type: 'AnnualClient',
      args: {
        id: stringArg()
      },
      resolve: async (_parent, { id }, { prisma }) => {
        return await prisma.annualClient.findUnique({
          where: { id: String(id) }
        });
      }
    });

    // t.field('annualClientByPhoneAndYear', {
    //   type: 'AnnualClient',
    //   args: {
    //     clientId: stringArg(),
    //     financialYearId: stringArg()
    //   },
    //   resolve: async (_parent, { financialYearId, clientId }, { prisma }) => {
    //     return (
    //       await prisma.annualClient.findMany({
    //         where: {
    //           clientId: String(clientId),
    //           financialYearId: String(financialYearId)
    //         }
    //       })
    //     )[0];
    //   }
    // });

    t.field('annualClientByPhoneAndYear', {
      type: 'AnnualClient',
      args: {
        clientId: stringArg(),
        financialYearId: stringArg()
      },
      resolve: async (_parent, { financialYearId, clientId }, { prisma }) => {
        return (
          await prisma.annualClient.findMany({
            where: {
              clientId: String(clientId),
              financialYearId: String(financialYearId)
            }
          })
        )[0];
      }
    });

    t.field('annualClientByYearClient', {
      type: 'AnnualClient',
      args: {
        yearClient: stringArg()
      },
      resolve: async (_parent, { yearClient }, { prisma }) => {
        return await prisma.annualClient.findUnique({
          where: {
            yearClient: String(yearClient)
          }
        });
      }
    });
  }
});
