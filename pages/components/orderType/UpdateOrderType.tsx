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
import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import {
  CategoryUpdateInput,
  SingleCategoryDocument,
  useSingleCategoryLazyQuery,
  useUpdateACategoryMutation
} from '../../../generated/graphql';
import GlassCard from '../utils/GlassCard';
import Notification from '../utils/Notification';
import SygefexTheme from '../utils/SygefexTheme';

const validationSchema = Yup.object().shape({
  categoryName: Yup.string().required('Category Name required')
});

const UpdateCategory = (props: { id: string }) => {
  const getCategoryID = props?.id;
  const [notify, setNotify] = useState({
    isOpen: false,
    message: '',
    type: ''
  });

  const [SingleCategoryQuery, { data: dataCategory }] =
    useSingleCategoryLazyQuery({
      query: SingleCategoryDocument
    });

  useEffect(() => {
    SingleCategoryQuery({ variables: { where:{id: getCategoryID }} });
  }, [getCategoryID]);

  console.log(dataCategory?.category);

  const initialValues: CategoryUpdateInput = {
    categoryName: '' || undefined,
    categoryCode: '' || undefined,
    id: '' || undefined
  };

  const [updateACategoryMutation] = useUpdateACategoryMutation();
  return (
    <Formik
      initialValues={dataCategory?.category || initialValues}
      enableReinitialize={true}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await updateACategoryMutation({
          variables: {
            data: {
              categoryName: { set: String(values?.categoryName) }
            },
            where: { id: getCategoryID }
          }

          //   update: (cache, { data }) => {
          //     const allCategorysList = cache.readQuery({
          //       query: AllCategorysDocument
          //     });
          //     // allCategorysList?.Categorys = [...allCategorysList?.Categorys, updateOneCategory];
          //     console.log('running the update query');
          //     console.log({ allCategorysList });
          //     cache.writeQuery({
          //       query: AllCategorysDocument,
          //       data: [allCategorysList, data?.updateOneCategory]
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
                        title="Update Category"
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
                          Update Category
                        </Typography>
                      </Tooltip>
                    </Grid>
                  </Grid>
                  <Grid container direction="column">
                    <Grid item>
                      <Field
                        name="categoryName"
                        component={TextField}
                        type="text"
                        label="Category Name"
                        disabled={isSubmitting}
                        helpertext={<ErrorMessage name="categoryName" />}
                      />

                      <Field
                        name="categoryCode"
                        component={TextField}
                        type="text"
                        label="Category Code"
                        disabled={isSubmitting}
                        helpertext={<ErrorMessage name="categoryCode" />}
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
export default UpdateCategory;
