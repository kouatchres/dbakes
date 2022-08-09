import { objectType } from 'nexus';

export const Employee = objectType({
  name: 'Employee',
  definition(t) {
    t.model.id();
    t.model.employeeNames();
    t.model.branchEmpls();
    t.model.employeePhoneNumb();
    t.model.employeeCode();
  }
});
