import React from 'react';
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
import Link from '@material-ui/core/Link';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as LI
} from "react-router-dom";

import Banner from './Hackathon.jpg';

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
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
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

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <LI to="/"><img height="50px" width="50px" src="https://startupodisha.gov.in/wp-content/uploads/2017/05/logo_odishagov-2.jpg"/></LI>
          &nbsp;
          <Typography variant="h6" color="inherit" noWrap>
           	STARTUP ODISHA HACKATHON 2020
          </Typography>
          &nbsp;&nbsp;
          <Button style={{right: "0px"}} color="secondary" variant="contained">
            <LI to="/">Home</LI>
          </Button>
          &nbsp;&nbsp;
          <Button style={{right: "0px"}} color="secondary" variant="contained">
          	<LI to="/register">Register</LI>
          </Button>
        </Toolbar>
      </AppBar>
      <main>
      	 <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={12}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={Banner}
                    title="STARTUP ODISHA HACKATHON BANNER"
                  />
                  
                </Card>
              </Grid>
          </Grid>
        </Container>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h4" variant="h4" align="center" color="textPrimary" gutterBottom>
              STARTUP ODISHA HACKATHON on “Fighting Back nCOVID-19”
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" paragraph>
              Startup Odisha proposes to conduct a virtual hackathon on fighting back nCOVID-19.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Register
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
	
	<Container>
	  <Typography component="h5" variant="h5" align="center" color="textPrimary" gutterBottom>
              Problem Statement
            </Typography>
	  		<Typography variant="body1" align="justify" color="textSecondary" paragraph>
              The current CoVid-19 (Coronavirus) outbreak has seen a heavy and quick deployment of case
tracking platforms- including data visualizations from outbreaks in different countries and
provinces. The testing mechanisms have been built through a network of testing laboratories
that is able to track samples across the board. However, when it comes to tracking community
cases and management of home based quarantines, there is limited capacities in
administrations down the line to monitor, enforce and use the same. Moreover, these capacities
vary greatly across states leading to poorer containment efforts in states with weaker
administrative bandwidths.
           </Typography>
	</Container>
	
	<Container>
	  <Typography component="h5" variant="h5" align="center" color="textPrimary" gutterBottom>
              Main objective of the Hackathon
            </Typography>
	 	 <Typography variant="body1" align="justify" color="textSecondary" paragraph>
              <ul>
              	<li>
              		A self-quarantine management app for citizens affected by nCOVID-19.
              	</li>
              	<li>
              		Safe delivery system of essential commodities during a lockdown.
              	</li>
              	<li>
              		To device a process/ platform to connect students with teacher. Also develop a system to
curb postponement of exams.
              	</li>
              </ul>
           </Typography>
	</Container>

	<Container>
	  <Typography component="h5" variant="h5" align="center" color="textPrimary" gutterBottom>
              Focus Area
            </Typography>
	 	 <Typography variant="body1" align="justify" color="textSecondary" paragraph>
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
	  <Typography component="h5" variant="h5" align="center" color="textPrimary" gutterBottom>
              Outcomes
            </Typography>
	 	 <Typography variant="body1" align="justify" color="textSecondary" paragraph>
              <ul>
              	<li>
              		Top project shall be given awards of INR 1,00,000 (Rupees One Lakh only)
              	</li>
              	<li>
              		Accreditation and Financial support to develop idea into a prototype and final product
              	</li>
              	<li>
              		Jharkhand State Government may work with the winner for further solution development and its implementation by deploying the suggested product/service into the system.
              	</li>
              	<li>
              		Incubation support, consultation support will be provided through Atal Bihari Vajpayee Innovation Lab.
              	</li>
              
              </ul>
           </Typography>
	</Container>

	<Container>
	  <Typography component="h5" variant="h5" align="center" color="textPrimary" gutterBottom>
              Rules and Regulations
            </Typography>
          <Typography variant="body1" align="center" color="textPrimary" gutterBottom>
              Following are the guidelines for Hackathon which need to be followed by each participant and team:
            </Typography>
	 	 <Typography variant="body1" align="justify" color="textSecondary" paragraph>
              <ul>
              	<li>
              		20 Selected participants/ team will have to submit their solution (PowerPoint presentation, working app developed and other) by 29th March 2020, 1500 hrs through https://hackathon.jharkhand.gov.in link.
              	</li>
              	<li>
              		The presentation will happen online via Skype or Zoom app. The details will be further communicated.
              	</li>
              	<li>
              		<b>Teams</b>: The hackathon is a team event with the team size limited to a maximum of 3 people. You are welcomed to register either as an Individual or with your pre-formed teams.
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
              		<b>Participation</b>: The Hackathon is open and available for pan-India participation. Each team can have a maximum participation of 3 members.
              	</li>
              
              </ul>
           </Typography>
	</Container>

	<Container>
	  <Typography component="h5" variant="h5" align="center" color="textPrimary" gutterBottom>
              General Rules
            </Typography>
	 	 <Typography variant="body1" align="justify" color="textSecondary" paragraph>
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
              
              </ul>
           </Typography>
	</Container>
		

	<Container>
	  <Typography component="h5" variant="h5" align="center" color="textPrimary" gutterBottom>
              Contact
            </Typography>
	  		<Typography variant="body1" align="justify" color="textSecondary" paragraph>
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
	</Container>



    </main>

      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          A "Startup Odisha" Initiative
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Let's fight against nCOVID-19 together
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}