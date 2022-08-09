import { ApolloServer } from 'apollo-server-micro';
import createContext from '../../graphql/contextxxxx';
import { schema } from '../../graphql/schema';
// import { applyMiddleware } from 'graphql-middleware';
// import { permissions } from './permissions';

export const config = {
  api: {
    bodyParser: false
  }
};

const apolloServer = new ApolloServer({
  // validationRules: [depthLimit(5)],
  introspection: true,
  schema,
  context: createContext,
  tracing: process.env.NODE_ENV === 'development'
});

export default apolloServer.createHandler({
  path: '/api/graphql'
});
