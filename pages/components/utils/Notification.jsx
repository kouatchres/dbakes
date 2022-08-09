import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/alert';
import React from 'react';
import SygefexTheme from './SygefexTheme';

const useStyles = makeStyles(theme => ({
  root: {
    left: theme.spacing(20),
    position: 'relative',
    '& .MuiAlert-standardSuccess .MuiAlert-icon': {
      color: SygefexTheme?.palette?.secondary?.main
    }
  },
  snackbarStyleViaContentProps: {
    backgroundColor: 'orange'
  },
  snackbarStyleViaNestedContent: {
    backgroundColor: 'lightgreen',
    color: 'black'
  }
}));
function Notification(props) {
  const classes = useStyles();
  const { notify, setNotify } = props;

  const handleClose = (e, reason) => {
    if (reason === 'clikaway') {
      return;
    }
    setNotify(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div style={{ position: 'relative' }}>
      <Snackbar
        // bodyStyle={{ backgroundColor: 'teal', color: 'coral' }}
        className={classes.root}
        open={notify.isOpen}
        onClose={handleClose}
        autoHideDuration={3000}
        // anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
      >
        <Alert severity={notify?.type} onClose={handleClose}>
          {notify.message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Notification;
