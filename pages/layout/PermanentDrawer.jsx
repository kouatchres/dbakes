import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import HomeIcon from '@material-ui/icons/Home';
import ReceiptIcon from '@material-ui/icons/Receipt';
import NotificationsIcon from '@material-ui/icons/Notifications';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import SettingsIcon from '@material-ui/icons/Settings';
import NavigateNextTwoToneIcon from '@material-ui/icons/NavigateNextTwoTone';
import PermContactCalendarRoundedIcon from '@material-ui/icons/PermContactCalendarRounded';
import BugReportTwoToneIcon from '@material-ui/icons/BugReportTwoTone';
import { CSSTransition } from 'react-transition-group';
import Sidebar from './Sidebar';
import Link from 'next/link';

const drawerWidth = 300;

const useStyles = makeStyles(theme => ({
  toolbars: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: '2rem'
  },
  root: {
    display: 'flex'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    backgroundColor: '#ede6b9'
  },
  drawerPaper: {
    color: '#829079',

    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignitems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
}));

const items = [
  'divider',
  {
    url: '../../login',
    name: 'home',
    label: 'Home',
    Icon: HomeIcon
  },
  'divider',
  {
    // url: "../../creates/newRegion",
    name: 'administration',
    label: 'Administration',
    Icon: ReceiptIcon,
    items: [
      {
        // url: "../../show/results/candCodeResults",
        name: 'Results',
        label: 'Resultats Centre',
        items: [
          {
            url: '../../creates/newCES',
            name: 'centerGenResults',
            label: 'General par centre'
          },
          {
            url: '../../creates/newCESS',
            name: 'candResults',
            label: 'Candidat Individuel'
          }
        ]
      },
      {
        // url: "../../show/results/candCodeResults",
        name: 'localization',
        label: 'Info Localization',
        items: [
          {
            url: '../../show/lists/allRegions',
            name: 'regionList',
            label: 'Region'
          },
          {
            url: '../../show/lists/allDivs',
            name: 'divisionList',
            label: 'Departement'
          },
          {
            url: '../../show/lists/allSubDivs',
            name: 'subDivList',
            label: 'Arrondissement'
          },
          {
            url: '../../show/lists/allTown',
            name: 'townList',
            label: 'Ville'
          },
          {
            url: '../../show/lists/allCenters',
            name: 'centerList',
            label: 'Centre'
          },
          {
            url: '../../show/lists/centerInfo',
            name: 'centerListDetails',
            label: 'Details Centre '
          }
        ]
      },
      {
        // url: "../../show/results/candCodeResults",
        name: 'SubjSeries',
        label: 'Series & Matières',
        items: [
          {
            url: '../../show/lists/allEducTypes',
            name: 'educType',
            label: "Type d'enseignement"
          },
          {
            url: '../../creates/newSubject',
            name: 'specialty',
            label: 'Series'
          },
          {
            url: '../../creates/newSubject',
            name: 'subject',
            label: 'Matière'
          },
          {
            url: '../../creates/newCES',
            name: 'SubjectsToSpecialty',
            label: 'Matières des series'
          }
        ]
      },
      {
        // url: "../../show/results/candCodeResults",
        name: 'PhasesExamen',
        label: 'Phases Examen',
        items: [
          {
            url: '../../creates/newPhase',
            name: 'examStages',
            label: 'Phase'
          },
          {
            url: '../../creates/newRank',
            name: 'rank',
            label: 'Poste'
          },
          {
            url: '../../creates/newSubject',
            name: 'subject',
            label: 'Matière'
          },
          {
            url: '../../creates/newCES',
            name: 'SubjectsToSpecialty',
            label: 'Matières des series'
          }
        ]
      },
      {
        // url: "../../show/results/candCodeResults",
        name: 'others',
        label: 'Autres',
        items: [
          {
            url: '../../show/lists/allExams',
            name: 'exams',
            label: 'Examen'
          },
          {
            url: '../../show/lists/allSessions',
            name: 'session',
            label: 'Session'
          },
          {
            url: '../../show/lists/allExaminers',
            name: 'examiner',
            label: 'Examinateur'
          },
          {
            url: '../../show/lists/allCES',
            name: 'SubjectsToSpecialty',
            label: 'Matières des series'
          }
        ]
      },
      {
        // url: "../../show/results/candCodeResults",
        name: 'center',
        label: 'Centre',
        items: [
          {
            url: '../../creates/newRegister',
            name: 'candidateAttendance',
            label: 'Region'
          },
          {
            url: '../../creates/newRegister',
            name: 'centerCandSecretCodes',
            label: 'Listes des Anonymats'
          }
        ]
      },
      {
        // url: "../../show/results/candCodeResults",
        name: 'MarkingPahse',
        label: 'Correction',
        items: [
          {
            url: '../../creates/enterMarks',
            name: 'candidateAMarks',
            label: 'Notes des candidats'
          },
          {
            url: '../../creates/newRegister',
            name: 'centerCandSecretCodes',
            label: 'Listes des Anonymats'
          }
        ]
      }
    ]
  },

  'divider',
  {
    // url: "../../creates/newRegion",
    name: 'centreManagement',
    label: "Centre d'examen",
    Icon: ReceiptIcon,
    items: [
      {
        // url: "../../creates/newRegion",
        name: 'examStages',
        label: "Phases de l'examen",
        items: [
          {
            // url: "../../show/results/candCodeResults",
            name: 'centerExamPreps',
            label: 'Preparation',
            items: [
              {
                url: '../../creates/newCES',
                name: 'registerCenterForExams',
                label: 'Inscrire centre aux examens'
              },
              {
                url: '../../creates/newCESS',
                name: 'Specialties',
                label: 'Series offertes par centre'
              },
              {
                url: '../../creates/newGroupCand',
                name: 'candidate',
                label: 'Renseignement Candidats'
              }
            ]
          },
          {
            // url: "../../show/results/candCodeResults",
            name: 'centerExamRegistration',
            label: 'Inscription',
            items: [
              {
                url: '../../creates/newRegister',
                name: 'registerCandidates',
                label: 'Inscrire Candidats aux examens'
              },
              {
                url: '../../show/registeredCands',
                name: 'registerCandidates',
                label: 'Liste des candidats inscrits'
              },
              {
                url: '../../show/registeredCands',
                name: 'registerCandidates',
                label: 'Details des candidats inscrits'
              }
            ]
          },
          {
            // url: "../../show/results/candCodeResults",
            name: 'WritenPahse',
            label: 'Ecrite',
            items: [
              {
                url: '../../creates/newAttendance',
                name: 'candidateAttendance',
                label: 'Appel'
              },
              {
                // url: "../../creates/newGenPresence",
                name: 'candidateAttendanceList',
                label: 'Liste de Présence ',
                items: [
                  {
                    url: '../../show/presence/allPresenceList',
                    name: 'candidateAttendanceList',
                    label: 'Générale'
                  },
                  {
                    url: '../../show/presence/allSubjPresenceList',
                    name: 'subjAttendanceList',
                    label: 'Par matière'
                  },
                  {
                    url: '../../show/presence/candPresence',
                    name: 'candidateCompleteAttendanceList',
                    label: 'Par candidat'
                  }
                ]
              },

              {
                url: '../../creates/newRegister',
                name: 'centerCandSecretCodes',
                label: 'Listes des Anonymats'
              }
            ]
          },
          {
            // url: "../../show/results/candCodeResults",
            name: 'MarkingPahse',
            label: 'Correction',
            items: [
              {
                url: '../../creates/newMarks',
                name: 'candidateAMarks',
                label: 'Notes des candidats'
              },
              {
                url: '../../creates/newRegister',
                name: 'centerCandSecretCodes',
                label: 'Listes des Anonymats'
              }
            ]
          },
          {
            name: 'resultsPahse',
            label: 'Resultats',
            items: [
              {
                url: '../../show/genCenterResults',
                name: 'generalCenterResults',
                label: 'Généraux'
              },
              {
                url: '../../show/results/candidateResults/resultsByCandRegNo',
                name: 'candREgNoResults',
                label: 'Personel'
              }
            ]
          }
        ]
      }
    ]
  },

  'divider',
  {
    // url: "../../creates/newRegion",
    name: 'candidateManagement',
    label: 'Candidat',
    Icon: ReceiptIcon,
    items: [
      {
        url: '../../creates/newGroupCand',
        name: 'candidateInfomation',
        label: 'Reseignement Candidat'
      },
      {
        url: '../../creates/newGroupCand',
        name: 'registerCandidateForExams',
        label: "S'iInscrire aux examens"
      },
      {
        url: '../../show/results/candidateResults/allResultsByCandCode',
        name: 'candCodeResults',
        label: 'Resultat candidat'
      }
    ]
  },

  'divider',
  {
    // url: "../../creates/newExaminer",
    name: 'Examiner',
    label: 'Examinateur',
    Icon: ReceiptIcon,
    items: [
      {
        // url: "../../creates/newExaminer",
        name: 'examiner',
        label: 'Renseignement',
        items: [
          {
            url: '../../creates/newExaminer',
            name: 'createExaminer',
            label: 'Cree Examinateur'
          },
          {
            url: '../../modify/modifyExaminer',
            name: 'modifierExaminer',
            label: 'Modifier Examinateur'
          }
        ]
      },
      {
        // url: "../../creates/newCenterExaminer",
        name: 'registerExaminer',
        label: 'Inscription',
        items: [
          {
            url: '../../creates/newCenterExaminer',
            name: 'centerExaminer',
            label: "S'inscrire au Centre"
          },
          {
            url: '../../modify/modifyDivision',
            name: 'modifierDivision',
            label: 'Examinateur'
          },
          {
            url: '../../creates/newReport',
            name: 'examinerReport',
            label: 'Rapport '
          }
        ]
      },
      {
        url: '../../creates/newReport',
        name: 'examinerReport',
        label: 'Rapport ',
        items: [
          { url: '../../creates/newRegion', label: 'Cree Region' },
          {
            url: '../../modify/modifyRegion',
            name: 'modifierRegion',
            label: 'Modification'
          }
        ]
      },
      {
        url: '../../creates/newTown',
        name: 'town',
        label: 'Town',
        items: [
          { url: '../../creates/newRegion', label: 'Cree Region' },
          {
            url: '../../modify/modifyRegion',
            name: 'modifierRegion',
            label: 'Modification'
          }
        ]
      }
    ]
  },
  'divider',
  {
    url: '../../creates/newCenter',
    name: 'settings',
    label: 'Settings',
    Icon: SettingsIcon,
    items: [
      { url: '../../creates/newCenter', name: 'profile', label: 'Profile' },
      { url: '../../creates/newCenter', name: 'insurance', label: 'Insurance' },
      'divider',
      {
        url: '../../creates/newCenter',
        name: 'notifications',
        label: 'Notifications',
        Icon: NotificationsIcon,
        items: [
          { url: '../../creates/newCenter', name: 'email', label: 'Email' },
          {
            url: '../../creates/newCenter',
            name: 'desktop',
            label: 'Desktop',
            Icon: DesktopWindowsIcon,
            items: [
              {
                url: '../../creates/newCenter',
                name: 'schedule',
                label: 'Schedule'
              },
              {
                url: '../../creates/newCenter',
                name: 'frequency',
                label: 'Frequency'
              }
            ]
          },
          { url: '../../creates/newCenter', name: 'sms', label: 'SMS' }
        ]
      }
    ]
  }
];

