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
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { motion } from 'framer-motion';
import { TextField } from 'material-ui-formik-components/TextField';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { useSignupUserMutation } from '../../../generated/graphql';
import Error from '../../ErrorMessage';
import Notification from '../utils/Notification';
import SygefexTheme from '../utils/SygefexTheme';

// const useStyles = makeStyles((theme: Theme) => ({
//   pageStyled: {
//     paddingTop: theme.spacing(1),
//     paddingLeft: theme.spacing(2),
//     paddingRight: theme.spacing(2)
//     // maxWidth: '40%',
//     // minWidth: '30%'
//   }
//   // [theme.breakpoints.down('md')]: {
//   //   maxWidth: '30%',
//   //   minWidth: '20'
//   // }
// }));

const validationSchema = Yup.object().shape({
  email: Yup.string().required('Email requis'),
  password: Yup.string().required('Mot de passes requis')
});

const SignupUser = () => {
  // const classes = useStyles();

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

  const [signupUserMutation, { error: errMut }] = useSignupUserMutation();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values: IUser, { setSubmitting, resetForm }) => {
        const res = await signupUserMutation({
          variables: { ...values }
        });

        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          console.log(res);
          setNotify({
            isOpen: true,
            message: 'Creation de Compte Reussie',
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
                  // backgroundColor: '#ede6b9',
                  borderRadius: '0.2rem'
                }}
              >
                <Grid
                  item
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  style={{
                    backgroundColor: SygefexTheme?.palette?.primary?.main
                  }}
                >
                  <Avatar
                    style={{
                      backgroundColor: SygefexTheme?.palette?.primary?.main
                    }}
                  >
                    <AddCircleOutlineOutlinedIcon
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
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      variants={{
                        hidden: { scale: 0.8, opacity: 0 },
                        visible: {
                          scale: 1,
                          opacity: 1,
                          transition: {
                            delay: 0.5,
                            transform: 'ease-in-out'
                          }
                        }
                      }}
                    >
                      Nouveau Compte
                    </motion.div>
                  </Typography>
                </Grid>
              </Grid>
              <Grid container direction="column">
                <Grid item>
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: { scale: 0.8, opacity: 0 },
                      visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                          delay: 0.5,
                          transform: 'ease-in-out'
                        }
                      }
                    }}
                  >
                    <Field
                      name="email"
                      component={TextField}
                      type="email"
                      label="Email"
                      fullwidth
                      disabled={isSubmitting}
                      helpertext={<ErrorMessage name="email" />}
                    />
                  </motion.div>
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: { scale: 0.8, opacity: 0 },
                      visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                          delay: 0.5,
                          transform: 'ease-in-out'
                        }
                      }
                    }}
                  >
                    <Field
                      name="password"
                      component={TextField}
                      type="password"
                      fullwidth
                      label="Mot de passe"
                      disabled={isSubmitting}
                      helpertext={<ErrorMessage name="password" />}
                    />
                  </motion.div>

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
                      {isSubmitting ? 'Compte en creation' : 'Nouveau Compte'}
                    </Button>
                  </div>

                  <Typography
                    color="primary"
                    gutterBottom
                    variant="body2"
                    component="h6"
                  >
                    Vous Connecter?
                    <Link href="">
                      {''} <a>Connexion</a>
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
