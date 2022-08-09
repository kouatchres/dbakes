import { extendType, stringArg } from 'nexus';

export const EmployeeStatus = extendType({
  type: 'Query',
  definition(t) {
    t.crud.employeeStatus();
    t.crud.employeeStatuses();

    t.field('employeeStatusById', {
      type: 'EmployeeStatus',
      args: {
        id: stringArg()
      },
      resolve: async (_parent, { id }, { prisma }) => {
        return await prisma.EmployeeStatus.findUnique({
          where: { id: String(id) }
        });
      }
    });
  }
});
