import {
  Button,
  Grid,
  Grow,
  LinearProgress,
  Tooltip,
  Typography
} from '@material-ui/core';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { TextField } from 'material-ui-formik-components/TextField';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import {
  EmployeeUpdateInput,
  SingleEmployeeDocument,
  useSingleEmployeeLazyQuery,
  useUpdateAEmployeeMutation
} from '../../../generated/graphql';
import GlassCard from '../utils/GlassCard';
import Notification from '../utils/Notification';
import SygefexTheme from '../utils/SygefexTheme';

const validationSchema = Yup.object().shape({
  employeeNames: Yup.string().required('Employee Name required'),
  employeePhoneNumb: Yup.number().required('Employee phone required')
});

const UpdateEmployee = (props:{id:string}) => {
  const getEmployeeID = props?.id;
  const [notify, setNotify] = useState({
    isOpen: false,
    message: '',
    type: ''
  });

  const [SingleEmployeeQuery, { data: dataEmployee }] =
    useSingleEmployeeLazyQuery({
      query: SingleEmployeeDocument
    });

  useEffect(() => {
    SingleEmployeeQuery({ variables: {where:{ id: getEmployeeID }} });
  }, [getEmployeeID]);

  console.log(dataEmployee?.employee);

  const initialValues: EmployeeUpdateInput = {
    employeeNames: '' || undefined,
    id: '' || undefined
  };

  const [updateAEmployeeMutation] = useUpdateAEmployeeMutation();
  return (
    <Formik
      initialValues={dataEmployee?.employee || initialValues}
      enableReinitialize={true}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await updateAEmployeeMutation({
          variables: {
            data: {
              employeeNames: { set: String(values?.employeeNames) },
              employeePhoneNumb: { set: Number(values?.employeePhoneNumb) },
            },
            where: { id: getEmployeeID }
          }

          //   update: (cache, { data }) => {
          //     const allEmployeesList = cache.readQuery({
          //       query: AllEmployeesDocument
          //     });
          //     // allEmployeesList?.Employees = [...allEmployeesList?.Employees, updateOneEmployee];
          //     console.log('running the update query');
          //     console.log({ allEmployeesList });
          //     cache.writeQuery({
          //       query: AllEmployeesDocument,
          //       data: [allEmployeesList, data?.updateOneEmployee]
          //     });
          //   }
        });
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          console.log(res);

          setNotify({
            isOpen: true,
            message: 'Successful update',
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
              <GlassCard blur={2} minWidth="15rem" maxWidth="20rem">
                <Form aria-busy={isSubmitting}>
                  {isSubmitting && <LinearProgress />}
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
                        title="Enrégistrer une nouvelle Poste"
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
                          Update Employee
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
                        label="Employee Phone Number"
                        disabled={isSubmitting}
                        helpertext={<ErrorMessage name="employeePhoneNumb" />}
                      />
                      <Notification notify={notify} setNotify={setNotify} />
                      <div style={{ placeItems: 'center', display: 'grid' }}>
                        <Button disabled={isSubmitting} onClick={submitForm}>
                          {isSubmitting ? 'updating...' : 'Update'}
                        </Button>
                      </div>
                    </Grid>
                  </Grid>
                </Form>
              </GlassCard>
            </Grow>
          </div>
        );
      }}
    </Formik>
  );
};
export default UpdateEmployee;
