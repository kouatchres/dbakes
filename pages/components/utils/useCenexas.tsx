import {
  Button,
  CircularProgress,
  Grid,
  LinearProgress,
  Paper,
  Typography
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { PrismaClient } from '@prisma/client';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Select, TextField } from 'material-ui-formik-components';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import React, { ChangeEvent, useEffect } from 'react';
import safeJsonStringify from 'safe-json-stringify';
import * as Yup from 'yup';
import {
  Exam,
  Session,
  SingleCenterByPublicCodeDocument,
  SingleExaminerByMatriculeDocument,
  useSingleCenterByPublicCodeLazyQuery,
  useSingleCenterExamSessionLazyQuery,
  useSingleExaminerByMatriculeLazyQuery
} from '../../../generated/graphql';
import useForm from './useForm';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pageStyled: {
      margin: 'auto',
      borderTop: '1rem solid #829079',
      paddingTop: theme.spacing(1),
      paddingLeft: theme.spacing(1.8),
      paddingRight: theme.spacing(1.8),
      maxWidth: '40%',
      minWidth: '10rem'
    }
  })
);

const validationSchema = Yup.object().shape({
  // examinerID: Yup.string().required('Examiner Absent'),
  // centerPublicCode: Yup.string().required('Center Absent'),
  // examID: Yup.string().required('Exan Absent'),
  // sessionID: Yup.string().required('session Absent')
});

const createCenexasExaminer = (
  props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  const classes = useStyles();
  const router = useRouter();

  const initialState = {
    examID: '',
    sessionID: '',
    rankID: '',
    phaseID: '',
    scoreID: ''
  };

  const { handleInputChange, inputValues } = useForm(initialState);

  const examsOptions =
    props?.exams?.map((exam: { id: string; examName: string }) => ({
      value: exam?.id,
      label: exam?.examName
    })) ?? [];

  console.log({ examsOptions });

  const sessionsOptions =
    props?.sessions?.map((session: { id: string; sessionName: string }) => ({
      value: session?.id,
      label: session?.sessionName
    })) ?? [];

  console.log({ sessionsOptions });

  const [SingleCenterByCenterPublicCodeQuery, { data }] =
    useSingleCenterByPublicCodeLazyQuery({
      query: SingleCenterByPublicCodeDocument
    });

  const { centerName, id, centerPublicCode } = data?.centerByPublicCode ?? {
    centerName: '',
    id: '',
    centerPublicCode: ''
  };
  console.log({ data });

  const [SingleExaminerByMatriculeQuery, { data: dataExaminer }] =
    useSingleExaminerByMatriculeLazyQuery({
      query: SingleExaminerByMatriculeDocument
    });

  const [SingleCenterExamSessionQuery, { data: cenexasData }] =
    useSingleCenterExamSessionLazyQuery();

  console.log({ centerPublicCode });
  console.log({ cenexasData });

  useEffect(() => {
    SingleCenterExamSessionQuery({
      variables: {
        centerId: id && id,
        examId: inputValues?.examID,
        sessionId: inputValues?.sessionID
      }
    });
  }, [id, inputValues?.examID, inputValues?.sessionID]);

  const centerExamSessionIDQuery =
    cenexasData?.existingCenterExamSession?.id ?? '';

  const initialValues = {
    CenterExamSession: {},
    cenexasExaminerPhase: ''
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={() => {}}
    >
      {({ submitForm, isSubmitting }) => {
        return (
          <Paper className={classes.pageStyled}>
            <Form aria-busy={isSubmitting}>
              {isSubmitting && <LinearProgress />}

              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                style={{
                  display: 'grid',
                  placeItems: 'center',
                  paddingTop: '0.2rem',

                  borderRadius: '0.2rem'
                }}
              >
                <Grid item>
                  <Typography
                    color="primary"
                    gutterBottom
                    variant="body2"
                    component="h6"
                  >
                    Inscription au centre d'Examen
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item xs={12}>
                  <Field
                    name="centerName"
                    component={TextField}
                    type="text"
                    value={centerName || ''}
                    label="Nom du centre"
                    disabled
                    helpertext={<ErrorMessage name="centerName" />}
                  />
                </Grid>
              </Grid>
              <Grid container direction="row" spacing={1}>
                <Grid item xs={12} md={6}>
                  <Field
                    name="centerPublicCode"
                    component={TextField}
                    type="text"
                    label="Cocde public centre"
                    disabled={isSubmitting}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                      SingleCenterByCenterPublicCodeQuery({
                        variables: {
                          centerPublicCode: event.target.value
                        }
                      });
                    }}
                    helpertext={<ErrorMessage name="centerPublicCode" />}
                  />
                  <Field
                    name="examID"
                    component={Select}
                    type="text"
                    options={examsOptions}
                    label="Examen"
                    disabled={isSubmitting}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                      handleInputChange(event, 'examID');
                    }}
                    helpertext={<ErrorMessage name="examID" />}
                  />
                  <Field
                    name="sessionID"
                    component={Select}
                    type="text"
                    options={sessionsOptions}
                    label="Session"
                    disabled={isSubmitting}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                      handleInputChange(event, 'sessionID');
                    }}
                    helpertext={<ErrorMessage name="sessionID" />}
                  />
                </Grid>

                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <Grid
                    item
                    xs={12}
                    style={{ placeItems: 'center', display: 'grid' }}
                  >
                    <Button
                      disabled={isSubmitting}
                      onClick={submitForm}
                      style={{ color: '#ede6b9' }}
                    >
                      {isSubmitting && (
                        <CircularProgress
                          style={{
                            color: 'primary',
                            height: '2rem',
                            width: '2rem'
                          }}
                          size="md"
                        />
                      )}
                      {isSubmitting ? 'Inscription en cours' : "S'inscrire"}
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Form>
          </Paper>
        );
      }}
    </Formik>
  );
};

const prisma = new PrismaClient();

export const getStaticProps: GetStaticProps = async () => {
  const allExams: Exam[] = await prisma.exam.findMany({
    orderBy: [{ examName: 'asc' }, { examCode: 'asc' }]
  });

  const allSessions: Session[] = await prisma.session.findMany({
    orderBy: [{ sessionName: 'asc' }, { sessionCode: 'asc' }]
  });

  const stringifiedExamData = safeJsonStringify(allExams);
  const exams = JSON.parse(stringifiedExamData);

  const stringifiedSessionData = safeJsonStringify(allSessions);
  const sessions = JSON.parse(stringifiedSessionData);
  return { props: { sessions, exams } };
};

export default createCenexasExaminer;
