import { extendType, stringArg } from 'nexus';

export const branch = extendType({
  type: 'Query',
  definition(t) {
    t.crud.branch();
    t.crud.branches();

    t.field('branchById', {
      type: 'Branch',
      args: {
        id: stringArg()
      },
      resolve: async (_parent, { id }, { prisma }) => {
        return await prisma.branch.findUnique({
          where: { id: String(id) }
        });
      }
    });

    t.field('branchByBranchCode', {
      type: 'Branch',
      args: {
        branchCode: stringArg()
      },
      resolve: async (_parent, { branchCode }, { prisma }) => {
        return await prisma.branch.findUnique({
          where: { branchCode: String(branchCode) }
        });
      }
    });
  }
});
