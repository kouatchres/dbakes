import {
  createStyles,
  makeStyles,
  MuiThemeProvider,
  Theme
} from '@material-ui/core/styles';
import React from 'react';
import LayoutDrawer from '../pages/components/layout/persistentDrawer';
import SygefexTheme from './components/utils/SygefexTheme';
import Meta from './Meta';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    centered: {
      minHeight: '100vh',
      display: 'grid',
      placeItems: 'center',
      margin: '0 auto',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
      // backgroundImage: "url('/backgrdImages/goldern_feast.jpg')"
      // backgroundImage: "url('/backgrdImages/water_drops.png')"
      // backgroundImage:
      //   "url('https://images.unsplash.com/photo-1640694646609-9deff0f4b8f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60')"
      // backgroundImage:
      //   'linear-gradient(218deg,rgba(201,228,250,20) 30%,rgba(232,243,255,0.62) 25%, #1845ad 75%)'
      // 'linear-gradient(68deg,rgba(125,200,155,0.6) 22%,rgba(72,25,75,0.5) 45%, rgba(22,32,16,0.3) 68%)'
      // 'linear-gradient(68deg,rgba(215,205,155,0.5) 52%,rgba(222,25,105,0.2) 45%, rgba(22,32,16,0.3) 58%)'
      // backgroundImage: 'linear-gradient(60deg, #b9bf 40%,#c9a5 89%)'
      // backgroundImage: "url('/img/images(100).jpeg')"
      // alignItems: 'center',
      // justifyContent: 'center',
    },

    toolbarMargin: {
      // ...theme.mixins.toolbar
      // position: 'relative'
    },
    bckgrdImage: {
      // backgroundImage:
      //   'linear-gradient(68deg,rgba(215,205,155,0.5) 22%,rgba(22,25,15,0.8) 48%, rgba(22,32,16,0.25) 80%)',
      // 'linear-gradient(48deg,rgba(211,211,211,0.5) 10%, rgba(255,255,205,0.2) 22%, rgba(205,255,255,0.8) 90%)',
      // 'linear-gradient(68deg,rgba(215,205,155,0.5) 22%,rgba(22,25,15,0.8) 48%, rgba(22,32,16,0.25) 80%)',
      // backgroundImage: "url('/backgrdImages/goldern_feast.jpg')",
      // backgroundImage: "url('/pngtree-stained-glass-background.jpg')",
      // backgroundImage: "url('/bing_landscape1.jpg')",
      backgroundImage: "url('/pngtree-glass-morphism.jpg')",
      // backgroundImage: "url('/pngtree-glass-morphism.jpg')",
      // backgroundImage: "url('/forest.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  })
);

const Page: React.FC = ({ children }) => {
  //   const [imageOrPdf setimageOrPdf]= useState()
  //   const [uploadImage setUploadImage]= useState()

  // const fileUploader = (event: ChangeEvent<HTMLInputElement>) => {
  //   if (event?.target?.files?.length) {
  //     const files: FileList = event?.target?.files;
  //     setimageOrPdf(URL.createObjectURL(files[0]));
  //     setUploadImage(event.target.files[0]);
  //   }
  // };

  const classes = useStyles();

  return (
    <MuiThemeProvider theme={SygefexTheme}>
      <div className={classes.toolbarMargin} />

      <div className={classes.bckgrdImage}>
        <LayoutDrawer>
          <Meta />
          <div className={classes.centered}>{children}</div>
        </LayoutDrawer>
      </div>
    </MuiThemeProvider>
  );
};

export default Page;
