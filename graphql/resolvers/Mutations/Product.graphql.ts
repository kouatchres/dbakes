import { arg, extendType, nonNull } from 'nexus';

export const product = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneProduct();
    t.crud.deleteOneProduct();
    t.crud.updateOneProduct();

    t.field('createProduct', {
      type: 'Product',
      description: 'Stores a Product manually',
      args: {
        data: nonNull(arg({ type: 'ProductCreateInput' }))
      },

      resolve: async (_, { data }, { prisma, userId }) => {
        console.log({ userId });
        const wasRegistered = (
          await prisma.product.findMany({
            where: {
              pdtName: data?.pdtName
            }
          })
        )[0];
        if (wasRegistered) {
          throw new Error('Product already registered');
        }

        return await prisma.product.create({
          data: {
            ...data,
            Category: { connect: { id: String(data?.Category?.connect?.id) } }
          }
        });
      }
    });

    t.field('deleteProduct', {
      type: 'Product',
      description: 'deletes a Product manually',
      args: {
        where: nonNull(arg({ type: 'ProductWhereUniqueInput' }))
      },

      resolve: async (_, { where: { id } }, { prisma }) => {
        return await prisma.product.delete({
          where: { id: String(id) }
        });
      }
    });
  }
});
