import { makeSchema } from 'nexus';
import { nexusPrisma } from 'nexus-plugin-prisma';
import * as types from './models';
import * as Resolvers from './resolvers';
import { join } from 'path';

export const schema = makeSchema({
  types: [types, Resolvers],
  plugins: [nexusPrisma({ experimentalCRUD: true })],
  outputs: {
    typegen: join(process.cwd(), 'generated', 'nexus-typegen.ts'),
    schema: join(process.cwd(), 'generated', 'schema.graphql')
  },
  contextType: {
    module: join(process.cwd(), 'graphql', 'types.ts'),
    export: 'Context.Context',
    alias: 'ctx'
  },
  sourceTypes: {
    modules: [
      {
        module: '@prisma/client',
        alias: 'prisma'
      },
      {
        module: join(process.cwd(), 'graphql', 'context.ts'),
        alias: 'Context'
      }
    ]
  }
});
