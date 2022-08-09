import { objectType } from 'nexus';

export const Client = objectType({
  name: 'Client',
  definition(t) {
    t.model.id();
    t.model.clientNames();
    t.model.clientPhoneNumb();
  }
});
