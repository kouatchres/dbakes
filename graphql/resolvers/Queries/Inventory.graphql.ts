import { extendType, stringArg } from 'nexus';

export const inventory = extendType({
  type: 'Query',
  definition(t) {
    t.crud.inventory();
    t.crud.inventories();

    t.field('inventoryById', {
      type: 'Inventory',
      args: {
        id: stringArg()
      },
      resolve: async (_parent, { id }, { prisma }) => {
        return await prisma.inventory.findUnique({
          where: { id: String(id) }
        });
      }
    });
  }
});
