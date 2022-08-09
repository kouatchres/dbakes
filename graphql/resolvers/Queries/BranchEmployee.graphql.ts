import { extendType, stringArg } from 'nexus';

export const branchEmployee = extendType({
  type: 'Query',
  definition(t) {
    t.crud.branchEmployee();
    t.crud.branchEmployees();

    t.field('branchEmployeeById', {
      type: 'BranchEmployee',
      args: {
        id: stringArg()
      },
      resolve: async (_parent, { id }, { prisma }) => {
        return await prisma.branchEmployee.findMany({
          where: { id: String(id) }
        });
      }
    });

    t.field('branchEmployeeByEmplIdAndBranchId', {
      type: 'BranchEmployee',
      args: {
        employeeId: stringArg(),
        branchId: stringArg()
      },

      resolve: async (_parent, { employeeId, branchId }, { prisma }) => {
        return (
          await prisma.branchEmployee.findMany({
            where: {
              employeeId: String(employeeId),
              branchId: String(branchId)
            }
          })
        )[0];
      }
    });
  }
});
