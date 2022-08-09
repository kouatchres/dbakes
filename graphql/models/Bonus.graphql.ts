import { objectType } from 'nexus';

export const Bonus = objectType({
  name: 'Bonus',
  definition(t) {
    t.model.id();
    t.model.bonusName();
  }
});
