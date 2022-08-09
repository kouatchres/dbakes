import { useUser } from '@auth0/nextjs-auth0';
import { Grid, Tab, Tabs } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import {
  createStyles,
  makeStyles,
  Theme,
  useTheme
} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ReceiptIcon from '@material-ui/icons/Receipt';
import SettingsIcon from '@material-ui/icons/Settings';
import clsx from 'clsx';
import React, { useState } from 'react';
import RouterLink from './routerLink';
import Sidebar from './Sidebar';

const drawerWidth = 300;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth
    },
    drawerHeader: {
      margin: 0,
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 0),
      justifyContent: 'flex-end',
      // necessary for content to be below app bar
      ...theme.mixins.toolbar
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      // backgroundColor: 'rgba(220,255,144,0.5)',
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
  })
);

const items = [
  'divider',
  {
    url: '/components/login',
    name: 'home',
    label: 'Home',
    Icon: HomeIcon
  },
  'divider',
  {
    // url: omponents/creates/newRegion",
    name: 'administration',
    label: 'Administration',
    Icon: ReceiptIcon,
    items: [
      {
        // url: omponents/show/results/candCodeResults",
        name: 'Results',
        label: 'Resultats Centre',
        items: [
          {
            url: '/components/creates/newCES',
            name: 'centerGenResults',
            label: 'General par centre'
          },
          {
            url: '/components/creates/newCESS',
            name: 'candResults',
            label: 'Candidat Individuel'
          }
        ]
      },
      {
        // url: omponents/show/results/candCodeResults",
        name: 'localization',
        label: 'Info Localization',
        items: [
          {
            url: '/components/region/RegionList',
            name: 'regionList',
            label: 'Region'
          },
          {
            url: '/components/division/DivisionList',
            name: 'divisionList',
            label: 'Departement'
          },
          {
            url: '/components/subdivision/SubdivisionList',
            name: 'subDivList',
            label: 'Arrondissement'
          },
          {
            url: '/components/town/TownList',
            name: 'townList',
            label: 'Ville'
          },
          {
            url: '/components/center/CenterList',
            name: 'centerList',
            label: 'Centre'
          },
          {
            url: '/components/show/lists/centerInfo',
            name: 'centerListDetails',
            label: 'Details Centre '
          }
        ]
      },
      {
        // url: "/components/show/results/candCodeResults",
        name: 'SubjSeries',
        label: 'Series & Matières',
        items: [
          {
            url: '/components/educType/createEducType',
            name: 'educType',
            label: 'Nouvel enseignement'
          },
          {
            url: '/components/educType/EducTypeList',
            name: 'educType',
            label: "Type d'enseignement"
          },
          {
            url: '/components/series/SeriesList',
            name: 'Series',
            label: 'Series'
          },
          {
            url: '/components/subject/SubjectList',
            name: 'subject',
            label: 'Matière'
          },
          {
            url: '/components/subjectSeries/SubjectSeriesList',
            name: 'SubjectsToSpecialty',
            label: 'Matières des series'
          }
        ]
      },
      {
        // url: omponents/show/results/candCodeResults",
        name: 'PhasesExamen',
        label: 'Phases Examen',
        items: [
          {
            url: '/components/creates/newPhase',
            name: 'examStages',
            label: 'Phase'
          },
          {
            url: '/components/creates/newRank',
            name: 'rank',
            label: 'Poste'
          },
          {
            url: '/components/creates/newSubject',
            name: 'subject',
            label: 'Matière'
          },
          {
            url: '/components/creates/newCES',
            name: 'SubjectsToSpecialty',
            label: 'Matières des series'
          }
        ]
      },
      {
        // url: omponents/show/results/candCodeResults",
        name: 'others',
        label: 'Autres',
        items: [
          {
            url: '/components/show/lists/allExams',
            name: 'exams',
            label: 'Examen'
          },
          {
            url: '/components/show/lists/allSessions',
            name: 'session',
            label: 'Session'
          },
          {
            url: '/components/show/lists/allExaminers',
            name: 'examiner',
            label: 'Examinateur'
          },
          {
            url: '/components/show/lists/allCES',
            name: 'SubjectsToSpecialty',
            label: 'Matières des series'
          }
        ]
      },
      {
        // url: omponents/show/results/candCodeResults",
        name: 'center',
        label: 'Centre',
        items: [
          {
            url: '/components/creates/newRegister',
            name: 'candidateAttendance',
            label: 'Region'
          },
          {
            url: '/components/creates/newRegister',
            name: 'centerCandSecretCodes',
            label: 'Listes des Anonymats'
          }
        ]
      },
      {
        // url: components/show/results/candCodeResults",
        name: 'MarkingPahse',
        label: 'Correction',
        items: [
          {
            url: '/components/creates/enterMarks',
            name: 'candidateAMarks',
            label: 'Notes des candidats'
          },
          {
            url: '/components/creates/newRegister',
            name: 'centerCandSecretCodes',
            label: 'Listes des Anonymats'
          }
        ]
      }
    ]
  },

  'divider',
  {
    // url: omponents/creates/newRegion",
    name: 'centreManagement',
    label: "Centre d'examen",
    Icon: ReceiptIcon,
    items: [
      {
        // url: omponents/creates/newRegion",
        name: 'examStages',
        label: "Phases de l'examen",
        items: [
          {
            // url: omponents/show/results/candCodeResults",
            name: 'centerExamPreps',
            label: 'Preparation',
            items: [
              {
                url: '/components/creates/newCES',
                name: 'registerCenterForExams',
                label: 'Inscrire centre aux examens'
              },
              {
                url: '/components/creates/newCESS',
                name: 'Specialties',
                label: 'Series offertes par centre'
              },
              {
                url: '/components/creates/newGroupCand',
                name: 'candidate',
                label: 'Renseignement Candidats'
              }
            ]
          },
          {
            // url: omponents/show/results/candCodeResults",
            name: 'centerExamRegistration',
            label: 'Inscription',
            items: [
              {
                url: '/components/creates/newRegister',
                name: 'registerCandidates',
                label: 'Inscrire Candidats aux examens'
              },
              {
                url: '/components/show/registeredCands',
                name: 'registerCandidates',
                label: 'Liste des candidats inscrits'
              },
              {
                url: '/components/show/registeredCands',
                name: 'registerCandidates',
                label: 'Details des candidats inscrits'
              }
            ]
          },
          {
            // url: omponents/show/results/candCodeResults",
            name: 'WritenPahse',
            label: 'Ecrite',
            items: [
              {
                url: '/components/creates/newAttendance',
                name: 'candidateAttendance',
                label: 'Appel'
              },
              {
                // url: omponents/creates/newGenPresence",
                name: 'candidateAttendanceList',
                label: 'Liste de Présence ',
                items: [
                  {
                    url: '/components/show/presence/allPresenceList',
                    name: 'candidateAttendanceList',
                    label: 'Générale'
                  },
                  {
                    url: '/components/show/presence/allSubjPresenceList',
                    name: 'subjAttendanceList',
                    label: 'Par matière'
                  },
                  {
                    url: '/components/show/presence/candPresence',
                    name: 'candidateCompleteAttendanceList',
                    label: 'Par candidat'
                  }
                ]
              },

              {
                url: '/components/creates/newRegister',
                name: 'centerCandSecretCodes',
                label: 'Listes des Anonymats'
              }
            ]
          },
          {
            // url: omponents/show/results/candCodeResults",
            name: 'MarkingPahse',
            label: 'Correction',
            items: [
              {
                url: '/components/creates/newMarks',
                name: 'candidateAMarks',
                label: 'Notes des candidats'
              },
              {
                url: '/components/creates/newRegister',
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
                url: '/components/show/genCenterResults',
                name: 'generalCenterResults',
                label: 'Généraux'
              },
              {
                url: '/components/show/results/candidateResults/resultsByCandRegNo',
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
    // url: omponents/creates/newRegion",
    name: 'candidateManagement',
    label: 'Candidat',
    Icon: ReceiptIcon,
    items: [
      {
        url: '/components/creates/newGroupCand',
        name: 'candidateInfomation',
        label: 'Reseignement Candidat'
      },
      {
        url: '/components/creates/newGroupCand',
        name: 'registerCandidateForExams',
        label: "S'iInscrire aux examens"
      },
      {
        url: '/components/show/results/candidateResults/allResultsByCandCode',
        name: 'candCodeResults',
        label: 'Resultat candidat'
      }
    ]
  },

  'divider',
  {
    // url: omponents/creates/newExaminer",
    name: 'Examiner',
    label: 'Examinateur',
    Icon: ReceiptIcon,
    items: [
      {
        // url: omponents/creates/newExaminer",
        name: 'examiner',
        label: 'Renseignement',
        items: [
          {
            url: '/components/creates/newExaminer',
            name: 'createExaminer',
            label: 'Cree Examinateur'
          },
          {
            url: '/components/modify/modifyExaminer',
            name: 'modifierExaminer',
            label: 'Modifier Examinateur'
          }
        ]
      },
      {
        // url: omponents/creates/newCenterExaminer",
        name: 'registerExaminer',
        label: 'Inscription',
        items: [
          {
            url: '/components/creates/newCenterExaminer',
            name: 'centerExaminer',
            label: "S'inscrire au Centre"
          },
          {
            url: '/components/modify/modifyDivision',
            name: 'modifierDivision',
            label: 'Examinateur'
          },
          {
            url: '/components/creates/newReport',
            name: 'examinerReport',
            label: 'Rapport '
          }
        ]
      },
      {
        url: '/components/creates/newReport',
        name: 'examinerReport',
        label: 'Rapport ',
        items: [
          {
            url: '/components/creates/newRegion',
            label: 'Cree Region'
          },
          {
            url: '/components/modify/modifyRegion',
            name: 'modifierRegion',
            label: 'Modification'
          }
        ]
      },
      {
        url: '/components/creates/newTown',
        name: 'town',
        label: 'Town',
        items: [
          {
            url: '/components/creates/newRegion',
            label: 'Cree Region'
          },
          {
            url: '/components/modify/modifyRegion',
            name: 'modifierRegion',
            label: 'Modification'
          }
        ]
      }
    ]
  },
  'divider',
  {
    url: '/components/creates/newCenter',
    name: 'settings',
    label: 'Settings',
    Icon: SettingsIcon,
    items: [
      {
        url: '/components/creates/newCenter',
        name: 'profile',
        label: 'Profile'
      },
      {
        url: '/components/creates/newCenter',
        name: 'insurance',
        label: 'Insurance'
      },
      'divider',
      {
        url: '/components/creates/newCenter',
        name: 'notifications',
        label: 'Notifications',
        Icon: NotificationsIcon,
        items: [
          {
            url: '/components/creates/newCenter',
            name: 'email',
            label: 'Email'
          },
          {
            url: '/components/creates/newCenter',
            name: 'desktop',
            label: 'Desktop',
            Icon: DesktopWindowsIcon,
            items: [
              {
                url: '/components/creates/newCenter',
                name: 'schedule',
                label: 'Schedule'
              },
              {
                url: '/components/creates/newCenter',
                name: 'frequency',
                label: 'Frequency'
              }
            ]
          },
          {
            url: '/components/creates/newCenter',
            name: 'sms',
            label: 'SMS'
          }
        ]
      }
    ]
  }
];

// interface DrawerProps {
//   children: any;
// }
const PersistentDrawerLeft = (props: { children: any }) => {
  const { children } = props;
  const classes = useStyles();
  const [value, setValue] = useState();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const { user, error, isLoading } = useUser();
  // const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  // const handleClick = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar
          style={{
            background:
              'linear-gradient( rgba(255,255,205,0.2) 22%,rgba(205,255,255,0.8) 90%)'

            // backgroundColor: 'rgba(190,197,111,0.5)'
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Grid container justify="space-between">
            <Grid
              item
              xs={2}
              alignItems="center"
              style={{
                display: 'grid',
                placeItems: 'center'
              }}
            >
              <Typography variant="h6" noWrap>
                SOCIF
              </Typography>
            </Grid>
            <Grid
              item
              xs={7}
              style={{
                display: 'grid',
                placeItems: 'center'
              }}
            >
              <Tabs
                value={value}
                onChange={(_, value) => setValue(value)}
                indicatorColor="secondary"
              >
                <Tab label="Candidate" />
                <Tab label="Prof" />
                <Tab label="Examiner" />
              </Tabs>
            </Grid>
            {!isLoading && !error && !user && (
              <RouterLink href="/api/auth/login" passHref>
                <Typography
                  style={{ fontFamily: 'Roboto', fontSize: '1.05rem' }}
                  variant="body2"
                  component="h6"
                >
                  Login
                </Typography>
              </RouterLink>
            )}

            {user?.picture && (
              <Grid
                container
                item
                xs={3}
                style={{
                  display: 'grid',
                  placeItems: 'center'
                }}
              >
                <Grid item xs={2}>
                  <img
                    id="image"
                    width="38rem"
                    height="38rem"
                    style={{ borderRadius: '50%' }}
                    src={user?.picture}
                    alt="Login img"
                  />
                </Grid>
                <Grid item xs={10}>
                  <RouterLink href="/api/auth/logout" passHref>
                    Logout
                  </RouterLink>
                </Grid>
              </Grid>
            )}
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
        {/* <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}

        <div
          style={{
            backgroundColor: 'rgba(92,75,3,0.2) ',
            // backgroundColor: 'rgb(25,25,25,0.2)',
            color: '#000'
          }}
        >
          <Divider />
          <Sidebar
            items={items}
            depthStep={undefined}
            depth={undefined}
            expanded={undefined}
          />
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        {children}
      </main>
    </div>
  );
};
export default PersistentDrawerLeft;
