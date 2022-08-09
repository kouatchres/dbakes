import { orange } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const sygefexBlue = '#04e4b2';
const sygefexGreen = '#34415e';

const sygefexWhite = '#ffffff';
const arcAppBar = '#acfacf';

const sygefexBackground = '#c0c0c1';
const tableRowWhite = '#fff';
const tableRowHighlight = '#ede6b9';
const sideBarSecond = '#19857b';

const arcBlue = '#8da0af';
const arcOrange = '#FFBA60';
const sygefexError = '#Ff0000';
const sygefexBlack = '#000';

const syginexTableRowBlue = '#e4ebf8';
const syginexBlue = '#233660';
const syginexGrey = '#DCDCDC	';
const syginexBlack = '#000	';
const syginexButtonBkGrd = 'rgba(255,255,255,0.4)';
const syginexImgBtnBorder = 'rgba(255,255,255,0.6)';
const syginexFormTitleBfGrd = 'rgba(255,255,255,0.8)';
const syginexMenuSelectPaper = 'rgba(215,205,155,0.99)';
const syginexMenuSelectPaper3 = 'rgba(215,120,102,0.9)';
const syginexMenuSelectPaper4 = 'rgba(215,220,222,0.5)';
const syginexPlaceholderTxt = '#945826';
// const syginexPlaceholderTxt = '#b9925e';

// const syginexLightBlue = '#506DAD';
const syginexLightBlue = '#515f8e';

const syginexMainBlue = '#010e1e';
const syginexBkgroundBlue = '#f3fcff';

const syginexBkgroundBrown = '#bbb2a2';

