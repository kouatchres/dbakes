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
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import {
  CartUpdateInput,
  SingleCartDocument,
  useSingleCartLazyQuery,
  useUpdateACartMutation
} from '../../../generated/graphql';
import DisplayError from '../../ErrorMessage';
import GlassCard from '../utils/GlassCard';
import Notification from '../utils/Notification';
import SygefexTheme from '../utils/SygefexTheme';
import ZoomList from '../utils/ZoomList';

const validationSchema = Yup.object().shape({
  salesPrice: Yup.number().required('Amount of the product bought required')
});

const CreateCart = (props: { id: string }) => {
  const getCartID = props?.id;

  const [notify, setNotify] = useState({
    isOpen: false,
    message: '',
    type: ''
  });

  const initialValues: CartUpdateInput = {
    qtty: 0.0 || undefined,
    salesPrice: 0 || undefined,
    id: '' || undefined
  };

  // const [SingleCartByIdQuery, { data: dataCart }] = useSingleCartByIdLazyQuery({
  //   query: SingleCartByIdDocument
  // });
  // useEffect(() => {
  //   SingleCartByIdQuery({ variables: { id: getCartID } });
  // }, [getCartID]);

  const [SingleCartQuery, { data: singleCartData }] = useSingleCartLazyQuery({
    query: SingleCartDocument
  });

  useEffect(() => {
    SingleCartQuery({
      variables: {
        where: { id: getCartID }
      }
    });
  }, [getCartID]);

  const updatePdtCost = singleCartData?.cart?.pdtCost;
  const cartItemInfo = singleCartData?.cart;
  console.log({ cartItemInfo });
  console.log({ updatePdtCost });

  const [updateACartMutation, { error: cartItemErr }] =
    useUpdateACartMutation();

  return (
    <Formik
      initialValues={cartItemInfo || initialValues}
      enableReinitialize={true}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await updateACartMutation({
          variables: {
            data: {
              qtty: {
                set: Number(Number(values?.salesPrice) / Number(updatePdtCost))
              },
              salesPrice: { set: Number(values?.salesPrice) }
            },
            where: { id: props?.id }
          }
        });

        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          console.log(res);

          setNotify({
            isOpen: true,
            message: 'New cart item added',
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
                  <DisplayError error={cartItemErr} />
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
                          title="Enrégistrer nouvelle commande"
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
                            Update cart item
                          </Typography>
                        </Tooltip>
                      </Grid>
                    </Grid>

                    <Grid
                      container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      spacing={1}
                    >
                      <Grid item xs={12}>
                        <Field
                          name="salesPrice"
                          id="salesPrice"
                          component={TextField}
                          type="number"
                          label="Amount Bought"
                          disabled={isSubmitting}
                          helpertext={<ErrorMessage name="salesPrice" />}
                        />
                      </Grid>
                    </Grid>
                    <Grid container direction="column">
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
export default CreateCart;
