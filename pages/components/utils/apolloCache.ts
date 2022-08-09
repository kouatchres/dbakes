import { InMemoryCache } from '@apollo/client';

// Here we import our reactive variable which we declared in another
// component
import { ExamReactiveVariables } from '../exam/ExamReactiveVariables';

// The field policies hold the initial cached state of a field.
export default new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        AllExams: { read: () => ExamReactiveVariables() }
      }
    }
  }
});

// cache = new InMemoryCache({
//   typePolicies: {
//     Query: {
//       fields: {
//         notifications: { read: () => notifications() }
//       }
//     }
//   }
// });
