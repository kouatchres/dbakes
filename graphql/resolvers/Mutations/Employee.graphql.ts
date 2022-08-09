import { ApolloError } from 'apollo-server-micro';
import { arg, extendType, nonNull } from 'nexus';

export const employee = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneEmployee();
    t.crud.deleteOneEmployee();
    t.crud.updateOneEmployee();

    t.field('createEmployee', {
      type: 'Employee',
      description: 'Stores a Employee manually',
      args: {
        data: nonNull(arg({ type: 'EmployeeCreateInput' }))
      },

      resolve: async (_, { data }, { prisma, userId }) => {
        console.log({ userId });
        const wasRegistered = (
          await prisma.employee.findMany({
            where: {
              employeeNames: data?.employeeNames,
              employeePhoneNumb: data?.employeePhoneNumb
            }
          })
        )[0];
        if (wasRegistered) {
          throw new ApolloError('Employee present');
        }

        return await prisma.employee.create({ data });
      }
    });

    t.field('deleteEmployee', {
      type: 'Employee',
      description: 'deletes a employee manually',
      args: {
        where: nonNull(arg({ type: 'EmployeeWhereUniqueInput' }))
      },

      resolve: async (_, { where: { id } }, { prisma }) => {
        return await prisma.employee.delete({
          where: { id: String(id) }
        });
      }
    });
  }
});
