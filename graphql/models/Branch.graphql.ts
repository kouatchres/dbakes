import { objectType } from 'nexus';

export const Branch = objectType({
  name: 'Branch',
  definition(t) {
    t.model.id();
    t.model.branchName();
    t.model.branchEmpls();
    t.model.branchCode();
  }
});
