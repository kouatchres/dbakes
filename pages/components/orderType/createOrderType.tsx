import { OrderTypeCreateInput, useCreateAOrderTypeMutation } from '@/graphql';
import {
  Button,
  CircularProgress,
  Grid,
  Grow,
  LinearProgress,
  Tooltip,
  Typography
} from '@material-ui/core';
import randomize from 'randomatic';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import { TextField } from 'material-ui-formik-components/TextField';
import { useState } from 'react';
import * as Yup from 'yup';
import DisplayError from '../../ErrorMessage';
import GlassCard from '../utils/GlassCard';
import Notification from '../utils/Notification';
import SygefexTheme from '../utils/SygefexTheme';
import ZoomList from '../utils/ZoomList';

const validationSchema = Yup.object().shape({
  orderTypeName: Yup.string().required('Libellé Poste requis')
});

const CreateOrderType = () => {
  const [notify, setNotify] = useState({
    isOpen: false,
    message: '',
    type: ''
  });

  const initialValues: OrderTypeCreateInput = {
    orderTypeName: '',
    orderTypeCode: ''
  };

  const [createAOrderTypeMutation, { error: regErr }] =
    useCreateAOrderTypeMutation();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await createAOrderTypeMutation({
          variables: {
            data: {
              ...values,
              orderTypeCode: randomize('Aa0', 5)
            }
          }

          // update: (cache, { data }) => {
          //   const allOrderTypes = cache.readQuery<AllOrderTypesQuery>({
          //     query: AllOrderTypesDocument
          //   });
          //   console.log({ cache, allOrderTypes });
          //   const addedOrderType = data?.createOrderType;
          //   if (addedOrderType) {
          //     cache.writeQuery({
          //       query: AllOrderTypesDocument,
          //       data: {
          //         // regions: [...allOrderTypes?.region, addedOrderType]
          //       }
          //     });
          //   }
          // }
          // update(cache, { data }) {
          //   const regionsData = cache.readQuery<AllOrderTypesQuery>({
          //     query: AllOrderTypesDocument
          //   });
          //   cache.writeQuery({
          //     query: AllOrderTypesDocument,
          //     data: { regions: [...regionsData?.regions, data?.createOrderType] }
          //   });
          // }
        });

        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          console.log(res);

          setNotify({
            isOpen: true,
            message: 'New OrderType created Successfully',
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
                            New OrderType
                          </Typography>
                        </Tooltip>
                      </Grid>
                    </Grid>
                    <Grid container direction="column">
                      <Grid item>
                        <Field
                          name="orderTypeName"
                          component={TextField}
                          type="text"
                          label="OrderType Name"
                          disabled={isSubmitting}
                          helpertext={<ErrorMessage name="orderTypeName" />}
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
export default CreateOrderType;
