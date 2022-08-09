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
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import {
  FinancialYearUpdateInput,
  SingleFinancialYearDocument,
  useSingleFinancialYearByIdLazyQuery,
  useUpdateAFinancialYearMutation
} from '../../../generated/graphql';
import GlassCard from '../utils/GlassCard';
import Notification from '../utils/Notification';
import SygefexTheme from '../utils/SygefexTheme';

const validationSchema = Yup.object().shape({
  yearNames: Yup.string().required('FinancialYear Name required'),
  yearPhoneNumb: Yup.number().required('FinancialYear phone required')
});

const UpdateFinancialYear = (props: { id: string }) => {
  const getFinancialYearID = props?.id;
  const [notify, setNotify] = useState({
    isOpen: false,
    message: '',
    type: ''
  });

  const [SingleFinancialYearByIdQuery, { data: dataFinancialYear }] =
    useSingleFinancialYearByIdLazyQuery({
      query: SingleFinancialYearDocument
    });

  useEffect(() => {
    SingleFinancialYearByIdQuery({ variables: { id: getFinancialYearID } });
  }, [getFinancialYearID]);

  console.log(dataFinancialYear?.financialYearById);

  const initialValues: FinancialYearUpdateInput = {
    yearName: '' || undefined,
    id: '' || undefined
  };

  const [updateAFinancialYearMutation] = useUpdateAFinancialYearMutation();
  return (
    <Formik
      initialValues={dataFinancialYear?.financialYearById || initialValues}
      enableReinitialize={true}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await updateAFinancialYearMutation({
          variables: {
            data: {
              yearName: { set: String(values?.yearName) }
            },
            where: { id: getFinancialYearID }
          }

          //   update: (cache, { data }) => {
          //     const allFinancialYearsList = cache.readQuery({
          //       query: AllFinancialYearsDocument
          //     });
          //     // allFinancialYearsList?.FinancialYears = [...allFinancialYearsList?.FinancialYears, updateOneFinancialYear];
          //     console.log('running the update query');
          //     console.log({ allFinancialYearsList });
          //     cache.writeQuery({
          //       query: AllFinancialYearsDocument,
          //       data: [allFinancialYearsList, data?.updateOneFinancialYear]
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
                          Update Financial Year
                        </Typography>
                      </Tooltip>
                    </Grid>
                  </Grid>
                  <Grid container direction="column">
                    <Grid item>
                      <Field
                        name="yearName"
                        component={TextField}
                        type="text"
                        label="Enter year"
                        disabled={isSubmitting}
                        helpertext={<ErrorMessage name="yearName" />}
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
export default UpdateFinancialYear;
