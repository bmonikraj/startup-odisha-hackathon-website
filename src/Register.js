import React, { useState } from 'react';
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
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from  '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as LI
} from "react-router-dom";

import Banner from './Hackathon.jpg';

import firebase from './firebase.js';

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
  formroot: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 480,
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

const submit = (teamName, stateUt, city, contactNo, email, regNo, noOfParticipants, description, phase, YOL, solution, exist, tech, protoBudget, prodBudget, requirement) => {
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
  data["Budget for Prototype"] = protoBudget;
  data["Budget for Product"] = prodBudget;
  data["Specific requirement for execution"] = requirement;

  let a = Object.keys(data)
  let check = false;
  for (var i = 0; i< a.length; i++){
    if(data[a[i]] === ""){
      alert("'" + a[i] + "' field can't be empty")
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
            alert("Idea successfully submitted with ID " + d.path.pieces_[0].toString() + ". Good luck!")
          })
          .catch(e => {
            alert("Error occurred while submitting idea")
          })
}

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
  const [protoBudget, setProtoBudget] = useState("");
  const [prodBudget, setProdBudget] = useState("");
  const [requirement, setRequirement] = useState("");

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
	  <Typography component="h5" variant="h5" align="center" color="textPrimary" gutterBottom>
              STARTUP ODISHA HACKATHON 2020 Registration
            </Typography>
	  		<Typography variant="body1" align="center" color="textSecondary" paragraph>
          <form className={classes.root} noValidate autoComplete="off">
            <div>
              <FormControl className={classes.formControl}>
                
                <TextField value={teamName} onChange={e => setTeamName(e.target.value)} required id="standard-required" label="Team Name" />
              </FormControl>
            </div>
            <div>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">State / UT</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
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
                  <MenuItem value="Orissa">Orissa</MenuItem>
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
              </FormControl>
            </div>
            <div>
              <FormControl className={classes.formControl}>
                
                <TextField value={city} onChange={e => setCity(e.target.value)} required id="standard-required" label="City" />
              </FormControl>
            </div>
            <div>
              <FormControl className={classes.formControl}>
                
                <TextField value={contactNo} onChange={e => setContactNo(e.target.value)} required id="standard-required" label="Contact Number" />
              </FormControl>
            </div>
            <div>
              <FormControl className={classes.formControl}>
                
                <TextField value={email} onChange={e => setEmail(e.target.value)} required id="standard-required" label="Email" />
              </FormControl>
            </div>
            <div>
              <FormControl className={classes.formControl}>
                
                <TextField value={regNo} onChange={e => setRegNo(e.target.value)} required id="standard-required" label="Startup Odisha registration certificate no (NA if not applicable)" />
              </FormControl>
            </div>
            <div>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Number of participants</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={noOfParticipants}
                  onChange={e => setNoOfParticipants(e.target.value)}
                  
                >
                  <MenuItem value="Select">Select</MenuItem>
                  <MenuItem value="1">One</MenuItem>
                  <MenuItem value="2">Two</MenuItem>
                  <MenuItem value="3">Three</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div>
              <FormControl className={classes.formControl}>
                
                <TextField value={description} onChange={e => setDescription(e.target.value)} multiline rows={10} required id="standard-required" label="Idea description (Max 500 characters)" />
              </FormControl>
            </div>
            <div>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Phase of Idea</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={phase} onChange={e => setPhase(e.target.value)}
                  
                >
                  <MenuItem value="Select">Select</MenuItem>
                  <MenuItem value="Ideation Phase">Ideation Phase</MenuItem>
                  <MenuItem value="Proof of concept available">Proof of concept available</MenuItem>
                  <MenuItem value="Working model available">Working model available</MenuItem>
                  <MenuItem value="Testing in process">Testing in process</MenuItem>
                  <MenuItem value="Product available">Product available</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">If Product available, Year of launch</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={YOL} 
                  onChange={e => setYOL(e.target.value)}
                  
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
              </FormControl>
            </div>
            <div>
              <FormControl className={classes.formControl}>
                
                <TextField value={solution} onChange={e => setSolution(e.target.value)}  multiline rows={10} required id="standard-required" label="Problem solution (Max 500 characters)" />
              </FormControl>
            </div>
            <div>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Does Related solution already exist?</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={exist} 
                  onChange={e => setExist(e.target.value)}
                  
                >
                  <MenuItem value="Select">Select</MenuItem>
                  <MenuItem value="Yes">Yes</MenuItem>
                  <MenuItem value="No">No</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div>
              <FormControl className={classes.formControl}>
                
                <TextField value={tech} onChange={e => setTech(e.target.value)} multiline rows={10} required id="standard-required" label="Specify Technology, Tools, Architecture used in the solution (Max 500 characters)" />
              </FormControl>
            </div>
            <div>
              <FormControl className={classes.formControl}>
                
                <TextField value={protoBudget} onChange={e => setProtoBudget(e.target.value)} multiline rows={10} required id="standard-required" label="Budget for Prototype Development in Rs (Approx.) (Max 500 characters)" />
              </FormControl>
            </div>
            <div>
              <FormControl className={classes.formControl}>
                
                <TextField value={prodBudget} onChange={e => setProdBudget(e.target.value)} multiline rows={10} required id="standard-required" label="Budget for Minimal Viable product in Rs (Approx.) (Max 500 characters)" />
              </FormControl>
            </div>
            <div>
              <FormControl className={classes.formControl}>
                
                <TextField value={requirement} onChange={e => setRequirement(e.target.value)} multiline rows={10} required id="standard-required" label="Any Specific requirement for the execution of your idea (Max 500 characters)" />
              </FormControl>
            </div>
            <div>
              <FormControl className={classes.formControl}>
                
                <Button color="primary" variant="contained"
                  onClick = {() => submit(teamName, stateUt, city, contactNo, email, regNo, noOfParticipants, description, phase, YOL, solution, exist, tech, protoBudget, prodBudget, requirement)}
                >
                  Submit
                </Button>
              </FormControl>
            </div>
          </form>      
        </Typography>
	</Container>
	
    </main>

      {/* Footer */}
      <footer className={classes.footer} >
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