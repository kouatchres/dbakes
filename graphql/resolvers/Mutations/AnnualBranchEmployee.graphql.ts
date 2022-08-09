import { arg, extendType, nonNull } from 'nexus';

export const annualBranchEmployee = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneAnnualBranchEmployee();
    t.crud.deleteOneAnnualBranchEmployee();
    t.crud.updateOneAnnualBranchEmployee();

    t.field('createAnnualBranchEmployee', {
      type: 'AnnualBranchEmployee',
      description: 'Stores a AnnualBranchEmployee manually',
      args: {
        data: nonNull(arg({ type: 'AnnualBranchEmployeeCreateInput' }))
      },

      resolve: async (_, { data }, { prisma, userId }) => {
        console.log({ userId });
        // const wasRegistered = (
        //   await prisma.annualBranchEmployee.findMany({
        //     where: {
        //       branchEmployeeNames: data?.branchEmployeeNames
        //     }
        //   })
        // )[0];
        // if (wasRegistered) {
        //   throw new ApolloError('AnnualBranchEmployee present');
        // }

        return await prisma.annualBranchEmployee.create({
          data: {
            BranchEmployee: {
              connect: { id: String(data?.BranchEmployee?.connect?.id) }
            },
            FinancialYear: {
              connect: { id: String(data?.FinancialYear?.connect?.id) }
            }
          }
        });
      }
    });

    t.field('deleteAnnualBranchEmployee', {
      type: 'AnnualBranchEmployee',
      description: 'deletes a branchEmployee manually',
      args: {
        where: nonNull(arg({ type: 'AnnualBranchEmployeeWhereUniqueInput' }))
      },

      resolve: async (_, { where: { id } }, { prisma }) => {
        return await prisma.branchEmployee.delete({
          where: { id: String(id) }
        });
      }
    });
  }
});
