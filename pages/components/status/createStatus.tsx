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
import { TextField } from 'material-ui-formik-components/TextField';
import React, { useState } from 'react';
import * as Yup from 'yup';
import {
  EmployeeStatusCreateInput,
  useCreateAnEmployeeStatusMutation
} from '../../../generated/graphql';
import DisplayError from '../../ErrorMessage';
import GlassCard from '../utils/GlassCard';
import Notification from '../utils/Notification';
import SygefexTheme from '../utils/SygefexTheme';
import ZoomList from '../utils/ZoomList';

const validationSchema = Yup.object().shape({
  status: Yup.string().required('Libellé Poste requis')
});

const CreateEmployeeStatus = (props) => {
  // const classes = useStyles();

  const [notify, setNotify] = useState({
    isOpen: false,
    message: '',
    type: ''
  });

  const initialValues: EmployeeStatusCreateInput = {
    status: ''
  };

  const [createAnEmployeeStatusMutation, { error: regErr }] =
    useCreateAnEmployeeStatusMutation();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await createAnEmployeeStatusMutation({
          variables: { data: values }
          // update: (cache, { data }) => {
          //   const allEmployeeStatuss = cache.readQuery<AllEmployeeStatussQuery>({
          //     query: AllEmployeeStatussDocument
          //   });
          //   console.log({ cache, allEmployeeStatuss });
          //   const addedEmployeeStatus = data?.createEmployeeStatus;
          //   if (addedEmployeeStatus) {
          //     cache.writeQuery({
          //       query: AllEmployeeStatussDocument,
          //       data: {
          //         // regions: [...allEmployeeStatuss?.region, addedEmployeeStatus]
          //       }
          //     });
          //   }
          // }
          // update(cache, { data }) {
          //   const regionsData = cache.readQuery<AllEmployeeStatussQuery>({
          //     query: AllEmployeeStatussDocument
          //   });
          //   cache.writeQuery({
          //     query: AllEmployeeStatussDocument,
          //     data: { regions: [...regionsData?.regions, data?.createEmployeeStatus] }
          //   });
          // }
        });

        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          console.log(res);

          setNotify({
            isOpen: true,
            message: 'New status created Successfully',
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
              <GlassCard maxWidth="60vh" minHeight="30vh" blur={1}>
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
                        <Tooltip placement="top" title="Save a client">
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
                            Employee status
                          </Typography>
                        </Tooltip>
                      </Grid>
                    </Grid>
                    <Grid container direction="column">
                      <Grid item>
                        <Field
                          name="status"
                          component={TextField}
                          type="text"
                          label="Status"
                          disabled={isSubmitting}
                          helpertext={<ErrorMessage name="status" />}
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
export default CreateEmployeeStatus;
