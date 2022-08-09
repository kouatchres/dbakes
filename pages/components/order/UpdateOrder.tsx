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
  ProductUpdateInput,
  SingleProductDocument,
  useSingleProductLazyQuery,
  useUpdateAProductMutation
} from '../../../generated/graphql';
import GlassCard from '../utils/GlassCard';
import Notification from '../utils/Notification';
import SygefexTheme from '../utils/SygefexTheme';

const validationSchema = Yup.object().shape({
  pdtName: Yup.string().required('Product Name required'),
  unitPrice: Yup.number().required('Product price required'),
  pdtCode: Yup.string().required('Product code required')
});

const UpdateProduct = (props: { id: string }) => {
  console.log(props.id);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: '',
    type: ''
  });

  const [SingleProductQuery, { data: dataProducts }] =
    useSingleProductLazyQuery({
      query: SingleProductDocument
    });

  useEffect(() => {
    SingleProductQuery({ variables: { id: props.id } });
  }, [props.id]);

  console.log(dataProducts?.product);

  const initialValues: ProductUpdateInput = {
    pdtName: '' || undefined,
    pdtCode: '' || undefined,
    id: '' || undefined,
    unitPrice: 0 || undefined
  };

  const [updateAProductMutation, { data: productData }] =
    useUpdateAProductMutation();
  console.log({ productData });
  return (
    <Formik
      initialValues={dataProducts?.product || initialValues}
      enableReinitialize={true}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await updateAProductMutation({
          variables: {
            data: {
              pdtName: { set: String(values?.pdtName) },
              unitPrice: { set: Number(values?.unitPrice) },
              pdtCode: { set: String(values?.pdtCode) }
            },
            where: { id: props?.id }
          }

          //   update: (cache, { data }) => {
          //     const allProductsList = cache.readQuery({
          //       query: AllProductsDocument
          //     });
          //     // allProductsList?.Products = [...allProductsList?.Products, updateOneProduct];
          //     console.log('running the update query');
          //     console.log({ allProductsList });
          //     cache.writeQuery({
          //       query: AllProductsDocument,
          //       data: [allProductsList, data?.updateOneProduct]
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
                          Update Product
                        </Typography>
                      </Tooltip>
                    </Grid>
                  </Grid>
                  <Grid container direction="column">
                    <Grid item>
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
                        label="Product Price"
                        disabled={isSubmitting}
                        helpertext={<ErrorMessage name="unitPrice" />}
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
export default UpdateProduct;
