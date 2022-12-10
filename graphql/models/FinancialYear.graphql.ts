import { objectType } from 'nexus';

export const FinancialYear = objectType({
  name: 'FinancialYear',
  definition(t) {
    t.model.id();
    t.model.yearName();
  }
});