const NavItem = ({ children, icon }) => {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a
        component={Link}
        to="/"
        className="icon-button"
        onClick={() => setOpen(!open)}
      >
        {icon}
      </a>
      {open && children}
    </li>
  );
};

export default function PersistentDrawerLeft(props) {
  const { window, children, session } = props;

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        style={{ backgroundColor: '#829079', color: '#ede6b9' }}
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <Grid container justify="center" alignitems="center">
            <Grid item xs={1}>
              <Grid container direction="column" justify="center">
                <Grid item>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, open && classes.hide)}
                  >
                    <MenuIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2}>
              <Grid
                container
                justify="center"
                alignitem="center"
                direction="column"
              >
                <Grid item>
                  <Typography variant="h6" noWrap align="center">
                    SYGINEX
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={9}>
              <Grid container justify="center" align="center" direction="row">
                <Grid
                  item
                  style={{
                    // alignContent: 'center',
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  <NavItem icon={<AssignmentIndIcon />} button>
                    <DropdownMenu></DropdownMenu>
                  </NavItem>
                </Grid>

                <Grid
                  item
                  style={{
                    // alignContent: 'center',
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  <NavItem icon={<AssignmentTurnedInIcon />} button>
                    <DropdownMenu></DropdownMenu>
                  </NavItem>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <div style={{ backgroundColor: '#fff', color: '#829079' }}>
          <Divider />
          <Sidebar items={items} />
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        {children}
      </main>
    </div>
  );
}
