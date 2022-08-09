import {
  Avatar,
  Button,
  CircularProgress,
  Container,
  Grid,
  LinearProgress,
  Link,
  Typography
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { TextField } from 'material-ui-formik-components/TextField';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { useLoginUserMutation } from '../../../generated/graphql';
import Error from '../../ErrorMessage';
import Notification from '../utils/Notification';
import SygefexTheme from '../utils/SygefexTheme';

// const useStyles = makeStyles((theme: Theme) => ({
//   pageStyled: {
//     paddingTop: theme.spacing(1),
//     paddingLeft: theme.spacing(1),
//     paddingRight: theme.spacing(2),
//     elevatioin: 0
//     // maxWidth: '40%',
//     // minWidth: '30%'
//   }
//   // [theme.breakpoints.down('xs')]: {
//   //   maxWidth: '25%',
//   //   minWidth: '8rem'
//   // }
// }));

const validationSchema = Yup.object().shape({
  email: Yup.string().required('Email requis'),
  password: Yup.string().required('Mot de passes requis')
});

const SignupUser = () => {
  const [notify, setNotify] = useState({
    isOpen: false,
    message: '',
    type: ''
  });

  interface IUser {
    password: string;
    email: string;
  }

  const initialValues: IUser = {
    password: '',
    email: ''
  };

  const [loginUserMutation, { error: errMut }] = useLoginUserMutation();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values: IUser, { setSubmitting, resetForm }) => {
        const res = await loginUserMutation({
          variables: { ...values }
        });

        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          console.log(res);
          setNotify({
            isOpen: true,
            message: 'Connexion Reussie',
            type: 'success'
          });
          resetForm();
          setSubmitting(false);
        }, 200);
      }}
    >
      {({ submitForm, isSubmitting }) => {
        return (
          <Container>
            <Form aria-busy={isSubmitting}>
              {isSubmitting && <LinearProgress />}
              <Error error={errMut} />

              <Grid
                container
                direction="row"
                justify="center"
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                  paddingTop: '0.2rem',
                  borderRadius: '0.2rem'
                }}
              >
                <Grid
                  item
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                >
                  <Avatar
                    style={{
                      backgroundColor: SygefexTheme?.palette?.primary?.main
                    }}
                  >
                    <LockOutlinedIcon
                      style={{
                        width: '1.5rem',
                        height: '1.5rem',
                        color: SygefexTheme?.palette?.primary?.dark
                      }}
                    />
                  </Avatar>
                  <Typography
                    color="primary"
                    gutterBottom
                    variant="body2"
                    component="h6"
                    // align="center"
                  >
                    Connexion
                  </Typography>
                </Grid>
              </Grid>
              <Grid container direction="column">
                <Grid item>
                  <Field
                    name="email"
                    component={TextField}
                    type="email"
                    fullWidth
                    label="Email"
                    disabled={isSubmitting}
                    helpertext={<ErrorMessage name="email" />}
                  />

                  <Field
                    name="password"
                    component={TextField}
                    type="password"
                    fullWidth
                    label="Mot de passe"
                    disabled={isSubmitting}
                    helpertext={<ErrorMessage name="password" />}
                  />

                  <Notification notify={notify} setNotify={setNotify} />
                  <div style={{ placeItems: 'center', display: 'grid' }}>
                    <Button disabled={isSubmitting} onClick={submitForm}>
                      {isSubmitting && (
                        <CircularProgress
                          style={{
                            height: '1rem',
                            width: '1rem'
                          }}
                        />
                      )}
                      {isSubmitting ? 'Connexion en cours' : 'Connectez-vous'}
                    </Button>
                  </div>
                  <Typography
                    color="primary"
                    gutterBottom
                    variant="body2"
                    component="h6"
                  >
                    <Link href="">
                      <a>Mot de passe oublie?</a>
                    </Link>
                  </Typography>
                  <Typography
                    color="primary"
                    gutterBottom
                    variant="body2"
                    component="h6"
                  >
                    Pas de compte?
                    <Link href="">
                      {''} <a>Creer Compte</a>
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Form>
          </Container>
        );
      }}
    </Formik>
  );
};
export default SignupUser;
