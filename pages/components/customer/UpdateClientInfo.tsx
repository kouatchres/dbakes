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
  ClientUpdateInput,
  SingleClientDocument,
  useSingleClientLazyQuery,
  useUpdateAClientMutation
} from '../../../generated/graphql';
import GlassCard from '../utils/GlassCard';
import Notification from '../utils/Notification';
import SygefexTheme from '../utils/SygefexTheme';

const validationSchema = Yup.object().shape({
  clientNames: Yup.string().required('Client Name required'),
  clientPhoneNumb: Yup.number().required('Client price required')
});

const UpdateClient = (props:{id:string}) => {
  const getClientID = props?.id;
  const [notify, setNotify] = useState({
    isOpen: false,
    message: '',
    type: ''
  });

  const [SingleClientQuery, { data: dataClients }] =
    useSingleClientLazyQuery({
      query: SingleClientDocument
    });

  useEffect(() => {
    SingleClientQuery({ variables: { where:{ id: getClientID }} });
  }, [getClientID]);

  console.log(dataClients?.client);

  const initialValues: ClientUpdateInput = {
    clientNames: '' || undefined,
    clientPhoneNumb: '' || undefined,
    id: '' || undefined
  };

  const [updateAClientMutation, { data: clientData }] =
    useUpdateAClientMutation();
  console.log({ clientData });
  return (
    <Formik
      initialValues={dataClients?.client || initialValues}
      enableReinitialize={true}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await updateAClientMutation({
          variables: {
            data: {
              clientNames: { set: String(values?.clientNames) },
              clientPhoneNumb: { set: Number(values?.clientPhoneNumb) }
            },
            where: { id: props?.id }
          }
        });
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          console.log(res);

          setNotify({
            isOpen: true,
            message: 'Client info successfully updated',
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
                          Update Client
                        </Typography>
                      </Tooltip>
                    </Grid>
                  </Grid>
                  <Grid container direction="column">
                    <Grid item>
                      <Field
                        name="clientNames"
                        component={TextField}
                        type="text"
                        label="Client Name"
                        disabled={isSubmitting}
                        helpertext={<ErrorMessage name="clientNames" />}
                      />

                      <Field
                        name="clientPhoneNumb"
                        component={TextField}
                        type="number"
                        label="Client phone number"
                        disabled={isSubmitting}
                        helpertext={<ErrorMessage name="clientPhoneNumb" />}
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
export default UpdateClient;