const SygefexTheme = createMuiTheme({
  '@global': {
    body: {
      padding: 0,
      margin: 0,
      height: '140%',
      width: '100%'
    }
  },
  palette: {
    common: {
      black: `${syginexBlack}`,
      white: `${tableRowWhite}`,
      placeholder: `${syginexPlaceholderTxt}`,
      brown: `${sygefexBackground}`,
      tableBlgrdHead: `${syginexButtonBkGrd}`,
      subTitle: `${syginexImgBtnBorder}`
    },
    primary: {
      main: `${syginexBlue}`,
      light: `${syginexLightBlue}`,
      tableBkgrd: `${syginexMenuSelectPaper4}`,
      dark: `${syginexMenuSelectPaper4}`
    },
    secondary: {
      light: `${syginexLightBlue}`,
      dark: `${syginexImgBtnBorder}`,
      main: `${sygefexWhite}`
    },

    background: {
      default: `${syginexFormTitleBfGrd}`,
      error: { main: `${sygefexError}` },
      paper: `${syginexBkgroundBlue}`
    },

    typography: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
      body2: {
        fontFamily: 'Roboto',
        fontSize: '2rem'
      },
      // body1: {
      //   fontFamily: 'Roboto',
      //   fontSize: 100,
      //   fontSize: '2rem'
      // },

      h6: {
        fontFamily: 'Roboto',
        fontSize: 'clamp(0.2rem, 2vw + 0.5rem, 1.1rem)'
      },
      h5: {
        fontFamily: 'Roboto',
        fontSize: 'clamp(0.4rem, 2vw + 0.5rem, 1.5rem)',
        fontWeight: 400
      },
      form_header: {
        fontFamily: 'Roboto',
        fontSize: '8rem',
        fontWeight: 1000
      }
    },
    shape: {
      borderRadius: '0.4rem'
    },
    spacing: 2
  },
  overrides: {
    MuiMenuItem: {
      root: {
        fontSize: '1.1rem',
        minHeight: '25px'
        // color: SygefexTheme?.palette?.primary?.main
      }
    },

    MuiInputLabel: {
      root: {
        color: `${syginexPlaceholderTxt}`,
        // fontSize: '1rem',
        fontSize: 'clamp(0.8rem, 2vw + 0.2rem, 01.1rem)',

        fontWeight: 700,
        fontFamily: 'Comic Sans MS'
      },

      formControl: {
        top: '-0.4rem',
        left: '0.3rem'
      }
    },

    MuiToolbar: {
      regular: {
        minHeight: '0.7rem',
        maxHeight: '1rem',
        paddingRight: '02rem',
        paddingLeft: '02rem',
        fontWeight: 'normal'
      },
      root: {
        background: `${syginexFormTitleBfGrd}`
      }
    },

    PrivateSwitchBase: {
      input: {
        width: '70%',
        top: 'auto',
        left: 0,
        height: '50%'
      },
      root: {
        color: '#4520ab',
        padding: '0.3rem'
      }
    },
    MuiTablePagination: {
      caption: {
        fontSize: '1rem'
      },
      menuItem: {
        backgroundColor: `${syginexMenuSelectPaper4}`,
        color: `${syginexBlue}`
      },
      menu: {
        backgroundColor: `${syginexMenuSelectPaper4}`,
        color: `${syginexBlue}`
      },
      select: {
        fontSize: '01rem'
      },
      toolbar: {
        maxHeight: '2.5rem',
        backgroundColor: `${syginexMenuSelectPaper4}`,
        minHeight: '1rem',
        fontSize: '01rem',
        color: `${sygefexBlack}`,
        fontFamily: 'Roboto',
        fontWeight: 700,
        borderTop: `0.2rem solid ${syginexBlue}`,
        borderBottom: `0.2rem solid ${syginexBlue}`,
        borderBottomLeftRadius: '0.3rem',
        borderBottomRightRadius: '0.3rem'
      }
    },
    MuiAlert: {
      root: {
        fontSize: '0.85rem'
      },
      standardSuccess: {
        backgroundColor: `${syginexFormTitleBfGrd}`,
        color: `${syginexBlack}`
      },
      icon: {
        color: `${sygefexWhite}`
      }
    },

    MuiSelect: {
      root: {
        paddingBottom: '0.3rem',
        paddingTop: '0.5rem',
        height: '1.2rem',
        borderRadius: '0.3rem'
        // fontSize: '1.5rem'
      },
      icon: {
        top: 'calc(40% - 12px)',
        width: '2rem',
        fontWeight: 500,
        fontSize: '1.7rem',
        fill: `${syginexBlack}`
      }
    },
    MuiMenu: {
      paper: {
        backgroundColor: `${syginexMenuSelectPaper}`
      }
    },
    MuiDialogActions: {
      root: {
        width: '30rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        justifyContents: 'space-evenly',
        placeItems: 'center',
        backgroundColor: `${syginexMenuSelectPaper}`
      }
    },

    MuiOutlinedInput: {
      input: {
        // fontSize: '1.2rem',
        fontSize: 'clamp(0.8rem, 2vw + 0.2rem, 01.2rem)',
        fontWeight: 700,
        paddingBottom: '0.53rem',
        paddingTop: '0.53rem',
        color: '#000'
      }
    },
    //
    MuiTableRow: {
      root: {
        '&:input': {
          widht: '20rem'
        },
        '&:nth-child': {
          // background: 'rgba(255,255,255,0.1)',
          color: `${syginexBlack}`,
          borderLeft: `0.03rem solid ${syginexLightBlue}`
        },
        '&:nth-child(2n)': {
          backgroundColor: syginexButtonBkGrd
          // borderLeft: `0.03rem solid ${syginexLightBlue}`
          // backgroundColor: tableRowWhite,
        },
        '&:nth-child(2n+1)': {
          // borderLeft: `0.03rem solid ${syginexLightBlue}`
          // background: `${syginexTableRowBlue}`
        },

        '&:hover': {
          backgroundColor: `${syginexGrey}`
          // backgroundColor: '#b9915e'
        }
      }
    },
    // PrivateNotchedOutline: {
    //   legendLebelled: {
    //     fontSize: '5rem'
    //   }
    // },
    MuiTableHead: {
      root: {
        height: '1rem',
        position: 'sticky',
        top: 0,
        paddingTop: '1rem',
        paddingBottom: '1rem'
      }
    },

    MuiFormGroup: {
      root: {
        fontSize: '1.5rem',
        fontWeight: 400,
        marginBottom: 0,
        fontFamily: 'Comic Sans MS'
      },
      row: {
        marginBottom: 0
      }
    },
    MuiFormControlLabel: {
      root: {
        color: `${syginexBlack}`,
        // fontSize: '0.8rem',

        fontWeight: 400,
        fontFamily: 'Comic Sans MS'
      },
      label: {
        color: `${syginexBlack}`,
        fontSize: 'clamp(0.8rem, 2vw + 0.2rem, 01.1rem)',
        // fontSize: '1.2rem',
        fontWeight: 700
      }
    },
    MuiIconButton: {
      root: {
        padding: '0.001rem',
        paddingLeft: '0.014rem',
        fontSize: '0.9rem'
      },
      label: {
        display: 'grid',
        placeItems: 'right'
      }
    },

    MuiBackdrop: {
      backgroundColor: `${syginexMenuSelectPaper3}`
    },

    MuiTableCell: {
      root: {
        paddingTop: '0.01rem',
        paddingBottom: '0.01rem',
        paddingLeft: '0.3rem',
        fontWeight: 'bold',
        borderLeft: `0.05rem solid ${syginexBlue}`,
        borderRight: `0.05rem solid ${syginexBlue}`,
        color: `${syginexBlack}`,
        borderBottom: `0.05rem solid ${syginexBlue}`
      },
      head: {
        textAlign: 'center',

        justifyContent: 'left',
        fontWeight: 500,
        borderBottom: `0.2rem solid  ${syginexBlue}`,
        borderTop: `0.2rem solid ${syginexBlue}`,
        marginTop: '1rem',
        backgroundColor: `${syginexMenuSelectPaper4}`,
        // backgroundColor: `${syginexLightBlue}`,
        // '&:first-child': {
        //   borderLeft: '0'
        // },
        fontFamily: 'Roboto'
      },
      footer: {
        justifyContent: 'center'
      }
    },

    MuiFormControl: {
      root: {
        alignItems: 'center',
        color: '#044562',
        fontSize: '1.5rem'
      },
      marginNormal: {
        // margin: '0.5rem',
        marginTop: '0.5rem',
        marginBottom: '0.5rem'
      }
    },

    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: `${sygefexGreen}`,
        color: `${arcAppBar}`
      }
    },

    MuiTypography: {
      alignCenter: {
        fontSize: '1.5rem'
      }
    },

    MuiPickersCalendarHeader: {
      transitionContainer: {
        height: '2.5rem'
      },
      iconButton: {
        height: '2rem'
      },
      daysHeader: {
        fontSize: '1.3rem'
      }
    },

    MuiPickersToolbarText: {
      toolbarTxt: {
        fontSize: '1.3rem',
        padding: '0.5rem'
      }
    },
    MuiPickersDatePickerRoot: {
      toolbar: {
        flexDirection: 'row',
        alignItems: 'center'
      }
    },
    MuiGrid: {
      root: {
        marginBottom: '0.3rem'
        // height: '1.2rem'

        // alignContent: 'center',
        // justifyItems: 'center'
      }
    },
    MuiInputBase: {
      input: {
        fontSize: '0.5rem',
        fontFamily: 'Roboto',
        height: '1.2rem',
        border: `solid 0.075rem ${syginexBlue}`,
        borderRadius: '0.3rem',
        backgroundColor: 'rgb(255,255,255,0.5)'
      },
      root: {
        width: '20rem'
      }
    },

    MuiRadio: {
      root: {
        size: 'medium'
        //  fontSize:"0.3rem",
      }
    },

    MuiSvgIcon: {
      root: {
        width: '1.4rem',
        fontSize: '1.7rem',
        height: 'auto',
        fill: ''
      }
    },

    MTableToolbar: {
      actions: {
        color: '#000',
        fontSize: '2rem',
        backgroundColor: `${sygefexWhite}`,
        borderRadius: '0.2rem'
      },
      title: {
        width: '40%',
        overflow: 'none'
      },
      searchField: {
        maxWidth: '15rem'
      }
    },

    MuiButton: {
      root: {
        backgroundColor: `${syginexButtonBkGrd}`,
        textTransform: 'none',
        marginBottom: '0.3rem',
        marginTop: '0.4rem',
        border: `solid 0.05rem  ${syginexBlue}`,
        // border: 'solid 0.1rem rgba(205,05,55)',
        padding: '.1rem',
        borderRadius: '0.3rem',
        width: '10rem',
        variant: 'outlined',
        '&:hover': {
          backgroundColor: '#bcf2'
        }
      },
      text: {
        fontFamily: 'Roboto',
        fontSize: 'clamp(0.8rem, 2vw + 0.3rem, 01.3rem)',
        fontWeight: 700,
        color: `${syginexBlack}`
      }
    },
    MuiCheckbox: {
      colorSecondary: {
        padding: 'inherit'
      }
    },
    MuiFormLabel: {
      root: {
        fontSize: 'clamp(0.8rem, 2vw + 0.2rem, 01.1rem)',

        fontWeight: 900,
        color: `${syginexPlaceholderTxt}`,
        // fontFamily: 'Roboto'
        fontFamily: 'Comic Sans MS'
      }
    },
    PrivateRadioButtonIcon: {
      root: {
        color: `${syginexPlaceholderTxt}`
      }
    },

    MuiFormHelperText: {
      root: {
        color: orange[900],
        '&$error': {
          '&.MuiFormHelperText-root.Mui-error': {
            color: orange[900]
          }
        }
      }
    }
  },

  props: {
    MuiTextField: {
      type: 'text',
      variant: 'outlined',
      color: 'primary',
      fontSize: '0.9rem'
    }
  }
});

export default SygefexTheme;
