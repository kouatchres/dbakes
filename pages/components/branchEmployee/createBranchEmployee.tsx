import {
  Button,
  CircularProgress,
  Grid,
  Grow,
  LinearProgress,
  Tooltip,
  Typography
} from '@material-ui/core';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Select, TextField } from 'material-ui-formik-components';
import React, { ChangeEvent, useEffect, useState } from 'react';
import * as Yup from 'yup';
import {
  BranchEmployeeCreateInput,
  SingleEmployeeByPhoneNumberDocument,
  useAllBranchesLazyQuery,
  useAllEmployeeStatusesLazyQuery,
  useCreateABranchEmployeeMutation,
  useSingleEmployeeByPhoneNumberLazyQuery
} from '../../../generated/graphql';
import DisplayError from '../../ErrorMessage';
import GlassCard from '../utils/GlassCard';
import Notification from '../utils/Notification';
import SygefexTheme from '../utils/SygefexTheme';
import useForm from '../utils/useForm';
import ZoomList from '../utils/ZoomList';

const validationSchema = Yup.object().shape({
  // employeeStatus: Yup.string().required('Employee status required')
});

const CreateBranchEmployee = (props: any) => {
  const [notify, setNotify] = useState({
    isOpen: false,
    message: '',
    type: ''
  });
  const initialState = {
    branchID: '',
    statusID: ''
  };

  const initialValues: BranchEmployeeCreateInput = {
    Branch: {},
    Employee: {},
    EmployeeStatus: {}
  };

  const { inputValues, handleInputChange } = useForm(initialState);

  const [AllBranchsQuery, { data: branchData }] = useAllBranchesLazyQuery();
  const [AllEmployeeStatusesQuery, { data: statusData }] =
    useAllEmployeeStatusesLazyQuery();

  useEffect(() => {
    AllBranchsQuery();
    AllEmployeeStatusesQuery();
  }, []);

  const branchesOptions =
    branchData?.branches?.map(branch => ({
      value: branch?.id,
      label: branch?.branchName
    })) ?? [];

  const statusesOptions =
    statusData?.employeeStatuses?.map(emplStatus => ({
      value: emplStatus?.id,
      label: emplStatus?.status
    })) ?? [];

  const [SingleEmployeeByPhoneNumberQuery, { data: employeeData }] =
    useSingleEmployeeByPhoneNumberLazyQuery({
      query: SingleEmployeeByPhoneNumberDocument
    });

  console.log({ employeeData });
  console.log({ inputValues });
  const { employeeNames, id } = employeeData?.employeeByPhoneNumber ?? {
    employeeNames: '',
    id: '',
    employeePhoneNumb: ''
  };
  const [createABranchEmployeeMutation, { error: regErr }] =
    useCreateABranchEmployeeMutation();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await createABranchEmployeeMutation({
          variables: {
            data: {
              ...values,
              Branch: { connect: { id: inputValues?.branchID } },
              Employee: { connect: { id: id } },
              EmployeeStatus: { connect: { id: inputValues?.statusID } }
            }
          }
          // update: (cache, { data }) => {
          //   const allBranchEmployees = cache.readQuery<AllBranchEmployeesQuery>({
          //     query: AllBranchEmployeesDocument
          //   });
          //   console.log({ cache, allBranchEmployees });
          //   const addedBranchEmployee = data?.createBranchEmployee;
          //   if (addedBranchEmployee) {
          //     cache.writeQuery({
          //       query: AllBranchEmployeesDocument,
          //       data: {
          //         // branchs: [...allBranchEmployees?.branch, addedBranchEmployee]
          //       }
          //     });
          //   }
          // }
          // update(cache, { data }) {
          //   const branchsData = cache.readQuery<AllBranchEmployeesQuery>({
          //     query: AllBranchEmployeesDocument
          //   });
          //   cache.writeQuery({
          //     query: AllBranchEmployeesDocument,
          //     data: { branchs: [...branchsData?.branchs, data?.createBranchEmployee] }
          //   });
          // }
        });

        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          console.log(res);

          setNotify({
            isOpen: true,
            message: 'Employee sent to branch successfully',
            type: 'success'
          });
          resetForm();
          setSubmitting(false);
        }, 200);
      }}
    >
      {({ submitForm, isSubmitting }) => {
        return (
          <div
            style={{
              display: 'grid',
              placeItems: 'center',
              justifyContent: 'center',
              marginBottom: '2rem'
            }}
          >
            <div style={{ margin: '1rem auto' }}>
              <Notification notify={notify} setNotify={setNotify} />
            </div>
            <Grow in>
              <GlassCard maxWidth="50vh" minHeight="30vh" blur={1}>
                <Form aria-busy={isSubmitting}>
                  {isSubmitting && <LinearProgress />}
                  <DisplayError error={regErr} />
                  <ZoomList interval={1000}>
                    <Grid
                      container
                      direction="row"
                      justify="center"
                      style={{
                        marginTop: '1rem',
                        paddingTop: '0.2rem',
                        backgroundColor:
                          SygefexTheme?.palette?.background?.default,
                        borderRadius: '0.2rem'
                      }}
                    >
                      <Grid item>
                        <Tooltip
                          placement="top"
                          title="Connect an employee to a branch"
                        >
                          <Typography
                            color="primary"
                            gutterBottom
                            variant="h5"
                            component="h6"
                            style={{
                              textAlign: 'center',
                              fontSize: 'clamp(0.6rem, 3vw + 0.5rem, 2rem)'
                            }}
                          >
                            Employee/branch
                          </Typography>
                        </Tooltip>
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      direction="row"
                      justify="center"
                      alignItems="center"
                    >
                      <Grid item xs={12}>
                        <Field
                          name="employeeNames"
                          component={TextField}
                          type="text"
                          value={employeeNames || '' || id}
                          label="Employee Name"
                          disabled
                          helpertext={<ErrorMessage name="employeeNames" />}
                        />
                      </Grid>
                    </Grid>
                    <Grid container direction="row" spacing={1}>
                      <Grid item xs={12}>
                        <Field
                          name="employeePhoneNumb"
                          component={TextField}
                          type="number"
                          label="Employee phone Number"
                          disabled={isSubmitting}
                          onChange={(event: ChangeEvent<HTMLInputElement>) => {
                            SingleEmployeeByPhoneNumberQuery({
                              variables: {
                                employeePhoneNumb: parseInt(event.target.value)
                              }
                            });
                          }}
                          helpertext={<ErrorMessage name="employeePhoneNumb" />}
                        />
                        <Field
                          name="branchID"
                          id="branchID"
                          component={Select}
                          type="text"
                          autoFocus={true}
                          options={branchesOptions}
                          label="Choose a branch"
                          onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                          ) => handleInputChange(event, 'branchID')}
                          disabled={isSubmitting}
                          helpertext={<ErrorMessage name="branchID" />}
                        />
                        <Field
                          name="statusID"
                          id="statusID"
                          component={Select}
                          type="text"
                          autoFocus={true}
                          options={statusesOptions}
                          label="Choose a status"
                          onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                          ) => handleInputChange(event, 'statusID')}
                          disabled={isSubmitting}
                          helpertext={<ErrorMessage name="statusID" />}
                        />

                        <div
                          style={{
                            placeItems: 'center',
                            display: 'grid',
                            marginBottom: '1rem'
                          }}
                        >
                          <Button disabled={isSubmitting} onClick={submitForm}>
                            {isSubmitting && (
                              <CircularProgress
                                style={{
                                  color: 'primary',
                                  height: '2rem',
                                  width: '2rem'
                                }}
                              />
                            )}
                            {isSubmitting ? 'Validating...' : 'Validate'}
                          </Button>
                        </div>
                      </Grid>
                    </Grid>
                  </ZoomList>
                </Form>
              </GlassCard>
            </Grow>
          </div>
        );
      }}
    </Formik>
  );
};
export default CreateBranchEmployee;
