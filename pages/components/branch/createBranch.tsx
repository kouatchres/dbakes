import { useUser } from '@auth0/nextjs-auth0';
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
import { TextField } from 'material-ui-formik-components/TextField';
import randomize from 'randomatic';
import { useState } from 'react';
import * as Yup from 'yup';
import {
  BranchCreateInput,
  useCreateABranchMutation
} from '../../../generated/graphql';
import DisplayError from '../../ErrorMessage';
import GlassCard from '../utils/GlassCard';
import Notification from '../utils/Notification';
import SygefexTheme from '../utils/SygefexTheme';
import ZoomList from '../utils/ZoomList';

const validationSchema = Yup.object().shape({
  branchName: Yup.string().required('Libellé Poste requis')
});

const CreateBranch =(props:any) => {
  // const classes = useStyles();
  const { user } = useUser();

  const [notify, setNotify] = useState({
    isOpen: false,
    message: '',
    type: ''
  });
  console.log({ user });
  const initialValues: BranchCreateInput = {
    branchName: '',
    branchCode: ''
  };

  const [createABranchMutation, { error: regErr }] = useCreateABranchMutation();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await createABranchMutation({
          variables: {
            data: {
              ...values,
              branchCode: randomize('Aa0', 5)
            }
          }
          // update: (cache, { data }) => {
          //   const allBranchs = cache.readQuery<AllBranchsQuery>({
          //     query: AllBranchsDocument
          //   });
          //   console.log({ cache, allBranchs });
          //   const addedBranch = data?.createBranch;
          //   if (addedBranch) {
          //     cache.writeQuery({
          //       query: AllBranchsDocument,
          //       data: {
          //         // regions: [...allBranchs?.region, addedBranch]
          //       }
          //     });
          //   }
          // }
          // update(cache, { data }) {
          //   const regionsData = cache.readQuery<AllBranchsQuery>({
          //     query: AllBranchsDocument
          //   });
          //   cache.writeQuery({
          //     query: AllBranchsDocument,
          //     data: { regions: [...regionsData?.regions, data?.createBranch] }
          //   });
          // }
        });

        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          console.log(res);

          setNotify({
            isOpen: true,
            message: 'New Branch created Successfully',
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
                            New Branch
                          </Typography>
                        </Tooltip>
                      </Grid>
                    </Grid>
                    <Grid container direction="column">
                      <Grid item>
                        <Field
                          name="branchName"
                          component={TextField}
                          type="text"
                          label="Branch Name"
                          disabled={isSubmitting}
                          helpertext={<ErrorMessage name="branchName" />}
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
export default CreateBranch;
