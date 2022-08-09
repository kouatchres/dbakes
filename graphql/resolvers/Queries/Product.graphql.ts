import { extendType, stringArg } from 'nexus';

export const product = extendType({
  type: 'Query',
  definition(t) {
    t.crud.product();
    t.crud.products();

    t.field('productById', {
      type: 'Product',
      args: {
        id: stringArg()
      },
      async resolve(_parent, { id }, { prisma }) {
        const product = await prisma.product.findUnique({
          where: { id: String(id) }
        });
        return product;
      }
    });

    t.list.field('products', {
      type: 'Product',
      resolve: async (_parent, _args, { prisma }) => {
        return await prisma.product.findMany({
          orderBy: [{ pdtName: 'asc' }, { pdtCode: 'asc' }]
        });
      }
    });

    t.list.field('productsByCategoryID', {
      type: 'Product',
      args: {
        categoryId: stringArg()
      },
      resolve: async (_parent, { categoryId }, { prisma }) => {
        return await prisma.product.findMany({
          where: {
            categoryId: String(categoryId)
          },
          orderBy: [{ pdtName: 'asc' }, { pdtCode: 'asc' }]
        });
      }
    });
  }
});
