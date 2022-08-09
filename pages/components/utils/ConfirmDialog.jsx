import { Button, Typography } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import SygefexTheme from './SygefexTheme';

const useStyles = makeStyles(theme => ({
  actions: {
    display: 'grid',
    justifyContents: 'space-evenly',
    placeItems: 'center'
  }
}));

const ConfirmDialog = props => {
  const classes = useStyles();
  const { title = '', content, isOpen = false, onClose, onConfirm } = props;
  console.log({ props });
  const handleClose = event => {
    onClose(event.target.value);
  };

  return (
    <Dialog
      title={title}
      content={content}
      open={isOpen}
      onClose={handleClose}
      onConfirm={onConfirm}
      PaperProps={{
        style: {
          backgroundColor: SygefexTheme?.palette?.primary?.dark,
          color: SygefexTheme?.palette?.common?.black,

          // backgroundColor: 'transparent',
          backgroundImage:
            'linear-gradient(75deg,rgba(255,545,155,0.5) 22%,rgba(22,245,485,0.2) 48%, rgba(22,32,16,0.25) 80%)'
          // backgroundImage: "url('/backgrdImages/goldern_feast.jpg')"
        }
      }}
    >
      <DialogTitle>
        <Typography
          style={{
            color: SygefexTheme?.palette?.common?.black,
            fontSize: '1.4rem'
          }}
          gutterBottom
          variant="h5"
          component="h6"
        >
          {title}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Typography
            variant="h1"
            style={{
              // textAlign: 'center',
              color: SygefexTheme?.palette?.common?.black,
              fontSize: '1.1rem'
            }}
          >
            {content}
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions className={classes.actions}>
        <Button onClick={onClose}>Non</Button>
        <Button onClick={onConfirm}>Oui</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
