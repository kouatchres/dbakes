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
import { TextField } from 'material-ui-formik-components';
import randomize from 'randomatic';
import React, { useState } from 'react';
import * as Yup from 'yup';
import {
  EmployeeCreateInput,
  useCreateAnEmployeeMutation
} from '../../../generated/graphql';
import DisplayError from '../../ErrorMessage';
import GlassCard from '../utils/GlassCard';
import Notification from '../utils/Notification';
import SygefexTheme from '../utils/SygefexTheme';
import ZoomList from '../utils/ZoomList';

const validationSchema = Yup.object().shape({
  employeeNames: Yup.string().required('Libellé Poste requis')
});

const CreateEmployee = (props: any) => {
  const [notify, setNotify] = useState({
    isOpen: false,
    message: '',
    type: ''
  });

  const initialValues: EmployeeCreateInput = {
    employeeNames: '',
    employeePhoneNumb: 0,
    employeeCode: ''
  };

  const [createAnEmployeeMutation, { error: regErr }] =
    useCreateAnEmployeeMutation();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await createAnEmployeeMutation({
          variables: { data: { ...values, employeeCode: randomize('Aa0', 8) } }
          // update: (cache, { data }) => {
          //   const allEmployees = cache.readQuery<AllEmployeesQuery>({
          //     query: AllEmployeesDocument
          //   });
          //   console.log({ cache, allEmployees });
          //   const addedEmployee = data?.createEmployee;
          //   if (addedEmployee) {
          //     cache.writeQuery({
          //       query: AllEmployeesDocument,
          //       data: {
          //         // branchs: [...allEmployees?.branch, addedEmployee]
          //       }
          //     });
          //   }
          // }
          // update(cache, { data }) {
          //   const branchsData = cache.readQuery<AllEmployeesQuery>({
          //     query: AllEmployeesDocument
          //   });
          //   cache.writeQuery({
          //     query: AllEmployeesDocument,
          //     data: { branchs: [...branchsData?.branchs, data?.createEmployee] }
          //   });
          // }
        });

        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          console.log(res);

          setNotify({
            isOpen: true,
            message: 'New Employee created Successfully',
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
                        <Tooltip placement="top" title="Save a employee">
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
                            New Employee
                          </Typography>
                        </Tooltip>
                      </Grid>
                    </Grid>
                    <Grid container direction="column">
                      <Grid item>
                        <Field
                          name="employeeNames"
                          component={TextField}
                          type="text"
                          label="Employee Name"
                          disabled={isSubmitting}
                          helpertext={<ErrorMessage name="employeeNames" />}
                        />

                        <Field
                          name="employeePhoneNumb"
                          component={TextField}
                          type="number"
                          label="Employee phone number"
                          disabled={isSubmitting}
                          helpertext={<ErrorMessage name="employeePhoneNumb" />}
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
                            {isSubmitting ? 'Saving...' : 'Save'}
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
export default CreateEmployee;
