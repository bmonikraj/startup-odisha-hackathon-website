import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import red from '@material-ui/core/colors/red';
import lightBlue from '@material-ui/core/colors/lightBlue';
import Badge from '@material-ui/core/Badge';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';

import HeadLogo from './HeadLogo.png';

import firebase from './firebase.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as LI
} from "react-router-dom";

import Banner from './Hackathon.jpg';

const primary = red[500]; // #F44336
const footerText = lightBlue[50];

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  card: {
    height: '100%',
    width : '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '50%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: '#0d47a1',
    color : 'white',
    padding: theme.spacing(6),
  },
    root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  headerBadge: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    }
  },
  metric: {
    borderWidth: '4px',
    borderStyle: 'solid',
    color: theme.palette.primary.main,
    borderColor: theme.palette.secondary.light,
    borderRadius: '50%',
    width: '1.5em',
    height: '1.5em',
    margin: '0 auto'
  }
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Copyright() {
  return (
    <Typography variant="body2" color="red" align="center">
      {'Copyright © Startup Odisha - Govt of Odisha '}
      <Link color="inherit" href="https://startupodisha.gov.in/">
        https://startupodisha.gov.in/
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Home() {
  const classes = useStyles();
  const [totalRegistration, setTotalRegistration] = useState("");

  useEffect(() => {
    var refD = firebase.database().ref();
    refD.once("value")
        .then(function(snapshot) {
          setTotalRegistration(snapshot.numChildren()); 
        });
  })

  return (
    <React.Fragment>
      <CssBaseline />
      
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <LI to="/"><img height="50px" width="50px" src={HeadLogo}/></LI>
          </IconButton>
          <Typography variant="subtitle1" className={classes.title}>
              STARTUP ODISHA
          </Typography>
          <Badge badgeContent={totalRegistration} color="secondary">
            <span className={classes.headerBadge}># Submissions</span> &nbsp; <WbIncandescentIcon />
          </Badge>
          &nbsp; &nbsp; &nbsp; &nbsp; 
          <Button variant='contained'><LI to="/" color="inherit" style={{'fontSize' : '10px', 'fontWeight' : 'bold'}}>Home</LI></Button>
          &nbsp;
          <Button variant='contained'><LI to="/register" color="inherit" style={{'fontSize' : '10px', 'fontWeight' : 'bold'}}>Register</LI></Button>
        </Toolbar>
      </AppBar>
      <main>
         
          <Grid  spacing={4}>
            <Grid item xs={12} sm={6} md={12}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={Banner}
                    title="STARTUP ODISHA COVID-19 CHALLENGE 2020"
                  />
                  
                </Card>
              </Grid>
          </Grid>
        
        <div className={classes.heroContent}>
          <Container>
            <Typography component="h4" variant="h4" align="center" color="primary" gutterBottom>
              <b>STARTUP ODISHA COVID-19 CHALLENGE on <i>“Fighting Back nCOVID-19”</i></b>
            </Typography>
            <Typography variant="subtitle1" align="center" color="black" paragraph>
              <b>Startup Odisha proposes to conduct a virtual hackathon on fighting back nCOVID-19.</b>
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Card variant="outlined">
                    <CardContent>
                      <Typography color="textSecondary" gutterBottom>
                        # <u><b>Submissions as of now</b></u>
                      </Typography>
                      <Typography className={classes.metric} align="center" variant="h2">
                        {totalRegistration}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant='contained' color="secondary"><LI to="/register" style={{color: "white"}}>REGISTER NOW</LI></Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
  
  <Container>
    <Typography component="h5" variant="h5" align="center" color="primary" gutterBottom>
              <u><b>About</b></u>
            </Typography>
        <Typography variant="body1" align="justify" color="textSecondary" paragraph>
             The government of Odisha has taken all necessary steps and ensure the preparedness to fight
against the pandemic of COVID-19- the Corona Virus. With the active support of the people of
Odisha, The government is trying to contain the spread of the Virus in the state. Further, to
support the government in empowering the citizens with the right information and taking
precautions as per the advisories being issued by the Government.
Further, innovators and Startups are requested to participate in the challenge by providing their
innovative technologies and innovative solutions, Bioinformatics, datasets, Apps for diagnosis
etc that can be leveraged for strengthening the fight against Coronavirus.
           </Typography>
  </Container>

  <Container>
    <Typography component="h5" variant="h5" align="center" color="primary" gutterBottom>
              <u><b>Eligibility Criteria</b></u>
            </Typography>
     <Typography variant="body1" align="justify" color="black" paragraph>
              <ul>
                <li>
                 Individuals or Startups working on or developed any innovative solution that will be used
to fight against Coronavirus.
                </li>
                <li>
                  For the product to be developed as part of COVID 19 Innovation Challenge, if any
IPR/Patent is being used, contesting entity must possess the legitimate rights to use the
IPR/Patents.
                </li>
                
              </ul>
              
           </Typography>
  </Container>

  <Container>
    <Typography component="h5" variant="h5" align="center" color="primary" gutterBottom>
              <u><b>Timeline</b></u>
            </Typography>
     <Typography variant="body1" align="justify" color="black" paragraph>
              <ul>
                <li>
                 <b>Launch of the challenge-</b> : 24th March, 2020
                </li>
                <li>
                  <b>Last date for submission of the solution-</b> : 30th March, 2020
                </li>
              </ul>
              
           </Typography>
  </Container>

  

  <Container>
    <Typography component="h5" variant="h5" align="center" color="primary" gutterBottom>
              <u><b>Focus Area</b></u>
            </Typography>
     <Typography variant="body1" align="justify" color="black" paragraph>
              <ul>
                <li>
                  Risk communication and community engagement
                </li>
                <li>
                  Public health measures
                </li>
                <li>
                  Case management and health services
                </li>
                <li>
                  Infection prevention and control
                </li>
                <li>
                  Surveillance and risk and severity assessments
                </li>
                <li>
                  Logistics, procurement and supply management
                </li>
                <li>
                  Maintenance of essential services
                </li>
              </ul>
           </Typography>
  </Container>

  <Container>
    <Typography component="h5" variant="h5" align="center" color="primary" gutterBottom>
              <u><b>Terms and Conditions</b></u>
            </Typography>
          <Typography variant="body1" align="center" color="primary" gutterBottom>
              Following are the guidelines for Challenge which need to be followed by each participant and team:
            </Typography>
     <Typography variant="body1" align="justify" color="black" paragraph>
              <ul>
                <li>
                  Selected participants/teams will have to submit their solution (PowerPoint presentation)
                </li>
                <li>
                  The presentation will happen via online mode, which will be notified further.
                </li>
                <li>
                  <b>Solution development</b>: You may use open source/ licensed libraries and other available systems / services such as Google Maps, Facebook Connect, Twitter feeds, AWS services etc.
                </li>
                <li>
                  <b>Code Audits</b>: All submissions may be subject to a Code Audit to ensure that you are abiding by the copyright rules
                </li>
                <li>
                  <b>Intellectual Property</b>: The intellectual property of your code belongs to organiser and will be used in the public interest.
                </li>
                <li>
                  <b>Participation</b>: The Challenge is open and available for pan-India participation.
                </li>
              
              </ul>
           </Typography>
  </Container>

  <Container>
    <Typography component="h5" variant="h5" align="center" color="primary" gutterBottom>
              <u><b>General Rules</b></u>
            </Typography>
     <Typography variant="body1" align="justify" color="black" paragraph>
              <ul>
                <li>
                  Participants shall accept full responsibility for their own work and ensure to work as a team
                </li>
                <li>
                  No participant shall engage in any malicious/illegal/anti-Copy right activities which do not adhere to general code of conduct for developers
                </li>
                <li>
                  Participants will be immediately disqualified If they are found indulging in malpractices.
                </li>
                <li>
                  Participants shall work to follow professional standards, when available, that are most appropriate for the task at hand, departing from these only when ethically or technically justified
                </li>
                <li>
                  Participants shall ensure adequate testing, debugging, complete presentation, review of software and related documents on before submission.
                </li>
                <li>
                  Disclose any conflicts of interest that cannot reasonably be avoided or escaped.
                </li>
                <li>
                Any malicious attempt will lead to disqualification of the team.
                </li>
                <li>
                  <b>Startup Odisha will have the right to choose all submitted solutions and consider it for
deployment by scaling it up, if found feasible.</b>
                </li>
              
              </ul>
           </Typography>
           
  </Container>
    

  <Container>
    <Typography component="h5" variant="h5" align="center" color="primary" gutterBottom>
              <u><b>Contact</b></u>
            </Typography>
        <Typography variant="body1" align="center" color="black" paragraph>
              <p>
                Startup Secretariat, IED Odisha<br/>
        Plot No-123, Sector-A, Zone-A,<br/>
        Mancheswar Industrial Estate,<br/>
        Bhubaneswar- 751010,<br/>
        Odisha, India<br/>

        0674-2585609 | 2587176 | 2587286<br/>
        Fax : 2587176<br/>
        email : startup.odisha@gov.in
              </p>
           </Typography>
           <Typography component="h5" variant="h5" align="center" color="primary">
            <b>“Let's play a part in fighting against #coronavirus!”</b>
           </Typography>
           <br/>
  </Container>



    </main>

      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom color='footerText'>
          A "Startup Odisha" Initiative
        </Typography>
        <Typography variant="subtitle1" align="center" color="footerText" component="p">
          Let's fight against nCOVID-19 together
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}