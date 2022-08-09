import { ApolloError } from 'apollo-server-micro';
import { arg, extendType, nonNull } from 'nexus';

export const category = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneCategory();
    t.crud.deleteOneCategory();
    t.crud.updateOneCategory();

    t.field('createCategory', {
      type: 'Category',
      description: 'Stores a Category manually',
      args: {
        data: nonNull(arg({ type: 'CategoryCreateInput' }))
      },

      resolve: async (_, { data }, { prisma }) => {
        const wasRegistered = (
          await prisma.category.findMany({
            where: {
              categoryName: data?.categoryName
            }
          })
        )[0];
        if (wasRegistered) {
          throw new ApolloError('Category already present');
        }

        return await prisma.category.create({ data });
      }
    });

    t.field('deleteCategory', {
      type: 'Category',
      description: 'deletes a category manually',
      args: {
        where: nonNull(arg({ type: 'CategoryWhereUniqueInput' }))
      },

      resolve: async (_, { where: { id } }, { prisma }) => {
        return await prisma.category.delete({
          where: { id: String(id) }
        });
      }
    });
  }
});
