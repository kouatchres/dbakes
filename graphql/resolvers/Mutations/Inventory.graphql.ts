import { ApolloError } from 'apollo-server-micro';
import { arg, extendType, nonNull } from 'nexus';

export const inventory = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneInventory();
    t.crud.deleteOneInventory();
    t.crud.updateOneInventory();

    t.field('createInventory', {
      type: 'Inventory',
      description: 'Stores a Inventory manually',
      args: {
        data: nonNull(arg({ type: 'InventoryCreateInput' }))
      },

      resolve: async (_, { data }, { prisma, userId }) => {
        console.log({ userId });
        const wasRegistered = (
          await prisma.inventory.findMany({
            where: {
              qttyInHand: data?.qttyInHand
            }
          })
        )[0];
        if (wasRegistered) {
          throw new ApolloError('Inventory present');
        }

        return await prisma.inventory.create({ data });
      }
    });

    t.field('deleteInventory', {
      type: 'Inventory',
      description: 'deletes a inventory manually',
      args: {
        where: nonNull(arg({ type: 'InventoryWhereUniqueInput' }))
      },

      resolve: async (_, { where: { id } }, { prisma }) => {
        return await prisma.inventory.delete({
          where: { id: String(id) }
        });
      }
    });
  }
});
