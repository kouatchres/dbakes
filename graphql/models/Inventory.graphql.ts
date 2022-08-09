import { objectType } from 'nexus';

export const Inventory = objectType({
  name: 'Inventory',
  definition(t) {
    t.model.id();
    // t.model.SupplierVariety();
    // t.model.supplierVarietyId();
    t.model.qttyInHand();
  }
});
