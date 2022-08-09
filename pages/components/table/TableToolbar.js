import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import AddBoxIcon from '@material-ui/icons/AddBox';
import React, { useState } from 'react';
import SygefexTheme from '../utils/SygefexTheme';
import GlobalFilter from './GlobalFilter';

const useStyles = makeStyles(theme => ({
  root: {
    // paddingLeft: theme.spacing(2),

    backgroundColor: SygefexTheme?.palette?.primary?.dark,
    color: SygefexTheme?.palette?.common?.black,
    borderRadius: '0.3rem',
    marginBottom: '0.5rem',
    marginTop: '0.2rem',
    '& .MuiSvgIcon-root': {
      color: SygefexTheme?.palette?.common?.black,
      width: '7rem',
      height: '7rem'
    }
  },

  title: {
    paddingLeft: '2rem',
    flex: '5 5 90%',
    fontSize: 'clamp(0.2rem, 3vw + 0.5rem, 1.2rem)'
  }
}));

const TableToolbar = props => {
  const classes = useStyles();
  const [isAddPopupOpen, setIsAddPopupOpen] = useState(false);
  const [updatePopupState, setUpdatePopupState] = useState({
    isOpen: false,
    id: ''
  });
  const {
    numSelected,
    addUserHandler,
    deleteUserHandler,
    preGlobalFilteredRows,
    setGlobalFilter,
    globalFilter,
    handleAddPopupChange,
    title
  } = props;
  const ToolbarTitile = '';

  const handleUpdatePopupClose = () => {
    setUpdatePopupState(prev => ({
      ...prev,
      isOpen: false
    }));
  };
  const handleDeleteConfirmDialog = () => {
    setDeleteConfirmDialog(prev => ({
      ...prev,
      isOpen: false
    }));
  };

  return (
    <Toolbar className={classes.root}>
      <Tooltip title="Ajouter nouvel element">
        <IconButton onClick={handleAddPopupChange} className={classes.root}>
          <AddBoxIcon />
        </IconButton>
      </Tooltip>
      {
        <Typography
          className={classes.title}
          variant="subtitle1"
          id="tableTitle"
        >
          {title}
        </Typography>
      }

      {
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
      }
    </Toolbar>
  );
};

export default TableToolbar;
