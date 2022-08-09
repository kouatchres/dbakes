import {
  CartCreateInput,
  RecentSingleFinancialYearDocument,
  SingleAnnualBranchEmployeeByBranchEmployeeAndYearDocument,
  SingleBranchByBranchCodeDocument,
  SingleBranchEmployeeByEmployeeIdAndBranchIdDocument,
  SingleEmployeeByCodeDocument,
  useCreateACartMutation,
  useRecentSingleFinancialYearLazyQuery,
  useSingleAnnualBranchEmployeeByBranchEmployeeAndYearLazyQuery,
  useSingleBranchByBranchCodeLazyQuery,
  useSingleBranchEmployeeByEmployeeIdAndBranchIdLazyQuery,
  useSingleEmployeeByCodeLazyQuery
} from '@/graphql';
import {
  Grid,
  Grow,
  LinearProgress,
  Tooltip,
  Typography
} from '@material-ui/core';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { TextField } from 'material-ui-formik-components';
import React, { ChangeEvent, useEffect, useState } from 'react';
import * as Yup from 'yup';
import DisplayError from '../../ErrorMessage';
import RouterLink from '../layout/routerLink';
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

  const [SingleBranchByBranchCodeQuery, { data: branchData }] =
    useSingleBranchByBranchCodeLazyQuery({
      query: SingleBranchByBranchCodeDocument
    });

  const { branchName, id: branchID } = branchData?.branchByBranchCode ?? {
    branchName: '',
    id: ''
  };

  const [RecentSingleFinancialYearQuery, { data: recentYearData }] =
    useRecentSingleFinancialYearLazyQuery({
      query: RecentSingleFinancialYearDocument
    });

  useEffect(() => {
    RecentSingleFinancialYearQuery();
  }, []);

  const [SingleEmployeeByCodeQuery, { data: emplData }] =
    useSingleEmployeeByCodeLazyQuery({
      query: SingleEmployeeByCodeDocument
    });

  const { employeeNames, id: employeeID } = emplData?.employeeByCode ?? {
    employeeNames: '',
    id: ''
  };

  const { id: yearID } = recentYearData?.recentFinancialYear ?? {
    id: ''
  };

  const [
    SingleBranchEmployeeByEmployeeIdAndBranchIdQuery,
    { data: branchEmployeeData }
  ] = useSingleBranchEmployeeByEmployeeIdAndBranchIdLazyQuery({
    query: SingleBranchEmployeeByEmployeeIdAndBranchIdDocument
  });

  useEffect(() => {
    SingleBranchEmployeeByEmployeeIdAndBranchIdQuery({
      variables: {
        branchId: branchID,
        employeeId: employeeID
      }
    });
  }, [branchID, employeeID]);

  console.log({ branchEmployeeData });

  const { id: branchEmployeeID } =
    branchEmployeeData?.branchEmployeeByEmplIdAndBranchId ?? {
      id: ''
    };

  const [
    SingleAnnualBranchEmployeeByBranchEmployeeAndYearQuery,
    { data: SingleAnnualBranchEmployeeData }
  ] = useSingleAnnualBranchEmployeeByBranchEmployeeAndYearLazyQuery({
    query: SingleAnnualBranchEmployeeByBranchEmployeeAndYearDocument
  });

  useEffect(() => {
    SingleAnnualBranchEmployeeByBranchEmployeeAndYearQuery({
      variables: {
        branchEmployeeId: branchEmployeeID,
        financialYearId: yearID
      }
    });
  }, [branchEmployeeID, yearID]);

  console.log({ SingleAnnualBranchEmployeeData });

  console.log({ branchData });

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
              AnnualBranchEmployee: {
                connect: {
                  id: SingleAnnualBranchEmployeeData
                    ?.annualBranchEmployeeByBranchEmployeeAndYear?.id
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
                            Employee for cart
                          </Typography>
                        </Tooltip>
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      spacing={1}
                      direction="row"
                      justify="center"
                    >
                      <Grid item xs={4}>
                        <Field
                          name="branchCode"
                          component={TextField}
                          type="password"
                          label="Branch code"
                          disabled={isSubmitting}
                          fullWidth="true"
                          onChange={(event: ChangeEvent<HTMLInputElement>) => {
                            SingleBranchByBranchCodeQuery({
                              variables: {
                                branchCode: event.target.value
                              }
                            });
                          }}
                          helpertext={<ErrorMessage name="branchCode" />}
                        />
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          name="branchName"
                          component={TextField}
                          type="text"
                          value={branchName || ''}
                          label="Branch Name"
                          disabled
                          helpertext={<ErrorMessage name="branchName" />}
                        />
                      </Grid>
                    </Grid>

                    <Grid
                      container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      spacing={1}
                    >
                      <Grid item xs={4}>
                        <Field
                          name="employeeCode"
                          component={TextField}
                          type="password"
                          label="Your Code"
                          disabled={isSubmitting}
                          fullWidth="true"
                          onChange={(event: ChangeEvent<HTMLInputElement>) => {
                            SingleEmployeeByCodeQuery({
                              variables: {
                                employeeCode: event.target.value
                              }
                            });
                          }}
                          helpertext={<ErrorMessage name="employeeCode" />}
                        />
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          name="employeeNames"
                          component={TextField}
                          type="text"
                          value={employeeNames || ''}
                          label="Employee Name"
                          disabled
                          helpertext={<ErrorMessage name="employeeNames" />}
                        />
                      </Grid>
                    </Grid>

                    <Grid
                      container
                      style={{
                        justifyItems: 'center',
                        paddingBottom: '1rem',
                        alignItems: 'center',
                        display: 'grid',
                        gridTemplateColumns: '1fr'
                      }}
                    >
                      <Grid item xs={12}>
                        <Typography color="primary" variant="body2">
                          <RouterLink
                            href={{
                              pathname: '/components/cart/nextCart',
                              query: {
                                annualBranchEmployeeId:
                                  SingleAnnualBranchEmployeeData
                                    ?.annualBranchEmployeeByBranchEmployeeAndYear
                                    ?.id
                              }
                            }}
                            passHref
                          >
                            Open cart
                          </RouterLink>
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
export default CreateCart;
