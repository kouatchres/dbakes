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
  BranchUpdateInput,
  SingleBranchDocument,
  useSingleBranchByIdLazyQuery,
  useUpdateABranchMutation
} from '../../../generated/graphql';
import GlassCard from '../utils/GlassCard';
import Notification from '../utils/Notification';
import SygefexTheme from '../utils/SygefexTheme';

const validationSchema = Yup.object().shape({
  branchNames: Yup.string().required('Branch Name required'),
  branchPhoneNumb: Yup.number().required('Branch phone required')
});

const UpdateBranch = (props: { id: string }) => {
  const getBranchID = props?.id;
  const [notify, setNotify] = useState({
    isOpen: false,
    message: '',
    type: ''
  });

  const [SingleBranchByIdQuery, { data: dataBranch }] =
    useSingleBranchByIdLazyQuery({
      query: SingleBranchDocument
    });

  useEffect(() => {
    SingleBranchByIdQuery({ variables: { id: getBranchID } });
  }, [getBranchID]);

  console.log(dataBranch?.branchById);

  const initialValues: BranchUpdateInput = {
    branchName: '' || undefined,
    id: '' || undefined
  };

  const [updateABranchMutation] = useUpdateABranchMutation();
  return (
    <Formik
      initialValues={dataBranch?.branchById || initialValues}
      enableReinitialize={true}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await updateABranchMutation({
          variables: {
            data: {
              branchName: { set: String(values?.branchName) }
            },
            where: { id: getBranchID }
          }

          //   update: (cache, { data }) => {
          //     const allBranchsList = cache.readQuery({
          //       query: AllBranchsDocument
          //     });
          //     // allBranchsList?.Branchs = [...allBranchsList?.Branchs, updateOneBranch];
          //     console.log('running the update query');
          //     console.log({ allBranchsList });
          //     cache.writeQuery({
          //       query: AllBranchsDocument,
          //       data: [allBranchsList, data?.updateOneBranch]
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
                          Update Branch
                        </Typography>
                      </Tooltip>
                    </Grid>
                  </Grid>
                  <Grid container direction="column">
                    <Grid item>
                      <Field
                        name="branchNames"
                        component={TextField}
                        type="text"
                        label="Branch Name"
                        disabled={isSubmitting}
                        helpertext={<ErrorMessage name="branchNames" />}
                      />

                      <Field
                        name="branchPhoneNumb"
                        component={TextField}
                        type="number"
                        label="Branch Phone Number"
                        disabled={isSubmitting}
                        helpertext={<ErrorMessage name="branchPhoneNumb" />}
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
export default UpdateBranch;
