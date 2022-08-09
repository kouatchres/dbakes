// path: resolvers/mutation/login/errors/WrongCredentialsError.ts

import { createError } from 'apollo-errors';

const RecordAlreadyExistsError = createError('RecordAlreadyExistsError', {
  message:
    'The data you want to enter already exists, Duplicate entry not allowed.'
});

export { RecordAlreadyExistsError };
