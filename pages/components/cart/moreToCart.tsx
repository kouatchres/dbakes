import {
  AllCategoriesDocument,
  AllProductsByCategoryIdDocument,
  CartCreateInput,
  RecentSingleFinancialYearDocument,
  useAllCategoriesLazyQuery,
  useAllProductsByCategoryIdLazyQuery,
  useCreateACartMutation,
  useRecentSingleFinancialYearLazyQuery
} from '@/graphql';
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
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import DisplayError from '../../ErrorMessage';
import GlassCard from '../utils/GlassCard';
import Notification from '../utils/Notification';
import SygefexTheme from '../utils/SygefexTheme';
import useForm from '../utils/useForm';
import ZoomList from '../utils/ZoomList';

const validationSchema = Yup.object().shape({
  salesPrice: Yup.number().required('Amount bought required')
  // pdtCost: Yup.number().required('Amount of the supplierProduct bought required')
});

const CreateCart = (props: any) => {
  // const classes = useStyles();

  const initialState = {
    pdtID: '',
    categoryID: ''
  };

  const { annualBranchEmployeeID, annualClientID } = props;
  const { inputValues, handleInputChange } = useForm(initialState);

  const [notify, setNotify] = useState({
    isOpen: false,
    message: '',
    type: ''
  });

  const initialValues: CartCreateInput = {
    orderDate: '',
    qtty: 0.0,
    pdtCost: 0.0,
    salesPrice: 0,
    Product: {},
    AnnualClient: {},
    AnnualBranchEmployee: {}
  };

  const [RecentSingleFinancialYearQuery, { data: recentYearData }] =
    useRecentSingleFinancialYearLazyQuery({
      query: RecentSingleFinancialYearDocument
    });

  const [AllCategoriesQuery, { data: categoriesData }] =
    useAllCategoriesLazyQuery({
      query: AllCategoriesDocument
    });

  useEffect(() => {
    RecentSingleFinancialYearQuery();
    AllCategoriesQuery();
  }, []);

  // const [SingleClientByPhoneNumberQuery, { data: clientData }] =
  //   useSingleClientByPhoneNumberLazyQuery({
  //     query: SingleClientByPhoneNumberDocument
  //   });

  // const { clientNames, id: clientID } = clientData?.clientByPhoneNumber ?? {
  //   clientNames: '',
  //   iid: ''
  // };

  const { id: yearID } = recentYearData?.recentFinancialYear ?? {
    id: ''
  };

  // const [SingleAnnualClientByPhoneAndYearQuery, { data: singleAnnualClient }] =
  //   useSingleAnnualClientByPhoneAndYearLazyQuery({
  //     query: SingleAnnualClientByPhoneAndYearDocument
  //   });

  // useEffect(() => {
  //   SingleAnnualClientByPhoneAndYearQuery({
  //     variables: {
  //       clientId: clientID,
  //       financialYearId: yearID
  //     }
  //   });
  // }, [clientID, yearID]);

  const [AllProductsByCategoryIdQuery, { data: pdtsByCategoryData }] =
    useAllProductsByCategoryIdLazyQuery({
      query: AllProductsByCategoryIdDocument
    });

  useEffect(() => {
    AllProductsByCategoryIdQuery({
      variables: { categoryId: inputValues?.categoryID }
    });
  }, [inputValues?.categoryID]);

  console.log({ recentYearData });
  console.log({ pdtsByCategoryData });

  const productsOptions =
    pdtsByCategoryData?.productsByCategoryID?.map(pdt => ({
      value: `${pdt?.id}/${pdt?.unitPrice}`,
      label: pdt?.pdtName
    })) ?? [];

  const categoriesOptions =
    categoriesData?.categories?.map(category => ({
      value: category?.id,
      label: category?.categoryName
    })) ?? [];

  const [createACartMutation, { error: cartItemErr }] =
    useCreateACartMutation();
  const getPdtCost = inputValues?.pdtID.split('/');
  console.log(getPdtCost[0]);
  console.log(getPdtCost[1]);
  const constPdtCost = parseInt(getPdtCost[1]);
  console.log({ constPdtCost });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await createACartMutation({
          variables: {
            data: {
              ...values,
              orderDate: new Date(),
              qtty: values?.salesPrice / constPdtCost,
              pdtCost: constPdtCost, // cost of supplierProduct as bought from the supplier
              AnnualClient: {
                connect: {
                  id: annualClientID
                }
              },
              AnnualBranchEmployee: {
                connect: {
                  id: annualBranchEmployeeID
                }
              },
              Product: { connect: { id: getPdtCost[0] } }
            }
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
              <GlassCard maxWidth="80vh" minHeight="30vh" blur={1}>
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
                          title="Enr??gistrer nouvelle commande"
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
                            Add to cart
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
                      <Grid item xs={6}>
                        <Field
                          name="categoryID"
                          id="categoryID"
                          component={Select}
                          type="text"
                          autoFocus={true}
                          options={categoriesOptions}
                          label="Choose category"
                          onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                          ) => handleInputChange(event, 'categoryID')}
                          disabled={isSubmitting}
                          helpertext={<ErrorMessage name="categoryID" />}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Field
                          name="pdtID"
                          id="pdtID"
                          component={Select}
                          type="text"
                          autoFocus={true}
                          options={productsOptions}
                          label="Choose product"
                          onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                          ) => handleInputChange(event, 'pdtID')}
                          disabled={isSubmitting}
                          helpertext={<ErrorMessage name="pdtID" />}
                        />
                      </Grid>
                    </Grid>
                    <Grid container direction="row">
                      <Grid item xs={12}>
                        <Field
                          name="salesPrice"
                          id="salesPrice"
                          component={TextField}
                          type="number"
                          label="Amount paid by customer"
                          disabled={isSubmitting}
                          helpertext={<ErrorMessage name="salesPrice" />}
                        />
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      style={{
                        justifyItems: 'center',
                        paddingBottom: '1rem',
                        alignItems: 'center',
                        gridTemplateColumns: '1fr 1fr',
                        display: 'grid'
                      }}
                    >
                      <Grid item xs={12} sm={4}>
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
                          {isSubmitting ? 'Saving...' : 'Save to cart'}
                        </Button>
                      </Grid>

                      <Grid item xs={12} sm={4}>
                        <Typography color="primary" variant="body2">
                          <Link
                            href={{
                              pathname: '/components/cart/cartItemList',
                              query: {
                                annualClientId: annualClientID,
                                annualBranchEmployeeId: annualBranchEmployeeID
                              }
                            }}
                          >
                            <a
                              style={{
                                color: '#201452',
                                fontWeight: 'bold',
                                fontSize: '1.2rem'
                              }}
                            >
                              View cart
                            </a>
                          </Link>
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
  const annualBranchEmployeeID = query?.annualBranchEmployeeId;
  const annualClientID = query?.annualClientId;

  return { props: { annualBranchEmployeeID, annualClientID } };
};
export default CreateCart;
