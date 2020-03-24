import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MenuItem from  '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from  '@material-ui/core/Select';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import Badge from '@material-ui/core/Badge';

import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';

import HeadLogo from './HeadLogo.png';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as LI
} from "react-router-dom";
import firebase from './firebase.js';

function Copyright() {
  return (
    <Typography variant="body2" align="center">
      {'Copyright © Startup Odisha - Govt of Odisha '}
      <Link color="inherit" href="https://startupodisha.gov.in/">
        https://startupodisha.gov.in/
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
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
}));

export default function Register() {
  const classes = useStyles();

  const [teamName, setTeamName] = useState("");
  const [stateUt, setStateUt] = useState("");
  const [city, setCity] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [email, setEmail] = useState("");
  const [regNo, setRegNo] = useState("");
  const [noOfParticipants, setNoOfParticipants] = useState("");
  const [description, setDescription] = useState("");
  const [phase, setPhase] = useState("");
  const [YOL, setYOL] = useState("");
  const [solution, setSolution] = useState("");
  const [exist, setExist] = useState("");
  const [tech, setTech] = useState("");
  const [requirement, setRequirement] = useState("");
  const [openNotify, setOpenNotify] = useState("");
  const [msgNotify, setMsgNotify] = useState("");
  const [category, setCategory] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [pdfLink, setPdfLink] = useState("");

  const [totalRegistration, setTotalRegistration] = useState("");

  useEffect(() => {
    var refD = firebase.database().ref();
    refD.once("value")
        .then(function(snapshot) {
          setTotalRegistration(snapshot.numChildren()); 
        });
  })

  const handleNotifyClose = () => {
    setOpenNotify(false);
  };

  const submit = (teamName, stateUt, city, contactNo, email, regNo, noOfParticipants, description, phase, YOL, solution, exist, tech, requirement, category, videoLink, pdfLink) => {
  let data = {};
  data["Team Name"] = teamName;
  data["State UT"] = stateUt;
  data["City"] = city;
  data["Contact No"] = contactNo;
  data["Email"] = email;
  data["Startup Odisha Registration Number"] = regNo;
  data["No of Participants"] = noOfParticipants;
  data["Idea Description"] = description;
  data["Phase of Idea"] = phase;
  data["Year of Launch"] = YOL;
  data["Problem Solution"] = solution;
  data["If Product Exists"] = exist;
  data["Technology used"] = tech;
  data["Specific requirement for execution"] = requirement;
  data["Category"] = category;
  data["Video Link"] = videoLink;
  data["PDF Link"] = pdfLink;

  let a = Object.keys(data)
  let check = false;
  for (var i = 0; i< a.length; i++){
    if(data[a[i]] === ""){
      setMsgNotify("'" + a[i] + "' field can't be empty")
      setOpenNotify(true)
      check = true;
      break;
    }
  }

  if(check) {
    return false;
  }

  // console.log(data);
  firebase.database().ref().push(data)
          .then(d => {
            setOpenNotify(true)
            setMsgNotify("Idea successfully submitted with ID " + d.path.pieces_[0].toString() + ". Good luck!")
          })
          .catch(e => {
            setOpenNotify(true)
            setMsgNotify("Error occurred while submitting idea")
          })
}

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
    
    <Container component="main" maxWidth="md">
      

      <div className={classes.paper} maxWidth="xs">
        <Avatar className={classes.avatar}>
          <WbIncandescentIcon />
        </Avatar>
        <Typography component="h1" variant="h5" align='center' color="primary">
          STARTUP ODISHA COVID-19 CHALLENGE 2020 Registration
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="fname"
                name="teamName"
                variant="outlined"
                required
                fullWidth
                id="teamName"
                label="Team Name/Applicant Name"
                autoFocus
                value={teamName} 
                onChange={e => setTeamName(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <InputLabel id="demo-simple-select-label">Number of participants</InputLabel>
                <Select
                  variant="outlined"
                  style={{'width' : '100%'}}
                  value={noOfParticipants}
                  onChange={e => setNoOfParticipants(e.target.value)}
                  
                >
                  <MenuItem value="Select">Select</MenuItem>
                  <MenuItem value="1">One</MenuItem>
                  <MenuItem value="2">Two</MenuItem>
                  <MenuItem value="3">Three</MenuItem>
                </Select>
            </Grid>

            <Grid item xs={12} sm={6}>
                <InputLabel id="demo-simple-select-label">State / UT</InputLabel>
                <Select 
                  variant="outlined"
                  style={{'width' : '100%'}}
                  value={stateUt}                   
                  onChange={e => setStateUt(e.target.value)}
                >
                  <MenuItem value="Select">Select</MenuItem>
                  <MenuItem value="Andhra Pradesh">Andhra Pradesh</MenuItem>
                  <MenuItem value="Arunachal Pradesh">Arunachal Pradesh</MenuItem>
                  <MenuItem value="Assam">Assam</MenuItem>
                  <MenuItem value="Bihar">Bihar</MenuItem>
                  <MenuItem value="Chhattisgarh">Chhattisgarh</MenuItem>
                  <MenuItem value="Goa">Goa</MenuItem>
                  <MenuItem value="Gujarat">Gujarat</MenuItem>
                  <MenuItem value="Haryana">Haryana</MenuItem>
                  <MenuItem value="Himachal Pradesh">Himachal Pradesh</MenuItem>
                  <MenuItem value="Jammu and Kashmir">Jammu and Kashmir</MenuItem>
                  <MenuItem value="Jharkhand">Jharkhand</MenuItem>
                  <MenuItem value="Karnataka">Karnataka</MenuItem>
                  <MenuItem value="Kerala">Kerala</MenuItem>
                  <MenuItem value="Madya Pradesh">Madya Pradesh</MenuItem>
                  <MenuItem value="Maharashtra">Maharashtra</MenuItem>
                  <MenuItem value="Manipur">Manipur</MenuItem>
                  <MenuItem value="Meghalaya">Meghalaya</MenuItem>
                  <MenuItem value="Mizoram">Mizoram</MenuItem>
                  <MenuItem value="Nagaland">Nagaland</MenuItem>
                  <MenuItem value="Odisha">Odisha</MenuItem>
                  <MenuItem value="Punjab">Punjab</MenuItem>
                  <MenuItem value="Rajasthan">Rajasthan</MenuItem>
                  <MenuItem value="Sikkim">Sikkim</MenuItem>
                  <MenuItem value="Tamil Nadu">Tamil Nadu</MenuItem>
                  <MenuItem value="Telangana">Telangana</MenuItem>
                  <MenuItem value="Tripura">Tripura</MenuItem>
                  <MenuItem value="Uttaranchal">Uttaranchal</MenuItem>
                  <MenuItem value="Uttar Pradesh">Uttar Pradesh</MenuItem>
                  <MenuItem value="West Bengal">West Bengal</MenuItem>
                  <MenuItem value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</MenuItem>
                  <MenuItem value="Chandigarh">Chandigarh</MenuItem>
                  <MenuItem value="Dadar and Nagar Haveli Daman and Diu">Dadar and Nagar Haveli Daman and Diu</MenuItem>
                  <MenuItem value="Delhi">Delhi</MenuItem> 
                  <MenuItem value="Lakshadeep">Lakshadeep</MenuItem>
                  <MenuItem value="Pondicherry">Pondicherry</MenuItem>
                  <MenuItem value="Ladakh">Ladakh</MenuItem>
                </Select>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="City"
                variant="outlined"
                required
                fullWidth
                id="City"
                label="City"
                value={city} 
                onChange={e => setCity(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="certificate"
                variant="outlined"
                required
                fullWidth
                id="certificateNo"
                label="Startup Odisha registration certificate no (NA if not applicable)"

                value={regNo} 
                onChange={e => setRegNo(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="Contact"
                variant="outlined"
                required
                fullWidth
                id="Contact"
                label="Contact No"
                value={contactNo} 
                onChange={e => setContactNo(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="Email"
                variant="outlined"
                required
                fullWidth
                id="Email"
                label="Email ID"
                value={email} 
                onChange={e => setEmail(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} md={12}>
              <TextField value={description} onChange={e => setDescription(e.target.value)}  style={{'width' : '100%'}} multiline rows={10} required id="standard-required" label="Solution description (Max 500 characters)" />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField value={solution} onChange={e => setSolution(e.target.value)}  style={{'width' : '100%'}} multiline rows={10} required id="standard-required" label="Problem Solution (Max 500 characters)" />
            </Grid>
            <Grid item xs={12} md={6}>
              <InputLabel id="demo-simple-select-label">Phase of Solution</InputLabel>
                <Select
                  variant="outlined"
                  style={{'width' : '100%'}}
                  value={phase} 
                  onChange={e => setPhase(e.target.value)}                  
                >
                  <MenuItem value="Select">Select</MenuItem>
                  <MenuItem value="Ideation Phase">Ideation Phase</MenuItem>
                  <MenuItem value="Proof of concept available">Proof of concept available</MenuItem>
                  <MenuItem value="Working model available">Working model available</MenuItem>
                  <MenuItem value="Testing in process">Testing in process</MenuItem>
                  <MenuItem value="Product available">Product available</MenuItem>
                </Select>
            </Grid>
            <Grid item xs={12} md={6}>
              <InputLabel id="demo-simple-select-label">If Product available, Year of launch</InputLabel>
                <Select
                  variant="outlined"
                  style={{'width' : '100%'}}
                  value={YOL} onChange={e => setYOL(e.target.value)}                  
                >
                  <MenuItem value="NA">NA</MenuItem>
                  <MenuItem value="2020">2020</MenuItem>
                  <MenuItem value="2019">2019</MenuItem>
                  <MenuItem value="2018">2018</MenuItem>
                  <MenuItem value="2017">2017</MenuItem>
                  <MenuItem value="2016">2016</MenuItem>
                  <MenuItem value="2015">2015</MenuItem>
                  <MenuItem value="2014">2014</MenuItem>
                  <MenuItem value="2013">2013</MenuItem>
                  <MenuItem value="2012">2012</MenuItem>
                  <MenuItem value="2011">2011</MenuItem>
                  <MenuItem value="2010">2010</MenuItem>
                  <MenuItem value="2009">2009</MenuItem>
                  <MenuItem value="2008">2008</MenuItem>
                  <MenuItem value="2007">2007</MenuItem>
                  <MenuItem value="2006">2006</MenuItem>
                  <MenuItem value="2005">2005</MenuItem>
                  <MenuItem value="2004">2004</MenuItem>
                  <MenuItem value="2003">2003</MenuItem>
                  <MenuItem value="2002">2002</MenuItem>
                  <MenuItem value="2001">2001</MenuItem>
                  <MenuItem value="2000">2000</MenuItem>
                </Select>
            </Grid>
            <Grid item xs={12} md={6}>
               <InputLabel  id="demo-simple-select-label">Does Related solution already exist?</InputLabel>
                <Select
                  variant="outlined"
                  style={{'width' : '100%'}}
                  value={exist} 
                  onChange={e => setExist(e.target.value)}                  
                >
                  <MenuItem value="Select">Select</MenuItem>
                  <MenuItem value="Yes">Yes</MenuItem>
                  <MenuItem value="No">No</MenuItem>
                </Select>
            </Grid>
            <Grid item xs={12} md={6}>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  variant="outlined"
                  style={{'width' : '100%'}}
                  value={category} 
                  onChange={e => setCategory(e.target.value)}                  
                >
                  <MenuItem value="Select">Select</MenuItem>
                  <MenuItem value="Startup">Startup</MenuItem>
                  <MenuItem value="Individual">Individual</MenuItem>
                </Select>
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField value={tech} onChange={e => setTech(e.target.value)} style={{'width' : '100%'}} multiline rows={10} required id="standard-required" label="Specify Technology, Tools, Architecture used in the solution (Max 500 characters)" />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField value={requirement} onChange={e => setRequirement(e.target.value)} style={{'width' : '100%'}} multiline rows={10} required id="standard-required" label="Any Specific requirement for the execution of your solution (Max 500 characters)" />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="fname"
                name="SolutionPdf"
                variant="outlined"
                fullWidth
                id="pdfLink"
                label="Any Product/Service/Solution Details (Public sharable link of PDF in Google Drive)"
                value={pdfLink} 
                onChange={e => setPdfLink(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="fname"
                name="videoLink"
                variant="outlined"
                fullWidth
                id="videoLink"
                label="Any Video Animation (Public sharable link of Video)"
                value={videoLink} 
                onChange={e => setVideoLink(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            onClick = {() => submit(teamName, stateUt, city, contactNo, email, regNo, noOfParticipants, description, phase, YOL, solution, exist, tech, requirement, category, videoLink, pdfLink)}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Register
          </Button>
        </form>
      </div>
    </Container>

    <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={openNotify}
        autoHideDuration={6000}
        onClose={handleNotifyClose}
        message={msgNotify}
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleNotifyClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />

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
