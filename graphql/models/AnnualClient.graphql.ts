import { objectType } from 'nexus';

export const AnnualClient = objectType({
  name: 'AnnualClient',
  definition(t) {
    t.model.id();
    t.model.Client();
    t.model.FinancialYear();
    t.model.orders();
    t.model.carts();
    t.model.clientId();
    t.model.financialYearId();
  }
});
