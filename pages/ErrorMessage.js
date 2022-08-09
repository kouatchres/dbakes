import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles({
  ErrorStyles: {
    padding: '0.5rem',
    margin: '0.2rem',
    borderRadius: '0.3rem',
    border: '0.09rem solid red',
    background:
      'linear-gradient( rgba(205,255,205,0.2) 22%,rgba(205,255,255,0.8) 90%)'

    // borderLeft: '0.1rem solid red',
    // border: '0.05rem solid #829079',
    // backgroundColor: SygefexTheme?.palette?.primary?.dark
    // border: '0.1rem solid red'
  },
  p: {
    margin: '0.01rem',
    fontSize: '0.9rem'
    // fontWeight: 'bold'
  },
  strong: {
    fontSize: '01rem'
    // fontWeight: 'bold'
    // marginLeft: '0.15rem'
  }
});

const DisplayError = ({ error }) => {
  const classes = useStyles();
  if (!error || !error.message) return null;
  if (
    error.networkError &&
    error.networkError.result &&
    error.networkError.result.errors.length
  ) {
    return error.networkError.result.errors.map((error, i) => (
      <div className={classes.ErrorStyles} key={i}>
        <p className={classes.p}>
          <strong className={classes.strong}>Erreur réseaux!: </strong>
          {error.message.replace('Network error: ', '')}
        </p>
      </div>
    ));
  }
  return (
    <div className={classes.ErrorStyles}>
      <p className={classes.p}>
        <strong className={classes.strong}>Erreur!: </strong>
        {error.message.replace('Error: ', '')}
      </p>
    </div>
  );
};

DisplayError.defaultProps = {
  error: {}
};

export default DisplayError;
