import { extendType, intArg, stringArg } from 'nexus';

export const employee = extendType({
  type: 'Query',
  definition(t) {
    t.crud.employee();
    t.crud.employees();

    t.field('employeeById', {
      type: 'Employee',
      args: {
        id: stringArg()
      },
      resolve: async (_parent, { id }, { prisma }) => {
        return await prisma.employee.findUnique({
          where: { id: String(id) }
        });
      }
    });

    t.field('employeeByPhoneNumber', {
      type: 'Employee',
      args: {
        employeePhoneNumb: intArg()
      },
      resolve: async (_parent, { employeePhoneNumb }, { prisma }) => {
        return await prisma.employee.findUnique({
          where: { employeePhoneNumb: Number(employeePhoneNumb) }
        });
      }
    });

    t.field('employeeByCode', {
      type: 'Employee',
      args: {
        employeeCode: stringArg()
      },
      resolve: async (_parent, { employeeCode }, { prisma }) => {
        return await prisma.employee.findUnique({
          where: { employeeCode: String(employeeCode) }
        });
      }
    });
  }
});
