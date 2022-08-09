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
  FinancialYearCreateInput,
  useCreateAFinancialYearMutation
} from '../../../generated/graphql';
import DisplayError from '../../ErrorMessage';
import GlassCard from '../utils/GlassCard';
import Notification from '../utils/Notification';
import SygefexTheme from '../utils/SygefexTheme';
import ZoomList from '../utils/ZoomList';

const validationSchema = Yup.object().shape({
  yearName: Yup.number().required('Libellé Poste requis')
});

const CreateFinancialYear = (props: any) => {
  // const classes = useStyles();

  const [notify, setNotify] = useState({
    isOpen: false,
    message: '',
    type: ''
  });

  const initialValues: FinancialYearCreateInput = {
    yearName: 0
  };

  const [createAFinancialYearMutation, { error: regErr }] =
    useCreateAFinancialYearMutation();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await createAFinancialYearMutation({
          variables: { data: values }
          // update: (cache, { data }) => {
          //   const allFinancialYears = cache.readQuery<AllFinancialYearsQuery>({
          //     query: AllFinancialYearsDocument
          //   });
          //   console.log({ cache, allFinancialYears });
          //   const addedFinancialYear = data?.createFinancialYear;
          //   if (addedFinancialYear) {
          //     cache.writeQuery({
          //       query: AllFinancialYearsDocument,
          //       data: {
          //         // regions: [...allFinancialYears?.region, addedFinancialYear]
          //       }
          //     });
          //   }
          // }
          // update(cache, { data }) {
          //   const regionsData = cache.readQuery<AllFinancialYearsQuery>({
          //     query: AllFinancialYearsDocument
          //   });
          //   cache.writeQuery({
          //     query: AllFinancialYearsDocument,
          //     data: { regions: [...regionsData?.regions, data?.createFinancialYear] }
          //   });
          // }
        });

        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          console.log(res);

          setNotify({
            isOpen: true,
            message: 'New year created',
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
              <GlassCard maxWidth="70vh" minHeight="30vh" blur={1}>
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
                        <Tooltip placement="top" title="Save a financialYear">
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
                            New Financial Year
                          </Typography>
                        </Tooltip>
                      </Grid>
                    </Grid>
                    <Grid container direction="column">
                      <Grid item>
                        <Field
                          name="yearName"
                          component={TextField}
                          type="number"
                          label="Enter new year"
                          disabled={isSubmitting}
                          helpertext={<ErrorMessage name="yearName" />}
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
export default CreateFinancialYear;
