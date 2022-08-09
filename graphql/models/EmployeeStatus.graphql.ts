import { objectType } from 'nexus';

export const EmployeeStatus = objectType({
  name: 'EmployeeStatus',
  definition(t) {
    t.model.id();
    t.model.status();
  }
});
