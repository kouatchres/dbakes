import { objectType } from 'nexus';

export const AnnualBranchEmployee = objectType({
  name: 'AnnualBranchEmployee',
  definition(t) {
    t.model.id();
    t.model.BranchEmployee();
    t.model.FinancialYear();
    t.model.orders();
  }
});
