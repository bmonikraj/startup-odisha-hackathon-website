import React from 'react';
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
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as LI
} from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" align="center">
      {'Copyright © '}
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
}));

export default function Register() {
  const classes = useStyles();

  return (
   <React.Fragment>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <LI to="/"><img height="50px" width="50px" src="https://startupodisha.gov.in/wp-content/uploads/2017/05/logo_odishagov-2.jpg"/></LI>
          </IconButton>
          <Typography variant="h6" className={classes.title} noWrap>
              STARTUP ODISHA HACKATHON 2020
          </Typography>
          <Button variant='contained'><LI to="/" color="inherit" style={{'fontSize' : '10px', 'fontWeight' : 'bold'}}>Home</LI></Button>
          &nbsp;
          <Button variant='contained'><LI to="/register" color="inherit" style={{'fontSize' : '10px', 'fontWeight' : 'bold'}}>Register</LI></Button>
        </Toolbar>
      </AppBar>
    <Container component="main" maxWidth="md">
      

      <div className={classes.paper} maxWidth="xs">
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" align='center' color="primary">
          STARTUP ODISHA HACKATHON 2020 Registration
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
                label="Team Name"
                autoFocus
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <InputLabel id="demo-simple-select-label">Number of participants</InputLabel>
                <Select
                  variant="outlined"
                  style={{'width' : '100%'}}
                  value={"Select"}
                  
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
                  value={"Select"}
                  
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
                autoFocus
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
                autoFocus
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
                autoFocus
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
                autoFocus
              />
            </Grid>

            <Grid item xs={12} md={12}>
              <TextField style={{'width' : '100%'}} multiline rows={10} required id="standard-required" label="Idea description (Max 500 characters)" />
            </Grid>
            <Grid item xs={12} md={6}>
              <InputLabel id="demo-simple-select-label">Phase of Idea</InputLabel>
                <Select
                  variant="outlined"
                  style={{'width' : '100%'}}
                  value={"Select"}
                  
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
                  value={"NA"}
                  
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
               <InputLabel id="demo-simple-select-label">Does Related solution already exist?</InputLabel>
                <Select
                  variant="outlined"
                  style={{'width' : '100%'}}
                  value={"Select"}
                  
                >
                  <MenuItem value="Select">Select</MenuItem>
                  <MenuItem value="Yes">Yes</MenuItem>
                  <MenuItem value="No">No</MenuItem>
                </Select>
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField style={{'width' : '100%'}} multiline rows={10} required id="standard-required" label="Specify Technology, Tools, Architecture used in the solution (Max 500 characters)" />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField style={{'width' : '100%'}} multiline rows={10} required id="standard-required" label="Budget for Prototype Development in Rs (Approx.)  (Max 500 characters)" />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField style={{'width' : '100%'}} multiline rows={10} required id="standard-required" label="Budget for Minimal Viable product in Rs (Approx.) (Max 500 characters)" />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField style={{'width' : '100%'}} multiline rows={10} required id="standard-required" label="Any Specific requirement for the execution of your idea (Max 500 characters)" />
            </Grid>
          </Grid>
          <Button
            type="submit"
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
