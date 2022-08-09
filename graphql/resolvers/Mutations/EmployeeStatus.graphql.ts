import { ApolloError } from 'apollo-server-micro';
import { arg, extendType, nonNull } from 'nexus';

export const employeeStatus = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneEmployeeStatus();
    t.crud.deleteOneEmployeeStatus();
    t.crud.updateOneEmployeeStatus();

    t.field('createEmployeeStatus', {
      type: 'EmployeeStatus',
      description: 'Stores a EmployeeStatus manually',
      args: {
        data: nonNull(arg({ type: 'EmployeeStatusCreateInput' }))
      },

      resolve: async (_, { data }, { prisma, userId }) => {
        console.log({ userId });
        const wasRegistered = (
          await prisma.employeeStatus.findMany({
            where: {
              status: data?.status
            }
          })
        )[0];
        if (wasRegistered) {
          throw new ApolloError('EmployeeStatus present');
        }

        return await prisma.employeeStatus.create({ data });
      }
    });

    t.field('deleteEmployeeStatus', {
      type: 'EmployeeStatus',
      description: 'deletes a employeeStatus manually',
      args: {
        where: nonNull(arg({ type: 'EmployeeStatusWhereUniqueInput' }))
      },

      resolve: async (_, { where: { id } }, { prisma }) => {
        return await prisma.employeeStatus.delete({
          where: { id: String(id) }
        });
      }
    });
  }
});
