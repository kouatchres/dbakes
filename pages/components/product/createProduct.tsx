import {
  AllProductsDocument,
  AllProductsQuery,
  ProductCreateInput,
  useAllCategoriesLazyQuery,
  useCreateAProductMutation
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
import { Select } from 'material-ui-formik-components';
import { TextField } from 'material-ui-formik-components/TextField';
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import DisplayError from '../../ErrorMessage';
import GlassCard from '../utils/GlassCard';
import Notification from '../utils/Notification';
import SygefexTheme from '../utils/SygefexTheme';
import useForm from '../utils/useForm';
import ZoomList from '../utils/ZoomList';

const validationSchema = Yup.object().shape({
  pdtName: Yup.string().required('Product nMe must be supplied'),
  pdtCode: Yup.string().required('Product code must be supplied')
});

const CreateProduct = () => {
  // const classes = useStyles();

  const initialState = {
    categoryID: ''
  };

  const { inputValues, handleInputChange } = useForm(initialState);

  const [notify, setNotify] = useState({
    isOpen: false,
    message: '',
    type: ''
  });

  const initialValues: ProductCreateInput = {
    pdtName: '',
    pdtCode: '',
    unitPrice: 0,
    carts: {},
    orderDetails: {},
    Category: {},
    qttyInHand: 0
  };

  const [AllCategoriesQuery, { data: categoryData }] =
    useAllCategoriesLazyQuery();

  useEffect(() => {
    AllCategoriesQuery();
  }, []);

  const categoryOptions =
    categoryData?.categories?.map(category => ({
      value: category?.id,
      label: category?.categoryName
    })) ?? [];

  const [createAProductMutation, { error: regErr }] =
    useCreateAProductMutation();

  // const updatePdt = (cache, { data }) => {
  //   cache.modify({
  //     fields: {
  //       product(exisitingProducts = []) {
  //         const newProduct = data.createProduct;
  //         cache.writeQuery({
  //           query: AllProductsDocument,
  //           data: { newProduct, ...exisitingProducts }
  //         });
  //       }
  //     }
  //   });
  // };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await createAProductMutation({
          variables: {
            data: {
              ...values,
              qttyInHand: 0,
              Category: {
                connect: { id: String(inputValues?.categoryID) }
              }
            }
          },
          update(cache, { data }) {
            const existingPdts = cache.readQuery<AllProductsQuery>({
              query: AllProductsDocument
            });
            console.log({ existingPdts });
            cache.writeQuery({
              query: AllProductsDocument,
              data: {
                queryProduct: [
                  data?.createProduct,
                  ...(existingPdts?.products ?? [])
                ]
              }
            });
            console.log({ data });
          }
        });

        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          console.log(res);

          setNotify({
            isOpen: true,
            message: 'New Product created',
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
              <GlassCard maxWidth="50vh" minHeight="30vh" blur={2}>
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
                        <Tooltip
                          placement="top"
                          title="Enrégistrer une nouvelle Producte"
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
                            New Product
                          </Typography>
                        </Tooltip>
                      </Grid>
                    </Grid>
                    <Grid container direction="column">
                      <Grid item>
                        <Field
                          name="categoryID"
                          id="categoryID"
                          component={Select}
                          type="text"
                          autoFocus={true}
                          options={categoryOptions}
                          label="Category"
                          onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                          ) => handleInputChange(event, 'categoryID')}
                          disabled={isSubmitting}
                          helpertext={<ErrorMessage name="categoryID" />}
                        />
                        <Field
                          name="pdtName"
                          component={TextField}
                          type="text"
                          label="Product Name"
                          disabled={isSubmitting}
                          helpertext={<ErrorMessage name="pdtName" />}
                        />
                        <Field
                          name="pdtCode"
                          component={TextField}
                          type="text"
                          label="Product Code"
                          disabled={isSubmitting}
                          helpertext={<ErrorMessage name="pdtCode" />}
                        />

                        <Field
                          name="unitPrice"
                          component={TextField}
                          type="number"
                          label="Product unit Price"
                          disabled={isSubmitting}
                          helpertext={<ErrorMessage name="unitPrice" />}
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
export default CreateProduct;
