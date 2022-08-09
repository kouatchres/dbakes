import { objectType } from 'nexus';

export const Category = objectType({
  name: 'Category',
  definition(t) {
    t.model.id();
    t.model.categoryName();
    t.model.categoryCode();
    t.model.products();
  }
});
