import { extendType, stringArg } from 'nexus';

export const annualBranchEmployee = extendType({
  type: 'Query',
  definition(t) {
    t.crud.annualBranchEmployee();
    t.crud.annualBranchEmployees();

    t.field('annualBranchEmployeeById', {
      type: 'AnnualBranchEmployee',
      args: {
        id: stringArg()
      },
      resolve: async (_parent, { id }, { prisma }) => {
        return await prisma.annualBranchEmployee.findUnique({
          where: { id: String(id) }
        });
      }
    });

    t.field('annualBranchEmployeeByBranchEmployeeAndYear', {
      type: 'AnnualBranchEmployee',
      args: {
        financialYearId: stringArg(),
        branchEmployeeId: stringArg()
      },
      resolve: async (
        _parent,
        { financialYearId, branchEmployeeId },
        { prisma }
      ) => {
        return (
          await prisma.annualBranchEmployee.findMany({
            where: {
              financialYearId: String(financialYearId),
              branchEmployeeId: String(branchEmployeeId)
            }
          })
        )[0];
      }
    });
  }
});
