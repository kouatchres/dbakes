import { ApolloError } from 'apollo-server-micro';
import { arg, extendType, nonNull } from 'nexus';

export const branchEmployee = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneBranchEmployee();
    t.crud.deleteOneBranchEmployee();
    t.crud.updateOneBranchEmployee();

    t.field('createBranchEmployee', {
      type: 'BranchEmployee',
      description: 'Stores a BranchEmployee manually',
      args: {
        data: nonNull(arg({ type: 'BranchEmployeeCreateInput' }))
      },

      resolve: async (_, { data }, { prisma, userId }) => {
        console.log({ userId });
        const employeePresent = (
          await prisma.branchEmployee.findMany({
            where: {
              branchId: String(data?.Branch?.connect?.id),
              employeeId: String(data?.Employee?.connect?.id)
            }
          })
        )[0];

        if (employeePresent) {
          throw new ApolloError('Employee already present in this branch');
        }
        const getFinancialYear = await prisma.financialYear.findFirst({
          orderBy: [{ yearName: 'desc' }]
        });
        if (!getFinancialYear) {
          throw new ApolloError('No financial Year present');
        }

        return await prisma.branchEmployee.create({
          data: {
            Branch: { connect: { id: String(data?.Branch?.connect?.id) } },
            Employee: { connect: { id: String(data?.Employee?.connect?.id) } },
            EmployeeStatus: {
              connect: { id: String(data?.EmployeeStatus?.connect?.id) }
            },
            annBranchEmployee: {
              create: {
                financialYearId: getFinancialYear?.id
              }
            }
          }
        });
      }
    });

    t.field('deleteBranchEmployee', {
      type: 'BranchEmployee',
      description: 'deletes a branchEmployee manually',
      args: {
        where: nonNull(arg({ type: 'BranchEmployeeWhereUniqueInput' }))
      },

      resolve: async (_, { where: { id } }, { prisma }) => {
        return await prisma.branchEmployee.delete({
          where: { id: String(id) }
        });
      }
    });
  }
});
