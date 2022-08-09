import { extendType, stringArg } from 'nexus';

export const category = extendType({
  type: 'Query',
  definition(t) {
    t.crud.category();
    t.crud.categories();

    t.field('categoryById', {
      type: 'Category',
      args: {
        id: stringArg()
      },
      resolve: async (_parent, { id }, { prisma }) => {
        return await prisma.category.findUnique({
          where: { id: String(id) }
        });
      }
    });
  }
});
