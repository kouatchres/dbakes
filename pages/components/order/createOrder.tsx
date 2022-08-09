import { OrderCreateInput, useCreateAnOrderMutation } from '@/graphql';
import {
  Button,
  CircularProgress,
  Grid,
  Grow,
  LinearProgress,
  Tooltip,
  Typography
} from '@material-ui/core';
import { Form, Formik } from 'formik';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import randomize from 'randomatic';
import { useState } from 'react';
import * as Yup from 'yup';
import DisplayError from '../../ErrorMessage';
import GlassCard from '../utils/GlassCard';
import Notification from '../utils/Notification';
import SygefexTheme from '../utils/SygefexTheme';
import ZoomList from '../utils/ZoomList';

const validationSchema = Yup.object().shape({});

const CreateOrder = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const router = useRouter();

  const [notify, setNotify] = useState({
    isOpen: false,
    message: '',
    type: ''
  });

  console.log({ props });
  const { annualBranchEmployeeID, annualClientID } = props;

  const initialValues: OrderCreateInput = {
    orderTotal: 0,
    orderDate: 0,
    AnnualBranchEmployee: {},
    orderNumber: '',
    AnnualClient: {},
    totalPaid: 0
  };

  const [createAnOrderMutation, { error: regErr }] = useCreateAnOrderMutation();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (
        values: OrderCreateInput,
        { setSubmitting, resetForm }
      ) => {
        const res = await createAnOrderMutation({
          variables: {
            data: {
              ...values,
              orderDate: new Date(),
              orderNumber: randomize('Aa0', 6),
              AnnualClient: {
                connect: {
                  id: annualClientID
                }
              },
              AnnualBranchEmployee: {
                connect: {
                  id: annualBranchEmployeeID
                }
              }
            }
          }
        });
        console.log(res);
        router.push({
          pathname: '/components/order/printClientReceipt',
          query: {
            id: res?.data?.createOrder?.id
          }
        }),
          setTimeout(() => {
            // console.log(JSON.stringify(values, null, 2));
            setNotify({
              isOpen: true,
              message: 'Order completed successfully',
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
                        <Tooltip placement="top" title="Make a new Order">
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
                            New Order
                          </Typography>
                        </Tooltip>
                      </Grid>
                    </Grid>

                    <Grid container direction="column">
                      <Grid item xs={12}>
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
                            {isSubmitting ? 'Saving...' : 'Confirm order'}
                          </Button>
                        </div>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography
                          // color="primary"
                          gutterBottom
                          variant="h5"
                          component="h6"
                          style={{
                            fontWeight: 'bold',
                            textAlign: 'center',
                            fontSize: 'clamp(0.6rem, 3vw + 0.5rem, 1.1rem)'
                          }}
                        >
                          <div>
                            <Link
                              href={{
                                pathname: '/components/cart/nextCart',
                                query: {
                                  annualBranchEmployeeId: annualBranchEmployeeID
                                }
                              }}
                              passHref
                            >
                              Next order
                            </Link>
                          </div>
                        </Typography>
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

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const annualClientID = query && query?.annualClientId;
  const annualBranchEmployeeID = query?.annualBranchEmployeeId;

  return { props: { annualClientID, annualBranchEmployeeID } };
};

export default CreateOrder;
