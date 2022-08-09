import { objectType } from 'nexus';

export const FinancialYear = objectType({
  name: 'FinancialYear',
  definition(t) {
    t.model.id();
    t.model.annBranchEmpls();
    t.model.yearName();
    t.model.annClients();
  }
});
