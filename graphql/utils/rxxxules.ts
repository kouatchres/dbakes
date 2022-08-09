import { shield, rule } from 'graphql-shield';
import { ForbiddenError } from 'apollo-server-micro';

export const rules = {
  isUserLoggedin: rule({ cache: 'contextual' })(
    (_parent, _args, { userId }) => {
      try {
        if (userId) return true;
        return new ForbiddenError('Utilisateur non Authorise');
      } catch (error: any) {
        return error;
      }
    }
  ),
  isAuthenticated: rule({ cache: 'contextual' })(
    (_parent, _args, { headers }) => {
      try {
        return !!headers['userId'];
      } catch (error: any) {
        return new ForbiddenError('Utilisateur non Authorise');
      }
    }
  ),

  isUser: rule({ cache: 'contextual' })(
    async (_parent, { id }, { userId, prisma }) => {
      const author = await prisma.user
        .findUnique({
          where: {
            id: String(id)
          }
        })
        .author();
      return userId === author.id;
    }
  )
};

export const permissions = shield({
  Query: {
    // '*': rules.isUserLoggedin,
    // divisions: rules.isUserLoggedin,
    // regions: rules.isUserLoggedin,
    // regions: rules.isAuthenticated
    // me: rules.isUserLoggedin,
    // users: rules.isUserLoggedin
  },
  Mutation: {
    // '*': rules.isUserLoggedin,
    // createOneRegion: rules.isUserLoggedin
    // createOneDivision: allow,
    // signup: allow,
    // login: allow
    // createDivision: rules.isUserLoggedin,
    // createExam: rules.isUserLoggedin,
    // createSession: rules.isUserLoggedin
  }
});
