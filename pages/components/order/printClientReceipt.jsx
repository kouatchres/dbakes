import { Grid, Grow, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { PrismaClient } from '@prisma/client';
import { Form, Formik } from 'formik';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useRouter } from 'next/router';
import safeJsonStringify from 'safe-json-stringify';
import GlassCard from '../utils/GlassCard';
import SygefexTheme from '../utils/SygefexTheme';
import ZoomList from '../utils/ZoomList';

const useStyles = makeStyles(theme =>
  createStyles({
    centered: {
      height: '60vh',
      [theme.breakpoints.down('xs')]: {
        height: '85vh'
      }
    }
  })
);

const ClientReceipt = ({ order }) => {
  const route = useRouter();
  const classes = useStyles();
  console.log({ order });

  const printReport = () => {
    const input = document?.getElementById('pdfdiv');
    html2canvas(input).then(canvas => {
      var imgWidth = 200;
      var pageHeight = 290;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      var heightLeft = imgHeight;
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      var position = 0;
      var heightLeft = imgHeight;
      pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
      pdf.save(candInfo);
    });
  };

  return (
    <Formik initialValues={initialValues} onSubmit={async values => {}}>
      {({ isSubmitting }) => (
        <Grow in>
          <GlassCard maxWidth="80vh" minHeight="60vh" blur={1}>
            <Form aria-busy={isSubmitting}>
              <ZoomList interval={1000} id="pdfdiv">
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  style={{
                    marginTop: '1rem',
                    paddingTop: '0.5rem',
                    borderRadius: '0.3rem',
                    backgroundColor: SygefexTheme?.palette?.background?.default
                  }}
                >
                  <Grid item>
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
                      Client Receipt
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  container
                  direction="row"
                  style={{
                    backgroundColor:
                      SygefexTheme?.palette?.common?.tableBlgrdHead,
                    borderRadius: '0.3rem'
                  }}
                >
                  <Grid item xs={12}>
                    <Typography
                      color="primary"
                      style={{
                        marginLeft: '0.5rem',
                        textAligns: 'left',
                        fontSize: 'clamp(0.6rem, 2vw + 0.4rem, 1.4rem)',

                        color: SygefexTheme?.palette?.common?.black
                      }}
                      variant="body1"
                      component="h6"
                    >
                      {/* <strong>Nom:</strong> <span>{order1stName}</span> */}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      color="primary"
                      style={{
                        marginLeft: '0.5rem',
                        textAligns: 'left',
                        fontSize: 'clamp(0.6rem, 2vw + 0.4rem, 1.4rem)',

                        color: SygefexTheme?.palette?.common?.black
                      }}
                      variant="body1"
                      component="h6"
                    >
                      <strong>Prenoms: </strong>
                      {/* <span> {order2ndName}</span> */}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      color="primary"
                      style={{
                        marginLeft: '0.5rem',
                        textAligns: 'left',
                        fontSize: 'clamp(0.6rem, 2vw + 0.4rem, 1.4rem)',

                        color: SygefexTheme?.palette?.common?.black
                      }}
                      variant="body1"
                      component="h6"
                    >
                      <strong>Autres Noms:</strong>
                      {/* <span> {order3rdName}</span> */}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      color="primary"
                      style={{
                        marginLeft: '0.5rem',
                        textAligns: 'left',
                        fontSize: 'clamp(0.6rem, 2vw + 0.4rem, 1.4rem)',

                        color: SygefexTheme?.palette?.common?.black
                      }}
                      variant="body1"
                      component="h6"
                    >
                      <strong>Email:</strong>
                      {/* <span> {email}</span> */}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography
                      color="primary"
                      style={{
                        marginLeft: '0.5rem',
                        textAligns: 'left',
                        fontSize: 'clamp(0.6rem, 2vw + 0.4rem, 1.4rem)',

                        color: SygefexTheme?.palette?.common?.black
                      }}
                      variant="body1"
                      component="h6"
                    >
                      <strong>Date:</strong>
                      <span></span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography
                      color="primary"
                      style={{
                        marginLeft: '0.5rem',
                        textAligns: 'left',
                        fontSize: 'clamp(0.6rem, 2vw + 0.4rem, 1.4rem)',

                        color: SygefexTheme?.palette?.common?.black
                      }}
                      variant="body1"
                      component="h6"
                    >
                      {/* <strong>Lieu:</strong> <span>{placeOfBirth}</span> */}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  container
                  direction="row"
                  style={{
                    marginTop: '1rem',
                    paddingLeft: '0.5rem',
                    borderRadius: '0.3rem',
                    backgroundColor:
                      SygefexTheme?.palette?.common?.tableBlgrdHead
                  }}
                >
                  <Grid item>
                    <Typography
                      color="primary"
                      style={{
                        display: 'grid',
                        placeItems: 'center',
                        // marginLeft: '0.5rem',
                        textAligns: 'left',
                        fontSize: 'clamp(0.6rem, 2vw + 0.4rem, 1.4rem)',

                        color: SygefexTheme?.palette?.common?.black
                      }}
                      variant="body1"
                      component="h6"
                    >
                      <strong>Infos Impt Candidat:</strong>
                    </Typography>
                  </Grid>
                </Grid>

                <Grid
                  container
                  direction="row"
                  style={{
                    marginTop: '1rem',
                    // paddingLeft: '0.5rem',
                    borderRadius: '0.3rem',
                    backgroundColor: SygefexTheme?.palette?.primary?.dark
                  }}
                >
                  <Grid item xs={12} md={9}>
                    <Typography
                      color="primary"
                      style={{
                        marginLeft: '0.5rem',
                        textAligns: 'left',
                        fontSize: 'clamp(0.6rem, 2vw + 0.4rem, 1.4rem)',

                        color: SygefexTheme?.palette?.common?.black
                      }}
                      variant="body1"
                      component="h6"
                    >
                      <strong>Code:</strong>
                      {/* <span> {orderSecretCode}</span> */}
                    </Typography>
                    <Typography
                      color="primary"
                      style={{
                        marginLeft: '0.5rem',
                        textAligns: 'left',
                        fontSize: 'clamp(0.6rem, 2vw + 0.4rem, 1.4rem)',

                        color: SygefexTheme?.palette?.common?.black
                      }}
                      variant="body1"
                      component="h6"
                    >
                      <strong>Matricule:</strong>
                    </Typography>
                    <Typography
                      color="primary"
                      style={{
                        marginLeft: '0.5rem',
                        textAligns: 'left',
                        fontSize: 'clamp(0.6rem, 2vw + 0.4rem, 1.4rem)',

                        color: SygefexTheme?.palette?.common?.black
                      }}
                      variant="body1"
                      component="h6"
                    ></Typography>
                    <Typography
                      color="primary"
                      style={{
                        marginLeft: '0.5rem',
                        textAligns: 'left',
                        fontSize: 'clamp(0.6rem, 2vw + 0.4rem, 1.4rem)',

                        color: SygefexTheme?.palette?.common?.black
                      }}
                      variant="body1"
                      component="h6"
                    ></Typography>
                  </Grid>
                </Grid>
              </ZoomList>
              <div
                style={{
                  display: 'grid',
                  placeItems: 'center',
                  margin: '0.5rem auto'
                }}
              >
                <Button
                  styles={{ backgroundColor: 'primary', color: 'seocondary' }}
                  onClick={printReport}
                >
                  Generate Pdf
                </Button>
              </div>
            </Form>
          </GlassCard>
        </Grow>
      )}
    </Formik>
  );
};

const prisma = new PrismaClient();

export const getServerSideProps = async ({ query }) => {
  const orderID = query?.id;

  const clientOrder = await prisma.order.findUnique({
    where: { id: orderID },
    include: {
      OrderDetail: true
    }
  });

  const stringifiedData = safeJsonStringify(clientOrder);
  const order = JSON.parse(stringifiedData);
  return { props: { order } };
};
export default ClientReceipt;
