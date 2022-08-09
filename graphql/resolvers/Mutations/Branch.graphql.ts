import { arg, extendType, nonNull } from 'nexus';

export const branch = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneBranch();
    t.crud.deleteOneBranch();
    t.crud.updateOneBranch();

    t.field('createBranch', {
      type: 'Branch',
      description: 'Stores a Branch manually',
      args: {
        data: nonNull(arg({ type: 'BranchCreateInput' }))
      },

      resolve: async (_, { data }, { prisma, userId }) => {
        // const wasRegistered = (
        //   await prisma.branch.findUnique({
        //     where: {
        //       branchName: data?.branchName
        //     }
        //   })
        // )[0];
        // if (wasRegistered) {
        //   throw new ApolloError('Branch already present');
        // }

        return await prisma.branch.create({ data });
      }
    });

    t.field('deleteBranch', {
      type: 'Branch',
      description: 'deletes a branch manually',
      args: {
        where: nonNull(arg({ type: 'BranchWhereUniqueInput' }))
      },

      resolve: async (_, { where: { id } }, { prisma }) => {
        return await prisma.branch.delete({
          where: { id: String(id) }
        });
      }
    });
  }
});
