import { objectType } from 'nexus';

export const BranchEmployee = objectType({
  name: 'BranchEmployee',
  definition(t) {
    t.model.id();
    t.model.endDate();
    t.model.startDate();
    t.model.Employee();
    t.model.EmployeeStatus();
    t.model.Branch();
  }
});
