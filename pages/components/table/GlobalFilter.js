import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import SygefexTheme from '../utils/SygefexTheme';

const useStyles = makeStyles(theme => ({
  search: {
    position: 'relative',
    backgroundColor: fade(theme.palette.common.white, 0.2),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.35)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto'
    }
  },
  searchIcon: {
    background: SygefexTheme?.palette?.primary?.main,
    borderTopLeftRadius: '0.5rem',
    borderBottomLeftRadius: '0.5rem',
    width: theme.spacing(6),
    // color: SygefexTheme?.palette?.primary?.main,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& .MuiSvgIcon-root': {
      color: '#000',
      zIndex: 5050,
      width: '5rem',
      height: '5rem'
    }
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    fontSize: '1.4rem',
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.3Dept)',
    // color: SygefexTheme?.palette?.common?.placeholder,
    fontWeight: 900,
    [theme.breakpoints.up('md')]: {
      width: 300
    }
  }
}));

const GlobalFilter = ({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter
}) => {
  const classes = useStyles();
  const count = preGlobalFilteredRows.length;

  // Global filter only works with pagination from the first page.
  // This may not be a problem for server side pagination when
  // only the current page is downloaded.

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        value={globalFilter || ''}
        onChange={e => {
          setGlobalFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
        }}
        placeholder={`${count} records...`}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  );
};

export default GlobalFilter;
